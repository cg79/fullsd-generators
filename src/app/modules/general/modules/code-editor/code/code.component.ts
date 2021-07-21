import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
// import 'ace-builds';
// import 'ace-builds/webpack-resolver';

// import 'brace';
// import 'ace-builds';
// import 'ace-builds/webpack-resolver';

// import 'brace/theme/clouds';
// import 'brace/mode/c_cpp';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent implements OnInit {
  // @ViewChild('editor') editor;
  // @Input() obj: any;
  private _obj: any = null;

  @Input() set obj ( value: any ) {
    this._obj = value;
    this._obj.layout = () => {
      this.monacoEditor && this.monacoEditor.layout();
    }
  }

  get obj (): any {
    return this._obj;
  }

  @Input() prop: string;

  @Input() language = 'javascript';

  // codeEditorOptions: any = {
  //   automaticLayout: true // the important part
  // };

  monacoEditor: any = null;

  editorOptions = {
    theme: 'vs',
    language: this.language,
    automaticLayout: true,
    onInit: (editor) => {
      
      this.monacoEditor = editor;
      let line = editor.getPosition();
      console.log(line);
      editor.layout();
    }
  };

  constructor() {
  }

  onChange(code) {
    if (this.obj) {
      this.obj[this.prop] = code;
    }

    // console.log('new code', code);
  }

  ngOnInit() {
    // this.codeEditorOptions = {
    //   maxLines: 10,
    //   printMargin: true
    // };
  }

  ngAfterViewInit() {
    // this.editor.setTheme("clouds");
    // this.editor.setMode("c_cpp");
    // this.editor.getEditor().$blockScrolling = Infinity;
  }

}
