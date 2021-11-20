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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #d8d8d8;\n}\n\nion-content .main {\n  width: 90%;\n  margin: auto;\n}\n\nion-content .title {\n  width: 40%;\n  color: #313131;\n  font-weight: bold;\n  margin-right: 7.5em;\n  margin-top: 0.8em;\n  margin-bottom: -1em;\n}\n\nion-content .images {\n  display: flex;\n  flex-flow: column wrap;\n  width: 100%;\n  margin: auto;\n  padding: 1.5em 0;\n}\n\nion-content .img {\n  margin-top: 1em;\n  border-radius: 1.2em;\n  max-width: 100%;\n  transition: all 0.3s ease-in-out;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\nion-content .img:hover {\n  transform: scale(1.02);\n}\n\nion-content .text-img-bold {\n  position: absolute;\n  top: 12em;\n  left: 1.7em;\n  font-size: 2em;\n  font-weight: bold;\n  color: #fff;\n}\n\nion-content .text-img {\n  position: absolute;\n  top: 26.2em;\n  left: 3.5em;\n  font-size: 1em;\n  font-weight: bold;\n  color: #aaaaaa;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWE7QUFDakI7O0FBRkE7RUFJUSxVQUFVO0VBQ1YsWUFBWTtBQUVwQjs7QUFQQTtFQVFRLFVBQVU7RUFDVixjQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFHM0I7O0FBaEJBO0VBZ0JRLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFJeEI7O0FBeEJBO0VBdUJRLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyw0Q0FBNEM7QUFLcEQ7O0FBaENBO0VBOEJRLHNCQUFzQjtBQU05Qjs7QUFwQ0E7RUFpQ1Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0FBT25COztBQTdDQTtFQXlDUSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQXlCO0FBUWpDIiwiZmlsZSI6ImZvb2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkOGQ4ZDg7XHJcblxyXG4gICAgLm1haW57XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBjb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNy41ZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC44ZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTFlbTtcclxuICAgIH1cclxuICAgIC5pbWFnZXN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxLjVlbSAwO1xyXG4gICAgfVxyXG4gICAgLmltZ3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmltZzpob3ZlcntcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgfVxyXG4gICAgLnRleHQtaW1nLWJvbGR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTJlbTtcclxuICAgICAgICBsZWZ0OiAxLjdlbTtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC50ZXh0LWltZ3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAyNi4yZW07XHJcbiAgICAgICAgbGVmdDogMy41ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IHJnYigxNzAsIDE3MCwgMTcwKTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 74527:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/food/food.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\t<div class=\"main\">\r\n\t\t<h1 class=\"title\">Buscar comidas</h1>\r\n\t\t<div class=\"images\">\r\n\t\t\t<img class=\"img\" src=\"assets/d2@4x.png\" />\r\n\t\t\t<img class=\"img\" src=\"assets/d1@4x.png\" />\r\n\t\t\t<img class=\"img\" src=\"assets/d3@4x.png\" />\r\n\t\t\t<div class=\"text-img-bold\">Desayuno</div>\r\n\t\t\t<div class=\"text-img\">150 calorias</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_feature_food_food_module_ts-es2015.js.map