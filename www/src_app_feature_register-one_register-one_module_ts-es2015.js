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
            _register_one_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterOnePageRoutingModule
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_register_one_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register-one.page.html */ 30753);
/* harmony import */ var _register_one_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-one.page.scss */ 81313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let RegisterOnePage = class RegisterOnePage {
    constructor() { }
    ngOnInit() {
    }
};
RegisterOnePage.ctorParameters = () => [];
RegisterOnePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
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
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #E73122;\n  text-transform: none;\n  text-transform: initial;\n  color: white;\n}\n\nion-toolbar .bars {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 20px;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-content .container {\n  width: 100%;\n}\n\nion-content .container h3 {\n  color: #E73122;\n  width: 90%;\n  margin: auto;\n  display: block;\n  margin-top: 40px;\n}\n\nion-content .container p {\n  color: #757575;\n  width: 90%;\n  margin: auto;\n  display: block;\n  margin-top: 20px;\n  line-height: 20px;\n  margin-bottom: 40px;\n}\n\nion-content .progress {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: auto;\n}\n\nion-content .num {\n  display: inline-block;\n  width: 54px;\n  height: 54px;\n  border: 1px solid #D4D4D4;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\n\nion-content .num span {\n  display: block;\n  color: #D4D4D4;\n  text-align: center;\n  line-height: 54px;\n  font-size: 25px;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n}\n\nion-content .active {\n  border-color: #E73122 !important;\n}\n\nion-content .line {\n  display: inline-block;\n  width: 40px;\n  height: 1px;\n  background: #D4D4D4;\n}\n\nion-content #main_form {\n  width: 100%;\n  margin-top: 35px;\n}\n\nion-content .main__input {\n  flex-direction: column;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n}\n\nion-content .text_input {\n  display: flex;\n  width: 90%;\n  color: #757575;\n  margin-left: 5px;\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-content .input {\n  width: 90%;\n  background: transparent !important;\n  padding: 12px 0px;\n  background: #FFFFFF;\n  border: 1px solid rgba(206, 206, 206, 0.5);\n  box-sizing: border-box;\n  border-radius: 10px;\n  color: #757575;\n  outline: none;\n  padding-left: 12px;\n}\n\nion-content ::-moz-placeholder {\n  padding-left: 12px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content :-ms-input-placeholder {\n  padding-left: 12px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content ::placeholder {\n  padding-left: 12px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content .input:hover {\n  border: 1px solid rgba(231, 49, 34, 0.5);\n}\n\nion-content .fecha,\nion-content .datos {\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: auto;\n  margin-top: 20px;\n}\n\nion-content label {\n  display: block;\n  color: #A0A0A0;\n  font-size: 12px;\n  line-height: 120%;\n  margin-left: 5px;\n}\n\nion-content .date-field {\n  width: 50px;\n  text-align: center;\n  width: 105px;\n  height: 45px;\n  background: #FFFFFF;\n  border: 1px solid rgba(206, 206, 206, 0.5);\n  box-sizing: border-box;\n  border-radius: 10px;\n  color: #000;\n  outline: none;\n}\n\nion-content .field-inline-block {\n  display: inline-block;\n  margin: auto;\n}\n\nion-content .label {\n  color: #757575;\n}\n\nion-content .buttons {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 90px;\n}\n\nion-content .btn {\n  text-transform: uppercase;\n  margin-top: 20px;\n  width: 90%;\n  padding: 18px 20px;\n  background: #E73122;\n  border-radius: 50px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\nion-content ion-tabs ion-tab-bar {\n  --background: #E73122;\n  width: 100%;\n  position: absolute;\n  top: 1035px;\n  left: 0;\n  margin: 20px 0px;\n}\n\nion-content ion-tabs ion-tab-bar .nav__text {\n  color: #ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLW9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7RUFDSSxxQkFBYTtFQUNiLG9CQUF1QjtFQUF2Qix1QkFBdUI7RUFDdkIsWUFBeUI7QUFDN0I7O0FBSkE7RUFNUSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUUxQjs7QUFFQTtFQUNJLHFCQUFhO0FBQ2pCOztBQUZBO0VBSVEsV0FBVztBQUVuQjs7QUFOQTtFQVFRLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7QUFFeEI7O0FBZEE7RUFnQlEsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBRTNCOztBQXhCQTtFQTJCUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFDcEI7O0FBakNBO0VBb0NRLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQzFCOztBQTFDQTtFQTZDUSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDOUI7O0FBcERBO0VBdURRLGdDQUFnQztBQUN4Qzs7QUF4REE7RUE0RFEscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0FBQTNCOztBQS9EQTtFQXFFUSxXQUFXO0VBQ1gsZ0JBQWdCO0FBRnhCOztBQXBFQTtFQTBFUSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUZ4Qjs7QUE3RUE7RUFvRlEsYUFBYTtFQUNiLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBSHpCOztBQXZGQTtFQThGUSxVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztFQUVkLGFBQWE7RUFDYixrQkFBa0I7QUFKMUI7O0FBcEdBO0VBNkdRLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUx0Qjs7QUExR0E7RUE2R1Esa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0FBTHRCOztBQTFHQTtFQTZHUSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7QUFMdEI7O0FBMUdBO0VBcUhRLHdDQUF3QztBQVBoRDs7QUE5R0E7O0VBNEhRLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0FBVHhCOztBQXhIQTtFQXFJUSxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBVHhCOztBQWhJQTtFQTZJUSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0FBVHJCOztBQTdJQTtFQTJKUSxxQkFBcUI7RUFDckIsWUFBWTtBQVZwQjs7QUFsSkE7RUFrS1EsY0FBYztBQVp0Qjs7QUF0SkE7RUF3S1EsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFkM0I7O0FBL0pBO0VBbUxRLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFoQjNCOztBQTFLQTtFQWdNWSxxQkFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxnQkFBZ0I7QUFsQjVCOztBQW5MQTtFQXdNZ0IsY0FBYztBQWpCOUIiLCJmaWxlIjoicmVnaXN0ZXItb25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI0U3MzEyMjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4gICAgLmJhcnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmJmYmZiO1xuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jb250YWluZXIgaDMge1xuICAgICAgICBjb2xvcjogI0U3MzEyMjtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyIHAge1xuICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuXG4gICAgLy9Qcm9ncmVzcyBudW1iZXJcbiAgICAucHJvZ3Jlc3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgIC5udW0ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiA1NHB4O1xuICAgICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNENEQ0RDQ7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG5cbiAgICAubnVtIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICNENEQ0RDQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgfVxuXG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0U3MzEyMiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC8vIExpbmVhIGRlIGxvcyBwYXNvIDEgYSAzLlxuICAgIC5saW5lIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNENEQ0RDQ7XG4gICAgfVxuXG4gICAgLy9Gb3JtdWxhcmlvIGRlIHJlZ2lzdHJvXG5cbiAgICAjbWFpbl9mb3JtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgfVxuXG4gICAgLm1haW5fX2lucHV0IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgfVxuXG4gICAgLnRleHRfaW5wdXQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5pbnB1dCB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwNiwgMjA2LCAyMDYsIDAuNSk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjNzU3NTc1O1xuXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcblxuICAgIH1cblxuICAgIDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM3NTc1NzU7XG5cblxuICAgIH1cblxuICAgIC5pbnB1dDpob3ZlciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMxLCA0OSwgMzQsIDAuNSk7XG5cbiAgICB9XG5cbiAgICAvLyBGb3JtIGZlY2hhIHkgZGF0b3NcbiAgICAuZmVjaGEsXG4gICAgLmRhdG9zIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjQTBBMEEwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cblxuICAgIC5kYXRlLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwNXB4O1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjA2LCAyMDYsIDIwNiwgMC41KTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG5cbiAgICAuZmllbGQtaW5saW5lLWJsb2NrIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICB9XG5cbiAgICAvLyBDb2xvciBwZXNvLCBhbHR1cmEgeSBjaW50dXJhXG4gICAgLmxhYmVsIHtcbiAgICAgICAgY29sb3I6ICM3NTc1NzU7XG5cbiAgICB9XG5cbiAgICAvL0J1dHRvbiBndWFyZGFyIHkgc2VndWlyXG4gICAgLmJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOTBweDtcblxuICAgIH1cblxuXG4gICAgLmJ0biB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0U3MzEyMjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgfVxuXG4gICAgaW9uLXRhYnMge1xuXG4gICAgICAgIGlvbi10YWItYmFyIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0U3MzEyMjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxMDM1cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcblxuICAgICAgICAgICAgLm5hdl9fdGV4dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ 30753:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/register-one/register-one.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><i class=\"fas fa-bars bars\"></i></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <h3>Registro</h3>\n    <p>Te haremos unas breves preguntas para que tú experiencia sea la más adecuada.</p>\n  </div>\n\n  <div class=\"progress\">\n    <div class=\"num active\">\n      <span>1</span>\n    </div>\n    <span class=\"line\"></span>\n    <div class=\"num\">\n      <span>2</span>\n    </div>\n    <span class=\"line\"></span>\n    <div class=\"num\">\n      <span>3</span>\n    </div>\n  </div>\n  <form id=\"main_form\">\n    <div class=\"main__input\">\n      <label for=\"nombre__registro\" class=\"text_input\">Nombre y Apellido</label>\n      <input class=\"input\" id=\"nombre__registro\" type=\"text\" required />\n    </div>\n    <div class=\"main__input\">\n      <label for=\"correo__registro\" class=\"text_input\">Correo Electrónico</label>\n      <input class=\"input\" id=\"correo__registro\" type=\"email\" required />\n    </div>\n    <div class=\"main__input\">\n      <label for=\"tel__registro\" class=\"text_input\">Télefono</label>\n      <input class=\"input\" id=\"tel__registro\" type=\"tel\" required />\n    </div>\n    <div class=\"main__input\">\n      <label for=\"rut__registro\" class=\"text_input\">RUT</label>\n      <input class=\"input\" id=\"rut__registro\" type=\"number\" required />\n    </div>\n    <div class=\"main__input\">\n      <label for=\"date\" class=\"text_input\">Fecha de Nacimiento</label>\n    </div>\n    <div class=\"fecha\">\n      <div class=\"field-inline-block\">\n        <label>Día</label>\n        <input type=\"text\" pattern=\"[0-9]*\" maxlength=\"2\" size=\"2\" class=\"date-field\" />\n      </div>\n\n      <div class=\"field-inline-block\">\n        <label>Mes</label>\n        <input type=\"text\" pattern=\"[0-9]*\" maxlength=\"2\" size=\"2\" class=\"date-field\" />\n      </div>\n\n      <div class=\"field-inline-block\">\n        <label>Año</label>\n        <input type=\"text\" pattern=\"[0-9]*\" maxlength=\"4\" size=\"4\" class=\"date-field date-field--year\" />\n      </div>\n    </div>\n    <div class=\"datos\">\n      <div class=\"field-inline-block\">\n        <label class=\"label\">Peso</label>\n        <input type=\"text\" pattern=\"[0-9]*\" maxlength=\"2\" size=\"2\" class=\"date-field\" />\n      </div>\n\n      <div class=\"field-inline-block\">\n        <label class=\"label\">Altura</label>\n        <input type=\"text\" pattern=\"[0-9]*\" maxlength=\"2\" size=\"2\" class=\"date-field\" />\n      </div>\n\n      <div class=\"field-inline-block\">\n        <label class=\"label\">Cintura</label>\n        <input type=\"text\" pattern=\"[0-9]*\" maxlength=\"4\" size=\"4\" class=\"date-field date-field--year\" />\n      </div>\n    </div>\n    <div class=\"main__input\">\n      <label for=\"hemo\" class=\"text_input\">Hemoglobina Glicosilada</label>\n      <input class=\"input\" id=\"hemo\" type=\"text\" required />\n    </div>\n  </form>\n\n  <div class=\"buttons\">\n    <button class=\"btn\" routerLink=\"/register-two\">Guardar y seguir</button>\n  </div>\n  <ion-tabs>\n    <ion-tab-bar>\n      <ion-tab-button>\n        <div id=\"logo\">\n          <img id=\"img\" src=\"assets/2.png\" />\n        </div>\n        <ion-label class=\"nav__text\">Home</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button>\n        <div id=\"logo\">\n          <img id=\"img\" src=\"assets/1.png\" />\n        </div>\n        <ion-label class=\"nav__text\">Services</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button>\n        <div id=\"logo\">\n          <img id=\"img\" src=\"assets/3.png\" />\n        </div>\n        <ion-label class=\"nav__text\">Appointment</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button>\n        <div id=\"logo\">\n          <img id=\"img\" src=\"assets/bars.png\" />\n        </div>\n        <ion-label class=\"nav__text\">Metrics</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_feature_register-one_register-one_module_ts-es2015.js.map