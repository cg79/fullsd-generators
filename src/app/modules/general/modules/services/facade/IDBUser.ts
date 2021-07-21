
import { observable, action } from 'mobx';

export class IDBUser {

  _id = '';
  nick = '';
  constructor ( obj ) {
    if ( !obj ) {
      return;
    }
    const { _id, nick } = obj;
    this._id = _id;
    this.nick = nick;

  }
}
