(self["webpackChunkcondition_mongo_query"] = self["webpackChunkcondition_mongo_query"] || []).push([["src_app_modules_general_signin_signin_module_ts"],{

/***/ 3664:
/*!*****************************************************************!*\
  !*** ./src/app/modules/general/signin/signin-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninRoutingModule": () => (/* binding */ SigninRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.component */ 3579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', component: _signin_component__WEBPACK_IMPORTED_MODULE_0__.SigninComponent },
];
class SigninRoutingModule {
}
SigninRoutingModule.ɵfac = function SigninRoutingModule_Factory(t) { return new (t || SigninRoutingModule)(); };
SigninRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SigninRoutingModule });
SigninRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SigninRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3579:
/*!************************************************************!*\
  !*** ./src/app/modules/general/signin/signin.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninComponent": () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class SigninComponent {
    constructor() { }
    ngOnInit() {
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(); };
SigninComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 2, vars: 0, consts: [[1, "text-center"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "signin works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2965:
/*!*********************************************************!*\
  !*** ./src/app/modules/general/signin/signin.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninModule": () => (/* binding */ SigninModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.component */ 3579);
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin-routing.module */ 3664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class SigninModule {
}
SigninModule.ɵfac = function SigninModule_Factory(t) { return new (t || SigninModule)(); };
SigninModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SigninModule });
SigninModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_1__.SigninRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SigninModule, { declarations: [_signin_component__WEBPACK_IMPORTED_MODULE_0__.SigninComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _signin_routing_module__WEBPACK_IMPORTED_MODULE_1__.SigninRoutingModule], exports: [_signin_component__WEBPACK_IMPORTED_MODULE_0__.SigninComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_general_signin_signin_module_ts.js.map