import {Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

import { observable, computed, action } from 'mobx-angular';
import { IFile } from '../file-component/IFile';
import { IFileStatus } from '../file-component/IFileStatus';

@Component({
  selector: 'app-image-viewer-component',
  templateUrl: 'image-viewer.component.html',
  styleUrls: ['image-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageViewerComponent  {

  @Input() prop: string;
  @Input() extraClass: string;
  @Input() isDisabled: any;
  @Output() fileAddedEvent = new EventEmitter();
  @Output() fileRemovedEvent = new EventEmitter();

  borderColor: string = '#ccc';
  iconColor: string = '#ccc';
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  @observable imageSrc: string = '';
  @observable fileData: IFile = null;

  private _obj: IFile;

  @Input() set obj(value) {
       this._obj = value;
       this.fileData = value;
       if(value && value.filePath) {
         this.imageSrc = value.fileUrl;
       }
  }

  get obj(): IFile {
    return this._obj;
  }

  public fileClass: string ='uploader';

  constructor() { }

  ngOnInit() {
    if (this.extraClass) {
      this.fileClass = `uploader ${this.extraClass}`;
    }
    // if(this.isDisabled){
    //   this.fileClass = `uploader isDisabled ${this.extraClass}`;
    // }
    // try {
    //   if (this.obj && this.prop) {
    //     this.imageSrc = this.obj[this.prop];
    //   }
    // }
    // catch (ex)
    // {
    //   console.log(ex);
    // }
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  isCtrlDisabled()
  {
    return this.isDisabled === true || this.isDisabled == 'true';
  }

  handleDragEnter() {
    if(this.isCtrlDisabled()){
      return;
    }
    this.dragging = true;
  }

  handleDragLeave() {
    if(this.isCtrlDisabled())
    {
      return;
    }
    this.dragging = false;
  }

  handleDrop(e) {
    e.preventDefault();
    if(this.isCtrlDisabled()){
      return;
    }

    this.dragging = false;
    this.handleInputChange(e);
  }

  handleImageLoad() {
    this.imageLoaded = true;
    this.iconColor = this.overlayColor;
  }

  handleClick(e){
    if(this.isCtrlDisabled() )
    {
      e.preventDefault();
      return;
    }

  }
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    //this.obj[this.prop] =  file;
    this.obj.setId();
    this.obj.setFileContent(file);

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    var reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;

    if(!this.obj.changed && this.fileAddedEvent) {
      this.obj.changed = true;
      if(this.obj.status === IFileStatus.AddedFile) {
        this.fileAddedEvent.emit();
      }

    }
    // this.obj[this.prop] = this.imageSrc;
  }

  _setActive() {
    this.borderColor = this.activeColor;
    if (this.imageSrc && this.imageSrc.length === 0) {
      this.iconColor = this.activeColor;
    }
  }

  _setInactive() {
    this.borderColor = this.baseColor;
    if (this.imageSrc && this.imageSrc.length === 0) {
      this.iconColor = this.baseColor;
    }
  }

  deletePicture(objInstance: IFile) {
    this.imageSrc = null;
    objInstance.delete();
    if(this.fileRemovedEvent) {
      this.fileRemovedEvent.emit(objInstance);
    }
    //trigger
  }

}
