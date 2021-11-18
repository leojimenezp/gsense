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
        this.user.idPerfil = 13;
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
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #e7e7e7;\n  text-transform: none;\n  text-transform: initial;\n}\n\nion-content {\n  --background: #e7e7e7;\n}\n\nion-content .logo {\n  margin-top: 60px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\nion-content .image {\n  width: 152px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  mix-blend-mode: multiply;\n}\n\nion-content p {\n  margin-top: 3%;\n  font-size: 25px;\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: bold;\n  color: #000000;\n}\n\nion-content h3 {\n  color: #000000;\n  width: 90%;\n  margin: auto;\n  margin-top: 50px;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nion-content .text_registro {\n  width: 90%;\n  margin: auto;\n  display: block;\n  letter-spacing: 0.02em;\n  color: #757575;\n  margin-top: 15px;\n  font-size: 15px;\n}\n\nion-content #form {\n  width: 100%;\n  margin-top: 30px;\n}\n\nion-content .main__input {\n  flex-direction: column;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n}\n\nion-content .text_input {\n  display: flex;\n  width: 90%;\n  color: #757575;\n  margin-left: 5px;\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-content .input {\n  width: 90%;\n  background: transparent !important;\n  padding: 12px 0px;\n  background: #ffffff;\n  border: 1px solid rgba(206, 206, 206, 0.5);\n  box-sizing: border-box;\n  border-radius: 10px;\n  padding-left: 15px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content .input:hover {\n  border: 1px solid rgba(231, 49, 34, 0.5);\n}\n\nion-content .buttons {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\nion-content .buttons .btn {\n  text-transform: uppercase;\n  margin-top: 20px;\n  width: 90%;\n  padding: 18px 20px;\n  background: #000000;\n  border-radius: 50px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: white;\n}\n\nion-content .register {\n  margin-top: 40px;\n  color: #757575;\n  background: #fbfbfb;\n  font-weight: 400;\n  width: 80%;\n}\n\nion-content .click {\n  color: #e73122;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFhO0VBQ2Isb0JBQXVCO0VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFhO0FBQ2Y7O0FBRkE7RUFJSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0FBRWY7O0FBVEE7RUFXSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUU1Qjs7QUFsQkE7RUFtQkksY0FBYztFQUNkLGVBQWU7RUFDZiw4Q0FBOEM7RUFDOUMsaUJBQWlCO0VBQ2pCLGNBQWM7QUFHbEI7O0FBMUJBO0VBMkJJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUduQjs7QUFuQ0E7RUFvQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUduQjs7QUE3Q0E7RUE4Q0ksV0FBVztFQUNYLGdCQUFnQjtBQUdwQjs7QUFsREE7RUFtREksc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFHcEI7O0FBM0RBO0VBNERJLGFBQWE7RUFDYixVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUdyQjs7QUFyRUE7RUFzRUksVUFBVTtFQUNWLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUdsQjs7QUFsRkE7RUFtRkksd0NBQXdDO0FBRzVDOztBQXRGQTtFQXVGSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBR3BCOztBQTlGQTtFQStGSSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7QUFHaEI7O0FBMUdBO0VBMkdJLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0FBR2Q7O0FBbEhBO0VBbUhJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUduQiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTdlN2U3O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlN2U3ZTc7XG5cbiAgLmxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgd2lkdGg6IDE1MnB4O1xuICAgIGhlaWdodDogMzRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICB9XG4gIHAge1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG5cbiAgaDMge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLnRleHRfcmVnaXN0cm8ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICAjZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4gIC5tYWluX19pbnB1dCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4gIC50ZXh0X2lucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmlucHV0IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTJweCAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwNiwgMjA2LCAyMDYsIDAuNSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gIH1cblxuICAuaW5wdXQ6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMxLCA0OSwgMzQsIDAuNSk7XG4gIH1cblxuICAuYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIC5idXR0b25zIC5idG4ge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAucmVnaXN0ZXIge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAuY2xpY2sge1xuICAgIGNvbG9yOiAjZTczMTIyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 23407:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/signup/signup.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"> </ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/login\">Login</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"logo\">\n    <!--img class=\"image\" src=\"assets/logonutrix.jpeg\" /-->\n     <p>gSense</p>\n  </div>\n  <h3>Crea tu cuenta</h3>\n  <ion-label class=\"text_registro\">Ingresa tus datos para que puedas disfrutar de todos los beneficios que traemos para\n    ti. </ion-label>\n  <form id=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\n    <div class=\"main__input\">\n      <label class=\"text_input\">Nombre y Apellido</label>\n      <input class=\"input\" type=\"text\" name=\"nombre\" [(ngModel)]=\"user.nombre\" #nombre=\"ngModel\"\n        [ngClass]=\"{ 'is-invalid': f.submitted && nombre.invalid }\" required autocomplete=\"off\" />\n    </div>\n    <div class=\"main__input\">\n      <label class=\"text_input\">Correo Electrónico</label>\n      <input class=\"input\" type=\"email\" name=\"correo\" [(ngModel)]=\"user.correo\" #correo=\"ngModel\"\n        [ngClass]=\"{ 'is-invalid': f.submitted && correo.invalid }\" required autocomplete=\"off\" />\n    </div>\n    <div class=\"main__input\">\n      <label class=\"text_input\">Télefono</label>\n      <input class=\"input\" type=\"text\" name=\"telefono\" [(ngModel)]=\"user.telefono\" #telefono=\"ngModel\"\n        [ngClass]=\"{ 'is-invalid': f.submitted && telefono.invalid }\" required autocomplete=\"off\" />\n    </div>\n    <div class=\"buttons\">\n      <button class=\"btn\" type=\"submit\">Registrarme</button>\n      <button class=\"register\" routerLink=\"/login\">¿Ya tienes una cuenta?<span class=\"click\"> Click Aquí</span></button>\n    </div>\n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_feature_signup_signup_module_ts-es2015.js.map