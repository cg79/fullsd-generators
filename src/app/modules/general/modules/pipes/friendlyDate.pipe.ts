
import {Pipe, PipeTransform} from '@angular/core';
import helpers from '../services/utils/AppHelpers';

  @Pipe({name: 'friendlyDate'})

  export class FrieldlyDate implements PipeTransform {
    transform(dateValue) {

      return helpers.friendlyDate(dateValue);
    }

  }
