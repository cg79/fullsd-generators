import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IFile } from '../IFile';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesComponent implements OnInit {

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
