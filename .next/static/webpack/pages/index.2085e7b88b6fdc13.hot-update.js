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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./pages/Navbar.js\");\n/* harmony import */ var _AboutMe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutMe */ \"./pages/AboutMe.js\");\n/* harmony import */ var _UnityProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnityProjects */ \"./pages/UnityProjects.js\");\n/* harmony import */ var react_unity_webgl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-unity-webgl */ \"./node_modules/react-unity-webgl/distribution/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    var tabSelection = function tabSelection(e) {\n        console.log(e.target.id);\n        if (e == \"me\") {\n            console.log(\"test1\");\n            setBody(showTab(e));\n        } else if (e.target.id == \"me\" || e.target.id == \"fd\" || e.target.id == \"dj\") {\n            console.log(\"test2\");\n            setBody(showTab(e.target.id));\n        }\n    };\n    var showTab = function showTab(tab) {\n        console.log(tab, curId);\n        // if(tab == \"dj\" && curId == \"fd\"){\n        //   document.getElementsByClassName(\"container\").innerHTML = \"\";\n        //   <UnityProjects\n        //       id = \"dj\"\n        //       unityContext={unityContextDJ}\n        //     />\n        // }else if(tab == \"fd\" && curId == \"dj\"){\n        //   document.getElementsByClassName(\"container\").innerHTML = \"\";\n        //   <UnityProjects\n        //       id = \"fd\"\n        //       unityContext={unityContextFD}\n        //     />\n        // }\n        if (tab == \"me\") {\n            setCurId(\"me\");\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMe__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"me\"\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this);\n        } else if (tab == \"fd\") {\n            setCurId(\"fd\");\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UnityProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: \"fd\",\n                unityContext: unityContextFD\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this);\n        } else if (tab == \"dj\") {\n            setCurId(\"dj\");\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UnityProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: \"dj\",\n                unityContext: unityContextDJ\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    _s();\n    // const [tab, setTab] = useState();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"me\"), body = ref[0], setBody = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"me\"), curId = ref1[0], setCurId = ref1[1];\n    var unityContextDJ = new react_unity_webgl__WEBPACK_IMPORTED_MODULE_4__.UnityContext({\n        loaderUrl: \"build/DJ/Build/DJ.loader.js\",\n        dataUrl: \"build/DJ/Build/DJ.data\",\n        frameworkUrl: \"build/DJ/Build/DJ.framework.js\",\n        codeUrl: \"build/DJ/Build/DJ.wasm\"\n    });\n    var unityContextFD = new react_unity_webgl__WEBPACK_IMPORTED_MODULE_4__.UnityContext({\n        loaderUrl: \"build/FD/Build/FD.loader.js\",\n        dataUrl: \"build/FD/Build/FD.data\",\n        frameworkUrl: \"build/FD/Build/FD.framework.js\",\n        codeUrl: \"build/FD/Build/FD.wasm\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        setBody(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMe__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            id: \"me\"\n        }, void 0, false, {\n            fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n            lineNumber: 26,\n            columnNumber: 14\n        }, _this));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav\",\n                onClick: tabSelection,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tot-body\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: body\n                }, void 0, false, {\n                    fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/connorpepin/React/next-portfolio/pages/index.js\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"ZFtNncMbd08pTRoRnbJnt0HfzW0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5Q0MsT0FBTyxFQUFFLHdCQUF3QjtLQUNwQyxDQUFDO0lBQ0FyQixnREFBUyxDQUFDLFdBQU07UUFDZFMsT0FBTyxlQUFFLDhEQUFDZCxnREFBTztZQUNQYSxFQUFFLEVBQUcsSUFBSTs7Ozs7aUJBQ1QsQ0FBQztLQUVaLEVBQUUsRUFBRSxDQUFDO0lBd0ROLHFCQUNFLDhEQUFDYyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxLQUFLOzswQkFDbEIsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxLQUFLO2dCQUFDQyxPQUFPLEVBQUVyQixZQUFZOzBCQUN4Qyw0RUFBQ1QsK0NBQU07Ozs7d0JBQUc7Ozs7O29CQUNOOzBCQUNOLDhEQUFDNEIsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFVBQVU7MEJBQ3ZCLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsV0FBVzs4QkFDdkJOLElBQUk7Ozs7O3dCQUNEOzs7OztvQkFDRjs7Ozs7O1lBQ0YsQ0FFUDtDQUNGO0dBM0Z1QmYsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdmJhcidcbmltcG9ydCBBYm91dE1lIGZyb20gJy4vQWJvdXRNZSdcbmltcG9ydCBVbml0eVByb2plY3RzIGZyb20gJy4vVW5pdHlQcm9qZWN0cydcbmltcG9ydCBVbml0eSwge1VuaXR5Q29udGV4dH0gZnJvbSAncmVhY3QtdW5pdHktd2ViZ2wnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKFwibWVcIik7XG4gIGNvbnN0IFtjdXJJZCwgc2V0Q3VySWRdID0gdXNlU3RhdGUoXCJtZVwiKVxuICBjb25zdCB1bml0eUNvbnRleHRESiA9IG5ldyBVbml0eUNvbnRleHQoe1xuICAgIGxvYWRlclVybDogXCJidWlsZC9ESi9CdWlsZC9ESi5sb2FkZXIuanNcIixcbiAgICBkYXRhVXJsOiBcImJ1aWxkL0RKL0J1aWxkL0RKLmRhdGFcIixcbiAgICBmcmFtZXdvcmtVcmw6IFwiYnVpbGQvREovQnVpbGQvREouZnJhbWV3b3JrLmpzXCIsXG4gICAgY29kZVVybDogXCJidWlsZC9ESi9CdWlsZC9ESi53YXNtXCIsXG59KTtcblxuY29uc3QgdW5pdHlDb250ZXh0RkQgPSBuZXcgVW5pdHlDb250ZXh0KHtcbiAgICBsb2FkZXJVcmw6IFwiYnVpbGQvRkQvQnVpbGQvRkQubG9hZGVyLmpzXCIsXG4gICAgZGF0YVVybDogXCJidWlsZC9GRC9CdWlsZC9GRC5kYXRhXCIsXG4gICAgZnJhbWV3b3JrVXJsOiBcImJ1aWxkL0ZEL0J1aWxkL0ZELmZyYW1ld29yay5qc1wiLFxuICAgIGNvZGVVcmw6IFwiYnVpbGQvRkQvQnVpbGQvRkQud2FzbVwiLFxufSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Qm9keSggPEFib3V0TWVcbiAgICAgICAgICAgICAgaWQgPSBcIm1lXCJcbiAgICAgICAgICAgIC8+KVxuXG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIHRhYlNlbGVjdGlvbihlKXtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZClcbiAgICBpZihlID09IFwibWVcIil7XG4gICAgICBjb25zb2xlLmxvZygndGVzdDEnKTtcbiAgICAgIHNldEJvZHkoc2hvd1RhYihlKSk7XG4gICAgfWVsc2UgaWYoZS50YXJnZXQuaWQgPT0gXCJtZVwiIHx8IGUudGFyZ2V0LmlkID09IFwiZmRcIiB8fCBlLnRhcmdldC5pZCA9PSBcImRqXCIpe1xuICAgICAgY29uc29sZS5sb2coJ3Rlc3QyJyk7XG4gICAgICBzZXRCb2R5KHNob3dUYWIoZS50YXJnZXQuaWQpKTtcbiAgICB9ICAgIFxuICB9XG4gIFxuICBmdW5jdGlvbiBzaG93VGFiKHRhYil7XG4gICAgY29uc29sZS5sb2codGFiLCBjdXJJZCk7XG5cbiAgICAvLyBpZih0YWIgPT0gXCJkalwiICYmIGN1cklkID09IFwiZmRcIil7XG4gICAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgLy8gICA8VW5pdHlQcm9qZWN0c1xuICAgIC8vICAgICAgIGlkID0gXCJkalwiXG4gICAgLy8gICAgICAgdW5pdHlDb250ZXh0PXt1bml0eUNvbnRleHRESn1cbiAgICAvLyAgICAgLz5cbiAgICAvLyB9ZWxzZSBpZih0YWIgPT0gXCJmZFwiICYmIGN1cklkID09IFwiZGpcIil7XG4gICAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgLy8gICA8VW5pdHlQcm9qZWN0c1xuICAgIC8vICAgICAgIGlkID0gXCJmZFwiXG4gICAgLy8gICAgICAgdW5pdHlDb250ZXh0PXt1bml0eUNvbnRleHRGRH1cbiAgICAvLyAgICAgLz5cbiAgICAvLyB9XG4gICAgaWYodGFiID09IFwibWVcIil7XG4gICAgICBzZXRDdXJJZChcIm1lXCIpO1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8QWJvdXRNZVxuICAgICAgICAgIGlkID0gXCJtZVwiXG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSBlbHNlIGlmKHRhYiA9PSBcImZkXCIpe1xuICAgICAgc2V0Q3VySWQoXCJmZFwiKTtcblxuICAgICAgcmV0dXJuKFxuICAgICAgICA8VW5pdHlQcm9qZWN0c1xuICAgICAgICAgIGlkID0gXCJmZFwiXG4gICAgICAgICAgdW5pdHlDb250ZXh0PXt1bml0eUNvbnRleHRGRH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9ZWxzZSBpZih0YWIgPT0gXCJkalwiKXtcbiAgICAgIHNldEN1cklkKFwiZGpcIik7XG5cbiAgICAgIHJldHVybihcbiAgICAgICAgPFVuaXR5UHJvamVjdHNcbiAgICAgICAgICBpZCA9IFwiZGpcIlxuICAgICAgICAgIHVuaXR5Q29udGV4dD17dW5pdHlDb250ZXh0REp9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXYnIG9uQ2xpY2s9e3RhYlNlbGVjdGlvbn0+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvdC1ib2R5Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICB7Ym9keX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKVxufVxuIl0sIm5hbWVzIjpbIk5hdkJhciIsIkFib3V0TWUiLCJVbml0eVByb2plY3RzIiwiVW5pdHkiLCJVbml0eUNvbnRleHQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInRhYlNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiaWQiLCJzZXRCb2R5Iiwic2hvd1RhYiIsInRhYiIsImN1cklkIiwic2V0Q3VySWQiLCJ1bml0eUNvbnRleHQiLCJ1bml0eUNvbnRleHRGRCIsInVuaXR5Q29udGV4dERKIiwiYm9keSIsImxvYWRlclVybCIsImRhdGFVcmwiLCJmcmFtZXdvcmtVcmwiLCJjb2RlVXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});