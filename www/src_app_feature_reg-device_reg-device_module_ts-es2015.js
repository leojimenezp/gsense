(self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_reg-device_reg-device_module_ts"],{

/***/ 89630:
/*!*****************************************************************!*\
  !*** ./src/app/feature/reg-device/reg-device-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegDevicePageRoutingModule": function() { return /* binding */ RegDevicePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _reg_device_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reg-device.page */ 48256);




const routes = [
    {
        path: '',
        component: _reg_device_page__WEBPACK_IMPORTED_MODULE_0__.RegDevicePage
    }
];
let RegDevicePageRoutingModule = class RegDevicePageRoutingModule {
};
RegDevicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegDevicePageRoutingModule);



/***/ }),

/***/ 86299:
/*!*********************************************************!*\
  !*** ./src/app/feature/reg-device/reg-device.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegDevicePageModule": function() { return /* binding */ RegDevicePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _reg_device_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reg-device-routing.module */ 89630);
/* harmony import */ var _reg_device_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reg-device.page */ 48256);







let RegDevicePageModule = class RegDevicePageModule {
};
RegDevicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reg_device_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegDevicePageRoutingModule
        ],
        declarations: [_reg_device_page__WEBPACK_IMPORTED_MODULE_1__.RegDevicePage]
    })
], RegDevicePageModule);



/***/ }),

/***/ 48256:
/*!*******************************************************!*\
  !*** ./src/app/feature/reg-device/reg-device.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegDevicePage": function() { return /* binding */ RegDevicePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_reg_device_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reg-device.page.html */ 19966);
/* harmony import */ var _reg_device_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reg-device.page.scss */ 94151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _shared_services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/device.service */ 52562);
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/loader.service */ 37733);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 3420);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);







let RegDevicePage = class RegDevicePage {
    constructor(deviceService, loader) {
        this.deviceService = deviceService;
        this.loader = loader;
        this.device = {};
        this.isLoading = this.loader.isLoading;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.device.idUsuario = 13;
        this.deviceService.createDevice(this.device).subscribe(response => {
            if (response.id != 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Registro exitoso', 'Dispositivo creado', 'success');
                this.device.serial = '',
                    this.device.deacripcion = '',
                    this.device.nickname = '';
            }
        });
    }
};
RegDevicePage.ctorParameters = () => [
    { type: _shared_services_device_service__WEBPACK_IMPORTED_MODULE_2__.DeviceService },
    { type: _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
RegDevicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-reg-device',
        template: _raw_loader_reg_device_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reg_device_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegDevicePage);



/***/ }),

/***/ 52562:
/*!***************************************************!*\
  !*** ./src/app/shared/services/device.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceService": function() { return /* binding */ DeviceService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _shared_constants_endPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/constants/endPoint */ 53880);




let DeviceService = class DeviceService {
    constructor(http) {
        this.http = http;
    }
    createDevice(data) {
        return this.http.post(`${_shared_constants_endPoint__WEBPACK_IMPORTED_MODULE_0__.API}/${_shared_constants_endPoint__WEBPACK_IMPORTED_MODULE_0__.DEVICE}`, data);
    }
};
DeviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
DeviceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DeviceService);



/***/ }),

/***/ 94151:
/*!*********************************************************!*\
  !*** ./src/app/feature/reg-device/reg-device.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #d8d8d8;\n  text-transform: none;\n  text-transform: initial;\n  color: white;\n  height: 100%;\n}\n\nion-toolbar .bars {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 20px;\n}\n\nion-content {\n  --background: #fbfbfb;\n  height: 100%;\n}\n\nion-content .container h3 {\n  color: #000000;\n  width: 90%;\n  margin: auto;\n  display: block;\n  margin-top: 40px;\n}\n\nion-content .container p {\n  color: #757575;\n  width: 90%;\n  margin: auto;\n  display: block;\n  margin-top: 20px;\n  line-height: 20px;\n  margin-bottom: 40px;\n}\n\nion-content .main {\n  display: flex;\n  width: 90%;\n  margin: 50px auto;\n  justify-content: space-between;\n}\n\nion-content .main .text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n  color: aliceblue;\n  letter-spacing: 0.02em;\n  color: #D23022;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nion-content .main .image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 57px;\n  height: 57px;\n  border: 1px solid #c3c4c4;\n  border-radius: 50%;\n  flex-flow: row wrap;\n}\n\nion-content h3 {\n  width: 90%;\n  margin: 8px auto;\n  color: #757575;\n  font-weight: bold;\n  font-size: 15px;\n}\n\nion-content .connect__green {\n  display: flex;\n  width: 88%;\n  margin: 6px auto;\n}\n\nion-content .connect__green span {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  background: #55BE93;\n  border-radius: 50%;\n  margin-top: 4px;\n}\n\nion-content .space {\n  margin-bottom: 10px;\n}\n\nion-content .connect__green .settings {\n  position: absolute;\n  right: 20px;\n  top: 162px;\n  color: #E73122;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .connect__green p {\n  color: #A0A0A0;\n  font-size: 13px;\n  font-weight: 400;\n  margin-left: 5px;\n}\n\nion-content .main__bg {\n  width: 100%;\n  margin: auto;\n}\n\nion-content .bg__gray {\n  width: 90%;\n  height: 126px;\n  filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.15));\n  border-radius: 20px;\n  background: #444444;\n  margin: 15px auto;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  font-size: 13px;\n}\n\nion-content .bg__text {\n  margin: 5px 0px;\n}\n\nion-content .upper {\n  font-size: 25px;\n  font-weight: bold;\n}\n\nion-content .edit {\n  margin-top: 10px;\n  color: #E73122;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .main_circles {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: 15px 50px;\n}\n\nion-content .main_circles .circle {\n  width: 11px;\n  height: 11px;\n  background: #D8D8D8;\n  border-radius: 50%;\n}\n\nion-content .main_circles .active {\n  background: #E73122;\n}\n\nion-content .main_circles .line {\n  border: 1px solid #D8D8D8;\n  width: 1px;\n  height: 50px;\n  margin-left: 4.5px;\n  font-weight: bold;\n}\n\nion-content .main__text {\n  position: relative;\n  width: 100%;\n  height: 10%;\n  color: red;\n}\n\nion-content .text1 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -148px;\n  color: #757575;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .text2 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -96px;\n  color: #757575;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .text3 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -40px;\n  color: #757575;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .edit2 {\n  margin-top: 10px;\n  color: #E73122;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .info {\n  display: flex;\n  width: 90%;\n  flex-direction: row;\n}\n\nion-content #main_form {\n  width: 100%;\n  margin-top: 35px;\n}\n\nion-content .main__input {\n  flex-direction: column;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n}\n\nion-content .text_input {\n  display: flex;\n  width: 90%;\n  color: #757575;\n  margin-left: 5px;\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-content .input {\n  width: 90%;\n  background: transparent !important;\n  padding: 12px 0px;\n  background: #ffffff;\n  border: 1px solid rgba(206, 206, 206, 0.5);\n  box-sizing: border-box;\n  border-radius: 10px;\n  color: #757575;\n  outline: none;\n  padding-left: 12px;\n}\n\nion-content ::-moz-placeholder {\n  padding-left: 12px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content :-ms-input-placeholder {\n  padding-left: 12px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content ::placeholder {\n  padding-left: 12px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content .input:hover {\n  border: 1px solid rgba(231, 49, 34, 0.5);\n}\n\nion-content .main_checkbox {\n  width: 90%;\n  display: flex;\n  justify-content: center;\n  margin: 5px auto;\n}\n\nion-content .round {\n  display: block;\n  width: 100%;\n}\n\nion-content .round input {\n  padding: 0;\n  height: auto;\n  height: initial;\n  width: auto;\n  width: initial;\n  margin-bottom: 0;\n  display: none;\n  cursor: pointer;\n}\n\nion-content .round label {\n  margin-left: 5px;\n  color: #a0a0a0;\n  position: relative;\n  cursor: pointer;\n  line-height: 23px;\n  font-size: 14px;\n}\n\nion-content .round label:before {\n  content: \"\";\n  -webkit-appearance: none;\n  background-color: transparent;\n  border: 1px solid #a0a0a0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);\n  padding: 10px;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  cursor: pointer;\n  margin-right: 5px;\n  border-radius: 50%;\n}\n\nion-content .round input:checked + label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 2px;\n  left: 9px;\n  width: 6px;\n  height: 14px;\n  border: solid #d23022;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\nion-content .main_select {\n  width: 100%;\n  padding: 12px 0;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n}\n\nion-content .main_select select {\n  width: 90%;\n  box-shadow: none;\n  cursor: pointer;\n  padding: 12px 0;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  padding-left: 12px;\n  background: #ffffff;\n  color: #757575;\n  font-size: 13px;\n}\n\nion-content .option {\n  padding: 12px 0;\n  background: #fff;\n  color: #000000;\n  font-size: 13px;\n}\n\nion-content .buttons {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 90px;\n}\n\nion-content .btn {\n  text-transform: uppercase;\n  margin-top: 20px;\n  width: 90%;\n  padding: 18px 20px;\n  background: #000000;\n  border-radius: 50px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZy1kZXZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0FBQzFCOztBQUVFO0VBQ0UscUJBQWE7RUFDYixvQkFBdUI7RUFBdkIsdUJBQXVCO0VBQ3ZCLFlBQXlCO0VBQ3pCLFlBQVk7QUFDaEI7O0FBTEU7RUFPSSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUV4Qjs7QUFHRTtFQUNFLHFCQUFhO0VBQ2IsWUFBWTtBQUFoQjs7QUFGRTtFQUtJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7QUFDdEI7O0FBVkU7RUFZSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFFekI7O0FBcEJFO0VBdUJJLGFBQWE7RUFDYixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDhCQUE4QjtBQUNwQzs7QUEzQkU7RUE4QkksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ3JCOztBQXZDRTtFQTBDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3pCOztBQWxERTtFQXFESSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUNyQjs7QUExREU7RUE2REksYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7QUFDdEI7O0FBaEVFO0VBb0VJLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFD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RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtBQVRsQiIsImZpbGUiOiJyZWctZGV2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2Q4ZDhkODtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgXG4gICAgLmJhcnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIFxuICAgIC5jb250YWluZXIgaDMge1xuICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbiAgICAuY29udGFpbmVyIHAge1xuICAgICAgY29sb3I6ICM3NTc1NzU7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cbiAgXG4gIFxuICAgIC5tYWluIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICBcbiAgICAubWFpbiAudGV4dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgY29sb3I6ICNEMjMwMjI7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIFxuICAgIC5tYWluIC5pbWFnZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IDU3cHg7XG4gICAgICBoZWlnaHQ6IDU3cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNjNGM0O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICB9XG4gIFxuICAgIGgzIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW46IDhweCBhdXRvO1xuICAgICAgY29sb3I6ICM3NTc1NzU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gIFxuICAgIC5jb25uZWN0X19ncmVlbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDg4JTtcbiAgICAgIG1hcmdpbjogNnB4IGF1dG87XG4gIFxuICAgIH1cbiAgXG4gICAgLmNvbm5lY3RfX2dyZWVuIHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDdweDtcbiAgICAgIGhlaWdodDogN3B4O1xuICAgICAgYmFja2dyb3VuZDogIzU1QkU5MztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG4gIFxuICAgIC5zcGFjZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgXG4gICAgLmNvbm5lY3RfX2dyZWVuIC5zZXR0aW5ncyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMjBweDtcbiAgICAgIHRvcDogMTYycHg7XG4gICAgICBjb2xvcjogI0U3MzEyMjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgXG4gICAgLmNvbm5lY3RfX2dyZWVuIHAge1xuICAgICAgY29sb3I6ICNBMEEwQTA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIFxuICAgIC5tYWluX19iZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIFxuICAgIC5iZ19fZ3JheSB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgaGVpZ2h0OiAxMjZweDtcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjNDQ0NDQ0O1xuICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIFxuICAgIC5iZ19fdGV4dCB7XG4gICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgfVxuICBcbiAgICAudXBwZXIge1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICBcbiAgICAuZWRpdCB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICBcbiAgICAgIGNvbG9yOiAjRTczMTIyO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICBcbiAgICAubWFpbl9jaXJjbGVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIG1hcmdpbjogMTVweCA1MHB4O1xuICAgIH1cbiAgXG4gICAgLm1haW5fY2lyY2xlcyAuY2lyY2xlIHtcbiAgICAgIHdpZHRoOiAxMXB4O1xuICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgYmFja2dyb3VuZDogI0Q4RDhEODtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgXG4gICAgfVxuICBcbiAgICAubWFpbl9jaXJjbGVzIC5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgI0U3MzEyMjtcbiAgICB9XG4gIFxuICAgIC5tYWluX2NpcmNsZXMgLmxpbmUge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Q4RDhEODtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogNC41cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIFxuICAgIC5tYWluX190ZXh0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgXG4gICAgLnRleHQxIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAyNzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGxlZnQ6IDgwcHg7XG4gICAgICB0b3A6IC0xNDhweDtcbiAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIH1cbiAgXG4gICAgLnRleHQyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAyNzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGxlZnQ6IDgwcHg7XG4gICAgICB0b3A6IC05NnB4O1xuICAgICAgY29sb3I6ICM3NTc1NzU7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgfVxuICBcbiAgICAudGV4dDMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDI3MnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgbGVmdDogODBweDtcbiAgICAgIHRvcDogLTQwcHg7XG4gICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICB9XG4gIFxuICAgIC5lZGl0MiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgY29sb3I6ICNFNzMxMjI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIFxuICAgIC5pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgXG4gICAgfVxuICBcbiAgXG4gICAgI21haW5fZm9ybSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgfVxuICBcbiAgICAubWFpbl9faW5wdXQge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuICBcbiAgICAudGV4dF9pbnB1dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgXG4gICAgLmlucHV0IHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMTJweCAwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDYsIDIwNiwgMjA2LCAwLjUpO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBjb2xvcjogIzc1NzU3NTtcbiAgXG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgIH1cbiAgXG4gICAgOjpwbGFjZWhvbGRlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICB9XG4gIFxuICAgIC5pbnB1dDpob3ZlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzMSwgNDksIDM0LCAwLjUpO1xuICAgIH1cbiAgXG4gICAgLy9jaGVja2JveFxuICAgIC5tYWluX2NoZWNrYm94IHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIH1cbiAgXG4gICAgLnJvdW5kIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICBcbiAgICAucm91bmQgaW5wdXQge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgIHdpZHRoOiBpbml0aWFsO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICBcbiAgICAucm91bmQgbGFiZWwge1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIGNvbG9yOiAjYTBhMGEwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICBcbiAgICAucm91bmQgbGFiZWw6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgICAgICAgaW5zZXQgMHB4IC0xNXB4IDEwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICBcbiAgICAucm91bmQgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMnB4O1xuICAgICAgbGVmdDogOXB4O1xuICAgICAgd2lkdGg6IDZweDtcbiAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIGJvcmRlcjogc29saWQgI2QyMzAyMjtcbiAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICBcbiAgICAvLyBzZWxlY3Qgc2VndXJvIG1lZGljb1xuICAgIC5tYWluX3NlbGVjdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgXG4gICAgLm1haW5fc2VsZWN0IHNlbGVjdCB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgXG4gICAgLm9wdGlvbiB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICBcbiAgICAuYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICAgIH1cbiAgXG4gICAgLmJ0biB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIFxuICB9Il19 */");

/***/ }),

/***/ 19966:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/reg-device/reg-device.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading *ngIf=\"isLoading | async\" [show]=\"true\"> </ngx-loading>\n<ion-header>\n  <ion-toolbar>\n    <ion-title><i class=\"fas fa-bars bars\"></i></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-infinite-scroll>\n    <div class=\"container\">\n      <h3>Registrar dispositivo</h3>\n    </div>\n\n    <form id=\"main_form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\n      <div class=\"main__input\">\n        <label class=\"text_input\">Serial</label>\n        <input class=\"input\" name=\"serial\" [(ngModel)]=\"device.serial\" #serial=\"ngModel\"\n          [ngClass]=\"{ 'is-invalid': f.submitted && serial.invalid }\" required autocomplete=\"off\" />\n      </div>\n      <div class=\"main__input\">\n        <label class=\"text_input\">Descripción</label>\n        <input class=\"input\" name=\"deacripcion\" [(ngModel)]=\"device.deacripcion\" #deacripcion=\"ngModel\"\n          [ngClass]=\"{ 'is-invalid': f.submitted && deacripcion.invalid }\" required autocomplete=\"off\" />\n      </div>\n      <div class=\"main__input\">\n        <label class=\"text_input\">NickName</label>\n        <input class=\"input\" name=\"nickname\" [(ngModel)]=\"device.nickname\" #nickname=\"ngModel\"\n          [ngClass]=\"{ 'is-invalid': f.submitted && nickname.invalid }\" required autocomplete=\"off\" />\n      </div>\n\n      <div class=\"buttons\">\n        <button class=\"btn\" type=\"submit\">Registrar</button>\n      </div>\n    </form>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_feature_reg-device_reg-device_module_ts-es2015.js.map