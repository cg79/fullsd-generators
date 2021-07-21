import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeComponent } from './code/code.component';
import { MobxAngularModule } from 'mobx-angular';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets', 
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad: () => {
    console.log((<any>window).monaco);
  }, // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig),
    MobxAngularModule,
    // codingRouter,
  ],
  declarations: [CodeComponent],
  exports: [CodeComponent],
})
export class CodeEditorModule {}
