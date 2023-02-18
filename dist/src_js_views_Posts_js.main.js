"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdistributetest"] = self["webpackChunkdistributetest"] || []).push([["src_js_views_Posts_js"],{

/***/ "./src/js/views/AbstractView.js":
/*!**************************************!*\
  !*** ./src/js/views/AbstractView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n    constructor(params) {\n        this.params = params;\n    }\n\n    setTitle(title) {\n        document.title = title;\n    }\n\n    async getHTML() {\n        return \"\";\n    }\n});\n\n//# sourceURL=webpack://distributetest/./src/js/views/AbstractView.js?");

/***/ }),

/***/ "./src/js/views/Posts.js":
/*!*******************************!*\
  !*** ./src/js/views/Posts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Posts)\n/* harmony export */ });\n/* harmony import */ var _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView.js */ \"./src/js/views/AbstractView.js\");\n\n\nclass Posts extends _AbstractView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(params) {\n        // 서브 클래스에서 constructor를 생략하지 않는 경우 반드시 super를 호출해야 한다.\n        super(params);\n        this.setTitle(\"Posts\");\n    }\n\n    getHTML() {\n        return `\n            <h1>Posts</h1>\n            <p>You are viewing the posts!</p>\n        `;\n    }\n}\n\n//# sourceURL=webpack://distributetest/./src/js/views/Posts.js?");

/***/ })

}]);