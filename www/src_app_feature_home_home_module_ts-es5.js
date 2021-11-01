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


      __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #E73122;\n  text-transform: none;\n  text-transform: initial;\n  color: white;\n}\n\nion-toolbar .bars {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 20px;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\nion-content .main {\n  display: flex;\n  width: 90%;\n  margin: 50px auto;\n  justify-content: space-between;\n}\n\nion-content .main .text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n  color: aliceblue;\n  letter-spacing: 0.02em;\n  color: #D23022;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nion-content .main .image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 57px;\n  height: 57px;\n  border: 1px solid #c3c4c4;\n  border-radius: 50%;\n  flex-flow: row wrap;\n}\n\nion-content h3 {\n  width: 90%;\n  margin: 8px auto;\n  color: #757575;\n  font-weight: bold;\n  font-size: 15px;\n}\n\nion-content .connect__green {\n  display: flex;\n  width: 88%;\n  margin: 6px auto;\n}\n\nion-content .connect__green span {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  background: #55BE93;\n  border-radius: 50%;\n  margin-top: 4px;\n}\n\nion-content .connect__green .settings {\n  position: absolute;\n  right: 20px;\n  top: 162px;\n  color: #E73122;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .connect__green p {\n  color: #A0A0A0;\n  font-size: 13px;\n  font-weight: 400;\n  margin-left: 5px;\n}\n\nion-content .main__bg {\n  width: 100%;\n  margin: auto;\n}\n\nion-content .bg__gray {\n  width: 90%;\n  height: 126px;\n  filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.15));\n  border-radius: 20px;\n  background: #444444;\n  margin: 15px auto;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  font-size: 13px;\n}\n\nion-content .bg__text {\n  margin: 5px 0px;\n}\n\nion-content .upper {\n  font-size: 25px;\n  font-weight: bold;\n}\n\nion-content .edit {\n  position: absolute;\n  right: 20px;\n  top: 360px;\n  color: #E73122;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .main_circles {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: 15px 50px;\n}\n\nion-content .main_circles .circle {\n  width: 11px;\n  height: 11px;\n  background: #D8D8D8;\n  border-radius: 50%;\n}\n\nion-content .main_circles .active {\n  background: #E73122;\n}\n\nion-content .main_circles .line {\n  border: 1px solid #D8D8D8;\n  width: 1px;\n  height: 50px;\n  margin-left: 4.5px;\n  font-weight: bold;\n}\n\nion-content .main__text {\n  position: absolute;\n  background: #000;\n  width: 100%;\n}\n\nion-content .text1 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -148px;\n  color: #757575;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .text2 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -96px;\n  color: #757575;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .text3 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -40px;\n  color: #757575;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .edit2 {\n  position: absolute;\n  right: 20px;\n  bottom: 200px;\n  color: #E73122;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content ion-tabs ion-tab-bar {\n  --background: #E73122;\n  width: 100%;\n}\n\nion-content ion-tabs ion-tab-bar .nav__text {\n  color: #ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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O0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFGckI7O0FBbExBO0VBd0xJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsZUFBZTtBQUZuQjs7QUEzTEE7RUFtTU0scUJBQWE7RUFDYixXQUFXO0FBSmpCOztBQWhNQTtFQTJNUSxjQUFjO0FBUHRCIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNFNzMxMjI7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4gIC5iYXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmYmZiZmI7XG5cbiAgLm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAubWFpbiAudGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0NSU7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgIGNvbG9yOiAjRDIzMDIyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5tYWluIC5pbWFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1N3B4O1xuICAgIGhlaWdodDogNTdweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNjNGM0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICB9XG5cbiAgaDMge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiA4cHggYXV0bztcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICAuY29ubmVjdF9fZ3JlZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDg4JTtcbiAgICBtYXJnaW46IDZweCBhdXRvO1xuXG4gIH1cblxuICAuY29ubmVjdF9fZ3JlZW4gc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYmFja2dyb3VuZDogIzU1QkU5MztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG5cbiAgLmNvbm5lY3RfX2dyZWVuIC5zZXR0aW5ncyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogMTYycHg7XG4gICAgY29sb3I6ICNFNzMxMjI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgLmNvbm5lY3RfX2dyZWVuIHAge1xuICAgIGNvbG9yOiAjQTBBMEEwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cblxuICAubWFpbl9fYmcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC5iZ19fZ3JheSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDEyNnB4O1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICM0NDQ0NDQ7XG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgLmJnX190ZXh0IHtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gIH1cblxuICAudXBwZXIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5lZGl0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiAzNjBweDtcbiAgICBjb2xvcjogI0U3MzEyMjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cblxuICAubWFpbl9jaXJjbGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDE1cHggNTBweDtcbiAgfVxuXG4gIC5tYWluX2NpcmNsZXMgLmNpcmNsZSB7XG4gICAgd2lkdGg6IDExcHg7XG4gICAgaGVpZ2h0OiAxMXB4O1xuICAgIGJhY2tncm91bmQ6ICNEOEQ4RDg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gIH1cblxuICAubWFpbl9jaXJjbGVzIC5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6XG4gICAgICAjRTczMTIyO1xuICB9XG5cbiAgLm1haW5fY2lyY2xlcyAubGluZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q4RDhEODtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogNC41cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAubWFpbl9fdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudGV4dDEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjcycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgdG9wOiAtMTQ4cHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgLnRleHQyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI3MnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiA4MHB4O1xuICAgIHRvcDogLTk2cHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgLnRleHQzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI3MnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiA4MHB4O1xuICAgIHRvcDogLTQwcHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgLmVkaXQyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgYm90dG9tOiAyMDBweDtcbiAgICBjb2xvcjogI0U3MzEyMjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cblxuICBpb24tdGFicyB7XG5cbiAgICBpb24tdGFiLWJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNFNzMxMjI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIC8vIHRvcDogNjk1cHg7XG4gICAgICAvLyBsZWZ0OiAwO1xuICAgICAgLy8gbWFyZ2luOiAyMHB4IDBweDtcblxuICAgICAgLm5hdl9fdGV4dCB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgfVxuXG5cblxuICAgIH1cbiAgfVxufSJdfQ== */";
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title><i class=\"fas fa-bars bars\"></i></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main\">\n    <div class=\"text\">\n      <p>Good Morning, Marcos!</p>\n    </div>\n    <div class=\"image\">\n      <img src=\"assets/hombre.png\" />\n    </div>\n  </div>\n  <h3>gSense Reading</h3>\n  <div class=\"connect__green\">\n    <span></span>\n    <p>Connected</p>\n    <p class=\"settings\">Settings</p>\n  </div>\n  <div class=\"main__bg\">\n    <div class=\"bg__gray\">\n      <div class=\"bg__text\">Last reading at 7:05 am</div>\n      <div class=\"bg__text upper\">125 mg/dL</div>\n      <div class=\"bg__text\">October 26, 2021</div>\n    </div>\n  </div>\n  <h3>Things for Morning</h3>\n  <div class=\"edit\">Edit</div>\n\n  <div class=\"main_circles\">\n    <span class=\"circle active\"></span>\n    <span class=\"line\">-</span>\n    <span class=\"circle\"></span>\n    <span class=\"line\">-</span>\n    <span class=\"circle\"></span>\n  </div>\n  <div class=\"main__text\">\n    <div class=\"text1\">\n      <p>Check your blood sugar</p>\n    </div>\n    <div class=\"text2\">\n      <p>Take your medication</p>\n    </div>\n    <div class=\"text3\">\n      <p>Have a god breakfast</p>\n    </div>\n  </div>\n  <h3>For afternoon</h3>\n  <div class=\"edit2\">Edit</div>\n\n  <div class=\"main_circles\">\n    <span class=\"circle active\"></span>\n    <span class=\"line\">-</span>\n    <span class=\"circle\"></span>\n    <span class=\"line\">-</span>\n    <span class=\"circle\"></span>\n  </div>\n  <div class=\"main__text\">\n    <div class=\"text1\">\n      <p>Check your blood sugar</p>\n    </div>\n    <div class=\"text2\">\n      <p>Take your fruits</p>\n    </div>\n    <div class=\"text3\">\n      <p>Do exercise</p>\n    </div>\n  </div>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button>\n        <div id=\"logo\">\n          <img id=\"img\" src=\"assets/2.png\" />\n        </div>\n        <ion-label class=\"nav__text\">Home</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button>\n        <div id=\"logo\">\n          <img id=\"img\" src=\"assets/1.png\" />\n        </div>\n        <ion-label class=\"nav__text\">Services</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button>\n        <div id=\"logo\">\n          <img id=\"img\" src=\"assets/3.png\" />\n        </div>\n        <ion-label class=\"nav__text\">Appointment</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button>\n        <div id=\"logo\">\n          <img id=\"img\" src=\"assets/bars.png\" />\n        </div>\n        <ion-label class=\"nav__text\">Metrics</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_feature_home_home_module_ts-es5.js.map