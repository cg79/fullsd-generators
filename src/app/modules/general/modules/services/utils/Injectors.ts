

class Injectors {

  wndDoc = null;
  constructor() {
    
    if(typeof document !== "undefined") {
      this.wndDoc = document;
    }
    // if(typeof window !== "undefined") {
    //   this.wndDoc = window;
    // }
  }

  static cachedScripts = [];
  loadExternalStyle(styleUrl: string) {
    
    
    if(!this.wndDoc) {
      console.log(new Error().stack);
      return Promise.reject('no wnd loadExternalStyle ' + styleUrl);
    }
    return new Promise((resolve, reject) => {
      const styleElement = this.wndDoc.createElement('link');
      styleElement.rel = 'stylesheet';
      styleElement.type = 'text/css';

      styleElement.href = styleUrl;
      styleElement.onload = (val) => {
        resolve(val);
      };
      styleElement.onerror = ex => {
        reject(ex);
      };
      styleElement.onabort = val => {
      };
      this.wndDoc.head.appendChild(styleElement);
    });
  }

  loadExternalScript(scriptUrl: string): Promise<any> {
    
    if(!this.wndDoc) {
      return Promise.reject('no wnd loadExternalScript');
    }
    if(Injectors.cachedScripts.indexOf(scriptUrl) > -1) {
      return Promise.resolve(true);
    }
    return new Promise((resolve, reject) => {
      const scriptElement = this.wndDoc.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = () => {
        
        Injectors.cachedScripts.push(scriptUrl);
        return resolve(true);
      };
      scriptElement.onerror = (ex) => {
        
        return reject(ex);
      };
      this.wndDoc.body.appendChild(scriptElement);
    });
  }

  async loadExternalScripts(scriptsArr): Promise<any> {
    for(var i=0;i< scriptsArr.length; i++) {
      await this.loadExternalScript(scriptsArr[i]);
    }

    return Promise.resolve(true);
  }

  async loadExternalStyles(scriptsArr): Promise<any> {
    for(var i=0;i< scriptsArr.length; i++) {
      await this.loadExternalStyle(scriptsArr[i]);
    }

    return Promise.resolve(true);
  }

  getDataFromUrl(url) {
    return new Promise((resolve, reject) => {
      var urlRequest = new XMLHttpRequest();
      urlRequest.open('GET', url, true);
      urlRequest.responseType = 'text';// "arraybuffer";
      urlRequest.onload = function (event) {
        if (urlRequest.status == 200) {
          resolve(urlRequest.response);
        } else {
          reject(new Error('code not 200, ' + urlRequest.status));
        }
      };
      urlRequest.onerror = function (ex) {
        reject(ex);
      };

      urlRequest.send(null);
    });

  }


  // importSwiper(initializeSwiper) {
  //   import( 'ngx-useful-swiper' ).then( m => {
  //     console.log( m );

  //     // Injectors.loadExternalStyles('assets/swiper0/css/swiper.min.css')
  //     this.loadExternalStyle( 'assets/swiper/swiper-bundle.min.css' )
  //       .then( ( el ) => {
  //         initializeSwiper();

  //       } )
  //       .catch( ( ex ) => {
  //         console.log( 'exception on style load ', ex );

  //       } );
      
  //   } );
  // }

  //THIS APPLY ONLY TO COMPONENTS? 
  // importModule ( modulePath: string ) {
  //   return new Promise( ( resolve, reject ) => {
  //     import( modulePath )
  //       .then( importedModule => resolve( importedModule ) )
  //       .catch( ex => reject( ex ) )
  //   } );
  // }


}

export default new Injectors();
