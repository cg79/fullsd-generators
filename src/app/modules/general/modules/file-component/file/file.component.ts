import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

import { observable } from 'mobx-angular';

import * as loadImage from 'blueimp-load-image';
import { IFile } from '../IFile';
import { IFileStatus } from '../IFileStatus';

// import * as canvasBlob from 'canvasblob';

@Component({
  selector: 'app-file',
  templateUrl: 'file.component.html',
  styleUrls: ['file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileComponent {
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
  @observable imageSrc = null;
  @observable fileData: IFile = null;

  private _obj: IFile;

  @Input() set obj(value) {
    this._obj = value;
    this.fileData = value;
    if (value && value.filePath) {
      this.setImageSrc(value.fileUrl);
    }
  }

  get obj(): IFile {
    return this._obj;
  }

  public fileClass: string = 'uploader';

  constructor() {}

  ngOnInit() {
    if (this.extraClass) {
      this.fileClass = `uploader ${this.extraClass}`;
    }
  }

  isCtrlDisabled() {
    return this.isDisabled === true || this.isDisabled == 'true';
  }

  handleDragEnter() {
    if (this.isCtrlDisabled()) {
      return;
    }
    this.dragging = true;
  }

  handleDragLeave() {
    if (this.isCtrlDisabled()) {
      return;
    }
    this.dragging = false;
  }

  handleDrop(e) {
    e.preventDefault();
    if (this.isCtrlDisabled()) {
      return;
    }

    this.dragging = false;
    this.handleInputChange(e);
  }

  handleClick(e) {
    if (this.isCtrlDisabled()) {
      e.preventDefault();
      return;
    }
  }


  handleInputChange(e) {
    debugger;
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var fileData: IFile = this.obj;
    fileData.setFileContent(file);
    fileData.setOriginalName(file.name);

    // this.obj.setOriginalName(file.name);
    // this.loaded = false;
    if (!this.obj.changed && this.fileAddedEvent) {
      this.obj.changed = true;
      if (this.obj.status === IFileStatus.AddedFile) {
        this.fileAddedEvent.emit();
      }
    }
    
  }



  
  _handleReaderLoaded(e) {
    var reader = e.target;
    this.setImageSrc(reader.result);
    this.loaded = true;

    
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
    this.setImageSrc(null);
    objInstance.delete();
    if (this.fileRemovedEvent) {
      this.fileRemovedEvent.emit(objInstance);
    }
    //trigger
  }

  setImageSrc(val) {
    this.imageSrc = val;
    this._obj.setImageSrc(val);
  }
  
}
