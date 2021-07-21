import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

import { observable } from 'mobx-angular';
import { IFile } from './IFile';
import { IFileStatus } from './IFileStatus';

// import 'blueimp-load-image/js';
import * as loadImage from 'blueimp-load-image';

// import * as canvasBlob from 'canvasblob';

@Component({
  selector: 'app-image',
  templateUrl: 'image.component.html',
  styleUrls: ['image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {

  @Input() shouldResize: any = true;
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

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
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

  handleImageLoad() {
    this.imageLoaded = true;
    this.iconColor = this.overlayColor;
  }

  handleClick(e) {
    if (this.isCtrlDisabled()) {
      e.preventDefault();
      return;
    }
  }

  blueImpResizeImage(origFile): Promise<any> {
    if (!origFile) {
      return null;
    }

    const options = {
      maxWidth: 400,
      canvas: true,
      pixelRatio: window.devicePixelRatio,
      downsamplingRatio: 0.5,
      orientation: true,
    };

    return new Promise((resolve, reject): Promise<string> | void => {
      const fileReader = new FileReader();
      
      fileReader.onload = (event) => {
        const image = new Image();

        image.onload = function(imgLoadData){
          
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.width = image.width / 4;
          canvas.height = image.height / 4;
          context.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            0,
            0,
            canvas.width,
            canvas.height
          );

          const callb = (canvas1) => {
            const response1 = canvas1.toDataURL();
            resolve(response1);
          };

          // const response = canvas.toDataURL();
          loadImage.transform(image, options, callb, origFile, {
            originalWidth: image.naturalWidth || image.width,
            originalHeight: image.naturalHeight || image.height,
          });
          // resolve(response);
        };

        image.onabort = function(abortedEvent) {
          
        }

    
        //@ts-ignore
        image.src = event.target.result;
      };

      fileReader.onabort = function(abortedEvent) {
        
      }

      fileReader.readAsDataURL(origFile);

    });
  }

  readImageFile(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var img = new Image();
      
      img.onload = function (loadedValue) {
          
          var w = this['width'];
          var h = this['height'];
          
      };

      img.onerror = function (loadedValue) {
        
        var w = this['width'];
        var h = this['height'];
        
    };


      //@ts-ignore
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  handleInputChange(e) {
    
    const pattern = /image-*/;
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.obj.setId();
    

    this.loaded = false;

    // const reader = new FileReader();
    // reader.onload = this._handleReaderLoaded.bind( this );
    // reader.readAsDataURL( file );

    // loadImage(
    //   file,
    //   function(img) {
    //     document.body.appendChild(img);
    //   },
    //   { maxWidth: 600 } // Options
    // );

    // loadImage(file, { maxWidth: 600 }).then(function (data) {
    //   document.body.appendChild(data.image)
    // }).catch(ex => {
    //   
    //   console.log(ex);
    // })


    // var fi = document.getElementById('file');

    // this.readImageFile(file);
    // return;
    debugger;
    const shouldresizeValue = (this.shouldResize == 'true');
    if(shouldresizeValue) {
      this.blueImpResizeImage(file)
      .then((b64Image) => {
        this.imageResolved(b64Image, file.name);
      })
      .catch((ex) => {
        
        console.log(ex);
      });

      return;
    }

    this.obj.setOriginalName(file.name);
    this.obj.setFileContent( file );
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind( this );
    reader.readAsDataURL( file );
    
  }

  canvasToBlob(dataURI, filename): File {
    
    // convert the data URL to a byte string
    const byteString = atob(dataURI.split(',')[1]);

    // pull out the mime type from the data URL
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // Convert to byte array
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    // Create a blob that looks like a file.
    const blob = new Blob([ab], { type: mimeString });
    blob['lastModifiedDate'] = new Date().toISOString();
    blob['name'] = filename;

    // Figure out what extension the file should have
    // switch (blob.type) {
    //   case 'image/jpeg':
    //     blob['name'] += '.jpg';
    //     break;
    //   case 'image/png':
    //     blob['name'] += '.png';
    //     break;
    // }
    // cast to a File
    return blob as File;
  }

  imageResolved(b64Image, filename) {
    const blob = this.canvasToBlob(b64Image, filename);

    // const blob =  canvasBlob.dataURLtoBlob(b64Image);

    this.setImageSrc(b64Image);

    this.obj.setFileContent(blob);
    this.loaded = true;

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

    debugger;

    // this.obj.setOriginalName(file.name);
    // this.obj.setFileContent( file );

    this.loaded = true;

    if (!this.obj.changed && this.fileAddedEvent) {
      this.obj.changed = true;
      if (this.obj.status === IFileStatus.AddedFile) {
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

  resizeImage(origFile): Promise<any> {
    if (!origFile) {
      return null;
    }

    return new Promise((resolve, reject): Promise<string> | void => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(origFile);
      fileReader.onload = (event) => {
        const image = new Image();

        image.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.width = image.width / 4;
          canvas.height = image.height / 4;
          context.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            0,
            0,
            canvas.width,
            canvas.height
          );

          const response = canvas.toDataURL();
          resolve(response);
        };

        //@ts-ignore
        image.src = event.target.result;
      };
    });
  }
}
