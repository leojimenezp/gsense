(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_register-three_register-three_module_ts"], {
    /***/
    96108:
    /*!*************************************************************************!*\
      !*** ./src/app/feature/register-three/register-three-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterThreePageRoutingModule": function RegisterThreePageRoutingModule() {
          return (
            /* binding */
            _RegisterThreePageRoutingModule
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


      var _register_three_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-three.page */
      17138);

      var routes = [{
        path: '',
        component: _register_three_page__WEBPACK_IMPORTED_MODULE_0__.RegisterThreePage
      }];

      var _RegisterThreePageRoutingModule = function RegisterThreePageRoutingModule() {
        _classCallCheck(this, RegisterThreePageRoutingModule);
      };

      _RegisterThreePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegisterThreePageRoutingModule);
      /***/
    },

    /***/
    76959:
    /*!*****************************************************************!*\
      !*** ./src/app/feature/register-three/register-three.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterThreePageModule": function RegisterThreePageModule() {
          return (
            /* binding */
            _RegisterThreePageModule
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


      var _register_three_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-three-routing.module */
      96108);
      /* harmony import */


      var _register_three_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register-three.page */
      17138);

      var _RegisterThreePageModule = function RegisterThreePageModule() {
        _classCallCheck(this, RegisterThreePageModule);
      };

      _RegisterThreePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _register_three_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterThreePageRoutingModule],
        declarations: [_register_three_page__WEBPACK_IMPORTED_MODULE_1__.RegisterThreePage]
      })], _RegisterThreePageModule);
      /***/
    },

    /***/
    17138:
    /*!***************************************************************!*\
      !*** ./src/app/feature/register-three/register-three.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterThreePage": function RegisterThreePage() {
          return (
            /* binding */
            _RegisterThreePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_register_three_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./register-three.page.html */
      2199);
      /* harmony import */


      var _register_three_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register-three.page.scss */
      46868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _RegisterThreePage = /*#__PURE__*/function () {
        function RegisterThreePage() {
          _classCallCheck(this, RegisterThreePage);
        }

        _createClass(RegisterThreePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RegisterThreePage;
      }();

      _RegisterThreePage.ctorParameters = function () {
        return [];
      };

      _RegisterThreePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-register-three',
        template: _raw_loader_register_three_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_three_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RegisterThreePage);
      /***/
    },

    /***/
    46868:
    /*!*****************************************************************!*\
      !*** ./src/app/feature/register-three/register-three.page.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci10aHJlZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    2199:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/register-three/register-three.page.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>register_three</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_feature_register-three_register-three_module_ts-es5.js.map