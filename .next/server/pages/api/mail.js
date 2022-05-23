"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/mail";
exports.ids = ["pages/api/mail"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "(api)/./pages/api/mail.js":
/*!***************************!*\
  !*** ./pages/api/mail.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst mail = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\nconsole.log(process.env.SENDGRID_API_KEY);\nmail.setApiKey(\"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\");\nfunction handler(req, res) {\n    const body = JSON.parse(req.body);\n    const message = `\n    Name: ${body.name}\\r\\n\n    Email: ${body.email}\\r\\n\n    Message: ${body.message}\\r\\n\n  `;\n    const data = {\n        to: \"cjpepin032@gmail.com\",\n        from: \"hello@connorjpepin.com\",\n        subject: `New message from ${body.name}`,\n        text: message,\n        html: message.replace(/\\r\\n/g, \"<br>\")\n    };\n    mail.send(data);\n    res.status(200).json({\n        status: \"Ok\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBQzdFLE1BQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxzQ0FBZ0IsQ0FBQztBQUN0Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0IsQ0FBQztBQUN6Q04sSUFBSSxDQUFDTyxTQUFTLENBQUMsdUVBQXVFLENBQUMsQ0FBQztBQUN6RSxTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLE1BQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDO0lBRWpDLE1BQU1HLE9BQU8sR0FBSSxDQUFDO1VBQ1YsRUFBRUgsSUFBSSxDQUFDSSxJQUFJLENBQUM7V0FDWCxFQUFFSixJQUFJLENBQUNLLEtBQUssQ0FBQzthQUNYLEVBQUVMLElBQUksQ0FBQ0csT0FBTyxDQUFDO0VBQzFCLENBQUM7SUFFRCxNQUFNRyxJQUFJLEdBQUc7UUFDWEMsRUFBRSxFQUFFLHNCQUFzQjtRQUMxQkMsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QkMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUVULElBQUksQ0FBQ0ksSUFBSSxDQUFDLENBQUM7UUFDeENNLElBQUksRUFBRVAsT0FBTztRQUNiUSxJQUFJLEVBQUVSLE9BQU8sQ0FBQ1MsT0FBTyxVQUFVLE1BQU0sQ0FBQztLQUN2QztJQUNEdkIsSUFBSSxDQUFDd0IsSUFBSSxDQUFDUCxJQUFJLENBQUMsQ0FBQztJQUNoQlAsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFRCxNQUFNLEVBQUUsSUFBSTtLQUFFLENBQUM7Q0FDdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3BhZ2VzL2FwaS9tYWlsLmpzPzdkMTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmNvbnN0IG1haWwgPSByZXF1aXJlKFwiQHNlbmRncmlkL21haWxcIik7XG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5TRU5ER1JJRF9BUElfS0VZKVxubWFpbC5zZXRBcGlLZXkoXCJTRy5FeElSaGx2eFRUR2p0Ujd6SXZGZkNRLkFISVJWT0hlVHpkNzFHcTBfb21vRV9HQ3JqMVJnR2x5eHJuRGFuaVE5WVFcIik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcblxuICBjb25zdCBtZXNzYWdlID0gIGBcbiAgICBOYW1lOiAke2JvZHkubmFtZX1cXHJcXG5cbiAgICBFbWFpbDogJHtib2R5LmVtYWlsfVxcclxcblxuICAgIE1lc3NhZ2U6ICR7Ym9keS5tZXNzYWdlfVxcclxcblxuICBgO1xuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdG86ICdjanBlcGluMDMyQGdtYWlsLmNvbScsXG4gICAgZnJvbTogJ2hlbGxvQGNvbm5vcmpwZXBpbi5jb20nLFxuICAgIHN1YmplY3Q6IGBOZXcgbWVzc2FnZSBmcm9tICR7Ym9keS5uYW1lfWAsXG4gICAgdGV4dDogbWVzc2FnZSxcbiAgICBodG1sOiBtZXNzYWdlLnJlcGxhY2UoL1xcclxcbi9nLCAnPGJyPicpXG4gIH1cbiAgbWFpbC5zZW5kKGRhdGEpO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogJ09rJyB9KVxufVxuIl0sIm5hbWVzIjpbIm1haWwiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJTRU5ER1JJRF9BUElfS0VZIiwic2V0QXBpS2V5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwibmFtZSIsImVtYWlsIiwiZGF0YSIsInRvIiwiZnJvbSIsInN1YmplY3QiLCJ0ZXh0IiwiaHRtbCIsInJlcGxhY2UiLCJzZW5kIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/mail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mail.js"));
module.exports = __webpack_exports__;

})();