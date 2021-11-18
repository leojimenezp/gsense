(self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_splash_splash_module_ts"],{

/***/ 56687:
/*!*********************************************************!*\
  !*** ./src/app/feature/splash/splash-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageRoutingModule": function() { return /* binding */ SplashPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.page */ 29765);




const routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_0__.SplashPage
    }
];
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SplashPageRoutingModule);



/***/ }),

/***/ 77255:
/*!*************************************************!*\
  !*** ./src/app/feature/splash/splash.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageModule": function() { return /* binding */ SplashPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-routing.module */ 56687);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page */ 29765);







let SplashPageModule = class SplashPageModule {
};
SplashPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashPageRoutingModule
        ],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_1__.SplashPage]
    })
], SplashPageModule);



/***/ }),

/***/ 29765:
/*!***********************************************!*\
  !*** ./src/app/feature/splash/splash.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPage": function() { return /* binding */ SplashPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./splash.page.html */ 39331);
/* harmony import */ var _splash_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page.scss */ 92646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);





let SplashPage = class SplashPage {
    constructor(router) {
        this.router = router;
        setTimeout(() => {
            this.router.navigateByUrl('login');
        }, 1000);
    }
    ngOnInit() {
    }
};
SplashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SplashPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splash',
        template: _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_splash_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SplashPage);



/***/ }),

/***/ 92646:
/*!*************************************************!*\
  !*** ./src/app/feature/splash/splash.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #fbfbfb;\n  text-transform: none;\n  text-transform: initial;\n}\n\n@-webkit-keyframes slide-in-fwd-center {\n  0% {\n    transform: translateZ(-1400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateZ(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-in-fwd-center {\n  0% {\n    transform: translateZ(-1400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateZ(0);\n    opacity: 1;\n  }\n}\n\nion-content {\n  --background: #080808;\n}\n\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  -webkit-animation: slide-in-fwd-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-in-fwd-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\nion-content #header img {\n  margin-top: 70%;\n  width: 150px;\n  border: 8px solid #ffffff;\n}\n\nion-content #header p {\n  margin-top: 70%;\n  font-size: 25px;\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: bold;\n}\n\nion-content #header #textRegistro {\n  color: #757575;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYTtFQUNiLG9CQUF1QjtFQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUVFLDhCQUE4QjtJQUM5QixVQUFVO0VBQ1o7RUFFQTtJQUVFLHdCQUF3QjtJQUN4QixVQUFVO0VBQVo7QUFDRjs7QUFHQTtFQUNFO0lBRUUsOEJBQThCO0lBQzlCLFVBQVU7RUFBWjtFQUdBO0lBRUUsd0JBQXdCO0lBQ3hCLFVBQVU7RUFEWjtBQUNGOztBQUlBO0VBQ0UscUJBQWE7QUFEZjs7QUFBQTtFQUlJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBRW5CLG1GQUMyQztFQUMzQywyRUFBMkU7QUFGL0U7O0FBUkE7RUFhTSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtBQUQvQjs7QUFkQTtFQWtCTSxlQUFlO0VBQ2YsZUFBZTtFQUNmLDhDQUE4QztFQUM5QyxpQkFBaUI7QUFBdkI7O0FBckJBO0VBeUJNLGNBQWM7QUFBcEIiLCJmaWxlIjoic3BsYXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluLWZ3ZC1jZW50ZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTE0MDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xNDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWZ3ZC1jZW50ZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTE0MDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xNDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzA4MDgwODtcblxuICAjaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1pbi1md2QtY2VudGVyIDFzXG4gICAgICBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWZ3ZC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG5cbiAgICBpbWcge1xuICAgICAgbWFyZ2luLXRvcDogNzAlO1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgYm9yZGVyOiA4cHggc29saWQgI2ZmZmZmZjtcbiAgICB9XG4gICAgcCB7XG4gICAgICBtYXJnaW4tdG9wOiA3MCU7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgI3RleHRSZWdpc3RybyB7XG4gICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 39331:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/splash/splash.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div id=\"header\" class=\"container ion-text-center\">\n    <!--img src=\"assets/logonutrix.jpeg\" /-->\n    <p>gSense</p>\n  </div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_feature_splash_splash_module_ts-es2015.js.map