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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Crud = ()=>{\n    const qs = __webpack_require__(/*! qs */ \"qs\");\n    const url = \"http://localhost:4000/post\";\n    const { 0: name , 1: setname  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const config = {\n        headers: {\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        }\n    };\n    const data = qs.stringify({\n        name: name\n    });\n    const onSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(url, data, config);\n            console.log(resp);\n        } catch (err) {\n            alert(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"exampleInputEmail1\",\n                                className: \"form-label\",\n                                children: \"Email address\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"form-control\",\n                                value: name,\n                                onChange: (e)=>setname(e.target.value)\n                                ,\n                                \"aria-describedby\": \"emailHelp\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"emailHelp\",\n                                className: \"form-text\",\n                                children: \"We'll never share your email with anyone else.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        onClick: onSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Crud);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcnVkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDZjtBQUVPO0FBRWpDLE1BQU1HLElBQUksR0FBRyxJQUFNO0lBQ2pCLE1BQU1DLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQyxjQUFJLENBQUM7SUFDeEIsTUFBTUMsR0FBRyxHQUFHLDRCQUE0QjtJQUN4QyxNQUFNLEVBUlIsR0FRU0MsSUFBSSxHQVJiLEdBUWVDLE9BQU8sTUFBSU4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFcEMsTUFBTU8sTUFBTSxHQUFHO1FBQ2JDLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQ7S0FDRjtJQUNELE1BQU1DLElBQUksR0FBR1AsRUFBRSxDQUFDUSxTQUFTLENBQUM7UUFDeEJMLElBQUksRUFBRUEsSUFBSTtLQUNYLENBQUM7SUFFRixNQUFNTSxRQUFRLEdBQUcsT0FBT0MsQ0FBQyxHQUFLO1FBQzVCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUk7WUFDRixNQUFNQyxJQUFJLEdBQUcsTUFBTWYsaURBQVUsQ0FBQ0ssR0FBRyxFQUFFSyxJQUFJLEVBQUVGLE1BQU0sQ0FBQztZQUNoRFMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO1NBQ25CLENBQUMsT0FBT0ksR0FBRyxFQUFFO1lBQ1pDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQUM7U0FDWjtLQUNGO0lBQ0QscUJBQ0UsOERBQUNFLEtBQUc7a0JBQ0YsNEVBQUNDLE1BQUk7c0JBQ0gsNEVBQUNDLE1BQUk7O2tDQUNILDhEQUFDRixLQUFHO3dCQUFDRyxTQUFTLEVBQUMsTUFBTTs7MENBQ25CLDhEQUFDQyxPQUFLO2dDQUFDQyxPQUFPLEVBQUMsb0JBQW9CO2dDQUFDRixTQUFTLEVBQUMsWUFBWTswQ0FBQyxlQUUzRDs7Ozs7eUNBQVE7MENBQ1IsOERBQUNHLE9BQUs7Z0NBQ0pILFNBQVMsRUFBQyxjQUFjO2dDQUN4QkksS0FBSyxFQUFFdEIsSUFBSTtnQ0FDWHVCLFFBQVEsRUFBRSxDQUFDaEIsQ0FBQyxHQUFLTixPQUFPLENBQUNNLENBQUMsQ0FBQ2lCLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO2dDQUFBO2dDQUN4Q0csa0JBQWdCLEVBQUMsV0FBVzs7Ozs7eUNBQzVCOzBDQUNGLDhEQUFDVixLQUFHO2dDQUFDVyxFQUFFLEVBQUMsV0FBVztnQ0FBQ1IsU0FBUyxFQUFDLFdBQVc7MENBQUMsZ0RBRTFDOzs7Ozt5Q0FBTTs7Ozs7O2lDQUNGO2tDQUNOLDhEQUFDUyxRQUFNO3dCQUFDVCxTQUFTLEVBQUMsaUJBQWlCO3dCQUFDVSxPQUFPLEVBQUV0QixRQUFRO2tDQUFFLFFBRXZEOzs7OztpQ0FBUzs7Ozs7O3lCQUNKOzs7OztxQkFDRjs7Ozs7aUJBQ0gsQ0FDTjtDQUNIO0FBRUQsaUVBQWVWLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvY3J1ZC50c3g/MmMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENydWQgPSAoKSA9PiB7XG4gIGNvbnN0IHFzID0gcmVxdWlyZShcInFzXCIpO1xuICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wb3N0XCI7XG4gIGNvbnN0IFtuYW1lLCBzZXRuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgIH0sXG4gIH07XG4gIGNvbnN0IGRhdGEgPSBxcy5zdHJpbmdpZnkoe1xuICAgIG5hbWU6IG5hbWUsXG4gIH0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBBeGlvcy5wb3N0KHVybCwgZGF0YSwgY29uZmlnKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICBFbWFpbCBhZGRyZXNzXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldG5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPVwiZm9ybS10ZXh0XCI+XG4gICAgICAgICAgICAgIFdlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17b25TdWJtaXR9PlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENydWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBeGlvcyIsInVzZVN0YXRlIiwiQ3J1ZCIsInFzIiwicmVxdWlyZSIsInVybCIsIm5hbWUiLCJzZXRuYW1lIiwiY29uZmlnIiwiaGVhZGVycyIsImRhdGEiLCJzdHJpbmdpZnkiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3AiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImVyciIsImFsZXJ0IiwiZGl2IiwibWFpbiIsImZvcm0iLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJhcmlhLWRlc2NyaWJlZGJ5IiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/crud.tsx\n");

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