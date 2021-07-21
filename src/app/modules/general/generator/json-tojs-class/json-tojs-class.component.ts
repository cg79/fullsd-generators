import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { observable, action} from 'mobx';
import { toJson } from 'really-relaxed-json';
import { IRootProp } from '../root-prop/rootProp';
import { IRoot } from '../root-prop/root';
import { js } from 'js-beautify';
import { TypescriptGenerator } from './typescriptGenerator';
import JSONToBeProcessed from '../JSONToBeProcessed';

import {GeneratedCode} from './GeneratedCode';

// var expressionify = require('../mongo/mongo_expression/expressionify');

@Component({
  selector: 'app-json-tojs-class',
  templateUrl: './json-tojs-class.component.html',
  styleUrls: ['./json-tojs-class.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonTojsClassComponent implements OnInit {

  @observable inputJson: JSONToBeProcessed = new JSONToBeProcessed();
  @observable generatedJsClass = '//';

  @observable root = null;
  @observable mode = 1;

  useES6 = false;
  useEmbeded = true;
  embededName = 'person';

  externalConfig: any = {
    lineNumbers: true
  };

  @action codeIsChanged(text) {
    // this.text = text;
  }
  code: GeneratedCode  = null;

  constructor() { 
    this.code = new GeneratedCode();
  }

  ngOnInit() {
  }

  mongoex ='a>2';

  mongoEx() {
  //   // MExpression aaa = new MExpression();
  //   var aaa = new MExpression1();
  //  var x = aaa.createMongoCondition(this.mongoex);
  //  console.log(x);
    // true

    // aaa._
  }

  beautyfyJs(source) {
    const res = js(source);
    return res;

  }

  generateKeys() {
    debugger;
    try {
      const goodJsonString = toJson(this.inputJson.jsonAsString .toString());
      const jsonObj = JSON.parse(goodJsonString);

      const props = this.createRootKeysFromObject(jsonObj);
      this.root = new IRoot(props);
    }
    catch (e) {
      this.code.generatedJsClass = e;
    }
  }

  trackEvents = false;
  useuniqueid = false;
  startCodeGenerator(node: IRoot) {
    
    this.generatedJsClass = "";
    this.generateJsClassFromJson(node);
    this.code.generatedJsClass = this.beautyfyJs(this.generatedJsClass);
  }
  generateJsClassFromJson(node: IRoot) {
    if (!node) {
      return;
    }
    try {
      // let root = this.props;
      // if (!root) {
      //   this.generateKeys();
      //   root = this.props;
      // }
      // const goodJsonString = toJson(this.text.toString());
      // const jsonObj = JSON.parse(goodJsonString);

      // const keys = this.createRootKeysFromObject(jsonObj);

      let usedFunc = this.createJsClass.bind(this);
      if (this.mode == 1) {
        usedFunc = this.createFunctionObject.bind(this);
      }
      if (this.mode == 2) {
        usedFunc = this.createAsClass.bind(this);
      }
      if(this.mode == 3) {
        const inst = new TypescriptGenerator();
        inst.trackEvents = this.trackEvents;
        inst.useuniqueid =this.useuniqueid;
        usedFunc = inst.createAsClass.bind(inst);
      }
      const jsClass = usedFunc(node);

      this.generatedJsClass += jsClass;

      node.props.forEach(prop => {
        if (prop.root) {

          this.generateJsClassFromJson(prop.root);
        }
      });
    }
    catch (e) {
      this.generatedJsClass = e;
    }
  }

  createAsClass(root) {
    const { props } = root;

    const thisProps = this.createThisProperties(props);
    const functions = this.createClassFunctions(props);
    const propDeclarations = this.createPropDeclarations(props);
    const arrayMethods = this.createArrayMethods(root, props);
    // if(root)

    let result = `
    class ${root.name} {

    ${propDeclarations}

    constructor(obj) {
      ${this.createDestructorObj(props)}
      ${thisProps}
    }
    ${functions}
    ${arrayMethods}
    `;

    return `
      ${result}

    }
    `;
  }

  createFunctionObject(root) {
    const { props } = root;
    let result = `
    // const instance = new ${root.name}({...});
    function ${root.name}(obj){`;

    const thisPorps = this.createThisProperties(props);
    debugger;
    // const functions = this.createThisFunctions(props);

    const gettersSetters = this.createGettersAndSetters(root.name, props);
    
    return `
      ${result}
      ${this.createDestructorObj(props)}
      ${thisPorps}
      
    }

    ${gettersSetters}
    `;

    // 
  }

  createDestructorObj(keys) {
    const arr = [];
    keys.forEach(el => {
      arr.push(`${el.key}`);
    });

    return `const { ${arr.join(", ")} } = obj; `
  }

  createThisProperties(keys) {
    const arr = [];
    keys.forEach(el => {
      const { name, isPrivate, type, isRequired } = el;
      const defautValue = this.getDefaultValueByType(type);

      const Cname = this.capitalize(name);

      if(isRequired) {
        arr.push(`
        if(!${name}) {
          throw 'No ${name}';
        }
        `);
      }

      if(el.root && el.root.type === 'array') {
        arr.push(`
        this.${name} = this.add${Cname}(${name} || ${defautValue});`);
      }else {

      if (isPrivate) {
        arr.push(`
        let ${name} = ${name} || ${defautValue};`);
      } else {
        arr.push(`
        this.${name} = ${name} || ${defautValue};`);
      }
    }

    });

    return arr.join("");
  }

  createGettersAndSetters(onjName, keys) {
    const arr = [];
    keys.forEach(el => {
      // const { name, isPrivate, type, isRequired } = el;
      arr.push(this.createGetterAndSetter(onjName, el))

    });

    return arr.join("");
  }

  createGetterAndSetter(objName, prop){
    let getset = `
      get : function() {
        return this.${prop.name};
      },
      set : function(value) {
        return this.${prop.name} = value;
      }
    `;
    
    const response = `
    Object.defineProperty(${objName}.prototype, '${prop.name}', {
      ${getset}
    });`;

    return response;
  }

  createArrayMethods(node: IRoot, keys: IRootProp[]) {
    const arr = [];
    const arrays = keys.filter(el => el.type === 'array');

    arrays.forEach(el => {
      arr.push(this.createArrayMethod(el, node));
    });

    return arr.join('');
  }

  capitalize(source) {
    if(!source) {
      return '';
    }
    return source.charAt(0).toUpperCase() + source.slice(1);
  }
  createArrayMethod(prop, node: IRoot) {
    const arr = [];
    const Cname = this.capitalize(prop.name);
    const name = prop.name;
    const keyName = node.key;
    const arrayClassName = prop.root ? prop.root.name : '';

    let m = '';
    //add
    if (arrayClassName) {
      m = `
      add${Cname}(value){
        const instance = new ${arrayClassName}(value);
        this.${name}.push(instance);
      }
    `;
    } else {
      m = `
        add${Cname}(value){
          this.${name}.push(value);
        }
      `;
    }
    arr.push(m);

    if (arrayClassName) {
      m = `
      add${Cname}(values){
        values.forEach(el => {
          const instance = new ${arrayClassName}(el);
          this.${name}.push(instance);
        });
      }
    `;
    } else {
      m = `
      add${Cname}s(values){
        values.forEach(el => {
          this.${name}.push(el);
        });
      }
    `;
    }
    arr.push(m);

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

    if(!keyName) {
      m = `// key name used for filtering by id is not set `;
      arr.push(m);
    }
    m = `
      remove${Cname}(value){
        return this.${name}.filter(el => el.${keyName} === value);
      }
    `;
    arr.push(m);

    //sort by value
    m = `
    sort${Cname}ByValue(propName, asccending = true){
      return ${name}.sort((a, b)  => {
        if (asccending) {
          return a.propName - b.propName;
        }
        return b.propName - a.propName;
      });
    }
  `;
    arr.push(m);

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

    return arr.join("");
  }

  getDefaultValueByType(type) {
    switch (type) {
      case 'array':
        return '[]';
      case 'number':
        return '0';
      case 'string':
        return "''";
      case 'object':
        return '';
      case 'boolean':
        return 'false';
      default:
        return 'null';
    }
  }

  createPropDeclarations(keys) {
    const arr = [];
    keys.forEach(el => {
      const { name, isPrivate, type } = el;
      const defaultValue = this.getDefaultValueByType(type);
      if (isPrivate) {
        arr.push(`
        ${name} = ${defaultValue};`);
      } else {
        arr.push(`
        ${name} = ${defaultValue};`);
      }

    });

    return arr.join("");
  }

  createThisFunctions(keys) {
    const arr = [];
    keys.forEach(el => {
      arr.push(`
        this.set${el.key} = (value) => {
          this.${el.key} = value;
        };
        `);

      arr.push(`
        this.get${el.key} = () => {
          return this.${el.key};
        };
        `);
    });

    return arr.join("");
  }

  createClassFunctions(keys) {
    const arr = [];
    keys.forEach(el => {
      const Cname = this.capitalize(el.key);
      arr.push(`
        set${Cname}(value) {
          this.${el.key} = value;
        };
        `)

      arr.push(`
        get${Cname}() {
          return this.${el.key};
        };
        `)
    });

    return arr.join("");
  }

  createJsClass(obj) {
    const keys = this.createRootKeysFromObject(obj);
    let result = "";
    result = this.createFunctionsForKeys(keys);
    return result;

  }

  createRootKeysFromObject(obj) {

    const keys = Object.keys(obj)
      .map((key) => ({
        ...this.createKeyValueType(obj, key)
      })
      );
    const root = {
      name: '',
      keys
    };
    return root;
  }

  createFunctionsForKeys(keys) {
    let func = '';
    let usedFunctinon = this.createFunctionsForKey;
    if (this.useES6) {
      usedFunctinon = this.createES6FunctionsForKey;
    }
    keys.forEach(element => {
      func += usedFunctinon(element);
    });
    return func;
  }

  createFunctionsForKey(key) {
    let setF = "";
    setF = `
    function set${key.key}(obj, value) {
      obj[${key.key}] = value;
    }

    function get${key.key}(obj) {
      return obj[${key.key}];
    }

    `;
    return setF;
  }

  createES6FunctionsForKey(key) {
    let setF = "";
    setF = `
    set${key.key} = (obj, value) => {
      obj[${key.key}] = value;
    }

    get${key.key} = (obj) => {
      return obj[${key.key}];
    }

    `;
    return setF;
  }

  newGuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });

  createKeyValueType(obj, key) {
    const value = obj[key];
    let type = value ? typeof (value) : '';
    if (type === 'object' && value.constructor.name === 'Array') {
      type = 'array';
    }

    const result: any = {
      key,
      name: key,
      value,
      type,
      isPrivate: false,
      isInterface: false,
      getset: false,
      get: true,
      set: true,
      observable: false,
      isRequired: false,
      // constant: false,
      guid: this.newGuid()
    };
    if (result.type === 'array' && value.length) {
      result.root = this.createRootKeysFromObject(value[0]);
    }

    if (result.type === 'object') {
      result.root = this.createRootKeysFromObject(value);
    }

    return result;
  }

}
