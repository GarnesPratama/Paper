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
exports.id = "pages/crud";
exports.ids = ["pages/crud"];
exports.modules = {

/***/ "./pages/crud.tsx":
/*!************************!*\
  !*** ./pages/crud.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Crud = ()=>{\n    const url = \"http://localhost:4000/post\";\n    const { 0: name , 1: setname  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const config = {\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    };\n    const data = JSON.stringify({\n        name\n    });\n    const onSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(url, data, config);\n            console.log(resp.data);\n        } catch (err) {\n            alert(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: onSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"exampleInputEmail1\",\n                                className: \"form-label\",\n                                children: \"Email address\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"form-control\",\n                                value: name,\n                                onChange: (e)=>setname(e.target.value)\n                                ,\n                                \"aria-describedby\": \"emailHelp\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"emailHelp\",\n                                className: \"form-text\",\n                                children: \"We'll never share your email with anyone else.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Crud);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcnVkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDQTtBQUNPO0FBRWpDLE1BQU1HLElBQUksR0FBRyxJQUFNO0lBQ2pCLE1BQU1DLEdBQUcsR0FBRyw0QkFBNEI7SUFDeEMsTUFBTSxFQU5SLEdBTVNDLElBQUksR0FOYixHQU1lQyxPQUFPLE1BQUlKLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRXBDLE1BQU1LLE1BQU0sR0FBRztRQUNiQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO0tBQ0Y7SUFDRCxNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1FBQzFCTixJQUFJO0tBQ0wsQ0FBQztJQUVGLE1BQU1PLFFBQVEsR0FBRyxPQUFPQyxDQUFDLEdBQUs7UUFDNUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSTtZQUNGLE1BQU1DLElBQUksR0FBRyxNQUFNZCxpREFBVSxDQUFDRyxHQUFHLEVBQUVLLElBQUksRUFBRUYsTUFBTSxDQUFDO1lBQ2hEVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDTixJQUFJLENBQUMsQ0FBQztTQUN4QixDQUFDLE9BQU9VLEdBQUcsRUFBRTtZQUNaQyxLQUFLLENBQUNELEdBQUcsQ0FBQyxDQUFDO1NBQ1o7S0FDRjtJQUNELHFCQUNFLDhEQUFDRSxLQUFHO2tCQUNGLDRFQUFDQyxNQUFJO3NCQUNILDRFQUFDQyxNQUFJO2dCQUFDWCxRQUFRLEVBQUVBLFFBQVE7O2tDQUN0Qiw4REFBQ1MsS0FBRzt3QkFBQ0csU0FBUyxFQUFDLE1BQU07OzBDQUNuQiw4REFBQ0MsT0FBSztnQ0FBQ0MsT0FBTyxFQUFDLG9CQUFvQjtnQ0FBQ0YsU0FBUyxFQUFDLFlBQVk7MENBQUMsZUFFM0Q7Ozs7O3lDQUFROzBDQUNSLDhEQUFDRyxPQUFLO2dDQUNKSCxTQUFTLEVBQUMsY0FBYztnQ0FDeEJJLEtBQUssRUFBRXZCLElBQUk7Z0NBQ1h3QixRQUFRLEVBQUUsQ0FBQ2hCLENBQUMsR0FBS1AsT0FBTyxDQUFDTyxDQUFDLENBQUNpQixNQUFNLENBQUNGLEtBQUssQ0FBQztnQ0FBQTtnQ0FDeENHLGtCQUFnQixFQUFDLFdBQVc7Ozs7O3lDQUM1QjswQ0FDRiw4REFBQ1YsS0FBRztnQ0FBQ1csRUFBRSxFQUFDLFdBQVc7Z0NBQUNSLFNBQVMsRUFBQyxXQUFXOzBDQUFDLGdEQUUxQzs7Ozs7eUNBQU07Ozs7OztpQ0FDRjtrQ0FDTiw4REFBQ1MsUUFBTTt3QkFBQ1QsU0FBUyxFQUFDLGlCQUFpQjtrQ0FBQyxRQUFNOzs7OztpQ0FBUzs7Ozs7O3lCQUM5Qzs7Ozs7cUJBQ0Y7Ozs7O2lCQUNILENBQ047Q0FDSDtBQUVELGlFQUFlckIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9jcnVkLnRzeD8yYzAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENydWQgPSAoKSA9PiB7XG4gIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Bvc3RcIjtcbiAgY29uc3QgW25hbWUsIHNldG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gIH07XG4gIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgbmFtZSxcbiAgfSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IEF4aW9zLnBvc3QodXJsLCBkYXRhLCBjb25maWcpO1xuICAgICAgY29uc29sZS5sb2cocmVzcC5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVycik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICBFbWFpbCBhZGRyZXNzXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldG5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPVwiZm9ybS10ZXh0XCI+XG4gICAgICAgICAgICAgIFdlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENydWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBeGlvcyIsInVzZVN0YXRlIiwiQ3J1ZCIsInVybCIsIm5hbWUiLCJzZXRuYW1lIiwiY29uZmlnIiwiaGVhZGVycyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJhbGVydCIsImRpdiIsIm1haW4iLCJmb3JtIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYXJpYS1kZXNjcmliZWRieSIsImlkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/crud.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/crud.tsx"));
module.exports = __webpack_exports__;

})();