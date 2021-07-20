(self["webpackChunkcondition_mongo_query"] = self["webpackChunkcondition_mongo_query"] || []).push([["src_app_modules_general_contact_mailing_mailing_module_ts"],{

/***/ 8558:
/*!***************************************************************************!*\
  !*** ./src/app/modules/general/contact/mailing/mailing-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailingRoutingModule": () => (/* binding */ MailingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _mailing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mailing.component */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', component: _mailing_component__WEBPACK_IMPORTED_MODULE_0__.MailingComponent, children: [] }
];
class MailingRoutingModule {
}
MailingRoutingModule.ɵfac = function MailingRoutingModule_Factory(t) { return new (t || MailingRoutingModule)(); };
MailingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MailingRoutingModule });
MailingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MailingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8798:
/*!**********************************************************************!*\
  !*** ./src/app/modules/general/contact/mailing/mailing.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailingComponent": () => (/* binding */ MailingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class MailingComponent {
    constructor() { }
    ngOnInit() {
    }
}
MailingComponent.ɵfac = function MailingComponent_Factory(t) { return new (t || MailingComponent)(); };
MailingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailingComponent, selectors: [["app-mailing"]], decls: 2, vars: 0, template: function MailingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mailing works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlsaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1987:
/*!*******************************************************************!*\
  !*** ./src/app/modules/general/contact/mailing/mailing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailingModule": () => (/* binding */ MailingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _mailing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mailing-routing.module */ 8558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class MailingModule {
}
MailingModule.ɵfac = function MailingModule_Factory(t) { return new (t || MailingModule)(); };
MailingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MailingModule });
MailingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _mailing_routing_module__WEBPACK_IMPORTED_MODULE_0__.MailingRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MailingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _mailing_routing_module__WEBPACK_IMPORTED_MODULE_0__.MailingRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_general_contact_mailing_mailing_module_ts.js.map