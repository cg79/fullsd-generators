import { observable } from 'mobx';

class JSONToBeProcessed {

  @observable jsonAsString = `
  {
    name: "John", 
    age: 18
  }`;

  @observable result = '';

}

export default JSONToBeProcessed;
