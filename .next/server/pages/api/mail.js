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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst mail = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\nmail.setApiKey(\"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\");\nfunction handler(req, res) {\n    const body = JSON.parse(req.body);\n    const message = `\n    Name: ${body.name}\\r\\n\n    Email: ${body.email}\\r\\n\n    Message: ${body.message}\\r\\n\n  `;\n    const data = {\n        to: \"cjpepin032@gmail.com\",\n        from: \"hello@connorjpepin.com\",\n        subject: `New message from ${body.name}`,\n        text: message,\n        html: message.replace(/\\r\\n/g, \"<br>\")\n    };\n    console.log(mail);\n    mail.send(data);\n    console.log(res.status);\n    res.status(200).json({\n        status: \"Ok\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBQzdFLE1BQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxzQ0FBZ0IsQ0FBQztBQUV0Q0QsSUFBSSxDQUFDRSxTQUFTLENBQUMsdUVBQXVFLENBQUMsQ0FBQztBQUN6RSxTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLE1BQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDO0lBRWpDLE1BQU1HLE9BQU8sR0FBSSxDQUFDO1VBQ1YsRUFBRUgsSUFBSSxDQUFDSSxJQUFJLENBQUM7V0FDWCxFQUFFSixJQUFJLENBQUNLLEtBQUssQ0FBQzthQUNYLEVBQUVMLElBQUksQ0FBQ0csT0FBTyxDQUFDO0VBQzFCLENBQUM7SUFFRCxNQUFNRyxJQUFJLEdBQUc7UUFDWEMsRUFBRSxFQUFFLHNCQUFzQjtRQUMxQkMsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QkMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUVULElBQUksQ0FBQ0ksSUFBSSxDQUFDLENBQUM7UUFDeENNLElBQUksRUFBRVAsT0FBTztRQUNiUSxJQUFJLEVBQUVSLE9BQU8sQ0FBQ1MsT0FBTyxVQUFVLE1BQU0sQ0FBQztLQUN2QztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3BCLElBQUksQ0FBQztJQUNqQkEsSUFBSSxDQUFDcUIsSUFBSSxDQUFDVCxJQUFJLENBQUMsQ0FBQztJQUNoQk8sT0FBTyxDQUFDQyxHQUFHLENBQUNmLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQztJQUN2QmpCLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVELE1BQU0sRUFBRSxJQUFJO0tBQUUsQ0FBQztDQUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vcGFnZXMvYXBpL21haWwuanM/N2QxNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuY29uc3QgbWFpbCA9IHJlcXVpcmUoXCJAc2VuZGdyaWQvbWFpbFwiKTtcblxubWFpbC5zZXRBcGlLZXkoXCJTRy5XZkx1TFkwZ1Q2LTRpWllyM1VBYlJ3LlE2ZVU1dU9kSDJJYzg3V0ItMVltaTN3ZXE1eExNNThyeVgxNFBxckZ1YTBcIik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcblxuICBjb25zdCBtZXNzYWdlID0gIGBcbiAgICBOYW1lOiAke2JvZHkubmFtZX1cXHJcXG5cbiAgICBFbWFpbDogJHtib2R5LmVtYWlsfVxcclxcblxuICAgIE1lc3NhZ2U6ICR7Ym9keS5tZXNzYWdlfVxcclxcblxuICBgO1xuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdG86ICdjanBlcGluMDMyQGdtYWlsLmNvbScsXG4gICAgZnJvbTogJ2hlbGxvQGNvbm5vcmpwZXBpbi5jb20nLFxuICAgIHN1YmplY3Q6IGBOZXcgbWVzc2FnZSBmcm9tICR7Ym9keS5uYW1lfWAsXG4gICAgdGV4dDogbWVzc2FnZSxcbiAgICBodG1sOiBtZXNzYWdlLnJlcGxhY2UoL1xcclxcbi9nLCAnPGJyPicpXG4gIH1cbiAgY29uc29sZS5sb2cobWFpbClcbiAgbWFpbC5zZW5kKGRhdGEpO1xuICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzKVxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogJ09rJyB9KVxufVxuIl0sIm5hbWVzIjpbIm1haWwiLCJyZXF1aXJlIiwic2V0QXBpS2V5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwibmFtZSIsImVtYWlsIiwiZGF0YSIsInRvIiwiZnJvbSIsInN1YmplY3QiLCJ0ZXh0IiwiaHRtbCIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwic2VuZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/mail.js\n");

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