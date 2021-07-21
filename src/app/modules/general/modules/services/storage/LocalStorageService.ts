
 class LocalStorageService {

  storage: any;
  constructor() {
    if(typeof localStorage !== "undefined") {
      this.storage = localStorage;
    }
  }
  get ( key ) {
    if(!this.storage) {
      return;
    }
    const v = this.storage.getItem( key );
    if(!v) {
      return null;
    }
    try{
      return JSON.parse(v);
    }
    catch(ex) {
      return null;
    }
  }

  add ( key, value ) {
    if(!this.storage) {
      return;
    }
    if(!value) {
      return;
    }
    return this.storage.setItem( key, JSON.stringify(value));
  }

  remove(key) {
    if(!this.storage) {
      return;
    }
    this.storage.removeItem(key);
  }

}

export default new LocalStorageService();
