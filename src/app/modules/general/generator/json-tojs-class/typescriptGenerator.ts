
import { observable, computed, action, autorun, toJS } from 'mobx';
import { Injectable } from '@angular/core';
import { IRoot } from '../root-prop/root';
import { IRootProp } from '../root-prop/rootProp';

@Injectable()
export class TypescriptGenerator {

  @observable name = '';
  guid = '';
  @observable key = null;

  constructor ( data: any = {} ) {

  }

  createDestructorObj ( keys ) {
    const arr = [];
    keys.forEach( el => {
      arr.push( `${ el.key }` );
    } );

    return `const { ${ arr.join( ", " ) } } = obj; `
  }

  createThisProperties ( keys ) {
    const arr = [];
    keys.forEach( el => {
      const { name, isPrivate, type, isRequired, customtype } = el;
      const defautValue = this.getDefaultValueByType( type );

      const Cname = this.capitalize( name );

      if ( isRequired ) {
        arr.push( `
        if(!${name }) {
          throw 'No ${name }';
        }
        `);
      }

      if ( el.root ) {
        if ( el.root.type === 'array' ) {
          arr.push( `
        this.${name } = this.add${ Cname }(${ name } || ${ defautValue });` );
        }
      } else {

        if ( isPrivate ) {
          arr.push( `
        let ${name } = ${ name } || ${ defautValue };` );
        } else {
          if(customtype) {
            arr.push( `
            this.${name } = ${ name } ? new ${customtype}(${ name }) : ${ defautValue };` );
          }else {
            arr.push( `
            this.${name } = ${ name } || ${ defautValue };` );
            }
          }
          
      }

    } );

    return arr.join( "" );
  }

  createClassFunctions ( keys ) {
    const arr = [];
    keys.forEach( ( el: IRootProp ) => {
      
      const Cname = this.capitalize( el.key );

      if(el.getset) {
        const propType = el.customtype ? ` : ${el.customtype}` : '';

        arr.push( `
        get ${el.key }() ${propType} {
          return this._${el.key };
        };
        `)

        arr.push( `
          set ${el.key }(value ${propType}) {
            this._${el.key } = value;
          };
          `)
        

      } else {
        if ( el.get ) {
          arr.push( `
          get${Cname }() {
            return this.${el.key };
          };
          `)
        }
  
        if ( el.set ) {
          arr.push( `
          set${Cname }(value) {
            this.${el.key } = value;
          };
          `)
        }
      }

    } );

    return arr.join( "" );
  }

  createArrayMethods ( node: IRoot, keys: IRootProp[] ) {
    const arr = [];
    const arrays = keys.filter( el => el.type === 'array' );

    arrays.forEach( el => {
      arr.push( this.createArrayMethod( el, node ) );
    } );

    return arr.join( '' );
  }

  capitalize ( source ) {
    if ( !source ) {
      return '';
    }
    return source.charAt( 0 ).toUpperCase() + source.slice( 1 );
  }
  createArrayMethod ( prop, node: IRoot ) {
    const arr = [];
    const Cname = this.capitalize( prop.name );
    const name = prop.name;
    const keyName = node.key;
    const arrayClassName = prop.root ? prop.root.name : '';

    let m = '';
    //add
    if ( arrayClassName ) {
      m = `
      add${Cname }(value){
        const instance = new ${arrayClassName }(value);
        this.${name }.push(instance);
      }
    `;
    } else {
      m = `
        add${Cname }(value){
          this.${name }.push(value);
        }
      `;
    }
    arr.push( m );

    if ( arrayClassName ) {
      m = `
      add${Cname }(values){
        values.forEach(el => {
          const instance = new ${arrayClassName }(el);
          this.${name }.push(instance);
        });
      }
    `;
    } else {
      m = `
      add${Cname }s(values){
        values.forEach(el => {
          this.${name }.push(el);
        });
      }
    `;
    }
    arr.push( m );

    //add from list

    //filter
    // m = `
    // filter${name}(value){
    //   this.${name}.push(value);
    // }
    // `;
    // arr.push(m);

    //remove

    //find

    if ( !keyName ) {
      m = `// key name used for filtering by id is not set `;
      arr.push( m );
    }
    m = `
      remove${Cname }(value){
        return this.${name }.filter(el => el.${ keyName } === value);
      }
    `;
    arr.push( m );

    //sort by value
    m = `
    sort${Cname }ByValue(propName, asccending = true){
      return ${name }.sort((a, b)  => {
        if (asccending) {
          return a.propName - b.propName;
        }
        return b.propName - a.propName;
      });
    }
  `;
    arr.push( m );

    //sort by string
    //   m = `
    //   sort${name}ByValue(propName, asccending = true){
    //     return ${name}.sort((a, b)  => {
    //       if (asccending) {
    //         return a.propName - b.propName;
    //       }
    //       return b.propName - a.propName;
    //     });
    //   }
    // `;
    // arr.push(m);

    return arr.join( "" );
  }

  getDefaultValueByType ( type ) {
    switch ( type ) {
      case 'array':
        return '[]';
      case 'number':
        return '0';
      case 'string':
        return '';
      case 'object':
        return '';
      case 'boolean':
        return 'false';
      default:
        return 'null';
    }
  }

  trackEvents = false;
  useuniqueid = false;
  createPropDeclarations ( keys ) {
    const arr = [];

    if(this.trackEvents) {
      arr.push( `
        const events = [];  
      ` );
    }
    keys.forEach( el => {
      const { isPrivate, type, observable, customtype, getset } = el;

      let { name} = el;
      if(getset) {
        name = '_' + name;
      }
      

      const obs = observable ? '@observable' : '';
      const defaultValue = this.getDefaultValueByType( type );
      let propType = '';
      if ( el.root ) {
        propType = ` : ${ el.root.name }`;
        if ( type === 'array' ) {
          propType += '[] ';
        }
      } else {
        if(customtype) {
          propType = ` : ${ customtype }`;
        }
        
      }
      if ( isPrivate ) {
        arr.push( `
        ${obs } ${ name } ${ propType }  = ${ defaultValue };` );
      } else {
        arr.push( `
        ${obs }  ${ name } ${ propType } = ${ defaultValue };` );
      }

    } );

    return arr.join( "" );
  }

  createInterface ( keys ) {
    const arr = [];
    keys.forEach( el => {
      const { name, isPrivate, type, isInterface } = el;
      if ( isInterface ) {
        arr.push( `
          ${name } : ${ type };` );
      }
    } );

    return arr.join( "" );
  }

  createThisFunctions ( keys ) {
    const arr = [];
    keys.forEach( el => {
      arr.push( `
        this.set${el.key } = (value) => {
          this.${el.key } = value;
        };
        `);

      arr.push( `
        this.get${el.key } = () => {
          return this.${el.key };
        };
        `);
    } );

    return arr.join( "" );
  }

  newGuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function ( c ) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : ( r & 0x3 | 0x8 );
    return v.toString( 16 );
  } );

  createAsClass ( root ) {
    const { props } = root;

    const propDeclarations = this.createPropDeclarations( props );
    const thisProps = this.createThisProperties( props );
    const functions = this.createClassFunctions( props );
    
    const arrayMethods = this.createArrayMethods( root, props );
    // if(root)

    // import { observable, computed, action, autorun, toJS } from 'mobx';
    // import { Injectable } from '@angular/core';

    // @Injectable()

    let result = `
    
    export class ${root.name } {

    ${propDeclarations }

    constructor(obj) {
      ${this.createDestructorObj( props ) }
      ${thisProps }
    }
    ${functions }
    '// methods'
    ${arrayMethods }
    `;

    const interfaces = this.createInterface( props );

    return `
      ${interfaces }
      ${result }

    }
    `;
  }

}
