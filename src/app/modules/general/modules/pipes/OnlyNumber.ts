
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'number',  pure: false })

  export class OnlyNumber implements PipeTransform {

    constructor() {

    }
    transform(key: string): string {
    //  console.log('key ', key);
    
      return key.replace(/[^0-9]+/g, '');  
    }

  }
