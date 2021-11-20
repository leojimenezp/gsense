(self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_home_home_module_ts"],{

/***/ 67312:
/*!*****************************************************!*\
  !*** ./src/app/feature/home/home-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": function() { return /* binding */ HomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9287);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 96260:
/*!*********************************************!*\
  !*** ./src/app/feature/home/home.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9287);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 67312);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 9287:
/*!*******************************************!*\
  !*** ./src/app/feature/home/home.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 52097);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 95799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 95799:
/*!*********************************************!*\
  !*** ./src/app/feature/home/home.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #d8d8d8;\n  text-transform: none;\n  text-transform: initial;\n  color: white;\n  height: 100%;\n}\n\nion-toolbar .bars {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 20px;\n}\n\nion-content {\n  --background: #fbfbfb;\n  height: 100%;\n}\n\nion-content .main {\n  display: flex;\n  width: 90%;\n  margin: 50px auto;\n  justify-content: space-between;\n}\n\nion-content .main .text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n  color: aliceblue;\n  letter-spacing: 0.02em;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nion-content .main .image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 57px;\n  height: 57px;\n  border: 1px solid #c3c4c4;\n  border-radius: 50%;\n  flex-flow: row wrap;\n}\n\nion-content h3 {\n  width: 90%;\n  margin: 8px auto;\n  color: #757575;\n  font-weight: bold;\n  font-size: 15px;\n}\n\nion-content .connect__green {\n  display: flex;\n  width: 88%;\n  margin: 6px auto;\n}\n\nion-content .connect__device a {\n  display: flex;\n  width: 88%;\n  margin: 1px auto;\n  color: #000000;\n  font-size: 13px;\n  text-decoration: underline;\n}\n\nion-content .connect__green span {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  background: #55BE93;\n  border-radius: 50%;\n  margin-top: 4px;\n}\n\nion-content .space {\n  margin-bottom: 10px;\n}\n\nion-content .connect__green .settings {\n  position: absolute;\n  right: 20px;\n  top: 162px;\n  color: #2e2e2e;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .connect__green p {\n  color: #A0A0A0;\n  font-size: 13px;\n  font-weight: 400;\n  margin-left: 5px;\n}\n\nion-content .main__bg {\n  width: 100%;\n  margin: auto;\n}\n\nion-content .bg__gray {\n  width: 90%;\n  height: 126px;\n  filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.15));\n  border-radius: 20px;\n  background: #ffffff;\n  margin: 15px auto;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  font-size: 13px;\n}\n\nion-content .bg__text {\n  margin: 5px 0px;\n  color: #A0A0A0;\n}\n\nion-content .upper {\n  font-size: 25px;\n  font-weight: bold;\n  color: #000000;\n}\n\nion-content .edit {\n  margin-top: 10px;\n  color: #5e5e5e;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .main_circles {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: 15px 50px;\n}\n\nion-content .main_circles .circle {\n  width: 11px;\n  height: 11px;\n  background: #D8D8D8;\n  border-radius: 50%;\n}\n\nion-content .main_circles .active {\n  background: #5e5e5e;\n}\n\nion-content .main_circles .line {\n  border: 1px solid #D8D8D8;\n  width: 1px;\n  height: 50px;\n  margin-left: 4.5px;\n  font-weight: bold;\n}\n\nion-content .main__text {\n  position: relative;\n  width: 100%;\n  height: 10%;\n  color: black;\n}\n\nion-content .text1 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -148px;\n  color: #757575;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .text2 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -96px;\n  color: #757575;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .text3 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -40px;\n  color: #757575;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .edit2 {\n  margin-top: 10px;\n  color: #5e5e5e;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .info {\n  display: flex;\n  width: 90%;\n  flex-direction: row;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQWE7RUFDYixvQkFBdUI7RUFBdkIsdUJBQXVCO0VBQ3ZCLFlBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFMQTtFQU9JLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0FBRXRCOztBQUdBO0VBQ0UscUJBQWE7RUFDYixZQUFZO0FBQWQ7O0FBRkE7RUFLSSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDbEM7O0FBVEE7RUFZSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDbkI7O0FBckJBO0VBd0JJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDdkI7O0FBaENBO0VBbUNJLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ25COztBQXhDQTtFQTJDSSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtBQUNwQjs7QUE5Q0E7RUFpREksYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZiwwQkFBMEI7QUFDOUI7O0FBdkRBO0VBMERJLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNuQjs7QUFoRUE7RUFtRUksbUJBQW1CO0FBQ3ZCOztBQXBFQTtFQXVFSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGVBQWU7QUFDbkI7O0FBN0VBO0VBZ0ZJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNwQjs7QUFwRkE7RUF1RkksV0FBVztFQUNYLFlBQVk7QUFDaEI7O0FBekZBO0VBNEZJLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0RBQXNEO0VBQ3RELG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ25COztBQXZHQTtFQTBHSSxlQUFlO0VBQ2YsY0FBYztBQUNsQjs7QUE1R0E7RUErR0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2xCOztBQWxIQTtFQXFISSxnQkFBZ0I7RUFFaEIsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixlQUFlO0FBQW5COztBQXpIQTtFQTZISSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixpQkFBaUI7QUFBckI7O0FBaElBO0VBb0lJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUF0Qjs7QUF2SUE7RUE0SUksbUJBQ1M7QUFGYjs7QUEzSUE7RUFpSkkseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUZyQjs7QUFuSkE7RUF5Skksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBbUI7QUFGdkI7O0FBMUpBO0VBZ0tJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUZyQjs7QUF2S0E7RUE2S0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBRnJCOztBQXBMQTtFQTBMSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFGckI7O0FBak1BO0VBdU1JLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGVBQWU7QUFGbkI7O0FBeE1BO0VBOE1JLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0FBRnZCIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZDhkOGQ4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuYmFycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLm1haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5tYWluIC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4gLmltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTdweDtcclxuICAgIGhlaWdodDogNTdweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2M0YzQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogOHB4IGF1dG87XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbm5lY3RfX2dyZWVuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogODglO1xyXG4gICAgbWFyZ2luOiA2cHggYXV0bztcclxuXHJcbiAgfVxyXG4gIC5jb25uZWN0X19kZXZpY2UgYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICAgIG1hcmdpbjogMXB4IGF1dG87XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgLmNvbm5lY3RfX2dyZWVuIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzU1QkU5MztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICB9XHJcblxyXG4gIC5zcGFjZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbm5lY3RfX2dyZWVuIC5zZXR0aW5ncyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogMTYycHg7XHJcbiAgICBjb2xvcjogIzJlMmUyZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgLmNvbm5lY3RfX2dyZWVuIHAge1xyXG4gICAgY29sb3I6ICNBMEEwQTA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19iZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIC5iZ19fZ3JheSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAxMjZweDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gIC5iZ19fdGV4dCB7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICBjb2xvcjogI0EwQTBBMDtcclxuICB9XHJcblxyXG4gIC51cHBlciB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgLmVkaXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICBjb2xvcjogIzVlNWU1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fY2lyY2xlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDE1cHggNTBweDtcclxuICB9XHJcblxyXG4gIC5tYWluX2NpcmNsZXMgLmNpcmNsZSB7XHJcbiAgICB3aWR0aDogMTFweDtcclxuICAgIGhlaWdodDogMTFweDtcclxuICAgIGJhY2tncm91bmQ6ICNEOEQ4RDg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gIH1cclxuXHJcbiAgLm1haW5fY2lyY2xlcyAuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICM1ZTVlNWU7XHJcbiAgfVxyXG5cclxuICAubWFpbl9jaXJjbGVzIC5saW5lIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEOEQ4RDg7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQuNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIC50ZXh0MSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjcycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBsZWZ0OiA4MHB4O1xyXG4gICAgdG9wOiAtMTQ4cHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICB9XHJcblxyXG4gIC50ZXh0MiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjcycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBsZWZ0OiA4MHB4O1xyXG4gICAgdG9wOiAtOTZweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgLnRleHQzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyNzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGxlZnQ6IDgwcHg7XHJcbiAgICB0b3A6IC00MHB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgfVxyXG5cclxuICAuZWRpdDIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjNWU1ZTVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5cclxuICAuaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gIH1cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ 52097:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/home/home.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <!--ion-toolbar>\r\n    <ion-title><i class=\"fas fa-bars bars\"></i></ion-title>\r\n  </ion-toolbar-->\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-infinite-scroll>\r\n    <div class=\"main\">\r\n      <div class=\"text\">\r\n        <p>Buenos Días, Marcos!</p>\r\n      </div>\r\n      <div class=\"image\">\r\n        <img src=\"assets/hombre.png\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"connect__device\">\r\n      <a>\r\n        <p routerLink=\"/reg-device\">Register dispositivo</p>\r\n      </a>\r\n    </div>\r\n    <h3>gSense Medición</h3>\r\n    <div class=\"connect__green\">\r\n      <span></span>\r\n      <p>Connected</p>\r\n      <p class=\"settings\">Ajustes</p>\r\n    </div>\r\n    <div class=\"main__bg\">\r\n      <div class=\"bg__gray\">\r\n        <div class=\"bg__text\">Última medición a las 7:05 am</div>\r\n        <div class=\"bg__text upper\">125 mg/dL</div>\r\n        <div class=\"bg__text\">Octubre 26, 2021</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"info\">\r\n      <h3>Actividades por la mañana</h3>\r\n      <div class=\"edit\">Editar</div>\r\n    </div>\r\n\r\n    <div class=\"main_circles\">\r\n      <span class=\"circle active\"></span>\r\n      <span class=\"line\">-</span>\r\n      <span class=\"circle\"></span>\r\n      <span class=\"line\">-</span>\r\n      <span class=\"circle\"></span>\r\n    </div>\r\n    <div class=\"main__text\">\r\n      <div class=\"text1\">\r\n        <p>Mide el nivel de glucosa</p>\r\n      </div>\r\n      <div class=\"text2\">\r\n        <p>Toma la medición</p>\r\n      </div>\r\n      <div class=\"text3\">\r\n        <p>Ten un buen desayuno</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"info\">\r\n      <h3>Para la tarde</h3>\r\n      <div class=\"edit2\">Editar</div>\r\n    </div>\r\n\r\n    <div class=\"space\">\r\n      <div class=\"main_circles\">\r\n        <span class=\"circle active\"></span>\r\n        <span class=\"line\">-</span>\r\n        <span class=\"circle\"></span>\r\n        <span class=\"line\">-</span>\r\n        <span class=\"circle\"></span>\r\n      </div>\r\n      <div class=\"main__text\">\r\n        <div class=\"text1\">\r\n          <p>Mide el nivel de glucosa</p>\r\n        </div>\r\n        <div class=\"text2\">\r\n          <p>Come frutas</p>\r\n        </div>\r\n        <div class=\"text3\">\r\n          <p>Hacer ejercicio</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_feature_home_home_module_ts-es2015.js.map