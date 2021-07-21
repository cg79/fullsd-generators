exports.id = 489;
exports.ids = [489];
exports.modules = {

/***/ 35561:
/*!****************************************************************!*\
  !*** ./src/app/modules/general/generator/JSONToBeProcessed.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ 15785);


class JSONToBeProcessed {
    constructor() {
        this.jsonAsString = '';
        this.result = '';
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], JSONToBeProcessed.prototype, "jsonAsString", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], JSONToBeProcessed.prototype, "result", void 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JSONToBeProcessed);


/***/ }),

/***/ 78489:
/*!***************************************************************!*\
  !*** ./src/app/modules/general/generator/generator.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneratorModule": () => (/* binding */ GeneratorModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx-angular */ 1474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _modules_wys_editor_wys_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/wys-editor/wys-module */ 70567);
/* harmony import */ var _modules_file_component_appfile_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/file-component/appfile.module */ 78097);
/* harmony import */ var _generator_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generator.router */ 69195);
/* harmony import */ var _json_tojs_class_json_tojs_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json-tojs-class/json-tojs-class.component */ 25947);
/* harmony import */ var _root_prop_root_prop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root-prop/root-prop.component */ 41174);
/* harmony import */ var _modules_code_editor_code_editor_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/code-editor/code-editor-module */ 42621);
/* harmony import */ var _modules_tabs_mytabs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/tabs/mytabs.module */ 17320);
/* harmony import */ var _modules_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/pipes/pipes-module */ 99635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);














class GeneratorModule {
}
GeneratorModule.ɵfac = function GeneratorModule_Factory(t) { return new (t || GeneratorModule)(); };
GeneratorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: GeneratorModule });
GeneratorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
            mobx_angular__WEBPACK_IMPORTED_MODULE_12__.MobxAngularModule,
            _modules_wys_editor_wys_module__WEBPACK_IMPORTED_MODULE_0__.WysIsWhatYouGetModule,
            _modules_file_component_appfile_module__WEBPACK_IMPORTED_MODULE_1__.AppFileModule,
            _modules_code_editor_code_editor_module__WEBPACK_IMPORTED_MODULE_5__.CodeEditorModule,
            _modules_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__.PipesModule,
            _modules_tabs_mytabs_module__WEBPACK_IMPORTED_MODULE_6__.MyTabsModule,
            _generator_router__WEBPACK_IMPORTED_MODULE_2__.generatorRouter,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](GeneratorModule, { declarations: [_json_tojs_class_json_tojs_class_component__WEBPACK_IMPORTED_MODULE_3__.JsonTojsClassComponent,
        _root_prop_root_prop_component__WEBPACK_IMPORTED_MODULE_4__.RootPropComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
        mobx_angular__WEBPACK_IMPORTED_MODULE_12__.MobxAngularModule,
        _modules_wys_editor_wys_module__WEBPACK_IMPORTED_MODULE_0__.WysIsWhatYouGetModule,
        _modules_file_component_appfile_module__WEBPACK_IMPORTED_MODULE_1__.AppFileModule,
        _modules_code_editor_code_editor_module__WEBPACK_IMPORTED_MODULE_5__.CodeEditorModule,
        _modules_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__.PipesModule,
        _modules_tabs_mytabs_module__WEBPACK_IMPORTED_MODULE_6__.MyTabsModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 69195:
/*!***************************************************************!*\
  !*** ./src/app/modules/general/generator/generator.router.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatorRouter": () => (/* binding */ generatorRouter)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _json_tojs_class_json_tojs_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json-tojs-class/json-tojs-class.component */ 25947);


const Generator_ROUTER = [
    {
        path: '',
        component: _json_tojs_class_json_tojs_class_component__WEBPACK_IMPORTED_MODULE_0__.JsonTojsClassComponent
    },
    // {
    //   path: 'jsontojsclass',
    //   component: JsonTojsClassComponent
    // }
];
const generatorRouter = _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(Generator_ROUTER);


/***/ }),

/***/ 50588:
/*!****************************************************************************!*\
  !*** ./src/app/modules/general/generator/json-tojs-class/GeneratedCode.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneratedCode": () => (/* binding */ GeneratedCode)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ 15785);


class GeneratedCode {
    constructor() {
        this.value = '';
        this.generatedJsClass = 'function() {}';
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], GeneratedCode.prototype, "generatedJsClass", void 0);


/***/ }),

/***/ 25947:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/general/generator/json-tojs-class/json-tojs-class.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonTojsClassComponent": () => (/* binding */ JsonTojsClassComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mobx */ 15785);
/* harmony import */ var really_relaxed_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! really-relaxed-json */ 60181);
/* harmony import */ var really_relaxed_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(really_relaxed_json__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root_prop_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../root-prop/root */ 33216);
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-beautify */ 40103);
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_beautify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _typescriptGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typescriptGenerator */ 54775);
/* harmony import */ var _JSONToBeProcessed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JSONToBeProcessed */ 35561);
/* harmony import */ var _GeneratedCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GeneratedCode */ 50588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-angular */ 1474);
/* harmony import */ var _modules_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/tabs/tabs.component */ 79213);
/* harmony import */ var _modules_tabs_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/tabs/tab.component */ 86061);
/* harmony import */ var _modules_code_editor_code_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/code-editor/code/code.component */ 63003);
/* harmony import */ var _root_prop_root_prop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../root-prop/root-prop.component */ 41174);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
















function JsonTojsClassComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function JsonTojsClassComponent_div_0_div_14_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r2.mode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Use function object ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function JsonTojsClassComponent_div_0_div_14_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r4.mode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Use class ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function JsonTojsClassComponent_div_0_div_14_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r5.mode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " Use typescript ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function JsonTojsClassComponent_div_0_div_14_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r6.useuniqueid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, " Use unique id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function JsonTojsClassComponent_div_0_div_14_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r7.trackEvents = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " Track events ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JsonTojsClassComponent_div_0_div_14_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r8.startCodeGenerator(ctx_r8.root); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, " generateJsClassFromJson ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "app-code", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onCodeChanged", function JsonTojsClassComponent_div_0_div_14_Template_app_code_onCodeChanged_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r9.codeIsChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 1)("ngModel", ctx_r1.mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 2)("ngModel", ctx_r1.mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 3)("ngModel", ctx_r1.mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r1.useuniqueid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r1.trackEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("obj", ctx_r1.code)("prop", "generatedJsClass");
} }
function JsonTojsClassComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-my-tabs");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "app-my-tab", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Codul JSON folosit la generarea claselor");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "app-code", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("objChange", function JsonTojsClassComponent_div_0_Template_app_code_objChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r10.inputJson = $event; })("onCodeChanged", function JsonTojsClassComponent_div_0_Template_app_code_onCodeChanged_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r12.codeIsChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function JsonTojsClassComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r13.generateKeys(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " View KEYS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "app-my-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, " ppp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-root-prop", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "app-my-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, JsonTojsClassComponent_div_0_div_14_Template, 21, 10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("code", ctx_r0.code.value)("obj", ctx_r0.inputJson);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("root", ctx_r0.root);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.root);
} }
// var expressionify = require('../mongo/mongo_expression/expressionify');
class JsonTojsClassComponent {
    constructor() {
        this.inputJson = new _JSONToBeProcessed__WEBPACK_IMPORTED_MODULE_4__.default();
        this.generatedJsClass = '//';
        this.root = null;
        this.mode = 1;
        this.useES6 = false;
        this.useEmbeded = true;
        this.embededName = 'person';
        this.externalConfig = {
            lineNumbers: true
        };
        this.code = null;
        this.mongoex = 'a>2';
        this.trackEvents = false;
        this.useuniqueid = false;
        this.newGuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        this.code = new _GeneratedCode__WEBPACK_IMPORTED_MODULE_5__.GeneratedCode();
    }
    codeIsChanged(text) {
        // this.text = text;
    }
    ngOnInit() {
    }
    mongoEx() {
        //   // MExpression aaa = new MExpression();
        //   var aaa = new MExpression1();
        //  var x = aaa.createMongoCondition(this.mongoex);
        //  console.log(x);
        // true
        // aaa._
    }
    beautyfyJs(source) {
        const res = (0,js_beautify__WEBPACK_IMPORTED_MODULE_2__.js)(source);
        return res;
    }
    generateKeys() {
        debugger;
        try {
            const goodJsonString = (0,really_relaxed_json__WEBPACK_IMPORTED_MODULE_0__.toJson)(this.inputJson.jsonAsString.toString());
            const jsonObj = JSON.parse(goodJsonString);
            const props = this.createRootKeysFromObject(jsonObj);
            this.root = new _root_prop_root__WEBPACK_IMPORTED_MODULE_1__.IRoot(props);
        }
        catch (e) {
            this.code.generatedJsClass = e;
        }
    }
    startCodeGenerator(node) {
        this.generatedJsClass = "";
        this.generateJsClassFromJson(node);
        this.code.generatedJsClass = this.beautyfyJs(this.generatedJsClass);
    }
    generateJsClassFromJson(node) {
        if (!node) {
            return;
        }
        try {
            // let root = this.props;
            // if (!root) {
            //   this.generateKeys();
            //   root = this.props;
            // }
            // const goodJsonString = toJson(this.text.toString());
            // const jsonObj = JSON.parse(goodJsonString);
            // const keys = this.createRootKeysFromObject(jsonObj);
            let usedFunc = this.createJsClass.bind(this);
            if (this.mode == 1) {
                usedFunc = this.createFunctionObject.bind(this);
            }
            if (this.mode == 2) {
                usedFunc = this.createAsClass.bind(this);
            }
            if (this.mode == 3) {
                const inst = new _typescriptGenerator__WEBPACK_IMPORTED_MODULE_3__.TypescriptGenerator();
                inst.trackEvents = this.trackEvents;
                inst.useuniqueid = this.useuniqueid;
                usedFunc = inst.createAsClass.bind(inst);
            }
            const jsClass = usedFunc(node);
            this.generatedJsClass += jsClass;
            node.props.forEach(prop => {
                if (prop.root) {
                    this.generateJsClassFromJson(prop.root);
                }
            });
        }
        catch (e) {
            this.generatedJsClass = e;
        }
    }
    createAsClass(root) {
        const { props } = root;
        const thisProps = this.createThisProperties(props);
        const functions = this.createClassFunctions(props);
        const propDeclarations = this.createPropDeclarations(props);
        const arrayMethods = this.createArrayMethods(root, props);
        // if(root)
        let result = `
    class ${root.name} {

    ${propDeclarations}

    constructor(obj) {
      ${this.createDestructorObj(props)}
      ${thisProps}
    }
    ${functions}
    ${arrayMethods}
    `;
        return `
      ${result}

    }
    `;
    }
    createFunctionObject(root) {
        const { props } = root;
        let result = `
    // const instance = new ${root.name}({...});
    function ${root.name}(obj){`;
        const thisPorps = this.createThisProperties(props);
        const functions = this.createThisFunctions(props);
        return `
      ${result}
      ${this.createDestructorObj(props)}
      ${thisPorps}
      ${functions}
    }
    `;
    }
    createDestructorObj(keys) {
        const arr = [];
        keys.forEach(el => {
            arr.push(`${el.key}`);
        });
        return `const { ${arr.join(", ")} } = obj; `;
    }
    createThisProperties(keys) {
        const arr = [];
        keys.forEach(el => {
            const { name, isPrivate, type, isRequired } = el;
            const defautValue = this.getDefaultValueByType(type);
            const Cname = this.capitalize(name);
            if (isRequired) {
                arr.push(`
        if(!${name}) {
          throw 'No ${name}';
        }
        `);
            }
            if (el.root && el.root.type === 'array') {
                arr.push(`
        this.${name} = this.add${Cname}(${name} || ${defautValue});`);
            }
            else {
                if (isPrivate) {
                    arr.push(`
        let ${name} = ${name} || ${defautValue};`);
                }
                else {
                    arr.push(`
        this.${name} = ${name} || ${defautValue};`);
                }
            }
        });
        return arr.join("");
    }
    createArrayMethods(node, keys) {
        const arr = [];
        const arrays = keys.filter(el => el.type === 'array');
        arrays.forEach(el => {
            arr.push(this.createArrayMethod(el, node));
        });
        return arr.join('');
    }
    capitalize(source) {
        if (!source) {
            return '';
        }
        return source.charAt(0).toUpperCase() + source.slice(1);
    }
    createArrayMethod(prop, node) {
        const arr = [];
        const Cname = this.capitalize(prop.name);
        const name = prop.name;
        const keyName = node.key;
        const arrayClassName = prop.root ? prop.root.name : '';
        let m = '';
        //add
        if (arrayClassName) {
            m = `
      add${Cname}(value){
        const instance = new ${arrayClassName}(value);
        this.${name}.push(instance);
      }
    `;
        }
        else {
            m = `
        add${Cname}(value){
          this.${name}.push(value);
        }
      `;
        }
        arr.push(m);
        if (arrayClassName) {
            m = `
      add${Cname}(values){
        values.forEach(el => {
          const instance = new ${arrayClassName}(el);
          this.${name}.push(instance);
        });
      }
    `;
        }
        else {
            m = `
      add${Cname}s(values){
        values.forEach(el => {
          this.${name}.push(el);
        });
      }
    `;
        }
        arr.push(m);
        //add from list
        //filter
        // m = `
        // filter${name}(value){
        //   this.${name}.push(value);
        // }
        // `;
        // arr.push(m);
        //remove
        //find
        if (!keyName) {
            m = `// key name used for filtering by id is not set `;
            arr.push(m);
        }
        m = `
      remove${Cname}(value){
        return this.${name}.filter(el => el.${keyName} === value);
      }
    `;
        arr.push(m);
        //sort by value
        m = `
    sort${Cname}ByValue(propName, asccending = true){
      return ${name}.sort((a, b)  => {
        if (asccending) {
          return a.propName - b.propName;
        }
        return b.propName - a.propName;
      });
    }
  `;
        arr.push(m);
        //sort by string
        //   m = `
        //   sort${name}ByValue(propName, asccending = true){
        //     return ${name}.sort((a, b)  => {
        //       if (asccending) {
        //         return a.propName - b.propName;
        //       }
        //       return b.propName - a.propName;
        //     });
        //   }
        // `;
        // arr.push(m);
        return arr.join("");
    }
    getDefaultValueByType(type) {
        switch (type) {
            case 'array':
                return '[]';
            case 'number':
                return '0';
            case 'string':
                return '';
            case 'object':
                return '';
            case 'boolean':
                return 'false';
            default:
                return 'null';
        }
    }
    createPropDeclarations(keys) {
        const arr = [];
        keys.forEach(el => {
            const { name, isPrivate, type } = el;
            const defaultValue = this.getDefaultValueByType(type);
            if (isPrivate) {
                arr.push(`
        ${name} = ${defaultValue};`);
            }
            else {
                arr.push(`
        ${name} = ${defaultValue};`);
            }
        });
        return arr.join("");
    }
    createThisFunctions(keys) {
        const arr = [];
        keys.forEach(el => {
            arr.push(`
        this.set${el.key} = (value) => {
          this.${el.key} = value;
        };
        `);
            arr.push(`
        this.get${el.key} = () => {
          return this.${el.key};
        };
        `);
        });
        return arr.join("");
    }
    createClassFunctions(keys) {
        const arr = [];
        keys.forEach(el => {
            const Cname = this.capitalize(el.key);
            arr.push(`
        set${Cname}(value) {
          this.${el.key} = value;
        };
        `);
            arr.push(`
        get${Cname}() {
          return this.${el.key};
        };
        `);
        });
        return arr.join("");
    }
    createJsClass(obj) {
        const keys = this.createRootKeysFromObject(obj);
        let result = "";
        result = this.createFunctionsForKeys(keys);
        return result;
    }
    createRootKeysFromObject(obj) {
        const keys = Object.keys(obj)
            .map((key) => ({
            ...this.createKeyValueType(obj, key)
        }));
        const root = {
            name: '',
            keys
        };
        return root;
    }
    createFunctionsForKeys(keys) {
        let func = '';
        let usedFunctinon = this.createFunctionsForKey;
        if (this.useES6) {
            usedFunctinon = this.createES6FunctionsForKey;
        }
        keys.forEach(element => {
            func += usedFunctinon(element);
        });
        return func;
    }
    createFunctionsForKey(key) {
        let setF = "";
        setF = `
    function set${key.key}(obj, value) {
      obj[${key.key}] = value;
    }

    function get${key.key}(obj) {
      return obj[${key.key}];
    }

    `;
        return setF;
    }
    createES6FunctionsForKey(key) {
        let setF = "";
        setF = `
    set${key.key} = (obj, value) => {
      obj[${key.key}] = value;
    }

    get${key.key} = (obj) => {
      return obj[${key.key}];
    }

    `;
        return setF;
    }
    createKeyValueType(obj, key) {
        const value = obj[key];
        let type = value ? typeof (value) : '';
        if (type === 'object' && value.constructor.name === 'Array') {
            type = 'array';
        }
        const result = {
            key,
            name: key,
            value,
            type,
            isPrivate: false,
            isInterface: false,
            getset: false,
            get: true,
            set: true,
            observable: false,
            isRequired: false,
            // constant: false,
            guid: this.newGuid()
        };
        if (result.type === 'array' && value.length) {
            result.root = this.createRootKeysFromObject(value[0]);
        }
        if (result.type === 'object') {
            result.root = this.createRootKeysFromObject(value);
        }
        return result;
    }
}
JsonTojsClassComponent.ɵfac = function JsonTojsClassComponent_Factory(t) { return new (t || JsonTojsClassComponent)(); };
JsonTojsClassComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: JsonTojsClassComponent, selectors: [["app-json-tojs-class"]], decls: 1, vars: 0, consts: [[4, "mobxAutorun"], ["tabTitle", "JSON"], [1, "item"], ["prop", "jsonAsString", 3, "code", "obj", "objChange", "onCodeChanged"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["tabTitle", "Props"], [3, "root"], ["tabTitle", "Generare"], [4, "ngIf"], [1, "flex", "justcenter"], [1, ""], ["type", "radio", "id", "control_02", "name", "select", 3, "value", "ngModel", "ngModelChange"], ["type", "checkbox", "id", "useuniqueid", "name", "unique_id", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "trackevents", "name", "track", 3, "ngModel", "ngModelChange"], [3, "obj", "prop", "onCodeChanged"]], template: function JsonTojsClassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, JsonTojsClassComponent_div_0_Template, 16, 4, "div", 0);
    } }, directives: [mobx_angular__WEBPACK_IMPORTED_MODULE_11__.MobxAutorunDirective, _modules_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__.TabsComponent, _modules_tabs_tab_component__WEBPACK_IMPORTED_MODULE_7__.TabComponent, _modules_code_editor_code_code_component__WEBPACK_IMPORTED_MODULE_8__.CodeComponent, _root_prop_root_prop_component__WEBPACK_IMPORTED_MODULE_9__.RootPropComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor], styles: [".item[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzb24tdG9qcy1jbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJqc29uLXRvanMtY2xhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG59XG4iXX0= */"], changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_15__.observable
], JsonTojsClassComponent.prototype, "inputJson", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_15__.observable
], JsonTojsClassComponent.prototype, "generatedJsClass", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_15__.observable
], JsonTojsClassComponent.prototype, "root", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_15__.observable
], JsonTojsClassComponent.prototype, "mode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_15__.action
], JsonTojsClassComponent.prototype, "codeIsChanged", null);


/***/ }),

/***/ 54775:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/general/generator/json-tojs-class/typescriptGenerator.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypescriptGenerator": () => (/* binding */ TypescriptGenerator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ 15785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



class TypescriptGenerator {
    constructor(data = {}) {
        this.name = '';
        this.guid = '';
        this.key = null;
        this.trackEvents = false;
        this.useuniqueid = false;
        this.newGuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    createDestructorObj(keys) {
        const arr = [];
        keys.forEach(el => {
            arr.push(`${el.key}`);
        });
        return `const { ${arr.join(", ")} } = obj; `;
    }
    createThisProperties(keys) {
        const arr = [];
        keys.forEach(el => {
            const { name, isPrivate, type, isRequired, customtype } = el;
            const defautValue = this.getDefaultValueByType(type);
            const Cname = this.capitalize(name);
            if (isRequired) {
                arr.push(`
        if(!${name}) {
          throw 'No ${name}';
        }
        `);
            }
            if (el.root) {
                if (el.root.type === 'array') {
                    arr.push(`
        this.${name} = this.add${Cname}(${name} || ${defautValue});`);
                }
            }
            else {
                if (isPrivate) {
                    arr.push(`
        let ${name} = ${name} || ${defautValue};`);
                }
                else {
                    if (customtype) {
                        arr.push(`
            this.${name} = ${name} ? new ${customtype}(${name}) : ${defautValue};`);
                    }
                    else {
                        arr.push(`
            this.${name} = ${name} || ${defautValue};`);
                    }
                }
            }
        });
        return arr.join("");
    }
    createClassFunctions(keys) {
        const arr = [];
        keys.forEach((el) => {
            const Cname = this.capitalize(el.key);
            if (el.getset) {
                const propType = el.customtype ? ` : ${el.customtype}` : '';
                arr.push(`
        get ${el.key}() ${propType} {
          return this._${el.key};
        };
        `);
                arr.push(`
          set ${el.key}(value ${propType}) {
            this._${el.key} = value;
          };
          `);
            }
            else {
                if (el.get) {
                    arr.push(`
          get${Cname}() {
            return this.${el.key};
          };
          `);
                }
                if (el.set) {
                    arr.push(`
          set${Cname}(value) {
            this.${el.key} = value;
          };
          `);
                }
            }
        });
        return arr.join("");
    }
    createArrayMethods(node, keys) {
        const arr = [];
        const arrays = keys.filter(el => el.type === 'array');
        arrays.forEach(el => {
            arr.push(this.createArrayMethod(el, node));
        });
        return arr.join('');
    }
    capitalize(source) {
        if (!source) {
            return '';
        }
        return source.charAt(0).toUpperCase() + source.slice(1);
    }
    createArrayMethod(prop, node) {
        const arr = [];
        const Cname = this.capitalize(prop.name);
        const name = prop.name;
        const keyName = node.key;
        const arrayClassName = prop.root ? prop.root.name : '';
        let m = '';
        //add
        if (arrayClassName) {
            m = `
      add${Cname}(value){
        const instance = new ${arrayClassName}(value);
        this.${name}.push(instance);
      }
    `;
        }
        else {
            m = `
        add${Cname}(value){
          this.${name}.push(value);
        }
      `;
        }
        arr.push(m);
        if (arrayClassName) {
            m = `
      add${Cname}(values){
        values.forEach(el => {
          const instance = new ${arrayClassName}(el);
          this.${name}.push(instance);
        });
      }
    `;
        }
        else {
            m = `
      add${Cname}s(values){
        values.forEach(el => {
          this.${name}.push(el);
        });
      }
    `;
        }
        arr.push(m);
        //add from list
        //filter
        // m = `
        // filter${name}(value){
        //   this.${name}.push(value);
        // }
        // `;
        // arr.push(m);
        //remove
        //find
        if (!keyName) {
            m = `// key name used for filtering by id is not set `;
            arr.push(m);
        }
        m = `
      remove${Cname}(value){
        return this.${name}.filter(el => el.${keyName} === value);
      }
    `;
        arr.push(m);
        //sort by value
        m = `
    sort${Cname}ByValue(propName, asccending = true){
      return ${name}.sort((a, b)  => {
        if (asccending) {
          return a.propName - b.propName;
        }
        return b.propName - a.propName;
      });
    }
  `;
        arr.push(m);
        //sort by string
        //   m = `
        //   sort${name}ByValue(propName, asccending = true){
        //     return ${name}.sort((a, b)  => {
        //       if (asccending) {
        //         return a.propName - b.propName;
        //       }
        //       return b.propName - a.propName;
        //     });
        //   }
        // `;
        // arr.push(m);
        return arr.join("");
    }
    getDefaultValueByType(type) {
        switch (type) {
            case 'array':
                return '[]';
            case 'number':
                return '0';
            case 'string':
                return '';
            case 'object':
                return '';
            case 'boolean':
                return 'false';
            default:
                return 'null';
        }
    }
    createPropDeclarations(keys) {
        const arr = [];
        if (this.trackEvents) {
            arr.push(`
        const events = [];  
      `);
        }
        keys.forEach(el => {
            const { isPrivate, type, observable, customtype, getset } = el;
            let { name } = el;
            if (getset) {
                name = '_' + name;
            }
            const obs = observable ? '@observable' : '';
            const defaultValue = this.getDefaultValueByType(type);
            let propType = '';
            if (el.root) {
                propType = ` : ${el.root.name}`;
                if (type === 'array') {
                    propType += '[] ';
                }
            }
            else {
                if (customtype) {
                    propType = ` : ${customtype}`;
                }
            }
            if (isPrivate) {
                arr.push(`
        ${obs} ${name} ${propType}  = ${defaultValue};`);
            }
            else {
                arr.push(`
        ${obs}  ${name} ${propType} = ${defaultValue};`);
            }
        });
        return arr.join("");
    }
    createInterface(keys) {
        const arr = [];
        keys.forEach(el => {
            const { name, isPrivate, type, isInterface } = el;
            if (isInterface) {
                arr.push(`
          ${name} : ${type};`);
            }
        });
        return arr.join("");
    }
    createThisFunctions(keys) {
        const arr = [];
        keys.forEach(el => {
            arr.push(`
        this.set${el.key} = (value) => {
          this.${el.key} = value;
        };
        `);
            arr.push(`
        this.get${el.key} = () => {
          return this.${el.key};
        };
        `);
        });
        return arr.join("");
    }
    createAsClass(root) {
        const { props } = root;
        const propDeclarations = this.createPropDeclarations(props);
        const thisProps = this.createThisProperties(props);
        const functions = this.createClassFunctions(props);
        const arrayMethods = this.createArrayMethods(root, props);
        // if(root)
        // import { observable, computed, action, autorun, toJS } from 'mobx';
        // import { Injectable } from '@angular/core';
        // @Injectable()
        let result = `
    
    export class ${root.name} {

    ${propDeclarations}

    constructor(obj) {
      ${this.createDestructorObj(props)}
      ${thisProps}
    }
    ${functions}
    '// methods'
    ${arrayMethods}
    `;
        const interfaces = this.createInterface(props);
        return `
      ${interfaces}
      ${result}

    }
    `;
    }
}
TypescriptGenerator.ɵfac = function TypescriptGenerator_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"](); };
TypescriptGenerator.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TypescriptGenerator, factory: TypescriptGenerator.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_2__.observable
], TypescriptGenerator.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_2__.observable
], TypescriptGenerator.prototype, "key", void 0);


/***/ }),

/***/ 41174:
/*!****************************************************************************!*\
  !*** ./src/app/modules/general/generator/root-prop/root-prop.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootPropComponent": () => (/* binding */ RootPropComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-angular */ 1474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);




function RootPropComponent_div_0_div_1_li_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RootPropComponent_div_0_div_1_li_7_div_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r7.root.key = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Is KEY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RootPropComponent_div_0_div_1_li_7_div_1_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r3.customtype = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Custom type name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RootPropComponent_div_0_div_1_li_7_div_1_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r3.isPrivate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " IsPrivate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RootPropComponent_div_0_div_1_li_7_div_1_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r3.isRequired = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RootPropComponent_div_0_div_1_li_7_div_1_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r3.isInterface = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Is Interface ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RootPropComponent_div_0_div_1_li_7_div_1_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r3.getset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " GETTER SETTER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RootPropComponent_div_0_div_1_li_7_div_1_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r3.get = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Get ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RootPropComponent_div_0_div_1_li_7_div_1_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r3.set = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Set ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RootPropComponent_div_0_div_1_li_7_div_1_Template_input_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r3.constant = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Constant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RootPropComponent_div_0_div_1_li_7_div_1_Template_input_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return p_r3.observable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Observable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r3.key, " ", p_r3.guid, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r3.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx_r5.root.guid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.root.key)("value", p_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r3.customtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r3.isPrivate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r3.isRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r3.isInterface);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r3.getset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r3.get);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r3.set);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r3.constant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r3.observable);
} }
function RootPropComponent_div_0_div_1_li_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-root-prop", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("root", p_r3.root);
} }
function RootPropComponent_div_0_div_1_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RootPropComponent_div_0_div_1_li_7_div_1_Template, 45, 15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RootPropComponent_div_0_div_1_li_7_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r3.key !== "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r3.root);
} }
function RootPropComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Class Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RootPropComponent_div_0_div_1_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.root.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RootPropComponent_div_0_div_1_li_7_Template, 3, 2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.root.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.root.guid, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.root.props);
} }
function RootPropComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RootPropComponent_div_0_div_1_Template, 8, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.root);
} }
class RootPropComponent {
    constructor() { }
    ngOnInit() {
    }
}
RootPropComponent.ɵfac = function RootPropComponent_Factory(t) { return new (t || RootPropComponent)(); };
RootPropComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RootPropComponent, selectors: [["app-root-prop"]], inputs: { root: "root" }, decls: 1, vars: 0, consts: [[4, "mobxAutorun"], ["class", "root-prop", 4, "ngIf"], [1, "root-prop"], ["type", "text", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "row"], ["type", "radio", 3, "name", "ngModel", "value", "ngModelChange"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [3, "root"]], template: function RootPropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RootPropComponent_div_0_Template, 2, 1, "div", 0);
    } }, directives: [mobx_angular__WEBPACK_IMPORTED_MODULE_1__.MobxAutorunDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, RootPropComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb290LXByb3AuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 33216:
/*!*************************************************************!*\
  !*** ./src/app/modules/general/generator/root-prop/root.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IRoot": () => (/* binding */ IRoot)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ 15785);
/* harmony import */ var _rootProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rootProp */ 19358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




class IRoot {
    constructor(data = {}) {
        this.name = '';
        this.props = [];
        this.guid = '';
        this.key = null;
        this.newGuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        const { name, keys } = data;
        this.name = name;
        this.guid = this.newGuid();
        for (let i = 0; i < keys.length; i++) {
            this.props.push(new _rootProp__WEBPACK_IMPORTED_MODULE_0__.IRootProp(keys[i]));
        }
    }
}
IRoot.ɵfac = function IRoot_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"](); };
IRoot.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IRoot, factory: IRoot.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRoot.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRoot.prototype, "props", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRoot.prototype, "key", void 0);


/***/ }),

/***/ 19358:
/*!*****************************************************************!*\
  !*** ./src/app/modules/general/generator/root-prop/rootProp.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IRootProp": () => (/* binding */ IRootProp)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ 15785);
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root */ 33216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




class IRootProp {
    // constant: false
    constructor(obj) {
        this.isPrivate = false;
        this.getset = false;
        this.get = true;
        this.set = true;
        this.isObservable = false;
        this.isRequired = false;
        this.isInterface = false;
        this.customtype = '';
        this.name = '';
        this.guid = '';
        this.root = null;
        const { key, value, type, isPrivate, getset, get, set, isObservable, name, root, guid, isRequired, isInterface, customtype } = obj;
        this.key = key;
        this.value = value;
        this.type = type;
        this.isPrivate = isPrivate;
        this.get = get;
        this.set = set;
        this.isObservable = isObservable;
        this.name = name;
        this.guid = guid;
        this.isRequired = isRequired;
        this.isInterface = isInterface;
        this.customtype = customtype;
        this.getset = getset;
        if (root) {
            this.root = new _root__WEBPACK_IMPORTED_MODULE_0__.IRoot(root);
        }
    }
}
IRootProp.ɵfac = function IRootProp_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"](); };
IRootProp.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IRootProp, factory: IRootProp.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRootProp.prototype, "value", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRootProp.prototype, "key", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRootProp.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRootProp.prototype, "isPrivate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRootProp.prototype, "getset", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRootProp.prototype, "get", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRootProp.prototype, "set", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRootProp.prototype, "isObservable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRootProp.prototype, "isRequired", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRootProp.prototype, "isInterface", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRootProp.prototype, "customtype", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRootProp.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], IRootProp.prototype, "root", void 0);


/***/ }),

/***/ 42621:
/*!***************************************************************************!*\
  !*** ./src/app/modules/general/modules/code-editor/code-editor-module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeEditorModule": () => (/* binding */ CodeEditorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code/code.component */ 63003);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-angular */ 1474);
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-monaco-editor */ 36592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);







const monacoConfig = {
    baseUrl: 'assets',
    defaultOptions: { scrollBeyondLastLine: false },
    onMonacoLoad: () => {
        console.log(window.monaco);
    }, // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
};
class CodeEditorModule {
}
CodeEditorModule.ɵfac = function CodeEditorModule_Factory(t) { return new (t || CodeEditorModule)(); };
CodeEditorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CodeEditorModule });
CodeEditorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__.MonacoEditorModule.forRoot(monacoConfig),
            mobx_angular__WEBPACK_IMPORTED_MODULE_5__.MobxAngularModule,
            // codingRouter,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CodeEditorModule, { declarations: [_code_code_component__WEBPACK_IMPORTED_MODULE_0__.CodeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__.MonacoEditorModule, mobx_angular__WEBPACK_IMPORTED_MODULE_5__.MobxAngularModule], exports: [_code_code_component__WEBPACK_IMPORTED_MODULE_0__.CodeComponent] }); })();


/***/ }),

/***/ 63003:
/*!****************************************************************************!*\
  !*** ./src/app/modules/general/modules/code-editor/code/code.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeComponent": () => (/* binding */ CodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-angular */ 1474);
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-monaco-editor */ 36592);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);




function CodeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-monaco-editor", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CodeComponent_div_0_Template_ngx_monaco_editor_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r1.obj[ctx_r1.prop] = $event); })("onInit", function CodeComponent_div_0_Template_ngx_monaco_editor_onInit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.editorOptions.onInit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.editorOptions)("ngModel", ctx_r0.obj[ctx_r0.prop]);
} }
// import 'ace-builds';
// import 'ace-builds/webpack-resolver';
// import 'brace';
// import 'ace-builds';
// import 'ace-builds/webpack-resolver';
// import 'brace/theme/clouds';
// import 'brace/mode/c_cpp';
class CodeComponent {
    constructor() {
        // @ViewChild('editor') editor;
        // @Input() obj: any;
        this._obj = null;
        this.language = 'javascript';
        // codeEditorOptions: any = {
        //   automaticLayout: true // the important part
        // };
        this.monacoEditor = null;
        this.editorOptions = {
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
    }
    set obj(value) {
        this._obj = value;
        this._obj.layout = () => {
            this.monacoEditor && this.monacoEditor.layout();
        };
    }
    get obj() {
        return this._obj;
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
CodeComponent.ɵfac = function CodeComponent_Factory(t) { return new (t || CodeComponent)(); };
CodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeComponent, selectors: [["app-code"]], inputs: { obj: "obj", prop: "prop", language: "language" }, decls: 1, vars: 0, consts: [["class", "code", 4, "mobxAutorun"], [1, "code"], [1, "my-code-editor", 3, "options", "ngModel", "ngModelChange", "onInit"]], template: function CodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CodeComponent_div_0_Template, 2, 2, "div", 0);
    } }, directives: [mobx_angular__WEBPACK_IMPORTED_MODULE_1__.MobxAutorunDirective, ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_2__.EditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: [".brd1[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.test-button[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n\n.my-code-editor[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\n.editor[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.my-code-editor[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 100px);\n}\n\n\n\n.monaco-editor[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.code[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBOzs7R0FBQTs7QUFLQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtBQUFGIiwiZmlsZSI6ImNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJkMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50ZXN0LWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4ubXktY29kZS1lZGl0b3Ige1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uZWRpdG9ye1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuIH0gXG5cbi5teS1jb2RlLWVkaXRvciAuZWRpdG9yLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xufVxuXG4vKiAuY29kZSB7XG4gIGRpc3BsYXk6IGlubGluZSFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0gKi9cblxuLm1vbmFjby1lZGl0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jb2RlIHtcbiAgaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcbn0gXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 5072:
/*!*****************************************************************!*\
  !*** ./src/app/modules/general/modules/file-component/IFile.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IFile": () => (/* binding */ IFile)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ 15785);
/* harmony import */ var _IFileStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IFileStatus */ 98497);
/* harmony import */ var _services_pubsub_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pubsub/events.service */ 57094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





class IFile {
    constructor(obj = null) {
        this.fileContent = null;
        this.filePath = null;
        this.fileUrl = null;
        this.imageSrc = null;
        this.originalFileName = '';
        this.userid = '';
        this.status = _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.FreeSlot;
        this.changed = false;
        if (!obj) {
            this._id = this.uuidv4();
            return;
        }
        const { _id, fileContent, filePath, userid, dir } = obj;
        this._id = _id || this.uuidv4();
        this.originalFileName = filePath;
        if (dir) {
            // this.setDataFromDb(obj);
            this.fileUrl = `${_services_pubsub_events_service__WEBPACK_IMPORTED_MODULE_1__.default.serverUrl}/${dir}/${filePath}`;
            this.imageSrc = this.fileUrl;
            this.status = _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.ExistentFile;
            return;
        }
        this.fileContent = fileContent;
        this.filePath = filePath;
        // this is used in order to delete de file from disk
        if (filePath) {
            this.fileUrl = `${_services_pubsub_events_service__WEBPACK_IMPORTED_MODULE_1__.default.serverUrl}${filePath}`;
            this.status = _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.ExistentFile;
        }
    }
    static fromLogo(obj = {}) {
        const { dir, list } = obj;
        if (!dir || !list || !list.length) {
            return null;
        }
        const response = new IFile(null);
        const fileName = list[list.length - 1];
        const fileUrl = `${_services_pubsub_events_service__WEBPACK_IMPORTED_MODULE_1__.default.serverUrl}/${dir}/${fileName}`;
        response.originalFileName = fileName;
        response.fileUrl = fileUrl;
        response.imageSrc = fileUrl;
        response.status = _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.ExistentFile;
        return response;
    }
    setDataFromDb(obj = {}) {
        const { dir, list } = obj;
        if (!dir || !list || !list.length) {
            return;
        }
        this.fileUrl = `${_services_pubsub_events_service__WEBPACK_IMPORTED_MODULE_1__.default.serverUrl}/${dir}/${list[0]}`;
        this.imageSrc = this.fileUrl;
    }
    setImageSrc(val) {
        this.imageSrc = val;
    }
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    setId() {
        if (!this._id) {
            this._id = this.uuidv4();
        }
    }
    setOriginalName(name) {
        this.originalFileName = name;
    }
    setFileContent(fc) {
        this.fileContent = fc;
        if (this.status === _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.ExistentFile) {
            this.status = _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.ReplacedFile;
        }
        else {
            this.status = _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.AddedFile;
        }
    }
    hasContent() {
        return this.status == _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.AddedFile ||
            this.status == _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.ExistentFile ||
            this.status == _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.ReplacedFile;
    }
    delete() {
        this.fileContent = null;
        this.filePath = '';
        if (this.status === _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.ExistentFile) {
            this.status = _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.DeletedFile;
        }
        else {
            this.status = _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.FreeSlot;
        }
    }
    setContent(value) {
        this.fileContent = value;
        if (this.status === _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.ExistentFile) {
            this.status = _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.ReplacedFile;
        }
        else {
            this.status = _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.AddedFile;
        }
    }
    toDb() {
        return {
            _id: this._id,
            filePath: this.filePath,
            originalFileName: this.originalFileName
        };
    }
    updateFilePath(obj) {
        this.filePath = obj.filePath;
    }
    deleteFilePath() {
        this.filePath = '';
    }
    updateStatus(status) {
        this.status = status;
    }
    addFileToForm(formInstance) {
        const fData = this;
        if (!fData.fileContent) {
            return false;
        }
        const { fileContent, status, _id, originalFileName } = fData;
        const { name } = fileContent;
        if (status !== _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.AddedFile &&
            status !== _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.ReplacedFile) {
            return false;
        }
        const keyValue = _id;
        // const info = `${ _id },${status }`;
        formInstance.append(keyValue, fileContent, name);
        return true;
    }
    addCanvasFileToObject(dbObj) {
        const fData = this;
        if (!fData.fileContent) {
            return false;
        }
        if (fData.status !== _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.AddedFile &&
            fData.status !== _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.ReplacedFile) {
            return false;
        }
        // const info = `${fData._id},${fData.status}`;
        dbObj[fData.originalFileName] = fData.fileContent;
        // formInstance.append(info, fData.fileContent, fData.fileContent.fileName);
        return true;
    }
    shouldBeSaved() {
        return this.status === _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.AddedFile ||
            this.status === _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.ReplacedFile;
    }
}
IFile.ɵfac = function IFile_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinvalidFactory"](); };
IFile.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: IFile, factory: IFile.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_4__.observable
], IFile.prototype, "fileContent", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_4__.observable
], IFile.prototype, "filePath", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_4__.observable
], IFile.prototype, "fileUrl", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_4__.observable
], IFile.prototype, "imageSrc", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_4__.action
], IFile.prototype, "setFileContent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_4__.action
], IFile.prototype, "delete", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_4__.action
], IFile.prototype, "setContent", null);


/***/ }),

/***/ 98497:
/*!***********************************************************************!*\
  !*** ./src/app/modules/general/modules/file-component/IFileStatus.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IFileStatus": () => (/* binding */ IFileStatus)
/* harmony export */ });
var IFileStatus;
(function (IFileStatus) {
    IFileStatus[IFileStatus["FreeSlot"] = 0] = "FreeSlot";
    IFileStatus[IFileStatus["AddedFile"] = 1] = "AddedFile";
    IFileStatus[IFileStatus["ExistentFile"] = 2] = "ExistentFile";
    IFileStatus[IFileStatus["DeletedFile"] = 3] = "DeletedFile";
    IFileStatus[IFileStatus["ReplacedFile"] = 4] = "ReplacedFile";
})(IFileStatus || (IFileStatus = {}));


/***/ }),

/***/ 78097:
/*!**************************************************************************!*\
  !*** ./src/app/modules/general/modules/file-component/appfile.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppFileModule": () => (/* binding */ AppFileModule)
/* harmony export */ });
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/pipes-module */ 99635);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.component */ 94748);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-angular */ 1474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _images_viewer_component_images_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images-viewer-component/images-viewer.component */ 87430);
/* harmony import */ var _image_viewer_component_image_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-viewer-component/image-viewer.component */ 32258);
/* harmony import */ var _files_files_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files/files.component */ 79453);
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file/file.component */ 57149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);











class AppFileModule {
}
AppFileModule.ɵfac = function AppFileModule_Factory(t) { return new (t || AppFileModule)(); };
AppFileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppFileModule });
AppFileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, mobx_angular__WEBPACK_IMPORTED_MODULE_10__.MobxAngularModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppFileModule, { declarations: [_image_component__WEBPACK_IMPORTED_MODULE_1__.ImageComponent, _images_viewer_component_images_viewer_component__WEBPACK_IMPORTED_MODULE_2__.ImagesViewerComponent, _image_viewer_component_image_viewer_component__WEBPACK_IMPORTED_MODULE_3__.ImageViewerComponent, _file_file_component__WEBPACK_IMPORTED_MODULE_5__.FileComponent, _files_files_component__WEBPACK_IMPORTED_MODULE_4__.FilesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, mobx_angular__WEBPACK_IMPORTED_MODULE_10__.MobxAngularModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule], exports: [_image_component__WEBPACK_IMPORTED_MODULE_1__.ImageComponent, _images_viewer_component_images_viewer_component__WEBPACK_IMPORTED_MODULE_2__.ImagesViewerComponent, _image_viewer_component_image_viewer_component__WEBPACK_IMPORTED_MODULE_3__.ImageViewerComponent, _file_file_component__WEBPACK_IMPORTED_MODULE_5__.FileComponent, _files_files_component__WEBPACK_IMPORTED_MODULE_4__.FilesComponent] }); })();


/***/ }),

/***/ 57149:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/general/modules/file-component/file/file.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileComponent": () => (/* binding */ FileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-angular */ 1474);
/* harmony import */ var _IFileStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IFileStatus */ 98497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _pipes_LS_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/LS.pipe */ 34489);








function FileComponent_div_0_div_1_em_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "em", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r2.dragging ? ctx_r2.imageSrc.length > 0 ? ctx_r2.overlayColor : ctx_r2.activeColor : ctx_r2.imageSrc.length > 0 ? ctx_r2.overlayColor : ctx_r2.baseColor);
} }
function FileComponent_div_0_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.obj.fileContent.name, " ");
} }
function FileComponent_div_0_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FileComponent_div_0_div_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r5.deletePicture(ctx_r5.obj); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "ls");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "DELETE"));
} }
function FileComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragenter", function FileComponent_div_0_div_1_Template_label_dragenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.handleDragEnter(); })("dragleave", function FileComponent_div_0_div_1_Template_label_dragleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.handleDragLeave(); })("drop", function FileComponent_div_0_div_1_Template_label_drop_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.handleDrop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FileComponent_div_0_div_1_em_2_Template, 1, 2, "em", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FileComponent_div_0_div_1_div_3_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FileComponent_div_0_div_1_Template_input_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.handleClick($event); })("change", function FileComponent_div_0_div_1_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.handleInputChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FileComponent_div_0_div_1_button_5_Template, 3, 3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("outline-color", ctx_r1.dragging ? ctx_r1.activeColor : ctx_r1.baseColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("loaded", ctx_r1.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.loaded && ctx_r1.imageSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.obj && ctx_r1.obj.fileContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.obj.hasContent());
} }
function FileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FileComponent_div_0_div_1_Template, 6, 7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.obj);
} }
// import * as canvasBlob from 'canvasblob';
class FileComponent {
    constructor() {
        this.fileAddedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.fileRemovedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.borderColor = '#ccc';
        this.iconColor = '#ccc';
        this.activeColor = 'green';
        this.baseColor = '#ccc';
        this.overlayColor = 'rgba(255,255,255,0.5)';
        this.dragging = false;
        this.loaded = false;
        this.imageLoaded = false;
        this.imageSrc = null;
        this.fileData = null;
        this.fileClass = 'uploader';
    }
    set obj(value) {
        this._obj = value;
        this.fileData = value;
        if (value && value.filePath) {
            this.setImageSrc(value.fileUrl);
        }
    }
    get obj() {
        return this._obj;
    }
    ngOnInit() {
        if (this.extraClass) {
            this.fileClass = `uploader ${this.extraClass}`;
        }
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
    handleClick(e) {
        if (this.isCtrlDisabled()) {
            e.preventDefault();
            return;
        }
    }
    handleInputChange(e) {
        debugger;
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var fileData = this.obj;
        fileData.setFileContent(file);
        fileData.setOriginalName(file.name);
        // this.obj.setOriginalName(file.name);
        // this.loaded = false;
        if (!this.obj.changed && this.fileAddedEvent) {
            this.obj.changed = true;
            if (this.obj.status === _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.AddedFile) {
                this.fileAddedEvent.emit();
            }
        }
    }
    _handleReaderLoaded(e) {
        var reader = e.target;
        this.setImageSrc(reader.result);
        this.loaded = true;
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
    deletePicture(objInstance) {
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
}
FileComponent.ɵfac = function FileComponent_Factory(t) { return new (t || FileComponent)(); };
FileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FileComponent, selectors: [["app-file"]], inputs: { prop: "prop", extraClass: "extraClass", isDisabled: "isDisabled", obj: "obj" }, outputs: { fileAddedEvent: "fileAddedEvent", fileRemovedEvent: "fileRemovedEvent" }, decls: 1, vars: 0, consts: [[4, "mobxAutorun"], [4, "ngIf"], ["ondragover", "return false;", 1, "uploader", "small1", 3, "dragenter", "dragleave", "drop"], ["class", "icon icon-upload", 3, "color", 4, "ngIf"], ["type", "file", "name", "file", 3, "click", "change"], ["type", "button", "class", "btn btn-link", 3, "click", 4, "ngIf"], [1, "icon", "icon-upload"], ["type", "button", 1, "btn", "btn-link", 3, "click"]], template: function FileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FileComponent_div_0_Template, 2, 1, "div", 0);
    } }, directives: [mobx_angular__WEBPACK_IMPORTED_MODULE_3__.MobxAutorunDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], pipes: [_pipes_LS_pipe__WEBPACK_IMPORTED_MODULE_1__.LS], styles: [".uploader[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.uploader[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #efefef;\n  background-color: rgba(0, 0, 0, 0.02);\n  cursor: pointer;\n  display: flex;\n  height: 150px;\n  justify-content: center;\n  outline: 3px dashed #ccc;\n  position: relative;\n  width: 150px;\n  margin-left: 2px;\n}\n.uploader.small[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.uploader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .uploader[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.uploader[_ngcontent-%COMP%], .uploader[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  transition: all 100ms ease-in;\n}\n.uploader[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #eee;\n  color: rgba(0, 0, 0, 0.2);\n  font-size: 5em;\n}\n.uploader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0;\n  max-height: 100%;\n  max-width: 100%;\n  position: absolute;\n  transition: all 300ms ease-in;\n}\n.uploader[_ngcontent-%COMP%]   img.loaded[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQUE7QUFFQTtFQUNFLGFBQUE7QUFBRjtBQUdBO0VBRUUsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFDQSx3QkFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREY7QUFFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQUo7QUFJQTs7RUFFRSxvQkFBQTtBQURGO0FBSUE7O0VBTUUsNkJBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQURGO0FBSUE7RUFFRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFNQSw2QkFBQTtBQUhGO0FBWUE7RUFDRSxVQUFBO0FBVEYiLCJmaWxlIjoiZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZpbGUgVXBsb2FkZXIgU3R5bGVzICAqL1xuXG4udXBsb2FkZXIgaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udXBsb2FkZXIge1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3V0bGluZTogM3B4IGRhc2hlZCAjY2NjO1xuICAvLyBvdXRsaW5lLW9mZnNldDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgJi5zbWFsbHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4udXBsb2FkZXIgaW1nLFxuLnVwbG9hZGVyIC5pY29uIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi51cGxvYWRlcixcbi51cGxvYWRlciAuaWNvbiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluO1xufVxuXG4udXBsb2FkZXIgLmljb24ge1xuICBjb2xvcjogI2VlZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZm9udC1zaXplOiA1ZW07XG59XG5cbi51cGxvYWRlciBpbWcge1xuICAvL2xlZnQ6IDUwJTtcbiAgb3BhY2l0eTogMDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW47XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluO1xuICAvLy13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC8vLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLy8tbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC8vLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC8vei1pbmRleDogLTE7XG59XG5cbi51cGxvYWRlciBpbWcubG9hZGVkIHtcbiAgb3BhY2l0eTogMTtcbn1cbiJdfQ== */"], changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_3__.observable
], FileComponent.prototype, "imageSrc", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_3__.observable
], FileComponent.prototype, "fileData", void 0);


/***/ }),

/***/ 79453:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/general/modules/file-component/files/files.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesComponent": () => (/* binding */ FilesComponent)
/* harmony export */ });
/* harmony import */ var _IFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IFile */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-angular */ 1474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../file/file.component */ 57149);





function FilesComponent_span_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-file", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("fileAddedEvent", function FilesComponent_span_0_div_2_div_1_Template_app_file_fileAddedEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r4.onFileAddedEvent($event); })("fileRemovedEvent", function FilesComponent_span_0_div_2_div_1_Template_app_file_fileRemovedEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r6.onFileRemovedEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("obj", el_r2);
} }
function FilesComponent_span_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FilesComponent_span_0_div_2_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", el_r2.status !== 3);
} }
function FilesComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FilesComponent_span_0_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.pictures);
} }
class FilesComponent {
    constructor() {
        // private _dir: any;
        // @Input() set dir(value) {
        //      this._dir = value;
        // }
        // get dir(): any {
        //   return this._dir;
        // }
        this.pictures = [];
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
        return new _IFile__WEBPACK_IMPORTED_MODULE_0__.IFile(obj);
    }
    increaseNoOfPictures() {
        this.pictures.push(this.createFile(null));
    }
    decreseNoOfPictures() {
        this.pictures.pop();
    }
}
FilesComponent.ɵfac = function FilesComponent_Factory(t) { return new (t || FilesComponent)(); };
FilesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FilesComponent, selectors: [["app-files"]], inputs: { pictures: "pictures" }, decls: 1, vars: 0, consts: [[4, "mobxAutorun"], [1, "flex-grid"], [4, "ngFor", "ngForOf"], ["class", "col", 4, "ngIf"], [1, "col"], ["prop", "fileContent", 3, "obj", "fileAddedEvent", "fileRemovedEvent"]], template: function FilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FilesComponent_span_0_Template, 3, 1, "span", 0);
    } }, directives: [mobx_angular__WEBPACK_IMPORTED_MODULE_3__.MobxAutorunDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _file_file_component__WEBPACK_IMPORTED_MODULE_1__.FileComponent], styles: [".flex-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.col[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 25%;\n  box-sizing: border-box;\n  margin-top: 25px;\n}\n\n@media (max-width: 400px) {\n  .flex-grid[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.flex-grid-thirds[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.flex-grid-thirds[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  width: 32%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0U7SUFDRSxjQUFBO0VBR0Y7QUFDRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtBQUdGIiwiZmlsZSI6ImZpbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb2wge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMjUlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5mbGV4LWdyaWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5mbGV4LWdyaWQtdGhpcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZsZXgtZ3JpZC10aGlyZHMgLmNvbCB7XG4gIHdpZHRoOiAzMiU7XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 94748:
/*!***************************************************************************!*\
  !*** ./src/app/modules/general/modules/file-component/image.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageComponent": () => (/* binding */ ImageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-angular */ 1474);
/* harmony import */ var _IFileStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IFileStatus */ 98497);
/* harmony import */ var blueimp_load_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blueimp-load-image */ 119);
/* harmony import */ var blueimp_load_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blueimp_load_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _pipes_LS_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/LS.pipe */ 34489);




// import 'blueimp-load-image/js';





function ImageComponent_div_0_div_1_em_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "em", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r2.dragging ? ctx_r2.imageSrc.length > 0 ? ctx_r2.overlayColor : ctx_r2.activeColor : ctx_r2.imageSrc.length > 0 ? ctx_r2.overlayColor : ctx_r2.baseColor);
} }
function ImageComponent_div_0_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImageComponent_div_0_div_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r4.deletePicture(ctx_r4.obj); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "ls");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "DELETE"));
} }
function ImageComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dragenter", function ImageComponent_div_0_div_1_Template_label_dragenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r6.handleDragEnter(); })("dragleave", function ImageComponent_div_0_div_1_Template_label_dragleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.handleDragLeave(); })("drop", function ImageComponent_div_0_div_1_Template_label_drop_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.handleDrop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ImageComponent_div_0_div_1_em_2_Template, 1, 2, "em", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("load", function ImageComponent_div_0_div_1_Template_img_load_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r10.handleImageLoad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImageComponent_div_0_div_1_Template_input_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r11.handleClick($event); })("change", function ImageComponent_div_0_div_1_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r12.handleInputChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ImageComponent_div_0_div_1_button_5_Template, 3, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("outline-color", ctx_r1.dragging ? ctx_r1.activeColor : ctx_r1.baseColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("loaded", ctx_r1.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.loaded && ctx_r1.imageSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("loaded", ctx_r1.imageLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.obj.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.obj.hasContent());
} }
function ImageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ImageComponent_div_0_div_1_Template, 6, 9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.obj);
} }
// import * as canvasBlob from 'canvasblob';
class ImageComponent {
    constructor() {
        this.shouldResize = true;
        this.fileAddedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.fileRemovedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.borderColor = '#ccc';
        this.iconColor = '#ccc';
        this.activeColor = 'green';
        this.baseColor = '#ccc';
        this.overlayColor = 'rgba(255,255,255,0.5)';
        this.dragging = false;
        this.loaded = false;
        this.imageLoaded = false;
        this.imageSrc = null;
        this.fileData = null;
        this.fileClass = 'uploader';
    }
    set obj(value) {
        this._obj = value;
        this.fileData = value;
        if (value && value.filePath) {
            this.setImageSrc(value.fileUrl);
        }
    }
    get obj() {
        return this._obj;
    }
    ngOnInit() {
        if (this.extraClass) {
            this.fileClass = `uploader ${this.extraClass}`;
        }
    }
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
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
    blueImpResizeImage(origFile) {
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
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                const image = new Image();
                image.onload = function (imgLoadData) {
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.width = image.width / 4;
                    canvas.height = image.height / 4;
                    context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
                    const callb = (canvas1) => {
                        const response1 = canvas1.toDataURL();
                        resolve(response1);
                    };
                    // const response = canvas.toDataURL();
                    blueimp_load_image__WEBPACK_IMPORTED_MODULE_1__.transform(image, options, callb, origFile, {
                        originalWidth: image.naturalWidth || image.width,
                        originalHeight: image.naturalHeight || image.height,
                    });
                    // resolve(response);
                };
                image.onabort = function (abortedEvent) {
                };
                //@ts-ignore
                image.src = event.target.result;
            };
            fileReader.onabort = function (abortedEvent) {
            };
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
        if (shouldresizeValue) {
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
        this.obj.setFileContent(file);
        const reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    canvasToBlob(dataURI, filename) {
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
        return blob;
    }
    imageResolved(b64Image, filename) {
        const blob = this.canvasToBlob(b64Image, filename);
        // const blob =  canvasBlob.dataURLtoBlob(b64Image);
        this.setImageSrc(b64Image);
        this.obj.setFileContent(blob);
        this.loaded = true;
        if (!this.obj.changed && this.fileAddedEvent) {
            this.obj.changed = true;
            if (this.obj.status === _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.AddedFile) {
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
            if (this.obj.status === _IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.AddedFile) {
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
    deletePicture(objInstance) {
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
    resizeImage(origFile) {
        if (!origFile) {
            return null;
        }
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(origFile);
            fileReader.onload = (event) => {
                const image = new Image();
                image.onload = () => {
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.width = image.width / 4;
                    canvas.height = image.height / 4;
                    context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
                    const response = canvas.toDataURL();
                    resolve(response);
                };
                //@ts-ignore
                image.src = event.target.result;
            };
        });
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(); };
ImageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ImageComponent, selectors: [["app-image"]], inputs: { shouldResize: "shouldResize", prop: "prop", extraClass: "extraClass", isDisabled: "isDisabled", obj: "obj" }, outputs: { fileAddedEvent: "fileAddedEvent", fileRemovedEvent: "fileRemovedEvent" }, decls: 1, vars: 0, consts: [[4, "mobxAutorun"], [4, "ngIf"], ["ondragover", "return false;", 1, "uploader", "small", 3, "dragenter", "dragleave", "drop"], ["class", "icon icon-upload", 3, "color", 4, "ngIf"], ["alt", "", 3, "src", "load"], ["type", "file", "name", "file", "accept", "image/*", 3, "click", "change"], ["type", "button", "class", "btn btn-link", 3, "click", 4, "ngIf"], [1, "icon", "icon-upload"], ["type", "button", 1, "btn", "btn-link", 3, "click"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ImageComponent_div_0_Template, 2, 1, "div", 0);
    } }, directives: [mobx_angular__WEBPACK_IMPORTED_MODULE_4__.MobxAutorunDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_pipes_LS_pipe__WEBPACK_IMPORTED_MODULE_2__.LS], styles: [".uploader[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.uploader[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #efefef;\n  background-color: rgba(0, 0, 0, 0.02);\n  cursor: pointer;\n  display: flex;\n  height: 150px;\n  justify-content: center;\n  outline: 3px dashed #ccc;\n  position: relative;\n  width: 150px;\n  margin-left: 2px;\n}\n.uploader.small[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.uploader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .uploader[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.uploader[_ngcontent-%COMP%], .uploader[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  transition: all 100ms ease-in;\n}\n.uploader[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #eee;\n  color: rgba(0, 0, 0, 0.2);\n  font-size: 5em;\n}\n.uploader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0;\n  max-height: 100%;\n  max-width: 100%;\n  position: absolute;\n  transition: all 300ms ease-in;\n}\n.uploader[_ngcontent-%COMP%]   img.loaded[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUFBO0FBRUE7RUFDRSxhQUFBO0FBQUY7QUFHQTtFQUVFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0VBQ0Esd0JBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURGO0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUFKO0FBSUE7O0VBRUUsb0JBQUE7QUFERjtBQUlBOztFQU1FLDZCQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFERjtBQUlBO0VBRUUsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBTUEsNkJBQUE7QUFIRjtBQVlBO0VBQ0UsVUFBQTtBQVRGIiwiZmlsZSI6ImltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRmlsZSBVcGxvYWRlciBTdHlsZXMgICovXG5cbi51cGxvYWRlciBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi51cGxvYWRlciB7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTUwcHg7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdXRsaW5lOiAzcHggZGFzaGVkICNjY2M7XG4gIC8vIG91dGxpbmUtb2Zmc2V0OiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICAmLnNtYWxse1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5cbi51cGxvYWRlciBpbWcsXG4udXBsb2FkZXIgLmljb24ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnVwbG9hZGVyLFxuLnVwbG9hZGVyIC5pY29uIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XG59XG5cbi51cGxvYWRlciAuaWNvbiB7XG4gIGNvbG9yOiAjZWVlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBmb250LXNpemU6IDVlbTtcbn1cblxuLnVwbG9hZGVyIGltZyB7XG4gIC8vbGVmdDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy90b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW47XG4gIC8vLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLy8tbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAvLy1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLy8tby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLy96LWluZGV4OiAtMTtcbn1cblxuLnVwbG9hZGVyIGltZy5sb2FkZWQge1xuICBvcGFjaXR5OiAxO1xufVxuIl19 */"], changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_4__.observable
], ImageComponent.prototype, "imageSrc", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_4__.observable
], ImageComponent.prototype, "fileData", void 0);


/***/ }),

/***/ 32258:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/general/modules/image-viewer-component/image-viewer.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageViewerComponent": () => (/* binding */ ImageViewerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-angular */ 1474);
/* harmony import */ var _file_component_IFileStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../file-component/IFileStatus */ 98497);






function ImageViewerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function ImageViewerComponent_div_0_Template_img_load_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.handleImageLoad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("loaded", ctx_r0.imageLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class ImageViewerComponent {
    constructor() {
        this.fileAddedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.fileRemovedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.borderColor = '#ccc';
        this.iconColor = '#ccc';
        this.activeColor = 'green';
        this.baseColor = '#ccc';
        this.overlayColor = 'rgba(255,255,255,0.5)';
        this.dragging = false;
        this.loaded = false;
        this.imageLoaded = false;
        this.imageSrc = '';
        this.fileData = null;
        this.fileClass = 'uploader';
    }
    set obj(value) {
        this._obj = value;
        this.fileData = value;
        if (value && value.filePath) {
            this.imageSrc = value.fileUrl;
        }
    }
    get obj() {
        return this._obj;
    }
    ngOnInit() {
        if (this.extraClass) {
            this.fileClass = `uploader ${this.extraClass}`;
        }
        // if(this.isDisabled){
        //   this.fileClass = `uploader isDisabled ${this.extraClass}`;
        // }
        // try {
        //   if (this.obj && this.prop) {
        //     this.imageSrc = this.obj[this.prop];
        //   }
        // }
        // catch (ex)
        // {
        //   console.log(ex);
        // }
    }
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
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
    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        //this.obj[this.prop] =  file;
        this.obj.setId();
        this.obj.setFileContent(file);
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        this.loaded = false;
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
        if (!this.obj.changed && this.fileAddedEvent) {
            this.obj.changed = true;
            if (this.obj.status === _file_component_IFileStatus__WEBPACK_IMPORTED_MODULE_0__.IFileStatus.AddedFile) {
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
    deletePicture(objInstance) {
        this.imageSrc = null;
        objInstance.delete();
        if (this.fileRemovedEvent) {
            this.fileRemovedEvent.emit(objInstance);
        }
        //trigger
    }
}
ImageViewerComponent.ɵfac = function ImageViewerComponent_Factory(t) { return new (t || ImageViewerComponent)(); };
ImageViewerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImageViewerComponent, selectors: [["app-image-viewer-component"]], inputs: { prop: "prop", extraClass: "extraClass", isDisabled: "isDisabled", obj: "obj" }, outputs: { fileAddedEvent: "fileAddedEvent", fileRemovedEvent: "fileRemovedEvent" }, decls: 1, vars: 0, consts: [[4, "mobxAutorun"], [1, "imgviewer"], ["alt", "", 3, "src", "load"]], template: function ImageViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ImageViewerComponent_div_0_Template, 3, 3, "div", 0);
    } }, directives: [mobx_angular__WEBPACK_IMPORTED_MODULE_2__.MobxAutorunDirective], styles: [".imgviewer[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #efefef;\n  background-color: rgba(0, 0, 0, 0.02);\n  display: flex;\n  height: 150px;\n  justify-content: center;\n  outline: 3px dashed #ccc;\n  position: relative;\n  width: 150px;\n  margin-left: 2px;\n}\n.imgviewer.small[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.imgviewer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .imgviewer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.imgviewer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  position: absolute;\n  transition: all 300ms ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBQTtBQUVBO0VBRUUsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBRUEsYUFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUNBLHdCQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFBSjtBQUlBOztFQUVFLG9CQUFBO0FBREY7QUFJQTtFQUVFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBTUEsNkJBQUE7QUFIRiIsImZpbGUiOiJpbWFnZS12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGaWxlIFVwbG9hZGVyIFN0eWxlcyAgKi9cblxuLmltZ3ZpZXdlciB7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3V0bGluZTogM3B4IGRhc2hlZCAjY2NjO1xuICAvLyBvdXRsaW5lLW9mZnNldDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgJi5zbWFsbHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4uaW1ndmlld2VyIGltZyxcbi5pbWd2aWV3ZXIgLmljb24ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmltZ3ZpZXdlciBpbWcge1xuICAvL2xlZnQ6IDUwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW47XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluO1xuICAvLy13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC8vLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLy8tbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC8vLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC8vei1pbmRleDogLTE7XG59XG4iXX0= */"], changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__.observable
], ImageViewerComponent.prototype, "imageSrc", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    mobx_angular__WEBPACK_IMPORTED_MODULE_2__.observable
], ImageViewerComponent.prototype, "fileData", void 0);


/***/ }),

/***/ 87430:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/general/modules/images-viewer-component/images-viewer.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagesViewerComponent": () => (/* binding */ ImagesViewerComponent)
/* harmony export */ });
/* harmony import */ var _file_component_IFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../file-component/IFile */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-angular */ 1474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _image_viewer_component_image_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image-viewer-component/image-viewer.component */ 32258);
// import { observable, computed, action } from 'mobx-angular';





function ImagesViewerComponent_span_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-image-viewer-component", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("fileAddedEvent", function ImagesViewerComponent_span_0_div_2_div_1_Template_app_image_viewer_component_fileAddedEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r4.onFileAddedEvent($event); })("fileRemovedEvent", function ImagesViewerComponent_span_0_div_2_div_1_Template_app_image_viewer_component_fileRemovedEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r6.onFileRemovedEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("obj", el_r2);
} }
function ImagesViewerComponent_span_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ImagesViewerComponent_span_0_div_2_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", el_r2.status !== 3);
} }
function ImagesViewerComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ImagesViewerComponent_span_0_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.pictures);
} }
// import EventsService from '../../services/pubsub/events.service';
class ImagesViewerComponent {
    constructor() {
        // private _dir: any;
        // @Input() set dir(value) {
        //      this._dir = value;
        // }
        // get dir(): any {
        //   return this._dir;
        // }
        this.pictures = [];
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
        return new _file_component_IFile__WEBPACK_IMPORTED_MODULE_0__.IFile(obj);
    }
    increaseNoOfPictures() {
        this.pictures.push(this.createFile(null));
    }
    decreseNoOfPictures() {
        this.pictures.pop();
    }
}
ImagesViewerComponent.ɵfac = function ImagesViewerComponent_Factory(t) { return new (t || ImagesViewerComponent)(); };
ImagesViewerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ImagesViewerComponent, selectors: [["app-images-viewer-component"]], inputs: { pictures: "pictures" }, decls: 1, vars: 0, consts: [[4, "mobxAutorun"], [1, "flex-grid"], [4, "ngFor", "ngForOf"], ["class", "col", 4, "ngIf"], [1, "col"], ["prop", "fileContent", 3, "obj", "fileAddedEvent", "fileRemovedEvent"]], template: function ImagesViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ImagesViewerComponent_span_0_Template, 3, 1, "span", 0);
    } }, directives: [mobx_angular__WEBPACK_IMPORTED_MODULE_3__.MobxAutorunDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _image_viewer_component_image_viewer_component__WEBPACK_IMPORTED_MODULE_1__.ImageViewerComponent], styles: [".flex-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.col[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 25%;\n  box-sizing: border-box;\n  margin-top: 25px;\n}\n\n@media (max-width: 400px) {\n  .flex-grid[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.flex-grid-thirds[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.flex-grid-thirds[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  width: 32%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlcy12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsT0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRTtJQUNFLGNBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0FBR0YiLCJmaWxlIjoiaW1hZ2VzLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY29sIHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDI1JTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuZmxleC1ncmlkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4uZmxleC1ncmlkLXRoaXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4LWdyaWQtdGhpcmRzIC5jb2wge1xuICB3aWR0aDogMzIlO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 34489:
/*!**********************************************************!*\
  !*** ./src/app/modules/general/modules/pipes/LS.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LS": () => (/* binding */ LS)
/* harmony export */ });
/* harmony import */ var _services_localization_localization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/localization/localization.service */ 48648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class LS {
    constructor() {
    }
    transform(key) {
        //  console.log('key ', key);
        return _services_localization_localization_service__WEBPACK_IMPORTED_MODULE_0__.default.language[key] || key;
    }
}
LS.ɵfac = function LS_Factory(t) { return new (t || LS)(); };
LS.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "ls", type: LS, pure: false });


/***/ }),

/***/ 5259:
/*!***********************************************************!*\
  !*** ./src/app/modules/general/modules/pipes/LSP.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LSP": () => (/* binding */ LSP)
/* harmony export */ });
/* harmony import */ var _services_localization_localization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/localization/localization.service */ 48648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class LSP {
    constructor() {
    }
    transform(key) {
        //  console.log('key ', key);
        const keys = key.split('.');
        var val = _services_localization_localization_service__WEBPACK_IMPORTED_MODULE_0__.default.language[keys[0]];
        if (!val) {
            return key;
        }
        for (var i = 1; i < keys.length; i++) {
            val = val[keys[i]];
        }
        return val;
    }
}
LSP.ɵfac = function LSP_Factory(t) { return new (t || LSP)(); };
LSP.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "lsp", type: LSP, pure: false });


/***/ }),

/***/ 92427:
/*!*************************************************************!*\
  !*** ./src/app/modules/general/modules/pipes/OnlyNumber.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlyNumber": () => (/* binding */ OnlyNumber)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class OnlyNumber {
    constructor() {
    }
    transform(key) {
        //  console.log('key ', key);
        return key.replace(/[^0-9]+/g, '');
    }
}
OnlyNumber.ɵfac = function OnlyNumber_Factory(t) { return new (t || OnlyNumber)(); };
OnlyNumber.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "number", type: OnlyNumber, pure: false });


/***/ }),

/***/ 27287:
/*!********************************************************************!*\
  !*** ./src/app/modules/general/modules/pipes/friendlyDate.pipe.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrieldlyDate": () => (/* binding */ FrieldlyDate)
/* harmony export */ });
/* harmony import */ var _services_utils_AppHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/utils/AppHelpers */ 71468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class FrieldlyDate {
    transform(dateValue) {
        return _services_utils_AppHelpers__WEBPACK_IMPORTED_MODULE_0__.default.friendlyDate(dateValue);
    }
}
FrieldlyDate.ɵfac = function FrieldlyDate_Factory(t) { return new (t || FrieldlyDate)(); };
FrieldlyDate.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "friendlyDate", type: FrieldlyDate, pure: true });


/***/ }),

/***/ 82113:
/*!*****************************************************************!*\
  !*** ./src/app/modules/general/modules/pipes/keep-html.pipe.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscapeHtmlPipe": () => (/* binding */ EscapeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 39075);


class EscapeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}
EscapeHtmlPipe.ɵfac = function EscapeHtmlPipe_Factory(t) { return new (t || EscapeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
EscapeHtmlPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keepHtml", type: EscapeHtmlPipe, pure: true });


/***/ }),

/***/ 36750:
/*!******************************************************************!*\
  !*** ./src/app/modules/general/modules/pipes/objectKeys.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectKeysPipe": () => (/* binding */ ObjectKeysPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class ObjectKeysPipe {
    transform(map, ...parameters) {
        if (!map)
            return undefined;
        const keys = Object.keys(map)
            .map((key) => ({ 'key': key, 'value': map[key] }));
        return keys;
    }
}
ObjectKeysPipe.ɵfac = function ObjectKeysPipe_Factory(t) { return new (t || ObjectKeysPipe)(); };
ObjectKeysPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keysToArray", type: ObjectKeysPipe, pure: true });


/***/ }),

/***/ 99635:
/*!***************************************************************!*\
  !*** ./src/app/modules/general/modules/pipes/pipes-module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _keep_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keep-html.pipe */ 82113);
/* harmony import */ var _objectKeys_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectKeys.pipe */ 36750);
/* harmony import */ var _friendlyDate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friendlyDate.pipe */ 27287);
/* harmony import */ var _LS_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LS.pipe */ 34489);
/* harmony import */ var _LSP_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LSP.pipe */ 5259);
/* harmony import */ var _OnlyNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OnlyNumber */ 92427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);








class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_keep_html_pipe__WEBPACK_IMPORTED_MODULE_0__.EscapeHtmlPipe,
        _objectKeys_pipe__WEBPACK_IMPORTED_MODULE_1__.ObjectKeysPipe,
        _friendlyDate_pipe__WEBPACK_IMPORTED_MODULE_2__.FrieldlyDate,
        _LS_pipe__WEBPACK_IMPORTED_MODULE_3__.LS,
        _LSP_pipe__WEBPACK_IMPORTED_MODULE_4__.LSP,
        _OnlyNumber__WEBPACK_IMPORTED_MODULE_5__.OnlyNumber], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule], exports: [_keep_html_pipe__WEBPACK_IMPORTED_MODULE_0__.EscapeHtmlPipe,
        _objectKeys_pipe__WEBPACK_IMPORTED_MODULE_1__.ObjectKeysPipe,
        _friendlyDate_pipe__WEBPACK_IMPORTED_MODULE_2__.FrieldlyDate,
        _LS_pipe__WEBPACK_IMPORTED_MODULE_3__.LS,
        _LSP_pipe__WEBPACK_IMPORTED_MODULE_4__.LSP,
        _OnlyNumber__WEBPACK_IMPORTED_MODULE_5__.OnlyNumber] }); })();


/***/ }),

/***/ 33120:
/*!********************************************************************!*\
  !*** ./src/app/modules/general/modules/services/facade/IDBUser.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDBUser": () => (/* binding */ IDBUser)
/* harmony export */ });
class IDBUser {
    constructor(obj) {
        this._id = '';
        this.nick = '';
        if (!obj) {
            return;
        }
        const { _id, nick } = obj;
        this._id = _id;
        this.nick = nick;
    }
}


/***/ }),

/***/ 16102:
/*!******************************************************************!*\
  !*** ./src/app/modules/general/modules/services/facade/IUser.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IUser": () => (/* binding */ IUser)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ 15785);


class IUser {
    constructor(obj, serverUrl = '') {
        this._id = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
        this.nick = '';
        this.online = false;
        this.coordinates = {};
        this.logo = {};
        this.image = {};
        this.amount = 0;
        this.token = '';
        this.permission = 0;
        this.bulletKey = '';
        if (!obj) {
            return;
        }
        const { _id, firstName, lastName, email, online, phone, coordinates, logo, amount, nick, token, cr = 1200, permission = 0, bulletKey = '' } = obj;
        this.permission = permission;
        this.phone = phone;
        this.firstName = firstName;
        this.lastName = lastName;
        this._id = _id;
        this.email = email;
        this.online = online;
        this.coordinates = coordinates;
        this.logo = logo;
        this.amount = amount;
        this.token = token;
        this.nick = nick;
        // if ( logo && logo.filePath ) {
        //   this.image = serverUrl + logo.filePath;
        // }
        this.image = this.fromLogo(serverUrl, logo);
        this.cr = cr;
        this.cready = false;
        this.bulletKey = bulletKey;
    }
    fromLogo(serverUrl, obj = {}) {
        const { dir, list } = obj;
        if (!dir || !list || !list.length) {
            return;
        }
        const fileName = list[0];
        const fileUrl = `${serverUrl}/${dir}/${fileName}`;
        return fileUrl;
    }
    setOnline() {
        this.online = true;
    }
    setOfline() {
        this.online = false;
    }
    setNick(value) {
        this.nick = value;
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], IUser.prototype, "online", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], IUser.prototype, "coordinates", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], IUser.prototype, "amount", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], IUser.prototype, "cready", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], IUser.prototype, "setOnline", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], IUser.prototype, "setOfline", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], IUser.prototype, "setNick", null);


/***/ }),

/***/ 21400:
/*!*********************************************************************!*\
  !*** ./src/app/modules/general/modules/services/facade/language.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import { Injectable } from '@angular/core';
//
// @Injectable()
// tslint:disable-next-line:new-parens
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Language {
    constructor() {
        this.EN = {
            password_changed: 'Password changed',
            user_not_found: 'Expired key or user not found',
            check_forgot_password: 'Please check your email inbox or spam folder. ',
            REG_FUNDAMENTALS: 'Register for javascript fundamentals',
            REG_APP: 'Register for learning web applications',
            knowledge: "Knowledge",
            VIEW: 'View',
            DOWNLOAD: 'Download',
            abt: {
                soft_title: "Creating software products",
                soft_desc: "We are getting involved into product requirements, good communication with the clients, software delivery",
                soft_req: "Request software",
                soft_req_desc: "After you will post the project details, we will contact you for a better software analysis",
                proto: "Prototyping",
                proto_desc: "Having this prototype is essential in the process of software delivery",
                impl: "Implementation",
                impl_desc: "We will establish sequencial steps of delivery of the application ",
                course_desc: "Training people which want to learn the development process",
            },
            home: {
                title: "Courses & IT projects",
                proj: 'Do you need a project?',
                proj_desc: "Would you like to check what we can help?",
                dev: "Developer skills",
                dev_desc: 'Add your development skills',
                course: "Subscribe for courses ",
                course_desc: "6 months, 2 phases, approximately 900 euro ",
            },
            proj: {
                name: 'Project name',
                about: 'Tell us more about your project',
                skills: 'What skills are required?',
                pay: 'How do you want to pay?',
                budget: 'What is your estimated budget?',
                empty_proj: 'No project were added',
            },
            COURSE_LINKS: {
                DESC: 'About',
                WHO: 'Audience',
                PROGRAMA: 'Curricullum',
                REGISTER: 'Register',
                SESSION1: 'Session I (fundamentals)',
                SESSION2: 'Session II (application, server, OOP)',
                test: 'Test',
                app: 'Application',
                server: 'Server',
                sesion1: 'Meeting 1',
                part2: 'Fundaments',
                diploma: 'Certificate',
            },
            confirmation_code: "Email already confirmed",
            registered: 'You have succesfully registered',
            HELLO: 'Hello',
            COURSES: 'Courses',
            PROJ_DETAIL: 'Project Details',
            My_PROJECTS: 'My Projects',
            PAY_FIX: 'Fix Price',
            PAY_HOUR: 'Pay by the hour',
            CODE: 'Code',
            SOLUTIONS: 'Solutions',
            MESSAGES: 'Messages',
            TEST_CASES: 'Test Cases',
            VIEWER: 'View',
            MENU_HOME: 'Home',
            MENU_DISCUSSIONS: 'Discussions',
            MENU_SEARCH: 'Search',
            MENU_SERVICES: 'Services',
            MENU_QUESTIONS: 'Questions',
            MENU_QUIZ: 'Quiz',
            MENU_PAYMENT: 'Payment',
            MENU_LOGIN: 'Login',
            MENU_SETTINGS: 'Settings',
            MENU_LOGOUT: 'Logout',
            MENU_PERSONAL_DATA: 'Personal Data',
            MENU_ABOUT: 'About',
            MENU_LANGUAGE: 'Language',
            MENU_EN: 'EN',
            MENU_RO: 'RO',
            NICK: 'Nick',
            LOGIN: 'Login',
            EMAIL: 'Email',
            PASSWORD: 'Password',
            CANCEL: 'Cancel',
            NEW_USER: 'New User',
            RESET_PASSWORD: 'Reset Password',
            FACEBOOK_LOGIN: 'Login with Facebook',
            EMPTY_PASSWORD: 'Empty Password',
            EMPTY_EMAIL: 'EMpty Email',
            CHANNELS: 'Channels',
            CHAT: 'Chat',
            TOPIC_ADD: 'Add Topic',
            TOPIC_EDIT: 'Edit Topic',
            ALL: 'All',
            MY: 'My',
            WRITE_MESSAGE: 'write message',
            CATEGORY_SELECT: 'Select Category',
            CATEGORY_ADD: 'Add new category',
            MAP: 'Map',
            USE_MAP: 'Use Map',
            POINTS: 'Points',
            QUESTION_ADD: 'Add question',
            QUESTION_EDIT: 'Edit question',
            ROOMS: 'Rooms',
            QUESTIONS: 'Questions',
            DETAILS: 'Details',
            EDIT_USER: 'Edit User',
            NAME: 'Name',
            SURNAME: 'Last Name ',
            PHONE: 'Phone',
            SAVE: 'Save',
            DELETE: 'Delete',
            LOCATION: 'Location',
            IMAGES: 'Images',
            USER_LOCATION: 'User Location',
            SEARCH: 'Search',
            CATEGORY: 'Category',
            MY_MESSAGES: 'My Messages',
            PUBLIC_MESSAGES: 'Public Messages',
            NEW_CATEG: 'Add new category ...',
            PARENT: 'Parent',
            EDIT: 'Edit',
            CONTENT: 'Content',
            ROOM_NEW: 'New Room',
            ROOM_JOIN: 'Join Room',
            ROOM_LEAVE: 'Leave Room',
            READY: 'Ready',
            CURRENT_QUESTION: 'Current question(s)',
            ANSWERS: 'Answers',
            SEND: 'Send',
            QUESTION_NO: 'Question no:',
            NEXT: 'Next',
            PAYMENT: 'Payment',
            PAYMENT_HIST: 'Payment History',
            CARD_PAY: 'Card Payment',
            CARD_NUMBER: 'Card Number',
            CARD_HOLDER_NAME: 'Cardholder Name',
            CARD_EXPIRE: 'Expiration Date',
            CARD_CVV: 'CVV',
            CARD_AMOUNT: 'Amount',
            CARD_AMOUNT_OLD: 'Old Amount',
            CARD_AMOUNT_NEW: 'New Amount',
            DATE: 'Date',
            STATUS: 'Status',
            SERVICE_MY: 'My Services',
            SERVICE_NEW: 'New Service name',
            SERVICE_CREATE: 'Create New Service',
            IS_ACTIVE: 'Is Active',
            TITLE: 'Title',
            WEB_SITE: 'Web Site',
            DESCRIPTION: 'Description',
            ADDED: 'Added',
            UPDATED: 'Updated',
            USER_MESSAGES: 'User Messages',
            SEARCH_WORDS: 'Words from title it will be used for search',
            DELETE_CONF_SERVICE: 'Are you sure you want to delete {0} service?',
            PREV: 'Previous',
            S_TEMP: 'Temporary',
            S_SEZ: 'Seasonal',
            S_LONG: 'Long Term',
            T_M: '1 month',
            T_S: '3 months',
            T_Y: '1 year',
            S_REGISTER: 'Register',
            S_BUY: 'Buy coins',
            F_SEND: 'Send',
            ADD_SERVICE: 'Add Service',
            EXPENSES: 'Expences',
            REQUEST: 'Request',
            OFFER: 'Offer',
            S_TYPE: 'Service type',
            S_DURATION: 'Service period',
            COINS: 'Coins',
            TOTAL_VALUE: 'Total Value',
            CURRENCY: 'Currency',
            Q_ENUNT: 'Content',
            CORRECT_ANS: 'Select the correct answer',
            PGN_GAME: 'Load PGN ',
            FEN_POSITION: 'FEN Position',
            CHESS_POSITION: 'Set initial position',
            CHESS_OPENINGS: 'Openings',
            CHESS_GAMES: 'Chess Games',
            CHESS_MY_GAMES: 'My Games',
            ONLINE_USERS: 'Online users',
            SCHOOL_LIST: 'School List',
            FIND_BEST_MOVE: 'Find the best move',
            SETTINGS: 'Settings',
            CHESS: 'Chees',
            GAME_HISTORY: 'Game History',
            GAME_INVITATIONS: 'Invitations',
            DRAW_PROPOSAL: 'Draw proposed by {0}. Do you accept?',
            email_used: 'Email is already used',
            other_player: 'Other Player',
            computer: 'Calculator',
            engine_logs: 'Engine Logs',
            no_time: '0',
            PLAY_CHESS: 'Play Chess',
            SEND_FEEDBACK: 'If you have any suggestions please send us a message',
            ADD_SCHOOL: 'Add School',
            EDIT_SCHOOL: 'Edit School',
            ADD_QUESTION: 'Add Question',
            EDIT_QUESTION: 'Edit Question',
        };
        this.RO = {
            password_changed: 'Parola a fost schimbata',
            user_not_found: 'Cheie expirata sau utilizatorul nu a fost gasit',
            check_forgot_password: 'Un email a fost trimis pentru resetarea parolei. Verifica si directorul spam.',
            REG_FUNDAMENTALS: 'Inregistrare sesiune 1: javascript fundamentals',
            REG_APP: 'Inregistrare sesiune 2: creare aplicatie web',
            knowledge: "Cunostinte",
            VIEW: 'Vizualizare',
            DOWNLOAD: 'Descarca',
            abt: {
                soft_title: "Realizarea proiectelor soft",
                soft_desc: "Ne implicam in analiza cerintelor, comunicare activa cu clientii, creare prototipuri, livrare si mentenanta",
                soft_req: "Cerere realizare proiect",
                soft_req_desc: "Dupa trimiterea cerintelor proiectului, veti fi contactati pentru o analiza mai amanuntita a cerintelor",
                proto: "Creare prototip",
                proto_desc: "Crearea acestui protopit al aplicatiei este esential in procesul de livrare a produsului",
                impl: "Implementare si mentenanta",
                impl_desc: "Implementarea softului sa va face in pasi stabiliti de comun acord",
                course_desc: "Pregatire cursanti in vederea acumularii cunostintelor de programare",
            },
            home: {
                title: "Cursuri si proiecte IT",
                proj: 'Doriti realizarea unui proiect? ',
                proj_desc: "Haideti sa vedem proiectele / tehnologiile care ne-ar ajuta la proiect",
                dev: "Colaboreaza cu noi",
                dev_desc: 'Adauga tehnologiile stapanite',
                course: "Inscriere cursuri ",
                course_desc: " 6 luni, 2 etape, aproximativ 4000 ron ",
            },
            proj: {
                name: 'Nume proiect',
                about: 'Cateva cuvinte despre proiect',
                skills: 'Care sunt abilitatile necesare realizarii proiectului?',
                pay: 'Care este metoda de plata?',
                budget: 'Care este bugetul estimat?',
                empty_proj: 'Nu ati adaugat nici un proiect (deocamdata) ',
            },
            COURSE_LINKS: {
                DESC: 'Despre',
                WHO: 'Cui ne adresam',
                PROGRAMA: 'Programa',
                REGISTER: 'Inregistrare',
                SESSION1: 'Sessiune I (fundamente programare)',
                SESSION2: 'Sessiune II (aplicatie, server, OOP)',
                test: 'Test',
                app: 'Aplicatie',
                server: 'Server',
                sesion1: 'Sedinta 1',
                part2: 'Fundamente',
                diploma: 'Diploma'
            },
            confirmation_code: "Emailul este confirmat",
            registered: 'V-ati inregistrat cu succes',
            HELLO: 'Buna',
            COURSES: 'Cursuri',
            PROJ_DETAIL: 'Detalii proiect',
            My_PROJECTS: 'Proiectele mele',
            PAY_FIX: 'Pret fix',
            PAY_HOUR: 'Pret pe ora',
            CODE: 'Rezolvarea mea',
            SOLUTIONS: 'Solutii',
            MESSAGES: 'Mesaje',
            TEST_CASES: 'Testare',
            VIEWER: 'Vizualizare',
            MENU_HOME: 'Acasa',
            MENU_DISCUSSIONS: 'Discutii',
            MENU_SEARCH: 'Cautare',
            MENU_SERVICES: 'Servicii',
            MENU_QUESTIONS: 'Intrebari',
            MENU_QUIZ: 'Quiz',
            MENU_PAYMENT: 'Plata',
            MENU_LOGIN: 'Logare',
            MENU_SETTINGS: 'Setari',
            MENU_LOGOUT: 'Deconectare',
            MENU_PERSONAL_DATA: 'Date Personale',
            MENU_ABOUT: 'Despre',
            MENU_LANGUAGE: 'Limba',
            MENU_EN: 'EN',
            MENU_RO: 'RO',
            NICK: 'Pseudonim',
            LOGIN: 'Logare',
            EMAIL: 'Email',
            PASSWORD: 'Parola',
            CANCEL: 'Renunta',
            NEW_USER: 'Utilizator Nou',
            RESET_PASSWORD: 'Resetare Parola',
            FACEBOOK_LOGIN: 'Logare cu Facebook',
            EMPTY_PASSWORD: 'Parola invalida',
            EMPTY_EMAIL: 'Email invalid',
            CHANNELS: 'Canale',
            CHAT: 'Chat',
            TOPIC_ADD: 'Adaugare director',
            TOPIC_EDIT: 'Editare director',
            ALL: 'Toate',
            MY: 'A mele',
            WRITE_MESSAGE: 'scrie mesaj',
            CATEGORY_SELECT: 'Selecteaza categoria',
            CATEGORY_ADD: 'Adauga caegorie noua',
            MAP: 'Harta',
            USE_MAP: 'Foloseste harta',
            POINTS: 'Puncte',
            QUESTION_ADD: 'Adaugare intrebare',
            QUESTION_EDIT: 'Editare intrebare',
            ROOMS: 'Camere',
            QUESTIONS: 'Intrebari',
            DETAILS: 'Detalii',
            EDIT_USER: 'Editeaza utilizatorul',
            NAME: 'Nume',
            SURNAME: 'Prenume',
            PHONE: 'Telefon',
            SAVE: 'Salveaza',
            DELETE: 'Sterge',
            LOCATION: 'Locatie',
            IMAGES: 'Imagini',
            USER_LOCATION: 'Locatia curenta',
            SEARCH: 'Cautare',
            CATEGORY: 'Categorie',
            MY_MESSAGES: 'Mesaje proprii',
            PUBLIC_MESSAGES: 'Mesaje publice',
            NEW_CATEG: 'Adaugare categorie ...',
            PARENT: 'Parinte',
            EDIT: 'Editare',
            CONTENT: 'Continut',
            ROOM_NEW: 'Camera noua',
            ROOM_JOIN: 'Intrare Camera',
            ROOM_LEAVE: 'Parasire Camera',
            READY: 'Sa incepem',
            CURRENT_QUESTION: 'Intrebarile actuale',
            ANSWERS: 'Raspunsuri',
            SEND: 'Trimite',
            QUESTION_NO: 'Enuntul nr',
            NEXT: 'Inainteaza',
            PAYMENT: 'Plata',
            PAYMENT_HIST: 'Istoric Plati',
            CARD_PAY: 'Plata Card',
            CARD_NUMBER: 'Numar Card',
            CARD_HOLDER_NAME: 'Nume Detinator',
            CARD_EXPIRE: 'Data expirare',
            CARD_CVV: 'CVV',
            CARD_AMOUNT: 'Suma',
            CARD_AMOUNT_OLD: 'Suma veche',
            CARD_AMOUNT_NEW: 'Noua suma',
            DATE: 'Data',
            STATUS: 'Status',
            SERVICE_MY: 'Serviciile mele',
            SERVICE_NEW: 'Numele noului serviciu',
            SERVICE_CREATE: 'Creaza serviciu nou',
            IS_ACTIVE: 'Serviciul este activ',
            TITLE: 'Titlu',
            WEB_SITE: 'Site Web',
            DESCRIPTION: 'Descriere',
            ADDED: 'Adaugat',
            UPDATED: 'Modificat',
            USER_MESSAGES: 'Mesaje utilizatori',
            SEARCH_WORDS: 'Cuvintele din tilu vor fi folosite la cautare din meniul de Cautare',
            DELETE_CONF_SERVICE: 'Sunteti sigur ca doriti sa stergeti serviciul {0} ?',
            PREV: 'Anterior',
            S_TEMP: 'Temporar',
            S_SEZ: 'Sezonier',
            S_LONG: 'Termen lung',
            T_M: '1 luna',
            T_S: '3 luni',
            T_Y: '1 an',
            S_REGISTER: 'Inregistrare',
            S_BUY: 'Cumparare monezi',
            S_TYPE: 'Tipul serviciului',
            S_DURATION: 'Durata serviciului',
            F_SEND: 'Trimite',
            ADD_SERVICE: 'Adaugare serviciu',
            EXPENSES: 'Cheltuieli',
            REQUEST: 'Cerere',
            OFFER: 'Oferta',
            COINS: 'Monezi',
            TOTAL_VALUE: 'Valoare Totala',
            CURRENCY: 'Moneda',
            Q_ENUNT: 'Enunt',
            CORRECT_ANS: 'Bifati raspunsul corect',
            PGN_GAME: 'Incarcare PGN ',
            FEN_POSITION: 'Incarcare pozitie FEN',
            CHESS_POSITION: 'Setare pozitie intiala',
            CHESS_OPENINGS: 'Deschideri',
            CHESS_GAMES: 'Jocuri celebre',
            CHESS_MY_GAMES: 'Jocurile mele',
            ONLINE_USERS: 'Utilizatori activi',
            SCHOOL_LIST: 'Lista scoli',
            FIND_BEST_MOVE: 'Cea mai buna mutare',
            SETTINGS: 'Setari',
            CHESS: 'Sah',
            GAME_HISTORY: 'Istoric Mutari',
            GAME_INVITATIONS: 'Invitatii Joc',
            DRAW_PROPOSAL: '{0} a propus remiza. Accepti?',
            email_used: 'Emailul este folosit',
            other_player: 'Alt Jucator',
            computer: 'Calculator',
            engine_logs: 'Loguri Stockfish',
            no_time: '0',
            PLAY_CHESS: 'Joaca sah',
            SEND_FEEDBACK: 'Trimiteti un mesaj',
            ADD_SCHOOL: 'Adaugare scoala',
            EDIT_SCHOOL: 'Modificare scoala',
            ADD_QUESTION: 'Adaugare',
            EDIT_QUESTION: 'Modificare',
        };
    }
});


/***/ }),

/***/ 48648:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/general/modules/services/localization/localization.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _facade_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../facade/language */ 21400);
/* harmony import */ var _pubsub_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub/events.service */ 57094);
/* harmony import */ var _storage_LocalStorageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/LocalStorageService */ 48743);



class LocalizationService {
    constructor() {
        this.AVAILABLE_LANG = {
            EN: 'EN',
            RO: 'RO'
        };
        this.language = _facade_language__WEBPACK_IMPORTED_MODULE_0__.default.RO;
        this.langValue = 'RO';
        const lang = _storage_LocalStorageService__WEBPACK_IMPORTED_MODULE_2__.default.get('LANGUAGE');
        if (lang && _facade_language__WEBPACK_IMPORTED_MODULE_0__.default[lang]) {
            this.setLanguage(lang);
        }
        _pubsub_events_service__WEBPACK_IMPORTED_MODULE_1__.default.subscribe('change-language', null, (val) => {
            this.setLanguage(val);
        });
    }
    setLanguage(val) {
        this.language = _facade_language__WEBPACK_IMPORTED_MODULE_0__.default[val];
        this.langValue = val;
        _storage_LocalStorageService__WEBPACK_IMPORTED_MODULE_2__.default.add('LANGUAGE', val);
        _pubsub_events_service__WEBPACK_IMPORTED_MODULE_1__.default.publish('refresh', val);
    }
    formatHelper(val, values) {
        // tslint:disable-next-line:forin
        for (const k in values) {
            val = val.replace(new RegExp('\\{' + k + '\\}', 'g'), values[k]);
        }
        return val;
    }
    ;
    key(key) {
        return this.language[key];
    }
    format(key, values) {
        const base = this.language[key];
        return this.formatHelper(base, values);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LocalizationService());


/***/ }),

/***/ 41845:
/*!**********************************************************************!*\
  !*** ./src/app/modules/general/modules/services/pubsub/Refresher.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Refresher": () => (/* binding */ Refresher)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ 15785);


class Refresher {
    constructor() {
        this.yyy = '';
        this.xxx = '';
    }
    refreshYYY() {
        this.yyy = Math.random().toString(36).substring(7);
    }
    refreshXXX() {
        this.xxx = Math.random().toString(36).substring(7);
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], Refresher.prototype, "yyy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], Refresher.prototype, "xxx", void 0);


/***/ }),

/***/ 57094:
/*!***************************************************************************!*\
  !*** ./src/app/modules/general/modules/services/pubsub/events.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ 23597);
/* harmony import */ var _facade_IUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../facade/IUser */ 16102);
/* harmony import */ var _facade_IDBUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../facade/IDBUser */ 33120);
/* harmony import */ var _Refresher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Refresher */ 41845);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ 15785);






class EventsService {
    constructor() {
        this.courseLoaded = false;
        this.course0 = null;
        this.course1 = null;
        this.course2 = null;
        this.refresher = null;
        //
        this.serverUrl = 'http://localhost:3001';
        //serverUrl = '';
        this.appUrl = '';
        this.MrUser = null;
        this.data = {
            test: 1
        };
        this.events = {};
        this.unsubscribe = (eventName, id = null) => {
            if (this.events[eventName]) {
                for (let i = 0; i < this.events[eventName].length; i++) {
                    if (this.events[eventName][i].id === id) {
                        this.events[eventName].splice(i, 1);
                        break;
                    }
                }
            }
        };
        this.publish = (eventName, data = null, id = null, keytoStore = '') => {
            if (keytoStore) {
                this.data[keytoStore] = {
                    ...data
                };
            }
            console.log('EVENTS SERVICE publish ', eventName, data, id);
            const subs = this.events[eventName];
            if (subs && subs.length) {
                subs.forEach(instance => {
                    if (id) {
                        if (instance.id === id) {
                            instance.callback(data);
                        }
                    }
                    else {
                        instance.callback(data);
                    }
                });
            }
            else {
                console.log('NO SUBS for EVENT ', eventName);
                // 
            }
        };
        this.memory = {};
        this.refresher = new _Refresher__WEBPACK_IMPORTED_MODULE_3__.Refresher();
        this.subscribe('refresh', null, (val) => {
            this.refreshUI();
        });
    }
    refreshUI() {
        this.refresher.yyy = Math.random().toString(36).substring(7);
    }
    get mrUserValue() {
        // const {_id, nick, course} = this.MrUser;
        // return {_id, nick, course}
        return this.MrUser;
    }
    get mrUserValueForDB() {
        // const {_id, nick, course} = this.MrUser;
        // return {_id, nick, course}
        return new _facade_IDBUser__WEBPACK_IMPORTED_MODULE_2__.IDBUser(this.MrUser);
    }
    isAdmin() {
        return this.MrUser && this.MrUser.permission === 1;
    }
    get socketUser() {
        const { MrUser } = this;
        if (!MrUser) {
            return;
        }
        const { token, ...other } = MrUser;
        return other;
    }
    setSocketIdentifier(sid) {
        const { MrUser } = this;
        if (!MrUser) {
            return;
        }
        MrUser['sid'] = sid;
    }
    subscribe(eventName, id, callback) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push({
            id,
            callback,
        });
    }
    subscribeOnce(eventName, id, callback) {
        this.events[eventName] = this.events[eventName] || [];
        if (this.events[eventName].length) {
            return;
        }
        this.events[eventName].push({
            id,
            callback,
        });
    }
    notifyAll(eventName, data = null) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(instance => {
                instance.callback(data);
            });
        }
    }
    showNotificationSuccess(title, message, timeOut = 2000) {
        this.publish(_events__WEBPACK_IMPORTED_MODULE_0__.default.Question_ADDED, {
            message,
            title,
            type: 3,
            timeOut,
        }, null);
    }
    showNotificationError(title, message, timeOut = 2000) {
        this.publish(_events__WEBPACK_IMPORTED_MODULE_0__.default.Question_ADDED, {
            message,
            title,
            type: 2,
            timeOut,
        }, null);
    }
    setKeyValue(key, value) {
        this.data[key] = value;
    }
    getKeyValue(key) {
        return this.data[key];
    }
    userLoggedIn(userData) {
        this.MrUser = new _facade_IUser__WEBPACK_IMPORTED_MODULE_1__.IUser(userData, this.serverUrl);
        this.publish(_events__WEBPACK_IMPORTED_MODULE_0__.default.Login, this.MrUser, null, _events__WEBPACK_IMPORTED_MODULE_0__.default.LOGGEDUSER);
    }
    userUpdated(userData) {
        const updatedUser = new _facade_IUser__WEBPACK_IMPORTED_MODULE_1__.IUser(userData, this.serverUrl);
        this.MrUser.firstName = updatedUser.firstName;
        this.MrUser.lastName = updatedUser.lastName;
        this.MrUser.nick = updatedUser.nick;
        this.MrUser.coordinates = updatedUser.coordinates;
        this.MrUser.phone = updatedUser.phone;
        this.MrUser.logo = updatedUser.logo;
        this.MrUser.image = updatedUser.image;
        this.publish(_events__WEBPACK_IMPORTED_MODULE_0__.default.Login, this.MrUser, null, _events__WEBPACK_IMPORTED_MODULE_0__.default.LOGGEDUSER);
    }
    userLoadedFromStorage(userData) {
        this.MrUser = new _facade_IUser__WEBPACK_IMPORTED_MODULE_1__.IUser(userData, this.serverUrl);
    }
    userLoggedOut() {
        this.MrUser = null;
        this.publish(_events__WEBPACK_IMPORTED_MODULE_0__.default.Logout, null, null, null);
    }
    // 1 = warnig, 2 = error, 
    triggerToaster(title, message, type) {
        this.publish(_events__WEBPACK_IMPORTED_MODULE_0__.default.TOASTER_NOTIF, {
            title,
            message,
            type
        });
    }
    userDataChanged(data) {
        this.MrUser = new _facade_IUser__WEBPACK_IMPORTED_MODULE_1__.IUser({
            ...this.MrUser,
            ...data
        });
        this.publish(_events__WEBPACK_IMPORTED_MODULE_0__.default.Login, this.MrUser, null, _events__WEBPACK_IMPORTED_MODULE_0__.default.LOGGEDUSER);
    }
    paymentReceived(data) {
        if (!this.MrUser) {
            return;
        }
        const galbeni = this.MrUser.amount + data.galbeni;
        this.userDataChanged({
            amount: galbeni
        });
    }
    paymentSpent(data) {
        if (!this.MrUser) {
            return;
        }
        const galbeni = this.MrUser.amount - data.galbeni;
        this.userDataChanged({
            amount: galbeni
        });
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_5__.observable
], EventsService.prototype, "course0", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_5__.observable
], EventsService.prototype, "course1", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_5__.observable
], EventsService.prototype, "course2", void 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EventsService());


/***/ }),

/***/ 23597:
/*!*******************************************************************!*\
  !*** ./src/app/modules/general/modules/services/pubsub/events.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Created by Claudiu on 6/5/2019.
 */
var EEvents;
(function (EEvents) {
    EEvents["DirectoryClicked"] = "directoryClicked";
    EEvents["GetRoomsForDomain"] = "getRoomsForDomain";
    EEvents["Logger"] = "logger";
    EEvents["ChatCreate"] = "chat_create";
    EEvents["ChatClose"] = "chat_close";
    EEvents["Login"] = "login";
    EEvents["Logout"] = "logout";
    EEvents["SocketConnected"] = "SocketConnected";
    EEvents["SocketDisconnected"] = "SocketDisconnected";
    EEvents["Redirect"] = "redirect";
    EEvents["CollapseExpand"] = "CollapseExpand";
    EEvents["QuestionAdd_Edit"] = "QuestionAdd_Edit";
    EEvents["QLIST"] = "QLIST";
    EEvents["RoomSnapshot"] = "rsnap";
    EEvents["Question_ADDED"] = "qadded";
    EEvents["POINTS_RECEIVED"] = "preceived";
    EEvents["MoneyInc"] = "minc";
    EEvents["MoneyDec"] = "mdec";
    EEvents["newtoken"] = "ntoken";
    EEvents["REFRESH_PAYMENT_HIST"] = "rphh";
    EEvents["LOGGEDUSER"] = "LOGGED_USER";
    EEvents["CHAT_MESSAGE"] = "chatMessage";
    EEvents["AMOUNT_CHANGED"] = "inAMOUNT_CHANGED";
    EEvents["SERVER_MESSAGE"] = "serverMessage";
    EEvents["IN_ONLINE_USERS"] = "inonlineUsers";
    EEvents["IN_NEW_MESSAGE"] = "inNEW_MESSAGE";
    EEvents["REFRESH"] = "refresh";
    EEvents["TOASTER_NOTIF"] = "toasternotif";
    EEvents["CHANGE_LANGUAGE"] = "change-language";
    EEvents["NEW_PAYMENT"] = "new_payment";
})(EEvents || (EEvents = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EEvents);


/***/ }),

/***/ 48743:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/general/modules/services/storage/LocalStorageService.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class LocalStorageService {
    constructor() {
        if (typeof localStorage !== "undefined") {
            this.storage = localStorage;
        }
    }
    get(key) {
        if (!this.storage) {
            return;
        }
        const v = this.storage.getItem(key);
        if (!v) {
            return null;
        }
        try {
            return JSON.parse(v);
        }
        catch (ex) {
            return null;
        }
    }
    add(key, value) {
        if (!this.storage) {
            return;
        }
        if (!value) {
            return;
        }
        return this.storage.setItem(key, JSON.stringify(value));
    }
    remove(key) {
        if (!this.storage) {
            return;
        }
        this.storage.removeItem(key);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LocalStorageService());


/***/ }),

/***/ 71468:
/*!**********************************************************************!*\
  !*** ./src/app/modules/general/modules/services/utils/AppHelpers.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubsub_events_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pubsub/events.service */ 57094);
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pako */ 45105);
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pako__WEBPACK_IMPORTED_MODULE_1__);
// import * as Zlib from 'zlib';



class AppHelpers {
  constructor() {
    this.datetexte = {
      'EN': {
        now: 'just now',
        secago: 'seconds ago',
        twomin: 'a minute ago',
        minago: 'minutes ago',
        oneh: 'one hour ago',
        hago: 'hours ago',
        yest: 'yesterday',
        days: 'days ago',
        wago: 'weeks ago',
        mago: 'months ago',
        yago: 'years ago'
      },
      'RO': {
        now: 'chiar acum',
        secago: 'secunde',
        twomin: 'un minut',
        minago: 'minute',
        oneh: 'o ora',
        hago: 'ore',
        yest: 'ieri',
        days: 'zile',
        wago: 'saptamani',
        mago: 'luni',
        yago: 'ani'
      }
    };
    this.texte = this.datetexte.RO;
    this.lut = [];

    this.binArrayToJson = function (binArray) {
      var str = "";

      for (var i = 0; i < binArray.length; i++) {
        str += String.fromCharCode(parseInt(binArray[i]));
      }

      return JSON.parse(str);
    }; //unzipZippedData(data: string): string {
    //     var zlib = require('zlib');
    // var input = "Hellow world";
    // var deflated = zlib.deflateSync(input).toString('base64');
    // var inflated = zlib.inflateSync(new Buffer(deflated, 'base64')).toString();
    // console.log(inflated);
    //   var base64Data = "eJztwTEBAAAAwqD1T20JT6AAAHgaCWAAAQ==";
    //   data = base64Data;
    //   const buffer = new Buffer(data); //here ! you can test out with different encodings
    //   var inflated = Zlib.inflateSync(buffer).toString();
    //   return inflated;
    // }
    // unzipFile(filePath: string): Promise<string> {
    //   // not working : see https://stuk.github.io/jszip/documentation/howto/read_zip.html
    //   return new Promise((resolve, reject) => {
    //     var jsZip = require('jszip');
    //     jsZip.loadAsync(filePath).then((zip) => {
    //       Object.keys(zip.files).forEach((filename) => {
    //         zip.files[filename].async('string').then(function (fileData) {
    //           console.log(fileData) // These are your file contents   
    //           resolve(fileData);
    //         })
    //       })
    //     })
    //       .catch(ex => {
    //         console.log(ex);
    //         reject(ex);
    //       })
    //   });
    // }


    this.encoding = 'base64';

    for (var i = 0; i < 256; i++) {
      this.lut[i] = (i < 16 ? '0' : '') + i.toString(16);
    }

    _pubsub_events_service__WEBPACK_IMPORTED_MODULE_0__.default.subscribe('refresh', null, val => {
      this.texte = this.datetexte[val];
    });
  }

  guidOk() {
    var d0 = Math.random() * 0xffffffff | 0;
    var d1 = Math.random() * 0xffffffff | 0;
    var d2 = Math.random() * 0xffffffff | 0;
    var d3 = Math.random() * 0xffffffff | 0;
    let lut = this.lut;
    return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
  }

  jsonToArray(json) {
    var str = JSON.stringify(json, null, 0);
    var ret = new Uint8Array(str.length);

    for (var i = 0; i < str.length; i++) {
      ret[i] = str.charCodeAt(i);
    }

    return ret;
  }

  guid() {
    function _p8(s) {
      var p = (Math.random().toString(16) + "000000000").substr(2, 8);
      return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }

    return _p8(null) + _p8(true) + _p8(true) + _p8(null);
  }

  sortArray(arr, prop) {
    arr.sort((a, b) => a[prop] > b[prop] ? 1 : -1);
  }

  removeDoubleSpaces(text) {
    return text.replace(/\s\s+/g, ' ');
  }

  removeStyle(str) {
    str = this.fixBr(str);
    str = this.removeBrSpaces(str);
    var re = / style=".*?">/gmi;
    var s = str.replace(re, function (x, $1, $2) {
      return '>';
    }); // var a = this.getBoldWords(str);
    // console.log(a);

    return s;
  }

  removeClass(str) {
    var re = / class="(.+)(">)/gm;
    var s = str.replace(re, function (x, $1, $2) {
      return '>';
    });
    return s;
  }

  removeBrSpaces(str) {
    var re = /(<br)(\s{0,})(\/>)/gm;
    var s = str.replace(re, function (x, $1, $2, $3) {
      return $1 + $3;
    });
    return s;
  }

  fixBr(str) {
    var re = /(<br)(\s{0,})(>)/gm;
    var s = str.replace(re, function (x, $1, $2, $3) {
      return $1 + '/>';
    });
    return s;
  }

  getBoldWords(str) {
    var re = /(<strong>)(.*?)(<\/strong>)/gm;
    var s = str.match(re, (x, a, b, c) => b);
    return s;
  }

  prettyDate2(date) {
    // var date = new Date(parseInt(time));
    return date.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  friendlyDate(datev) {
    if (!datev) {
      return '';
    }

    var date = new Date(datev);
    var minute = 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7,
        month = week * 4,
        year = month * 12; // var date = new Date(dateValue);

    var now = new Date();
    var delta = (now.getTime() - date.getTime()) / 1000;
    delta = Math.floor(delta);
    var fuzzy = '';

    if (delta < 30) {
      fuzzy = this.texte.now;
    } else if (delta < minute) {
      fuzzy = delta + ' ' + this.texte.secago;
    } else if (delta < 2 * minute) {
      fuzzy = this.texte.twomin;
    } else if (delta < hour) {
      fuzzy = Math.floor(delta / minute) + ' ' + this.texte.minago;
    } else if (Math.floor(delta / hour) === 1) {
      fuzzy = this.texte.oneh;
    } else if (delta < day) {
      fuzzy = Math.floor(delta / hour) + ' ' + this.texte.hago;
    } else if (delta < day * 2) {
      fuzzy = this.texte.yest;
    } else if (delta < day * 8) {
      fuzzy = Math.floor(delta / day) + ' ' + this.texte.days;
    } else if (delta < week * 5) {
      fuzzy = Math.floor(delta / week) + ' ' + this.texte.wago;
    } else if (delta < month * 12) {
      fuzzy = Math.floor(delta / month) + ' ' + this.texte.mago;
    } else if (delta < year * 10) {
      fuzzy = Math.floor(delta / year) + ' ' + this.texte.yago;
    }

    const fd = this.prettyDate2(date);
    return fuzzy + ' ' + fd;
  }

  combine2Strings(s1, s2) {
    if (s1 < s2) {
      [s1, s2] = [s2, s1];
    }

    var l1 = s1.length;
    var l2 = s2.length;
    var i = 0;
    var result = [];
    var max = l1 > l2 ? l1 : l2;

    while (i < max) {
      if (i < l1) {
        result.push(s1[i]);
      }

      if (i < l2) {
        result.push(s2[i]);
      }

      i++;
    }

    return result.join('');
  }

  zipString(input) {
    const zipped = (0,pako__WEBPACK_IMPORTED_MODULE_1__.deflate)(input);
    return zipped; //return 's';
    // var deflated = Zlib.deflateSync(input).toString(this.encoding); 
    // return deflated;
  }

  unZipString(deflated) {
    const strData = atob(deflated); // split it into an array rather than a "string"

    const charData = strData.split('').map(function (x) {
      return x.charCodeAt(0);
    }); // convert to binary

    const binData = new Uint8Array(charData); // inflate

    const result = (0,pako__WEBPACK_IMPORTED_MODULE_1__.inflate)(binData, {
      to: 'string'
    });
    return result; // let result:any = ungzip(new Uint8Array(deflated), {"to": "string"});
    // return result;
    // const decompressed =  inflate(deflated, {to: 'string'});
    // return decompressed;
  }

  randomBetween(x, y) {
    return Math.floor(Math.random() * y) + x;
  }

  randomString() {
    return Math.random().toString(36).substring(7);
  }

  debug() {}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AppHelpers());

/***/ }),

/***/ 17320:
/*!***************************************************************!*\
  !*** ./src/app/modules/general/modules/tabs/mytabs.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTabsModule": () => (/* binding */ MyTabsModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _file_component_appfile_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../file-component/appfile.module */ 78097);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-angular */ 1474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component */ 79213);
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab.component */ 86061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);







class MyTabsModule {
}
MyTabsModule.ɵfac = function MyTabsModule_Factory(t) { return new (t || MyTabsModule)(); };
MyTabsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MyTabsModule });
MyTabsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _file_component_appfile_module__WEBPACK_IMPORTED_MODULE_0__.AppFileModule, mobx_angular__WEBPACK_IMPORTED_MODULE_6__.MobxAngularModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MyTabsModule, { declarations: [_tabs_component__WEBPACK_IMPORTED_MODULE_1__.TabsComponent, _tab_component__WEBPACK_IMPORTED_MODULE_2__.TabComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _file_component_appfile_module__WEBPACK_IMPORTED_MODULE_0__.AppFileModule, mobx_angular__WEBPACK_IMPORTED_MODULE_6__.MobxAngularModule], exports: [_tabs_component__WEBPACK_IMPORTED_MODULE_1__.TabsComponent, _tab_component__WEBPACK_IMPORTED_MODULE_2__.TabComponent] }); })();


/***/ }),

/***/ 86061:
/*!***************************************************************!*\
  !*** ./src/app/modules/general/modules/tabs/tab.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabComponent": () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ 15785);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-angular */ 1474);

/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */




function TabComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.active);
} }
const _c0 = ["*"];
class TabComponent {
    constructor() {
        this.notiftab = '';
        // @Input() active = false;
        this.active = false;
        this._hdr = null;
        this.csstab = 'pane';
        this.showcontent = false;
        this.custclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    set hdr(value) {
        if (!value) {
            return;
        }
        this._hdr = value;
    }
    get hdr() {
        return this._hdr;
    }
    setInactive() {
        this.active = false;
    }
    setActive() {
        this.active = true;
        // 
        this.csstab = 'pane active';
        // if(this.click) {
        //   this.click();
        // }
        this.custclick.emit();
    }
    onClick(event) {
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(); };
TabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabComponent, selectors: [["app-my-tab"]], inputs: { title: ["tabTitle", "title"], click: "click", notiftab: "notiftab", hdr: "hdr" }, outputs: { custclick: "custclick" }, ngContentSelectors: _c0, decls: 1, vars: 0, consts: [["class", "pane mt1 style1 h100", 3, "hidden", 4, "mobxAutorun"], [1, "pane", "mt1", "style1", "h100", 3, "hidden"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabComponent_div_0_Template, 2, 1, "div", 0);
    } }, directives: [mobx_angular__WEBPACK_IMPORTED_MODULE_1__.MobxAutorunDirective], styles: [".style1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: 0;\n  display: flex;\n  padding: 0 2rem;\n  position: relative;\n  left: -2rem;\n  width: calc(100% + 4rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUFYRiIsImZpbGUiOiJ0YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAucGFuZXtcbiAgLy8gcGFkZGluZzogMWVtO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxOSwgMTkpO1xuXG4vLyB9XG5cbi8vIC5hY3RpdmUge1xuLy8gICBjb2xvcjogIzQ5NTA1Nztcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2ICNkZWUyZTYgI2ZmZjtcbi8vIH1cblxuLnN0eWxlMSB1bCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMCAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0ycmVtO1xuICB3aWR0aDogY2FsYygxMDAlICsgNHJlbSk7XG59Il19 */"], changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], TabComponent.prototype, "notiftab", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], TabComponent.prototype, "active", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_3__.observable
], TabComponent.prototype, "csstab", void 0);


/***/ }),

/***/ 79213:
/*!****************************************************************!*\
  !*** ./src/app/modules/general/modules/tabs/tabs.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.component */ 86061);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ 15785);
/* harmony import */ var _services_pubsub_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pubsub/events.service */ 57094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-angular */ 1474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);







function TabsComponent_div_0_li_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tab_r2.title);
} }
function TabsComponent_div_0_li_2_div_2_ng_template_1_Template(rf, ctx) { }
function TabsComponent_div_0_li_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TabsComponent_div_0_li_2_div_2_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", tab_r2.hdr);
} }
function TabsComponent_div_0_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TabsComponent_div_0_li_2_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const tab_r2 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.selectTab(tab_r2); })("custclick", function TabsComponent_div_0_li_2_Template_li_custclick_0_listener($event) { const tab_r2 = ctx.$implicit; return tab_r2.onClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TabsComponent_div_0_li_2_div_1_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TabsComponent_div_0_li_2_div_2_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("mytab ", tab_r2.notiftab, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", tab_r2.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !tab_r2.hdr);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", tab_r2.hdr);
} }
function TabsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TabsComponent_div_0_li_2_Template, 3, 7, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("", ctx_r0.refresher.yyy, " ", ctx_r0.xxx, " tabscontainer style1 h100");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.tabs);
} }
const _c0 = ["*"];
// import { DynamicTabsDirective } from './dynamic-tabs.directive';
class TabsComponent {
    constructor() {
        this.xxx = '';
        this.refresher = null;
        this.refresher = _services_pubsub_events_service__WEBPACK_IMPORTED_MODULE_1__.default.refresher;
        _services_pubsub_events_service__WEBPACK_IMPORTED_MODULE_1__.default.subscribe('tabscountchanged', null, () => {
            this.xxx = new Date().getTime().toString();
        });
    }
    set refresh(value) {
        this.xxx = value;
    }
    get refresh() {
        return this.xxx;
    }
    // contentChildren are set
    ngAfterContentInit() {
        this.tabs.changes.subscribe(v => {
            // 
            this.xxx = new Date().getTime().toString();
        });
        // get all active tabs
        let activeTabs = this.tabs.filter((tab) => tab.active);
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }
    selectTab(tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(tab => tab.setInactive());
        // activate the tab the user has clicked on.
        tab && tab.setActive(); // .active = true;
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-my-tabs"]], contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _tab_component__WEBPACK_IMPORTED_MODULE_0__.TabComponent, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
    } }, inputs: { refresh: "refresh" }, ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[3, "class", 4, "mobxAutorun"], [1, "no", "my-tabs", "hhhh"], [3, "active", "class", "click", "custclick", 4, "ngFor", "ngForOf"], [3, "click", "custclick"], [4, "ngIf"], [1, "cursor-pointer"], [3, "ngTemplateOutlet"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TabsComponent_div_0_Template, 4, 5, "div", 0);
    } }, directives: [mobx_angular__WEBPACK_IMPORTED_MODULE_3__.MobxAutorunDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet], styles: [".style1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border: 0;\n  display: flex;\n  padding: 0 2rem;\n}\n\n.style1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.style1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, transparent 50%, #448ccb 50%, #448ccb 95%, #0072bc 95%);\n  flex: 1 1 auto;\n}\n\n.style1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, transparent 50%, #a2d39c 50%, #a2d39c 95%, #7cc576 95%);\n  background-size: 100% 200%;\n  background-position: top center;\n  color: #666;\n  display: block;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.25s ease-in-out;\n}\n\n.tabscontainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  align-content: center;\n  padding: 0px;\n}\n\n.tabscontainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.tab-close[_ngcontent-%COMP%] {\n  color: gray;\n  text-align: right;\n  cursor: pointer;\n}\n\n.my-tabs[_ngcontent-%COMP%] {\n  text-align: center;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n\n.my-tabs[_ngcontent-%COMP%]   .mytab[_ngcontent-%COMP%] {\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: 1;\n  margin-left: 2px;\n  margin-right: 2px;\n  border-bottom: 2px solid #b9b9b9;\n}\n\n.my-tabs[_ngcontent-%COMP%]   .mytab[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: rgba(48, 49, 49, 0.452);\n  transition: color 2s;\n  transition: font-weight 0.5s;\n}\n\n.my-tabs[_ngcontent-%COMP%]   .mytab[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: 1;\n}\n\n.my-tabs[_ngcontent-%COMP%]   .mytab[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  color: #4b09e6;\n}\n\n.my-tabs[_ngcontent-%COMP%]   .mytab.active[_ngcontent-%COMP%] {\n  color: #495057;\n  border-bottom: 2px solid #585b77;\n}\n\n.my-tabs[_ngcontent-%COMP%]   .mytab.active[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.my-tabs[_ngcontent-%COMP%]   .notiftab[_ngcontent-%COMP%] {\n  background-color: #2be2a5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFQyxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFERDs7QUFPQTtFQUdDLGVBQUE7QUFORDs7QUFRQTtFQUNDLG9HQUFBO0VBQ0EsY0FBQTtBQUxEOztBQU9BO0VBQ0Msb0dBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUFKRDs7QUFPQTtFQUNDLHFCQUFBO0VBQ0EsWUFBQTtBQUpEOztBQU9BO0VBQ0MsZUFBQTtBQUpEOztBQU9BO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUpEOztBQU1BO0VBRUMsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSkQ7O0FBT0M7RUFJQyxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBUkY7O0FBV0U7RUFDQyxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0FBVEg7O0FBWUU7RUFNQyxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBZkg7O0FBU0c7RUFDQyxjQUFBO0FBUEo7O0FBZUU7RUFDQyxjQUFBO0VBQ0EsZ0NBQUE7QUFiSDs7QUFrQkc7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQWhCSjs7QUE2QkM7RUFDQyx5QkFBQTtBQTNCRiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc3R5bGUxIHVsIHtcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuXHRib3JkZXI6IDA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBhZGRpbmc6IDAgMnJlbTtcblx0Ly8gcG9zaXRpb246IHJlbGF0aXZlO1xuXHQvLyBsZWZ0OiAtMnJlbTtcblx0Ly8gd2lkdGg6IGNhbGMoMTAwJSArIDRyZW0pO1xufVxuXG4uc3R5bGUxIHVsIGxpIHtcblx0Ly8gYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkO1xuXHQvLyB0cmFuc2Zvcm06IHNrZXcoLTE1ZGVnKTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuLnN0eWxlMSB1bCBsaSB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDUwJSwgIzQ0OGNjYiA1MCUsICM0NDhjY2IgOTUlLCAjMDA3MmJjIDk1JSk7XG5cdGZsZXg6IDEgMSBhdXRvO1xufVxuLnN0eWxlMSB1bCBsaSB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDUwJSwgI2EyZDM5YyA1MCUsICNhMmQzOWMgOTUlLCAjN2NjNTc2IDk1JSk7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuXHRjb2xvcjogIzY2Njtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50YWJzY29udGFpbmVyIHVsIHtcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRwYWRkaW5nOiAwcHg7XG59XG5cbi50YWJzY29udGFpbmVyIHVsIGxpIHtcblx0ZGlzcGxheTogaW5saW5lO1xufVxuXG4udGFiLWNsb3NlIHtcblx0Y29sb3I6IGdyYXk7XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4ubXktdGFicyB7XG5cdC8vIGRpc3BsYXk6IGZsZXg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0b3ZlcmZsb3cteDogYXV0bztcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0Ly8gaGVpZ2h0OiA1MnB4O1xuXHQvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Lm15dGFiIHtcblx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xuXHRcdC8vIGJvcmRlci1jb2xvcjogIzA1MTExZCAjZGVlMmU2ICNmZmY7XG5cdFx0Ly8gcGFkZGluZzogMWVtO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRwb2ludGVyLWV2ZW50czogYXV0bztcblx0XHR6LWluZGV4OiAxO1xuXHRcdG1hcmdpbi1sZWZ0OiAycHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAycHg7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiOWI5Yjk7XG5cdFx0XG5cblx0XHRsYWJlbCB7XG5cdFx0XHRmb250LXNpemU6IDFlbTtcblx0XHRcdGNvbG9yOiByZ2JhKDQ4LCA0OSwgNDksIDAuNDUyKTtcblx0XHRcdHRyYW5zaXRpb246IGNvbG9yIDJzO1xuXHRcdFx0dHJhbnNpdGlvbjogZm9udC13ZWlnaHQgMC41cztcblx0XHR9XG5cblx0XHQmOmhvdmVyIHtcblxuXHRcdFx0bGFiZWwge1xuXHRcdFx0XHRjb2xvcjogcmdiKDc1LCA5LCAyMzApO1xuXHRcdFx0XHQvLyBmb250LXdlaWdodDogYm9sZDtcblx0XHRcdH1cblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuXHRcdFx0ei1pbmRleDogMTtcblx0XHR9XG5cblx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRjb2xvcjogIzQ5NTA1Nztcblx0XHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTg1Yjc3O1xuXHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogI2M3YzRjYTtcblx0XHRcdC8vIGJvcmRlci1jb2xvcjogI2RlZTJlNiAjZGVlMmU2ICNmZmY7XG5cdFx0XHQvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIzMWM0ODtcblxuXHRcdFx0bGFiZWwge1xuXHRcdFx0XHRjb2xvcjogIzQ5NTA1Nztcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBsYWJlbCB7XG5cdFx0Ly8gXHQmOmhvdmVyIHtcblx0XHQvLyBcdFx0Y29sb3I6IHJnYig3MSwgOTcsIDE2Mik7XG5cdFx0Ly8gXHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdC8vIFx0fVxuXHRcdC8vIFx0Ly8gbWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRcdC8vIFx0cGFkZGluZzogMWVtO1xuXHRcdC8vIFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdC8vIH1cblx0fVxuXHQubm90aWZ0YWJ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCAyMjYsIDE2NSk7XG5cdH1cbn1cblxuLy8gLmFjdGl2ZSB7XG5cbi8vIH1cbiJdfQ== */"], changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    mobx__WEBPACK_IMPORTED_MODULE_6__.observable
], TabsComponent.prototype, "xxx", void 0);


/***/ }),

/***/ 88390:
/*!****************************************************************************!*\
  !*** ./src/app/modules/general/modules/wys-editor/wys-editor.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WysEditorComponent": () => (/* binding */ WysEditorComponent)
/* harmony export */ });
/* harmony import */ var _Users_claudiu_gombos_Work_my_conditionMongoQuery_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_utils_AppHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/utils/AppHelpers */ 71468);
/* harmony import */ var _services_pubsub_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pubsub/events.service */ 57094);


 // import tinymce from 'tinymce/tinymce';
// import 'tinymce/themes/modern';
// import 'tinymce/plugins/paste';
// import 'tinymce/plugins/link';
// import 'tinymce/plugins/eqneditor';



class WysEditorComponent {
  constructor() {
    this.onHtmlChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.onTextChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.textProp = '';
    this.text = "<p>Hello</p>";
    this.initialized = false;
    this.options = {
      charCounterCount: false,
      placeholderText: 'Edit Your Content Here!',
      toolbarButtons: ['bold', 'italic', 'underline', 'insertLink', 'insertTable'],
      quickInsertTags: [],
      events: {
        'froalaEditor.contentChanged': (e, editor) => {
          this.obj[this.prop] = _services_utils_AppHelpers__WEBPACK_IMPORTED_MODULE_1__.default.removeStyle(editor.html.get());
        }
      }
    };
    this.elementId = '';

    this.guid = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0,
              v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    };

    this.loadTinyMCEJS = () => {
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
          });
        }).catch(ex => {
          reject(ex);
        });
      });
    };

    this.elementId = this.guid();
    _services_pubsub_events_service__WEBPACK_IMPORTED_MODULE_2__.default.subscribe('addQuestionLoaded', this.elementId, () => this.setText());
    this.loadTinyMCEJS();
  }

  set prop(value) {
    this._prop = value;
    this.setText();
  }

  get prop() {
    return this._prop;
  }

  set obj(value) {
    this._obj = value;
    this.setText();

    this.obj.refresh = () => {
      this.setText();
    };
  }

  get obj() {
    return this._obj;
  }

  onChange(evt) {}

  setText() {
    if (!this.initialized || !this.obj) {
      return;
    }

    if (!this.editor) {}

    this.text = this.obj[this.prop] || '';
    this.editor.setContent(this.text);
    const txt = this.editor.getContent({
      format: 'text'
    });
    this.onTextChanged.emit(txt);
  }

  setEditor(editor) {
    this.editor = editor;
  }

  verifyElementId(elementId) {
    return new Promise((resolve, reject) => {
      const domEl = document.getElementById(elementId);

      if (domEl) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  tinyInitialize() {
    var _this = this;

    return (0,_Users_claudiu_gombos_Work_my_conditionMongoQuery_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.loadTinyMCEJS(); // .then(v=> {

      tinymce.init({
        selector: '#' + _this.elementId,
        plugins: ['eqneditor', 'table', 'autoresize'],
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
          _this.editor = editor;

          _this.setEditor(editor);

          _this.initialized = true;

          _this.setText();

          editor.on('keyup', () => {
            const content = editor.getContent();
            const htmlCode = _services_utils_AppHelpers__WEBPACK_IMPORTED_MODULE_1__.default.removeStyle(content);
            _this.obj[_this.prop] = htmlCode;

            if (_this.onHtmlChanged) {
              _this.onHtmlChanged.emit(htmlCode);
            }

            if (_this.textProp) {
              _this.obj[_this.textProp] = _this.editor.getContent({
                format: 'text'
              });
            }

            if (_this.onTextChanged) {
              const txt = editor.getContent({
                format: 'text'
              });

              _this.onTextChanged.emit(txt);
            }
          });
          editor.on('init', e => {
            console.log('Editor was initialized.');
            _this.initialized = true;

            _this.setText();
          });
          editor.on('paste', e => {
            return; // return;

            e.preventDefault();
            const dataTransfer = (e.originalEvent || e).clipboardData || window['clipboardData'];
            var content = dataTransfer.getData('Html') || dataTransfer.getData('Text');
            tinymce.activeEditor.setContent(content, {
              format: 'raw'
            }); // const lines = content.split('\n');
            // lines.forEach(line => {
            //   //editor.execCommand( 'mceInsertContent', false, line );
            //   editor.execCommand('mceInsertRawHTML', false, '<p>' + line + '</p>');
            // });
          });
          editor.on('execCommand', e => {
            if (e.command === 'mceInsertContent') {
              const htmlCode = editor.getContent();
              _this.obj[_this.prop] = htmlCode;

              if (_this.onHtmlChanged) {
                _this.onHtmlChanged.emit(htmlCode);
              }
            }
          });
        },
        oninit: data => {
          _this.initialized = true;

          _this.setText();
        }
      }); // }) 
    })();
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
    _services_pubsub_events_service__WEBPACK_IMPORTED_MODULE_2__.default.unsubscribe('addQuestionLoaded', this.elementId);
    tinymce.remove(this.editor);
  }

  loadExternalStyles(styleUrl) {
    return new Promise((resolve, reject) => {
      const styleElement = document.createElement('link');
      styleElement.rel = 'stylesheet';
      styleElement.type = 'text/css';
      styleElement.href = styleUrl;

      styleElement.onload = val => {
        resolve(val);
      };

      styleElement.onerror = val => {};

      styleElement.onabort = val => {};

      document.head.appendChild(styleElement);
    });
  }

  loadExternalScript(scriptUrl) {
    return new Promise(resolve => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

}

WysEditorComponent.ɵfac = function WysEditorComponent_Factory(t) {
  return new (t || WysEditorComponent)();
};

WysEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: WysEditorComponent,
  selectors: [["app-wys-editor"]],
  inputs: {
    prop: "prop",
    obj: "obj",
    textProp: "textProp"
  },
  outputs: {
    onHtmlChanged: "onHtmlChanged",
    onTextChanged: "onTextChanged"
  },
  decls: 3,
  vars: 1,
  consts: [[3, "id"]],
  template: function WysEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "textarea", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", ctx.elementId);
    }
  },
  styles: [".mceContentBody[_ngcontent-%COMP%] {\n  overflow-y: auto !important;\n}\n\n.my-tinymce-container[_ngcontent-%COMP%] {\n  width: 212px;\n}\n\n.my-tinymce-container[_ngcontent-%COMP%]   .mce-edit-area[_ngcontent-%COMP%] {\n  height: 421px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd5cy1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQURFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBR0oiLCJmaWxlIjoid3lzLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tY2VDb250ZW50Qm9keXtcbiAgb3ZlcmZsb3cteTphdXRvIWltcG9ydGFudDtcbn1cbi5teS10aW55bWNlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyMTJweDtcbiAgLm1jZS1lZGl0LWFyZWEge1xuICAgIGhlaWdodDogNDIxcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxufVxuIl19 */"],
  changeDetection: 0
});

/***/ }),

/***/ 70567:
/*!******************************************************************!*\
  !*** ./src/app/modules/general/modules/wys-editor/wys-module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WysIsWhatYouGetModule": () => (/* binding */ WysIsWhatYouGetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _wys_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wys-editor.component */ 88390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




class WysIsWhatYouGetModule {
}
WysIsWhatYouGetModule.ɵfac = function WysIsWhatYouGetModule_Factory(t) { return new (t || WysIsWhatYouGetModule)(); };
WysIsWhatYouGetModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WysIsWhatYouGetModule });
WysIsWhatYouGetModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WysIsWhatYouGetModule, { declarations: [_wys_editor_component__WEBPACK_IMPORTED_MODULE_0__.WysEditorComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule], exports: [_wys_editor_component__WEBPACK_IMPORTED_MODULE_0__.WysEditorComponent] }); })();


/***/ })

};
;
//# sourceMappingURL=489.js.map