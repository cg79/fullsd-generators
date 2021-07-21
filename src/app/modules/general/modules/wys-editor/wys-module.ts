import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {WysEditorComponent} from "./wys-editor.component";


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    WysEditorComponent
  ],
  exports: [WysEditorComponent]
})
export class WysIsWhatYouGetModule {

}
