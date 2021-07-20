
import { observable, computed, action, autorun, toJS } from 'mobx';
import { Injectable } from '@angular/core';
import { CInputBase } from './CInputBase';

@Injectable()
export class CLabel extends CInputBase {
  toString() {
    const { text, id, name, className, renderChildrens } = this;
    let temp = '<label';
    if (id) {
      temp = `${temp} id="${id}"`;
    }
    if (id) {
      temp = `${temp} name="${name}"`;
    }
    if (className) {
      temp = `${temp} class="${className}"`;
    }
    temp = `${temp}>`;

    return `${temp} ${text} ${renderChildrens} </label>`;
  }
}
