(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_food_food_module_ts"], {
    /***/
    25294:
    /*!*****************************************************!*\
      !*** ./src/app/feature/food/food-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FoodPageRoutingModule": function FoodPageRoutingModule() {
          return (
            /* binding */
            _FoodPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _food_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./food.page */
      58118);

      var routes = [{
        path: '',
        component: _food_page__WEBPACK_IMPORTED_MODULE_0__.FoodPage
      }];

      var _FoodPageRoutingModule = function FoodPageRoutingModule() {
        _classCallCheck(this, FoodPageRoutingModule);
      };

      _FoodPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FoodPageRoutingModule);
      /***/
    },

    /***/
    61866:
    /*!*********************************************!*\
      !*** ./src/app/feature/food/food.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FoodPageModule": function FoodPageModule() {
          return (
            /* binding */
            _FoodPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _food_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./food-routing.module */
      25294);
      /* harmony import */


      var _food_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./food.page */
      58118);

      var _FoodPageModule = function FoodPageModule() {
        _classCallCheck(this, FoodPageModule);
      };

      _FoodPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _food_routing_module__WEBPACK_IMPORTED_MODULE_0__.FoodPageRoutingModule],
        declarations: [_food_page__WEBPACK_IMPORTED_MODULE_1__.FoodPage]
      })], _FoodPageModule);
      /***/
    },

    /***/
    58118:
    /*!*******************************************!*\
      !*** ./src/app/feature/food/food.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FoodPage": function FoodPage() {
          return (
            /* binding */
            _FoodPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_food_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./food.page.html */
      74527);
      /* harmony import */


      var _food_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./food.page.scss */
      39516);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _FoodPage = /*#__PURE__*/function () {
        function FoodPage() {
          _classCallCheck(this, FoodPage);
        }

        _createClass(FoodPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FoodPage;
      }();

      _FoodPage.ctorParameters = function () {
        return [];
      };

      _FoodPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-food',
        template: _raw_loader_food_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_food_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FoodPage);
      /***/
    },

    /***/
    39516:
    /*!*********************************************!*\
      !*** ./src/app/feature/food/food.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb29kLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    74527:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/food/food.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>food</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_feature_food_food_module_ts-es5.js.map