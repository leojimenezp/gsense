(self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_register-two_register-two_module_ts"],{

/***/ 95163:
/*!*********************************************************************!*\
  !*** ./src/app/feature/register-two/register-two-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterTwoPageRoutingModule": function() { return /* binding */ RegisterTwoPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _register_two_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-two.page */ 64731);




const routes = [
    {
        path: '',
        component: _register_two_page__WEBPACK_IMPORTED_MODULE_0__.RegisterTwoPage
    }
];
let RegisterTwoPageRoutingModule = class RegisterTwoPageRoutingModule {
};
RegisterTwoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterTwoPageRoutingModule);



/***/ }),

/***/ 83593:
/*!*************************************************************!*\
  !*** ./src/app/feature/register-two/register-two.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterTwoPageModule": function() { return /* binding */ RegisterTwoPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _register_two_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-two-routing.module */ 95163);
/* harmony import */ var _register_two_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-two.page */ 64731);







let RegisterTwoPageModule = class RegisterTwoPageModule {
};
RegisterTwoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_two_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterTwoPageRoutingModule
        ],
        declarations: [_register_two_page__WEBPACK_IMPORTED_MODULE_1__.RegisterTwoPage]
    })
], RegisterTwoPageModule);



/***/ }),

/***/ 64731:
/*!***********************************************************!*\
  !*** ./src/app/feature/register-two/register-two.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterTwoPage": function() { return /* binding */ RegisterTwoPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_register_two_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register-two.page.html */ 62827);
/* harmony import */ var _register_two_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-two.page.scss */ 28074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let RegisterTwoPage = class RegisterTwoPage {
    constructor() { }
    ngOnInit() {
    }
};
RegisterTwoPage.ctorParameters = () => [];
RegisterTwoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-register-two',
        template: _raw_loader_register_two_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_two_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterTwoPage);



/***/ }),

/***/ 28074:
/*!*************************************************************!*\
  !*** ./src/app/feature/register-two/register-two.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci10d28ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 62827:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/register-two/register-two.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>register_two</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_feature_register-two_register-two_module_ts-es2015.js.map