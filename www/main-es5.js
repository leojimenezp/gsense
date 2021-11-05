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
          return __webpack_require__.e(
          /*! import() */
          "src_app_feature_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
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
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_feature_register-two_register-two_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      93220);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      27570);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      20721);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      70809);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/auth */
      33469);
      /* harmony import */


      var ngx_loading__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-loading */
      91147);
      /* harmony import */


      var _angular_fire_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/app */
      94309);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../environments/environment */
      24766);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/fire/firestore */
      18894);
      /* harmony import */


      var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/fire/analytics */
      25192);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire/database */
      73570);
      /* harmony import */


      var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/fire/functions */
      7649);
      /* harmony import */


      var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/fire/messaging */
      76767);
      /* harmony import */


      var _angular_fire_performance__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/fire/performance */
      84328);
      /* harmony import */


      var _angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/fire/remote-config */
      93879);
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/fire/storage */
      72600);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, (0, _angular_fire_app__WEBPACK_IMPORTED_MODULE_12__.provideFirebaseApp)(function () {
          return (0, _angular_fire_app__WEBPACK_IMPORTED_MODULE_12__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_5__.firebaseConfig);
        }), (0, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.provideAuth)(function () {
          return (0, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.getAuth)();
        }), (0, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__.provideFirestore)(function () {
          return (0, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__.getFirestore)();
        }), (0, _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_15__.provideAnalytics)(function () {
          return (0, _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_15__.getAnalytics)();
        }), (0, _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__.provideDatabase)(function () {
          return (0, _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__.getDatabase)();
        }), (0, _angular_fire_functions__WEBPACK_IMPORTED_MODULE_17__.provideFunctions)(function () {
          return (0, _angular_fire_functions__WEBPACK_IMPORTED_MODULE_17__.getFunctions)();
        }), (0, _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_18__.provideMessaging)(function () {
          return (0, _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_18__.getMessaging)();
        }), (0, _angular_fire_performance__WEBPACK_IMPORTED_MODULE_19__.providePerformance)(function () {
          return (0, _angular_fire_performance__WEBPACK_IMPORTED_MODULE_19__.getPerformance)();
        }), (0, _angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_20__.provideRemoteConfig)(function () {
          return (0, _angular_fire_remote_config__WEBPACK_IMPORTED_MODULE_20__.getRemoteConfig)();
        }), (0, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__.provideStorage)(function () {
          return (0, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__.getStorage)();
        }), ngx_loading__WEBPACK_IMPORTED_MODULE_22__.NgxLoadingModule.forRoot({
          animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_22__.ngxLoadingAnimationTypes.circle,
          backdropBackgroundColour: 'rgba(0,0,0,0.1)',
          backdropBorderRadius: '8px',
          primaryColour: '#E73122'
        })],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
          useClass: _core_interceptor_loader_interceptor__WEBPACK_IMPORTED_MODULE_0__.LoaderInterceptor,
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
          useClass: _core_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_1__.TokenInterceptor,
          multi: true
        }, _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_15__.ScreenTrackingService, _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_15__.UserTrackingService, _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__.GooglePlus],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
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
        apiKey: "AIzaSyBsrlmW-2jgSrLSRhoWyctjAI6poLBLffM",
        authDomain: "gsense.firebaseapp.com",
        projectId: "gsense",
        storageBucket: "gsense.appspot.com",
        messagingSenderId: "842296256628",
        appId: "1:842296256628:web:4907e64609878a3d3b8921"
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