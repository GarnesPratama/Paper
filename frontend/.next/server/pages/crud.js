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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Crud = ()=>{\n    const qs = __webpack_require__(/*! qs */ \"qs\");\n    const url = \"http://localhost:4000/product/post\";\n    const { 0: name , 1: setname  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const config = {\n        headers: {\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        }\n    };\n    const data = qs.stringify({\n        name: name\n    });\n    const onSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(url, data, config);\n            console.log(resp);\n        } catch (err) {\n            alert(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"exampleInputEmail1\",\n                                className: \"form-label\",\n                                children: \"Email address\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"form-control\",\n                                value: name,\n                                onChange: (e)=>setname(e.target.value)\n                                ,\n                                \"aria-describedby\": \"emailHelp\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"emailHelp\",\n                                className: \"form-text\",\n                                children: \"We'll never share your email with anyone else.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        onClick: onSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Crud);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcnVkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDZjtBQUVPO0FBRWpDLE1BQU1HLElBQUksR0FBRyxJQUFNO0lBQ2pCLE1BQU1DLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQyxjQUFJLENBQUM7SUFDeEIsTUFBTUMsR0FBRyxHQUFHLG9DQUFvQztJQUNoRCxNQUFNLEVBUlIsR0FRU0MsSUFBSSxHQVJiLEdBUWVDLE9BQU8sTUFBSU4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFcEMsTUFBTU8sTUFBTSxHQUFHO1FBQ2JDLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQ7S0FDRjtJQUNELE1BQU1DLElBQUksR0FBR1AsRUFBRSxDQUFDUSxTQUFTLENBQUM7UUFDeEJMLElBQUksRUFBRUEsSUFBSTtLQUNYLENBQUM7SUFFRixNQUFNTSxRQUFRLEdBQUcsT0FBT0MsQ0FBQyxHQUFLO1FBQzVCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUk7WUFDRixNQUFNQyxJQUFJLEdBQUcsTUFBTWYsaURBQVUsQ0FBQ0ssR0FBRyxFQUFFSyxJQUFJLEVBQUVGLE1BQU0sQ0FBQztZQUNoRFMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO1NBQ25CLENBQUMsT0FBT0ksR0FBRyxFQUFFO1lBQ1pDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQUM7U0FDWjtLQUNGO0lBQ0QscUJBQ0UsOERBQUNFLEtBQUc7a0JBQ0YsNEVBQUNDLE1BQUk7c0JBQ0gsNEVBQUNDLE1BQUk7O2tDQUNILDhEQUFDRixLQUFHO3dCQUFDRyxTQUFTLEVBQUMsTUFBTTs7MENBQ25CLDhEQUFDQyxPQUFLO2dDQUFDQyxPQUFPLEVBQUMsb0JBQW9CO2dDQUFDRixTQUFTLEVBQUMsWUFBWTswQ0FBQyxlQUUzRDs7Ozs7eUNBQVE7MENBQ1IsOERBQUNHLE9BQUs7Z0NBQ0pILFNBQVMsRUFBQyxjQUFjO2dDQUN4QkksS0FBSyxFQUFFdEIsSUFBSTtnQ0FDWHVCLFFBQVEsRUFBRSxDQUFDaEIsQ0FBQyxHQUFLTixPQUFPLENBQUNNLENBQUMsQ0FBQ2lCLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO2dDQUFBO2dDQUN4Q0csa0JBQWdCLEVBQUMsV0FBVzs7Ozs7eUNBQzVCOzBDQUNGLDhEQUFDVixLQUFHO2dDQUFDVyxFQUFFLEVBQUMsV0FBVztnQ0FBQ1IsU0FBUyxFQUFDLFdBQVc7MENBQUMsZ0RBRTFDOzs7Ozt5Q0FBTTs7Ozs7O2lDQUNGO2tDQUNOLDhEQUFDUyxRQUFNO3dCQUFDVCxTQUFTLEVBQUMsaUJBQWlCO3dCQUFDVSxPQUFPLEVBQUV0QixRQUFRO2tDQUFFLFFBRXZEOzs7OztpQ0FBUzs7Ozs7O3lCQUNKOzs7OztxQkFDRjs7Ozs7aUJBQ0gsQ0FDTjtDQUNIO0FBRUQsaUVBQWVWLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvY3J1ZC50c3g/MmMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENydWQgPSAoKSA9PiB7XG4gIGNvbnN0IHFzID0gcmVxdWlyZShcInFzXCIpO1xuICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wcm9kdWN0L3Bvc3RcIjtcbiAgY29uc3QgW25hbWUsIHNldG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgZGF0YSA9IHFzLnN0cmluZ2lmeSh7XG4gICAgbmFtZTogbmFtZSxcbiAgfSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IEF4aW9zLnBvc3QodXJsLCBkYXRhLCBjb25maWcpO1xuICAgICAgY29uc29sZS5sb2cocmVzcCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3NcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0bmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHRcIj5cbiAgICAgICAgICAgICAgV2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbCB3aXRoIGFueW9uZSBlbHNlLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtvblN1Ym1pdH0+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3J1ZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF4aW9zIiwidXNlU3RhdGUiLCJDcnVkIiwicXMiLCJyZXF1aXJlIiwidXJsIiwibmFtZSIsInNldG5hbWUiLCJjb25maWciLCJoZWFkZXJzIiwiZGF0YSIsInN0cmluZ2lmeSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiYWxlcnQiLCJkaXYiLCJtYWluIiwiZm9ybSIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImFyaWEtZGVzY3JpYmVkYnkiLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/crud.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("qs");

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