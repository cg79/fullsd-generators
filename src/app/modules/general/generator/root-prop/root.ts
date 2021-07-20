
import { observable, computed, action, autorun, toJS } from 'mobx';
import { Injectable } from '@angular/core';
import { IRootProp } from './rootProp';

@Injectable()
export class IRoot {

  @observable name = '';
  @observable props: IRootProp[] = [];
  guid = '';
  @observable key = null;

  constructor(data: any = {}) {
    const { name, keys } = data;
    this.name = name;
    this.guid = this.newGuid();

    for (let i = 0; i < keys.length; i++) {
      this.props.push(new IRootProp(keys[i]));
    }
  }

  newGuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });

}
