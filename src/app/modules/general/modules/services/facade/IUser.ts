
import { observable, action } from 'mobx';

export class IUser {

  _id = '';
  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  nick = '';
  @observable online = false;
  @observable coordinates: any = {};
  logo: any = {};
  image: any = {};
  @observable amount = 0;

  token = '';

  isGuest: true;

  //should save to storage
  logocss : string;

  cr: 1200;
  @observable cready: false;

  permission = 0;

  bulletKey = '';

  constructor ( obj, serverUrl = '' ) {
    if ( !obj ) {
      return;
    }
    const { _id, firstName, lastName, email, online, phone, coordinates, logo, amount, nick, token, cr = 1200, permission = 0, bulletKey = '' } = obj;
    this.permission = permission;
    this.phone = phone;
    this.firstName = firstName;
    this.lastName = lastName;
    this._id = _id;
    this.email = email;
    this.online = online;
    this.coordinates = coordinates;
    this.logo = logo;
    this.amount = amount;
    this.token = token;
    this.nick = nick;
    // if ( logo && logo.filePath ) {
    //   this.image = serverUrl + logo.filePath;
    // }
    this.image = this.fromLogo(serverUrl, logo);
    
    this.cr = cr;
    this.cready = false;
    this.bulletKey = bulletKey;

  }

   fromLogo(serverUrl, obj: any = {}){
    const {dir, list} = obj;
    if(!dir || !list || !list.length) {
      return;
    }
    const fileName = list[0];
    const fileUrl = `${serverUrl }/${ dir }/${fileName}`;
    
    

    return fileUrl;
  }

  @action setOnline () {
    this.online = true;
  }

  @action setOfline () {
    this.online = false;
  }

  @action setNick ( value ) {
    this.nick = value;
  }

}
