import { PipesModule } from '../pipes/pipes-module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageComponent } from './image.component';
import { MobxAngularModule } from 'mobx-angular';
import {CommonModule} from '@angular/common';
import { ImagesViewerComponent } from '../images-viewer-component/images-viewer.component';
import { ImageViewerComponent } from '../image-viewer-component/image-viewer.component';
import { FilesComponent } from './files/files.component';
import { FileComponent } from './file/file.component';

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule, MobxAngularModule, PipesModule],
  declarations: [ImageComponent, ImagesViewerComponent, ImageViewerComponent, FileComponent, FilesComponent],
  exports: [ImageComponent, ImagesViewerComponent, ImageViewerComponent,FileComponent, FilesComponent ],
})
export class AppFileModule {}
