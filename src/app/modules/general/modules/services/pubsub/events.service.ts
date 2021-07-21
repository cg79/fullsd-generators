import EEvents from './events';
import { IUser } from '../facade/IUser';
import { IDBUser } from '../facade/IDBUser';
import { Refresher } from './Refresher';
import { observable } from 'mobx';
import {CourseRegistration} from './CourseRegistration';

class EventsService {


  courseLoaded = false;
  @observable course0: CourseRegistration = null;
  @observable course1: CourseRegistration = null;
  @observable course2: CourseRegistration = null;
  refresher: Refresher = null;
  constructor() {
    this.refresher = new Refresher();

    this.subscribe('refresh', null, (val) => {
      this.refreshUI();
    });
  }
  //
  serverUrl = 'http://localhost:3001';
  //serverUrl = '';
  appUrl = '';

  MrUser: IUser = null;


  refreshUI() {
    this.refresher.yyy = Math.random().toString( 36 ).substring( 7 );
  }

  get mrUserValue (): IUser | null {
    // const {_id, nick, course} = this.MrUser;
    // return {_id, nick, course}

    return this.MrUser
  }

  get mrUserValueForDB (): IDBUser | null {
    // const {_id, nick, course} = this.MrUser;
    // return {_id, nick, course}

    return new IDBUser(this.MrUser);
  }

  isAdmin() {
    return this.MrUser && this.MrUser.permission === 1;
  }

  get socketUser () {
    const {MrUser} = this;
    if(!MrUser) {
      return;
    }
    const {token, ...other} = MrUser;
    return other;
  }

  setSocketIdentifier(sid: string) {
    const {MrUser} = this;
    if(!MrUser) {
      return;
    }
    MrUser['sid'] = sid;
  }

  data = {
    test: 1
  };
  events = {};
  subscribe ( eventName, id, callback ) {
    this.events[ eventName ] = this.events[ eventName ] || [];
    this.events[ eventName ].push( {
      id,
      callback,
    } );
  }

  subscribeOnce ( eventName, id, callback ) {
    this.events[ eventName ] = this.events[ eventName ] || [];
    if ( this.events[ eventName ].length ) {
      return;
    }
    this.events[ eventName ].push( {
      id,
      callback,
    } );
  }
  unsubscribe = ( eventName, id = null ) => {
    if ( this.events[ eventName ] ) {
      for ( let i = 0; i < this.events[ eventName ].length; i++ ) {
        if ( this.events[ eventName ][ i ].id === id ) {
          this.events[ eventName ].splice( i, 1 );
          break;
        }
      }
    }
  }
  
  publish  = ( eventName, data = null, id = null, keytoStore = '' ) => {
    if ( keytoStore ) {
      this.data[ keytoStore ] = {
        ...data
      };
    }
    console.log( 'EVENTS SERVICE publish ', eventName, data, id );
    const subs = this.events[ eventName ];
    if ( subs && subs.length ) {
      subs.forEach( instance => {
        if ( id ) {
          if ( instance.id === id ) {
            instance.callback( data );
          }
        }
        else {
          instance.callback( data );
        }
      } );
    } else {
      console.log('NO SUBS for EVENT ', eventName);
      // 
    }
  }

  notifyAll ( eventName, data = null ) {
    if ( this.events[ eventName ] ) {
      this.events[ eventName ].forEach( instance => {
        instance.callback( data );
      } );
    }
  }

  showNotificationSuccess(title: string, message: string, timeOut= 2000) {
    this.publish( EEvents.Question_ADDED, {
      message,
      title,
      type: 3,
      timeOut,
    }, null );
  }

  showNotificationError(title: string, message: string, timeOut= 2000) {
    this.publish( EEvents.Question_ADDED, {
      message,
      title,
      type: 2,
      timeOut,
    }, null );
  }

  setKeyValue ( key: string, value: any ) {
    this.data[ key ] = value;
  }

  getKeyValue ( key: string ) {
    return this.data[ key ];
  }

  userLoggedIn ( userData ) {
    this.MrUser = new IUser(userData, this.serverUrl);

    this.publish( EEvents.Login, this.MrUser, null, EEvents.LOGGEDUSER );
  }

  userUpdated ( userData ) {
    const updatedUser = new IUser(userData, this.serverUrl);
    this.MrUser.firstName = updatedUser.firstName;
    this.MrUser.lastName = updatedUser.lastName;
    this.MrUser.nick = updatedUser.nick;
    this.MrUser.coordinates = updatedUser.coordinates;
    this.MrUser.phone = updatedUser.phone;
    this.MrUser.logo = updatedUser.logo;
    this.MrUser.image = updatedUser.image;

    this.publish( EEvents.Login, this.MrUser, null, EEvents.LOGGEDUSER );
  }

  userLoadedFromStorage(userData) {
    this.MrUser = new IUser(userData, this.serverUrl);

  }
  userLoggedOut () {

    this.MrUser = null;
    this.publish( EEvents.Logout, null, null, null );
  }

  // 1 = warnig, 2 = error, 
  triggerToaster(title, message,type) {
    this.publish(EEvents.TOASTER_NOTIF, {
      title,
      message,
      type
    } )
  }

  userDataChanged(data: any) {
    this.MrUser = new IUser({
      ...this.MrUser,
      ...data
    });
    this.publish( EEvents.Login, this.MrUser, null, EEvents.LOGGEDUSER );
  }

  paymentReceived(data) {
    if(!this.MrUser) {
      return;
    }

    const galbeni = this.MrUser.amount + data.galbeni;
    this.userDataChanged({
      amount: galbeni
    });
  }

  paymentSpent(data) {
    if(!this.MrUser) {
      return;
    }

    const galbeni = this.MrUser.amount - data.galbeni;
    this.userDataChanged({
      amount: galbeni
    });
  }
  
  memory = {};

}

export default new EventsService();
