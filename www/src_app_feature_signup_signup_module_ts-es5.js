(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_signup_signup_module_ts"], {
    /***/
    13649:
    /*!*********************************************************!*\
      !*** ./src/app/feature/signup/signup-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPageRoutingModule": function SignupPageRoutingModule() {
          return (
            /* binding */
            _SignupPageRoutingModule
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signup.page */
      92138);

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
      }];

      var _SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      _SignupPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SignupPageRoutingModule);
      /***/
    },

    /***/
    47400:
    /*!*************************************************!*\
      !*** ./src/app/feature/signup/signup.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPageModule": function SignupPageModule() {
          return (
            /* binding */
            _SignupPageModule
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signup-routing.module */
      13649);
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signup.page */
      92138);

      var _SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      _SignupPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
      })], _SignupPageModule);
      /***/
    },

    /***/
    92138:
    /*!***********************************************!*\
      !*** ./src/app/feature/signup/signup.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPage": function SignupPage() {
          return (
            /* binding */
            _SignupPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./signup.page.html */
      23407);
      /* harmony import */


      var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signup.page.scss */
      35391);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _shared_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/services/localstorage.service */
      21662);
      /* harmony import */


      var _shared_constants_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/constants/storage */
      29686);

      var _SignupPage = /*#__PURE__*/function () {
        function SignupPage(storageService, router) {
          _classCallCheck(this, SignupPage);

          this.storageService = storageService;
          this.router = router;
          this.user = {};
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.user.idPerfil = 2;
            this.storageService.createStorage(_shared_constants_storage__WEBPACK_IMPORTED_MODULE_3__.USER_DATA, this.user);
            this.router.navigate(['/register-one']);
          }
        }]);

        return SignupPage;
      }();

      _SignupPage.ctorParameters = function () {
        return [{
          type: _shared_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__.localStorageService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _SignupPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SignupPage);
      /***/
    },

    /***/
    35391:
    /*!*************************************************!*\
      !*** ./src/app/feature/signup/signup.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #fbfbfb;\n  text-transform: none;\n  text-transform: initial;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-content .logo {\n  margin-top: 60px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\nion-content .image {\n  width: 152px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  mix-blend-mode: multiply;\n}\n\nion-content h3 {\n  color: #E73122;\n  width: 90%;\n  margin: auto;\n  margin-top: 50px;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nion-content .text_registro {\n  width: 90%;\n  margin: auto;\n  display: block;\n  letter-spacing: 0.02em;\n  color: #757575;\n  margin-top: 15px;\n  font-size: 15px;\n}\n\nion-content #form {\n  width: 100%;\n  margin-top: 30px;\n}\n\nion-content .main__input {\n  flex-direction: column;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n}\n\nion-content .text_input {\n  display: flex;\n  width: 90%;\n  color: #757575;\n  margin-left: 5px;\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-content .input {\n  width: 90%;\n  background: transparent !important;\n  padding: 12px 0px;\n  background: #FFFFFF;\n  border: 1px solid rgba(206, 206, 206, 0.5);\n  box-sizing: border-box;\n  border-radius: 10px;\n  padding-left: 15px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content .input:hover {\n  border: 1px solid rgba(231, 49, 34, 0.5);\n}\n\nion-content .buttons {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\nion-content .buttons .btn {\n  text-transform: uppercase;\n  margin-top: 20px;\n  width: 90%;\n  padding: 18px 20px;\n  background: #E73122;\n  border-radius: 50px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\nion-content .register {\n  margin-top: 40px;\n  color: #757575;\n  background: #fbfbfb;\n  font-weight: 400;\n  width: 80%;\n}\n\nion-content .click {\n  color: #E73122;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUMxQjs7QUFHQTtFQUNJLHFCQUFhO0VBQ2Isb0JBQXVCO0VBQXZCLHVCQUF1QjtBQUEzQjs7QUFHQTtFQUNJLHFCQUFhO0FBQWpCOztBQURBO0VBSVEsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNuQjs7QUFSQTtFQVdRLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQ2hDOztBQWpCQTtFQW9CUSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDdkI7O0FBMUJBO0VBOEJRLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFBdkI7O0FBcENBO0VBd0NRLFdBQVc7RUFDWCxnQkFBZ0I7QUFBeEI7O0FBekNBO0VBNkNRLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQXhCOztBQWxEQTtFQXVEUSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFEekI7O0FBNURBO0VBa0VRLFVBQVU7RUFDVixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7QUFGdEI7O0FBekVBO0VBZ0ZRLHdDQUF3QztBQUhoRDs7QUE3RUE7RUFzRlEsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUx4Qjs7QUFyRkE7RUE4RlEseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUwzQjs7QUFoR0E7RUEwR1EsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFObEI7O0FBeEdBO0VBa0hRLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQU52QiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgICB3aWR0aDogMTUycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiAjRTczMTIyO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAudGV4dF9yZWdpc3RybyB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAjZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbl9faW5wdXQge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0X2lucHV0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjA2LCAyMDYsIDIwNiwgMC41KTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzc1NzU3NTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0OmhvdmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzMSwgNDksIDM0LCAwLjUpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMgLmJ0biB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgcGFkZGluZzogMThweCAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNFNzMxMjI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucmVnaXN0ZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsaWNrIHtcclxuICAgICAgICBjb2xvcjogI0U3MzEyMjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59Il19 */";
      /***/
    },

    /***/
    23407:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/signup/signup.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"primary\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"> </ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/login\">Login</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"logo\">\r\n    <img class=\"image\" src=\"assets/logonutrix.jpeg\" />\r\n  </div>\r\n  <h3>Crea tu cuenta</h3>\r\n  <ion-label class=\"text_registro\">Ingresa tus datos para que puedas disfrutar de todos los beneficios que traemos para\r\n    ti. </ion-label>\r\n  <form id=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\r\n    <div class=\"main__input\">\r\n      <label class=\"text_input\">Nombre y Apellido</label>\r\n      <input class=\"input\" type=\"text\" name=\"nombre\" [(ngModel)]=\"user.nombre\" #nombre=\"ngModel\"\r\n        [ngClass]=\"{ 'is-invalid': f.submitted && nombre.invalid }\" required autocomplete=\"off\" />\r\n    </div>\r\n    <div class=\"main__input\">\r\n      <label class=\"text_input\">Correo Electrónico</label>\r\n      <input class=\"input\" type=\"email\" name=\"correo\" [(ngModel)]=\"user.correo\" #correo=\"ngModel\"\r\n        [ngClass]=\"{ 'is-invalid': f.submitted && correo.invalid }\" required autocomplete=\"off\" />\r\n    </div>\r\n    <div class=\"main__input\">\r\n      <label class=\"text_input\">Télefono</label>\r\n      <input class=\"input\" type=\"text\" name=\"telefono\" [(ngModel)]=\"user.telefono\" #telefono=\"ngModel\"\r\n        [ngClass]=\"{ 'is-invalid': f.submitted && telefono.invalid }\" required autocomplete=\"off\" />\r\n    </div>\r\n    <div class=\"buttons\">\r\n      <button class=\"btn\" type=\"submit\">Registrarme</button>\r\n      <button class=\"register\" routerLink=\"/login\">¿Ya tienes una cuenta?<span class=\"click\"> Click Aquí</span></button>\r\n    </div>\r\n  </form>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_feature_signup_signup_module_ts-es5.js.map