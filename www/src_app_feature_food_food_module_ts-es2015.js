(self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_food_food_module_ts"],{

/***/ 25294:
/*!*****************************************************!*\
  !*** ./src/app/feature/food/food-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodPageRoutingModule": function() { return /* binding */ FoodPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _food_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.page */ 58118);




const routes = [
    {
        path: '',
        component: _food_page__WEBPACK_IMPORTED_MODULE_0__.FoodPage
    }
];
let FoodPageRoutingModule = class FoodPageRoutingModule {
};
FoodPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FoodPageRoutingModule);



/***/ }),

/***/ 61866:
/*!*********************************************!*\
  !*** ./src/app/feature/food/food.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodPageModule": function() { return /* binding */ FoodPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _food_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-routing.module */ 25294);
/* harmony import */ var _food_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.page */ 58118);







let FoodPageModule = class FoodPageModule {
};
FoodPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _food_routing_module__WEBPACK_IMPORTED_MODULE_0__.FoodPageRoutingModule
        ],
        declarations: [_food_page__WEBPACK_IMPORTED_MODULE_1__.FoodPage]
    })
], FoodPageModule);



/***/ }),

/***/ 58118:
/*!*******************************************!*\
  !*** ./src/app/feature/food/food.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodPage": function() { return /* binding */ FoodPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_food_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./food.page.html */ 74527);
/* harmony import */ var _food_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.page.scss */ 39516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let FoodPage = class FoodPage {
    constructor() { }
    ngOnInit() {
    }
};
FoodPage.ctorParameters = () => [];
FoodPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-food',
        template: _raw_loader_food_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_food_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FoodPage);



/***/ }),

/***/ 39516:
/*!*********************************************!*\
  !*** ./src/app/feature/food/food.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb29kLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 74527:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/food/food.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>food</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_feature_food_food_module_ts-es2015.js.map