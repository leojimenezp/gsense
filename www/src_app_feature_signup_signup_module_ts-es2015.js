(self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_signup_signup_module_ts"],{

/***/ 13649:
/*!*********************************************************!*\
  !*** ./src/app/feature/signup/signup-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": function() { return /* binding */ SignupPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 92138);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 47400:
/*!*************************************************!*\
  !*** ./src/app/feature/signup/signup.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": function() { return /* binding */ SignupPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 13649);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 92138);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage],
    })
], SignupPageModule);



/***/ }),

/***/ 92138:
/*!***********************************************!*\
  !*** ./src/app/feature/signup/signup.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": function() { return /* binding */ SignupPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 23407);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 35391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _shared_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/localstorage.service */ 21662);
/* harmony import */ var _shared_constants_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/constants/storage */ 29686);







let SignupPage = class SignupPage {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
        this.user = {};
    }
    ngOnInit() {
    }
    onSubmit() {
        this.user.idPerfil = 2;
        this.storageService.createStorage(_shared_constants_storage__WEBPACK_IMPORTED_MODULE_3__.USER_DATA, this.user);
        this.router.navigate(['/register-one']);
    }
};
SignupPage.ctorParameters = () => [
    { type: _shared_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__.localStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 35391:
/*!*************************************************!*\
  !*** ./src/app/feature/signup/signup.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #fbfbfb;\n  text-transform: none;\n  text-transform: initial;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-content .logo {\n  margin-top: 60px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\nion-content .image {\n  width: 152px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  mix-blend-mode: multiply;\n}\n\nion-content h3 {\n  color: #e73122;\n  width: 90%;\n  margin: auto;\n  margin-top: 50px;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nion-content .text_registro {\n  width: 90%;\n  margin: auto;\n  display: block;\n  letter-spacing: 0.02em;\n  color: #757575;\n  margin-top: 15px;\n  font-size: 15px;\n}\n\nion-content #form {\n  width: 100%;\n  margin-top: 30px;\n}\n\nion-content .main__input {\n  flex-direction: column;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n}\n\nion-content .text_input {\n  display: flex;\n  width: 90%;\n  color: #757575;\n  margin-left: 5px;\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-content .input {\n  width: 90%;\n  background: transparent !important;\n  padding: 12px 0px;\n  background: #ffffff;\n  border: 1px solid rgba(206, 206, 206, 0.5);\n  box-sizing: border-box;\n  border-radius: 10px;\n  padding-left: 15px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content .input:hover {\n  border: 1px solid rgba(231, 49, 34, 0.5);\n}\n\nion-content .buttons {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\nion-content .buttons .btn {\n  text-transform: uppercase;\n  margin-top: 20px;\n  width: 90%;\n  padding: 18px 20px;\n  background: #e73122;\n  border-radius: 50px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: white;\n}\n\nion-content .register {\n  margin-top: 40px;\n  color: #757575;\n  background: #fbfbfb;\n  font-weight: 400;\n  width: 80%;\n}\n\nion-content .click {\n  color: #e73122;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFhO0VBQ2Isb0JBQXVCO0VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFhO0FBQ2Y7O0FBRkE7RUFJSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0FBRWY7O0FBVEE7RUFXSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUU1Qjs7QUFsQkE7RUFvQkksY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBRW5COztBQTNCQTtFQTZCSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBRW5COztBQXJDQTtFQXVDSSxXQUFXO0VBQ1gsZ0JBQWdCO0FBRXBCOztBQTFDQTtFQTRDSSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUVwQjs7QUFuREE7RUFxREksYUFBYTtFQUNiLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBRXJCOztBQTdEQTtFQStESSxVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0FBRWxCOztBQTFFQTtFQTRFSSx3Q0FBd0M7QUFFNUM7O0FBOUVBO0VBZ0ZJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFFcEI7O0FBdEZBO0VBd0ZJLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtBQUVoQjs7QUFsR0E7RUFvR0ksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFFZDs7QUExR0E7RUE0R0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBRW5CIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIHdpZHRoOiAxNTJweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBjb2xvcjogI2U3MzEyMjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudGV4dF9yZWdpc3RybyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgI2Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX2lucHV0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRleHRfaW5wdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5pbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjA2LCAyMDYsIDIwNiwgMC41KTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzEsIDQ5LCAzNCwgMC41KTtcclxuICB9XHJcblxyXG4gIC5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5idXR0b25zIC5idG4ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMThweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U3MzEyMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuXHJcbiAgLmNsaWNrIHtcclxuICAgIGNvbG9yOiAjZTczMTIyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 23407:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/signup/signup.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"primary\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"> </ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/login\">Login</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"logo\">\r\n    <img class=\"image\" src=\"assets/logonutrix.jpeg\" />\r\n  </div>\r\n  <h3>Crea tu cuenta</h3>\r\n  <ion-label class=\"text_registro\">Ingresa tus datos para que puedas disfrutar de todos los beneficios que traemos para\r\n    ti. </ion-label>\r\n  <form id=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\r\n    <div class=\"main__input\">\r\n      <label class=\"text_input\">Nombre y Apellido</label>\r\n      <input class=\"input\" type=\"text\" name=\"nombre\" [(ngModel)]=\"user.nombre\" #nombre=\"ngModel\"\r\n        [ngClass]=\"{ 'is-invalid': f.submitted && nombre.invalid }\" required autocomplete=\"off\" />\r\n    </div>\r\n    <div class=\"main__input\">\r\n      <label class=\"text_input\">Correo Electrónico</label>\r\n      <input class=\"input\" type=\"email\" name=\"correo\" [(ngModel)]=\"user.correo\" #correo=\"ngModel\"\r\n        [ngClass]=\"{ 'is-invalid': f.submitted && correo.invalid }\" required autocomplete=\"off\" />\r\n    </div>\r\n    <div class=\"main__input\">\r\n      <label class=\"text_input\">Télefono</label>\r\n      <input class=\"input\" type=\"text\" name=\"telefono\" [(ngModel)]=\"user.telefono\" #telefono=\"ngModel\"\r\n        [ngClass]=\"{ 'is-invalid': f.submitted && telefono.invalid }\" required autocomplete=\"off\" />\r\n    </div>\r\n    <div class=\"buttons\">\r\n      <button class=\"btn\" type=\"submit\">Registrarme</button>\r\n      <button class=\"register\" routerLink=\"/login\">¿Ya tienes una cuenta?<span class=\"click\"> Click Aquí</span></button>\r\n    </div>\r\n  </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_feature_signup_signup_module_ts-es2015.js.map