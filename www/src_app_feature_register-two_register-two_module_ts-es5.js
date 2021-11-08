(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgsense"] = self["webpackChunkgsense"] || []).push([["src_app_feature_register-two_register-two_module_ts"], {
    /***/
    91147:
    /*!***********************************************************************!*\
      !*** ./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxLoadingService": function NgxLoadingService() {
          return (
            /* binding */
            _NgxLoadingService
          );
        },

        /* harmony export */
        "NgxLoadingComponent": function NgxLoadingComponent() {
          return (
            /* binding */
            _NgxLoadingComponent
          );
        },

        /* harmony export */
        "NgxLoadingModule": function NgxLoadingModule() {
          return (
            /* binding */
            _NgxLoadingModule
          );
        },

        /* harmony export */
        "NgxLoadingConfig": function NgxLoadingConfig() {
          return (
            /* binding */
            _NgxLoadingConfig
          );
        },

        /* harmony export */
        "ngxLoadingAnimationTypes": function ngxLoadingAnimationTypes() {
          return (
            /* binding */
            _ngxLoadingAnimationTypes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
       */


      var _c0 = function _c0(a0) {
        return {
          "full-screen": a0
        };
      };

      var _c1 = function _c1(a0, a1, a2, a3) {
        return {
          "border-top-color": a0,
          "border-right-color": a1,
          "border-bottom-color": a2,
          "border-left-color": a3
        };
      };

      function NgxLoadingComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (ctx_r1.config == null ? null : ctx_r1.config.fullScreenBackdrop) == true))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](4, _c1, ctx_r1.config == null ? null : ctx_r1.config.secondaryColour, ctx_r1.config == null ? null : ctx_r1.config.secondaryColour, ctx_r1.config == null ? null : ctx_r1.config.secondaryColour, ctx_r1.config == null ? null : ctx_r1.config.primaryColour));
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "background-color": a0
        };
      };

      function NgxLoadingComponent_div_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, (ctx_r2.config == null ? null : ctx_r2.config.fullScreenBackdrop) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));
        }
      }

      function NgxLoadingComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 25);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r3.config == null ? null : ctx_r3.config.primaryColour))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (ctx_r3.config == null ? null : ctx_r3.config.fullScreenBackdrop) == true));
        }
      }

      function NgxLoadingComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, (ctx_r4.config == null ? null : ctx_r4.config.fullScreenBackdrop) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));
        }
      }

      function NgxLoadingComponent_div_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, (ctx_r5.config == null ? null : ctx_r5.config.fullScreenBackdrop) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r5.config == null ? null : ctx_r5.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r5.config == null ? null : ctx_r5.config.secondaryColour));
        }
      }

      function NgxLoadingComponent_div_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, (ctx_r6.config == null ? null : ctx_r6.config.fullScreenBackdrop) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r6.config == null ? null : ctx_r6.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r6.config == null ? null : ctx_r6.config.secondaryColour));
        }
      }

      function NgxLoadingComponent_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 38);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (ctx_r7.config == null ? null : ctx_r7.config.fullScreenBackdrop) == true))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r7.config == null ? null : ctx_r7.config.primaryColour));
        }
      }

      function NgxLoadingComponent_div_0_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, (ctx_r8.config == null ? null : ctx_r8.config.fullScreenBackdrop) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r8.config == null ? null : ctx_r8.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r8.config == null ? null : ctx_r8.config.secondaryColour));
        }
      }

      var _c3 = function _c3(a0) {
        return {
          "color": a0
        };
      };

      function NgxLoadingComponent_div_0_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 42);
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (ctx_r9.config == null ? null : ctx_r9.config.fullScreenBackdrop) == true))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r9.config == null ? null : ctx_r9.config.primaryColour));
        }
      }

      function NgxLoadingComponent_div_0_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 43);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, (ctx_r10.config == null ? null : ctx_r10.config.fullScreenBackdrop) == true));
        }
      }

      function NgxLoadingComponent_div_0_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (ctx_r11.config == null ? null : ctx_r11.config.fullScreenBackdrop) == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r11.config == null ? null : ctx_r11.config.primaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx_r11.config == null ? null : ctx_r11.config.secondaryColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx_r11.config == null ? null : ctx_r11.config.tertiaryColour));
        }
      }

      function NgxLoadingComponent_div_0_ng_container_14_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function NgxLoadingComponent_div_0_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxLoadingComponent_div_0_ng_container_14_ng_container_1_Template, 1, 0, "ng-container", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.template);
        }
      }

      var _c4 = function _c4(a0, a1) {
        return {
          "border-radius": a0,
          "background-color": a1
        };
      };

      function NgxLoadingComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxLoadingComponent_div_0_div_3_Template, 1, 9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxLoadingComponent_div_0_div_4_Template, 10, 30, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxLoadingComponent_div_0_div_5_Template, 1, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxLoadingComponent_div_0_div_6_Template, 6, 18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgxLoadingComponent_div_0_div_7_Template, 3, 9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgxLoadingComponent_div_0_div_8_Template, 3, 9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgxLoadingComponent_div_0_div_9_Template, 1, 6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgxLoadingComponent_div_0_div_10_Template, 3, 9, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NgxLoadingComponent_div_0_div_11_Template, 1, 6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgxLoadingComponent_div_0_div_12_Template, 1, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgxLoadingComponent_div_0_div_13_Template, 4, 12, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgxLoadingComponent_div_0_ng_container_14_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, (ctx_r0.config == null ? null : ctx_r0.config.fullScreenBackdrop) == true))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c4, ctx_r0.config == null ? null : ctx_r0.config.backdropBorderRadius, ctx_r0.config == null ? null : ctx_r0.config.backdropBackgroundColour));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.config == null ? null : ctx_r0.config.animationType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.circle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.cubeGrid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.rotatingPlane);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.rectangleBounce);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.wanderingCubes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.doubleBounce);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.pulse);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.chasingDots);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.circleSwish);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.none);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.template);
        }
      }

      var _NgxLoadingConfig =
      /**
       * @param {?=} config
       */
      function _NgxLoadingConfig() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, _NgxLoadingConfig);

        this.backdropBorderRadius = config.backdropBorderRadius;
        this.backdropBackgroundColour = config.backdropBackgroundColour;
        this.fullScreenBackdrop = config.fullScreenBackdrop;
        this.animationType = config.animationType;
        this.primaryColour = config.primaryColour;
        this.secondaryColour = config.secondaryColour;
        this.tertiaryColour = config.tertiaryColour;
      };
      /** @type {?} */


      var _ngxLoadingAnimationTypes = {
        chasingDots: 'chasing-dots',
        circle: 'sk-circle',
        circleSwish: 'circleSwish',
        cubeGrid: 'sk-cube-grid',
        doubleBounce: 'double-bounce',
        none: 'none',
        pulse: 'pulse',
        rectangleBounce: 'rectangle-bounce',
        rotatingPlane: 'rotating-plane',
        threeBounce: 'three-bounce',
        wanderingCubes: 'wandering-cubes'
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
       */

      var _NgxLoadingService =
      /**
       * @param {?} config
       */
      function _NgxLoadingService(config) {
        _classCallCheck(this, _NgxLoadingService);

        this.config = config;
        this.loadingConfig = this.config || new _NgxLoadingConfig();
      };

      _NgxLoadingService.ɵfac = function NgxLoadingService_Factory(t) {
        return new (t || _NgxLoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('loadingConfig', 8));
      };

      _NgxLoadingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _NgxLoadingService,
        factory: _NgxLoadingService.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      _NgxLoadingService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: ['loadingConfig']
          }]
        }];
      };
      /** @nocollapse */


      _NgxLoadingService.ngInjectableDef = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function NgxLoadingService_Factory() {
          return new _NgxLoadingService((0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])("loadingConfig", 8));
        },
        token: _NgxLoadingService,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgxLoadingService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: ['loadingConfig']
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
       */


      var _NgxLoadingComponent = /*#__PURE__*/function () {
        /**
         * @param {?} LoadingService
         * @param {?} changeDetectorRef
         */
        function _NgxLoadingComponent(LoadingService, changeDetectorRef) {
          _classCallCheck(this, _NgxLoadingComponent);

          this.LoadingService = LoadingService;
          this.changeDetectorRef = changeDetectorRef;
          this.config = new _NgxLoadingConfig();
          this.defaultConfig = {
            animationType: _ngxLoadingAnimationTypes.threeBounce,
            backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)',
            backdropBorderRadius: '0px',
            fullScreenBackdrop: false,
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
          };
          this.ngxLoadingAnimationTypes = _ngxLoadingAnimationTypes;
        }
        /**
         * @return {?}
         */


        _createClass(_NgxLoadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setupConfig();
          }
          /**
           * @return {?}
           */

        }, {
          key: "setupConfig",
          value: function setupConfig() {
            for (var option in this.defaultConfig) {
              if (typeof this.config[option] === 'boolean') {
                if (this.config[option] != null) {
                  continue;
                }

                this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
              } else {
                if (this.config[option] != null) {
                  continue;
                }

                this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
              }
            }
          }
          /**
           * @param {?} show
           * @return {?}
           */

        }, {
          key: "setShow",
          value: function setShow(show) {
            this.show = show;
            this.changeDetectorRef.markForCheck();
          }
        }]);

        return _NgxLoadingComponent;
      }();

      _NgxLoadingComponent.ɵfac = function NgxLoadingComponent_Factory(t) {
        return new (t || _NgxLoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NgxLoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };

      _NgxLoadingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NgxLoadingComponent,
        selectors: [["ngx-loading"]],
        inputs: {
          config: "config",
          show: "show",
          template: "template"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "backdrop", 3, "ngClass", "ngStyle"], [3, "ngSwitch"], ["class", "spinner-circle", 3, "ngClass", "ngStyle", 4, "ngSwitchCase"], ["class", "sk-cube-grid", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-sk-rotateplane", 3, "ngStyle", "ngClass", 4, "ngSwitchCase"], ["class", "spinner-rectangle-bounce", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-wandering-cubes", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-double-bounce", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-pulse", 3, "ngClass", "ngStyle", 4, "ngSwitchCase"], ["class", "spinner-chasing-dots", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-circle-swish", 3, "ngClass", "ngStyle", 4, "ngSwitchCase"], [3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-three-bounce", 3, "ngClass", 4, "ngSwitchDefault"], [1, "spinner-circle", 3, "ngClass", "ngStyle"], [1, "sk-cube-grid", 3, "ngClass"], [1, "sk-cube", "sk-cube1", 3, "ngStyle"], [1, "sk-cube", "sk-cube2", 3, "ngStyle"], [1, "sk-cube", "sk-cube3", 3, "ngStyle"], [1, "sk-cube", "sk-cube4", 3, "ngStyle"], [1, "sk-cube", "sk-cube5", 3, "ngStyle"], [1, "sk-cube", "sk-cube6", 3, "ngStyle"], [1, "sk-cube", "sk-cube7", 3, "ngStyle"], [1, "sk-cube", "sk-cube8", 3, "ngStyle"], [1, "sk-cube", "sk-cube9", 3, "ngStyle"], [1, "spinner-sk-rotateplane", 3, "ngStyle", "ngClass"], [1, "spinner-rectangle-bounce", 3, "ngClass"], [1, "rect1", 3, "ngStyle"], [1, "rect2", 3, "ngStyle"], [1, "rect3", 3, "ngStyle"], [1, "rect4", 3, "ngStyle"], [1, "rect5", 3, "ngStyle"], [1, "spinner-wandering-cubes", 3, "ngClass"], [1, "cube1", 3, "ngStyle"], [1, "cube2", 3, "ngStyle"], [1, "spinner-double-bounce", 3, "ngClass"], [1, "double-bounce1", 3, "ngStyle"], [1, "double-bounce2", 3, "ngStyle"], [1, "spinner-pulse", 3, "ngClass", "ngStyle"], [1, "spinner-chasing-dots", 3, "ngClass"], [1, "dot1", 3, "ngStyle"], [1, "dot2", 3, "ngStyle"], [1, "spinner-circle-swish", 3, "ngClass", "ngStyle"], [3, "ngClass"], [1, "spinner-three-bounce", 3, "ngClass"], [1, "bounce1", 3, "ngStyle"], [1, "bounce2", 3, "ngStyle"], [1, "bounce3", 3, "ngStyle"], [4, "ngTemplateOutlet"]],
        template: function NgxLoadingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxLoadingComponent_div_0_Template, 15, 19, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
        styles: [".backdrop[_ngcontent-%COMP%] {\n        z-index: 1999;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n      }\n\n      \n      .spinner-circle[_ngcontent-%COMP%], .spinner-circle[_ngcontent-%COMP%]:after {\n          border-radius: 50%;\n          width: 10em;\n          height: 10em;\n      }\n\n      .spinner-circle[_ngcontent-%COMP%] {\n          font-size: 6px;\n          border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-left: 1.1em solid #ffffff;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n      }\n      @-webkit-keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n      @keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n\n      \n      .spinner-circle-swish[_ngcontent-%COMP%] {\n          font-size: 60px;\n          overflow: hidden;\n          width: 1em;\n          height: 1em;\n          z-index: 2000;\n          border-radius: 50%;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n          animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n        }\n        @-webkit-keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @-webkit-keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n        @keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n\n      \n      .sk-cube-grid[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%] {\n          width: 33%;\n          height: 33%;\n          background-color: #333;\n          float: left;\n          -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube1[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube5[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube6[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube7[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube8[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube9[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      @-webkit-keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      @keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      \n      .spinner-double-bounce[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n          background-color: #333;\n          opacity: 0.6;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n      }\n\n      .double-bounce2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n      }\n\n      \n      .spinner-pulse[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          background-color: #333;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          border-radius: 100%;\n          -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n          animation: sk-scaleout 1.0s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-scaleout {\n          0% { -webkit-transform: scale(0) }\n          100% {\n            -webkit-transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      @keyframes sk-scaleout {\n          0% {\n            -webkit-transform: scale(0);\n            transform: scale(0);\n          } 100% {\n            -webkit-transform: scale(1.0);\n            transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      \n      .spinner-three-bounce[_ngcontent-%COMP%] {\n          width: 70px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 20px;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-three-bounce[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n          width: 18px;\n          height: 18px;\n          background-color: #ffffff;\n\n          border-radius: 100%;\n          display: inline-block;\n          -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n          animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      }\n\n      .spinner-three-bounce[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n      }\n\n      .spinner-three-bounce[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n      }\n\n      @-webkit-keyframes sk-bouncedelay {\n          0%, 80%, 100% { -webkit-transform: scale(0) }\n          40% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bouncedelay {\n          0%, 80%, 100% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n          } 40% {\n              -webkit-transform: scale(1.0);\n              transform: scale(1.0);\n          }\n      }\n\n      \n      .spinner-sk-rotateplane[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          background-color: #ffffff;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n          animation: sk-rotateplane 1.2s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-rotateplane {\n          0% { -webkit-transform: perspective(120px) }\n          50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n          100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n      }\n\n      @keyframes sk-rotateplane {\n          0% {\n              transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n          } 50% {\n              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n          } 100% {\n              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n              -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n          }\n      }\n\n      \n      .spinner-rectangle-bounce[_ngcontent-%COMP%] {\n          width: 50px;\n          height: 40px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n          background-color: #ffffff;\n          height: 100%;\n          width: 6px;\n          display: inline-block;\n          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n          animation: sk-stretchdelay 1.2s infinite ease-in-out;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect3[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect4[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect5[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n      }\n\n      @-webkit-keyframes sk-stretchdelay {\n          0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n          20% { -webkit-transform: scaleY(1.0) }\n      }\n\n      @keyframes sk-stretchdelay {\n          0%, 40%, 100% {\n              transform: scaleY(0.4);\n              -webkit-transform: scaleY(0.4);\n          }  20% {\n              transform: scaleY(1.0);\n              -webkit-transform: scaleY(1.0);\n          }\n      }\n\n      \n      .spinner-wandering-cubes[_ngcontent-%COMP%] {\n          width: 60px;\n          height: 58px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .cube1[_ngcontent-%COMP%], .cube2[_ngcontent-%COMP%] {\n          background-color: #ffffff;\n          width: 15px;\n          height: 15px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n          animation: sk-cubemove 1.8s infinite ease-in-out;\n      }\n\n      .cube2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      @-webkit-keyframes sk-cubemove {\n          25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\n          50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\n          75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\n          100% { -webkit-transform: rotate(-360deg) }\n      }\n\n      @keyframes sk-cubemove {\n          25% {\n              transform: translateX(42px) rotate(-90deg) scale(0.5);\n              -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n          } 50% {\n              transform: translateX(42px) translateY(42px) rotate(-179deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n          } 50.1% {\n              transform: translateX(42px) translateY(42px) rotate(-180deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n          } 75% {\n              transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n              -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n          } 100% {\n              transform: rotate(-360deg);\n              -webkit-transform: rotate(-360deg);\n          }\n      }\n\n      \n      .sk-circle[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n        }\n        .sk-circle[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%] {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          left: 0;\n          top: 0;\n        }\n        .sk-circle[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]:before {\n          content: '';\n          display: block;\n          margin: 0 auto;\n          width: 15%;\n          height: 15%;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n                  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n        }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle2[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(30deg);\n              -ms-transform: rotate(30deg);\n                  transform: rotate(30deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle3[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(60deg);\n              -ms-transform: rotate(60deg);\n                  transform: rotate(60deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle4[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(90deg);\n              -ms-transform: rotate(90deg);\n                  transform: rotate(90deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle5[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(120deg);\n              -ms-transform: rotate(120deg);\n                  transform: rotate(120deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle6[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(150deg);\n              -ms-transform: rotate(150deg);\n                  transform: rotate(150deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle7[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(180deg);\n              -ms-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle8[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(210deg);\n              -ms-transform: rotate(210deg);\n                  transform: rotate(210deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle9[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(240deg);\n              -ms-transform: rotate(240deg);\n                  transform: rotate(240deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle10[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(270deg);\n              -ms-transform: rotate(270deg);\n                  transform: rotate(270deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle11[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(300deg);\n              -ms-transform: rotate(300deg);\n                  transform: rotate(300deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle12[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(330deg);\n              -ms-transform: rotate(330deg);\n                  transform: rotate(330deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle2[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -1.1s;\n                  animation-delay: -1.1s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle3[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -1s;\n                  animation-delay: -1s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle4[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.9s;\n                  animation-delay: -0.9s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle5[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.8s;\n                  animation-delay: -0.8s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle6[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.7s;\n                  animation-delay: -0.7s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle7[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.6s;\n                  animation-delay: -0.6s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle8[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.5s;\n                  animation-delay: -0.5s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle9[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.4s;\n                  animation-delay: -0.4s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle10[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.3s;\n                  animation-delay: -0.3s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle11[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.2s;\n                  animation-delay: -0.2s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle12[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.1s;\n                  animation-delay: -0.1s; }\n\n        @-webkit-keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        @keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        \n        .spinner-chasing-dots[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          text-align: center;\n          -webkit-animation: sk-rotate 2.0s infinite linear;\n          animation: sk-rotate 2.0s infinite linear;\n        }\n\n        .dot1[_ngcontent-%COMP%], .dot2[_ngcontent-%COMP%] {\n          width: 60%;\n          height: 60%;\n          display: inline-block;\n          position: absolute;\n          top: 0;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n        }\n\n        .dot2[_ngcontent-%COMP%] {\n          top: auto;\n          bottom: 0;\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n        }\n\n        @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}\n        @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}\n\n        @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n        }\n\n        @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n        }\n\n      .full-screen[_ngcontent-%COMP%] {\n          position: fixed;\n          position: -ms-page;\n      }"]
      });
      /** @nocollapse */

      _NgxLoadingComponent.ctorParameters = function () {
        return [{
          type: _NgxLoadingService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }];
      };

      _NgxLoadingComponent.propDecorators = {
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgxLoadingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'ngx-loading',
            template: "\n    <div *ngIf=\"show\">\n      <div class=\"backdrop\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'border-radius': config?.backdropBorderRadius, 'background-color': config?.backdropBackgroundColour}\"></div>\n\n      <div [ngSwitch]=\"config?.animationType\">\n        <div class=\"spinner-circle\" *ngSwitchCase=\"ngxLoadingAnimationTypes.circle\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"\n          [ngStyle]=\"{'border-top-color': config?.secondaryColour, 'border-right-color': config?.secondaryColour, 'border-bottom-color': config?.secondaryColour, 'border-left-color': config?.primaryColour}\">\n        </div>\n\n        <div *ngSwitchCase=\"ngxLoadingAnimationTypes.cubeGrid\" class=\"sk-cube-grid\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"sk-cube sk-cube1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube2\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube3\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube4\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube5\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube6\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube7\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube8\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube9\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-sk-rotateplane\" *ngSwitchCase=\"ngxLoadingAnimationTypes.rotatingPlane\" [ngStyle]=\"{'background-color': config?.primaryColour}\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"></div>\n\n        <div class=\"spinner-rectangle-bounce\" *ngSwitchCase=\"ngxLoadingAnimationTypes.rectangleBounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"rect1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect2\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect3\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect4\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect5\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-wandering-cubes\" *ngSwitchCase=\"ngxLoadingAnimationTypes.wanderingCubes\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"cube1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"cube2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-double-bounce\" *ngSwitchCase=\"ngxLoadingAnimationTypes.doubleBounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"double-bounce1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"double-bounce2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-pulse\" *ngSwitchCase=\"ngxLoadingAnimationTypes.pulse\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n\n        <div class=\"spinner-chasing-dots\" *ngSwitchCase=\"ngxLoadingAnimationTypes.chasingDots\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"dot1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"dot2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-circle-swish\" *ngSwitchCase=\"ngxLoadingAnimationTypes.circleSwish\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'color': config?.primaryColour}\"></div>\n\n        <div *ngSwitchCase=\"ngxLoadingAnimationTypes.none\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"></div>\n\n        <div *ngSwitchDefault class=\"spinner-three-bounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"bounce1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"bounce2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n          <div class=\"bounce3\" [ngStyle]=\"{'background-color': config?.tertiaryColour}\"></div>\n        </div>\n        \n        <ng-container *ngIf=\"template\">\n            <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n        </ng-container>\n      </div>\n    </div>\n  ",
            styles: ["\n      .backdrop {\n        z-index: 1999;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n      }\n\n      /* Spinner Circle styles */\n      .spinner-circle,\n      .spinner-circle:after {\n          border-radius: 50%;\n          width: 10em;\n          height: 10em;\n      }\n\n      .spinner-circle {\n          font-size: 6px;\n          border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-left: 1.1em solid #ffffff;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n      }\n      @-webkit-keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n      @keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n\n      /* Circle Swish styles */\n      .spinner-circle-swish {\n          font-size: 60px;\n          overflow: hidden;\n          width: 1em;\n          height: 1em;\n          z-index: 2000;\n          border-radius: 50%;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n          animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n        }\n        @-webkit-keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @-webkit-keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n        @keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n\n      /* Cube Grid styles */\n      .sk-cube-grid {\n          width: 40px;\n          height: 40px;\n\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .sk-cube-grid .sk-cube {\n          width: 33%;\n          height: 33%;\n          background-color: #333;\n          float: left;\n          -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n      }\n\n      .sk-cube-grid .sk-cube1 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid .sk-cube2 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid .sk-cube3 {\n          -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n      }\n\n      .sk-cube-grid .sk-cube4 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid .sk-cube5 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid .sk-cube6 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid .sk-cube7 {\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n      }\n\n      .sk-cube-grid .sk-cube8 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid .sk-cube9 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      @-webkit-keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      @keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      /* Double Bounce styles */\n      .spinner-double-bounce {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .double-bounce1, .double-bounce2 {\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n          background-color: #333;\n          opacity: 0.6;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n      }\n\n      .double-bounce2 {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n      }\n\n      /* Pulse styles */\n      .spinner-pulse {\n          width: 40px;\n          height: 40px;\n          background-color: #333;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          border-radius: 100%;\n          -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n          animation: sk-scaleout 1.0s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-scaleout {\n          0% { -webkit-transform: scale(0) }\n          100% {\n            -webkit-transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      @keyframes sk-scaleout {\n          0% {\n            -webkit-transform: scale(0);\n            transform: scale(0);\n          } 100% {\n            -webkit-transform: scale(1.0);\n            transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      /* Three Bounce styles */\n      .spinner-three-bounce {\n          width: 70px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 20px;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-three-bounce > div {\n          width: 18px;\n          height: 18px;\n          background-color: #ffffff;\n\n          border-radius: 100%;\n          display: inline-block;\n          -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n          animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      }\n\n      .spinner-three-bounce .bounce1 {\n          -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n      }\n\n      .spinner-three-bounce .bounce2 {\n          -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n      }\n\n      @-webkit-keyframes sk-bouncedelay {\n          0%, 80%, 100% { -webkit-transform: scale(0) }\n          40% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bouncedelay {\n          0%, 80%, 100% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n          } 40% {\n              -webkit-transform: scale(1.0);\n              transform: scale(1.0);\n          }\n      }\n\n      /* Rotate Plane styles */\n      .spinner-sk-rotateplane {\n          width: 40px;\n          height: 40px;\n          background-color: #ffffff;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n          animation: sk-rotateplane 1.2s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-rotateplane {\n          0% { -webkit-transform: perspective(120px) }\n          50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n          100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n      }\n\n      @keyframes sk-rotateplane {\n          0% {\n              transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n          } 50% {\n              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n          } 100% {\n              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n              -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n          }\n      }\n\n      /* Rectangle Bounce styles*/\n      .spinner-rectangle-bounce {\n          width: 50px;\n          height: 40px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-rectangle-bounce > div {\n          background-color: #ffffff;\n          height: 100%;\n          width: 6px;\n          display: inline-block;\n          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n          animation: sk-stretchdelay 1.2s infinite ease-in-out;\n      }\n\n      .spinner-rectangle-bounce .rect2 {\n          -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n      }\n\n      .spinner-rectangle-bounce .rect3 {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      .spinner-rectangle-bounce .rect4 {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      .spinner-rectangle-bounce .rect5 {\n          -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n      }\n\n      @-webkit-keyframes sk-stretchdelay {\n          0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n          20% { -webkit-transform: scaleY(1.0) }\n      }\n\n      @keyframes sk-stretchdelay {\n          0%, 40%, 100% {\n              transform: scaleY(0.4);\n              -webkit-transform: scaleY(0.4);\n          }  20% {\n              transform: scaleY(1.0);\n              -webkit-transform: scaleY(1.0);\n          }\n      }\n\n      /* Wandering Cubes styles */\n      .spinner-wandering-cubes {\n          width: 60px;\n          height: 58px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .cube1, .cube2 {\n          background-color: #ffffff;\n          width: 15px;\n          height: 15px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n          animation: sk-cubemove 1.8s infinite ease-in-out;\n      }\n\n      .cube2 {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      @-webkit-keyframes sk-cubemove {\n          25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\n          50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\n          75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\n          100% { -webkit-transform: rotate(-360deg) }\n      }\n\n      @keyframes sk-cubemove {\n          25% {\n              transform: translateX(42px) rotate(-90deg) scale(0.5);\n              -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n          } 50% {\n              transform: translateX(42px) translateY(42px) rotate(-179deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n          } 50.1% {\n              transform: translateX(42px) translateY(42px) rotate(-180deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n          } 75% {\n              transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n              -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n          } 100% {\n              transform: rotate(-360deg);\n              -webkit-transform: rotate(-360deg);\n          }\n      }\n\n      /* Circle styles */\n      .sk-circle {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n        }\n        .sk-circle .sk-child {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          left: 0;\n          top: 0;\n        }\n        .sk-circle .sk-child:before {\n          content: '';\n          display: block;\n          margin: 0 auto;\n          width: 15%;\n          height: 15%;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n                  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n        }\n        .sk-circle .sk-circle2 {\n          -webkit-transform: rotate(30deg);\n              -ms-transform: rotate(30deg);\n                  transform: rotate(30deg); }\n        .sk-circle .sk-circle3 {\n          -webkit-transform: rotate(60deg);\n              -ms-transform: rotate(60deg);\n                  transform: rotate(60deg); }\n        .sk-circle .sk-circle4 {\n          -webkit-transform: rotate(90deg);\n              -ms-transform: rotate(90deg);\n                  transform: rotate(90deg); }\n        .sk-circle .sk-circle5 {\n          -webkit-transform: rotate(120deg);\n              -ms-transform: rotate(120deg);\n                  transform: rotate(120deg); }\n        .sk-circle .sk-circle6 {\n          -webkit-transform: rotate(150deg);\n              -ms-transform: rotate(150deg);\n                  transform: rotate(150deg); }\n        .sk-circle .sk-circle7 {\n          -webkit-transform: rotate(180deg);\n              -ms-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n        .sk-circle .sk-circle8 {\n          -webkit-transform: rotate(210deg);\n              -ms-transform: rotate(210deg);\n                  transform: rotate(210deg); }\n        .sk-circle .sk-circle9 {\n          -webkit-transform: rotate(240deg);\n              -ms-transform: rotate(240deg);\n                  transform: rotate(240deg); }\n        .sk-circle .sk-circle10 {\n          -webkit-transform: rotate(270deg);\n              -ms-transform: rotate(270deg);\n                  transform: rotate(270deg); }\n        .sk-circle .sk-circle11 {\n          -webkit-transform: rotate(300deg);\n              -ms-transform: rotate(300deg);\n                  transform: rotate(300deg); }\n        .sk-circle .sk-circle12 {\n          -webkit-transform: rotate(330deg);\n              -ms-transform: rotate(330deg);\n                  transform: rotate(330deg); }\n        .sk-circle .sk-circle2:before {\n          -webkit-animation-delay: -1.1s;\n                  animation-delay: -1.1s; }\n        .sk-circle .sk-circle3:before {\n          -webkit-animation-delay: -1s;\n                  animation-delay: -1s; }\n        .sk-circle .sk-circle4:before {\n          -webkit-animation-delay: -0.9s;\n                  animation-delay: -0.9s; }\n        .sk-circle .sk-circle5:before {\n          -webkit-animation-delay: -0.8s;\n                  animation-delay: -0.8s; }\n        .sk-circle .sk-circle6:before {\n          -webkit-animation-delay: -0.7s;\n                  animation-delay: -0.7s; }\n        .sk-circle .sk-circle7:before {\n          -webkit-animation-delay: -0.6s;\n                  animation-delay: -0.6s; }\n        .sk-circle .sk-circle8:before {\n          -webkit-animation-delay: -0.5s;\n                  animation-delay: -0.5s; }\n        .sk-circle .sk-circle9:before {\n          -webkit-animation-delay: -0.4s;\n                  animation-delay: -0.4s; }\n        .sk-circle .sk-circle10:before {\n          -webkit-animation-delay: -0.3s;\n                  animation-delay: -0.3s; }\n        .sk-circle .sk-circle11:before {\n          -webkit-animation-delay: -0.2s;\n                  animation-delay: -0.2s; }\n        .sk-circle .sk-circle12:before {\n          -webkit-animation-delay: -0.1s;\n                  animation-delay: -0.1s; }\n\n        @-webkit-keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        @keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        /* Chasing Dots styles */\n        .spinner-chasing-dots {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          text-align: center;\n          -webkit-animation: sk-rotate 2.0s infinite linear;\n          animation: sk-rotate 2.0s infinite linear;\n        }\n\n        .dot1, .dot2 {\n          width: 60%;\n          height: 60%;\n          display: inline-block;\n          position: absolute;\n          top: 0;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n        }\n\n        .dot2 {\n          top: auto;\n          bottom: 0;\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n        }\n\n        @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}\n        @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}\n\n        @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n        }\n\n        @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n        }\n\n      .full-screen {\n          position: fixed;\n          position: -ms-page;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _NgxLoadingService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }];
        }, {
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
       */


      var _NgxLoadingModule = /*#__PURE__*/function () {
        function _NgxLoadingModule() {
          _classCallCheck(this, _NgxLoadingModule);
        }

        _createClass(_NgxLoadingModule, null, [{
          key: "forRoot",
          value:
          /**
           * @param {?} loadingConfig
           * @return {?}
           */
          function forRoot(loadingConfig) {
            return {
              ngModule: _NgxLoadingModule,
              providers: [{
                provide: 'loadingConfig',
                useValue: loadingConfig
              }]
            };
          }
        }]);

        return _NgxLoadingModule;
      }();

      _NgxLoadingModule.ɵfac = function NgxLoadingModule_Factory(t) {
        return new (t || _NgxLoadingModule)();
      };

      _NgxLoadingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _NgxLoadingModule
      });
      _NgxLoadingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgxLoadingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
            declarations: [_NgxLoadingComponent],
            exports: [_NgxLoadingComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_NgxLoadingModule, {
          declarations: function declarations() {
            return [_NgxLoadingComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule];
          },
          exports: function exports() {
            return [_NgxLoadingComponent];
          }
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
       */
      //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRpbmcuanMiLCJzb3VyY2VzIjpbIm5neC1sb2FkaW5nL2xpYi9uZ3gtbG9hZGluZy1jb25maWcudHMiLCJuZ3gtbG9hZGluZy9saWIvbmd4LWxvYWRpbmcuc2VydmljZS50cyIsIm5neC1sb2FkaW5nL2xpYi9uZ3gtbG9hZGluZy5jb21wb25lbnQudHMiLCJuZ3gtbG9hZGluZy9saWIvbmd4LWxvYWRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BV2EsZ0JBQWdCO0FBQUk7QUFBUztBQUNuQztBQUFTLElBU1osWUFBWSxTQUE0QixFQUFFO0FBQzlDLFFBQVEsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztBQUNoRSxRQUFRLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7QUFDeEUsUUFBUSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0FBQzVELFFBQVEsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO0FBQ2xELFFBQVEsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO0FBQ2xELFFBQVEsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO0FBQ3RELFFBQVEsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO0FBQ3BELEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSxNQUFhLHdCQUF3QixHQUFHO0FBQ3hDLElBQUksV0FBVyxFQUFFLGNBQWM7QUFDL0IsSUFBSSxNQUFNLEVBQUUsV0FBVztBQUN2QixJQUFJLFdBQVcsRUFBRSxhQUFhO0FBQzlCLElBQUksUUFBUSxFQUFFLGNBQWM7QUFDNUIsSUFBSSxZQUFZLEVBQUUsZUFBZTtBQUNqQyxJQUFJLElBQUksRUFBRSxNQUFNO0FBQ2hCLElBQUksS0FBSyxFQUFFLE9BQU87QUFDbEIsSUFBSSxlQUFlLEVBQUUsa0JBQWtCO0FBQ3ZDLElBQUksYUFBYSxFQUFFLGdCQUFnQjtBQUNuQyxJQUFJLFdBQVcsRUFBRSxjQUFjO0FBQy9CLElBQUksY0FBYyxFQUFFLGlCQUFpQjtBQUNyQyxDQUFDO0FBQUU7QUFDSDtBQUFLO0FBQW1DO0FBQW1FO0FDN0MzRyxNQU1hLGlCQUFpQjtBQUM5QjtBQUFTO0FBQTBCO0FBQ25DLElBQ0UsWUFBeUQsTUFBeUI7QUFDcEYsUUFEMkQsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7QUFBRSxRQUNsRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0FBQy9ELEtBQUc7QUFDSDsrQ0FUQyxVQUFVLFNBQUMsbUJBQ1YsVUFBVSxFQUFFLE1BQU0sZUFDbkI7cUpBQ0s7QUFBRTtBQUFvQjtBQUNVLDRDQUV2QixRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7QUFBUztBQUFJOzs7Ozs7Ozs7OztrQ0FJeUU7QUFBQztBQUFDO0FBQUs7QUFBbUM7QUFBbUU7QUNicFAsTUEwd0JhLG1CQUFtQjtBQUFJO0FBQVM7QUFDcEI7QUFDUTtBQUFTLElBYXRDLFlBQW9CLGNBQWlDLEVBQVUsaUJBQW9DO0FBQUssUUFBcEYsbUJBQWMsR0FBZCxjQUFjLENBQW1CO0FBQUUsUUFBUSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0FBQUUsUUFiNUYsV0FBTSxHQUFzQixJQUFJLGdCQUFnQixFQUFFLENBQUM7QUFDaEUsUUFDWSxrQkFBYSxHQUFzQjtBQUMvQyxZQUFRLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxXQUFXO0FBQzNELFlBQVEsd0JBQXdCLEVBQUUsb0JBQW9CO0FBQ3RELFlBQVEsb0JBQW9CLEVBQUUsS0FBSztBQUNuQyxZQUFRLGtCQUFrQixFQUFFLEtBQUs7QUFDakMsWUFBUSxhQUFhLEVBQUUsU0FBUztBQUNoQyxZQUFRLGVBQWUsRUFBRSxTQUFTO0FBQ2xDLFlBQVEsY0FBYyxFQUFFLFNBQVM7QUFDakMsU0FBSyxDQUFDO0FBQ04sUUFBVyw2QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztBQUMvRCxLQUM0RztBQUM1RztBQUNPO0FBQ0U7QUFBUyxJQURkLFFBQVE7QUFDWixRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMzQixLQUFLO0FBQ0w7QUFDTztBQUFvQjtBQUMxQixJQURXLFdBQVc7QUFBTSxRQUNyQixLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDakQsWUFBWSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLEVBQUU7QUFDMUQsZ0JBQWdCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDakQsb0JBQW9CLFNBQVM7QUFDN0IsaUJBQWlCO0FBQ2pCLGdCQUNnQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pLLGFBQWE7QUFBRSxpQkFBSTtBQUNuQixnQkFBZ0IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtBQUNqRCxvQkFBb0IsU0FBUztBQUM3QixpQkFBaUI7QUFDakIsZ0JBQ2dCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakssYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDTztBQUF3QjtBQUN2QjtBQUFTLElBRE4sT0FBTyxDQUFDLElBQWE7QUFBSyxRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFRLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM5QyxLQUFLO0FBQ0w7aURBanpCQyxTQUFTLFNBQUMsbUJBQ1AsUUFBUSxFQUFFLGFBQWEsbUJBQ3ZCLFFBQVEsRUFBRTs7Ozs7bXhFQStEWCxtQkFDQyxNQUFNLEVBQUUsdUJBQ0oseWhyQkFtc0JGO0FBQUU7QUFBb0I7QUFDUixZQXp3QlgsaUJBQWlCO0FBQUssWUFGdEIsaUJBQWlCO0FBQUk7QUFBSTtBQUF3QyxtQkEyd0JyRSxLQUFLO0FBQU0scUJBQ1gsS0FBSztBQUFNLHVCQUNYLEtBQUs7QUFBSzs4RUFOVixtQkFDQSxlQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFJZ0I7QUFBQztBQUFDO0FBQUs7QUFDUDtBQUNpQjtBQy93QmxDLE1BVWEsZ0JBQWdCO0FBQzdCO0FBQVM7QUFBaUM7QUFBb0I7QUFBUyxJQUFyRSxPQUFPLE9BQU8sQ0FBQyxhQUFnQztBQUFLLFFBQ2xELE9BQU87QUFDWCxZQUFNLFFBQVEsRUFBRSxnQkFBZ0I7QUFDaEMsWUFBTSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDO0FBQ3hFLFNBQUssQ0FBQztBQUNOLEtBQUc7QUFDSDs4Q0FaQyxRQUFRLFNBQUMsbUJBQ1IsT0FBTyxFQUFFLENBQUM7QUFBWSxDQUFDLG1CQUN2QixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxtQkFDbkMsT0FBTyxFQUFFLENBQUM7WUFBbUIsQ0FBQyxlQUMvQjs7Ozs7Ozs7OzhSQUNLO0FBQUM7QUFBQztBQUFLO0FBQ0U7QUFDUjtBQUFJO0FBQUM7QUFDVDtBQUNBO0FBQW1FO0FBQ3RFO0FBQUM7O0FISkEsQUFBQSxBQVVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFDNUNBLEFBTUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBUkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQ1RBLEFBMHdCQSxBQUFBLEFBZUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBYkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQWh6QkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUErREEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQWdzQkEsQUFDQSxBQUNBLEFBdndCQSxBQUFBLEFBRkEsQUFBQSxBQTJ3QkEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFDN3dCQSxBQVVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQVhBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJTmd4TG9hZGluZ0NvbmZpZyB7XHJcbiAgICBiYWNrZHJvcEJvcmRlclJhZGl1cz86IHN0cmluZztcclxuICAgIGJhY2tkcm9wQmFja2dyb3VuZENvbG91cj86IHN0cmluZztcclxuICAgIGZ1bGxTY3JlZW5CYWNrZHJvcD86IGJvb2xlYW47XHJcbiAgICBhbmltYXRpb25UeXBlPzogc3RyaW5nO1xyXG4gICAgcHJpbWFyeUNvbG91cj86IHN0cmluZztcclxuICAgIHNlY29uZGFyeUNvbG91cj86IHN0cmluZztcclxuICAgIHRlcnRpYXJ5Q29sb3VyPzogc3RyaW5nO1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5neExvYWRpbmdDb25maWcgaW1wbGVtZW50cyBJTmd4TG9hZGluZ0NvbmZpZyB7XHJcbiAgICBiYWNrZHJvcEJvcmRlclJhZGl1cz86IHN0cmluZztcclxuICAgIGJhY2tkcm9wQmFja2dyb3VuZENvbG91cj86IHN0cmluZztcclxuICAgIGZ1bGxTY3JlZW5CYWNrZHJvcD86IGJvb2xlYW47XHJcbiAgICBhbmltYXRpb25UeXBlPzogc3RyaW5nO1xyXG4gICAgcHJpbWFyeUNvbG91cj86IHN0cmluZztcclxuICAgIHNlY29uZGFyeUNvbG91cj86IHN0cmluZztcclxuICAgIHRlcnRpYXJ5Q29sb3VyPzogc3RyaW5nO1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElOZ3hMb2FkaW5nQ29uZmlnID0ge30pIHtcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQm9yZGVyUmFkaXVzID0gY29uZmlnLmJhY2tkcm9wQm9yZGVyUmFkaXVzO1xyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BCYWNrZ3JvdW5kQ29sb3VyID0gY29uZmlnLmJhY2tkcm9wQmFja2dyb3VuZENvbG91cjtcclxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW5CYWNrZHJvcCA9IGNvbmZpZy5mdWxsU2NyZWVuQmFja2Ryb3A7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25UeXBlID0gY29uZmlnLmFuaW1hdGlvblR5cGU7XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5Q29sb3VyID0gY29uZmlnLnByaW1hcnlDb2xvdXI7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRhcnlDb2xvdXIgPSBjb25maWcuc2Vjb25kYXJ5Q29sb3VyO1xyXG4gICAgICAgIHRoaXMudGVydGlhcnlDb2xvdXIgPSBjb25maWcudGVydGlhcnlDb2xvdXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMgPSB7XHJcbiAgICBjaGFzaW5nRG90czogJ2NoYXNpbmctZG90cycsXHJcbiAgICBjaXJjbGU6ICdzay1jaXJjbGUnLFxyXG4gICAgY2lyY2xlU3dpc2g6ICdjaXJjbGVTd2lzaCcsXHJcbiAgICBjdWJlR3JpZDogJ3NrLWN1YmUtZ3JpZCcsXHJcbiAgICBkb3VibGVCb3VuY2U6ICdkb3VibGUtYm91bmNlJyxcclxuICAgIG5vbmU6ICdub25lJyxcclxuICAgIHB1bHNlOiAncHVsc2UnLFxyXG4gICAgcmVjdGFuZ2xlQm91bmNlOiAncmVjdGFuZ2xlLWJvdW5jZScsXHJcbiAgICByb3RhdGluZ1BsYW5lOiAncm90YXRpbmctcGxhbmUnLFxyXG4gICAgdGhyZWVCb3VuY2U6ICd0aHJlZS1ib3VuY2UnLFxyXG4gICAgd2FuZGVyaW5nQ3ViZXM6ICd3YW5kZXJpbmctY3ViZXMnXHJcbn07XHJcbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU5neExvYWRpbmdDb25maWcsIE5neExvYWRpbmdDb25maWcgfSBmcm9tICcuL25neC1sb2FkaW5nLWNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2FkaW5nU2VydmljZSB7XHJcbiAgcHVibGljIGxvYWRpbmdDb25maWc6IElOZ3hMb2FkaW5nQ29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KCdsb2FkaW5nQ29uZmlnJykgcHJpdmF0ZSBjb25maWc6IElOZ3hMb2FkaW5nQ29uZmlnKSB7XHJcbiAgICB0aGlzLmxvYWRpbmdDb25maWcgPSB0aGlzLmNvbmZpZyB8fCBuZXcgTmd4TG9hZGluZ0NvbmZpZygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMsIElOZ3hMb2FkaW5nQ29uZmlnLCBOZ3hMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi9uZ3gtbG9hZGluZy1jb25maWcnO1xyXG5pbXBvcnQgeyBOZ3hMb2FkaW5nU2VydmljZSB9IGZyb20gJy4vbmd4LWxvYWRpbmcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWxvYWRpbmcnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgKm5nSWY9XCJzaG93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIiBbbmdTdHlsZV09XCJ7J2JvcmRlci1yYWRpdXMnOiBjb25maWc/LmJhY2tkcm9wQm9yZGVyUmFkaXVzLCAnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uYmFja2Ryb3BCYWNrZ3JvdW5kQ29sb3VyfVwiPjwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiY29uZmlnPy5hbmltYXRpb25UeXBlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItY2lyY2xlXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5jaXJjbGVcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCJcclxuICAgICAgICAgIFtuZ1N0eWxlXT1cInsnYm9yZGVyLXRvcC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyLCAnYm9yZGVyLXJpZ2h0LWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXIsICdib3JkZXItYm90dG9tLWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXIsICdib3JkZXItbGVmdC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLmN1YmVHcmlkXCIgY2xhc3M9XCJzay1jdWJlLWdyaWRcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmUyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTNcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlNFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU1XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTZcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlN1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU4XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTlcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLXNrLXJvdGF0ZXBsYW5lXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5yb3RhdGluZ1BsYW5lXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItcmVjdGFuZ2xlLWJvdW5jZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMucmVjdGFuZ2xlQm91bmNlXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3QxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3QyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3QzXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3Q0XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3Q1XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci13YW5kZXJpbmctY3ViZXNcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLndhbmRlcmluZ0N1YmVzXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImN1YmUxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImN1YmUyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWRvdWJsZS1ib3VuY2VcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLmRvdWJsZUJvdW5jZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1wdWxzZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMucHVsc2VcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1jaGFzaW5nLWRvdHNcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLmNoYXNpbmdEb3RzXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRvdDFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90MlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1jaXJjbGUtc3dpc2hcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLmNpcmNsZVN3aXNoXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5ub25lXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJzcGlubmVyLXRocmVlLWJvdW5jZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZTJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UzXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy50ZXJ0aWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICB6LWluZGV4OiAxOTk5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBTcGlubmVyIENpcmNsZSBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItY2lyY2xlLFxyXG4gICAgICAuc3Bpbm5lci1jaXJjbGU6YWZ0ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLWNpcmNsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDZweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMS4xZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMS4xZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDEuMWVtIHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ4IDEuMXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgfVxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDgge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAa2V5ZnJhbWVzIGxvYWQ4IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIENpcmNsZSBTd2lzaCBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItY2lyY2xlLXN3aXNoIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB3aWR0aDogMWVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNiAxLjdzIGluZmluaXRlIGVhc2UsIHJvdW5kIDEuN3MgaW5maW5pdGUgZWFzZTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkNiB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA1JSxcclxuICAgICAgICAgIDk1JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMCUsXHJcbiAgICAgICAgICA1OSUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAyMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjMzOGVtIC0wLjc1OGVtIDAgLTAuNDJlbSwgLTAuNTU1ZW0gLTAuNjE3ZW0gMCAtMC40NGVtLCAtMC42NzFlbSAtMC40ODhlbSAwIC0wLjQ2ZW0sIC0wLjc0OWVtIC0wLjM0ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDM4JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAa2V5ZnJhbWVzIGxvYWQ2IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDUlLFxyXG4gICAgICAgICAgOTUlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwJSxcclxuICAgICAgICAgIDU5JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMDg3ZW0gLTAuODI1ZW0gMCAtMC40MmVtLCAtMC4xNzNlbSAtMC44MTJlbSAwIC0wLjQ0ZW0sIC0wLjI1NmVtIC0wLjc4OWVtIDAgLTAuNDZlbSwgLTAuMjk3ZW0gLTAuNzc1ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDIwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzM4ZW0gLTAuNzU4ZW0gMCAtMC40MmVtLCAtMC41NTVlbSAtMC42MTdlbSAwIC0wLjQ0ZW0sIC0wLjY3MWVtIC0wLjQ4OGVtIDAgLTAuNDZlbSwgLTAuNzQ5ZW0gLTAuMzRlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMzglIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zNzdlbSAtMC43NGVtIDAgLTAuNDJlbSwgLTAuNjQ1ZW0gLTAuNTIyZW0gMCAtMC40NGVtLCAtMC43NzVlbSAtMC4yOTdlbSAwIC0wLjQ2ZW0sIC0wLjgyZW0gLTAuMDllbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyByb3VuZCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyByb3VuZCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAvKiBDdWJlIEdyaWQgc3R5bGVzICovXHJcbiAgICAgIC5zay1jdWJlLWdyaWQge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZSB7XHJcbiAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTIge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUzIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNCB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU2IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNyB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlOCB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTkge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1jdWJlR3JpZFNjYWxlRGVsYXkge1xyXG4gICAgICAgICAgMCUsIDcwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgICAgICAgfSAzNSUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1jdWJlR3JpZFNjYWxlRGVsYXkge1xyXG4gICAgICAgICAgMCUsIDcwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgICAgICAgfSAzNSUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogRG91YmxlIEJvdW5jZSBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItZG91YmxlLWJvdW5jZSB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZG91YmxlLWJvdW5jZTIge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAgICAgICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cclxuICAgICAgICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgICAgICAgMCUsIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgICAgICAgfSA1MCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBQdWxzZSBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItcHVsc2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stc2NhbGVvdXQgMS4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stc2NhbGVvdXQgMS4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLXNjYWxlb3V0IHtcclxuICAgICAgICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1zY2FsZW91dCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgIH0gMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFRocmVlIEJvdW5jZSBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItdGhyZWUtYm91bmNlIHtcclxuICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItdGhyZWUtYm91bmNlID4gZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci10aHJlZS1ib3VuY2UgLmJvdW5jZTEge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci10aHJlZS1ib3VuY2UgLmJvdW5jZTIge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xyXG4gICAgICAgICAgMCUsIDgwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XHJcbiAgICAgICAgICA0MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xyXG4gICAgICAgICAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9IDQwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBSb3RhdGUgUGxhbmUgc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLXNrLXJvdGF0ZXBsYW5lIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcclxuICAgICAgICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSB9XHJcbiAgICAgICAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSB9XHJcbiAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgIHJvdGF0ZVgoMTgwZGVnKSB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKVxyXG4gICAgICAgICAgfSA1MCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZylcclxuICAgICAgICAgIH0gMTAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogUmVjdGFuZ2xlIEJvdW5jZSBzdHlsZXMqL1xyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIHtcclxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItcmVjdGFuZ2xlLWJvdW5jZSA+IGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1zdHJldGNoZGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgLnJlY3QyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgLnJlY3QzIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgLnJlY3Q0IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgLnJlY3Q1IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1zdHJldGNoZGVsYXkge1xyXG4gICAgICAgICAgMCUsIDQwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KSB9XHJcbiAgICAgICAgICAyMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEuMCkgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIHNrLXN0cmV0Y2hkZWxheSB7XHJcbiAgICAgICAgICAwJSwgNDAlLCAxMDAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgICAgICAgIH0gIDIwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMS4wKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEuMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFdhbmRlcmluZyBDdWJlcyBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItd2FuZGVyaW5nLWN1YmVzIHtcclxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1YmUxLCAuY3ViZTIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jdWJlbW92ZSAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1jdWJlbW92ZSAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY3ViZTIge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWN1YmVtb3ZlIHtcclxuICAgICAgICAgIDI1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSkgfVxyXG4gICAgICAgICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE4MGRlZykgfVxyXG4gICAgICAgICAgNzUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpIH1cclxuICAgICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1jdWJlbW92ZSB7XHJcbiAgICAgICAgICAyNSUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7XHJcbiAgICAgICAgICB9IDUwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xNzlkZWcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xNzlkZWcpO1xyXG4gICAgICAgICAgfSA1MC4xJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICAgICAgfSA3NSUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgfSAxMDAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBDaXJjbGUgc3R5bGVzICovXHJcbiAgICAgIC5zay1jaXJjbGUge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaGlsZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNSU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jaXJjbGVCb3VuY2VEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUyIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTMge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNCB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU1IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTYge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNyB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU4IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTkge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTAge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTEge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTIge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMjpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMzpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU0OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU1OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU2OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuN3M7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU3OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNnM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU4OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU5OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUxMDpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTE6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yczsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEyOmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMXM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7IH1cclxuXHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5IHtcclxuICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgIH0gNDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5IHtcclxuICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgIH0gNDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBDaGFzaW5nIERvdHMgc3R5bGVzICovXHJcbiAgICAgICAgLnNwaW5uZXItY2hhc2luZy1kb3RzIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1yb3RhdGUgMi4wcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLXJvdGF0ZSAyLjBzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kb3QxLCAuZG90MiB7XHJcbiAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG90MiB7XHJcbiAgICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZSB7IDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfX1cclxuICAgICAgICBAa2V5ZnJhbWVzIHNrLXJvdGF0ZSB7IDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfX1cclxuXHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAgICAgICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cclxuICAgICAgICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBrZXlmcmFtZXMgc2stYm91bmNlIHtcclxuICAgICAgICAgIDAlLCAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgICAgICAgIH0gNTAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAuZnVsbC1zY3JlZW4ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgcG9zaXRpb246IC1tcy1wYWdlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHNob3c6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBjb25maWc6IElOZ3hMb2FkaW5nQ29uZmlnID0gbmV3IE5neExvYWRpbmdDb25maWcoKTtcclxuICAgIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZyA9IHtcclxuICAgICAgICBhbmltYXRpb25UeXBlOiBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMudGhyZWVCb3VuY2UsXHJcbiAgICAgICAgYmFja2Ryb3BCYWNrZ3JvdW5kQ29sb3VyOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcclxuICAgICAgICBiYWNrZHJvcEJvcmRlclJhZGl1czogJzBweCcsXHJcbiAgICAgICAgZnVsbFNjcmVlbkJhY2tkcm9wOiBmYWxzZSxcclxuICAgICAgICBwcmltYXJ5Q29sb3VyOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3VyOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgdGVydGlhcnlDb2xvdXI6ICcjZmZmZmZmJ1xyXG4gICAgfTtcclxuICAgIHB1YmxpYyBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMgPSBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBMb2FkaW5nU2VydmljZTogTmd4TG9hZGluZ1NlcnZpY2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNldHVwQ29uZmlnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cENvbmZpZygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBpbiB0aGlzLmRlZmF1bHRDb25maWcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZ1tvcHRpb25dID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZ1tvcHRpb25dICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1tvcHRpb25dID0gdGhpcy5Mb2FkaW5nU2VydmljZS5sb2FkaW5nQ29uZmlnW29wdGlvbl0gIT0gbnVsbCA/IHRoaXMuTG9hZGluZ1NlcnZpY2UubG9hZGluZ0NvbmZpZ1tvcHRpb25dIDogdGhpcy5kZWZhdWx0Q29uZmlnW29wdGlvbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWdbb3B0aW9uXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWdbb3B0aW9uXSA9IHRoaXMuTG9hZGluZ1NlcnZpY2UubG9hZGluZ0NvbmZpZ1tvcHRpb25dICE9IG51bGwgPyB0aGlzLkxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdDb25maWdbb3B0aW9uXSA6IHRoaXMuZGVmYXVsdENvbmZpZ1tvcHRpb25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTaG93KHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob3cgPSBzaG93O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU5neExvYWRpbmdDb25maWcgfSBmcm9tICcuLi9wdWJsaWNfYXBpJztcclxuaW1wb3J0IHsgTmd4TG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWxvYWRpbmcuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmd4TG9hZGluZ0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW05neExvYWRpbmdDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2FkaW5nTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChsb2FkaW5nQ29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neExvYWRpbmdNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogJ2xvYWRpbmdDb25maWcnLCB1c2VWYWx1ZTogbG9hZGluZ0NvbmZpZyB9XVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19

      /***/

    },

    /***/
    3420:
    /*!**********************************************************!*\
      !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
      \**********************************************************/

    /***/
    function _(module) {
      /*!
      * sweetalert2 v11.1.9
      * Released under the MIT License.
      */
      (function (global, factory) {
        true ? module.exports = factory() : 0;
      })(this, function () {
        'use strict';

        var DismissReason = Object.freeze({
          cancel: 'cancel',
          backdrop: 'backdrop',
          close: 'close',
          esc: 'esc',
          timer: 'timer'
        });
        var consolePrefix = 'SweetAlert2:';
        /**
         * Filter the unique values into a new array
         * @param arr
         */

        var uniqueArray = function uniqueArray(arr) {
          var result = [];

          for (var i = 0; i < arr.length; i++) {
            if (result.indexOf(arr[i]) === -1) {
              result.push(arr[i]);
            }
          }

          return result;
        };
        /**
         * Capitalize the first letter of a string
         * @param str
         */


        var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        };
        /**
         * Convert NodeList to Array
         * @param nodeList
         */


        var toArray = function toArray(nodeList) {
          return Array.prototype.slice.call(nodeList);
        };
        /**
         * Standardise console warnings
         * @param message
         */


        var warn = function warn(message) {
          console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
        };
        /**
         * Standardise console errors
         * @param message
         */


        var error = function error(message) {
          console.error("".concat(consolePrefix, " ").concat(message));
        };
        /**
         * Private global state for `warnOnce`
         * @type {Array}
         * @private
         */


        var previousWarnOnceMessages = [];
        /**
         * Show a console warning, but only if it hasn't already been shown
         * @param message
         */

        var warnOnce = function warnOnce(message) {
          if (!previousWarnOnceMessages.includes(message)) {
            previousWarnOnceMessages.push(message);
            warn(message);
          }
        };
        /**
         * Show a one-time console warning about deprecated params/methods
         */


        var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
          warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
        };
        /**
         * If `arg` is a function, call it (with no arguments or context) and return the result.
         * Otherwise, just pass the value through
         * @param arg
         */


        var callIfFunction = function callIfFunction(arg) {
          return typeof arg === 'function' ? arg() : arg;
        };

        var hasToPromiseFn = function hasToPromiseFn(arg) {
          return arg && typeof arg.toPromise === 'function';
        };

        var asPromise = function asPromise(arg) {
          return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
        };

        var isPromise = function isPromise(arg) {
          return arg && Promise.resolve(arg) === arg;
        };

        var isJqueryElement = function isJqueryElement(elem) {
          return typeof elem === 'object' && elem.jquery;
        };

        var isElement = function isElement(elem) {
          return elem instanceof Element || isJqueryElement(elem);
        };

        var argsToParams = function argsToParams(args) {
          var params = {};

          if (typeof args[0] === 'object' && !isElement(args[0])) {
            Object.assign(params, args[0]);
          } else {
            ['title', 'html', 'icon'].forEach(function (name, index) {
              var arg = args[index];

              if (typeof arg === 'string' || isElement(arg)) {
                params[name] = arg;
              } else if (arg !== undefined) {
                error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
              }
            });
          }

          return params;
        };

        var swalPrefix = 'swal2-';

        var prefix = function prefix(items) {
          var result = {};

          for (var i in items) {
            result[items[i]] = swalPrefix + items[i];
          }

          return result;
        };

        var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
        var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

        var getContainer = function getContainer() {
          return document.body.querySelector(".".concat(swalClasses.container));
        };

        var elementBySelector = function elementBySelector(selectorString) {
          var container = getContainer();
          return container ? container.querySelector(selectorString) : null;
        };

        var elementByClass = function elementByClass(className) {
          return elementBySelector(".".concat(className));
        };

        var getPopup = function getPopup() {
          return elementByClass(swalClasses.popup);
        };

        var getIcon = function getIcon() {
          return elementByClass(swalClasses.icon);
        };

        var getTitle = function getTitle() {
          return elementByClass(swalClasses.title);
        };

        var getHtmlContainer = function getHtmlContainer() {
          return elementByClass(swalClasses['html-container']);
        };

        var getImage = function getImage() {
          return elementByClass(swalClasses.image);
        };

        var getProgressSteps = function getProgressSteps() {
          return elementByClass(swalClasses['progress-steps']);
        };

        var getValidationMessage = function getValidationMessage() {
          return elementByClass(swalClasses['validation-message']);
        };

        var getConfirmButton = function getConfirmButton() {
          return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
        };

        var getDenyButton = function getDenyButton() {
          return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
        };

        var getInputLabel = function getInputLabel() {
          return elementByClass(swalClasses['input-label']);
        };

        var getLoader = function getLoader() {
          return elementBySelector(".".concat(swalClasses.loader));
        };

        var getCancelButton = function getCancelButton() {
          return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
        };

        var getActions = function getActions() {
          return elementByClass(swalClasses.actions);
        };

        var getFooter = function getFooter() {
          return elementByClass(swalClasses.footer);
        };

        var getTimerProgressBar = function getTimerProgressBar() {
          return elementByClass(swalClasses['timer-progress-bar']);
        };

        var getCloseButton = function getCloseButton() {
          return elementByClass(swalClasses.close);
        }; // https://github.com/jkup/focusable/blob/master/index.js


        var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";

        var getFocusableElements = function getFocusableElements() {
          var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
          .sort(function (a, b) {
            a = parseInt(a.getAttribute('tabindex'));
            b = parseInt(b.getAttribute('tabindex'));

            if (a > b) {
              return 1;
            } else if (a < b) {
              return -1;
            }

            return 0;
          });
          var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
            return el.getAttribute('tabindex') !== '-1';
          });
          return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
            return isVisible(el);
          });
        };

        var isModal = function isModal() {
          return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
        };

        var isToast = function isToast() {
          return document.body.classList.contains(swalClasses['toast-shown']);
        };

        var isLoading = function isLoading() {
          return getPopup().hasAttribute('data-loading');
        };

        var states = {
          previousBodyPadding: null
        };

        var setInnerHtml = function setInnerHtml(elem, html) {
          // #1926
          elem.textContent = '';

          if (html) {
            var parser = new DOMParser();
            var parsed = parser.parseFromString(html, "text/html");
            toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
              elem.appendChild(child);
            });
            toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
              elem.appendChild(child);
            });
          }
        };

        var hasClass = function hasClass(elem, className) {
          if (!className) {
            return false;
          }

          var classList = className.split(/\s+/);

          for (var i = 0; i < classList.length; i++) {
            if (!elem.classList.contains(classList[i])) {
              return false;
            }
          }

          return true;
        };

        var removeCustomClasses = function removeCustomClasses(elem, params) {
          toArray(elem.classList).forEach(function (className) {
            if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
              elem.classList.remove(className);
            }
          });
        };

        var applyCustomClass = function applyCustomClass(elem, params, className) {
          removeCustomClasses(elem, params);

          if (params.customClass && params.customClass[className]) {
            if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
              return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
            }

            addClass(elem, params.customClass[className]);
          }
        };

        var getInput = function getInput(popup, inputType) {
          if (!inputType) {
            return null;
          }

          switch (inputType) {
            case 'select':
            case 'textarea':
            case 'file':
              return getChildByClass(popup, swalClasses[inputType]);

            case 'checkbox':
              return popup.querySelector(".".concat(swalClasses.checkbox, " input"));

            case 'radio':
              return popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

            case 'range':
              return popup.querySelector(".".concat(swalClasses.range, " input"));

            default:
              return getChildByClass(popup, swalClasses.input);
          }
        };

        var focusInput = function focusInput(input) {
          input.focus(); // place cursor at end of text in text input

          if (input.type !== 'file') {
            // http://stackoverflow.com/a/2345915
            var val = input.value;
            input.value = '';
            input.value = val;
          }
        };

        var toggleClass = function toggleClass(target, classList, condition) {
          if (!target || !classList) {
            return;
          }

          if (typeof classList === 'string') {
            classList = classList.split(/\s+/).filter(Boolean);
          }

          classList.forEach(function (className) {
            if (target.forEach) {
              target.forEach(function (elem) {
                condition ? elem.classList.add(className) : elem.classList.remove(className);
              });
            } else {
              condition ? target.classList.add(className) : target.classList.remove(className);
            }
          });
        };

        var addClass = function addClass(target, classList) {
          toggleClass(target, classList, true);
        };

        var removeClass = function removeClass(target, classList) {
          toggleClass(target, classList, false);
        };

        var getChildByClass = function getChildByClass(elem, className) {
          for (var i = 0; i < elem.childNodes.length; i++) {
            if (hasClass(elem.childNodes[i], className)) {
              return elem.childNodes[i];
            }
          }
        };

        var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
          if (value === "".concat(parseInt(value))) {
            value = parseInt(value);
          }

          if (value || parseInt(value) === 0) {
            elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
          } else {
            elem.style.removeProperty(property);
          }
        };

        var show = function show(elem) {
          var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
          elem.style.display = display;
        };

        var hide = function hide(elem) {
          elem.style.display = 'none';
        };

        var setStyle = function setStyle(parent, selector, property, value) {
          var el = parent.querySelector(selector);

          if (el) {
            el.style[property] = value;
          }
        };

        var toggle = function toggle(elem, condition, display) {
          condition ? show(elem, display) : hide(elem);
        }; // borrowed from jquery $(elem).is(':visible') implementation


        var isVisible = function isVisible(elem) {
          return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
        };

        var allButtonsAreHidden = function allButtonsAreHidden() {
          return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
        };

        var isScrollable = function isScrollable(elem) {
          return !!(elem.scrollHeight > elem.clientHeight);
        }; // borrowed from https://stackoverflow.com/a/46352119


        var hasCssAnimation = function hasCssAnimation(elem) {
          var style = window.getComputedStyle(elem);
          var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
          var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
          return animDuration > 0 || transDuration > 0;
        };

        var animateTimerProgressBar = function animateTimerProgressBar(timer) {
          var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var timerProgressBar = getTimerProgressBar();

          if (isVisible(timerProgressBar)) {
            if (reset) {
              timerProgressBar.style.transition = 'none';
              timerProgressBar.style.width = '100%';
            }

            setTimeout(function () {
              timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
              timerProgressBar.style.width = '0%';
            }, 10);
          }
        };

        var stopTimerProgressBar = function stopTimerProgressBar() {
          var timerProgressBar = getTimerProgressBar();
          var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          timerProgressBar.style.removeProperty('transition');
          timerProgressBar.style.width = '100%';
          var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
          timerProgressBar.style.removeProperty('transition');
          timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
        }; // Detect Node env


        var isNodeEnv = function isNodeEnv() {
          return typeof window === 'undefined' || typeof document === 'undefined';
        };

        var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

        var resetOldContainer = function resetOldContainer() {
          var oldContainer = getContainer();

          if (!oldContainer) {
            return false;
          }

          oldContainer.remove();
          removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
          return true;
        };

        var resetValidationMessage = function resetValidationMessage() {
          if (Swal.isVisible()) {
            Swal.resetValidationMessage();
          }
        };

        var addInputChangeListeners = function addInputChangeListeners() {
          var popup = getPopup();
          var input = getChildByClass(popup, swalClasses.input);
          var file = getChildByClass(popup, swalClasses.file);
          var range = popup.querySelector(".".concat(swalClasses.range, " input"));
          var rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
          var select = getChildByClass(popup, swalClasses.select);
          var checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
          var textarea = getChildByClass(popup, swalClasses.textarea);
          input.oninput = resetValidationMessage;
          file.onchange = resetValidationMessage;
          select.onchange = resetValidationMessage;
          checkbox.onchange = resetValidationMessage;
          textarea.oninput = resetValidationMessage;

          range.oninput = function () {
            resetValidationMessage();
            rangeOutput.value = range.value;
          };

          range.onchange = function () {
            resetValidationMessage();
            range.nextSibling.value = range.value;
          };
        };

        var getTarget = function getTarget(target) {
          return typeof target === 'string' ? document.querySelector(target) : target;
        };

        var setupAccessibility = function setupAccessibility(params) {
          var popup = getPopup();
          popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
          popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

          if (!params.toast) {
            popup.setAttribute('aria-modal', 'true');
          }
        };

        var setupRTL = function setupRTL(targetElement) {
          if (window.getComputedStyle(targetElement).direction === 'rtl') {
            addClass(getContainer(), swalClasses.rtl);
          }
        };
        /*
         * Add modal + backdrop to DOM
         */


        var init = function init(params) {
          // Clean up the old popup container if it exists
          var oldContainerExisted = resetOldContainer();
          /* istanbul ignore if */

          if (isNodeEnv()) {
            error('SweetAlert2 requires document to initialize');
            return;
          }

          var container = document.createElement('div');
          container.className = swalClasses.container;

          if (oldContainerExisted) {
            addClass(container, swalClasses['no-transition']);
          }

          setInnerHtml(container, sweetHTML);
          var targetElement = getTarget(params.target);
          targetElement.appendChild(container);
          setupAccessibility(params);
          setupRTL(targetElement);
          addInputChangeListeners();
        };

        var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
          // DOM element
          if (param instanceof HTMLElement) {
            target.appendChild(param); // Object
          } else if (typeof param === 'object') {
            handleObject(param, target); // Plain string
          } else if (param) {
            setInnerHtml(target, param);
          }
        };

        var handleObject = function handleObject(param, target) {
          // JQuery element(s)
          if (param.jquery) {
            handleJqueryElem(target, param); // For other objects use their string representation
          } else {
            setInnerHtml(target, param.toString());
          }
        };

        var handleJqueryElem = function handleJqueryElem(target, elem) {
          target.textContent = '';

          if (0 in elem) {
            for (var i = 0; (i in elem); i++) {
              target.appendChild(elem[i].cloneNode(true));
            }
          } else {
            target.appendChild(elem.cloneNode(true));
          }
        };

        var animationEndEvent = function () {
          // Prevent run in Node env

          /* istanbul ignore if */
          if (isNodeEnv()) {
            return false;
          }

          var testEl = document.createElement('div');
          var transEndEventNames = {
            WebkitAnimation: 'webkitAnimationEnd',
            OAnimation: 'oAnimationEnd oanimationend',
            animation: 'animationend'
          };

          for (var i in transEndEventNames) {
            if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
              return transEndEventNames[i];
            }
          }

          return false;
        }(); // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js


        var measureScrollbar = function measureScrollbar() {
          var scrollDiv = document.createElement('div');
          scrollDiv.className = swalClasses['scrollbar-measure'];
          document.body.appendChild(scrollDiv);
          var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        };

        var renderActions = function renderActions(instance, params) {
          var actions = getActions();
          var loader = getLoader();
          var confirmButton = getConfirmButton();
          var denyButton = getDenyButton();
          var cancelButton = getCancelButton(); // Actions (buttons) wrapper

          if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
            hide(actions);
          } else {
            show(actions);
          } // Custom class


          applyCustomClass(actions, params, 'actions'); // Render buttons

          renderButton(confirmButton, 'confirm', params);
          renderButton(denyButton, 'deny', params);
          renderButton(cancelButton, 'cancel', params);
          handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

          if (params.reverseButtons) {
            actions.insertBefore(cancelButton, loader);
            actions.insertBefore(denyButton, loader);
            actions.insertBefore(confirmButton, loader);
          } // Loader


          setInnerHtml(loader, params.loaderHtml);
          applyCustomClass(loader, params, 'loader');
        };

        function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
          if (!params.buttonsStyling) {
            return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
          }

          addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

          if (params.confirmButtonColor) {
            confirmButton.style.backgroundColor = params.confirmButtonColor;
            addClass(confirmButton, swalClasses['default-outline']);
          }

          if (params.denyButtonColor) {
            denyButton.style.backgroundColor = params.denyButtonColor;
            addClass(denyButton, swalClasses['default-outline']);
          }

          if (params.cancelButtonColor) {
            cancelButton.style.backgroundColor = params.cancelButtonColor;
            addClass(cancelButton, swalClasses['default-outline']);
          }
        }

        function renderButton(button, buttonType, params) {
          toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
          setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

          button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
          // Add buttons custom classes

          button.className = swalClasses[buttonType];
          applyCustomClass(button, params, "".concat(buttonType, "Button"));
          addClass(button, params["".concat(buttonType, "ButtonClass")]);
        }

        function handleBackdropParam(container, backdrop) {
          if (typeof backdrop === 'string') {
            container.style.background = backdrop;
          } else if (!backdrop) {
            addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
          }
        }

        function handlePositionParam(container, position) {
          if (position in swalClasses) {
            addClass(container, swalClasses[position]);
          } else {
            warn('The "position" parameter is not valid, defaulting to "center"');
            addClass(container, swalClasses.center);
          }
        }

        function handleGrowParam(container, grow) {
          if (grow && typeof grow === 'string') {
            var growClass = "grow-".concat(grow);

            if (growClass in swalClasses) {
              addClass(container, swalClasses[growClass]);
            }
          }
        }

        var renderContainer = function renderContainer(instance, params) {
          var container = getContainer();

          if (!container) {
            return;
          }

          handleBackdropParam(container, params.backdrop);
          handlePositionParam(container, params.position);
          handleGrowParam(container, params.grow); // Custom class

          applyCustomClass(container, params, 'container');
        };
        /**
         * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
         * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
         * This is the approach that Babel will probably take to implement private methods/fields
         *   https://github.com/tc39/proposal-private-methods
         *   https://github.com/babel/babel/pull/7555
         * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
         *   then we can use that language feature.
         */


        var privateProps = {
          awaitingPromise: new WeakMap(),
          promise: new WeakMap(),
          innerParams: new WeakMap(),
          domCache: new WeakMap()
        };
        var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

        var renderInput = function renderInput(instance, params) {
          var popup = getPopup();
          var innerParams = privateProps.innerParams.get(instance);
          var rerender = !innerParams || params.input !== innerParams.input;
          inputTypes.forEach(function (inputType) {
            var inputClass = swalClasses[inputType];
            var inputContainer = getChildByClass(popup, inputClass); // set attributes

            setAttributes(inputType, params.inputAttributes); // set class

            inputContainer.className = inputClass;

            if (rerender) {
              hide(inputContainer);
            }
          });

          if (params.input) {
            if (rerender) {
              showInput(params);
            } // set custom class


            setCustomClass(params);
          }
        };

        var showInput = function showInput(params) {
          if (!renderInputType[params.input]) {
            return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
          }

          var inputContainer = getInputContainer(params.input);
          var input = renderInputType[params.input](inputContainer, params);
          show(input); // input autofocus

          setTimeout(function () {
            focusInput(input);
          });
        };

        var removeAttributes = function removeAttributes(input) {
          for (var i = 0; i < input.attributes.length; i++) {
            var attrName = input.attributes[i].name;

            if (!['type', 'value', 'style'].includes(attrName)) {
              input.removeAttribute(attrName);
            }
          }
        };

        var setAttributes = function setAttributes(inputType, inputAttributes) {
          var input = getInput(getPopup(), inputType);

          if (!input) {
            return;
          }

          removeAttributes(input);

          for (var attr in inputAttributes) {
            input.setAttribute(attr, inputAttributes[attr]);
          }
        };

        var setCustomClass = function setCustomClass(params) {
          var inputContainer = getInputContainer(params.input);

          if (params.customClass) {
            addClass(inputContainer, params.customClass.input);
          }
        };

        var setInputPlaceholder = function setInputPlaceholder(input, params) {
          if (!input.placeholder || params.inputPlaceholder) {
            input.placeholder = params.inputPlaceholder;
          }
        };

        var setInputLabel = function setInputLabel(input, prependTo, params) {
          if (params.inputLabel) {
            input.id = swalClasses.input;
            var label = document.createElement('label');
            var labelClass = swalClasses['input-label'];
            label.setAttribute('for', input.id);
            label.className = labelClass;
            addClass(label, params.customClass.inputLabel);
            label.innerText = params.inputLabel;
            prependTo.insertAdjacentElement('beforebegin', label);
          }
        };

        var getInputContainer = function getInputContainer(inputType) {
          var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
          return getChildByClass(getPopup(), inputClass);
        };

        var renderInputType = {};

        renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
          if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
            input.value = params.inputValue;
          } else if (!isPromise(params.inputValue)) {
            warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof params.inputValue, "\""));
          }

          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          input.type = params.input;
          return input;
        };

        renderInputType.file = function (input, params) {
          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          return input;
        };

        renderInputType.range = function (range, params) {
          var rangeInput = range.querySelector('input');
          var rangeOutput = range.querySelector('output');
          rangeInput.value = params.inputValue;
          rangeInput.type = params.input;
          rangeOutput.value = params.inputValue;
          setInputLabel(rangeInput, range, params);
          return range;
        };

        renderInputType.select = function (select, params) {
          select.textContent = '';

          if (params.inputPlaceholder) {
            var placeholder = document.createElement('option');
            setInnerHtml(placeholder, params.inputPlaceholder);
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }

          setInputLabel(select, select, params);
          return select;
        };

        renderInputType.radio = function (radio) {
          radio.textContent = '';
          return radio;
        };

        renderInputType.checkbox = function (checkboxContainer, params) {
          var checkbox = getInput(getPopup(), 'checkbox');
          checkbox.value = 1;
          checkbox.id = swalClasses.checkbox;
          checkbox.checked = Boolean(params.inputValue);
          var label = checkboxContainer.querySelector('span');
          setInnerHtml(label, params.inputPlaceholder);
          return checkboxContainer;
        };

        renderInputType.textarea = function (textarea, params) {
          textarea.value = params.inputValue;
          setInputPlaceholder(textarea, params);
          setInputLabel(textarea, textarea, params);

          var getMargin = function getMargin(el) {
            return parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
          };

          setTimeout(function () {
            // #2291
            if ('MutationObserver' in window) {
              // #1699
              var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

              var textareaResizeHandler = function textareaResizeHandler() {
                var textareaWidth = textarea.offsetWidth + getMargin(textarea);

                if (textareaWidth > initialPopupWidth) {
                  getPopup().style.width = "".concat(textareaWidth, "px");
                } else {
                  getPopup().style.width = null;
                }
              };

              new MutationObserver(textareaResizeHandler).observe(textarea, {
                attributes: true,
                attributeFilter: ['style']
              });
            }
          });
          return textarea;
        };

        var renderContent = function renderContent(instance, params) {
          var htmlContainer = getHtmlContainer();
          applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

          if (params.html) {
            parseHtmlToContainer(params.html, htmlContainer);
            show(htmlContainer, 'block'); // Content as plain text
          } else if (params.text) {
            htmlContainer.textContent = params.text;
            show(htmlContainer, 'block'); // No content
          } else {
            hide(htmlContainer);
          }

          renderInput(instance, params);
        };

        var renderFooter = function renderFooter(instance, params) {
          var footer = getFooter();
          toggle(footer, params.footer);

          if (params.footer) {
            parseHtmlToContainer(params.footer, footer);
          } // Custom class


          applyCustomClass(footer, params, 'footer');
        };

        var renderCloseButton = function renderCloseButton(instance, params) {
          var closeButton = getCloseButton();
          setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

          applyCustomClass(closeButton, params, 'closeButton');
          toggle(closeButton, params.showCloseButton);
          closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
        };

        var renderIcon = function renderIcon(instance, params) {
          var innerParams = privateProps.innerParams.get(instance);
          var icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

          if (innerParams && params.icon === innerParams.icon) {
            // Custom or default content
            setContent(icon, params);
            applyStyles(icon, params);
            return;
          }

          if (!params.icon && !params.iconHtml) {
            return hide(icon);
          }

          if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
            error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
            return hide(icon);
          }

          show(icon); // Custom or default content

          setContent(icon, params);
          applyStyles(icon, params); // Animate icon

          addClass(icon, params.showClass.icon);
        };

        var applyStyles = function applyStyles(icon, params) {
          for (var iconType in iconTypes) {
            if (params.icon !== iconType) {
              removeClass(icon, iconTypes[iconType]);
            }
          }

          addClass(icon, iconTypes[params.icon]); // Icon color

          setColor(icon, params); // Success icon background color

          adjustSuccessIconBackgoundColor(); // Custom class

          applyCustomClass(icon, params, 'icon');
        }; // Adjust success icon background color to match the popup background color


        var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
          var popup = getPopup();
          var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
          var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

          for (var i = 0; i < successIconParts.length; i++) {
            successIconParts[i].style.backgroundColor = popupBackgroundColor;
          }
        };

        var setContent = function setContent(icon, params) {
          icon.textContent = '';

          if (params.iconHtml) {
            setInnerHtml(icon, iconContent(params.iconHtml));
          } else if (params.icon === 'success') {
            setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
          } else if (params.icon === 'error') {
            setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
          } else {
            var defaultIconHtml = {
              question: '?',
              warning: '!',
              info: 'i'
            };
            setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
          }
        };

        var setColor = function setColor(icon, params) {
          if (!params.iconColor) {
            return;
          }

          icon.style.color = params.iconColor;
          icon.style.borderColor = params.iconColor;

          for (var _i = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i < _arr.length; _i++) {
            var sel = _arr[_i];
            setStyle(icon, sel, 'backgroundColor', params.iconColor);
          }

          setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
        };

        var iconContent = function iconContent(content) {
          return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
        };

        var renderImage = function renderImage(instance, params) {
          var image = getImage();

          if (!params.imageUrl) {
            return hide(image);
          }

          show(image, ''); // Src, alt

          image.setAttribute('src', params.imageUrl);
          image.setAttribute('alt', params.imageAlt); // Width, height

          applyNumericalStyle(image, 'width', params.imageWidth);
          applyNumericalStyle(image, 'height', params.imageHeight); // Class

          image.className = swalClasses.image;
          applyCustomClass(image, params, 'image');
        };

        var createStepElement = function createStepElement(step) {
          var stepEl = document.createElement('li');
          addClass(stepEl, swalClasses['progress-step']);
          setInnerHtml(stepEl, step);
          return stepEl;
        };

        var createLineElement = function createLineElement(params) {
          var lineEl = document.createElement('li');
          addClass(lineEl, swalClasses['progress-step-line']);

          if (params.progressStepsDistance) {
            lineEl.style.width = params.progressStepsDistance;
          }

          return lineEl;
        };

        var renderProgressSteps = function renderProgressSteps(instance, params) {
          var progressStepsContainer = getProgressSteps();

          if (!params.progressSteps || params.progressSteps.length === 0) {
            return hide(progressStepsContainer);
          }

          show(progressStepsContainer);
          progressStepsContainer.textContent = '';

          if (params.currentProgressStep >= params.progressSteps.length) {
            warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
          }

          params.progressSteps.forEach(function (step, index) {
            var stepEl = createStepElement(step);
            progressStepsContainer.appendChild(stepEl);

            if (index === params.currentProgressStep) {
              addClass(stepEl, swalClasses['active-progress-step']);
            }

            if (index !== params.progressSteps.length - 1) {
              var lineEl = createLineElement(params);
              progressStepsContainer.appendChild(lineEl);
            }
          });
        };

        var renderTitle = function renderTitle(instance, params) {
          var title = getTitle();
          toggle(title, params.title || params.titleText, 'block');

          if (params.title) {
            parseHtmlToContainer(params.title, title);
          }

          if (params.titleText) {
            title.innerText = params.titleText;
          } // Custom class


          applyCustomClass(title, params, 'title');
        };

        var renderPopup = function renderPopup(instance, params) {
          var container = getContainer();
          var popup = getPopup(); // Width

          if (params.toast) {
            // #2170
            applyNumericalStyle(container, 'width', params.width);
            popup.style.width = '100%';
            popup.insertBefore(getLoader(), getIcon());
          } else {
            applyNumericalStyle(popup, 'width', params.width);
          } // Padding


          applyNumericalStyle(popup, 'padding', params.padding); // Background

          if (params.background) {
            popup.style.background = params.background;
          }

          hide(getValidationMessage()); // Classes

          addClasses(popup, params);
        };

        var addClasses = function addClasses(popup, params) {
          // Default Class + showClass when updating Swal.update({})
          popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

          if (params.toast) {
            addClass([document.documentElement, document.body], swalClasses['toast-shown']);
            addClass(popup, swalClasses.toast);
          } else {
            addClass(popup, swalClasses.modal);
          } // Custom class


          applyCustomClass(popup, params, 'popup');

          if (typeof params.customClass === 'string') {
            addClass(popup, params.customClass);
          } // Icon class (#1842)


          if (params.icon) {
            addClass(popup, swalClasses["icon-".concat(params.icon)]);
          }
        };

        var render = function render(instance, params) {
          renderPopup(instance, params);
          renderContainer(instance, params);
          renderProgressSteps(instance, params);
          renderIcon(instance, params);
          renderImage(instance, params);
          renderTitle(instance, params);
          renderCloseButton(instance, params);
          renderContent(instance, params);
          renderActions(instance, params);
          renderFooter(instance, params);

          if (typeof params.didRender === 'function') {
            params.didRender(getPopup());
          }
        };
        /*
         * Global function to determine if SweetAlert2 popup is shown
         */


        var isVisible$1 = function isVisible$1() {
          return isVisible(getPopup());
        };
        /*
         * Global function to click 'Confirm' button
         */


        var clickConfirm = function clickConfirm() {
          return getConfirmButton() && getConfirmButton().click();
        };
        /*
         * Global function to click 'Deny' button
         */


        var clickDeny = function clickDeny() {
          return getDenyButton() && getDenyButton().click();
        };
        /*
         * Global function to click 'Cancel' button
         */


        var clickCancel = function clickCancel() {
          return getCancelButton() && getCancelButton().click();
        };

        function fire() {
          var Swal = this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _construct(Swal, args);
        }
        /**
         * Returns an extended version of `Swal` containing `params` as defaults.
         * Useful for reusing Swal configuration.
         *
         * For example:
         *
         * Before:
         * const textPromptOptions = { input: 'text', showCancelButton: true }
         * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
         * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
         *
         * After:
         * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
         * const {value: firstName} = await TextPrompt('What is your first name?')
         * const {value: lastName} = await TextPrompt('What is your last name?')
         *
         * @param mixinParams
         */


        function mixin(mixinParams) {
          var MixinSwal = /*#__PURE__*/function (_this) {
            _inherits(MixinSwal, _this);

            var _super = _createSuper(MixinSwal);

            function MixinSwal() {
              _classCallCheck(this, MixinSwal);

              return _super.apply(this, arguments);
            }

            _createClass(MixinSwal, [{
              key: "_main",
              value: function _main(params, priorityMixinParams) {
                return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, Object.assign({}, mixinParams, priorityMixinParams));
              }
            }]);

            return MixinSwal;
          }(this);

          return MixinSwal;
        }
        /**
         * Shows loader (spinner), this is useful with AJAX requests.
         * By default the loader be shown instead of the "Confirm" button.
         */


        var showLoading = function showLoading(buttonToReplace) {
          var popup = getPopup();

          if (!popup) {
            Swal.fire();
          }

          popup = getPopup();
          var loader = getLoader();

          if (isToast()) {
            hide(getIcon());
          } else {
            replaceButton(popup, buttonToReplace);
          }

          show(loader);
          popup.setAttribute('data-loading', true);
          popup.setAttribute('aria-busy', true);
          popup.focus();
        };

        var replaceButton = function replaceButton(popup, buttonToReplace) {
          var actions = getActions();
          var loader = getLoader();

          if (!buttonToReplace && isVisible(getConfirmButton())) {
            buttonToReplace = getConfirmButton();
          }

          show(actions);

          if (buttonToReplace) {
            hide(buttonToReplace);
            loader.setAttribute('data-button-to-replace', buttonToReplace.className);
          }

          loader.parentNode.insertBefore(loader, buttonToReplace);
          addClass([popup, actions], swalClasses.loading);
        };

        var RESTORE_FOCUS_TIMEOUT = 100;
        var globalState = {};

        var focusPreviousActiveElement = function focusPreviousActiveElement() {
          if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
            globalState.previousActiveElement.focus();
            globalState.previousActiveElement = null;
          } else if (document.body) {
            document.body.focus();
          }
        }; // Restore previous active (focused) element


        var restoreActiveElement = function restoreActiveElement(returnFocus) {
          return new Promise(function (resolve) {
            if (!returnFocus) {
              return resolve();
            }

            var x = window.scrollX;
            var y = window.scrollY;
            globalState.restoreFocusTimeout = setTimeout(function () {
              focusPreviousActiveElement();
              resolve();
            }, RESTORE_FOCUS_TIMEOUT); // issues/900

            window.scrollTo(x, y);
          });
        };
        /**
         * If `timer` parameter is set, returns number of milliseconds of timer remained.
         * Otherwise, returns undefined.
         */


        var getTimerLeft = function getTimerLeft() {
          return globalState.timeout && globalState.timeout.getTimerLeft();
        };
        /**
         * Stop timer. Returns number of milliseconds of timer remained.
         * If `timer` parameter isn't set, returns undefined.
         */


        var stopTimer = function stopTimer() {
          if (globalState.timeout) {
            stopTimerProgressBar();
            return globalState.timeout.stop();
          }
        };
        /**
         * Resume timer. Returns number of milliseconds of timer remained.
         * If `timer` parameter isn't set, returns undefined.
         */


        var resumeTimer = function resumeTimer() {
          if (globalState.timeout) {
            var remaining = globalState.timeout.start();
            animateTimerProgressBar(remaining);
            return remaining;
          }
        };
        /**
         * Resume timer. Returns number of milliseconds of timer remained.
         * If `timer` parameter isn't set, returns undefined.
         */


        var toggleTimer = function toggleTimer() {
          var timer = globalState.timeout;
          return timer && (timer.running ? stopTimer() : resumeTimer());
        };
        /**
         * Increase timer. Returns number of milliseconds of an updated timer.
         * If `timer` parameter isn't set, returns undefined.
         */


        var increaseTimer = function increaseTimer(n) {
          if (globalState.timeout) {
            var remaining = globalState.timeout.increase(n);
            animateTimerProgressBar(remaining, true);
            return remaining;
          }
        };
        /**
         * Check if timer is running. Returns true if timer is running
         * or false if timer is paused or stopped.
         * If `timer` parameter isn't set, returns undefined
         */


        var isTimerRunning = function isTimerRunning() {
          return globalState.timeout && globalState.timeout.isRunning();
        };

        var bodyClickListenerAdded = false;
        var clickHandlers = {};

        function bindClickHandler() {
          var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
          clickHandlers[attr] = this;

          if (!bodyClickListenerAdded) {
            document.body.addEventListener('click', bodyClickListener);
            bodyClickListenerAdded = true;
          }
        }

        var bodyClickListener = function bodyClickListener(event) {
          for (var el = event.target; el && el !== document; el = el.parentNode) {
            for (var attr in clickHandlers) {
              var template = el.getAttribute(attr);

              if (template) {
                clickHandlers[attr].fire({
                  template: template
                });
                return;
              }
            }
          }
        };

        var defaultParams = {
          title: '',
          titleText: '',
          text: '',
          html: '',
          footer: '',
          icon: undefined,
          iconColor: undefined,
          iconHtml: undefined,
          template: undefined,
          toast: false,
          showClass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'swal2-icon-show'
          },
          hideClass: {
            popup: 'swal2-hide',
            backdrop: 'swal2-backdrop-hide',
            icon: 'swal2-icon-hide'
          },
          customClass: {},
          target: 'body',
          backdrop: true,
          heightAuto: true,
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
          stopKeydownPropagation: true,
          keydownListenerCapture: false,
          showConfirmButton: true,
          showDenyButton: false,
          showCancelButton: false,
          preConfirm: undefined,
          preDeny: undefined,
          confirmButtonText: 'OK',
          confirmButtonAriaLabel: '',
          confirmButtonColor: undefined,
          denyButtonText: 'No',
          denyButtonAriaLabel: '',
          denyButtonColor: undefined,
          cancelButtonText: 'Cancel',
          cancelButtonAriaLabel: '',
          cancelButtonColor: undefined,
          buttonsStyling: true,
          reverseButtons: false,
          focusConfirm: true,
          focusDeny: false,
          focusCancel: false,
          returnFocus: true,
          showCloseButton: false,
          closeButtonHtml: '&times;',
          closeButtonAriaLabel: 'Close this dialog',
          loaderHtml: '',
          showLoaderOnConfirm: false,
          showLoaderOnDeny: false,
          imageUrl: undefined,
          imageWidth: undefined,
          imageHeight: undefined,
          imageAlt: '',
          timer: undefined,
          timerProgressBar: false,
          width: undefined,
          padding: undefined,
          background: undefined,
          input: undefined,
          inputPlaceholder: '',
          inputLabel: '',
          inputValue: '',
          inputOptions: {},
          inputAutoTrim: true,
          inputAttributes: {},
          inputValidator: undefined,
          returnInputValueOnDeny: false,
          validationMessage: undefined,
          grow: false,
          position: 'center',
          progressSteps: [],
          currentProgressStep: undefined,
          progressStepsDistance: undefined,
          willOpen: undefined,
          didOpen: undefined,
          didRender: undefined,
          willClose: undefined,
          didClose: undefined,
          didDestroy: undefined,
          scrollbarPadding: true
        };
        var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
        var deprecatedParams = {};
        var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
        /**
         * Is valid parameter
         * @param {String} paramName
         */

        var isValidParameter = function isValidParameter(paramName) {
          return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
        };
        /**
         * Is valid parameter for Swal.update() method
         * @param {String} paramName
         */


        var isUpdatableParameter = function isUpdatableParameter(paramName) {
          return updatableParams.indexOf(paramName) !== -1;
        };
        /**
         * Is deprecated parameter
         * @param {String} paramName
         */


        var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
          return deprecatedParams[paramName];
        };

        var checkIfParamIsValid = function checkIfParamIsValid(param) {
          if (!isValidParameter(param)) {
            warn("Unknown parameter \"".concat(param, "\""));
          }
        };

        var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
          if (toastIncompatibleParams.includes(param)) {
            warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
          }
        };

        var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
          if (isDeprecatedParameter(param)) {
            warnAboutDeprecation(param, isDeprecatedParameter(param));
          }
        };
        /**
         * Show relevant warnings for given params
         *
         * @param params
         */


        var showWarningsForParams = function showWarningsForParams(params) {
          if (!params.backdrop && params.allowOutsideClick) {
            warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
          }

          for (var param in params) {
            checkIfParamIsValid(param);

            if (params.toast) {
              checkIfToastParamIsValid(param);
            }

            checkIfParamIsDeprecated(param);
          }
        };

        var staticMethods = /*#__PURE__*/Object.freeze({
          isValidParameter: isValidParameter,
          isUpdatableParameter: isUpdatableParameter,
          isDeprecatedParameter: isDeprecatedParameter,
          argsToParams: argsToParams,
          isVisible: isVisible$1,
          clickConfirm: clickConfirm,
          clickDeny: clickDeny,
          clickCancel: clickCancel,
          getContainer: getContainer,
          getPopup: getPopup,
          getTitle: getTitle,
          getHtmlContainer: getHtmlContainer,
          getImage: getImage,
          getIcon: getIcon,
          getInputLabel: getInputLabel,
          getCloseButton: getCloseButton,
          getActions: getActions,
          getConfirmButton: getConfirmButton,
          getDenyButton: getDenyButton,
          getCancelButton: getCancelButton,
          getLoader: getLoader,
          getFooter: getFooter,
          getTimerProgressBar: getTimerProgressBar,
          getFocusableElements: getFocusableElements,
          getValidationMessage: getValidationMessage,
          isLoading: isLoading,
          fire: fire,
          mixin: mixin,
          showLoading: showLoading,
          enableLoading: showLoading,
          getTimerLeft: getTimerLeft,
          stopTimer: stopTimer,
          resumeTimer: resumeTimer,
          toggleTimer: toggleTimer,
          increaseTimer: increaseTimer,
          isTimerRunning: isTimerRunning,
          bindClickHandler: bindClickHandler
        });
        /**
         * Hides loader and shows back the button which was hidden by .showLoading()
         */

        function hideLoading() {
          // do nothing if popup is closed
          var innerParams = privateProps.innerParams.get(this);

          if (!innerParams) {
            return;
          }

          var domCache = privateProps.domCache.get(this);
          hide(domCache.loader);

          if (isToast()) {
            if (innerParams.icon) {
              show(getIcon());
            }
          } else {
            showRelatedButton(domCache);
          }

          removeClass([domCache.popup, domCache.actions], swalClasses.loading);
          domCache.popup.removeAttribute('aria-busy');
          domCache.popup.removeAttribute('data-loading');
          domCache.confirmButton.disabled = false;
          domCache.denyButton.disabled = false;
          domCache.cancelButton.disabled = false;
        }

        var showRelatedButton = function showRelatedButton(domCache) {
          var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

          if (buttonToReplace.length) {
            show(buttonToReplace[0], 'inline-block');
          } else if (allButtonsAreHidden()) {
            hide(domCache.actions);
          }
        };

        function getInput$1(instance) {
          var innerParams = privateProps.innerParams.get(instance || this);
          var domCache = privateProps.domCache.get(instance || this);

          if (!domCache) {
            return null;
          }

          return getInput(domCache.popup, innerParams.input);
        }

        var fixScrollbar = function fixScrollbar() {
          // for queues, do not do this more than once
          if (states.previousBodyPadding !== null) {
            return;
          } // if the body has overflow


          if (document.body.scrollHeight > window.innerHeight) {
            // add padding so the content doesn't shift after removal of scrollbar
            states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
            document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
          }
        };

        var undoScrollbar = function undoScrollbar() {
          if (states.previousBodyPadding !== null) {
            document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
            states.previousBodyPadding = null;
          }
        };
        /* istanbul ignore file */


        var iOSfix = function iOSfix() {
          var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

          if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
            var offset = document.body.scrollTop;
            document.body.style.top = "".concat(offset * -1, "px");
            addClass(document.body, swalClasses.iosfix);
            lockBodyScroll();
            addBottomPaddingForTallPopups(); // #1948
          }
        };

        var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
          var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

          if (safari) {
            var bottomPanelHeight = 44;

            if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
              getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
            }
          }
        };

        var lockBodyScroll = function lockBodyScroll() {
          // #1246
          var container = getContainer();
          var preventTouchMove;

          container.ontouchstart = function (e) {
            preventTouchMove = shouldPreventTouchMove(e);
          };

          container.ontouchmove = function (e) {
            if (preventTouchMove) {
              e.preventDefault();
              e.stopPropagation();
            }
          };
        };

        var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
          var target = event.target;
          var container = getContainer();

          if (isStylys(event) || isZoom(event)) {
            return false;
          }

          if (target === container) {
            return true;
          }

          if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
          target.tagName !== 'TEXTAREA' && // #2266
          !(isScrollable(getHtmlContainer()) && // #1944
          getHtmlContainer().contains(target))) {
            return true;
          }

          return false;
        };

        var isStylys = function isStylys(event) {
          // #1786
          return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
        };

        var isZoom = function isZoom(event) {
          // #1891
          return event.touches && event.touches.length > 1;
        };

        var undoIOSfix = function undoIOSfix() {
          if (hasClass(document.body, swalClasses.iosfix)) {
            var offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = '';
            document.body.scrollTop = offset * -1;
          }
        }; // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
        // elements not within the active modal dialog will not be surfaced if a user opens a screen
        // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.


        var setAriaHidden = function setAriaHidden() {
          var bodyChildren = toArray(document.body.children);
          bodyChildren.forEach(function (el) {
            if (el === getContainer() || el.contains(getContainer())) {
              return;
            }

            if (el.hasAttribute('aria-hidden')) {
              el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
            }

            el.setAttribute('aria-hidden', 'true');
          });
        };

        var unsetAriaHidden = function unsetAriaHidden() {
          var bodyChildren = toArray(document.body.children);
          bodyChildren.forEach(function (el) {
            if (el.hasAttribute('data-previous-aria-hidden')) {
              el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
              el.removeAttribute('data-previous-aria-hidden');
            } else {
              el.removeAttribute('aria-hidden');
            }
          });
        };
        /**
         * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
         * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
         * This is the approach that Babel will probably take to implement private methods/fields
         *   https://github.com/tc39/proposal-private-methods
         *   https://github.com/babel/babel/pull/7555
         * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
         *   then we can use that language feature.
         */


        var privateMethods = {
          swalPromiseResolve: new WeakMap(),
          swalPromiseReject: new WeakMap()
        };
        /*
         * Instance method to close sweetAlert
         */

        function removePopupAndResetState(instance, container, returnFocus, didClose) {
          if (isToast()) {
            triggerDidCloseAndDispose(instance, didClose);
          } else {
            restoreActiveElement(returnFocus).then(function () {
              return triggerDidCloseAndDispose(instance, didClose);
            });
            globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
              capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
          }

          var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
          // for some reason removing the container in Safari will scroll the document to bottom

          if (isSafari) {
            container.setAttribute('style', 'display:none !important');
            container.removeAttribute('class');
            container.innerHTML = '';
          } else {
            container.remove();
          }

          if (isModal()) {
            undoScrollbar();
            undoIOSfix();
            unsetAriaHidden();
          }

          removeBodyClasses();
        }

        function removeBodyClasses() {
          removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
        }

        function close(resolveValue) {
          resolveValue = prepareResolveValue(resolveValue);
          var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
          var didClose = triggerClosePopup(this);

          if (this.isAwaitingPromise()) {
            // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
            if (!resolveValue.isDismissed) {
              handleAwaitingPromise(this);
              swalPromiseResolve(resolveValue);
            }
          } else if (didClose) {
            // Resolve Swal promise
            swalPromiseResolve(resolveValue);
          }
        }

        function isAwaitingPromise() {
          return !!privateProps.awaitingPromise.get(this);
        }

        var triggerClosePopup = function triggerClosePopup(instance) {
          var popup = getPopup();

          if (!popup) {
            return false;
          }

          var innerParams = privateProps.innerParams.get(instance);

          if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
            return false;
          }

          removeClass(popup, innerParams.showClass.popup);
          addClass(popup, innerParams.hideClass.popup);
          var backdrop = getContainer();
          removeClass(backdrop, innerParams.showClass.backdrop);
          addClass(backdrop, innerParams.hideClass.backdrop);
          handlePopupAnimation(instance, popup, innerParams);
          return true;
        };

        function rejectPromise(error) {
          var rejectPromise = privateMethods.swalPromiseReject.get(this);
          handleAwaitingPromise(this);

          if (rejectPromise) {
            // Reject Swal promise
            rejectPromise(error);
          }
        }

        var handleAwaitingPromise = function handleAwaitingPromise(instance) {
          if (instance.isAwaitingPromise()) {
            privateProps.awaitingPromise["delete"](instance); // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335

            if (!privateProps.innerParams.get(instance)) {
              instance._destroy();
            }
          }
        };

        var prepareResolveValue = function prepareResolveValue(resolveValue) {
          // When user calls Swal.close()
          if (typeof resolveValue === 'undefined') {
            return {
              isConfirmed: false,
              isDenied: false,
              isDismissed: true
            };
          }

          return Object.assign({
            isConfirmed: false,
            isDenied: false,
            isDismissed: false
          }, resolveValue);
        };

        var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
          var container = getContainer(); // If animation is supported, animate

          var animationIsSupported = animationEndEvent && hasCssAnimation(popup);

          if (typeof innerParams.willClose === 'function') {
            innerParams.willClose(popup);
          }

          if (animationIsSupported) {
            animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
          } else {
            // Otherwise, remove immediately
            removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
          }
        };

        var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
          globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
          popup.addEventListener(animationEndEvent, function (e) {
            if (e.target === popup) {
              globalState.swalCloseEventFinishedCallback();
              delete globalState.swalCloseEventFinishedCallback;
            }
          });
        };

        var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
          setTimeout(function () {
            if (typeof didClose === 'function') {
              didClose.bind(instance.params)();
            }

            instance._destroy();
          });
        };

        function setButtonsDisabled(instance, buttons, disabled) {
          var domCache = privateProps.domCache.get(instance);
          buttons.forEach(function (button) {
            domCache[button].disabled = disabled;
          });
        }

        function setInputDisabled(input, disabled) {
          if (!input) {
            return false;
          }

          if (input.type === 'radio') {
            var radiosContainer = input.parentNode.parentNode;
            var radios = radiosContainer.querySelectorAll('input');

            for (var i = 0; i < radios.length; i++) {
              radios[i].disabled = disabled;
            }
          } else {
            input.disabled = disabled;
          }
        }

        function enableButtons() {
          setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
        }

        function disableButtons() {
          setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
        }

        function enableInput() {
          return setInputDisabled(this.getInput(), false);
        }

        function disableInput() {
          return setInputDisabled(this.getInput(), true);
        }

        function showValidationMessage(error) {
          var domCache = privateProps.domCache.get(this);
          var params = privateProps.innerParams.get(this);
          setInnerHtml(domCache.validationMessage, error);
          domCache.validationMessage.className = swalClasses['validation-message'];

          if (params.customClass && params.customClass.validationMessage) {
            addClass(domCache.validationMessage, params.customClass.validationMessage);
          }

          show(domCache.validationMessage);
          var input = this.getInput();

          if (input) {
            input.setAttribute('aria-invalid', true);
            input.setAttribute('aria-describedby', swalClasses['validation-message']);
            focusInput(input);
            addClass(input, swalClasses.inputerror);
          }
        } // Hide block with validation message


        function resetValidationMessage$1() {
          var domCache = privateProps.domCache.get(this);

          if (domCache.validationMessage) {
            hide(domCache.validationMessage);
          }

          var input = this.getInput();

          if (input) {
            input.removeAttribute('aria-invalid');
            input.removeAttribute('aria-describedby');
            removeClass(input, swalClasses.inputerror);
          }
        }

        function getProgressSteps$1() {
          var domCache = privateProps.domCache.get(this);
          return domCache.progressSteps;
        }

        var Timer = /*#__PURE__*/function () {
          function Timer(callback, delay) {
            _classCallCheck(this, Timer);

            this.callback = callback;
            this.remaining = delay;
            this.running = false;
            this.start();
          }

          _createClass(Timer, [{
            key: "start",
            value: function start() {
              if (!this.running) {
                this.running = true;
                this.started = new Date();
                this.id = setTimeout(this.callback, this.remaining);
              }

              return this.remaining;
            }
          }, {
            key: "stop",
            value: function stop() {
              if (this.running) {
                this.running = false;
                clearTimeout(this.id);
                this.remaining -= new Date() - this.started;
              }

              return this.remaining;
            }
          }, {
            key: "increase",
            value: function increase(n) {
              var running = this.running;

              if (running) {
                this.stop();
              }

              this.remaining += n;

              if (running) {
                this.start();
              }

              return this.remaining;
            }
          }, {
            key: "getTimerLeft",
            value: function getTimerLeft() {
              if (this.running) {
                this.stop();
                this.start();
              }

              return this.remaining;
            }
          }, {
            key: "isRunning",
            value: function isRunning() {
              return this.running;
            }
          }]);

          return Timer;
        }();

        var defaultInputValidators = {
          email: function email(string, validationMessage) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
          },
          url: function url(string, validationMessage) {
            // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
          }
        };

        function setDefaultInputValidators(params) {
          // Use default `inputValidator` for supported input types if not provided
          if (!params.inputValidator) {
            Object.keys(defaultInputValidators).forEach(function (key) {
              if (params.input === key) {
                params.inputValidator = defaultInputValidators[key];
              }
            });
          }
        }

        function validateCustomTargetElement(params) {
          // Determine if the custom target element is valid
          if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
            warn('Target parameter is not valid, defaulting to "body"');
            params.target = 'body';
          }
        }
        /**
         * Set type, text and actions on popup
         *
         * @param params
         * @returns {boolean}
         */


        function setParameters(params) {
          setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

          if (params.showLoaderOnConfirm && !params.preConfirm) {
            warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
          }

          validateCustomTargetElement(params); // Replace newlines with <br> in title

          if (typeof params.title === 'string') {
            params.title = params.title.split('\n').join('<br />');
          }

          init(params);
        }

        var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

        var getTemplateParams = function getTemplateParams(params) {
          var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

          if (!template) {
            return {};
          }

          var templateContent = template.content;
          showWarningsForElements(templateContent);
          var result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
          return result;
        };

        var getSwalParams = function getSwalParams(templateContent) {
          var result = {};
          toArray(templateContent.querySelectorAll('swal-param')).forEach(function (param) {
            showWarningsForAttributes(param, ['name', 'value']);
            var paramName = param.getAttribute('name');
            var value = param.getAttribute('value');

            if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
              value = false;
            }

            if (typeof defaultParams[paramName] === 'object') {
              value = JSON.parse(value);
            }

            result[paramName] = value;
          });
          return result;
        };

        var getSwalButtons = function getSwalButtons(templateContent) {
          var result = {};
          toArray(templateContent.querySelectorAll('swal-button')).forEach(function (button) {
            showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
            var type = button.getAttribute('type');
            result["".concat(type, "ButtonText")] = button.innerHTML;
            result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

            if (button.hasAttribute('color')) {
              result["".concat(type, "ButtonColor")] = button.getAttribute('color');
            }

            if (button.hasAttribute('aria-label')) {
              result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
            }
          });
          return result;
        };

        var getSwalImage = function getSwalImage(templateContent) {
          var result = {};
          var image = templateContent.querySelector('swal-image');

          if (image) {
            showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

            if (image.hasAttribute('src')) {
              result.imageUrl = image.getAttribute('src');
            }

            if (image.hasAttribute('width')) {
              result.imageWidth = image.getAttribute('width');
            }

            if (image.hasAttribute('height')) {
              result.imageHeight = image.getAttribute('height');
            }

            if (image.hasAttribute('alt')) {
              result.imageAlt = image.getAttribute('alt');
            }
          }

          return result;
        };

        var getSwalIcon = function getSwalIcon(templateContent) {
          var result = {};
          var icon = templateContent.querySelector('swal-icon');

          if (icon) {
            showWarningsForAttributes(icon, ['type', 'color']);

            if (icon.hasAttribute('type')) {
              result.icon = icon.getAttribute('type');
            }

            if (icon.hasAttribute('color')) {
              result.iconColor = icon.getAttribute('color');
            }

            result.iconHtml = icon.innerHTML;
          }

          return result;
        };

        var getSwalInput = function getSwalInput(templateContent) {
          var result = {};
          var input = templateContent.querySelector('swal-input');

          if (input) {
            showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
            result.input = input.getAttribute('type') || 'text';

            if (input.hasAttribute('label')) {
              result.inputLabel = input.getAttribute('label');
            }

            if (input.hasAttribute('placeholder')) {
              result.inputPlaceholder = input.getAttribute('placeholder');
            }

            if (input.hasAttribute('value')) {
              result.inputValue = input.getAttribute('value');
            }
          }

          var inputOptions = templateContent.querySelectorAll('swal-input-option');

          if (inputOptions.length) {
            result.inputOptions = {};
            toArray(inputOptions).forEach(function (option) {
              showWarningsForAttributes(option, ['value']);
              var optionValue = option.getAttribute('value');
              var optionName = option.innerHTML;
              result.inputOptions[optionValue] = optionName;
            });
          }

          return result;
        };

        var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
          var result = {};

          for (var i in paramNames) {
            var paramName = paramNames[i];
            var tag = templateContent.querySelector(paramName);

            if (tag) {
              showWarningsForAttributes(tag, []);
              result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
            }
          }

          return result;
        };

        var showWarningsForElements = function showWarningsForElements(template) {
          var allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
          toArray(template.children).forEach(function (el) {
            var tagName = el.tagName.toLowerCase();

            if (allowedElements.indexOf(tagName) === -1) {
              warn("Unrecognized element <".concat(tagName, ">"));
            }
          });
        };

        var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
          toArray(el.attributes).forEach(function (attribute) {
            if (allowedAttributes.indexOf(attribute.name) === -1) {
              warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
            }
          });
        };

        var SHOW_CLASS_TIMEOUT = 10;
        /**
         * Open popup, add necessary classes and styles, fix scrollbar
         *
         * @param params
         */

        var openPopup = function openPopup(params) {
          var container = getContainer();
          var popup = getPopup();

          if (typeof params.willOpen === 'function') {
            params.willOpen(popup);
          }

          var bodyStyles = window.getComputedStyle(document.body);
          var initialBodyOverflow = bodyStyles.overflowY;
          addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

          setTimeout(function () {
            setScrollingVisibility(container, popup);
          }, SHOW_CLASS_TIMEOUT);

          if (isModal()) {
            fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
            setAriaHidden();
          }

          if (!isToast() && !globalState.previousActiveElement) {
            globalState.previousActiveElement = document.activeElement;
          }

          if (typeof params.didOpen === 'function') {
            setTimeout(function () {
              return params.didOpen(popup);
            });
          }

          removeClass(container, swalClasses['no-transition']);
        };

        var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
          var popup = getPopup();

          if (event.target !== popup) {
            return;
          }

          var container = getContainer();
          popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
          container.style.overflowY = 'auto';
        };

        var setScrollingVisibility = function setScrollingVisibility(container, popup) {
          if (animationEndEvent && hasCssAnimation(popup)) {
            container.style.overflowY = 'hidden';
            popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
          } else {
            container.style.overflowY = 'auto';
          }
        };

        var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
          iOSfix();

          if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
            fixScrollbar();
          } // sweetalert2/issues/1247


          setTimeout(function () {
            container.scrollTop = 0;
          });
        };

        var addClasses$1 = function addClasses$1(container, popup, params) {
          addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

          popup.style.setProperty('opacity', '0', 'important');
          show(popup, 'grid');
          setTimeout(function () {
            // Animate popup right after showing it
            addClass(popup, params.showClass.popup); // and remove the opacity workaround

            popup.style.removeProperty('opacity');
          }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

          addClass([document.documentElement, document.body], swalClasses.shown);

          if (params.heightAuto && params.backdrop && !params.toast) {
            addClass([document.documentElement, document.body], swalClasses['height-auto']);
          }
        };

        var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
          if (params.input === 'select' || params.input === 'radio') {
            handleInputOptions(instance, params);
          } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
            showLoading(getConfirmButton());
            handleInputValue(instance, params);
          }
        };

        var getInputValue = function getInputValue(instance, innerParams) {
          var input = instance.getInput();

          if (!input) {
            return null;
          }

          switch (innerParams.input) {
            case 'checkbox':
              return getCheckboxValue(input);

            case 'radio':
              return getRadioValue(input);

            case 'file':
              return getFileValue(input);

            default:
              return innerParams.inputAutoTrim ? input.value.trim() : input.value;
          }
        };

        var getCheckboxValue = function getCheckboxValue(input) {
          return input.checked ? 1 : 0;
        };

        var getRadioValue = function getRadioValue(input) {
          return input.checked ? input.value : null;
        };

        var getFileValue = function getFileValue(input) {
          return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
        };

        var handleInputOptions = function handleInputOptions(instance, params) {
          var popup = getPopup();

          var processInputOptions = function processInputOptions(inputOptions) {
            return populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
          };

          if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
            showLoading(getConfirmButton());
            asPromise(params.inputOptions).then(function (inputOptions) {
              instance.hideLoading();
              processInputOptions(inputOptions);
            });
          } else if (typeof params.inputOptions === 'object') {
            processInputOptions(params.inputOptions);
          } else {
            error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
          }
        };

        var handleInputValue = function handleInputValue(instance, params) {
          var input = instance.getInput();
          hide(input);
          asPromise(params.inputValue).then(function (inputValue) {
            input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
            show(input);
            input.focus();
            instance.hideLoading();
          })["catch"](function (err) {
            error("Error in inputValue promise: ".concat(err));
            input.value = '';
            show(input);
            input.focus();
            instance.hideLoading();
          });
        };

        var populateInputOptions = {
          select: function select(popup, inputOptions, params) {
            var select = getChildByClass(popup, swalClasses.select);

            var renderOption = function renderOption(parent, optionLabel, optionValue) {
              var option = document.createElement('option');
              option.value = optionValue;
              setInnerHtml(option, optionLabel);
              option.selected = isSelected(optionValue, params.inputValue);
              parent.appendChild(option);
            };

            inputOptions.forEach(function (inputOption) {
              var optionValue = inputOption[0];
              var optionLabel = inputOption[1]; // <optgroup> spec:
              // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
              // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
              // check whether this is a <optgroup>

              if (Array.isArray(optionLabel)) {
                // if it is an array, then it is an <optgroup>
                var optgroup = document.createElement('optgroup');
                optgroup.label = optionValue;
                optgroup.disabled = false; // not configurable for now

                select.appendChild(optgroup);
                optionLabel.forEach(function (o) {
                  return renderOption(optgroup, o[1], o[0]);
                });
              } else {
                // case of <option>
                renderOption(select, optionLabel, optionValue);
              }
            });
            select.focus();
          },
          radio: function radio(popup, inputOptions, params) {
            var radio = getChildByClass(popup, swalClasses.radio);
            inputOptions.forEach(function (inputOption) {
              var radioValue = inputOption[0];
              var radioLabel = inputOption[1];
              var radioInput = document.createElement('input');
              var radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;

              if (isSelected(radioValue, params.inputValue)) {
                radioInput.checked = true;
              }

              var label = document.createElement('span');
              setInnerHtml(label, radioLabel);
              label.className = swalClasses.label;
              radioLabelElement.appendChild(radioInput);
              radioLabelElement.appendChild(label);
              radio.appendChild(radioLabelElement);
            });
            var radios = radio.querySelectorAll('input');

            if (radios.length) {
              radios[0].focus();
            }
          }
        };
        /**
         * Converts `inputOptions` into an array of `[value, label]`s
         * @param inputOptions
         */

        var formatInputOptions = function formatInputOptions(inputOptions) {
          var result = [];

          if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
            inputOptions.forEach(function (value, key) {
              var valueFormatted = value;

              if (typeof valueFormatted === 'object') {
                // case of <optgroup>
                valueFormatted = formatInputOptions(valueFormatted);
              }

              result.push([key, valueFormatted]);
            });
          } else {
            Object.keys(inputOptions).forEach(function (key) {
              var valueFormatted = inputOptions[key];

              if (typeof valueFormatted === 'object') {
                // case of <optgroup>
                valueFormatted = formatInputOptions(valueFormatted);
              }

              result.push([key, valueFormatted]);
            });
          }

          return result;
        };

        var isSelected = function isSelected(optionValue, inputValue) {
          return inputValue && inputValue.toString() === optionValue.toString();
        };

        var handleConfirmButtonClick = function handleConfirmButtonClick(instance) {
          var innerParams = privateProps.innerParams.get(instance);
          instance.disableButtons();

          if (innerParams.input) {
            handleConfirmOrDenyWithInput(instance, 'confirm');
          } else {
            confirm(instance, true);
          }
        };

        var handleDenyButtonClick = function handleDenyButtonClick(instance) {
          var innerParams = privateProps.innerParams.get(instance);
          instance.disableButtons();

          if (innerParams.returnInputValueOnDeny) {
            handleConfirmOrDenyWithInput(instance, 'deny');
          } else {
            deny(instance, false);
          }
        };

        var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
          instance.disableButtons();
          dismissWith(DismissReason.cancel);
        };

        var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, type
        /* 'confirm' | 'deny' */
        ) {
          var innerParams = privateProps.innerParams.get(instance);
          var inputValue = getInputValue(instance, innerParams);

          if (innerParams.inputValidator) {
            handleInputValidator(instance, inputValue, type);
          } else if (!instance.getInput().checkValidity()) {
            instance.enableButtons();
            instance.showValidationMessage(innerParams.validationMessage);
          } else if (type === 'deny') {
            deny(instance, inputValue);
          } else {
            confirm(instance, inputValue);
          }
        };

        var handleInputValidator = function handleInputValidator(instance, inputValue, type
        /* 'confirm' | 'deny' */
        ) {
          var innerParams = privateProps.innerParams.get(instance);
          instance.disableInput();
          var validationPromise = Promise.resolve().then(function () {
            return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
          });
          validationPromise.then(function (validationMessage) {
            instance.enableButtons();
            instance.enableInput();

            if (validationMessage) {
              instance.showValidationMessage(validationMessage);
            } else if (type === 'deny') {
              deny(instance, inputValue);
            } else {
              confirm(instance, inputValue);
            }
          });
        };

        var deny = function deny(instance, value) {
          var innerParams = privateProps.innerParams.get(instance || undefined);

          if (innerParams.showLoaderOnDeny) {
            showLoading(getDenyButton());
          }

          if (innerParams.preDeny) {
            privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesnt get destroyed until the result from this preDeny's promise is received

            var preDenyPromise = Promise.resolve().then(function () {
              return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
            });
            preDenyPromise.then(function (preDenyValue) {
              if (preDenyValue === false) {
                instance.hideLoading();
              } else {
                instance.closePopup({
                  isDenied: true,
                  value: typeof preDenyValue === 'undefined' ? value : preDenyValue
                });
              }
            })["catch"](function (error$$1) {
              return rejectWith(instance || undefined, error$$1);
            });
          } else {
            instance.closePopup({
              isDenied: true,
              value: value
            });
          }
        };

        var succeedWith = function succeedWith(instance, value) {
          instance.closePopup({
            isConfirmed: true,
            value: value
          });
        };

        var rejectWith = function rejectWith(instance, error$$1) {
          instance.rejectPromise(error$$1);
        };

        var confirm = function confirm(instance, value) {
          var innerParams = privateProps.innerParams.get(instance || undefined);

          if (innerParams.showLoaderOnConfirm) {
            showLoading();
          }

          if (innerParams.preConfirm) {
            instance.resetValidationMessage();
            privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesnt get destroyed until the result from this preConfirm's promise is received

            var preConfirmPromise = Promise.resolve().then(function () {
              return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
            });
            preConfirmPromise.then(function (preConfirmValue) {
              if (isVisible(getValidationMessage()) || preConfirmValue === false) {
                instance.hideLoading();
              } else {
                succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
              }
            })["catch"](function (error$$1) {
              return rejectWith(instance || undefined, error$$1);
            });
          } else {
            succeedWith(instance, value);
          }
        };

        var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
          if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
            globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
              capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
          }

          if (!innerParams.toast) {
            globalState.keydownHandler = function (e) {
              return keydownHandler(instance, e, dismissWith);
            };

            globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
            globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
            globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
              capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = true;
          }
        }; // Focus handling


        var setFocus = function setFocus(innerParams, index, increment) {
          var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

          if (focusableElements.length) {
            index = index + increment; // rollover to first item

            if (index === focusableElements.length) {
              index = 0; // go to last item
            } else if (index === -1) {
              index = focusableElements.length - 1;
            }

            return focusableElements[index].focus();
          } // no visible focusable elements, focus the popup


          getPopup().focus();
        };

        var arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
        var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

        var keydownHandler = function keydownHandler(instance, e, dismissWith) {
          var innerParams = privateProps.innerParams.get(instance);

          if (!innerParams) {
            return; // This instance has already been destroyed
          }

          if (innerParams.stopKeydownPropagation) {
            e.stopPropagation();
          } // ENTER


          if (e.key === 'Enter') {
            handleEnter(instance, e, innerParams); // TAB
          } else if (e.key === 'Tab') {
            handleTab(e, innerParams); // ARROWS - switch focus between buttons
          } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).includes(e.key)) {
            handleArrows(e.key); // ESC
          } else if (e.key === 'Escape') {
            handleEsc(e, innerParams, dismissWith);
          }
        };

        var handleEnter = function handleEnter(instance, e, innerParams) {
          // #720 #721
          if (e.isComposing) {
            return;
          }

          if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
            if (['textarea', 'file'].includes(innerParams.input)) {
              return; // do not submit
            }

            clickConfirm();
            e.preventDefault();
          }
        };

        var handleTab = function handleTab(e, innerParams) {
          var targetElement = e.target;
          var focusableElements = getFocusableElements();
          var btnIndex = -1;

          for (var i = 0; i < focusableElements.length; i++) {
            if (targetElement === focusableElements[i]) {
              btnIndex = i;
              break;
            }
          }

          if (!e.shiftKey) {
            // Cycle to the next button
            setFocus(innerParams, btnIndex, 1);
          } else {
            // Cycle to the prev button
            setFocus(innerParams, btnIndex, -1);
          }

          e.stopPropagation();
          e.preventDefault();
        };

        var handleArrows = function handleArrows(key) {
          var confirmButton = getConfirmButton();
          var denyButton = getDenyButton();
          var cancelButton = getCancelButton();

          if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
            return;
          }

          var sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
          var buttonToFocus = document.activeElement[sibling];

          if (buttonToFocus) {
            buttonToFocus.focus();
          }
        };

        var handleEsc = function handleEsc(e, innerParams, dismissWith) {
          if (callIfFunction(innerParams.allowEscapeKey)) {
            e.preventDefault();
            dismissWith(DismissReason.esc);
          }
        };

        var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
          var innerParams = privateProps.innerParams.get(instance);

          if (innerParams.toast) {
            handleToastClick(instance, domCache, dismissWith);
          } else {
            // Ignore click events that had mousedown on the popup but mouseup on the container
            // This can happen when the user drags a slider
            handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

            handleContainerMousedown(domCache);
            handleModalClick(instance, domCache, dismissWith);
          }
        };

        var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
          // Closing toast by internal click
          domCache.popup.onclick = function () {
            var innerParams = privateProps.innerParams.get(instance);

            if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
              return;
            }

            dismissWith(DismissReason.close);
          };
        };

        var ignoreOutsideClick = false;

        var handleModalMousedown = function handleModalMousedown(domCache) {
          domCache.popup.onmousedown = function () {
            domCache.container.onmouseup = function (e) {
              domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
              // have any other direct children aside of the popup

              if (e.target === domCache.container) {
                ignoreOutsideClick = true;
              }
            };
          };
        };

        var handleContainerMousedown = function handleContainerMousedown(domCache) {
          domCache.container.onmousedown = function () {
            domCache.popup.onmouseup = function (e) {
              domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

              if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
                ignoreOutsideClick = true;
              }
            };
          };
        };

        var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
          domCache.container.onclick = function (e) {
            var innerParams = privateProps.innerParams.get(instance);

            if (ignoreOutsideClick) {
              ignoreOutsideClick = false;
              return;
            }

            if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
              dismissWith(DismissReason.backdrop);
            }
          };
        };

        function _main(userParams) {
          var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          showWarningsForParams(Object.assign({}, mixinParams, userParams));

          if (globalState.currentInstance) {
            globalState.currentInstance._destroy();

            if (isModal()) {
              unsetAriaHidden();
            }
          }

          globalState.currentInstance = this;
          var innerParams = prepareParams(userParams, mixinParams);
          setParameters(innerParams);
          Object.freeze(innerParams); // clear the previous timer

          if (globalState.timeout) {
            globalState.timeout.stop();
            delete globalState.timeout;
          } // clear the restore focus timeout


          clearTimeout(globalState.restoreFocusTimeout);
          var domCache = populateDomCache(this);
          render(this, innerParams);
          privateProps.innerParams.set(this, innerParams);
          return swalPromise(this, domCache, innerParams);
        }

        var prepareParams = function prepareParams(userParams, mixinParams) {
          var templateParams = getTemplateParams(userParams);
          var params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

          params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
          params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
          return params;
        };

        var swalPromise = function swalPromise(instance, domCache, innerParams) {
          return new Promise(function (resolve, reject) {
            // functions to handle all closings/dismissals
            var dismissWith = function dismissWith(dismiss) {
              instance.closePopup({
                isDismissed: true,
                dismiss: dismiss
              });
            };

            privateMethods.swalPromiseResolve.set(instance, resolve);
            privateMethods.swalPromiseReject.set(instance, reject);

            domCache.confirmButton.onclick = function () {
              return handleConfirmButtonClick(instance);
            };

            domCache.denyButton.onclick = function () {
              return handleDenyButtonClick(instance);
            };

            domCache.cancelButton.onclick = function () {
              return handleCancelButtonClick(instance, dismissWith);
            };

            domCache.closeButton.onclick = function () {
              return dismissWith(DismissReason.close);
            };

            handlePopupClick(instance, domCache, dismissWith);
            addKeydownHandler(instance, globalState, innerParams, dismissWith);
            handleInputOptionsAndValue(instance, innerParams);
            openPopup(innerParams);
            setupTimer(globalState, innerParams, dismissWith);
            initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

            setTimeout(function () {
              domCache.container.scrollTop = 0;
            });
          });
        };

        var populateDomCache = function populateDomCache(instance) {
          var domCache = {
            popup: getPopup(),
            container: getContainer(),
            actions: getActions(),
            confirmButton: getConfirmButton(),
            denyButton: getDenyButton(),
            cancelButton: getCancelButton(),
            loader: getLoader(),
            closeButton: getCloseButton(),
            validationMessage: getValidationMessage(),
            progressSteps: getProgressSteps()
          };
          privateProps.domCache.set(instance, domCache);
          return domCache;
        };

        var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
          var timerProgressBar = getTimerProgressBar();
          hide(timerProgressBar);

          if (innerParams.timer) {
            globalState$$1.timeout = new Timer(function () {
              dismissWith('timer');
              delete globalState$$1.timeout;
            }, innerParams.timer);

            if (innerParams.timerProgressBar) {
              show(timerProgressBar);
              setTimeout(function () {
                if (globalState$$1.timeout && globalState$$1.timeout.running) {
                  // timer can be already stopped or unset at this point
                  animateTimerProgressBar(innerParams.timer);
                }
              });
            }
          }
        };

        var initFocus = function initFocus(domCache, innerParams) {
          if (innerParams.toast) {
            return;
          }

          if (!callIfFunction(innerParams.allowEnterKey)) {
            return blurActiveElement();
          }

          if (!focusButton(domCache, innerParams)) {
            setFocus(innerParams, -1, 1);
          }
        };

        var focusButton = function focusButton(domCache, innerParams) {
          if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
            domCache.denyButton.focus();
            return true;
          }

          if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
            domCache.cancelButton.focus();
            return true;
          }

          if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
            domCache.confirmButton.focus();
            return true;
          }

          return false;
        };

        var blurActiveElement = function blurActiveElement() {
          if (document.activeElement && typeof document.activeElement.blur === 'function') {
            document.activeElement.blur();
          }
        };
        /**
         * Updates popup parameters.
         */


        function update(params) {
          var popup = getPopup();
          var innerParams = privateProps.innerParams.get(this);

          if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
            return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
          }

          var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

          Object.keys(params).forEach(function (param) {
            if (Swal.isUpdatableParameter(param)) {
              validUpdatableParams[param] = params[param];
            } else {
              warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
            }
          });
          var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
          render(this, updatedParams);
          privateProps.innerParams.set(this, updatedParams);
          Object.defineProperties(this, {
            params: {
              value: Object.assign({}, this.params, params),
              writable: false,
              enumerable: true
            }
          });
        }

        function _destroy() {
          var domCache = privateProps.domCache.get(this);
          var innerParams = privateProps.innerParams.get(this);

          if (!innerParams) {
            disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining weakmaps #2335

            return; // This instance has already been destroyed
          } // Check if there is another Swal closing


          if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
          } // Check if there is a swal disposal defer timer


          if (globalState.deferDisposalTimer) {
            clearTimeout(globalState.deferDisposalTimer);
            delete globalState.deferDisposalTimer;
          }

          if (typeof innerParams.didDestroy === 'function') {
            innerParams.didDestroy();
          }

          disposeSwal(this);
        }

        var disposeSwal = function disposeSwal(instance) {
          disposeWeakMaps(instance); // Unset this.params so GC will dispose it (#1569)

          delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

          delete globalState.keydownHandler;
          delete globalState.keydownTarget; // Unset currentInstance

          delete globalState.currentInstance;
        };

        var disposeWeakMaps = function disposeWeakMaps(instance) {
          // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retreived #2335
          if (instance.isAwaitingPromise()) {
            unsetWeakMaps(privateProps, instance);
            privateProps.awaitingPromise.set(instance, true);
          } else {
            unsetWeakMaps(privateMethods, instance);
            unsetWeakMaps(privateProps, instance);
          }
        };

        var unsetWeakMaps = function unsetWeakMaps(obj, instance) {
          for (var i in obj) {
            obj[i]["delete"](instance);
          }
        };

        var instanceMethods = /*#__PURE__*/Object.freeze({
          hideLoading: hideLoading,
          disableLoading: hideLoading,
          getInput: getInput$1,
          close: close,
          isAwaitingPromise: isAwaitingPromise,
          rejectPromise: rejectPromise,
          closePopup: close,
          closeModal: close,
          closeToast: close,
          enableButtons: enableButtons,
          disableButtons: disableButtons,
          enableInput: enableInput,
          disableInput: disableInput,
          showValidationMessage: showValidationMessage,
          resetValidationMessage: resetValidationMessage$1,
          getProgressSteps: getProgressSteps$1,
          _main: _main,
          update: update,
          _destroy: _destroy
        });
        var currentInstance;

        var SweetAlert = /*#__PURE__*/function () {
          function SweetAlert() {
            _classCallCheck(this, SweetAlert);

            // Prevent run in Node env
            if (typeof window === 'undefined') {
              return;
            }

            currentInstance = this;

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            var outerParams = Object.freeze(this.constructor.argsToParams(args));
            Object.defineProperties(this, {
              params: {
                value: outerParams,
                writable: false,
                enumerable: true,
                configurable: true
              }
            });

            var promise = this._main(this.params);

            privateProps.promise.set(this, promise);
          } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


          _createClass(SweetAlert, [{
            key: "then",
            value: function then(onFulfilled) {
              var promise = privateProps.promise.get(this);
              return promise.then(onFulfilled);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              var promise = privateProps.promise.get(this);
              return promise["finally"](onFinally);
            }
          }]);

          return SweetAlert;
        }(); // Assign instance methods from src/instanceMethods/*.js to prototype


        Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

        Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

        Object.keys(instanceMethods).forEach(function (key) {
          SweetAlert[key] = function () {
            if (currentInstance) {
              var _currentInstance;

              return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
            }
          };
        });
        SweetAlert.DismissReason = DismissReason;
        SweetAlert.version = '11.1.9';
        var Swal = SweetAlert;
        Swal["default"] = Swal;
        return Swal;
      });

      if (typeof this !== 'undefined' && this.Sweetalert2) {
        this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
      }

      "undefined" != typeof document && function (e, t) {
        var n = e.createElement("style");
        if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
          n.innerHTML = t;
        } catch (e) {
          n.innerText = t;
        }
      }(document, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7367f0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(115,103,240,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#ea5455;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(234,84,85,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7d88;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,125,136,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 0}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 0;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");
      /***/
    },

    /***/
    95163:
    /*!*********************************************************************!*\
      !*** ./src/app/feature/register-two/register-two-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterTwoPageRoutingModule": function RegisterTwoPageRoutingModule() {
          return (
            /* binding */
            _RegisterTwoPageRoutingModule
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


      var _register_two_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-two.page */
      64731);

      var routes = [{
        path: '',
        component: _register_two_page__WEBPACK_IMPORTED_MODULE_0__.RegisterTwoPage
      }];

      var _RegisterTwoPageRoutingModule = function RegisterTwoPageRoutingModule() {
        _classCallCheck(this, RegisterTwoPageRoutingModule);
      };

      _RegisterTwoPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegisterTwoPageRoutingModule);
      /***/
    },

    /***/
    83593:
    /*!*************************************************************!*\
      !*** ./src/app/feature/register-two/register-two.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterTwoPageModule": function RegisterTwoPageModule() {
          return (
            /* binding */
            _RegisterTwoPageModule
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


      var ngx_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-loading */
      91147);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _register_two_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-two-routing.module */
      95163);
      /* harmony import */


      var _register_two_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register-two.page */
      64731);

      var _RegisterTwoPageModule = function RegisterTwoPageModule() {
        _classCallCheck(this, RegisterTwoPageModule);
      };

      _RegisterTwoPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _register_two_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterTwoPageRoutingModule, ngx_loading__WEBPACK_IMPORTED_MODULE_7__.NgxLoadingModule.forRoot({
          animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_7__.ngxLoadingAnimationTypes.circle,
          backdropBackgroundColour: 'rgba(0,0,0,0.1)',
          backdropBorderRadius: '8px',
          primaryColour: '#E73122'
        })],
        declarations: [_register_two_page__WEBPACK_IMPORTED_MODULE_1__.RegisterTwoPage]
      })], _RegisterTwoPageModule);
      /***/
    },

    /***/
    64731:
    /*!***********************************************************!*\
      !*** ./src/app/feature/register-two/register-two.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterTwoPage": function RegisterTwoPage() {
          return (
            /* binding */
            _RegisterTwoPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_register_two_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./register-two.page.html */
      62827);
      /* harmony import */


      var _register_two_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register-two.page.scss */
      28074);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _shared_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/services/localstorage.service */
      21662);
      /* harmony import */


      var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/services/loader.service */
      37733);
      /* harmony import */


      var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/services/user.service */
      18736);
      /* harmony import */


      var _shared_constants_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/constants/storage */
      29686);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      3420);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

      var _RegisterTwoPage = /*#__PURE__*/function () {
        function RegisterTwoPage(storageService, userService, loader, router) {
          _classCallCheck(this, RegisterTwoPage);

          this.storageService = storageService;
          this.userService = userService;
          this.loader = loader;
          this.router = router;
          this.user = {};
          this.isLoading = this.loader.isLoading;
        }

        _createClass(RegisterTwoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getStorage();
          }
        }, {
          key: "getStorage",
          value: function getStorage() {
            var userData = JSON.parse(this.storageService.getStorage(_shared_constants_storage__WEBPACK_IMPORTED_MODULE_5__.USER_DATA));
            this.user.nombre = userData.nombre;
            this.user.correo = userData.correo;
            this.user.telefono = userData.telefono;
            this.user.idPerfil = userData.idPerfil;
            this.user.altura = userData.altura;
            this.user.ano = userData.ano;
            this.user.cintura = userData.cintura;
            this.user.fechanac = userData.fechanac;
            this.user.hemogoblina = userData.hemogoblina;
            this.user.peso = userData.peso;
            this.user.rut = userData.rut;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.user.medicamentosdiab = Boolean(this.user.medicamentosdiab);
            this.user.insulinadiab = Boolean(this.user.insulinadiab);
            this.userService.createAcount(this.user).subscribe(function (response) {
              if (response.id != null) {
                _this2.storageService.removeStorage(_shared_constants_storage__WEBPACK_IMPORTED_MODULE_5__.USER_DATA);

                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Registro exitoso', 'Cuenta creada', 'success');

                _this2.router.navigate(['/login']);
              }
            });
          }
        }]);

        return RegisterTwoPage;
      }();

      _RegisterTwoPage.ctorParameters = function () {
        return [{
          type: _shared_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__.localStorageService
        }, {
          type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }, {
          type: _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };

      _RegisterTwoPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-register-two',
        template: _raw_loader_register_two_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_two_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RegisterTwoPage);
      /***/
    },

    /***/
    53880:
    /*!**********************************************!*\
      !*** ./src/app/shared/constants/endPoint.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "API": function API() {
          return (
            /* binding */
            _API
          );
        },

        /* harmony export */
        "USER": function USER() {
          return (
            /* binding */
            _USER
          );
        }
        /* harmony export */

      });

      var _API = "https://gsense.greentechapp.com/api";
      var _USER = "user";
      /***/
    },

    /***/
    18736:
    /*!*************************************************!*\
      !*** ./src/app/shared/services/user.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      31887);
      /* harmony import */


      var _shared_constants_endPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/constants/endPoint */
      53880);

      var _UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
        }

        _createClass(UserService, [{
          key: "createAcount",
          value: function createAcount(data) {
            return this.http.post("".concat(_shared_constants_endPoint__WEBPACK_IMPORTED_MODULE_0__.API, "/").concat(_shared_constants_endPoint__WEBPACK_IMPORTED_MODULE_0__.USER), data);
          }
        }]);

        return UserService;
      }();

      _UserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _UserService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _UserService);
      /***/
    },

    /***/
    28074:
    /*!*************************************************************!*\
      !*** ./src/app/feature/register-two/register-two.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* This css is for normalizing styles. You can skip this. */\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nion-toolbar {\n  --background: #e73122;\n  text-transform: none;\n  text-transform: initial;\n  color: white;\n}\nion-toolbar .bars {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 20px;\n}\nion-content {\n  --background: #fbfbfb;\n}\nion-content .container {\n  width: 100%;\n}\nion-content .container h3 {\n  color: #e73122;\n  width: 90%;\n  margin: auto;\n  display: block;\n  margin-top: 40px;\n}\nion-content .container p {\n  color: #757575;\n  width: 90%;\n  margin: auto;\n  display: block;\n  margin-top: 20px;\n  line-height: 20px;\n  margin-bottom: 40px;\n}\nion-content .progress {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: auto;\n}\nion-content .num {\n  display: inline-block;\n  width: 54px;\n  height: 54px;\n  border: 1px solid #d4d4d4;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\nion-content .num span {\n  display: block;\n  color: #d4d4d4;\n  text-align: center;\n  line-height: 54px;\n  font-size: 25px;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n}\nion-content .active {\n  border-color: #e73122 !important;\n}\nion-content .line {\n  display: inline-block;\n  width: 40px;\n  height: 1px;\n  background: #d4d4d4;\n}\nion-content #main_form {\n  width: 100%;\n  margin-top: 35px;\n}\nion-content .main__input {\n  flex-direction: column;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n}\nion-content .text_input {\n  display: flex;\n  width: 90%;\n  color: #757575;\n  margin-left: 5px;\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: bold;\n}\nion-content .input {\n  width: 90%;\n  background: transparent !important;\n  padding: 12px 0px;\n  background: #ffffff;\n  border: 1px solid rgba(206, 206, 206, 0.5);\n  box-sizing: border-box;\n  border-radius: 10px;\n  color: #757575;\n  outline: none;\n  padding-left: 12px;\n}\nion-content ::-moz-placeholder {\n  padding-left: 12px;\n  font-size: 14px;\n  color: #757575;\n}\nion-content :-ms-input-placeholder {\n  padding-left: 12px;\n  font-size: 14px;\n  color: #757575;\n}\nion-content ::placeholder {\n  padding-left: 12px;\n  font-size: 14px;\n  color: #757575;\n}\nion-content .input:hover {\n  border: 1px solid rgba(231, 49, 34, 0.5);\n}\nion-content .main_checkbox {\n  width: 90%;\n  display: flex;\n  justify-content: center;\n  margin: 5px auto;\n}\nion-content .round {\n  display: block;\n  width: 100%;\n}\nion-content .round input {\n  padding: 0;\n  height: auto;\n  height: initial;\n  width: auto;\n  width: initial;\n  margin-bottom: 0;\n  display: none;\n  cursor: pointer;\n}\nion-content .round label {\n  margin-left: 5px;\n  color: #a0a0a0;\n  position: relative;\n  cursor: pointer;\n  line-height: 23px;\n  font-size: 14px;\n}\nion-content .round label:before {\n  content: \"\";\n  -webkit-appearance: none;\n  background-color: transparent;\n  border: 1px solid #a0a0a0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);\n  padding: 10px;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  cursor: pointer;\n  margin-right: 5px;\n  border-radius: 50%;\n}\nion-content .round input:checked + label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 2px;\n  left: 9px;\n  width: 6px;\n  height: 14px;\n  border: solid #d23022;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\nion-content .main_select {\n  width: 100%;\n  padding: 12px 0;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n}\nion-content .main_select select {\n  width: 90%;\n  box-shadow: none;\n  cursor: pointer;\n  padding: 12px 0;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  padding-left: 12px;\n  background: #ffffff;\n  color: #757575;\n  font-size: 13px;\n}\nion-content .option {\n  padding: 12px 0;\n  background: #fff;\n  color: #000000;\n  font-size: 13px;\n}\nion-content .buttons {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 90px;\n}\nion-content .btn {\n  text-transform: uppercase;\n  margin-top: 20px;\n  width: 90%;\n  padding: 18px 20px;\n  background: #e73122;\n  border-radius: 50px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXR3by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQUE7QUFDQTs7O0VBS0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLHFCQUFhO0VBQ2Isb0JBQXVCO0VBQXZCLHVCQUF1QjtFQUN2QixZQUF5QjtBQUMzQjtBQUpBO0VBTUksYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFFdEI7QUFFQTtFQUNFLHFCQUFhO0FBQ2Y7QUFGQTtFQUlJLFdBQVc7QUFFZjtBQU5BO0VBUUksY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtBQUVwQjtBQWRBO0VBZ0JJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUV2QjtBQXhCQTtFQTJCSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFDaEI7QUFqQ0E7RUFvQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDdEI7QUExQ0E7RUE2Q0ksY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQzFCO0FBcERBO0VBdURJLGdDQUFnQztBQUNwQztBQXhEQTtFQTRESSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7QUFBdkI7QUEvREE7RUFxRUksV0FBVztFQUNYLGdCQUFnQjtBQUZwQjtBQXBFQTtFQTBFSSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUZwQjtBQTdFQTtFQW1GSSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFGckI7QUF2RkE7RUE2RkksVUFBVTtFQUNWLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFFZCxhQUFhO0VBQ2Isa0JBQWtCO0FBSHRCO0FBcEdBO0VBMkdJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUhsQjtBQTFHQTtFQTJHSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7QUFIbEI7QUExR0E7RUEyR0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0FBSGxCO0FBMUdBO0VBaUhJLHdDQUF3QztBQUg1QztBQTlHQTtFQXNISSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFKcEI7QUFySEE7RUE2SEksY0FBYztFQUNkLFdBQVc7QUFKZjtBQTFIQTtFQWtJSSxVQUFVO0VBQ1YsWUFBZTtFQUFmLGVBQWU7RUFDZixXQUFjO0VBQWQsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtBQUpuQjtBQW5JQTtFQTJJSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFKbkI7QUE1SUE7RUFvSkksV0FBVztFQUNYLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLHlGQUNnRDtFQUNoRCxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFMdEI7QUEzSkE7RUFvS0ksV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsd0JBQXdCO0FBTDVCO0FBeEtBO0VBa0xJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBTnBCO0FBakxBO0VBMkxJLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7QUFObkI7QUE5TEE7RUF3TUksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQU5uQjtBQXJNQTtFQStNSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQU52QjtBQTlNQTtFQXdOSSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7QUFOaEIiLCJmaWxlIjoicmVnaXN0ZXItdHdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoaXMgY3NzIGlzIGZvciBub3JtYWxpemluZyBzdHlsZXMuIFlvdSBjYW4gc2tpcCB0aGlzLiAqL1xyXG4qLFxyXG4qOmJlZm9yZSxcclxuKjphZnRlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZTczMTIyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4gIC5iYXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIgaDMge1xyXG4gICAgY29sb3I6ICNlNzMxMjI7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciBwIHtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcblxyXG4gIC8vUHJvZ3Jlc3MgbnVtYmVyXHJcbiAgLnByb2dyZXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIC5udW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDU0cHg7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5udW0gc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZDRkNGQ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2U3MzEyMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLy8gTGluZWEgZGUgbG9zIHBhc28gMSBhIDMuXHJcbiAgLmxpbmUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICNkNGQ0ZDQ7XHJcbiAgfVxyXG5cclxuICAvL0Zvcm11bGFyaW8gZGUgcmVnaXN0cm9cclxuXHJcbiAgI21haW5fZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9faW5wdXQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAudGV4dF9pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDYsIDIwNiwgMjA2LCAwLjUpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICB9XHJcblxyXG4gIC5pbnB1dDpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzMSwgNDksIDM0LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgLy9jaGVja2JveFxyXG4gIC5tYWluX2NoZWNrYm94IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnJvdW5kIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucm91bmQgaW5wdXQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogaW5pdGlhbDtcclxuICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAucm91bmQgbGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjYTBhMGEwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAucm91bmQgbGFiZWw6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KSxcclxuICAgICAgaW5zZXQgMHB4IC0xNXB4IDEwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAucm91bmQgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGJvcmRlcjogc29saWQgI2QyMzAyMjtcclxuICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG5cclxuICAvLyBzZWxlY3Qgc2VndXJvIG1lZGljb1xyXG4gIC5tYWluX3NlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLm1haW5fc2VsZWN0IHNlbGVjdCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgLm9wdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5MHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTczMTIyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    62827:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/register-two/register-two.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ngx-loading *ngIf=\"isLoading | async\" [show]=\"true\"> </ngx-loading>\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title><i class=\"fas fa-bars bars\"></i></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <h3>Registro</h3>\r\n    <p>Te haremos unas breves preguntas para que tú experiencia sea la más adecuada.</p>\r\n  </div>\r\n\r\n  <div class=\"progress\">\r\n    <div class=\"num \">\r\n      <span>1</span>\r\n    </div>\r\n    <span class=\"line\"></span>\r\n    <div class=\"num active\">\r\n      <span>2</span>\r\n    </div>\r\n  </div>\r\n\r\n  <form id=\"main_form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\r\n    <div class=\"main__input\">\r\n      <label for=\"trabajo\" class=\"text_input\">¿En qué trabaja?</label>\r\n      <input class=\"input\" type=\"text\" name=\"trabajo\" [(ngModel)]=\"user.trabajo\" #trabajo=\"ngModel\"\r\n        [ngClass]=\"{ 'is-invalid': f.submitted && trabajo.invalid }\" required autocomplete=\"off\" />\r\n    </div>\r\n    <div class=\"main__input\">\r\n      <label for=\"turno\" class=\"text_input\">Turno de trabajo</label>\r\n    </div>\r\n    <div class=\"main_checkbox\" id=\"turno\">\r\n      <div class=\"round\">\r\n        <input type=\"radio\" id=\"checkbox1\" value=\"Diurno\" name=\"horario\" [(ngModel)]=\"user.horario\" #horario=\"ngModel\"\r\n          [ngClass]=\"{ 'is-invalid': f.submitted && horario.invalid }\" required autocomplete=\"off\" />\r\n        <label for=\"checkbox1\">Diurno</label>\r\n      </div>\r\n      <div class=\"round\">\r\n        <input type=\"radio\" id=\"checkbox2\" value=\"Nocturno\" name=\"horario\" [(ngModel)]=\"user.horario\" #horario=\"ngModel\"\r\n          [ngClass]=\"{ 'is-invalid': f.submitted && horario.invalid }\" required autocomplete=\"off\" />\r\n        <label for=\"checkbox2\">Nocturno</label>\r\n      </div>\r\n      <div class=\"round\">\r\n        <input type=\"radio\" id=\"checkbox3\" value=\"Día / noche\" name=\"horario\" [(ngModel)]=\"user.horario\"\r\n          #horario=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && horario.invalid }\" required autocomplete=\"off\" />\r\n        <label for=\"checkbox3\">Día / noche</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"main__input\">\r\n      <label for=\"seguro\" class=\"text_input\">¿Qué seguro medico tiene?</label>\r\n    </div>\r\n    <div id=\"seguro\" class=\"main_select\">\r\n      <select name=\"seguro\" [(ngModel)]=\"user.seguro\" #seguro=\"ngModel\"\r\n        [ngClass]=\"{ 'is-invalid': f.submitted && seguro.invalid }\" required autocomplete=\"off\">\r\n        <option class=\"option\" value=\"1\">Elija una opción</option>\r\n        <option class=\"option\" value=\"2\">Sanitas</option>\r\n        <option class=\"option\" value=\"3\">Sura</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"main__input\">\r\n      <label for=\"seguro\" class=\"text_input\">¿Fue diagnosticado con?</label>\r\n    </div>\r\n    <div id=\"diagnostico\" class=\"main_select\">\r\n      <select name=\"diagnostico\" [(ngModel)]=\"user.diagnostico\" #diagnostico=\"ngModel\"\r\n        [ngClass]=\"{ 'is-invalid': f.submitted && diagnostico.invalid }\" required autocomplete=\"off\">\r\n        <option class=\"option\" value=\"1\">Elija una opción</option>\r\n        <option class=\"option\" value=\"2\">Cáncer</option>\r\n        <option class=\"option\" value=\"3\">Enfermedad terminal</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"main__input\">\r\n      <label for=\"turno\" class=\"text_input\">Usa medicamentos para la diabetes</label>\r\n    </div>\r\n    <div class=\"main_checkbox\" id=\"turno\">\r\n      <div class=\"round\">\r\n        <input type=\"radio\" id=\"si\" value=\"true\" name=\"medicamentosdiab\" [(ngModel)]=\"user.medicamentosdiab\"\r\n          #medicamentosdiab=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && medicamentosdiab.invalid }\" required\r\n          autocomplete=\"off\" />\r\n        <label for=\"si\">Si</label>\r\n      </div>\r\n      <div class=\"round\">\r\n        <input type=\"radio\" id=\"no\" value=\"false\" name=\"medicamentosdiab\" [(ngModel)]=\"user.medicamentosdiab\"\r\n          #medicamentosdiab=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && medicamentosdiab.invalid }\" required\r\n          autocomplete=\"off\" />\r\n        <label for=\"no\">No</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"main__input\">\r\n      <label for=\"turno\" class=\"text_input\">Usa insulina para su tratamineto de la diabetes</label>\r\n    </div>\r\n    <div class=\"main_checkbox\" id=\"turno\">\r\n      <div class=\"round\">\r\n        <input type=\"radio\" id=\"siInsulinadiab\" value=\"true\" name=\"insulinadiab\" [(ngModel)]=\"user.insulinadiab\"\r\n          #insulinadiab=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && insulinadiab.invalid }\" required\r\n          autocomplete=\"off\" />\r\n        <label for=\"siInsulinadiab\">Si</label>\r\n      </div>\r\n      <div class=\"round\">\r\n        <input type=\"radio\" id=\"noInsulinadiab\" value=\"false\" name=\"insulinadiab\" [(ngModel)]=\"user.insulinadiab\"\r\n          #insulinadiab=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && insulinadiab.invalid }\" required\r\n          autocomplete=\"off\" />\r\n        <label for=\"noInsulinadiab\">No</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"buttons\">\r\n      <button class=\"btn\" type=\"submit\">Finalizar registro</button>\r\n    </div>\r\n  </form>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_feature_register-two_register-two_module_ts-es5.js.map