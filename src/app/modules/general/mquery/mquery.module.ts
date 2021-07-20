import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MqueryComponent } from './mquery.component';
import { MqueryRoutingModule } from './mquery-routing.module';
// import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MqueryRoutingModule,
    
  ],
  exports: [
    MqueryComponent
  ],
  declarations: [
    MqueryComponent
  ],
  providers: [
  ],
})
export class MqueryModule { }