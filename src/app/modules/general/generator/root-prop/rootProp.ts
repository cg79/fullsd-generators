
import { observable, computed, action, autorun, toJS } from 'mobx';
import { Injectable } from '@angular/core';
import { IRoot } from './root';

@Injectable()
export class IRootProp {
  @observable value;
  @observable key;
  @observable type;
  @observable isPrivate = false;

  @observable getset = false;
  @observable get = true;
  @observable set = true;
  @observable isObservable = false;
  @observable isRequired = false;
  @observable isInterface = false;

  @observable customtype = '';

  

  @observable name = '';
  guid = '';
  @observable root: IRoot = null;
  // constant: false

  constructor(obj) {
    const { key, value, type, isPrivate, getset, get, set, isObservable, name, root,  guid, isRequired, isInterface, customtype } = obj;
    this.key = key;
    this.value = value;
    this.type = type;
    this.isPrivate = isPrivate;
    this.get = get;
    this.set = set;
    this.isObservable = isObservable;
    this.name = name;
    this.guid =guid;
    this.isRequired = isRequired;
    this.isInterface = isInterface;
    this.customtype = customtype;
    this.getset = getset;

    if (root) {
      this.root = new IRoot(root);
    }
  }

}
