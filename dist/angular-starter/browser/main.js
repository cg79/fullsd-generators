(self["webpackChunkcondition_mongo_query"] = self["webpackChunkcondition_mongo_query"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _modules_general_mquery_mquery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/general/mquery/mquery.component */ 7453);
/* harmony import */ var _modules_general_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/general/not-found/not-found.component */ 9519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    { path: '', component: _modules_general_mquery_mquery_component__WEBPACK_IMPORTED_MODULE_0__.MqueryComponent, },
    {
        path: 'template-driven-forms',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js"), __webpack_require__.e("src_app_modules_application_example-template-driven-forms_tutorial_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/application/example-template-driven-forms/tutorial.module */ 7847))
            .then(mod => mod.TutorialModule)
    },
    {
        path: 'mquery',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_general_mquery_mquery_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/general/mquery/mquery.module */ 9177))
            .then(mod => mod.MqueryModule)
    },
    {
        path: 'components',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_application_example-components_tutorial_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/application/example-components/tutorial.module */ 3612))
            .then(mod => mod.TutorialModule)
    },
    {
        path: 'services',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_application_example-services_tutorial_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/application/example-services/tutorial.module */ 8609))
            .then(mod => mod.TutorialModule)
    },
    {
        path: 'reactive-form',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js"), __webpack_require__.e("src_app_modules_application_example-reactive-form_tutorial_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/application/example-reactive-form/tutorial.module */ 1047))
            .then(mod => mod.TutorialModule)
    },
    {
        path: 'bootstrap',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_application_example-bootstrap_tutorial_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/application/example-bootstrap/tutorial.module */ 7297))
            .then(mod => mod.TutorialModule)
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_general_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/general/contact/contact.module */ 4811))
            .then(mod => mod.ContactModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_general_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/general/about/about.module */ 8734))
            .then(mod => mod.AboutModule)
    },
    {
        path: 'signin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_general_signin_signin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/general/signin/signin.module */ 2965))
            .then(mod => mod.SigninModule)
    },
    { path: '**', component: _modules_general_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _models_MongoDataModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/MongoDataModel */ 2602);
/* harmony import */ var _xhr_XhrService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr/XhrService */ 6859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ 6858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);






// import { DOCUMENT } from '@angular/common';
class AppComponent {
    constructor(ref, _ngZone) {
        this.ref = ref;
        this._ngZone = _ngZone;
        this.dataModel = null;
        this.htmlText = "<p>Your message</p>";
        this.title = 'conditionMongoQuery';
        this.quillConfig = {
            //toolbar: '.toolbar',
            toolbar: {
                container: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['code-block'],
                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ],
            },
        };
        this.script = null;
        // this.ref.detectChanges();
        this.dataModel = new _models_MongoDataModel__WEBPACK_IMPORTED_MODULE_0__.MongoDataModel();
        // let script = this.document.createElement("script");
        //     script.setAttribute('data-name','BMC-Widget')
        //     script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        //     script.setAttribute('data-id', 'boulderproblems');
        //     script.setAttribute('data-description', 'Thank you for your support!');
        //     script.setAttribute('data-message', 'This web is free to use. Do you want to help supporting it?');
        //     script.setAttribute('data-color',"#FF5F5F")
        //     script.setAttribute('data-position','right')
        //     script.setAttribute('data-x_margin','18')
        //     script.setAttribute('data-y-margin','18')
        //     script.async = true
        //     this.script = script
        // CustomObserver.observe(this.dataModel, ['expression', 'mongoQuery'], () => {
        //   this.ref.detectChanges();
        // })
    }
    ngOnInit() {
        // CustomObserver.observe(this.dataModel,['emailBody'], () => {
        //   debugger;
        //   this.ref.detectChanges();
        // })
    }
    ngAfterViewInit() {
        // debugger;
        // document.head.appendChild(this.script);
    }
    sendEmail() {
        if (!this.dataModel.emailBody) {
            return;
        }
        this.dataModel.sendDisabled = true;
        const body = { content: this.dataModel.emailBody };
        new _xhr_XhrService__WEBPACK_IMPORTED_MODULE_1__.XhrService().post(body, '/email')
            .catch(ex => {
            console.log(ex);
        })
            .finally(() => {
            debugger;
            // this._ngZone.run(() => {
            setTimeout(() => {
                this.dataModel.emailBody = 'Message sent';
                setTimeout(() => {
                    this.dataModel.emailBody = 'Thank you!';
                    setTimeout(() => {
                        this.dataModel.emailBody = '';
                        this.dataModel.sendDisabled = false;
                    }, 2 * 1000);
                }, 2 * 1000);
            }, 1);
            // });
            // this.dataModel = {
            //   ...this.dataModel
            // }
        });
        // 
        // this.http.post('http://localhost:4200/email', body)
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 3, consts: [["role", "banner", 1, "toolbar"], ["width", "80", "alt", "Mongo Logo", "src", "./assets/mongodb.png"], [1, "spacer"], [1, "mr10"], ["role", "main", 1, "content"], [1, "content", "flex-center"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"], ["placeholder", "Feedback message", 3, "ngModel", "modules", "ngModelChange"], [1, "card-container"], ["type", "button", "value", "Send Message", 3, "disabled", "click"], ["href", "https://www.patreon.com/bePatron?u=58453256", "data-patreon-widget-type", "become-patron-button", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-coffee"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Expression to mongo query");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Send a change request or feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "I will try to respond/fix in maximum 48 h");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "quill-editor", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_quill_editor_ngModelChange_14_listener($event) { return ctx.dataModel.emailBody = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_input_click_16_listener() { return ctx.sendEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Become a Patron! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.dataModel.emailBody)("modules", ctx.quillConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.dataModel.emailBody || ctx.dataModel.sendDisabled);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, ngx_quill__WEBPACK_IMPORTED_MODULE_4__.QuillEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: [".expression-input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    \n    \n}\n\n.flex-center[_ngcontent-%COMP%] {\n    align-items: center;\n}\n\n.generate[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5leHByZXNzaW9uLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICAvKiBhbGlnbi1pdGVtczogc3RyZXRjaDsgKi9cbn1cblxuLmZsZXgtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2VuZXJhdGU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .bigspacer[_ngcontent-%COMP%] {\n    flex: 4;\n  }\n\n  .dispflex[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .dircol[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  \n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #4b4d4a;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    \n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n\n  img#rocket[_ngcontent-%COMP%] {\n    width: 40px;\n    position: absolute;\n    left: -8px;\n    \n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .transp[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n\n  .mr10[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n\n  .mybtn[_ngcontent-%COMP%] {\n    border: 1px solid white;\n  }\n\n  .mybtn[_ngcontent-%COMP%]:hover {\n    border: 2px solid rgb(226, 222, 222);\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, .2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, .35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _modules_general_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/general/home/home.component */ 4808);
/* harmony import */ var _modules_general_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/general/not-found/not-found.component */ 9519);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ 6858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);










// import { HttpClientModule } from '@angular/common/http';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            ngx_quill__WEBPACK_IMPORTED_MODULE_7__.QuillModule.forRoot(),
            // HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _modules_general_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
        _modules_general_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, ngx_quill__WEBPACK_IMPORTED_MODULE_7__.QuillModule, 
        // HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 2602:
/*!******************************************!*\
  !*** ./src/app/models/MongoDataModel.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MongoDataModel": () => (/* binding */ MongoDataModel)
/* harmony export */ });
/* harmony import */ var _mongo_tree_MongoQueryLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mongo-tree/MongoQueryLogic */ 5705);

class MongoDataModel {
    constructor() {
        this.emailBody = '';
        this.sendDisabled = false;
        this.expression = 'age >= 1 && (validated __ true || validated == 1)';
        this.mongoQueryObj = null;
        // CustomObserver.observe(this, ['expression', 'mongoQuery'])
    }
    generateMongoExpression() {
        debugger;
        var mongoQueryObj = _mongo_tree_MongoQueryLogic__WEBPACK_IMPORTED_MODULE_0__.default.createMongoQuery(this.expression);
        this.mongoQueryObj = mongoQueryObj;
        // var mongoQueryObjNoComma = JSON.stringify(mongoQueryObj).replace(/"([^"]+)":/g, '$1:');
        // this.mongoQueryObj = mongoQueryObjNoComma;
        // var mongoObj = JSON.parse(mongoQueryObjNoComma);
        // this.mongoQueryObj = mongoObj;
    }
}


/***/ }),

/***/ 4808:
/*!********************************************************!*\
  !*** ./src/app/modules/general/home/home.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






function HomeComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/", feature_r1.link, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas ", feature_r1.icon, " fa-lg text-primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r1.description);
} }
class HomeComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.name = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.application.name;
        this.angular = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.application.angular;
        this.bootstrap = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.application.bootstrap;
        this.fontawesome = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.application.fontawesome;
        this.features =
            [
                {
                    name: 'Bootstrap',
                    description: 'Bootstrap Prototype Description',
                    icon: 'fab fa-bootstrap',
                    link: 'bootstrap'
                },
                {
                    name: 'Reactive Form',
                    description: 'Reactive Form Description',
                    icon: 'fab fa-bootstrap',
                    link: 'reactive-form'
                },
                {
                    name: 'Services',
                    description: 'Services Description',
                    icon: 'fab fa-bootstrap',
                    link: 'services'
                },
                {
                    name: 'Components',
                    description: 'Components Description',
                    icon: 'fab fa-bootstrap',
                    link: 'components'
                },
                {
                    name: 'Template Driven Forms',
                    description: 'Template Driven Forms Description',
                    icon: 'fab fa-bootstrap',
                    link: 'template-driven-forms'
                },
            ];
    }
    ngOnInit() {
        this.loadScript('assets/params/js/index.js');
    }
    loadScript(name) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = name;
            s.async = false;
            document.getElementsByTagName('head')[0].appendChild(s);
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 28, vars: 5, consts: [[1, "row", "pt-1", "mb-2"], [1, "col-md-3", "text-center", "mb-2"], [1, "h5"], [1, "fas", "fa-laptop", "fa-lg", "mr-2", "text-primary"], [1, "fas", "fa-mobile-alt", "fa-lg", "ml-2", "mr-1", "text-primary"], [1, "fas", "fa-tablet-alt", "fa-lg", "ml-2", "mr-1", "text-primary"], [1, "col-md-3", "text-center", "text-danger"], [1, "fab", "fa-angular", "fa-lg", "ml-2", "mr-1", "text-danger"], [1, "col-md-3", "text-center", "text-primary"], [1, "fab", "fa-bootstrap", "fa-lg", "ml-2", "mr-1", "text-primary"], [1, "col-md-3", "text-center", "text-warning"], [1, "fab", "fa-font-awesome-flag", "fa-lg", "ml-2", "mr-1", "text-warning"], [1, "row", "mb-1"], [1, "col-md-12", "text-center"], [1, "h6"], [1, "fas", "fa-list"], [1, "row", "pt-2"], ["class", "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-3", "mb-2"], [1, "card", "bg-light", "mb-3"], [3, "routerLink"], [1, "card-header"], [1, "row"], [1, "col-10", "col-xl-10"], [1, "card-title"], [1, "col-2", "col-xl-2"], [1, "card-body"], [1, "card-text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " hhhhhhhh hhhhg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Features\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HomeComponent_div_27_Template, 13, 6, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.angular, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.bootstrap, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.fontawesome, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".card[_ngcontent-%COMP%] {\n  display: block;\n  background-color: rgba(255, 255, 255, .8);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);\n  border-radius: 2px;\n  transition: all .2s ease-in-out;\n  cursor: pointer;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .23);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsc0VBQXNFO0VBQ3RFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdFQUF3RTtBQUMxRSIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjI0KTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAuMjMpO1xufSJdfQ== */"] });


/***/ }),

/***/ 7453:
/*!************************************************************!*\
  !*** ./src/app/modules/general/mquery/mquery.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MqueryComponent": () => (/* binding */ MqueryComponent)
/* harmony export */ });
/* harmony import */ var _models_MongoDataModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/MongoDataModel */ 2602);
/* harmony import */ var _xhr_XhrService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../xhr/XhrService */ 6859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);

// import CustomObserver from './observers/CustomObserver';





// import { DOCUMENT } from '@angular/common';
class MqueryComponent {
    constructor() {
        this.dataModel = null;
        this.htmlText = "<p>Your message</p>";
        this.title = 'conditionMongoQuery';
        this.quillConfig = {
            //toolbar: '.toolbar',
            toolbar: {
                container: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['code-block'],
                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ],
            },
        };
        this.script = null;
        // this.ref.detectChanges();
        this.dataModel = new _models_MongoDataModel__WEBPACK_IMPORTED_MODULE_0__.MongoDataModel();
        // let script = this.document.createElement("script");
        //     script.setAttribute('data-name','BMC-Widget')
        //     script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        //     script.setAttribute('data-id', 'boulderproblems');
        //     script.setAttribute('data-description', 'Thank you for your support!');
        //     script.setAttribute('data-message', 'This web is free to use. Do you want to help supporting it?');
        //     script.setAttribute('data-color',"#FF5F5F")
        //     script.setAttribute('data-position','right')
        //     script.setAttribute('data-x_margin','18')
        //     script.setAttribute('data-y-margin','18')
        //     script.async = true
        //     this.script = script
        // CustomObserver.observe(this.dataModel, ['expression', 'mongoQuery'], () => {
        //   this.ref.detectChanges();
        // })
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // debugger;
        // document.head.appendChild(this.script);
    }
    sendEmail() {
        if (!this.dataModel.emailBody) {
            return;
        }
        debugger;
        // const body = JSON.stringify({a:1})
        const body = { content: this.dataModel.emailBody };
        new _xhr_XhrService__WEBPACK_IMPORTED_MODULE_1__.XhrService().post(body, '/email')
            .catch(ex => {
            console.log(ex);
        })
            .finally(() => {
            this.dataModel.emailBody = '';
        });
        // 
        // this.http.post('http://localhost:4200/email', body)
    }
}
MqueryComponent.ɵfac = function MqueryComponent_Factory(t) { return new (t || MqueryComponent)(); };
MqueryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MqueryComponent, selectors: [["app-mquery"]], decls: 71, vars: 4, consts: [["role", "banner", 1, "toolbar"], ["width", "80", "alt", "Mongo Logo", "src", "./assets/mongodb.png"], [1, "spacer"], [1, "mr10"], ["role", "main", 1, "content"], [1, "card-container", "flex"], ["type", "text", 1, "expression-input", 3, "ngModel", "ngModelChange"], [1, "content", "flex-center"], [1, "card", "highlight-card", "card-small", "flex-center", "generate", 3, "click"], ["id", "rocket", "src", "./assets/mongodb.svg", "alt", "mongo SVG"], [1, "generate"], [1, "flexcenter"]], template: function MqueryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Expression to mongo query");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MqueryComponent_Template_input_ngModelChange_9_listener($event) { return ctx.dataModel.expression = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MqueryComponent_Template_div_click_11_listener() { return ctx.dataModel.generateMongoExpression(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Generate mongo query");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "smaller");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "<=");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "smaller or equal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "greater");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, ">=");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "greater or equal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "==");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "equal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "!=");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "different");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "&&");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "and");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "||");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "__");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "exists");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.dataModel.expression);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 2, ctx.dataModel.mongoQueryObj));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe], styles: [".expression-input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    \n    \n}\n\n.flex-center[_ngcontent-%COMP%] {\n    align-items: center;\n}\n\n.generate[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1xdWVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoibXF1ZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5leHByZXNzaW9uLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICAvKiBhbGlnbi1pdGVtczogc3RyZXRjaDsgKi9cbn1cblxuLmZsZXgtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2VuZXJhdGU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .bigspacer[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n\n  .dispflex[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .dircol[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n\n  .flexcenter[_ngcontent-%COMP%] {\n  border: 1px solid #2d2d2d;\n  display: flex;\n  justify-content: center;\n}\n  \n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #4b4d4a;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    \n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n\n  img#rocket[_ngcontent-%COMP%] {\n    width: 40px;\n    position: absolute;\n    left: -8px;\n    \n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .transp[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n\n  .mr10[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n\n  .mybtn[_ngcontent-%COMP%] {\n    border: 1px solid white;\n  }\n\n  .mybtn[_ngcontent-%COMP%]:hover {\n    border: 2px solid rgb(226, 222, 222);\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, .2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, .35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"], changeDetection: 0 });


/***/ }),

/***/ 9519:
/*!******************************************************************!*\
  !*** ./src/app/modules/general/not-found/not-found.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, consts: [[1, "text-center"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5705:
/*!***********************************************!*\
  !*** ./src/app/mongo-tree/MongoQueryLogic.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// LINK: https://stackoverflow.com/questions/37469768/infix-to-binary-expression-tree nice pproach
//Link: https://medium.com/@alexanderv/parsing-mathematical-expressions-into-a-binary-tree-part-2-570e61dc8632
class Stack {
    constructor() {
        this.stack = [];
    }
    isEmpty() {
        return this.stack.length == 0;
    }
    pop() {
        return this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    push(o) {
        this.stack.push(o);
    }
    size() {
        return this.stack.length;
    }
}
class BinaryTreeNode {
    constructor(data, left = null, right = null) {
        this.data = null;
        this.left = null;
        this.right = null;
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class Operator {
    constructor(t) {
        this.sign = null;
        this.value = null;
        this.sign = t;
    }
    lessOrEqualInPrecedenceTo(o) {
        return this.value <= o.value;
    }
}
class Plus extends Operator {
    constructor(t) {
        super(t);
        this.value = 0;
        this.applyFunction = (arg1, arg2) => {
            return arg1 + arg2;
        };
    }
}
class Minus extends Operator {
    constructor(t) {
        super(t);
        this.value = 0;
        this.applyFunction = (arg1, arg2) => {
            return arg1 - arg2;
        };
    }
}
class Divide extends Operator {
    constructor(t) {
        super(t);
        this.value = 0;
        this.applyFunction = (arg1, arg2) => {
            return arg1 / arg2;
        };
    }
}
class Multiply extends Operator {
    constructor(t) {
        super(t);
        this.value = 0;
        this.applyFunction = (arg1, arg2) => {
            return arg1 * arg2;
        };
    }
}
class MongoQueryLogic {
    constructor() {
        this.mongoOperators = {
            '&&': {
                v: '&&',
                precedence: 4,
                associativity: 'Left'
            },
            '||': {
                v: '||',
                precedence: 4,
                associativity: 'Left'
            },
            '!': {
                v: '!',
                precedence: 3,
                associativity: 'Left'
            },
            '==': {
                v: '==',
                precedence: 5,
                associativity: 'Left'
            },
            '__': {
                v: '$exists',
                precedence: 5,
                associativity: 'Left'
            },
            '<': {
                v: '<',
                precedence: 5,
                associativity: 'Left'
            },
            '>': {
                v: '>',
                precedence: 5,
                associativity: 'Left'
            },
            '<=': {
                v: '<=',
                precedence: 5,
                associativity: 'Left'
            },
            '>=': {
                v: '>=',
                precedence: 5,
                associativity: 'Left'
            }
        };
        this.createOperator = (t) => {
            switch (t) {
                case '+': return new Plus(t);
                case '-': return new Minus(t);
                case '/': return new Divide(t);
                case '*': return new Multiply(t);
                default: return null;
            }
        };
        this.infixToBinaryTree = (input) => {
            if (input.length === 0) {
                return null;
            }
            if (input.length === 1) {
                return input[0];
            }
            let head = null;
            let left = null;
            const outputStack = new Stack();
            const operatorStack = new Stack();
            const updateTree = () => {
                const operator = operatorStack.pop();
                const output = outputStack.pop();
                if (head == null) {
                    head = new BinaryTreeNode(operator);
                    left = outputStack.pop();
                    head.left = left instanceof BinaryTreeNode ? left : new BinaryTreeNode(left);
                    head.right = output instanceof BinaryTreeNode ? output : new BinaryTreeNode(output);
                }
                else {
                    const subtree = head;
                    head = new BinaryTreeNode(operator);
                    head.left = output instanceof BinaryTreeNode ? output : new BinaryTreeNode(output);
                    head.right = subtree;
                }
            };
            const createSubtree = (operator, tree) => {
                let left = null;
                if (tree == null) {
                    const right = outputStack.pop();
                    left = outputStack.pop();
                    tree = new BinaryTreeNode(operator);
                    tree.right = right instanceof BinaryTreeNode ? right : new BinaryTreeNode(right);
                    tree.left = left instanceof BinaryTreeNode ? left : new BinaryTreeNode(left);
                }
                else {
                    const subtree = tree;
                    left = outputStack.pop();
                    tree = new BinaryTreeNode(operator);
                    tree.right = subtree;
                    tree.left = left instanceof BinaryTreeNode ? left : new BinaryTreeNode(left);
                }
                const opToken = this.mongoOperators[operator];
                const opLiteralStack = operatorStack.peek();
                const opStack = opLiteralStack ? this.mongoOperators[opLiteralStack] : null;
                // if ( !operatorStack.isEmpty() && operator.lessOrEqualInPrecedenceTo( operatorStack.peek() ) ) {
                if (!operatorStack.isEmpty() &&
                    opStack && opStack.precedence &&
                    ((opToken.associativity === 'Left' && opToken.precedence <= opStack.precedence) ||
                        (opToken.associativity === 'Right' && opToken.precedence < opStack.precedence))) {
                    return createSubtree(operatorStack.pop(), tree);
                }
                else {
                    return tree;
                }
            };
            const createMongoTree = (infix) => {
                // const operatorStack = new Stack();
                // const opstr = '==&&||!<=>=<>';
                infix = infix.replace(/\s+/g, '');
                infix = infix.replace(/\"{1,}/g, '');
                infix = infix.split(/(__|==|&&|\|\||!|<=|>=|<|>|\(|\))/gi).filter(el => el !== '');
                //infix.map(el =>el = el.replace(/\"{1,}/g, ''));
                for (const token of infix) {
                    const opToken = this.mongoOperators[token];
                    if (token === '(') {
                        operatorStack.push(token);
                    }
                    else if (token === ')') {
                        while (operatorStack.peek() !== '(') {
                            const subtree = createSubtree(operatorStack.pop(), null);
                            outputStack.push(subtree);
                        }
                        operatorStack.pop();
                    }
                    else if (opToken) { // token length can be taken out
                        // const operator = this.createOperator( token );
                        const opLiteralStack = operatorStack.peek();
                        const opStack = opLiteralStack ? this.mongoOperators[opLiteralStack] : null;
                        if (opStack && opStack.precedence &&
                            ((opToken.associativity === 'Left' && opToken.precedence <= opStack.precedence) ||
                                (opToken.associativity === 'Right' && opToken.precedence < opStack.precedence))) {
                            const subtree = createSubtree(operatorStack.pop(), null);
                            outputStack.push(subtree);
                        }
                        operatorStack.push(token);
                    }
                    else {
                        outputStack.push(token);
                    }
                }
                while (!operatorStack.isEmpty()) {
                    updateTree();
                }
                if (head == null && outputStack.size() == 1 && outputStack.peek() instanceof BinaryTreeNode) {
                    head = outputStack.pop();
                }
                return head;
            };
            return createMongoTree(input);
        };
        this.mongoResult = {};
    }
    stringToMongoValue(input) {
        if (input === "false") {
            return false;
        }
        if (input === "true") {
            return true;
        }
        if (!isNaN(input)) {
            return parseFloat(input);
        }
        //todo date?
        return input;
    }
    binaryTreeToMongoQuery(tree) {
        if (!tree) {
            return this.mongoResult;
        }
        let a = null;
        let b = null;
        let temp = {};
        switch (tree.data) {
            case '==': {
                a = tree.left.data;
                b = tree.right.data;
                temp = {};
                temp[a] = this.stringToMongoValue(b);
                break;
            }
            case '__': {
                a = tree.left.data;
                b = tree.right.data;
                temp = {};
                temp[a] = {
                    "$exists": this.stringToMongoValue(b)
                };
                break;
            }
            case '<': {
                a = tree.left.data;
                b = tree.right.data;
                temp = {};
                temp[a] = { $lt: this.stringToMongoValue(b) };
                break;
            }
            case '<=': {
                a = tree.left.data;
                b = tree.right.data;
                temp = {};
                temp[a] = { $lte: this.stringToMongoValue(b) };
                break;
            }
            case '>': {
                a = tree.left.data;
                b = tree.right.data;
                temp = {};
                temp[a] = { $gt: this.stringToMongoValue(b) };
                break;
            }
            case '>=': {
                a = tree.left.data;
                b = tree.right.data;
                temp = {};
                temp[a] = { $gte: this.stringToMongoValue(b) };
                break;
            }
            case '||': {
                a = this.binaryTreeToMongoQuery(tree.left);
                b = this.binaryTreeToMongoQuery(tree.right);
                temp = { $or: [
                        a, b
                    ] };
                break;
            }
            case '&&': {
                a = this.binaryTreeToMongoQuery(tree.left);
                b = this.binaryTreeToMongoQuery(tree.right);
                temp = { $and: [
                        a, b
                    ] };
                break;
            }
        }
        return temp;
    }
    createMongoQuery(input) {
        const tree = this.infixToBinaryTree(input);
        const mongoQuery = this.binaryTreeToMongoQuery(tree);
        return mongoQuery;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new MongoQueryLogic());


/***/ }),

/***/ 6849:
/*!**************************************!*\
  !*** ./src/app/xhr/ResponseError.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponseError": () => (/* binding */ ResponseError)
/* harmony export */ });
/**
 * class used to store the xhr error response
 */
class ResponseError {
    constructor(status, message) {
        this.status = 0;
        this.message = '';
        this.status = status;
        this.message = message;
    }
}


/***/ }),

/***/ 2492:
/*!****************************!*\
  !*** ./src/app/xhr/Xhr.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResponseError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponseError */ 6849);

// var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
// var theUrl = "http://localhost:3001/api/pub/bullet";
// xmlhttp.open("POST", theUrl);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" } }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Xhr {
    http(options) {
        return new Promise((resolve, reject) => {
            const xmlHttpObject = window.XMLHttpRequest;
            const xhr = new xmlHttpObject();
            // xhr.withCredentials = true;
            xhr.open(options.method, options.url);
            const addHeaders = function (headers) {
                if (!headers) {
                    return;
                }
                Object.keys(headers).forEach(function (key) {
                    xhr.setRequestHeader(key, headers[key]);
                });
            };
            xhr.onload = function onload() {
                if (this.status >= 200 && this.status < 300) {
                    return resolve(new _ResponseError__WEBPACK_IMPORTED_MODULE_0__.ResponseError(this.status, JSON.parse(this.response)));
                }
                return reject(new _ResponseError__WEBPACK_IMPORTED_MODULE_0__.ResponseError(this.status, this.response));
            };
            xhr.onerror = function onerror() {
                const error = new _ResponseError__WEBPACK_IMPORTED_MODULE_0__.ResponseError(this.status, this.response);
                return reject(error);
            };
            addHeaders(options.headers);
            xhr.send(options.data);
        });
    }
    post(url, data, headers = {}) {
        return this.http({
            headers,
            method: 'POST',
            url,
            data,
        });
    }
    get(url, headers = {}) {
        return this.http({
            headers,
            method: 'GET',
            url,
        });
    }
});


/***/ }),

/***/ 6859:
/*!***********************************!*\
  !*** ./src/app/xhr/XhrService.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XhrService": () => (/* binding */ XhrService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _Xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Xhr */ 2492);


class XhrService {
    constructor() {
        this.privateUrl = '';
    }
    get(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const response = yield _Xhr__WEBPACK_IMPORTED_MODULE_0__.default.get(url);
                return {
                    data: response,
                    success: true,
                };
            }
            catch (e) {
                return {
                    data: null,
                    success: false,
                    error: e,
                };
            }
        });
    }
    post(data, route = '') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const headers = this.createHeader();
            route = route ? `${this.privateUrl}${route}` : this.privateUrl;
            try {
                const axiosResponse = yield _Xhr__WEBPACK_IMPORTED_MODULE_0__.default.post(route, JSON.stringify(data), headers);
                return Promise.resolve(axiosResponse.message);
            }
            catch (error) {
                return {
                    data: error,
                    success: false,
                };
            }
        });
    }
    createHeader() {
        // const headers = new HttpHeaders(
        //   {
        //     'Content-Type': 'application/json;charset=UTF-8',
        //     Authorization: user ? user.token ? user.token : '' : ''
        //   } );
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
        };
        return headers;
    }
}
// export default XhrService;


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    application: {
        name: 'angular-starter',
        angular: 'Angular 12.1.1',
        bootstrap: 'Bootstrap 5.0.1',
        fontawesome: 'Font Awesome 5.15.3',
    }
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map