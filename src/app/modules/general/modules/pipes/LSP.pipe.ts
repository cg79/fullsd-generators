
import {Pipe, PipeTransform} from '@angular/core';
import LocalizationService  from '../services/localization/localization.service';

@Pipe({name: 'lsp',  pure: false })

  export class LSP implements PipeTransform {

    constructor() {

    }
    transform(key: string): string {
    //  console.log('key ', key);
      const keys = key.split('.');
      var val = LocalizationService.language[keys[0]];
      if(!val) {
        return key;
      }
      for(var i=1;i<keys.length;i++) {
        val = val[keys[i]]
      }
      return val;
    }

  }
