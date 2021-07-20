(self["webpackChunkcondition_mongo_query"] = self["webpackChunkcondition_mongo_query"] || []).push([["src_app_modules_general_mquery_mquery_module_ts"],{

/***/ 5072:
/*!*****************************************************************!*\
  !*** ./src/app/modules/general/mquery/mquery-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MqueryRoutingModule": () => (/* binding */ MqueryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _mquery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mquery.component */ 7453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', component: _mquery_component__WEBPACK_IMPORTED_MODULE_0__.MqueryComponent },
];
class MqueryRoutingModule {
}
MqueryRoutingModule.ɵfac = function MqueryRoutingModule_Factory(t) { return new (t || MqueryRoutingModule)(); };
MqueryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MqueryRoutingModule });
MqueryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MqueryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9177:
/*!*********************************************************!*\
  !*** ./src/app/modules/general/mquery/mquery.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MqueryModule": () => (/* binding */ MqueryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _mquery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mquery.component */ 7453);
/* harmony import */ var _mquery_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mquery-routing.module */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



// import { QuillModule } from 'ngx-quill';


class MqueryModule {
}
MqueryModule.ɵfac = function MqueryModule_Factory(t) { return new (t || MqueryModule)(); };
MqueryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MqueryModule });
MqueryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _mquery_routing_module__WEBPACK_IMPORTED_MODULE_1__.MqueryRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MqueryModule, { declarations: [_mquery_component__WEBPACK_IMPORTED_MODULE_0__.MqueryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _mquery_routing_module__WEBPACK_IMPORTED_MODULE_1__.MqueryRoutingModule], exports: [_mquery_component__WEBPACK_IMPORTED_MODULE_0__.MqueryComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_general_mquery_mquery_module_ts.js.map