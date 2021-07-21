import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, AfterViewInit, OnDestroy } from '@angular/core';
import Helpers from '../services/utils/AppHelpers';

// import tinymce from 'tinymce/tinymce';
// import 'tinymce/themes/modern';
// import 'tinymce/plugins/paste';
// import 'tinymce/plugins/link';
// import 'tinymce/plugins/eqneditor';

import EventsService from '../services/pubsub/events.service';

declare let tinymce: any;

@Component({
  selector: 'app-wys-editor',
  templateUrl: './wys-editor.component.html',
  styleUrls: ['./wys-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class WysEditorComponent implements AfterViewInit, OnDestroy {

  @Output() onHtmlChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() onTextChanged: EventEmitter<string> = new EventEmitter<string>();

  private _prop: string;
  @Input() set prop(value) {
    this._prop = value;
    this.setText();
  }
  get prop(): string {
    return this._prop;
  }

  _obj: any;
  @Input() set obj(value) {
    this._obj = value;
    this.setText();
    this.obj.refresh = () => {
      this.setText();
    }
  }
  get obj(): any {
    return this._obj;
  }

  @Input() textProp = '';

  editor: any;
  value: string;
  text: string = "<p>Hello</p>";
  initialized = false;

  options: Object = {
    charCounterCount: false,
    placeholderText: 'Edit Your Content Here!',
    toolbarButtons: ['bold', 'italic', 'underline', 'insertLink', 'insertTable'],
    quickInsertTags: [],
    events: {
      'froalaEditor.contentChanged': (e, editor) => {

        this.obj[this.prop] = Helpers.removeStyle(editor.html.get());
      }
    }
  };

  onChange(evt) {

  }

  elementId = '';

  constructor() {
    this.elementId = this.guid();

    EventsService.subscribe('addQuestionLoaded', this.elementId, () => this.setText());

    this.loadTinyMCEJS();

  }

  setText() {
    if (!this.initialized || !this.obj) {
      return;
    }
    if (!this.editor) {
    }

    this.text = this.obj[this.prop] || '';
    this.editor.setContent(this.text);

    const txt = this.editor.getContent({ format: 'text' });
    this.onTextChanged.emit(txt);
  }

  guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  setEditor(editor) {
    this.editor = editor;

  }

  verifyElementId(elementId) {
    return new Promise((resolve, reject) => {
      const domEl = document.getElementById(elementId)
      if (domEl) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  static isTinyMceLoaded;
  private loadTinyMCEJS = () => {
    return new Promise((resolve, reject) => {
      if (WysEditorComponent.isTinyMceLoaded) {
        return resolve(true);
      }
      this.loadExternalScript('assets/tinymce/tinymce.js').then(tinymceValue => {
        this.loadExternalScript('assets/tinymce/themes/modern/theme.js').then(theme => {
          WysEditorComponent.isTinyMceLoaded = true;
          return resolve(true);
        }).catch(ex => {
          return reject(ex);
        })
      })
        .catch(ex => {
          reject(ex);
        });
    });
  }

  async tinyInitialize() {
    await this.loadTinyMCEJS();
    // .then(v=> {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['eqneditor',  'table', 'autoresize'],
      skin_url: 'assets/skins/lightgray',
      convert_urls: false,
      document_base_url: '/',
      branding: false,
      statusbar: false,
      menubar: false,
      max_height: 500,
      autoresize_bottom_margin: 50,
      resize: true,
      // content_css: 'tiny.css',
      toolbar: "undo redo | eqneditor link image | styleselect | bold italic | bullist numlist outdent indent	",
      setup: editor => {
        this.editor = editor;
        this.setEditor(editor);
        this.initialized = true;
        this.setText();
        editor.on('keyup', () => {
          const content = editor.getContent();
          const htmlCode = Helpers.removeStyle(content);
          this.obj[this.prop] = htmlCode;
          if (this.onHtmlChanged) {
            this.onHtmlChanged.emit(htmlCode);
          }

          if(this.textProp) {
            this.obj[this.textProp] = this.editor.getContent({ format: 'text' });
          }
          if (this.onTextChanged) {
            const txt = editor.getContent({ format: 'text' });
            this.onTextChanged.emit(txt);
          }

        });
        editor.on('init', (e) => {
          console.log('Editor was initialized.');
          this.initialized = true;
          this.setText();
        });

        editor.on('paste', (e) => {
          return;
          
          // return;
          e.preventDefault();

          const dataTransfer: DataTransfer = ((e.originalEvent || e).clipboardData || window['clipboardData']);

          var content = dataTransfer.getData('Html') || dataTransfer.getData('Text');

          tinymce.activeEditor.setContent(content, {format: 'raw'});

          // const lines = content.split('\n');
          // lines.forEach(line => {
          //   //editor.execCommand( 'mceInsertContent', false, line );
          //   editor.execCommand('mceInsertRawHTML', false, '<p>' + line + '</p>');
          // });

        });

        editor.on('execCommand', (e) => {
          if (e.command === 'mceInsertContent') {

            const htmlCode = editor.getContent();
            this.obj[this.prop] = htmlCode;
            if (this.onHtmlChanged) {
              this.onHtmlChanged.emit(htmlCode);
            }
          }
        });
      },
      oninit: data => {
        this.initialized = true;
        this.setText();
      },
    });
    // }) 

  }
  ngAfterViewInit() {
    // 
    var existElPromise = this.verifyElementId(this.elementId);
    existElPromise.then(v => {
      this.tinyInitialize();
    }).catch(ex => {
      setTimeout(() => {
        this.ngAfterViewInit();
      }, 100);
    });

  }

  ngOnDestroy() {
    EventsService.unsubscribe('addQuestionLoaded', this.elementId);
    tinymce.remove(this.editor);
  }

  private loadExternalStyles(styleUrl: string) {
    return new Promise((resolve, reject) => {
      const styleElement = document.createElement('link');
      styleElement.rel = 'stylesheet';
      styleElement.type = 'text/css';

      styleElement.href = styleUrl;
      styleElement.onload = (val) => {
        resolve(val);
      };
      styleElement.onerror = val => {
      };
      styleElement.onabort = val => {
      };
      document.head.appendChild(styleElement);
    });
  }

  private loadExternalScript(scriptUrl: string) {
    return new Promise(resolve => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }
}
