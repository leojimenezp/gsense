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


      __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  --background: #d8d8d8;\n  text-transform: none;\n  text-transform: initial;\n  color: white;\n  height: 100%;\n}\n\nion-toolbar .bars {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 20px;\n}\n\nion-content {\n  --background: #fbfbfb;\n  height: 100%;\n}\n\nion-content .main_cit {\n  display: flex;\n  width: 90%;\n  margin: 10px auto;\n  justify-content: space-between;\n}\n\nion-content .main {\n  display: flex;\n  width: 90%;\n  margin: 15px auto;\n  justify-content: space-between;\n}\n\nion-content .main .text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n  color: aliceblue;\n  letter-spacing: 0.02em;\n  color: #000000;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nion-content .main .image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 57px;\n  height: 57px;\n  border: 1px solid #c3c4c4;\n  border-radius: 50%;\n  flex-flow: row wrap;\n}\n\nion-content .main_cita .image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 300px;\n}\n\nion-content h3 {\n  width: 90%;\n  margin: 8px auto;\n  color: #757575;\n  font-weight: bold;\n  font-size: 15px;\n}\n\nion-content .connect__green {\n  display: flex;\n  width: 88%;\n  margin: 6px auto;\n}\n\nion-content .connect__device a {\n  display: flex;\n  width: 88%;\n  margin: 1px auto;\n  color: #000000;\n  font-size: 13px;\n  text-decoration: underline;\n}\n\nion-content .connect__green span {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  background: #55be93;\n  border-radius: 50%;\n  margin-top: 4px;\n}\n\nion-content .space {\n  margin-bottom: 10px;\n}\n\nion-content .connect__green .settings {\n  position: absolute;\n  right: 20px;\n  top: 162px;\n  color: #2e2e2e;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .connect__green p {\n  color: #a0a0a0;\n  font-size: 13px;\n  font-weight: 400;\n  margin-left: 5px;\n}\n\nion-content .main__bg {\n  width: 100%;\n  margin: auto;\n}\n\nion-content .main__bg_espe {\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\nion-content .bg__gray {\n  width: 90%;\n  height: 126px;\n  filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.15));\n  border-radius: 20px;\n  background: #ffffff;\n  margin: 15px auto;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  font-size: 13px;\n}\n\nion-content .bg__text {\n  margin: 5px 0px;\n  color: #a0a0a0;\n}\n\nion-content .bg__text_espe {\n  margin: 5px 0px;\n  color: #000000;\n}\n\nion-content .btn {\n  margin-top: 20px;\n  width: 90%;\n  padding: 18px 20px;\n  background: #222222;\n  border-radius: 10px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: white;\n}\n\nion-content .upper {\n  font-size: 25px;\n  font-weight: bold;\n  color: #000000;\n}\n\nion-content .edit {\n  margin-top: 10px;\n  color: #5e5e5e;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .main_circles {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: 15px 50px;\n}\n\nion-content .main_circles .circle {\n  width: 11px;\n  height: 11px;\n  background: #d8d8d8;\n  border-radius: 50%;\n}\n\nion-content .main_circles .active {\n  background: #5e5e5e;\n}\n\nion-content .main_circles .line {\n  border: 1px solid #d8d8d8;\n  width: 1px;\n  height: 50px;\n  margin-left: 4.5px;\n  font-weight: bold;\n}\n\nion-content .main__text {\n  position: relative;\n  width: 100%;\n  height: 10%;\n  color: black;\n}\n\nion-content .text1 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -148px;\n  color: #757575;\n  background: #ffffff;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .text2 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -96px;\n  color: #757575;\n  background: #ffffff;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .text3 {\n  position: absolute;\n  width: 272px;\n  height: 32px;\n  left: 80px;\n  top: -40px;\n  color: #757575;\n  background: #ffffff;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 32px;\n}\n\nion-content .edit2 {\n  margin-top: 10px;\n  color: #5e5e5e;\n  text-decoration: underline;\n  font-size: 13px;\n}\n\nion-content .info {\n  display: flex;\n  width: 90%;\n  flex-direction: row;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzZXNvcmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQWE7RUFDYixvQkFBdUI7RUFBdkIsdUJBQXVCO0VBQ3ZCLFlBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFMQTtFQU9JLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0FBRXRCOztBQUVBO0VBQ0UscUJBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBSEE7RUFLSSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFFbEM7O0FBVkE7RUFZSSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFFbEM7O0FBakJBO0VBbUJJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUVuQjs7QUE3QkE7RUErQkksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUV2Qjs7QUF4Q0E7RUF5Q0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7QUFHakI7O0FBaERBO0VBaURJLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBR25COztBQXhEQTtFQXlESSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtBQUdwQjs7QUE5REE7RUE4REksYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZiwwQkFBMEI7QUFJOUI7O0FBdkVBO0VBdUVJLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUluQjs7QUFoRkE7RUFnRkksbUJBQW1CO0FBSXZCOztBQXBGQTtFQW9GSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGVBQWU7QUFJbkI7O0FBN0ZBO0VBNkZJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUlwQjs7QUFwR0E7RUFvR0ksV0FBVztFQUNYLFlBQVk7QUFJaEI7O0FBekdBO0VBd0dJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0FBS2pCOztBQWpIQTtFQWdISSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNEQUFzRDtFQUN0RCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUtuQjs7QUEvSEE7RUE4SEksZUFBZTtFQUNmLGNBQWM7QUFLbEI7O0FBcElBO0VBa0lJLGVBQWU7RUFDZixjQUFjO0FBTWxCOztBQXpJQTtFQXdJSSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtBQUtoQjs7QUFwSkE7RUFtSkksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBS2xCOztBQTFKQTtFQXlKSSxnQkFBZ0I7RUFFaEIsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixlQUFlO0FBSW5COztBQWpLQTtFQWlLSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixpQkFBaUI7QUFJckI7O0FBeEtBO0VBd0tJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUl0Qjs7QUEvS0E7RUErS0ksbUJBQW1CO0FBSXZCOztBQW5MQTtFQW1MSSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBSXJCOztBQTNMQTtFQTJMSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFtQjtBQUl2Qjs7QUFsTUE7RUFrTUksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBSXJCOztBQS9NQTtFQStNSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFJckI7O0FBNU5BO0VBNE5JLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBQ1YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUlyQjs7QUF6T0E7RUF5T0ksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsZUFBZTtBQUluQjs7QUFoUEE7RUFnUEksYUFBYTtFQUNiLFVBQVU7RUFDVixtQkFBbUI7QUFJdkIiLCJmaWxlIjoiYXNlc29yYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2Q4ZDhkODtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogMTAwJTtcblxuICAuYmFycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5tYWluX2NpdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLm1haW4gLnRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNDUlO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAubWFpbiAuaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNTdweDtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MzYzRjNDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgfVxuICAubWFpbl9jaXRhIC5pbWFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG5cbiAgaDMge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiA4cHggYXV0bztcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICAuY29ubmVjdF9fZ3JlZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDg4JTtcbiAgICBtYXJnaW46IDZweCBhdXRvO1xuICB9XG4gIC5jb25uZWN0X19kZXZpY2UgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogODglO1xuICAgIG1hcmdpbjogMXB4IGF1dG87XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbiAgLmNvbm5lY3RfX2dyZWVuIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogN3B4O1xuICAgIGhlaWdodDogN3B4O1xuICAgIGJhY2tncm91bmQ6ICM1NWJlOTM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgfVxuXG4gIC5zcGFjZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5jb25uZWN0X19ncmVlbiAuc2V0dGluZ3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDE2MnB4O1xuICAgIGNvbG9yOiAjMmUyZTJlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5jb25uZWN0X19ncmVlbiBwIHtcbiAgICBjb2xvcjogI2EwYTBhMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG5cbiAgLm1haW5fX2JnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLm1haW5fX2JnX2VzcGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuYmdfX2dyYXkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAxMjZweDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5iZ19fdGV4dCB7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICAgIGNvbG9yOiAjYTBhMGEwO1xuICB9XG4gIC5iZ19fdGV4dF9lc3BlIHtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cblxuICAuYnRuIHtcbiAgICBcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMThweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC51cHBlciB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG5cbiAgLmVkaXQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICBjb2xvcjogIzVlNWU1ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cblxuICAubWFpbl9jaXJjbGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDE1cHggNTBweDtcbiAgfVxuXG4gIC5tYWluX2NpcmNsZXMgLmNpcmNsZSB7XG4gICAgd2lkdGg6IDExcHg7XG4gICAgaGVpZ2h0OiAxMXB4O1xuICAgIGJhY2tncm91bmQ6ICNkOGQ4ZDg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLm1haW5fY2lyY2xlcyAuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWU1ZTVlO1xuICB9XG5cbiAgLm1haW5fY2lyY2xlcyAubGluZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogNC41cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAubWFpbl9fdGV4dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAlO1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIH1cblxuICAudGV4dDEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjcycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgdG9wOiAtMTQ4cHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgLnRleHQyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI3MnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiA4MHB4O1xuICAgIHRvcDogLTk2cHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgLnRleHQzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI3MnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiA4MHB4O1xuICAgIHRvcDogLTQwcHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgLmVkaXQyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiAjNWU1ZTVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuIl19 */";
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


      __webpack_exports__["default"] = "<ion-header>\n  <!--ion-toolbar>\n    <ion-title><i class=\"fas fa-bars bars\"></i></ion-title>\n  </ion-toolbar-->\n</ion-header>\n\n<ion-content>\n  <ion-infinite-scroll>\n    <div class=\"main\">\n      <div class=\"main__bg\" routerLink=\"/schedule\">\n        <div class=\"bg__gray\">\n          <i class=\"fab fa-arrow-up x1\"></i>\n          <div class=\"bg__text\">Nueva cita</div>\n        </div>\n      </div>\n      <div class=\"main__bg\">\n        <div class=\"bg__gray\">\n          <div class=\"bg__text\">Cita actual</div>\n        </div>\n      </div>\n      <div class=\"main__bg\">\n        <div class=\"bg__gray\">\n          <div class=\"bg__text\">Historial</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"main__bg_espe\">\n      <div class=\"bg__gray\">\n        <div class=\"bg__text\">\n          Tu plan renuévate incluye el número de pruebas que puedes realizar\n          visitando uno de nuestros laboratorios. Obtiene consultas de nuestros\n          médicos para pruebas de laboratorio específicas.\n          <div class=\"buttons\">\n            <button class=\"btn\" type=\"submit\">\n              Haz una prueba de laboratorio\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"info\">\n      <h3>Reservar una cita</h3>\n    </div>\n\n    <div class=\"main_cita\">\n      <div class=\"main__bg\" routerLink=\"/schedule\">\n        <div class=\"bg__gray\">\n          <div class=\"bg__text_espe\">Conectar con Diabético</div>\n          <div class=\"bg__text\">Cuatro visitas disponibles</div>\n          <div class=\"image\">\n            <img src=\"assets/dbtes.jpg\" />\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"main_cita\">\n      <div class=\"main__bg\" routerLink=\"/schedule\">\n        <div class=\"bg__gray\">\n          <div class=\"bg__text_espe\">Conectar con Nutricionista</div>\n          <div class=\"bg__text\">Ocho visitas disponibles</div>\n          <div class=\"image\">\n            <img src=\"assets/img-nutricion.jpg\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-infinite-scroll>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_feature_asesora_asesora_module_ts-es5.js.map