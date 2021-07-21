
import {Pipe, PipeTransform} from '@angular/core';
import LocalizationService  from '../services/localization/localization.service';

@Pipe({name: 'ls',  pure: false })

  export class LS implements PipeTransform {

    constructor() {

    }
    transform(key: string): string {
    //  console.log('key ', key);
      return LocalizationService.language[key] || key;
    }

  }
