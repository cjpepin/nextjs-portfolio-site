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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ \"./pages/Navbar.js\");\n/* harmony import */ var _AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AboutMe */ \"./pages/AboutMe.js\");\n/* harmony import */ var _UnityProjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UnityProjects */ \"./pages/UnityProjects.js\");\n/* harmony import */ var _public_ME_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/ME.jpeg */ \"./public/ME.jpeg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n// import styles from '../styles/Home.module.css'\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    var tabSelection = function tabSelection(e) {\n        if (e == \"me\") {\n            setBody(showTab(e));\n        } else if (e.target.id == \"me\" || e.target.id == \"contact\" || e.target.id == \"projects\") {\n            setBody(showTab(e.target.id));\n        }\n    };\n    var showTab = function showTab(tab) {\n        if (tab == \"me\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                id: \"me\"\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this);\n        } else if (tab == \"contact\") {\n            console.log(tab);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Contact, {\n                id: \"contact\"\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this);\n        } else if (tab == \"projects\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Projects, {\n                id: \"projects\"\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 11\n            }, this);\n        }\n    };\n    _s();\n    // const [tab, setTab] = useState();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"me\"), body = ref[0], setBody = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            id: \"me\"\n        }, void 0, false, {\n            fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n            lineNumber: 16,\n            columnNumber: 14\n        }, _this));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onClick: tabSelection\n                }, void 0, false, {\n                    fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tot-body\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: body\n                }, void 0, false, {\n                    fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"SxvrRYudCRz71EpRGLeteEIfx5E=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDRTtBQUNEO0FBQ0U7QUFDWTtBQUMzQyxpREFBaUQ7QUFDZjtBQUNpQjs7QUFHcEMsU0FBU1MsSUFBSSxHQUFHOztRQVdwQkMsWUFBWSxHQUFyQixTQUFTQSxZQUFZLENBQUNDLENBQUMsRUFBQztRQUV0QixJQUFHQSxDQUFDLElBQUksSUFBSSxFQUFDO1lBQ1hDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCLE1BQUssSUFBR0EsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLEVBQUUsSUFBSSxJQUFJLElBQUlKLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxFQUFFLElBQUksU0FBUyxJQUFJSixDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsRUFBRSxJQUFJLFVBQVUsRUFBQztZQUNwRkgsT0FBTyxDQUFDQyxPQUFPLENBQUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQy9CO0tBQ0Y7UUFFUUYsT0FBTyxHQUFoQixTQUFTQSxPQUFPLENBQUNHLEdBQUcsRUFBQztRQUNuQixJQUFHQSxHQUFHLElBQUksSUFBSSxFQUFDO1lBQ2IscUJBQ0UsOERBQUNiLGdEQUFPO2dCQUNOWSxFQUFFLEVBQUcsSUFBSTs7Ozs7b0JBQ1QsQ0FDSDtTQUNGLE1BQU0sSUFBR0MsR0FBRyxJQUFJLFNBQVMsRUFBQztZQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLHFCQUNFLDhEQUFDRyxPQUFPO2dCQUNOSixFQUFFLEVBQUcsU0FBUzs7Ozs7b0JBQ2QsQ0FDSDtTQUNGLE1BQUssSUFBR0MsR0FBRyxJQUFJLFVBQVUsRUFBQztZQUN6QixxQkFDSSw4REFBQ0ksUUFBUTtnQkFDUEwsRUFBRSxFQUFHLFVBQVU7Ozs7O29CQUNmLENBQ0g7U0FDSjtLQUNGOztJQXhDRCxvQ0FBb0M7SUFDcEMsSUFBd0JQLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFaeEMsSUFZYSxHQUFhQSxHQUFjLEdBQTNCLEVBWmIsT0FZc0IsR0FBSUEsR0FBYyxHQUFsQjtJQUVwQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RLLE9BQU8sZUFBRSw4REFBQ1QsZ0RBQU87WUFDUFksRUFBRSxFQUFHLElBQUk7Ozs7O2lCQUNULENBQUM7S0FFWixFQUFFLEVBQUUsQ0FBQztJQWlDTixxQkFDRSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUMsS0FBSzs7MEJBQ2xCLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsS0FBSzswQkFDbEIsNEVBQUNyQiwrQ0FBTTtvQkFBQ3NCLE9BQU8sRUFBRWQsWUFBWTs7Ozs7d0JBQUc7Ozs7O29CQUM1QjswQkFDTiw4REFBQ1ksS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFVBQVU7MEJBQ3ZCLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsV0FBVzs4QkFDdkJGLElBQUk7Ozs7O3dCQUNEOzs7OztvQkFDRjs7Ozs7O1lBQ0YsQ0FFUDtDQUNGO0dBdkR1QlosSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2YmFyJ1xuaW1wb3J0IEFib3V0TWUgZnJvbSAnLi9BYm91dE1lJ1xuaW1wb3J0IFVuaXR5UHJvamVjdHMgZnJvbSAnLi9Vbml0eVByb2plY3RzJ1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IE1lIGZyb20gJy4uL3B1YmxpYy9NRS5qcGVnJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKFwibWVcIik7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEJvZHkoIDxBYm91dE1lXG4gICAgICAgICAgICAgIGlkID0gXCJtZVwiXG4gICAgICAgICAgICAvPilcblxuICB9LCBbXSlcblxuICBmdW5jdGlvbiB0YWJTZWxlY3Rpb24oZSl7XG5cbiAgICBpZihlID09IFwibWVcIil7XG4gICAgICBzZXRCb2R5KHNob3dUYWIoZSkpO1xuICAgIH1lbHNlIGlmKGUudGFyZ2V0LmlkID09IFwibWVcIiB8fCBlLnRhcmdldC5pZCA9PSBcImNvbnRhY3RcIiB8fCBlLnRhcmdldC5pZCA9PSBcInByb2plY3RzXCIpe1xuICAgICAgc2V0Qm9keShzaG93VGFiKGUudGFyZ2V0LmlkKSk7XG4gICAgfSAgICBcbiAgfVxuICBcbiAgZnVuY3Rpb24gc2hvd1RhYih0YWIpe1xuICAgIGlmKHRhYiA9PSBcIm1lXCIpe1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8QWJvdXRNZVxuICAgICAgICAgIGlkID0gXCJtZVwiXG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSBlbHNlIGlmKHRhYiA9PSBcImNvbnRhY3RcIil7XG4gICAgICBjb25zb2xlLmxvZyh0YWIpO1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8Q29udGFjdFxuICAgICAgICAgIGlkID0gXCJjb250YWN0XCJcbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9ZWxzZSBpZih0YWIgPT0gXCJwcm9qZWN0c1wiKXtcbiAgICAgIHJldHVybihcbiAgICAgICAgICA8UHJvamVjdHMgXG4gICAgICAgICAgICBpZCA9IFwicHJvamVjdHNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J25hdic+XG4gICAgICAgIDxOYXZCYXIgb25DbGljaz17dGFiU2VsZWN0aW9ufS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3QtYm9keSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAge2JvZHl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJOYXZCYXIiLCJBYm91dE1lIiwiVW5pdHlQcm9qZWN0cyIsIk1lIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJ0YWJTZWxlY3Rpb24iLCJlIiwic2V0Qm9keSIsInNob3dUYWIiLCJ0YXJnZXQiLCJpZCIsInRhYiIsImNvbnNvbGUiLCJsb2ciLCJDb250YWN0IiwiUHJvamVjdHMiLCJib2R5IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});