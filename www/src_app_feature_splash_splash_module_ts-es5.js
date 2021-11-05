(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_splash_splash_module_ts"], {
    /***/
    56687:
    /*!*********************************************************!*\
      !*** ./src/app/feature/splash/splash-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SplashPageRoutingModule": function SplashPageRoutingModule() {
          return (
            /* binding */
            _SplashPageRoutingModule
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


      var _splash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./splash.page */
      29765);

      var routes = [{
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_0__.SplashPage
      }];

      var _SplashPageRoutingModule = function SplashPageRoutingModule() {
        _classCallCheck(this, SplashPageRoutingModule);
      };

      _SplashPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SplashPageRoutingModule);
      /***/
    },

    /***/
    77255:
    /*!*************************************************!*\
      !*** ./src/app/feature/splash/splash.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SplashPageModule": function SplashPageModule() {
          return (
            /* binding */
            _SplashPageModule
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


      var _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./splash-routing.module */
      56687);
      /* harmony import */


      var _splash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./splash.page */
      29765);

      var _SplashPageModule = function SplashPageModule() {
        _classCallCheck(this, SplashPageModule);
      };

      _SplashPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashPageRoutingModule],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_1__.SplashPage]
      })], _SplashPageModule);
      /***/
    },

    /***/
    29765:
    /*!***********************************************!*\
      !*** ./src/app/feature/splash/splash.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SplashPage": function SplashPage() {
          return (
            /* binding */
            _SplashPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./splash.page.html */
      39331);
      /* harmony import */


      var _splash_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./splash.page.scss */
      92646);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _SplashPage = /*#__PURE__*/function () {
        function SplashPage(router) {
          var _this = this;

          _classCallCheck(this, SplashPage);

          this.router = router;
          setTimeout(function () {
            _this.router.navigateByUrl('login');
          }, 1000);
        }

        _createClass(SplashPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SplashPage;
      }();

      _SplashPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _SplashPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splash',
        template: _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_splash_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SplashPage);
      /***/
    },

    /***/
    92646:
    /*!*************************************************!*\
      !*** ./src/app/feature/splash/splash.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #fbfbfb;\n  text-transform: none;\n  text-transform: initial;\n}\n\n@-webkit-keyframes slide-in-fwd-center {\n  0% {\n    transform: translateZ(-1400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateZ(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-in-fwd-center {\n  0% {\n    transform: translateZ(-1400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateZ(0);\n    opacity: 1;\n  }\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  -webkit-animation: slide-in-fwd-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-in-fwd-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\nion-content #header img {\n  margin-top: 70%;\n  width: 150px;\n  border: 8px solid #ffffff;\n}\n\nion-content #header #textRegistro {\n  color: #757575;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBYTtFQUNiLG9CQUF1QjtFQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUVFLDhCQUE4QjtJQUM5QixVQUFVO0VBQ1o7RUFFQTtJQUVFLHdCQUF3QjtJQUN4QixVQUFVO0VBQVo7QUFDRjs7QUFHQTtFQUNFO0lBRUUsOEJBQThCO0lBQzlCLFVBQVU7RUFBWjtFQUdBO0lBRUUsd0JBQXdCO0lBQ3hCLFVBQVU7RUFEWjtBQUNGOztBQUlBO0VBQ0UscUJBQWE7QUFEZjs7QUFBQTtFQUlJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBRW5CLG1GQUMyQztFQUMzQywyRUFBMkU7QUFGL0U7O0FBUkE7RUFhTSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtBQUQvQjs7QUFkQTtFQW1CTSxjQUFjO0FBRHBCIiwiZmlsZSI6InNwbGFzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tZndkLWNlbnRlciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTE0MDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTE0MDBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWZ3ZC1jZW50ZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xNDAwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xNDAwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuXHJcbiAgI2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLWZ3ZC1jZW50ZXIgMXNcclxuICAgICAgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XHJcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWZ3ZC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLXRvcDogNzAlO1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGJvcmRlcjogOHB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgI3RleHRSZWdpc3RybyB7XHJcbiAgICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    39331:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/splash/splash.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <div id=\"header\" class=\"container ion-text-center\">\r\n    <img src=\"assets/logonutrix.jpeg\" />\r\n  </div>\r\n\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_feature_splash_splash_module_ts-es5.js.map