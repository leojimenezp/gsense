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


      __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #d8d8d8;\n  text-transform: none;\n  text-transform: initial;\n  color: white;\n  height: 100%;\n}\n\nion-toolbar .bars {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 20px;\n}\n\nion-content {\n  --background: #fbfbfb;\n  height: 100%;\n}\n\nion-content .main {\n  display: flex;\n  width: 90%;\n  margin: 50px auto;\n  justify-content: space-between;\n}\n\nion-content .main .text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n  color: aliceblue;\n  letter-spacing: 0.02em;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nion-content .main .image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 57px;\n  height: 57px;\n  border: 1px solid #c3c4c4;\n  border-radius: 50%;\n  flex-flow: row wrap;\n}\n\nion-content h3 {\n  width: 90%;\n  margin: 8px auto;\n  color: #757575;\n  font-weight: bold;\n  font-size: 15px;\n}\n\nion-content .connect__green {\n  display: flex;\n  width: 88%;\n  margin: 6px auto;\n}\n\nion-content .connect__device a {\n  display: flex;\n  width: 88%;\n  margin: 1px auto;\n  color: #000000;\n  font-size: 13px;\n  text-decoration: underline;\n}\n\nion-content .connect__green span {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  background: #55BE93;\n  border-radius: 50%;\n  margin-top: 4px;\n}\n\nion-content .space {\n  margin-bottom: 2em;\n}\n\nion-content .connect__green .settings {\n  position: absolute;\n  right: 12px;\n  top: 162px;\n  color: #2e2e2e;\n  font-size: 13px;\n  font-weight: bold;\n  background: #ebebeb;\n  border-radius: 8px;\n  padding: 2px 5px;\n}\n\nion-content .connect__green p {\n  color: #A0A0A0;\n  font-size: 13px;\n  font-weight: 400;\n  margin-left: 5px;\n}\n\nion-content .main__bg {\n  width: 100%;\n  margin: auto;\n}\n\nion-content .bg__gray {\n  width: 90%;\n  height: 126px;\n  filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.15));\n  border-radius: 20px;\n  background: #ffffff;\n  margin: 15px auto;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  font-size: 13px;\n}\n\nion-content .bg__text {\n  margin: 5px 0px;\n  color: #A0A0A0;\n}\n\nion-content .upper {\n  font-size: 25px;\n  font-weight: bold;\n  color: #000000;\n}\n\nion-content .edit {\n  margin-top: 10px;\n  color: #2e2e2e;\n  font-weight: bold;\n  font-size: 13px;\n}\n\nion-content .edit span {\n  color: #2e2e2e;\n  background: #ebebeb;\n  border-radius: 8px;\n  width: 8px;\n  padding: 2px 5px;\n}\n\nion-content .edit2 {\n  margin-top: 10px;\n  font-weight: bold;\n  font-size: 13px;\n}\n\nion-content .edit2 span {\n  color: #2e2e2e;\n  background: #ebebeb;\n  border-radius: 8px;\n  padding: 2px 5px;\n}\n\nion-content .main_circles {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: 15px 2em;\n}\n\nion-content .main_circles .circle {\n  width: 1em;\n  height: 1em;\n  background: #D8D8D8;\n  border-radius: 50%;\n}\n\nion-content .main_circles .active {\n  background: #353535;\n}\n\nion-content .main_circles .line {\n  border: 0.1px solid #D8D8D8;\n  width: 0.001rem;\n  height: 4em;\n  margin-left: 7px;\n}\n\nion-content .main__text {\n  position: relative;\n  width: 100%;\n  height: 10%;\n  color: black;\n}\n\nion-content .text1 {\n  position: absolute;\n  width: 272px;\n  height: 50px;\n  left: 80px;\n  top: -203px;\n  color: #000000;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 50px;\n  font-weight: bold;\n  border: 0.5px solid #f1f1f178;\n}\n\nion-content .text2 {\n  position: absolute;\n  width: 272px;\n  height: 50px;\n  left: 80px;\n  top: -130px;\n  color: #000000;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 50px;\n  font-weight: bold;\n  border: 0.5px solid #f1f1f178;\n}\n\nion-content .text3 {\n  position: absolute;\n  width: 272px;\n  height: 50px;\n  left: 80px;\n  top: -50px;\n  color: #000000;\n  background: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 50px;\n  font-weight: bold;\n  border: 0.5px solid #f1f1f178;\n}\n\nion-content .info {\n  display: flex;\n  width: 90%;\n  margin: auto;\n  flex-direction: row;\n  padding-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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RUFxTEksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFBakM7O0FBaE1BO0VBb01JLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQWpDOztBQS9NQTtFQW1OSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUFqQzs7QUE5TkE7RUFvT0ksYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUZyQiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Q4ZDhkODtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmJhcnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiBcclxuICAubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLm1haW4gLnRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbiAuaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1N3B4O1xyXG4gICAgaGVpZ2h0OiA1N3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MzYzRjNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiA4cHggYXV0bztcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuY29ubmVjdF9fZ3JlZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgICBtYXJnaW46IDZweCBhdXRvO1xyXG5cclxuICB9XHJcbiAgLmNvbm5lY3RfX2RldmljZSBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogODglO1xyXG4gICAgbWFyZ2luOiAxcHggYXV0bztcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAuY29ubmVjdF9fZ3JlZW4gc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTVCRTkzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnNwYWNlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICB9XHJcblxyXG4gIC5jb25uZWN0X19ncmVlbiAuc2V0dGluZ3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEycHg7XHJcbiAgICB0b3A6IDE2MnB4O1xyXG4gICAgY29sb3I6ICMyZTJlMmU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6cmdiKDIzNSwgMjM1LCAyMzUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMnB4IDVweDtcclxuICB9XHJcblxyXG4gIC5jb25uZWN0X19ncmVlbiBwIHtcclxuICAgIGNvbG9yOiAjQTBBMEEwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fYmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICAuYmdfX2dyYXkge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTI2cHg7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5cclxuICAuYmdfX3RleHQge1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgY29sb3I6ICNBMEEwQTA7XHJcbiAgfVxyXG5cclxuICAudXBwZXIge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gIC5lZGl0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgY29sb3I6ICMyZTJlMmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmVkaXQgc3BhbntcclxuICAgIGNvbG9yOiAjMmUyZTJlO1xyXG4gICAgYmFja2dyb3VuZDpyZ2IoMjM1LCAyMzUsIDIzNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgcGFkZGluZzogMnB4IDVweDtcclxuICB9XHJcbiAgLmVkaXQyIHtcclxuICAgXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5lZGl0MiBzcGFue1xyXG4gICAgY29sb3I6ICMyZTJlMmU7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzUsIDIzNSwgMjM1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcblxyXG4gIH1cclxuICAubWFpbl9jaXJjbGVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTVweCAyZW07XHJcbiAgfVxyXG5cclxuICAubWFpbl9jaXJjbGVzIC5jaXJjbGUge1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgYmFja2dyb3VuZDogI0Q4RDhEODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgfVxyXG5cclxuICAubWFpbl9jaXJjbGVzIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgIzM1MzUzNTtcclxuICB9XHJcblxyXG4gIC5tYWluX2NpcmNsZXMgLmxpbmUge1xyXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCAjRDhEOEQ4O1xyXG4gICAgd2lkdGg6IDAuMDAxcmVtO1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3RleHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAudGV4dDEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI3MnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbGVmdDogODBweDtcclxuICAgIHRvcDogLTIwM3B4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2YxZjFmMTc4O1xyXG4gIH1cclxuXHJcbiAgLnRleHQyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyNzJweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxlZnQ6IDgwcHg7XHJcbiAgICB0b3A6IC0xMzBweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNmMWYxZjE3ODtcclxuICB9XHJcblxyXG4gIC50ZXh0MyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjcycHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsZWZ0OiA4MHB4O1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNmMWYxZjE3ODtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLmluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxufSJdfQ== */";
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


      __webpack_exports__["default"] = "<ion-header>\r\n\t<!--ion-toolbar>\r\n    <ion-title><i class=\"fas fa-bars bars\"></i></ion-title>\r\n  </ion-toolbar-->\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-infinite-scroll>\r\n\t\t<div class=\"main\">\r\n\t\t\t<div class=\"text\">\r\n\t\t\t\t<p>Buenos Días, Diana!</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"image\">\r\n\t\t\t\t<img src=\"assets/c1@4x.png\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"connect__device\"></div>\r\n\t\t<h3>gSense Medición</h3>\r\n\t\t<div class=\"connect__green\">\r\n\t\t\t<span></span>\r\n\t\t\t<p>Conectado</p>\r\n\t\t\t<p class=\"settings\">Ajustes</p>\r\n\t\t</div>\r\n\t\t<div class=\"main__bg\">\r\n\t\t\t<div class=\"bg__gray\">\r\n\t\t\t\t<div class=\"bg__text\">Última medición a las 7:05 am</div>\r\n\t\t\t\t<div class=\"bg__text upper\">125 mg/dL</div>\r\n\t\t\t\t<div class=\"bg__text\">Octubre 26, 2021</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"info\">\r\n\t\t\t<h3>Actividades por la mañana</h3>\r\n\t\t\t<div class=\"edit\"><span>Editar</span></div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"main_circles\">\r\n\t\t\t<span class=\"circle active\"></span>\r\n\t\t\t<span class=\"line\">-</span>\r\n\t\t\t<span class=\"circle\"></span>\r\n\t\t\t<span class=\"line\">-</span>\r\n\t\t\t<span class=\"circle\"></span>\r\n\t\t</div>\r\n\t\t<div class=\"main__text\">\r\n\t\t\t<div class=\"text1\">\r\n\t\t\t\t<p>Mide el nivel de glucosa</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"text2\">\r\n\t\t\t\t<p>Toma la medición</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"text3\">\r\n\t\t\t\t<p>Ten un buen desayuno</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"info\">\r\n\t\t\t<h3>Para la tarde</h3>\r\n\t\t\t<div class=\"edit2\"><span>Editar</span></div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"space\">\r\n\t\t\t<div class=\"main_circles\">\r\n\t\t\t\t<span class=\"circle active\"></span>\r\n\t\t\t\t<span class=\"line\">-</span>\r\n\t\t\t\t<span class=\"circle\"></span>\r\n\t\t\t\t<span class=\"line\">-</span>\r\n\t\t\t\t<span class=\"circle\"></span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"main__text\">\r\n\t\t\t\t<div class=\"text1\">\r\n\t\t\t\t\t<p>Mide el nivel de glucosa</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"text2\">\r\n\t\t\t\t\t<p>Come frutas</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"text3\">\r\n\t\t\t\t\t<p>Hacer ejercicio</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ion-infinite-scroll>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_feature_home_home_module_ts-es5.js.map