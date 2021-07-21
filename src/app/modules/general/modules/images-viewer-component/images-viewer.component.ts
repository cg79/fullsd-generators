import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
// import { observable, computed, action } from 'mobx-angular';
import { IFile } from '../file-component/IFile';
// import EventsService from '../../services/pubsub/events.service';

@Component({
  selector: 'app-images-viewer-component',
  templateUrl: './images-viewer.component.html',
  styleUrls: ['./images-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesViewerComponent implements OnInit {

  // private _dir: any;

  // @Input() set dir(value) {
  //      this._dir = value;
  // }

  // get dir(): any {
  //   return this._dir;
  // }

  @Input() pictures : IFile[] =[];

  constructor() {
    // this.pictures.push(this.createFile(null));
  }

  ngOnInit() {
    // setInterval(() => {
    //   this.pictures.push(this.createFile(null));
    // }, 2000);
  }

  onFileAddedEvent(event) {
    this.pictures.push(this.createFile(null));
  }

  onFileRemovedEvent(event) {
    this.pictures = this.pictures.filter(el => el._id !== event._id);
  }

  createFile(obj) {
    return new IFile(obj);
  }

  increaseNoOfPictures() {
    this.pictures.push(this.createFile(null));
  }

  decreseNoOfPictures() {
    this.pictures.pop();
  }

}
