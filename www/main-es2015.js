(self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 70809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! @feature/home/home.module */ 96260)).then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @feature/login/login.module */ 22691)).then(m => m.LoginPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_feature_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @feature/signup/signup.module */ 47400)).then(m => m.SignupPageModule)
    },
    {
        path: 'splash',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_splash_splash_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! @feature/splash/splash.module */ 77255)).then(m => m.SplashPageModule)
    },
    {
        path: 'register-one',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_feature_register-one_register-one_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @feature/register-one/register-one.module */ 30399)).then(m => m.RegisterOnePageModule)
    },
    {
        path: 'register-two',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constants_endPoint_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_feature_register-two_register-two_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @feature/register-two/register-two.module */ 83593)).then(m => m.RegisterTwoPageModule)
    },
    {
        path: 'register-three',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_register-three_register-three_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! @feature/register-three/register-three.module */ 76959)).then(m => m.RegisterThreePageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./feature/tabs/tabs.module */ 95676)).then(m => m.TabsPageModule)
    },
    {
        path: 'reg-device',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constants_endPoint_ts"), __webpack_require__.e("src_app_feature_reg-device_reg-device_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/reg-device/reg-device.module */ 86299)).then(m => m.RegDevicePageModule)
    },
    {
        path: 'transbank',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constants_endPoint_ts"), __webpack_require__.e("src_app_feature_transbank_transbank_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/transbank/transbank.module */ 67126)).then(m => m.TransbankPageModule)
    },
    {
        path: 'schedule',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constants_endPoint_ts"), __webpack_require__.e("src_app_feature_schedule_schedule_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./feature/schedule/schedule.module */ 2233)).then(m => m.SchedulePageModule)
    },
    {
        path: 'food',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_food_food_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./feature/food/food.module */ 61866)).then(m => m.FoodPageModule)
    },
    {
        path: 'asesora',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_feature_asesora_asesora_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./feature/asesora/asesora.module */ 3183)).then(m => m.AsesoraPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 20721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 29535);




let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.initializeApp();
    }
    initializeApp() {
        this.router.navigateByUrl('splash');
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
    })
], AppComponent);



/***/ }),

/***/ 50023:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 93220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _core_interceptor_loader_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/interceptor/loader.interceptor */ 26864);
/* harmony import */ var _core_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/interceptor/token-interceptor */ 60129);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 20721);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 70809);
/* harmony import */ var ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask-ionic */ 30250);
/* harmony import */ var _feature_login_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @feature/login/login.module */ 22691);














let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _feature_login_login_module__WEBPACK_IMPORTED_MODULE_4__.LoginPageModule,
            ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_11__.NgxMaskIonicModule.forRoot(),
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: _core_interceptor_loader_interceptor__WEBPACK_IMPORTED_MODULE_0__.LoaderInterceptor, multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: _core_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_1__.TokenInterceptor, multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 26864:
/*!********************************************************!*\
  !*** ./src/app/core/interceptor/loader.interceptor.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderInterceptor": function() { return /* binding */ LoaderInterceptor; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/loader.service */ 37733);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 27813);




let LoaderInterceptor = class LoaderInterceptor {
    constructor(loader) {
        this.loader = loader;
    }
    intercept(req, next) {
        this.loader.show();
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => this.loader.hide()));
    }
};
LoaderInterceptor.ctorParameters = () => [
    { type: _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService }
];
LoaderInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LoaderInterceptor);



/***/ }),

/***/ 60129:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/token-interceptor.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": function() { return /* binding */ TokenInterceptor; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 42741);


let TokenInterceptor = class TokenInterceptor {
    intercept(req, next) {
        const token = localStorage.getItem('token');
        if (token) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
};
TokenInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], TokenInterceptor);



/***/ }),

/***/ 12863:
/*!*******************************************************!*\
  !*** ./src/app/feature/login/login-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 55037);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 22691:
/*!***********************************************!*\
  !*** ./src/app/feature/login/login.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 12863);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat */ 49106);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 24766);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 27570);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ 55037);










let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_9__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.firebaseConfig)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_3__.LoginPage],
        providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__.GooglePlus],
    })
], LoginPageModule);



/***/ }),

/***/ 55037:
/*!*********************************************!*\
  !*** ./src/app/feature/login/login.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 5756);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 51573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/auth.service */ 41026);





let LoginPage = class LoginPage {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    loginGoogle() {
        this.authService.authenticateWithGoogle().then(() => {
            alert('Usuario autenticado');
        }).catch(err => {
            alert('Error ' + err);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 41026:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 83027);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 27570);
/* harmony import */ var _firebase_app_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/app-compat */ 70159);





let AuthService = class AuthService {
    constructor(AFauth, google) {
        this.AFauth = AFauth;
        this.google = google;
    }
    authenticateWithGoogle() {
        return this.google.login({}).then(response => {
            const userData = response;
            return this.AFauth.signInWithCredential(_firebase_app_compat__WEBPACK_IMPORTED_MODULE_1__.default.auth.GoogleAuthProvider.credential(null, userData.accessToken));
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_0__.GooglePlus }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 37733:
/*!***************************************************!*\
  !*** ./src/app/shared/services/loader.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": function() { return /* binding */ LoaderService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6006);



let LoaderService = class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
};
LoaderService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ 24766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; },
/* harmony export */   "firebaseConfig": function() { return /* binding */ firebaseConfig; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
const firebaseConfig = {
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


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 90476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50023);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 24766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		95261,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		26,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		29009,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		27221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		34694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		70993,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		63645,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		62245,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		23482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		53315,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		37542,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		21459,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		47618,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		90101,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		82210,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		47370,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		23652,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		28220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		25500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		84913,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		15078,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		14857,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		48958,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		14383,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		97630,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		81297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		35492,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		13752,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7487,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		61778,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		82904,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		81609,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		31218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		92849,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4127,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		28400,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		14397,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		43391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		66793,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		11695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4180,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 51573:
/*!***********************************************!*\
  !*** ./src/app/feature/login/login.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #000000;\n  text-transform: none;\n  text-transform: initial;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-content #logo {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\nion-content p {\n  font-size: 25px;\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: bold;\n  color: #000000;\n}\n\nion-content #img {\n  width: 152px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  mix-blend-mode: multiply;\n}\n\nion-content #text {\n  margin-top: 40px;\n  display: inline-block;\n  color: #a3a1a1;\n  width: 100%;\n  text-align: center;\n  font-weight: 400;\n}\n\nion-content .btn__login {\n  display: flex;\n  justify-content: space-around;\n  flex-flow: column wrap;\n  margin-top: 20px;\n}\n\nion-content .btn__google {\n  text-transform: capitalize;\n  width: 80%;\n  margin: auto;\n  margin-top: 20px;\n  width: 80%;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  background: #000000;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #000000, #000000);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\nion-content .btn__micro {\n  text-transform: capitalize;\n  width: 80%;\n  margin: auto;\n  margin-top: 20px;\n  width: 80%;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  background: #000000;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #000000, #000000);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\nion-content .x1,\nion-content .x2 {\n  color: white;\n}\n\nion-content .or {\n  margin-top: 40px;\n  display: inline-block;\n  color: #a3a1a1;\n  width: 100%;\n  text-align: center;\n  font-weight: 400;\n}\n\nion-content #main__form {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-top: 20px;\n}\n\nion-content .input {\n  width: 80%;\n  background: transparent !important;\n  padding: 12px 0px;\n  background: #ffffff;\n  border: 1px solid rgba(206, 206, 206, 0.5);\n  box-sizing: border-box;\n  border-radius: 10px;\n  color: #000;\n  margin-top: 20px;\n  padding-left: 10px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content .input:hover {\n  border: 1px solid rgba(231, 49, 34, 0.5);\n}\n\nion-content ::-moz-placeholder {\n  padding-left: 8px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content :-ms-input-placeholder {\n  padding-left: 8px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content ::placeholder {\n  padding-left: 8px;\n  font-size: 14px;\n  color: #757575;\n}\n\nion-content #buttons {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\nion-content #buttons #btn {\n  text-transform: uppercase;\n  margin-top: 20px;\n  width: 90%;\n  padding: 18px 20px;\n  background: #000000;\n  border-radius: 50px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\nion-content .register {\n  margin-top: 10px;\n  color: #757575;\n  background: #fbfbfb;\n  font-weight: 400;\n  width: 80%;\n}\n\nion-content .click {\n  color: #e73122;\n  font-weight: bold;\n}\n\n@media screen and (min-width: 505px) {\n  ion-content .input {\n    width: 45%;\n  }\n  ion-content .btn__google {\n    width: 55%;\n  }\n  ion-content .btn__micro {\n    width: 55%;\n  }\n  ion-content .buttons .btn {\n    width: 55%;\n  }\n  ion-content .register {\n    margin-top: 15px;\n  }\n}\n\n@media screen and (min-width: 660px) {\n  ion-content .input {\n    width: 45%;\n  }\n  ion-content .btn__google {\n    width: 45%;\n  }\n  ion-content .btn__micro {\n    width: 45%;\n  }\n  ion-content .buttons .btn {\n    width: 45%;\n  }\n  ion-content .register {\n    margin-top: 25px;\n  }\n}\n\n@media screen and (min-width: 820px) {\n  ion-content .input {\n    width: 80%;\n    background: transparent !important;\n    padding: 12px 0px;\n    background: #ffffff;\n    border: 1px solid rgba(206, 206, 206, 0.5);\n    box-sizing: border-box;\n    border-radius: 10px;\n    color: #000;\n    margin-top: 20px;\n    padding-left: 12px;\n    font-size: 14px;\n    color: #757575;\n  }\n  ion-content .btn__google {\n    width: 35%;\n  }\n  ion-content ::-moz-placeholder {\n    padding-left: 8px;\n    color: #757575;\n  }\n  ion-content :-ms-input-placeholder {\n    padding-left: 8px;\n    color: #757575;\n  }\n  ion-content ::placeholder {\n    padding-left: 8px;\n    color: #757575;\n  }\n  ion-content .buttons {\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    align-items: center;\n    margin-top: 0px;\n  }\n  ion-content .buttons .btn {\n    text-transform: uppercase;\n    margin-top: 30px;\n    padding: 18px 20px;\n    border-radius: 50px;\n    background: #e73122;\n    font-weight: bold;\n    letter-spacing: 1px;\n  }\n  ion-content .register {\n    margin-top: 30px;\n    background: #fbfbfb;\n    font-weight: normal;\n    width: 100%;\n    font-size: 16px;\n    margin-bottom: 5px;\n  }\n}\n\nion-content .click {\n  color: #e73122;\n  font-weight: bold;\n  font-size: 14px;\n}\n\nion-content .btn__google {\n  width: 25%;\n}\n\nion-content .btn__micro {\n  width: 25%;\n}\n\nion-content .buttons .btn {\n  width: 10%;\n}\n\nion-content .register {\n  margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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bWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmYmZiZmI7XG5cbiAgI2xvZ28ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBwIHtcbiAgIFxuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG5cbiAgI2ltZyB7XG4gICAgd2lkdGg6IDE1MnB4O1xuICAgIGhlaWdodDogMzRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICB9XG5cbiAgI3RleHQge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjYTNhMWExO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgLmJ0bl9fbG9naW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgLmJ0bl9fZ29vZ2xlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7IFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwMDAsICMwMDAwMDApO1xuICAgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwMDAwLCAjMDAwMDAwKTtcbiAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gIH1cblxuICAuYnRuX19taWNybyB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwMDAsICMwMDAwMDApO1xuICAgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwMDAwLCAjMDAwMDAwKTtcbiAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gIH1cblxuICAueDEsXG4gIC54MiB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5vciB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICNhM2ExYTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICAjbWFpbl9fZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIC5pbnB1dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEycHggMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDYsIDIwNiwgMjA2LCAwLjUpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gIH1cblxuICAuaW5wdXQ6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMxLCA0OSwgMzQsIDAuNSk7XG4gIH1cblxuICA6OnBsYWNlaG9sZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gIH1cblxuICAjYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gICNidXR0b25zICNidG4ge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5yZWdpc3RlciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5jbGljayB7XG4gICAgY29sb3I6ICNlNzMxMjI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDVweCkge1xuICAgIC5pbnB1dCB7XG4gICAgICB3aWR0aDogNDUlO1xuICAgIH1cblxuICAgIC5idG5fX2dvb2dsZSB7XG4gICAgICB3aWR0aDogNTUlO1xuICAgIH1cblxuICAgIC5idG5fX21pY3JvIHtcbiAgICAgIHdpZHRoOiA1NSU7XG4gICAgfVxuXG4gICAgLmJ1dHRvbnMgLmJ0biB7XG4gICAgICB3aWR0aDogNTUlO1xuICAgIH1cblxuICAgIC5yZWdpc3RlciB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY2MHB4KSB7XG4gICAgLmlucHV0IHtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgfVxuXG4gICAgLmJ0bl9fZ29vZ2xlIHtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgfVxuXG4gICAgLmJ0bl9fbWljcm8ge1xuICAgICAgd2lkdGg6IDQ1JTtcbiAgICB9XG5cbiAgICAuYnV0dG9ucyAuYnRuIHtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODIwcHgpIHtcbiAgICAuaW5wdXQge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwNiwgMjA2LCAyMDYsIDAuNSk7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIH1cblxuICAgIC5idG5fX2dvb2dsZSB7XG4gICAgICB3aWR0aDogMzUlO1xuICAgIH1cblxuICAgIDo6cGxhY2Vob2xkZXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICB9XG5cbiAgICAuYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG5cbiAgICAuYnV0dG9ucyAuYnRuIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZzogMThweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNlNzMxMjI7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5jbGljayB7XG4gICAgY29sb3I6ICNlNzMxMjI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmJ0bl9fZ29vZ2xlIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG5cbiAgLmJ0bl9fbWljcm8ge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cblxuICAuYnV0dG9ucyAuYnRuIHtcbiAgICB3aWR0aDogMTAlO1xuICB9XG5cbiAgLnJlZ2lzdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 5756:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/login/login.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/signup\">Sign up</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/home\">home</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/schedule\">citas</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/reg-device\">devi</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/transbank\">tras</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/asesora\">Aseso</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"logo\">\n    <!--img id=\"img\" src=\"assets/logonutrix.jpeg\" /-->\n    <p>gSense</p>\n  </div>\n\n  <span id=\"text\">Sing in</span>\n  <div class=\"btn__login\">\n    <button class=\"btn__google\" (click)=\"loginGoogle()\">\n      <i class=\"fab fa-google-plus-g x1\"></i>\n    </button>\n    <button class=\"btn__micro\"><i class=\"fab fa-windows x2\"> </i></button>\n  </div>\n</ion-content>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(8835); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map