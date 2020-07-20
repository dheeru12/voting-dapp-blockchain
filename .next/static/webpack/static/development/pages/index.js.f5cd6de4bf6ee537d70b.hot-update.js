webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../web3 */ \"./web3.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _Voting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Voting */ \"./Voting.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar votingComponent = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(votingComponent, _Component);\n\n  var _super = _createSuper(votingComponent);\n\n  function votingComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, votingComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"state\", {\n      disabled: false\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"pickWinner\", /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                event.preventDefault();\n                ;\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(votingComponent, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        var accounts;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _web3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].eth.getAccounts();\n\n              case 2:\n                accounts = _context2.sent;\n\n                if (accounts[0] != this.props.manager) {\n                  this.setState({\n                    disabled: true\n                  });\n                }\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"renderCandidates\",\n    value: function renderCandidates() {\n      var candidatecount = 0;\n      var items = this.props.candidates.map(function (address) {\n        return {\n          header: address,\n          description: __jsx(_routes__WEBPACK_IMPORTED_MODULE_14__[\"Link\"], {\n            route: \"candidates/\".concat(candidatecount)\n          }, __jsx(\"a\", null, \"view Candidate\")),\n          meta: \"candidate no:\" + candidatecount++,\n          fluid: true\n        };\n      });\n      return items;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null, __jsx(\"h4\", null, \"Candidates participating\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n        floated: \"right\",\n        content: \"create candidate\",\n        icon: \"add circle\",\n        disabled: this.state.disabled,\n        primary: true,\n        href: \"/candidates/new\"\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n        animated: true,\n        disabled: this.state.disabled,\n        floated: \"right\",\n        positive: true,\n        onClick: this.pickWinner\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Button\"].Content, {\n        visible: true\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Icon\"], {\n        name: \"hand point right\"\n      }), \"pick Winner!!\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Button\"].Content, {\n        hidden: true\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Icon\"], {\n        name: \"arrow right\"\n      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Card\"].Group, {\n        items: this.renderCandidates()\n      }));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n        var candidates, manager;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return _Voting__WEBPACK_IMPORTED_MODULE_12__[\"default\"].methods.returnNames().call();\n\n              case 2:\n                candidates = _context3.sent;\n                _context3.next = 5;\n                return _Voting__WEBPACK_IMPORTED_MODULE_12__[\"default\"].methods.manager().call();\n\n              case 5:\n                manager = _context3.sent;\n                return _context3.abrupt(\"return\", {\n                  candidates: candidates,\n                  manager: manager\n                });\n\n              case 7:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return votingComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (votingComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInZvdGluZ0NvbXBvbmVudCIsImRpc2FibGVkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwicHJvcHMiLCJtYW5hZ2VyIiwic2V0U3RhdGUiLCJjYW5kaWRhdGVjb3VudCIsIml0ZW1zIiwiY2FuZGlkYXRlcyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJmbHVpZCIsInN0YXRlIiwicGlja1dpbm5lciIsInJlbmRlckNhbmRpZGF0ZXMiLCJ2b3RpbmciLCJtZXRob2RzIiwicmV0dXJuTmFtZXMiLCJjYWxsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNQSxlOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ0ZDLGNBQVEsRUFBQztBQURQLEs7OztrTUFjTSxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JBLHFCQUFLLENBQUNDLGNBQU47QUFDQTs7QUFGUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFMYUMsOENBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEU7OztBQUFmQyx3Qjs7QUFDTixvQkFBSUEsUUFBUSxDQUFDLENBQUQsQ0FBUixJQUFhLEtBQUtDLEtBQUwsQ0FBV0MsT0FBNUIsRUFBb0M7QUFDaEMsdUJBQUtDLFFBQUwsQ0FBYztBQUFDVCw0QkFBUSxFQUFDO0FBQVYsbUJBQWQ7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQU1hO0FBQ2QsVUFBSVUsY0FBYyxHQUFDLENBQW5CO0FBQ0EsVUFBTUMsS0FBSyxHQUFDLEtBQUtKLEtBQUwsQ0FBV0ssVUFBWCxDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBQUMsT0FBTyxFQUFFO0FBQzNDLGVBQU87QUFDSEMsZ0JBQU0sRUFBRUQsT0FETDtBQUVIRSxxQkFBVyxFQUNQLE1BQUMsNkNBQUQ7QUFBTSxpQkFBSyx1QkFBZ0JOLGNBQWhCO0FBQVgsYUFDSSxrQ0FESixDQUhEO0FBT0hPLGNBQUksRUFBQyxrQkFBaUJQLGNBQWMsRUFQakM7QUFRSFEsZUFBSyxFQUFDO0FBUkgsU0FBUDtBQVVILE9BWFcsQ0FBWjtBQWFBLGFBQU9QLEtBQVA7QUFDSDs7OzZCQUNPO0FBQ0osYUFDSSxNQUFDLDJEQUFELFFBQ0ksNkNBREosRUFFSSxNQUFDLHlEQUFEO0FBQVEsZUFBTyxFQUFDLE9BQWhCO0FBQXdCLGVBQU8sRUFBQyxrQkFBaEM7QUFBbUQsWUFBSSxFQUFDLFlBQXhEO0FBQXFFLGdCQUFRLEVBQUUsS0FBS1EsS0FBTCxDQUFXbkIsUUFBMUY7QUFBb0csZUFBTyxNQUEzRztBQUE0RyxZQUFJLEVBQUM7QUFBakgsUUFGSixFQUdJLE1BQUMseURBQUQ7QUFBUSxnQkFBUSxNQUFoQjtBQUFpQixnQkFBUSxFQUFFLEtBQUttQixLQUFMLENBQVduQixRQUF0QztBQUFnRCxlQUFPLEVBQUMsT0FBeEQ7QUFBZ0UsZ0JBQVEsTUFBeEU7QUFBeUUsZUFBTyxFQUFFLEtBQUtvQjtBQUF2RixTQUNJLE1BQUMseURBQUQsQ0FBUSxPQUFSO0FBQWdCLGVBQU87QUFBdkIsU0FDSSxNQUFDLHVEQUFEO0FBQU0sWUFBSSxFQUFDO0FBQVgsUUFESixrQkFESixFQUtJLE1BQUMseURBQUQsQ0FBUSxPQUFSO0FBQWdCLGNBQU07QUFBdEIsU0FDSSxNQUFDLHVEQUFEO0FBQU0sWUFBSSxFQUFDO0FBQVgsUUFESixDQUxKLENBSEosRUFZSSxNQUFDLHVEQUFELENBQU0sS0FBTjtBQUFZLGFBQUssRUFBRSxLQUFLQyxnQkFBTDtBQUFuQixRQVpKLENBREo7QUFnQkg7Ozs7Ozs7Ozs7O3VCQWhEMEJDLGdEQUFNLENBQUNDLE9BQVAsQ0FBZUMsV0FBZixHQUE2QkMsSUFBN0IsRTs7O0FBQWpCYiwwQjs7dUJBQ2NVLGdEQUFNLENBQUNDLE9BQVAsQ0FBZWYsT0FBZixHQUF5QmlCLElBQXpCLEU7OztBQUFkakIsdUI7a0RBQ0M7QUFBQ0ksNEJBQVUsRUFBQ0EsVUFBWjtBQUF1QkoseUJBQU8sRUFBQ0E7QUFBL0IsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFQZWtCLCtDOztBQXdEZjNCLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vd2ViMyc7XG5pbXBvcnQge0NhcmQsIEJ1dHRvbiAsIEljb259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB2b3RpbmcgZnJvbSAnLi4vVm90aW5nJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcyc7XG5jbGFzcyB2b3RpbmdDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgc3RhdGU9e1xuICAgICAgICBkaXNhYmxlZDpmYWxzZVxuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXM9YXdhaXQgdm90aW5nLm1ldGhvZHMucmV0dXJuTmFtZXMoKS5jYWxsKCk7XG4gICAgICAgIGNvbnN0IG1hbmFnZXI9YXdhaXQgdm90aW5nLm1ldGhvZHMubWFuYWdlcigpLmNhbGwoKTtcbiAgICAgICAgcmV0dXJuIHtjYW5kaWRhdGVzOmNhbmRpZGF0ZXMsbWFuYWdlcjptYW5hZ2VyfVxuICAgIH1cbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBjb25zdCBhY2NvdW50cz1hd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICBpZiAoYWNjb3VudHNbMF0hPXRoaXMucHJvcHMubWFuYWdlcil7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkaXNhYmxlZDp0cnVlfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGlja1dpbm5lcj0gYXN5bmMgKGV2ZW50KT0+e1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICA7XG4gICAgfVxuICAgIHJlbmRlckNhbmRpZGF0ZXMoKXtcbiAgICAgICAgbGV0IGNhbmRpZGF0ZWNvdW50PTBcbiAgICAgICAgY29uc3QgaXRlbXM9dGhpcy5wcm9wcy5jYW5kaWRhdGVzLm1hcChhZGRyZXNzPT57XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjooXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgY2FuZGlkYXRlcy8ke2NhbmRpZGF0ZWNvdW50fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+dmlldyBDYW5kaWRhdGU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIG1ldGE6XCJjYW5kaWRhdGUgbm86XCIrKGNhbmRpZGF0ZWNvdW50KyspLFxuICAgICAgICAgICAgICAgIGZsdWlkOnRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxoND5DYW5kaWRhdGVzIHBhcnRpY2lwYXRpbmc8L2g0PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZmxvYXRlZD1cInJpZ2h0XCIgY29udGVudD1cImNyZWF0ZSBjYW5kaWRhdGVcIiBpY29uPVwiYWRkIGNpcmNsZVwiIGRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVkfSBwcmltYXJ5IGhyZWY9Jy9jYW5kaWRhdGVzL25ldyc+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBhbmltYXRlZCBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH0gZmxvYXRlZD1cInJpZ2h0XCIgcG9zaXRpdmUgb25DbGljaz17dGhpcy5waWNrV2lubmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Db250ZW50IHZpc2libGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdoYW5kIHBvaW50IHJpZ2h0JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgcGljayBXaW5uZXIhIVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkNvbnRlbnQgaGlkZGVuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nYXJyb3cgcmlnaHQnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPENhcmQuR3JvdXAgaXRlbXM9e3RoaXMucmVuZGVyQ2FuZGlkYXRlcygpfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB2b3RpbmdDb21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})