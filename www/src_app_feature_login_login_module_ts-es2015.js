(self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_login_login_module_ts"],{

/***/ 12863:
/*!*******************************************************!*\
  !*** ./src/app/feature/login/login-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 55037);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 22691:
/*!***********************************************!*\
  !*** ./src/app/feature/login/login.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 12863);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 55037);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 55037:
/*!*********************************************!*\
  !*** ./src/app/feature/login/login.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 5756);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 51573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/auth.service */ 41026);





let LoginPage = class LoginPage {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    loginGoogle() {
        this.authService.authenticateWithGoogle();
    }
};
LoginPage.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 41026:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ 33469);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 27570);




let AuthService = class AuthService {
    constructor(auth, google) {
        this.auth = auth;
        this.google = google;
    }
    authenticateWithGoogle() {
        this.google.login({}).then(response => {
            const userData = response;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.Auth },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_0__.GooglePlus }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 51573:
/*!***********************************************!*\
  !*** ./src/app/feature/login/login.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #fbfbfb;\n  text-transform: none;\n  text-transform: initial;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-content #logo {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\nion-content #img {\n  width: 152px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  mix-blend-mode: multiply;\n}\n\nion-content #text {\n  margin-top: 40px;\n  display: inline-block;\n  color: #a3a1a1;\n  width: 100%;\n  text-align: center;\n  font-weight: 400;\n}\n\nion-content .btn__login {\n  display: flex;\n  justify-content: space-around;\n  flex-flow: column wrap;\n  margin-top: 20px;\n}\n\nion-content .btn__google {\n  text-transform: capitalize;\n  width: 80%;\n  margin: auto;\n  margin-top: 20px;\n  width: 80%;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  background: #cb2d3e;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #ef473a, #cb2d3e);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\nion-content .btn__micro {\n  text-transform: capitalize;\n  width: 80%;\n  margin: auto;\n  margin-top: 20px;\n  width: 80%;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  background: #e44d26;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #f16529, #e44d26);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\nion-content .x1,\nion-content .x2 {\n  color: white;\n}\n\nion-content .or {\n  margin-top: 40px;\n  display: inline-block;\n  color: #a3a1a1;\n  width: 100%;\n  text-align: center;\n  font-weight: 400;\n}\n\nion-content #main__form {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-top: 20px;\n}\n\nion-content .input {\n  width: 80%;\n  background: transparent !important;\n  padding: 12px 0px;\n  background: #ffffff;\n  border: 1px solid rgba(206, 206, 206, 0.5);\n  box-sizing: border-box;\n  border-radius: 10px;\n  color: #000;\n  margin-top: 20px;\n  padding-left: 10px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content .input:hover {\n  border: 1px solid rgba(231, 49, 34, 0.5);\n}\n\nion-content ::-moz-placeholder {\n  padding-left: 8px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content :-ms-input-placeholder {\n  padding-left: 8px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content ::placeholder {\n  padding-left: 8px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content #buttons {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\nion-content #buttons #btn {\n  text-transform: uppercase;\n  margin-top: 20px;\n  width: 90%;\n  padding: 18px 20px;\n  background: #E73122;\n  border-radius: 50px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\nion-content .register {\n  margin-top: 10px;\n  color: #757575;\n  background: #fbfbfb;\n  font-weight: 400;\n  width: 80%;\n}\n\nion-content .click {\n  color: #e73122;\n  font-weight: bold;\n}\n\n@media screen and (min-width: 505px) {\n  ion-content .input {\n    width: 45%;\n  }\n  ion-content .btn__google {\n    width: 55%;\n  }\n  ion-content .btn__micro {\n    width: 55%;\n  }\n  ion-content .buttons .btn {\n    width: 55%;\n  }\n  ion-content .register {\n    margin-top: 15px;\n  }\n}\n\n@media screen and (min-width: 660px) {\n  ion-content .input {\n    width: 45%;\n  }\n  ion-content .btn__google {\n    width: 45%;\n  }\n  ion-content .btn__micro {\n    width: 45%;\n  }\n  ion-content .buttons .btn {\n    width: 45%;\n  }\n  ion-content .register {\n    margin-top: 25px;\n  }\n}\n\n@media screen and (min-width: 820px) {\n  ion-content .input {\n    width: 80%;\n    background: transparent !important;\n    padding: 12px 0px;\n    background: #FFFFFF;\n    border: 1px solid rgba(206, 206, 206, 0.5);\n    box-sizing: border-box;\n    border-radius: 10px;\n    color: #000;\n    margin-top: 20px;\n    padding-left: 12px;\n    font-size: 14px;\n    color: #757575;\n  }\n  ion-content .btn__google {\n    width: 35%;\n  }\n  ion-content ::-moz-placeholder {\n    padding-left: 8px;\n    color: #757575;\n  }\n  ion-content :-ms-input-placeholder {\n    padding-left: 8px;\n    color: #757575;\n  }\n  ion-content ::placeholder {\n    padding-left: 8px;\n    color: #757575;\n  }\n  ion-content .buttons {\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    align-items: center;\n    margin-top: 0px;\n  }\n  ion-content .buttons .btn {\n    text-transform: uppercase;\n    margin-top: 30px;\n    padding: 18px 20px;\n    border-radius: 50px;\n    background: #E73122;\n    font-weight: bold;\n    letter-spacing: 1px;\n  }\n  ion-content .register {\n    margin-top: 30px;\n    background: #fbfbfb;\n    font-weight: normal;\n    width: 100%;\n    font-size: 16px;\n    margin-bottom: 5px;\n  }\n}\n\nion-content .click {\n  color: #E73122;\n  font-weight: bold;\n  font-size: 14px;\n}\n\nion-content .btn__google {\n  width: 25%;\n}\n\nion-content .btn__micro {\n  width: 25%;\n}\n\nion-content .buttons .btn {\n  width: 10%;\n}\n\nion-content .register {\n  margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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QW9MTSxVQUFVO0VBSmQ7RUFoTEY7SUF3TE0sVUFBVTtFQUxkO0VBbkxGO0lBNExNLFVBQVU7RUFOZDtFQXRMRjtJQWdNTSxnQkFBZ0I7RUFQcEI7QUFDRjs7QUFVRTtFQXBNRjtJQXNNTSxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7RUFQbEI7RUExTUY7SUFxTk0sVUFBVTtFQVJkO0VBN01GO0lBeU5NLGlCQUFpQjtJQUNqQixjQUFjO0VBVGxCO0VBak5GO0lBeU5NLGlCQUFpQjtJQUNqQixjQUFjO0VBVGxCO0VBak5GO0lBeU5NLGlCQUFpQjtJQUNqQixjQUFjO0VBVGxCO0VBak5GO0lBOE5NLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0VBVm5CO0VBeE5GO0lBc09NLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQVh2QjtFQWpPRjtJQWlQTSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtFQWJ0QjtBQUNGOztBQTFPQTtFQTJQSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFibkI7O0FBaFBBO0VBa1FJLFVBQVU7QUFkZDs7QUFwUEE7RUFzUUksVUFBVTtBQWRkOztBQXhQQTtFQTBRSSxVQUFVO0FBZGQ7O0FBNVBBO0VBOFFJLGdCQUFnQjtBQWRwQiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmYmZiZmI7XHJcblxyXG4gICNsb2dvIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICNpbWcge1xyXG4gICAgd2lkdGg6IDE1MnB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcclxuICB9XHJcblxyXG4gICN0ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2EzYTFhMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG4gIC5idG5fX2xvZ2luIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bl9fZ29vZ2xlIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2IyZDNlO1xyXG4gICAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZjQ3M2EsICNjYjJkM2UpO1xyXG4gICAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VmNDczYSwgI2NiMmQzZSk7XHJcbiAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgfVxyXG5cclxuICAuYnRuX19taWNybyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTQ0ZDI2O1xyXG4gICAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMTY1MjksICNlNDRkMjYpO1xyXG4gICAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YxNjUyOSwgI2U0NGQyNik7XHJcbiAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgfVxyXG5cclxuICAueDEsXHJcbiAgLngyIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG5cclxuICAub3Ige1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjYTNhMWExO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbiAgI21haW5fX2Zvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwNiwgMjA2LCAyMDYsIDAuNSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0OmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMxLCA0OSwgMzQsIDAuNSk7XHJcbiAgfVxyXG5cclxuICA6OnBsYWNlaG9sZGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgfVxyXG5cclxuICAjYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAjYnV0dG9ucyAjYnRuIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNFNzMxMjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgLnJlZ2lzdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcblxyXG4gIC5jbGljayB7XHJcbiAgICBjb2xvcjogI2U3MzEyMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTA1cHgpIHtcclxuICAgIC5pbnB1dCB7XHJcbiAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bl9fZ29vZ2xlIHtcclxuICAgICAgd2lkdGg6IDU1JTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuX19taWNybyB7XHJcbiAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMgLmJ0biB7XHJcbiAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY2MHB4KSB7XHJcbiAgICAuaW5wdXQge1xyXG4gICAgICB3aWR0aDogNDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG5fX2dvb2dsZSB7XHJcbiAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bl9fbWljcm8ge1xyXG4gICAgICB3aWR0aDogNDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIC5idG4ge1xyXG4gICAgICB3aWR0aDogNDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWdpc3RlciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MjBweCkge1xyXG4gICAgLmlucHV0IHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjA2LCAyMDYsIDIwNiwgMC41KTtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuX19nb29nbGUge1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gICAgfVxyXG5cclxuICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIC5idG4ge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNFNzMxMjI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2xpY2sge1xyXG4gICAgY29sb3I6ICNFNzMxMjI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgfVxyXG5cclxuICAuYnRuX19nb29nbGUge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIC5idG5fX21pY3JvIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9ucyAuYnRuIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 5756:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/login/login.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"primary\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"> </ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/signup\">Sign up</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div id=\"logo\">\r\n    <img id=\"img\" src=\"assets/logonutrix.jpeg\" />\r\n  </div>\r\n  <span id=\"text\">Sing in</span>\r\n  <div class=\"btn__login\">\r\n    <button class=\"btn__google\" routerLink=\"/register-two\" (click)=\"loginGoogle()\"><i\r\n        class=\"fab fa-google-plus-g x1\"></i></button>\r\n    <button class=\"btn__micro\"><i class=\"fab fa-windows x2\"> </i></button>\r\n  </div>\r\n  <span class=\"or\">Or</span>\r\n  <form id=\"main__form\">\r\n    <input shape=\"round\" class=\"input\" type=\"email \" placeholder=\"Email\" />\r\n    <input shape=\"round\" class=\"input\" type=\"password\" placeholder=\"Password\" />\r\n\r\n  </form>\r\n  <div id=\"buttons\">\r\n    <button id=\"btn\" type=\"submit\" routerLink=\"/home\">Login</button>\r\n    <button class=\"register\" routerLink=\"/signup\"> You have not registered?<span class=\"click\"> Click\r\n        Aquí</span></button>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_feature_login_login_module_ts-es2015.js.map