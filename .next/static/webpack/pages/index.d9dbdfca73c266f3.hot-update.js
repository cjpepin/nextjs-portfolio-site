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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./pages/Navbar.js\");\n/* harmony import */ var _AboutMe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutMe */ \"./pages/AboutMe.js\");\n/* harmony import */ var _UnityProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnityProjects */ \"./pages/UnityProjects.js\");\n/* harmony import */ var react_unity_webgl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-unity-webgl */ \"./node_modules/react-unity-webgl/distribution/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    var tabSelection = function tabSelection(e) {\n        console.log(e.target.id);\n        if (e == \"me\") {\n            console.log(\"test1\");\n            setBody(showTab(e));\n        } else if (e.target.id == \"me\" || e.target.id == \"fd\" || e.target.id == \"dj\") {\n            console.log(\"test2\");\n            setBody(showTab(e.target.id));\n        }\n    };\n    var showTab = function showTab(tab) {\n        console.log(tab, curId);\n        if (tab == \"dj\" && curId == \"fd\") {\n            document.getElementsByClassName(\"container\").innerHTML = \"\";\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UnityProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: \"dj\",\n                unityContext: unityContextDJ\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this);\n        } else if (tab == \"fd\" && curId == \"dj\") {\n            document.getElementsByClassName(\"container\").innerHTML = \"\";\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UnityProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: \"fd\",\n                unityContext: unityContextFD\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this);\n        }\n        if (tab == \"me\") {\n            setCurId(\"me\");\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMe__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"me\"\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this);\n        } else if (tab == \"fd\") {\n            setCurId(\"fd\");\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UnityProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: \"fd\",\n                unityContext: unityContextFD\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this);\n        } else if (tab == \"dj\") {\n            setCurId(\"dj\");\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UnityProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: \"dj\",\n                unityContext: unityContextDJ\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    _s();\n    // const [tab, setTab] = useState();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"me\"), body = ref[0], setBody = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"me\"), curId = ref1[0], setCurId = ref1[1];\n    var unityContextDJ = new react_unity_webgl__WEBPACK_IMPORTED_MODULE_4__.UnityContext({\n        loaderUrl: \"build/DJ/Build/DJ.loader.js\",\n        dataUrl: \"build/DJ/Build/DJ.data\",\n        frameworkUrl: \"build/DJ/Build/DJ.framework.js\",\n        codeUrl: \"build/DJ/Build/DJ.wasm\"\n    });\n    var unityContextFD = new react_unity_webgl__WEBPACK_IMPORTED_MODULE_4__.UnityContext({\n        loaderUrl: \"build/FD/Build/FD.loader.js\",\n        dataUrl: \"build/FD/Build/FD.data\",\n        frameworkUrl: \"build/FD/Build/FD.framework.js\",\n        codeUrl: \"build/FD/Build/FD.wasm\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMe__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            id: \"me\"\n        }, void 0, false, {\n            fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n            lineNumber: 26,\n            columnNumber: 14\n        }, _this));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav\",\n                onClick: tabSelection,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tot-body\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: body\n                }, void 0, false, {\n                    fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"ZFtNncMbd08pTRoRnbJnt0HfzW0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsSUFBSW5CLDJEQUFZLENBQUM7UUFDdEN1QixTQUFTLEVBQUUsNkJBQTZCO1FBQ3hDQyxPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDQyxZQUFZLEVBQUUsZ0NBQWdDO1FBQzlDQyxPQUFPLEVBQUUsd0JBQXdCO0tBQ3BDLENBQUM7SUFFRixJQUFNTixjQUFjLEdBQUcsSUFBSXBCLDJEQUFZLENBQUM7UUFDcEN1QixTQUFTLEVBQUUsNkJBQTZCO1FBQ3hDQyxPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDQyxZQUFZLEVBQUUsZ0NBQWdDO1FBQzlDQyxPQUFPLEVBQUUsd0JBQXdCO0tBQ3BDLENBQUM7SUFDQXhCLGdEQUFTLENBQUMsV0FBTTtRQUNkUyxPQUFPLGVBQUUsOERBQUNkLGdEQUFPO1lBQ1BhLEVBQUUsRUFBRyxJQUFJOzs7OztpQkFDVCxDQUFDO0tBRVosRUFBRSxFQUFFLENBQUM7SUEwRE4scUJBQ0UsOERBQUNpQixLQUFHO1FBQUNDLFNBQVMsRUFBQyxLQUFLOzswQkFDbEIsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxLQUFLO2dCQUFDQyxPQUFPLEVBQUV4QixZQUFZOzBCQUN4Qyw0RUFBQ1QsK0NBQU07Ozs7d0JBQUc7Ozs7O29CQUNOOzBCQUNOLDhEQUFDK0IsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFVBQVU7MEJBQ3ZCLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsV0FBVzs4QkFDdkJOLElBQUk7Ozs7O3dCQUNEOzs7OztvQkFDRjs7Ozs7O1lBQ0YsQ0FFUDtDQUNGO0dBN0Z1QmxCLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZiYXInXG5pbXBvcnQgQWJvdXRNZSBmcm9tICcuL0Fib3V0TWUnXG5pbXBvcnQgVW5pdHlQcm9qZWN0cyBmcm9tICcuL1VuaXR5UHJvamVjdHMnXG5pbXBvcnQgVW5pdHksIHtVbml0eUNvbnRleHR9IGZyb20gJ3JlYWN0LXVuaXR5LXdlYmdsJztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZShcIm1lXCIpO1xuICBjb25zdCBbY3VySWQsIHNldEN1cklkXSA9IHVzZVN0YXRlKFwibWVcIilcbiAgY29uc3QgdW5pdHlDb250ZXh0REogPSBuZXcgVW5pdHlDb250ZXh0KHtcbiAgICBsb2FkZXJVcmw6IFwiYnVpbGQvREovQnVpbGQvREoubG9hZGVyLmpzXCIsXG4gICAgZGF0YVVybDogXCJidWlsZC9ESi9CdWlsZC9ESi5kYXRhXCIsXG4gICAgZnJhbWV3b3JrVXJsOiBcImJ1aWxkL0RKL0J1aWxkL0RKLmZyYW1ld29yay5qc1wiLFxuICAgIGNvZGVVcmw6IFwiYnVpbGQvREovQnVpbGQvREoud2FzbVwiLFxufSk7XG5cbmNvbnN0IHVuaXR5Q29udGV4dEZEID0gbmV3IFVuaXR5Q29udGV4dCh7XG4gICAgbG9hZGVyVXJsOiBcImJ1aWxkL0ZEL0J1aWxkL0ZELmxvYWRlci5qc1wiLFxuICAgIGRhdGFVcmw6IFwiYnVpbGQvRkQvQnVpbGQvRkQuZGF0YVwiLFxuICAgIGZyYW1ld29ya1VybDogXCJidWlsZC9GRC9CdWlsZC9GRC5mcmFtZXdvcmsuanNcIixcbiAgICBjb2RlVXJsOiBcImJ1aWxkL0ZEL0J1aWxkL0ZELndhc21cIixcbn0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEJvZHkoIDxBYm91dE1lXG4gICAgICAgICAgICAgIGlkID0gXCJtZVwiXG4gICAgICAgICAgICAvPilcblxuICB9LCBbXSlcblxuICBmdW5jdGlvbiB0YWJTZWxlY3Rpb24oZSl7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpXG4gICAgaWYoZSA9PSBcIm1lXCIpe1xuICAgICAgY29uc29sZS5sb2coJ3Rlc3QxJyk7XG4gICAgICBzZXRCb2R5KHNob3dUYWIoZSkpO1xuICAgIH1lbHNlIGlmKGUudGFyZ2V0LmlkID09IFwibWVcIiB8fCBlLnRhcmdldC5pZCA9PSBcImZkXCIgfHwgZS50YXJnZXQuaWQgPT0gXCJkalwiKXtcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXN0MicpO1xuICAgICAgc2V0Qm9keShzaG93VGFiKGUudGFyZ2V0LmlkKSk7XG4gICAgfSAgICBcbiAgfVxuICBcbiAgZnVuY3Rpb24gc2hvd1RhYih0YWIpe1xuICAgIGNvbnNvbGUubG9nKHRhYiwgY3VySWQpO1xuXG4gICAgaWYodGFiID09IFwiZGpcIiAmJiBjdXJJZCA9PSBcImZkXCIpe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgPFVuaXR5UHJvamVjdHNcbiAgICAgICAgICBpZCA9IFwiZGpcIlxuICAgICAgICAgIHVuaXR5Q29udGV4dD17dW5pdHlDb250ZXh0REp9XG4gICAgICAgIC8+XG4gICAgfWVsc2UgaWYodGFiID09IFwiZmRcIiAmJiBjdXJJZCA9PSBcImRqXCIpe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgPFVuaXR5UHJvamVjdHNcbiAgICAgICAgICBpZCA9IFwiZmRcIlxuICAgICAgICAgIHVuaXR5Q29udGV4dD17dW5pdHlDb250ZXh0RkR9XG4gICAgICAgIC8+XG5cblxuICAgIH1cbiAgICBpZih0YWIgPT0gXCJtZVwiKXtcbiAgICAgIHNldEN1cklkKFwibWVcIik7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxBYm91dE1lXG4gICAgICAgICAgaWQgPSBcIm1lXCJcbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYodGFiID09IFwiZmRcIil7XG4gICAgICBzZXRDdXJJZChcImZkXCIpO1xuXG4gICAgICByZXR1cm4oXG4gICAgICAgIDxVbml0eVByb2plY3RzXG4gICAgICAgICAgaWQgPSBcImZkXCJcbiAgICAgICAgICB1bml0eUNvbnRleHQ9e3VuaXR5Q29udGV4dEZEfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1lbHNlIGlmKHRhYiA9PSBcImRqXCIpe1xuICAgICAgc2V0Q3VySWQoXCJkalwiKTtcblxuICAgICAgcmV0dXJuKFxuICAgICAgICA8VW5pdHlQcm9qZWN0c1xuICAgICAgICAgIGlkID0gXCJkalwiXG4gICAgICAgICAgdW5pdHlDb250ZXh0PXt1bml0eUNvbnRleHRESn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J25hdicgb25DbGljaz17dGFiU2VsZWN0aW9ufT5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG90LWJvZHknPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIHtib2R5fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICApXG59XG4iXSwibmFtZXMiOlsiTmF2QmFyIiwiQWJvdXRNZSIsIlVuaXR5UHJvamVjdHMiLCJVbml0eSIsIlVuaXR5Q29udGV4dCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwidGFiU2VsZWN0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpZCIsInNldEJvZHkiLCJzaG93VGFiIiwidGFiIiwiY3VySWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lckhUTUwiLCJ1bml0eUNvbnRleHQiLCJ1bml0eUNvbnRleHRESiIsInVuaXR5Q29udGV4dEZEIiwic2V0Q3VySWQiLCJib2R5IiwibG9hZGVyVXJsIiwiZGF0YVVybCIsImZyYW1ld29ya1VybCIsImNvZGVVcmwiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});