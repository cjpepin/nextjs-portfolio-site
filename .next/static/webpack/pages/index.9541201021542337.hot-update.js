"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./pages/Navbar.js\");\n/* harmony import */ var _AboutMe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutMe */ \"./pages/AboutMe.js\");\n/* harmony import */ var _Games__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Games */ \"./pages/Games.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    var tabSelection = function tabSelection(e) {\n        console.log(e);\n        if (e == \"me\") {\n            setBody(showTab(e));\n        } else if (e.target.id == \"me\" || e.target.id == \"games\") {\n            setBody(showTab(e.target.id));\n        }\n    };\n    var showTab = function showTab(tab) {\n        if (tab == \"me\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMe__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"me\"\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this);\n        } else if (tab == \"games\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Games__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: \"games\"\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    _s();\n    // const [tab, setTab] = useState();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"me\"), body = ref[0], setBody = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMe__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            id: \"me\"\n        }, void 0, false, {\n            fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n            lineNumber: 11,\n            columnNumber: 14\n        }, _this));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav\",\n                onClick: tabSelection,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tot-body\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: body\n                }, void 0, false, {\n                    fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"SxvrRYudCRz71EpRGLeteEIfx5E=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ0U7QUFDSjtBQUN3Qjs7QUFFcEMsU0FBU00sSUFBSSxHQUFHOztRQVdwQkMsWUFBWSxHQUFyQixTQUFTQSxZQUFZLENBQUNDLENBQUMsRUFBQztRQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQztRQUNkLElBQUdBLENBQUMsSUFBSSxJQUFJLEVBQUM7WUFDWEcsT0FBTyxDQUFDQyxPQUFPLENBQUNKLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckIsTUFBSyxJQUFHQSxDQUFDLENBQUNLLE1BQU0sQ0FBQ0MsRUFBRSxJQUFJLElBQUksSUFBSU4sQ0FBQyxDQUFDSyxNQUFNLENBQUNDLEVBQUUsSUFBSSxPQUFPLEVBQUM7WUFDckRILE9BQU8sQ0FBQ0MsT0FBTyxDQUFDSixDQUFDLENBQUNLLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQjtLQUNGO1FBRVFGLE9BQU8sR0FBaEIsU0FBU0EsT0FBTyxDQUFDRyxHQUFHLEVBQUM7UUFDbkIsSUFBR0EsR0FBRyxJQUFJLElBQUksRUFBQztZQUNiLHFCQUNFLDhEQUFDZCxnREFBTztnQkFDTmEsRUFBRSxFQUFHLElBQUk7Ozs7O29CQUNULENBQ0g7U0FDRixNQUFNLElBQUdDLEdBQUcsSUFBSSxPQUFPLEVBQUM7WUFDdkIscUJBQ0UsOERBQUNiLDhDQUFLO2dCQUNKWSxFQUFFLEVBQUcsT0FBTzs7Ozs7b0JBQ1osQ0FDSDtTQUNGO0tBQ0Y7O0lBakNELG9DQUFvQztJQUNwQyxJQUF3QlQsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVB4QyxJQU9hLEdBQWFBLEdBQWMsR0FBM0IsRUFQYixPQU9zQixHQUFJQSxHQUFjLEdBQWxCO0lBRXBCRCxnREFBUyxDQUFDLFdBQU07UUFDZE8sT0FBTyxlQUFFLDhEQUFDVixnREFBTztZQUNQYSxFQUFFLEVBQUcsSUFBSTs7Ozs7aUJBQ1QsQ0FBQztLQUVaLEVBQUUsRUFBRSxDQUFDO0lBMEJOLHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxLQUFLOzswQkFDbEIsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxLQUFLO2dCQUFDQyxPQUFPLEVBQUVaLFlBQVk7MEJBQ3hDLDRFQUFDUCwrQ0FBTTs7Ozt3QkFBRzs7Ozs7b0JBQ047MEJBQ04sOERBQUNpQixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsVUFBVTswQkFDdkIsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxXQUFXOzhCQUN2QkYsSUFBSTs7Ozs7d0JBQ0Q7Ozs7O29CQUNGOzs7Ozs7WUFDRixDQUVQO0NBQ0Y7R0FoRHVCVixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2YmFyJ1xuaW1wb3J0IEFib3V0TWUgZnJvbSAnLi9BYm91dE1lJ1xuaW1wb3J0IEdhbWVzIGZyb20gJy4vR2FtZXMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKFwibWVcIik7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEJvZHkoIDxBYm91dE1lXG4gICAgICAgICAgICAgIGlkID0gXCJtZVwiXG4gICAgICAgICAgICAvPilcblxuICB9LCBbXSlcblxuICBmdW5jdGlvbiB0YWJTZWxlY3Rpb24oZSl7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBpZihlID09IFwibWVcIil7XG4gICAgICBzZXRCb2R5KHNob3dUYWIoZSkpO1xuICAgIH1lbHNlIGlmKGUudGFyZ2V0LmlkID09IFwibWVcIiB8fCBlLnRhcmdldC5pZCA9PSBcImdhbWVzXCIpe1xuICAgICAgc2V0Qm9keShzaG93VGFiKGUudGFyZ2V0LmlkKSk7XG4gICAgfSAgICBcbiAgfVxuICBcbiAgZnVuY3Rpb24gc2hvd1RhYih0YWIpe1xuICAgIGlmKHRhYiA9PSBcIm1lXCIpe1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8QWJvdXRNZVxuICAgICAgICAgIGlkID0gXCJtZVwiXG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSBlbHNlIGlmKHRhYiA9PSBcImdhbWVzXCIpe1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8R2FtZXNcbiAgICAgICAgICBpZCA9IFwiZ2FtZXNcIlxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2JyBvbkNsaWNrPXt0YWJTZWxlY3Rpb259PlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3QtYm9keSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAge2JvZHl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJOYXZCYXIiLCJBYm91dE1lIiwiR2FtZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInRhYlNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwibG9nIiwic2V0Qm9keSIsInNob3dUYWIiLCJ0YXJnZXQiLCJpZCIsInRhYiIsImJvZHkiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});