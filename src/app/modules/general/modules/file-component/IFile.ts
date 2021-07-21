
import { observable, computed, action, autorun, toJS } from 'mobx';
import { Injectable } from '@angular/core';
import { IFileStatus } from './IFileStatus';
import EventsService from '../services/pubsub/events.service';

@Injectable()
export class IFile {
  _id: string;
  @observable fileContent = null;
  @observable filePath = null;
  @observable fileUrl = null;
  @observable imageSrc = null;
  originalFileName = '';
  userid = '';
  status: IFileStatus = IFileStatus.FreeSlot;
  changed = false;

  constructor ( obj = null ) {
    if(!obj) {
      this._id = this.uuidv4();
      return;
    }

    const { _id, fileContent, filePath, userid, dir  } = obj;
    this._id = _id || this.uuidv4();
    this.originalFileName = filePath;

    if(dir) {
      // this.setDataFromDb(obj);
      this.fileUrl = `${ EventsService.serverUrl }/${ dir }/${filePath}`;
      this.imageSrc = this.fileUrl;
      this.status = IFileStatus.ExistentFile;
      return;
    }
    
    this.fileContent = fileContent;
    this.filePath = filePath;
     // this is used in order to delete de file from disk
    if ( filePath ) {
      this.fileUrl = `${ EventsService.serverUrl }${ filePath }`;
      this.status = IFileStatus.ExistentFile;
    }
    
  }

  static fromLogo(obj: any = {}): IFile {
    const {dir, list} = obj;
    if(!dir || !list || !list.length) {
      return null;
    }
    const response = new IFile(null);
    const fileName = list[list.length  - 1];
    const fileUrl = `${ EventsService.serverUrl }/${ dir }/${fileName}`;
    
    response.originalFileName = fileName;
    response.fileUrl = fileUrl;

    response.imageSrc = fileUrl;
    response.status = IFileStatus.ExistentFile;

    return response;
  }

  private setDataFromDb(obj: any = {}) {
    const {dir, list} = obj;
    if(!dir || !list || !list.length) {
      return;
    }
    this.fileUrl = `${ EventsService.serverUrl }/${ dir }/${list[0]}`;
    this.imageSrc = this.fileUrl;
  }

  

  setImageSrc ( val ) {
    this.imageSrc = val;
  }

  uuidv4 () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function ( c ) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : ( r & 0x3 | 0x8 );
      return v.toString( 16 );
    } );
  }

  setId () {
    if ( !this._id ) {
      this._id = this.uuidv4();
    }
  }

  setOriginalName ( name ) {
    this.originalFileName = name;
  }

  @action setFileContent ( fc ) {
    this.fileContent = fc;
    if ( this.status === IFileStatus.ExistentFile ) {
      this.status = IFileStatus.ReplacedFile;
    } else {
      this.status = IFileStatus.AddedFile;
    }
  }

  hasContent () {
    return this.status == IFileStatus.AddedFile ||
      this.status == IFileStatus.ExistentFile ||
      this.status == IFileStatus.ReplacedFile;
  }

  @action delete () {
    this.fileContent = null;
    this.filePath = '';
    if ( this.status === IFileStatus.ExistentFile ) {
      this.status = IFileStatus.DeletedFile;
    } else {
      this.status = IFileStatus.FreeSlot;
    }

  }

  @action setContent ( value ) {
    this.fileContent = value;
    if ( this.status === IFileStatus.ExistentFile ) {
      this.status = IFileStatus.ReplacedFile;
    } else {
      this.status = IFileStatus.AddedFile;
    }
  }

  toDb () {
    return {
      _id: this._id,
      filePath: this.filePath,
      originalFileName: this.originalFileName
    }
  }

  updateFilePath ( obj ) {
    this.filePath = obj.filePath;
  }

  deleteFilePath () {
    this.filePath = '';
  }

  updateStatus ( status ) {
    this.status = status;
  }

  addFileToForm ( formInstance ) {
    const fData = this;
    if ( !fData.fileContent ) {
      return false;
    }
    const {fileContent, status, _id, originalFileName } = fData;
    const {name} = fileContent;

    if ( status !== IFileStatus.AddedFile &&
      status !== IFileStatus.ReplacedFile ) {
      return false;
    }
    const keyValue =  _id;
    // const info = `${ _id },${status }`;

    formInstance.append( keyValue, fileContent, name );
    return true;
  }

  addCanvasFileToObject ( dbObj ) {
    const fData = this;
    if ( !fData.fileContent ) {
      return false;
    }

    if ( fData.status !== IFileStatus.AddedFile &&
      fData.status !== IFileStatus.ReplacedFile ) {
      return false;
    }
    // const info = `${fData._id},${fData.status}`;

    dbObj[ fData.originalFileName ] = fData.fileContent;
    // formInstance.append(info, fData.fileContent, fData.fileContent.fileName);
    return true;
  }

  shouldBeSaved () {
    return this.status === IFileStatus.AddedFile ||
      this.status === IFileStatus.ReplacedFile
  }

  // @computed get cssClass() {
  //     return this.selected ? 'selected' : 'kkk';
  // }
}
