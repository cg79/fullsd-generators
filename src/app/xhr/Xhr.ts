import { ResponseError } from "./ResponseError";

// var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
// var theUrl = "http://localhost:3001/api/pub/bullet";
// xmlhttp.open("POST", theUrl);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" } }));

export default new class Xhr {

    private http ( options ): Promise<any> {
        
        return new Promise(  ( resolve, reject ) => {
      
            const xmlHttpObject = window.XMLHttpRequest;
            const xhr = new xmlHttpObject();
            // xhr.withCredentials = true;

            xhr.open( options.method, options.url );
      
            const addHeaders = function ( headers ): void {
                if ( !headers ) {
                    return;
                }
                Object.keys( headers ).forEach( function ( key ) {
                    xhr.setRequestHeader( key, headers[key] )
                } )
            }
      
            xhr.onload = function onload (): void {
                if ( this.status >= 200 && this.status < 300 ) {
                    return resolve( new ResponseError( this.status, JSON.parse(this.response) ) );
                }
                return reject( new ResponseError( this.status, this.response ) )
            }
      
            xhr.onerror = function onerror (): void {
                const error = new ResponseError( this.status, this.response );
                return reject( error );
            }
      
            addHeaders( options.headers )
            xhr.send( options.data );
        } )
    }

    post (  url: string, data: any, headers = {} ): Promise<any> {
        return this.http( {
            headers,
            method: 'POST',
            url,
            data,
        } );
    }

    get ( url, headers = {} ): Promise<any> {
        return this.http( {
            headers,
            method: 'GET',
            url,
        } );
    }

}