(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_tabs_tabs_module_ts"], {
    /***/
    48161:
    /*!*****************************************************!*\
      !*** ./src/app/feature/tabs/tabs-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageRoutingModule": function TabsPageRoutingModule() {
          return (
            /* binding */
            _TabsPageRoutingModule
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs.page */
      8037);

      var routes = [{
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [{
          path: 'home',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_feature_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../home/home.module */
            96260)).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, {
          path: 'asesora',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_feature_asesora_asesora_module_ts-src_app_shared_constants_endPoint_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../asesora/asesora.module */
            3183)).then(function (m) {
              return m.AsesoraPageModule;
            });
          }
        }, {
          path: 'schedule',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_constants_endPoint_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_feature_schedule_schedule_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../schedule/schedule.module */
            2233)).then(function (m) {
              return m.SchedulePageModule;
            });
          }
        } // {
        // 	path: '',
        // 	redirectTo: '/app/tabs/home',
        // 	pathMatch: 'full',
        // },
        ]
      }];

      var _TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      _TabsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TabsPageRoutingModule);
      /***/
    },

    /***/
    95676:
    /*!*********************************************!*\
      !*** ./src/app/feature/tabs/tabs.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageModule": function TabsPageModule() {
          return (
            /* binding */
            _TabsPageModule
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


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs-routing.module */
      48161);
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page */
      8037);

      var _TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      _TabsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
      })], _TabsPageModule);
      /***/
    },

    /***/
    8037:
    /*!*******************************************!*\
      !*** ./src/app/feature/tabs/tabs.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPage": function TabsPage() {
          return (
            /* binding */
            _TabsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tabs.page.html */
      86733);
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page.scss */
      90435);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _TabsPage = /*#__PURE__*/function () {
        function TabsPage() {
          _classCallCheck(this, TabsPage);
        }

        _createClass(TabsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TabsPage;
      }();

      _TabsPage.ctorParameters = function () {
        return [];
      };

      _TabsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TabsPage);
      /***/
    },

    /***/
    90435:
    /*!*********************************************!*\
      !*** ./src/app/feature/tabs/tabs.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #b8b8b8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWE7QUFDakIiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2I4YjhiODtcclxufSJdfQ== */";
      /***/
    },

    /***/
    86733:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/tabs/tabs.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\" color=\"warning\">\r\n      <ion-tab-button>\r\n        <div id=\"logo\">\r\n          <img id=\"img\" src=\"assets/2.png\" />\r\n        </div>\r\n        <ion-label class=\"nav__text\">Home</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button>\r\n        <div id=\"logo\">\r\n          <img id=\"img\" src=\"assets/1.png\" />\r\n        </div>\r\n        <ion-label class=\"nav__text\">Services</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button>\r\n        <div id=\"logo\">\r\n          <img id=\"img\" src=\"assets/3.png\" />\r\n        </div>\r\n        <ion-label class=\"nav__text\">Appointment</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button>\r\n        <div id=\"logo\">\r\n          <img id=\"img\" src=\"assets/bars.png\" />\r\n        </div>\r\n        <ion-label class=\"nav__text\">Metrics</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs> -->\r\n<ion-content>\r\n\t<ion-tabs contentId=\"principal\">\r\n\t\t<ion-tab-bar slot=\"bottom\" color=\"light\">\r\n\t\t\t<ion-tab-button tab=\"home\">\r\n\t\t\t\t<img id=\"img\" src=\"assets/2.png\" />\r\n\t\t\t\t<ion-label class=\"nav__text\">Inicio</ion-label>\r\n\t\t\t</ion-tab-button>\r\n\r\n\t\t\t<ion-tab-button tab=\"asesora\">\r\n\t\t\t\t<img id=\"img\" src=\"assets/1.png\" />\r\n\t\t\t\t<ion-label class=\"nav__text\">Asesoramiento</ion-label>\r\n\t\t\t</ion-tab-button>\r\n\r\n\t\t\t<ion-tab-button tab=\"schedule\">\r\n\t\t\t\t<img id=\"img\" src=\"assets/3.png\" />\r\n\t\t\t\t<ion-label class=\"nav__text\">Cita</ion-label>\r\n\t\t\t</ion-tab-button>\r\n\r\n\t\t\t<ion-tab-button tab=\"home\">\r\n\t\t\t\t<img id=\"img\" src=\"assets/bars.png\" />\r\n\t\t\t\t<ion-label class=\"nav__text\">Metrics</ion-label>\r\n\t\t\t</ion-tab-button>\r\n\t\t</ion-tab-bar>\r\n\t</ion-tabs>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_feature_tabs_tabs_module_ts-es5.js.map