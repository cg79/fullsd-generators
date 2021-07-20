
import { observable, computed, action, autorun, toJS } from 'mobx';
import { CControl } from './CControl';

export class CInputBase extends CControl {

  _id = '';

  text = '';
  id = '';
  name = '';
  className = '';

  constructor(data) {
    super(data);
    const { _id, text, id, name, className } = data;
    this._id = _id;
    this.name = name;
    this.id = id;
    this.className = this.className;
    this.text = text;
  }

  public toString(): string {
    throw new Error("Method not implemented.");
  }

}
