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


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _shared_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/services/localstorage.service */
      21662);
      /* harmony import */


      var _shared_constants_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/constants/storage */
      29686);

      var _SignupPage = /*#__PURE__*/function () {
        function SignupPage(storageService, router, navCtrl) {
          _classCallCheck(this, SignupPage);

          this.storageService = storageService;
          this.router = router;
          this.navCtrl = navCtrl;
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
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.pop();
          }
        }]);

        return SignupPage;
      }();

      _SignupPage.ctorParameters = function () {
        return [{
          type: _shared_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__.localStorageService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _SignupPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  text-transform: none;\n  text-transform: initial;\n}\n\nion-content {\n  --background: #ffffff;\n}\n\nion-content .logo {\n  margin-top: 60px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\nion-content .image {\n  width: 152px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  mix-blend-mode: multiply;\n}\n\nion-content p {\n  margin-top: 3%;\n  font-size: 25px;\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: bold;\n  color: #000000;\n}\n\nion-content h3 {\n  color: #000000;\n  width: 90%;\n  margin: auto;\n  margin-top: 50px;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nion-content .text_registro {\n  width: 90%;\n  margin: auto;\n  display: block;\n  letter-spacing: 0.02em;\n  color: #757575;\n  margin-top: 15px;\n  font-size: 15px;\n}\n\nion-content #form {\n  width: 100%;\n  margin-top: 30px;\n}\n\nion-content .main__input {\n  flex-direction: column;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n}\n\nion-content .text_input {\n  display: flex;\n  width: 90%;\n  color: #757575;\n  margin-left: 5px;\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-content .input {\n  width: 90%;\n  background: transparent !important;\n  padding: 12px 0px;\n  background: #ffffff;\n  border: 1px solid rgba(206, 206, 206, 0.5);\n  box-sizing: border-box;\n  border-radius: 10px;\n  padding-left: 15px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content .input:hover {\n  border: 1px solid rgba(231, 49, 34, 0.5);\n}\n\nion-content .buttons {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\nion-content .buttons .btn {\n  text-transform: uppercase;\n  margin-top: 20px;\n  width: 90%;\n  padding: 18px 20px;\n  background: #000000;\n  border-radius: 50px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: white;\n}\n\nion-content .register {\n  margin-top: 40px;\n  color: #757575;\n  background: #fbfbfb;\n  font-weight: 400;\n  width: 80%;\n}\n\nion-content .click {\n  color: #e73122;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUF1QjtFQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBYTtBQUNmOztBQUZBO0VBR0ksZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUdmOztBQVRBO0VBVUksWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFHNUI7O0FBbEJBO0VBa0JJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsOENBQThDO0VBQzlDLGlCQUFpQjtFQUNqQixjQUFjO0FBSWxCOztBQTFCQTtFQTBCSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFJbkI7O0FBbkNBO0VBbUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFJbkI7O0FBN0NBO0VBNkNJLFdBQVc7RUFDWCxnQkFBZ0I7QUFJcEI7O0FBbERBO0VBa0RJLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBSXBCOztBQTNEQTtFQTJESSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFJckI7O0FBckVBO0VBcUVJLFVBQVU7RUFDVixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7QUFJbEI7O0FBbEZBO0VBa0ZJLHdDQUF3QztBQUk1Qzs7QUF0RkE7RUFzRkksYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUlwQjs7QUE5RkE7RUE4RkkseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0FBSWhCOztBQTFHQTtFQTBHSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUlkOztBQWxIQTtFQWtISSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFJbkIiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLmxvZ28ge1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIHdpZHRoOiAxNTJweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC50ZXh0X3JlZ2lzdHJvIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAjZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9faW5wdXQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAudGV4dF9pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDYsIDIwNiwgMjA2LCAwLjUpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICB9XHJcblxyXG4gIC5pbnB1dDpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzMSwgNDksIDM0LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbnMgLmJ0biB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5yZWdpc3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG5cclxuICAuY2xpY2sge1xyXG4gICAgY29sb3I6ICNlNzMxMjI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuIl19 */";
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


      __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n\t\t\t<ion-button color=\"primary\">\r\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"arrow-back\"> </ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"logo\">\r\n\t\t<!--img class=\"image\" src=\"assets/logonutrix.jpeg\" /-->\r\n\t\t<p>gSense</p>\r\n\t</div>\r\n\t<h3>Crea tu cuenta</h3>\r\n\t<ion-label class=\"text_registro\"\r\n\t\t>Ingresa tus datos para que puedas disfrutar de todos los beneficios que\r\n\t\ttraemos para ti.\r\n\t</ion-label>\r\n\t<form id=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\r\n\t\t<div class=\"main__input\">\r\n\t\t\t<label class=\"text_input\">Nombre y Apellido</label>\r\n\t\t\t<input\r\n\t\t\t\tclass=\"input\"\r\n\t\t\t\ttype=\"text\"\r\n\t\t\t\tname=\"nombre\"\r\n\t\t\t\t[(ngModel)]=\"user.nombre\"\r\n\t\t\t\t#nombre=\"ngModel\"\r\n\t\t\t\t[ngClass]=\"{ 'is-invalid': f.submitted && nombre.invalid }\"\r\n\t\t\t\trequired\r\n\t\t\t\tautocomplete=\"off\"\r\n\t\t\t/>\r\n\t\t</div>\r\n\t\t<div class=\"main__input\">\r\n\t\t\t<label class=\"text_input\">Correo Electrónico</label>\r\n\t\t\t<input\r\n\t\t\t\tclass=\"input\"\r\n\t\t\t\ttype=\"email\"\r\n\t\t\t\tname=\"correo\"\r\n\t\t\t\t[(ngModel)]=\"user.correo\"\r\n\t\t\t\t#correo=\"ngModel\"\r\n\t\t\t\t[ngClass]=\"{ 'is-invalid': f.submitted && correo.invalid }\"\r\n\t\t\t\trequired\r\n\t\t\t\tautocomplete=\"off\"\r\n\t\t\t/>\r\n\t\t</div>\r\n\t\t<div class=\"main__input\">\r\n\t\t\t<label class=\"text_input\">Télefono</label>\r\n\t\t\t<input\r\n\t\t\t\tclass=\"input\"\r\n\t\t\t\ttype=\"text\"\r\n\t\t\t\tname=\"telefono\"\r\n\t\t\t\t[(ngModel)]=\"user.telefono\"\r\n\t\t\t\t#telefono=\"ngModel\"\r\n\t\t\t\t[ngClass]=\"{ 'is-invalid': f.submitted && telefono.invalid }\"\r\n\t\t\t\trequired\r\n\t\t\t\tautocomplete=\"off\"\r\n\t\t\t/>\r\n\t\t</div>\r\n\t\t<div class=\"buttons\">\r\n\t\t\t<button class=\"btn\" type=\"submit\">Registrarme</button>\r\n\t\t\t<button class=\"register\" routerLink=\"/login\">\r\n\t\t\t\t¿Ya tienes una cuenta?<span class=\"click\"> Click Aquí</span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_feature_signup_signup_module_ts-es5.js.map