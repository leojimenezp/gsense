(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_asesora_asesora_module_ts"], {
    /***/
    15522:
    /*!***********************************************************!*\
      !*** ./src/app/feature/asesora/asesora-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsesoraPageRoutingModule": function AsesoraPageRoutingModule() {
          return (
            /* binding */
            _AsesoraPageRoutingModule
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


      var _asesora_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./asesora.page */
      70135);

      var routes = [{
        path: '',
        component: _asesora_page__WEBPACK_IMPORTED_MODULE_0__.AsesoraPage
      }];

      var _AsesoraPageRoutingModule = function AsesoraPageRoutingModule() {
        _classCallCheck(this, AsesoraPageRoutingModule);
      };

      _AsesoraPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AsesoraPageRoutingModule);
      /***/
    },

    /***/
    3183:
    /*!***************************************************!*\
      !*** ./src/app/feature/asesora/asesora.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsesoraPageModule": function AsesoraPageModule() {
          return (
            /* binding */
            _AsesoraPageModule
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


      var _asesora_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./asesora-routing.module */
      15522);
      /* harmony import */


      var _asesora_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./asesora.page */
      70135);

      var _AsesoraPageModule = function AsesoraPageModule() {
        _classCallCheck(this, AsesoraPageModule);
      };

      _AsesoraPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _asesora_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsesoraPageRoutingModule],
        declarations: [_asesora_page__WEBPACK_IMPORTED_MODULE_1__.AsesoraPage]
      })], _AsesoraPageModule);
      /***/
    },

    /***/
    70135:
    /*!*************************************************!*\
      !*** ./src/app/feature/asesora/asesora.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsesoraPage": function AsesoraPage() {
          return (
            /* binding */
            _AsesoraPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_asesora_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./asesora.page.html */
      9143);
      /* harmony import */


      var _asesora_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./asesora.page.scss */
      63952);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _AsesoraPage = /*#__PURE__*/function () {
        function AsesoraPage() {
          _classCallCheck(this, AsesoraPage);
        }

        _createClass(AsesoraPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AsesoraPage;
      }();

      _AsesoraPage.ctorParameters = function () {
        return [];
      };

      _AsesoraPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-asesora',
        template: _raw_loader_asesora_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_asesora_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AsesoraPage);
      /***/
    },

    /***/
    63952:
    /*!***************************************************!*\
      !*** ./src/app/feature/asesora/asesora.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #d8d8d8;\n  text-transform: none;\n  text-transform: initial;\n  color: white;\n  height: 100%;\n}\n\nion-toolbar .bars {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 20px;\n}\n\nion-content {\n  --background: #fbfbfb;\n  height: 100%;\n}\n\nion-content .main_cit {\n  display: flex;\n  width: 90%;\n  margin: 10px auto;\n  justify-content: space-between;\n}\n\nion-content .main {\n  display: flex;\n  width: 90%;\n  margin: 15px auto;\n  justify-content: space-between;\n}\n\nion-content .main .text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n  color: aliceblue;\n  letter-spacing: 0.02em;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nion-content .main .image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 57px;\n  height: 57px;\n  border: 1px solid #c3c4c4;\n  border-radius: 50%;\n  flex-flow: row wrap;\n}\n\nion-content .main_cita .image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 300px;\n}\n\nion-content h3 {\n  width: 90%;\n  margin: 8px auto;\n  color: #757575;\n  font-weight: bold;\n  font-size: 15px;\n}\n\nion-content .connect__green {\n  display: flex;\n  width: 88%;\n  margin: 6px auto;\n}\n\nion-content .connect__device a {\n  display: flex;\n  width: 88%;\n  margin: 1px auto;\n  color: #000000;\n  font-size: 13px;\n  text-decoration: underline;\n}\n\nion-content .connect__green span {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  background: #55be93;\n  border-radius: 50%;\n  margin-top: 4px;\n}\n\nion-content .space {\n  margin-bottom: 10px;\n}\n\nion-content .connect__green .settings {\n  position: absolute;\n  right: 20px;\n  top: 162px;\n  color: #2e2e2e;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .connect__green p {\n  color: #a0a0a0;\n  font-size: 13px;\n  font-weight: 400;\n  margin-left: 5px;\n}\n\nion-content .main__bg {\n  width: 100%;\n  margin: auto;\n}\n\nion-content .main__bg_espe {\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\nion-content .bg__gray {\n  width: 90%;\n  height: 126px;\n  filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.15));\n  border-radius: 20px;\n  background: #ffffff;\n  margin: 15px auto;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  font-size: 13px;\n}\n\nion-content .bg__text {\n  margin: 5px 0px;\n  color: #a0a0a0;\n}\n\nion-content .bg__text_espe {\n  margin: 5px 0px;\n  color: #000000;\n}\n\nion-content .btn {\n  margin-top: 20px;\n  width: 90%;\n  padding: 18px 20px;\n  background: #222222;\n  border-radius: 10px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: white;\n}\n\nion-content .upper {\n  font-size: 25px;\n  font-weight: bold;\n  color: #000000;\n}\n\nion-content .edit {\n  margin-top: 10px;\n  color: #5e5e5e;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .main_circles {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: 15px 50px;\n}\n\nion-content .main_circles .circle {\n  width: 11px;\n  height: 11px;\n  background: #d8d8d8;\n  border-radius: 50%;\n}\n\nion-content .main_circles .active {\n  background: #5e5e5e;\n}\n\nion-content .main_circles .line {\n  border: 1px solid #d8d8d8;\n  width: 1px;\n  height: 50px;\n  margin-left: 4.5px;\n  font-weight: bold;\n}\n\nion-content .main__text {\n  position: relative;\n  width: 100%;\n  height: 10%;\n  color: black;\n}\n\nion-content .text1 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -148px;\n  color: #757575;\n  background: #ffffff;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .text2 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -96px;\n  color: #757575;\n  background: #ffffff;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .text3 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -40px;\n  color: #757575;\n  background: #ffffff;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .edit2 {\n  margin-top: 10px;\n  color: #5e5e5e;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .info {\n  display: flex;\n  width: 90%;\n  flex-direction: row;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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SXZCOztBQW5MQTtFQW1MSSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBSXJCOztBQTNMQTtFQTJMSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFtQjtBQUl2Qjs7QUFsTUE7RUFrTUksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBSXJCOztBQS9NQTtFQStNSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFJckI7O0FBNU5BO0VBNE5JLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBQ1YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUlyQjs7QUF6T0E7RUF5T0ksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsZUFBZTtBQUluQjs7QUFoUEE7RUFnUEksYUFBYTtFQUNiLFVBQVU7RUFDVixtQkFBbUI7QUFJdkIiLCJmaWxlIjoiYXNlc29yYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICNkOGQ4ZDg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5iYXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5tYWluX2NpdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLm1haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5tYWluIC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4gLmltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTdweDtcclxuICAgIGhlaWdodDogNTdweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2M0YzQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIH1cclxuICAubWFpbl9jaXRhIC5pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDhweCBhdXRvO1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC5jb25uZWN0X19ncmVlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICAgIG1hcmdpbjogNnB4IGF1dG87XHJcbiAgfVxyXG4gIC5jb25uZWN0X19kZXZpY2UgYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICAgIG1hcmdpbjogMXB4IGF1dG87XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgLmNvbm5lY3RfX2dyZWVuIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzU1YmU5MztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICB9XHJcblxyXG4gIC5zcGFjZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbm5lY3RfX2dyZWVuIC5zZXR0aW5ncyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogMTYycHg7XHJcbiAgICBjb2xvcjogIzJlMmUyZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgLmNvbm5lY3RfX2dyZWVuIHAge1xyXG4gICAgY29sb3I6ICNhMGEwYTA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19iZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLm1haW5fX2JnX2VzcGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLmJnX19ncmF5IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDEyNnB4O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMjBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgLmJnX190ZXh0IHtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIGNvbG9yOiAjYTBhMGEwO1xyXG4gIH1cclxuICAuYmdfX3RleHRfZXNwZSB7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgXHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnVwcGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG5cclxuICAuZWRpdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgIGNvbG9yOiAjNWU1ZTVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9jaXJjbGVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTVweCA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fY2lyY2xlcyAuY2lyY2xlIHtcclxuICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Q4ZDhkODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5tYWluX2NpcmNsZXMgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWU1ZTVlO1xyXG4gIH1cclxuXHJcbiAgLm1haW5fY2lyY2xlcyAubGluZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0LjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3RleHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAudGV4dDEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI3MnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbGVmdDogODBweDtcclxuICAgIHRvcDogLTE0OHB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgfVxyXG5cclxuICAudGV4dDIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI3MnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbGVmdDogODBweDtcclxuICAgIHRvcDogLTk2cHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICB9XHJcblxyXG4gIC50ZXh0MyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjcycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBsZWZ0OiA4MHB4O1xyXG4gICAgdG9wOiAtNDBweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxuXHJcbiAgLmVkaXQyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogIzVlNWU1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgLmluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    9143:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/asesora/asesora.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <!--ion-toolbar>\r\n    <ion-title><i class=\"fas fa-bars bars\"></i></ion-title>\r\n  </ion-toolbar-->\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-infinite-scroll>\r\n    <div class=\"main\">\r\n      <div class=\"main__bg\" routerLink=\"/schedule\">\r\n        <div class=\"bg__gray\">\r\n          <i class=\"fab fa-arrow-up x1\"></i>\r\n          <div class=\"bg__text\">Nueva cita</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"main__bg\">\r\n        <div class=\"bg__gray\">\r\n          <div class=\"bg__text\">Cita actual</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"main__bg\">\r\n        <div class=\"bg__gray\">\r\n          <div class=\"bg__text\">Historial</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"main__bg_espe\">\r\n      <div class=\"bg__gray\">\r\n        <div class=\"bg__text\">\r\n          Tu plan renuévate incluye el número de pruebas que puedes realizar\r\n          visitando uno de nuestros laboratorios. Obtiene consultas de nuestros\r\n          médicos para pruebas de laboratorio específicas.\r\n          <div class=\"buttons\">\r\n            <button class=\"btn\" type=\"submit\">\r\n              Haz una prueba de laboratorio\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"info\">\r\n      <h3>Reservar una cita</h3>\r\n    </div>\r\n\r\n    <div class=\"main_cita\">\r\n      <div class=\"main__bg\" routerLink=\"/schedule\">\r\n        <div class=\"bg__gray\">\r\n          <div class=\"bg__text_espe\">Conectar con Diabético</div>\r\n          <div class=\"bg__text\">Cuatro visitas disponibles</div>\r\n          <div class=\"image\">\r\n            <img src=\"assets/dbtes.jpg\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"main_cita\">\r\n      <div class=\"main__bg\" routerLink=\"/schedule\">\r\n        <div class=\"bg__gray\">\r\n          <div class=\"bg__text_espe\">Conectar con Nutricionista</div>\r\n          <div class=\"bg__text\">Ocho visitas disponibles</div>\r\n          <div class=\"image\">\r\n            <img src=\"assets/img-nutricion.jpg\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_feature_asesora_asesora_module_ts-es5.js.map