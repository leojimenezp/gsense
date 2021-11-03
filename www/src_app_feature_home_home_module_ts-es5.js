(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_home_home_module_ts"], {
    /***/
    67312:
    /*!*****************************************************!*\
      !*** ./src/app/feature/home/home-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
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


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      9287);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }];

      var _HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      _HomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HomePageRoutingModule);
      /***/
    },

    /***/
    96260:
    /*!*********************************************!*\
      !*** ./src/app/feature/home/home.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      9287);
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-routing.module */
      67312);

      var _HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      _HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
      })], _HomePageModule);
      /***/
    },

    /***/
    9287:
    /*!*******************************************!*\
      !*** ./src/app/feature/home/home.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./home.page.html */
      52097);
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.scss */
      95799);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _HomePage = function HomePage() {
        _classCallCheck(this, HomePage);
      };

      _HomePage.ctorParameters = function () {
        return [];
      };

      _HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HomePage);
      /***/
    },

    /***/
    95799:
    /*!*********************************************!*\
      !*** ./src/app/feature/home/home.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #E73122;\n  text-transform: none;\n  text-transform: initial;\n  color: white;\n  height: 100%;\n}\n\nion-toolbar .bars {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 20px;\n}\n\nion-content {\n  --background: #fbfbfb;\n  height: 100%;\n}\n\nion-content .main {\n  display: flex;\n  width: 90%;\n  margin: 50px auto;\n  justify-content: space-between;\n}\n\nion-content .main .text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n  color: aliceblue;\n  letter-spacing: 0.02em;\n  color: #D23022;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nion-content .main .image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 57px;\n  height: 57px;\n  border: 1px solid #c3c4c4;\n  border-radius: 50%;\n  flex-flow: row wrap;\n}\n\nion-content h3 {\n  width: 90%;\n  margin: 8px auto;\n  color: #757575;\n  font-weight: bold;\n  font-size: 15px;\n}\n\nion-content .connect__green {\n  display: flex;\n  width: 88%;\n  margin: 6px auto;\n}\n\nion-content .connect__green span {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  background: #55BE93;\n  border-radius: 50%;\n  margin-top: 4px;\n}\n\nion-content .space {\n  margin-bottom: 140px;\n}\n\nion-content .connect__green .settings {\n  position: absolute;\n  right: 20px;\n  top: 162px;\n  color: #E73122;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .connect__green p {\n  color: #A0A0A0;\n  font-size: 13px;\n  font-weight: 400;\n  margin-left: 5px;\n}\n\nion-content .main__bg {\n  width: 100%;\n  margin: auto;\n}\n\nion-content .bg__gray {\n  width: 90%;\n  height: 126px;\n  filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.15));\n  border-radius: 20px;\n  background: #444444;\n  margin: 15px auto;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  font-size: 13px;\n}\n\nion-content .bg__text {\n  margin: 5px 0px;\n}\n\nion-content .upper {\n  font-size: 25px;\n  font-weight: bold;\n}\n\nion-content .edit {\n  margin-top: 10px;\n  color: #E73122;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .main_circles {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: 15px 50px;\n}\n\nion-content .main_circles .circle {\n  width: 11px;\n  height: 11px;\n  background: #D8D8D8;\n  border-radius: 50%;\n}\n\nion-content .main_circles .active {\n  background: #E73122;\n}\n\nion-content .main_circles .line {\n  border: 1px solid #D8D8D8;\n  width: 1px;\n  height: 50px;\n  margin-left: 4.5px;\n  font-weight: bold;\n}\n\nion-content .main__text {\n  position: relative;\n  width: 100%;\n  height: 10%;\n  color: red;\n}\n\nion-content .text1 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -148px;\n  color: #757575;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .text2 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -96px;\n  color: #757575;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .text3 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -40px;\n  color: #757575;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .edit2 {\n  margin-top: 10px;\n  color: #E73122;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .info {\n  display: flex;\n  width: 90%;\n  flex-direction: row;\n}\n\nion-content ion-tabs ion-tab-bar {\n  --background: #E73122;\n  width: 100%;\n  position: absolute;\n  top: 892px;\n  left: 0;\n}\n\nion-content ion-tabs ion-tab-bar .nav__text {\n  color: #ffffff;\n}\n\n@media screen and (min-width: 361px) {\n  ion-content ion-tab-bar {\n    width: 100%;\n    position: absolute;\n    background: #000;\n    top: 905px;\n    left: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,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QUNWLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFIckI7O0FBdExBO0VBNkxJLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGVBQWU7QUFIbkI7O0FBN0xBO0VBb01JLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0FBSHZCOztBQW5NQTtFQThNTSxxQkFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE9BQU87QUFQYjs7QUEzTUE7RUFzTlEsY0FBYztBQVB0Qjs7QUFjRTtFQTdORjtJQStOTSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsT0FBTztFQVhYO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI0U3MzEyMjtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogMTAwJTtcblxuICAuYmFycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxufVxuXG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAubWFpbiAudGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0NSU7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgIGNvbG9yOiAjRDIzMDIyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5tYWluIC5pbWFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1N3B4O1xuICAgIGhlaWdodDogNTdweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNjNGM0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICB9XG5cbiAgaDMge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiA4cHggYXV0bztcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICAuY29ubmVjdF9fZ3JlZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDg4JTtcbiAgICBtYXJnaW46IDZweCBhdXRvO1xuXG4gIH1cblxuICAuY29ubmVjdF9fZ3JlZW4gc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYmFja2dyb3VuZDogIzU1QkU5MztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG5cbiAgLnNwYWNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNDBweDtcbiAgfVxuXG4gIC5jb25uZWN0X19ncmVlbiAuc2V0dGluZ3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDE2MnB4O1xuICAgIGNvbG9yOiAjRTczMTIyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5jb25uZWN0X19ncmVlbiBwIHtcbiAgICBjb2xvcjogI0EwQTBBMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG5cbiAgLm1haW5fX2JnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAuYmdfX2dyYXkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAxMjZweDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0NDQ0O1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5iZ19fdGV4dCB7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICB9XG5cbiAgLnVwcGVyIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuZWRpdCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgIGNvbG9yOiAjRTczMTIyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5tYWluX2NpcmNsZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMTVweCA1MHB4O1xuICB9XG5cbiAgLm1haW5fY2lyY2xlcyAuY2lyY2xlIHtcbiAgICB3aWR0aDogMTFweDtcbiAgICBoZWlnaHQ6IDExcHg7XG4gICAgYmFja2dyb3VuZDogI0Q4RDhEODtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgfVxuXG4gIC5tYWluX2NpcmNsZXMgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDpcbiAgICAgICNFNzMxMjI7XG4gIH1cblxuICAubWFpbl9jaXJjbGVzIC5saW5lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDhEOEQ4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0LjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5tYWluX190ZXh0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIC50ZXh0MSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbGVmdDogODBweDtcbiAgICB0b3A6IC0xNDhweDtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIH1cblxuICAudGV4dDIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjcycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgdG9wOiAtOTZweDtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIH1cblxuICAudGV4dDMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjcycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgdG9wOiAtNDBweDtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIH1cblxuICAuZWRpdDIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6ICNFNzMxMjI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgLmluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIH1cblxuICBpb24tdGFicyB7XG5cblxuICAgIGlvbi10YWItYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI0U3MzEyMjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA4OTJweDtcbiAgICAgIGxlZnQ6IDA7XG5cblxuICAgICAgLm5hdl9fdGV4dCB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNjFweCkge1xuICAgIGlvbi10YWItYmFyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgIHRvcDogOTA1cHg7XG4gICAgICBsZWZ0OiAwO1xuXG4gICAgfVxuICB9XG59Il19 */";
      /***/
    },

    /***/
    52097:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/home/home.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title><i class=\"fas fa-bars bars\"></i></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main\">\n    <div class=\"text\">\n      <p>Good Morning, Marcos!</p>\n    </div>\n    <div class=\"image\">\n      <img src=\"assets/hombre.png\" />\n    </div>\n  </div>\n  <h3>gSense Reading</h3>\n  <div class=\"connect__green\">\n    <span></span>\n    <p>Connected</p>\n    <p class=\"settings\">Settings</p>\n  </div>\n  <div class=\"main__bg\">\n    <div class=\"bg__gray\">\n      <div class=\"bg__text\">Last reading at 7:05 am</div>\n      <div class=\"bg__text upper\">125 mg/dL</div>\n      <div class=\"bg__text\">October 26, 2021</div>\n    </div>\n  </div>\n  <div class=\"info\">\n    <h3>Things for Morning</h3>\n    <div class=\"edit\">Edit</div>\n  </div>\n\n  <div class=\"main_circles\">\n    <span class=\"circle active\"></span>\n    <span class=\"line\">-</span>\n    <span class=\"circle\"></span>\n    <span class=\"line\">-</span>\n    <span class=\"circle\"></span>\n  </div>\n  <div class=\"main__text\">\n    <div class=\"text1\">\n      <p>Check your blood sugar</p>\n    </div>\n    <div class=\"text2\">\n      <p>Take your medication</p>\n    </div>\n    <div class=\"text3\">\n      <p>Have a god breakfast</p>\n    </div>\n  </div>\n  <div class=\"info\">\n    <h3>For afternoon</h3>\n    <div class=\"edit2\">Edit</div>\n  </div>\n\n  <div class=\"space\">\n    <div class=\"main_circles\">\n      <span class=\"circle active\"></span>\n      <span class=\"line\">-</span>\n      <span class=\"circle\"></span>\n      <span class=\"line\">-</span>\n      <span class=\"circle\"></span>\n    </div>\n    <div class=\"main__text\">\n      <div class=\"text1\">\n        <p>Check your blood sugar</p>\n      </div>\n      <div class=\"text2\">\n        <p>Take your fruits</p>\n      </div>\n      <div class=\"text3\">\n        <p>Do exercise</p>\n      </div>\n    </div>\n  </div>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button>\n        <div id=\"logo\">\n          <img id=\"img\" src=\"assets/2.png\" />\n        </div>\n        <ion-label class=\"nav__text\">Home</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button>\n        <div id=\"logo\">\n          <img id=\"img\" src=\"assets/1.png\" />\n        </div>\n        <ion-label class=\"nav__text\">Services</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button>\n        <div id=\"logo\">\n          <img id=\"img\" src=\"assets/3.png\" />\n        </div>\n        <ion-label class=\"nav__text\">Appointment</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button>\n        <div id=\"logo\">\n          <img id=\"img\" src=\"assets/bars.png\" />\n        </div>\n        <ion-label class=\"nav__text\">Metrics</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_feature_home_home_module_ts-es5.js.map