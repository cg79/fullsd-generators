
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MobxAngularModule } from 'mobx-angular';
import {CommonModule} from '@angular/common';
import {WysIsWhatYouGetModule} from '../modules/wys-editor/wys-module';
import {AppFileModule} from '../modules/file-component/appfile.module';
import { generatorRouter } from './generator.router';
import { JsonTojsClassComponent } from './json-tojs-class/json-tojs-class.component';
import { RootPropComponent } from './root-prop/root-prop.component';
import {CodeEditorModule} from '../modules/code-editor/code-editor-module';
import { MyTabsModule } from '../modules/tabs/mytabs.module';
import { PipesModule } from '../modules/pipes/pipes-module';


@NgModule({
  imports: [CommonModule,
    FormsModule,
    NgbModule,
    MobxAngularModule,
    WysIsWhatYouGetModule,
    AppFileModule,
    CodeEditorModule,
    PipesModule,
    MyTabsModule,
    generatorRouter,
  ],
  declarations: [
    JsonTojsClassComponent,
    RootPropComponent
  ],
  exports: [],
})
export class GeneratorModule {}
