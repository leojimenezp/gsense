(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    70809:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_feature_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! @feature/home/home.module */
          96260)).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! @feature/login/login.module */
          22691)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_feature_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! @feature/signup/signup.module */
          47400)).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'splash',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_feature_splash_splash_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! @feature/splash/splash.module */
          77255)).then(function (m) {
            return m.SplashPageModule;
          });
        }
      }, {
        path: 'register-one',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_feature_register-one_register-one_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! @feature/register-one/register-one.module */
          30399)).then(function (m) {
            return m.RegisterOnePageModule;
          });
        }
      }, {
        path: 'register-two',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constants_endPoint_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_feature_register-two_register-two_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! @feature/register-two/register-two.module */
          83593)).then(function (m) {
            return m.RegisterTwoPageModule;
          });
        }
      }, {
        path: 'register-three',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_feature_register-three_register-three_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! @feature/register-three/register-three.module */
          76959)).then(function (m) {
            return m.RegisterThreePageModule;
          });
        }
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_feature_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./feature/tabs/tabs.module */
          95676)).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'reg-device',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constants_endPoint_ts"), __webpack_require__.e("src_app_feature_reg-device_reg-device_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./feature/reg-device/reg-device.module */
          86299)).then(function (m) {
            return m.RegDevicePageModule;
          });
        }
      }, {
        path: 'transbank',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constants_endPoint_ts"), __webpack_require__.e("src_app_feature_transbank_transbank_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./feature/transbank/transbank.module */
          67126)).then(function (m) {
            return m.TransbankPageModule;
          });
        }
      }, {
        path: 'schedule',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constants_endPoint_ts"), __webpack_require__.e("src_app_feature_schedule_schedule_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./feature/schedule/schedule.module */
          2233)).then(function (m) {
            return m.SchedulePageModule;
          });
        }
      }, {
        path: 'food',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_feature_food_food_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./feature/food/food.module */
          61866)).then(function (m) {
            return m.FoodPageModule;
          });
        }
      }, {
        path: 'asesora',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_feature_asesora_asesora_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./feature/asesora/asesora.module */
          3183)).then(function (m) {
            return m.AsesoraPageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    20721:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      29535);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(router) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            this.router.navigateByUrl('splash');
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], _AppComponent);
      /***/
    },

    /***/
    50023:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      93220);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      31887);
      /* harmony import */


      var _core_interceptor_loader_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/interceptor/loader.interceptor */
      26864);
      /* harmony import */


      var _core_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/interceptor/token-interceptor */
      60129);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      20721);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      70809);
      /* harmony import */


      var ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-mask-ionic */
      30250);
      /* harmony import */


      var _feature_login_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @feature/login/login.module */
      22691);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _feature_login_login_module__WEBPACK_IMPORTED_MODULE_4__.LoginPageModule, ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_11__.NgxMaskIonicModule.forRoot()],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
          useClass: _core_interceptor_loader_interceptor__WEBPACK_IMPORTED_MODULE_0__.LoaderInterceptor,
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
          useClass: _core_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_1__.TokenInterceptor,
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    26864:
    /*!********************************************************!*\
      !*** ./src/app/core/interceptor/loader.interceptor.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoaderInterceptor": function LoaderInterceptor() {
          return (
            /* binding */
            _LoaderInterceptor
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


      var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/services/loader.service */
      37733);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      27813);

      var _LoaderInterceptor = /*#__PURE__*/function () {
        function LoaderInterceptor(loader) {
          _classCallCheck(this, LoaderInterceptor);

          this.loader = loader;
        }

        _createClass(LoaderInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this = this;

            this.loader.show();
            return next.handle(req).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(function () {
              return _this.loader.hide();
            }));
          }
        }]);

        return LoaderInterceptor;
      }();

      _LoaderInterceptor.ctorParameters = function () {
        return [{
          type: _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService
        }];
      };

      _LoaderInterceptor = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _LoaderInterceptor);
      /***/
    },

    /***/
    60129:
    /*!*******************************************************!*\
      !*** ./src/app/core/interceptor/token-interceptor.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TokenInterceptor": function TokenInterceptor() {
          return (
            /* binding */
            _TokenInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor() {
          _classCallCheck(this, TokenInterceptor);
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var token = localStorage.getItem('token');

            if (token) {
              var authReq = req.clone({
                headers: req.headers.set('Authorization', "Bearer ".concat(token))
              });
              return next.handle(authReq);
            }

            return next.handle(req);
          }
        }]);

        return TokenInterceptor;
      }();

      _TokenInterceptor = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], _TokenInterceptor);
      /***/
    },

    /***/
    12863:
    /*!*******************************************************!*\
      !*** ./src/app/feature/login/login-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageRoutingModule": function LoginPageRoutingModule() {
          return (
            /* binding */
            _LoginPageRoutingModule
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


      var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.page */
      55037);

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }];

      var _LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      _LoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoginPageRoutingModule);
      /***/
    },

    /***/
    22691:
    /*!***********************************************!*\
      !*** ./src/app/feature/login/login.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageModule": function LoginPageModule() {
          return (
            /* binding */
            _LoginPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      12863);
      /* harmony import */


      var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/compat */
      49106);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      24766);
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      27570);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      55037);

      var _LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      _LoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_9__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.firebaseConfig)],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_3__.LoginPage],
        providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__.GooglePlus]
      })], _LoginPageModule);
      /***/
    },

    /***/
    55037:
    /*!*********************************************!*\
      !*** ./src/app/feature/login/login.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./login.page.html */
      5756);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      51573);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/services/auth.service */
      41026);

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(authService) {
          _classCallCheck(this, LoginPage);

          this.authService = authService;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loginGoogle",
          value: function loginGoogle() {
            this.authService.authenticateWithGoogle().then(function () {
              alert('Usuario autenticado');
            })["catch"](function (err) {
              alert('Error ' + err);
            });
          }
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }];
      };

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoginPage);
      /***/
    },

    /***/
    41026:
    /*!*************************************************!*\
      !*** ./src/app/shared/services/auth.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/compat/auth */
      83027);
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      27570);

      var _AuthService = /*#__PURE__*/function () {
        function AuthService(AFauth, google, router) {
          _classCallCheck(this, AuthService);

          this.AFauth = AFauth;
          this.google = google;
          this.router = router;
        }

        _createClass(AuthService, [{
          key: "authenticateWithGoogle",
          value: function authenticateWithGoogle() {
            var _this2 = this;

            return this.google.login({}).then(function (response) {
              var userData = response;
              console.log(userData);

              _this2.router.navigate(['/signup']); // return this.AFauth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(null, userData.accessToken));

            });
          }
        }]);

        return AuthService;
      }();

      _AuthService.ctorParameters = function () {
        return [{
          type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__.AngularFireAuth
        }, {
          type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_0__.GooglePlus
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _AuthService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _AuthService);
      /***/
    },

    /***/
    37733:
    /*!***************************************************!*\
      !*** ./src/app/shared/services/loader.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoaderService": function LoaderService() {
          return (
            /* binding */
            _LoaderService
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


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      6006);

      var _LoaderService = /*#__PURE__*/function () {
        function LoaderService() {
          _classCallCheck(this, LoaderService);

          this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }

        _createClass(LoaderService, [{
          key: "show",
          value: function show() {
            this.isLoading.next(true);
          }
        }, {
          key: "hide",
          value: function hide() {
            this.isLoading.next(false);
          }
        }]);

        return LoaderService;
      }();

      _LoaderService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _LoaderService);
      /***/
    },

    /***/
    24766:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        },

        /* harmony export */
        "firebaseConfig": function firebaseConfig() {
          return (
            /* binding */
            _firebaseConfig
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      var _firebaseConfig = {
        apiKey: "AIzaSyDZYrI4xJAwMTSS9AOqq_F9iPqDOn8dfz8",
        authDomain: "gsense-8661b.firebaseapp.com",
        projectId: "gsense-8661b",
        storageBucket: "gsense-8661b.appspot.com",
        messagingSenderId: "846165802313",
        appId: "1:846165802313:web:b36f22acbe1bf085ba2e98"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    8835:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      90476);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      50023);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      24766);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [95261, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [26, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [29009, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [27221, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [34694, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [70993, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [63645, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [62245, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [23482, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [4081, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [53315, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [64133, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [37542, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [21459, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [47618, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [90101, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [82210, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [47370, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [23652, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [28220, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [25500, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [84913, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [15078, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [14857, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [48958, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [14383, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [97630, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [81297, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [35492, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [13752, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7487, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [61778, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [82904, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [81609, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [31218, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [92849, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [4127, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [28400, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [14397, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [43391, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [66793, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [11695, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [4180, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    51573:
    /*!***********************************************!*\
      !*** ./src/app/feature/login/login.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #000000;\n  text-transform: none;\n  text-transform: initial;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-content #logo {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\nion-content p {\n  font-size: 25px;\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: bold;\n  color: #000000;\n}\n\nion-content #img {\n  width: 152px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  mix-blend-mode: multiply;\n}\n\nion-content #text {\n  margin-top: 40px;\n  display: inline-block;\n  color: #a3a1a1;\n  width: 100%;\n  text-align: center;\n  font-weight: 400;\n}\n\nion-content .btn__login {\n  display: flex;\n  justify-content: space-around;\n  flex-flow: column wrap;\n  margin-top: 20px;\n}\n\nion-content .btn__google {\n  text-transform: capitalize;\n  width: 80%;\n  margin: auto;\n  margin-top: 20px;\n  width: 80%;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  background: #000000;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #000000, #000000);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\nion-content .btn__micro {\n  text-transform: capitalize;\n  width: 80%;\n  margin: auto;\n  margin-top: 20px;\n  width: 80%;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  background: #000000;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #000000, #000000);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\nion-content .x1,\nion-content .x2 {\n  color: white;\n}\n\nion-content .or {\n  margin-top: 40px;\n  display: inline-block;\n  color: #a3a1a1;\n  width: 100%;\n  text-align: center;\n  font-weight: 400;\n}\n\nion-content #main__form {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-top: 20px;\n}\n\nion-content .input {\n  width: 80%;\n  background: transparent !important;\n  padding: 12px 0px;\n  background: #ffffff;\n  border: 1px solid rgba(206, 206, 206, 0.5);\n  box-sizing: border-box;\n  border-radius: 10px;\n  color: #000;\n  margin-top: 20px;\n  padding-left: 10px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content .input:hover {\n  border: 1px solid rgba(231, 49, 34, 0.5);\n}\n\nion-content ::-moz-placeholder {\n  padding-left: 8px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content :-ms-input-placeholder {\n  padding-left: 8px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content ::placeholder {\n  padding-left: 8px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content #buttons {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\nion-content #buttons #btn {\n  text-transform: uppercase;\n  margin-top: 20px;\n  width: 90%;\n  padding: 18px 20px;\n  background: #000000;\n  border-radius: 50px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\nion-content .register {\n  margin-top: 10px;\n  color: #757575;\n  background: #fbfbfb;\n  font-weight: 400;\n  width: 80%;\n}\n\nion-content .click {\n  color: #e73122;\n  font-weight: bold;\n}\n\n@media screen and (min-width: 505px) {\n  ion-content .input {\n    width: 45%;\n  }\n  ion-content .btn__google {\n    width: 55%;\n  }\n  ion-content .btn__micro {\n    width: 55%;\n  }\n  ion-content .buttons .btn {\n    width: 55%;\n  }\n  ion-content .register {\n    margin-top: 15px;\n  }\n}\n\n@media screen and (min-width: 660px) {\n  ion-content .input {\n    width: 45%;\n  }\n  ion-content .btn__google {\n    width: 45%;\n  }\n  ion-content .btn__micro {\n    width: 45%;\n  }\n  ion-content .buttons .btn {\n    width: 45%;\n  }\n  ion-content .register {\n    margin-top: 25px;\n  }\n}\n\n@media screen and (min-width: 820px) {\n  ion-content .input {\n    width: 80%;\n    background: transparent !important;\n    padding: 12px 0px;\n    background: #ffffff;\n    border: 1px solid rgba(206, 206, 206, 0.5);\n    box-sizing: border-box;\n    border-radius: 10px;\n    color: #000;\n    margin-top: 20px;\n    padding-left: 12px;\n    font-size: 14px;\n    color: #757575;\n  }\n  ion-content .btn__google {\n    width: 35%;\n  }\n  ion-content ::-moz-placeholder {\n    padding-left: 8px;\n    color: #757575;\n  }\n  ion-content :-ms-input-placeholder {\n    padding-left: 8px;\n    color: #757575;\n  }\n  ion-content ::placeholder {\n    padding-left: 8px;\n    color: #757575;\n  }\n  ion-content .buttons {\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    align-items: center;\n    margin-top: 0px;\n  }\n  ion-content .buttons .btn {\n    text-transform: uppercase;\n    margin-top: 30px;\n    padding: 18px 20px;\n    border-radius: 50px;\n    background: #e73122;\n    font-weight: bold;\n    letter-spacing: 1px;\n  }\n  ion-content .register {\n    margin-top: 30px;\n    background: #fbfbfb;\n    font-weight: normal;\n    width: 100%;\n    font-size: 16px;\n    margin-bottom: 5px;\n  }\n}\n\nion-content .click {\n  color: #e73122;\n  font-weight: bold;\n  font-size: 14px;\n}\n\nion-content .btn__google {\n  width: 25%;\n}\n\nion-content .btn__micro {\n  width: 25%;\n}\n\nion-content .buttons .btn {\n  width: 10%;\n}\n\nion-content .register {\n  margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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ICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmYmZiZmI7XHJcblxyXG4gICNsb2dvIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgcCB7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG5cclxuICAjaW1nIHtcclxuICAgIHdpZHRoOiAxNTJweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XHJcbiAgfVxyXG5cclxuICAjdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNhM2ExYTE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG5cclxuICAuYnRuX19sb2dpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5idG5fX2dvb2dsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwMDAwLCAjMDAwMDAwKTtcclxuICAgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwMDAsICMwMDAwMDApO1xyXG4gICAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG4gIH1cclxuXHJcbiAgLmJ0bl9fbWljcm8ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwMDAwLCAjMDAwMDAwKTtcclxuICAgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwMDAsICMwMDAwMDApO1xyXG4gICAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG4gIH1cclxuXHJcbiAgLngxLFxyXG4gIC54MiB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgLm9yIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2EzYTFhMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG4gICNtYWluX19mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDYsIDIwNiwgMjA2LCAwLjUpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICB9XHJcblxyXG4gIC5pbnB1dDpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzMSwgNDksIDM0LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gIH1cclxuXHJcbiAgI2J1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgI2J1dHRvbnMgI2J0biB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcblxyXG4gIC5yZWdpc3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG5cclxuICAuY2xpY2sge1xyXG4gICAgY29sb3I6ICNlNzMxMjI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwNXB4KSB7XHJcbiAgICAuaW5wdXQge1xyXG4gICAgICB3aWR0aDogNDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG5fX2dvb2dsZSB7XHJcbiAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bl9fbWljcm8ge1xyXG4gICAgICB3aWR0aDogNTUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIC5idG4ge1xyXG4gICAgICB3aWR0aDogNTUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWdpc3RlciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NjBweCkge1xyXG4gICAgLmlucHV0IHtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuX19nb29nbGUge1xyXG4gICAgICB3aWR0aDogNDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG5fX21pY3JvIHtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ucyAuYnRuIHtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODIwcHgpIHtcclxuICAgIC5pbnB1dCB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwNiwgMjA2LCAyMDYsIDAuNSk7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bl9fZ29vZ2xlIHtcclxuICAgICAgd2lkdGg6IDM1JTtcclxuICAgIH1cclxuXHJcbiAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ucyAuYnRuIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgcGFkZGluZzogMThweCAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTczMTIyO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2xpY2sge1xyXG4gICAgY29sb3I6ICNlNzMxMjI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5idG5fX2dvb2dsZSB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmJ0bl9fbWljcm8ge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIC5idXR0b25zIC5idG4ge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICB9XHJcblxyXG4gIC5yZWdpc3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    5756:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/login/login.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\"> </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/signup\">Sign up</ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/home\">home</ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/schedule\">citas</ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/reg-device\">devi</ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/transbank\">tras</ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/asesora\">Aseso</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"logo\">\r\n    <!--img id=\"img\" src=\"assets/logonutrix.jpeg\" /-->\r\n    <p>gSense</p>\r\n  </div>\r\n\r\n  <span id=\"text\">Sing in</span>\r\n  <div class=\"btn__login\">\r\n    <button class=\"btn__google\" (click)=\"loginGoogle()\">\r\n      <i class=\"fab fa-google-plus-g x1\"></i>\r\n    </button>\r\n    <button class=\"btn__micro\"><i class=\"fab fa-windows x2\"> </i></button>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(8835);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map