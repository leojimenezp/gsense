(self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_register-one_register-one_module_ts"],{

/***/ 85266:
/*!*********************************************************************!*\
  !*** ./src/app/feature/register-one/register-one-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterOnePageRoutingModule": function() { return /* binding */ RegisterOnePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _register_one_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-one.page */ 93145);




const routes = [
    {
        path: '',
        component: _register_one_page__WEBPACK_IMPORTED_MODULE_0__.RegisterOnePage
    }
];
let RegisterOnePageRoutingModule = class RegisterOnePageRoutingModule {
};
RegisterOnePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterOnePageRoutingModule);



/***/ }),

/***/ 30399:
/*!*************************************************************!*\
  !*** ./src/app/feature/register-one/register-one.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterOnePageModule": function() { return /* binding */ RegisterOnePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask-ionic */ 30250);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _register_one_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-one-routing.module */ 85266);
/* harmony import */ var _register_one_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-one.page */ 93145);








let RegisterOnePageModule = class RegisterOnePageModule {
};
RegisterOnePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_one_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterOnePageRoutingModule,
            ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_7__.NgxMaskIonicModule
        ],
        declarations: [_register_one_page__WEBPACK_IMPORTED_MODULE_1__.RegisterOnePage]
    })
], RegisterOnePageModule);



/***/ }),

/***/ 93145:
/*!***********************************************************!*\
  !*** ./src/app/feature/register-one/register-one.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterOnePage": function() { return /* binding */ RegisterOnePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_register_one_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register-one.page.html */ 30753);
/* harmony import */ var _register_one_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-one.page.scss */ 81313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _shared_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/localstorage.service */ 21662);
/* harmony import */ var _shared_constants_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/constants/storage */ 29686);







let RegisterOnePage = class RegisterOnePage {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
        this.user = {};
    }
    ngOnInit() {
        this.getStorage();
    }
    getStorage() {
        const userData = JSON.parse(this.storageService.getStorage(_shared_constants_storage__WEBPACK_IMPORTED_MODULE_3__.USER_DATA));
        this.user.nombre = userData.nombre;
        this.user.correo = userData.correo;
        this.user.telefono = userData.telefono;
        this.user.idPerfil = userData.idPerfil;
    }
    onSubmit() {
        this.user.fechanac = this.user.ano + '-' + this.user.mes + '-' + this.user.dia;
        this.user.peso = parseFloat(this.user.peso);
        this.user.altura = parseFloat(this.user.altura);
        this.user.cintura = parseFloat(this.user.cintura);
        this.user.hemogoblina = parseFloat(this.user.hemogoblina);
        this.storageService.createStorage(_shared_constants_storage__WEBPACK_IMPORTED_MODULE_3__.USER_DATA, this.user);
        this.router.navigate(['/register-two']);
    }
};
RegisterOnePage.ctorParameters = () => [
    { type: _shared_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__.localStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
RegisterOnePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-register-one',
        template: _raw_loader_register_one_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_one_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterOnePage);



/***/ }),

/***/ 81313:
/*!*************************************************************!*\
  !*** ./src/app/feature/register-one/register-one.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #d8d8d8;\n  text-transform: none;\n  text-transform: initial;\n  color: white;\n}\n\nion-toolbar .bars {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 20px;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-content .container {\n  width: 100%;\n}\n\nion-content .container h3 {\n  color: #000000;\n  width: 90%;\n  margin: auto;\n  display: block;\n  margin-top: 40px;\n}\n\nion-content .container p {\n  color: #757575;\n  width: 90%;\n  margin: auto;\n  display: block;\n  margin-top: 20px;\n  line-height: 20px;\n  margin-bottom: 40px;\n}\n\nion-content .progress {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: auto;\n}\n\nion-content .num {\n  display: inline-block;\n  width: 54px;\n  height: 54px;\n  border: 1px solid #d4d4d4;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\n\nion-content .num span {\n  display: block;\n  color: #d4d4d4;\n  text-align: center;\n  line-height: 54px;\n  font-size: 25px;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n}\n\nion-content .active {\n  border-color: #e73122 !important;\n}\n\nion-content .line {\n  display: inline-block;\n  width: 40px;\n  height: 1px;\n  background: #d4d4d4;\n}\n\nion-content #main_form {\n  width: 100%;\n  margin-top: 35px;\n}\n\nion-content .main__input {\n  flex-direction: column;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n}\n\nion-content .text_input {\n  display: flex;\n  width: 90%;\n  color: #757575;\n  margin-left: 5px;\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-content .input {\n  width: 90%;\n  background: transparent !important;\n  padding: 12px 0px;\n  background: #ffffff;\n  border: 1px solid rgba(206, 206, 206, 0.5);\n  box-sizing: border-box;\n  border-radius: 10px;\n  color: #757575;\n  outline: none;\n  padding-left: 12px;\n}\n\nion-content ::-moz-placeholder {\n  padding-left: 12px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content :-ms-input-placeholder {\n  padding-left: 12px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content ::placeholder {\n  padding-left: 12px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content .input:hover {\n  border: 1px solid rgba(231, 49, 34, 0.5);\n}\n\nion-content .fecha,\nion-content .datos {\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: auto;\n  margin-top: 20px;\n}\n\nion-content label {\n  display: block;\n  color: #a0a0a0;\n  font-size: 12px;\n  line-height: 120%;\n  margin-left: 5px;\n}\n\nion-content .date-field {\n  width: 50px;\n  text-align: center;\n  width: 105px;\n  height: 45px;\n  background: #ffffff;\n  border: 1px solid rgba(206, 206, 206, 0.5);\n  box-sizing: border-box;\n  border-radius: 10px;\n  color: #000;\n  outline: none;\n}\n\nion-content .field-inline-block {\n  display: inline-block;\n  margin: auto;\n}\n\nion-content .label {\n  color: #757575;\n}\n\nion-content .buttons {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 90px;\n}\n\nion-content .btn {\n  text-transform: uppercase;\n  margin-top: 20px;\n  width: 90%;\n  padding: 18px 20px;\n  background: #000000;\n  border-radius: 50px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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QUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7QUFOaEIiLCJmaWxlIjoicmVnaXN0ZXItb25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZDhkOGQ4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxuICAuYmFycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcblxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWluZXIgaDMge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cblxuICAuY29udGFpbmVyIHAge1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuXG4gIC8vUHJvZ3Jlc3MgbnVtYmVyXG4gIC5wcm9ncmVzcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAubnVtIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDU0cHg7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAubnVtIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjZDRkNGQ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNTRweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgfVxuXG4gIC5hY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogI2U3MzEyMiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLy8gTGluZWEgZGUgbG9zIHBhc28gMSBhIDMuXG4gIC5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2Q0ZDRkNDtcbiAgfVxuXG4gIC8vRm9ybXVsYXJpbyBkZSByZWdpc3Ryb1xuXG4gICNtYWluX2Zvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gIH1cblxuICAubWFpbl9faW5wdXQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cblxuICAudGV4dF9pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5pbnB1dCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEycHggMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDYsIDIwNiwgMjA2LCAwLjUpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogIzc1NzU3NTtcblxuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICB9XG5cbiAgOjpwbGFjZWhvbGRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgfVxuXG4gIC5pbnB1dDpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzEsIDQ5LCAzNCwgMC41KTtcbiAgfVxuXG4gIC8vIEZvcm0gZmVjaGEgeSBkYXRvc1xuICAuZmVjaGEsXG4gIC5kYXRvcyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI2EwYTBhMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuXG4gIC5kYXRlLWZpZWxkIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwNXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjA2LCAyMDYsIDIwNiwgMC41KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC5maWVsZC1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAvLyBDb2xvciBwZXNvLCBhbHR1cmEgeSBjaW50dXJhXG4gIC5sYWJlbCB7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gIH1cblxuICAvL0J1dHRvbiBndWFyZGFyIHkgc2VndWlyXG4gIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDkwcHg7XG4gIH1cblxuICAuYnRuIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 30753:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/register-one/register-one.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><i class=\"fas fa-bars bars\"></i></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <h3>Registro</h3>\n    <p>Te haremos unas breves preguntas para que tú experiencia sea la más adecuada.</p>\n  </div>\n\n  <div class=\"progress\">\n    <div class=\"num active\">\n      <span>1</span>\n    </div>\n    <span class=\"line\"></span>\n    <div class=\"num\">\n      <span>2</span>\n    </div>\n  </div>\n  <form id=\"main_form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\n    <div class=\"main__input\">\n      <label for=\"nombre__registro\" class=\"text_input\">Nombre y Apellido</label>\n      <input class=\"input\" type=\"text\" name=\"nombre\" [(ngModel)]=\"user.nombre\" #nombre=\"ngModel\"\n        [ngClass]=\"{ 'is-invalid': f.submitted && nombre.invalid }\" required autocomplete=\"off\" />\n    </div>\n    <div class=\"main__input\">\n      <label for=\"correo__registro\" class=\"text_input\">Correo Electrónico</label>\n      <input class=\"input\" type=\"email\" name=\"correo\" [(ngModel)]=\"user.correo\" #correo=\"ngModel\"\n        [ngClass]=\"{ 'is-invalid': f.submitted && correo.invalid }\" required autocomplete=\"off\" />\n    </div>\n    <div class=\"main__input\">\n      <label for=\"tel__registro\" class=\"text_input\">Télefono</label>\n      <input class=\"input\" type=\"text\" name=\"telefono\" [(ngModel)]=\"user.telefono\" #telefono=\"ngModel\"\n        [ngClass]=\"{ 'is-invalid': f.submitted && telefono.invalid }\" required autocomplete=\"off\" />\n    </div>\n    <div class=\"main__input\">\n      <label for=\"rut__registro\" class=\"text_input\">RUT</label>\n      <input class=\"input\" type=\"text\" name=\"rut\" [(ngModel)]=\"user.rut\" #rut=\"ngModel\"\n        [ngClass]=\"{ 'is-invalid': f.submitted && rut.invalid }\" required autocomplete=\"off\" />\n    </div>\n    <div class=\"main__input\">\n      <label for=\"date\" class=\"text_input\">Fecha de Nacimiento</label>\n    </div>\n    <div class=\"fecha\">\n      <div class=\"field-inline-block\">\n        <label>Día</label>\n        <input type=\"text\" pattern=\"[0-9]*\" maxlength=\"2\" size=\"2\" class=\"date-field\" name=\"dia\" [(ngModel)]=\"user.dia\"\n          #dia=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && dia.invalid }\" required autocomplete=\"off\" />\n      </div>\n\n      <div class=\"field-inline-block\">\n        <label>Mes</label>\n        <input type=\"text\" pattern=\"[0-9]*\" maxlength=\"2\" size=\"2\" class=\"date-field\" name=\"mes\" [(ngModel)]=\"user.mes\"\n          #mes=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && mes.invalid }\" required autocomplete=\"off\" />\n      </div>\n\n      <div class=\"field-inline-block\">\n        <label>Año</label>\n        <input type=\"text\" pattern=\"[0-9]*\" maxlength=\"4\" size=\"4\" class=\"date-field date-field--year\" name=\"ano\"\n          [(ngModel)]=\"user.ano\" #ano=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && ano.invalid }\" required\n          autocomplete=\"off\" />\n      </div>\n    </div>\n    <div class=\"datos\">\n      <div class=\"field-inline-block\">\n        <label class=\"label\">Peso</label>\n        <input type=\"text\" mask=\"00.00\" class=\"date-field\" name=\"peso\" [(ngModel)]=\"user.peso\" #peso=\"ngModel\"\n          [ngClass]=\"{ 'is-invalid': f.submitted && peso.invalid }\" required autocomplete=\"off\" />\n      </div>\n\n      <div class=\"field-inline-block\">\n        <label class=\"label\">Altura</label>\n        <input type=\"text\" mask=\"00.0\" class=\"date-field\" name=\"altura\" [(ngModel)]=\"user.altura\" #altura=\"ngModel\"\n          [ngClass]=\"{ 'is-invalid': f.submitted && altura.invalid }\" required autocomplete=\"off\" />\n      </div>\n\n      <div class=\"field-inline-block\">\n        <label class=\"label\">Cintura</label>\n        <input type=\"text\" mask=\"00.0\" class=\"date-field date-field--year\" name=\"cintura\" [(ngModel)]=\"user.cintura\"\n          #cintura=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && cintura.invalid }\" required autocomplete=\"off\" />\n      </div>\n    </div>\n    <div class=\"main__input\">\n      <label for=\"hemo\" class=\"text_input\">Hemoglobina Glicosilada</label>\n      <input class=\"input\" mask=\"00.0\" id=\"hemo\" type=\"text\" name=\"hemogoblina\" [(ngModel)]=\"user.hemogoblina\"\n        #hemogoblina=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && hemogoblina.invalid }\" required\n        autocomplete=\"off\" />\n    </div>\n    <div class=\"buttons\">\n      <button class=\"btn\" type=\"submit\">Guardar y seguir</button>\n    </div>\n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_feature_register-one_register-one_module_ts-es2015.js.map