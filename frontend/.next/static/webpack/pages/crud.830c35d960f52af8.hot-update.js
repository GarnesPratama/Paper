"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/crud",{

/***/ "./pages/crud.tsx":
/*!************************!*\
  !*** ./pages/crud.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Crud = function() {\n    _s();\n    var qs = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n    var url = \"http://localhost:4000/post\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref[0], setname = ref[1];\n    var config = {\n        headers: {\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        }\n    };\n    var data = qs.stringify({\n        name: name\n    });\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var resp;\n            return _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().post(url, data, config);\n                    case 4:\n                        resp = _ctx.sent;\n                        console.log(resp);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        alert(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    8\n                ]\n            ]);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"exampleInputEmail1\",\n                                className: \"form-label\",\n                                children: \"Email address\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                className: \"form-control\",\n                                value: name,\n                                onChange: function(e) {\n                                    return setname(e.target.value);\n                                },\n                                \"aria-describedby\": \"emailHelp\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                id: \"emailHelp\",\n                                className: \"form-text\",\n                                children: \"We'll never share your email with anyone else.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        onClick: onSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/crud.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(Crud, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = Crud;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Crud);\nvar _c;\n$RefreshReg$(_c, \"Crud\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcnVkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDZjtBQUVPOztBQUVqQyxJQUFNRyxJQUFJLEdBQUcsV0FBTTs7SUFDakIsSUFBTUMsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLDBDQUFJLENBQUM7SUFDeEIsSUFBTUMsR0FBRyxHQUFHLDRCQUE0QjtJQUN4QyxJQUF3QkosR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVJ0QyxJQVFhLEdBQWFBLEdBQVksR0FBekIsRUFSYixPQVFzQixHQUFJQSxHQUFZLEdBQWhCO0lBRXBCLElBQU1PLE1BQU0sR0FBRztRQUNiQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsbUNBQW1DO1NBQ3BEO0tBQ0Y7SUFDRCxJQUFNQyxJQUFJLEdBQUdQLEVBQUUsQ0FBQ1EsU0FBUyxDQUFDO1FBQ3hCTCxJQUFJLEVBQUVBLElBQUk7S0FDWCxDQUFDO0lBRUYsSUFBTU0sUUFBUTttQkFBRyw0TEFBT0MsQ0FBQyxFQUFLO2dCQUdwQkMsSUFBSTs7Ozt3QkFGWkQsQ0FBQyxDQUFDRSxjQUFjLEVBQUUsQ0FBQzs7OytCQUVFZixpREFBVSxDQUFDSyxHQUFHLEVBQUVLLElBQUksRUFBRUYsTUFBTSxDQUFDOzt3QkFBMUNNLElBQUksWUFBc0M7d0JBQ2hERyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDLENBQUM7Ozs7Ozt3QkFFbEJLLEtBQUssU0FBSyxDQUFDOzs7Ozs7Ozs7OztTQUVkO3dCQVJLUCxRQUFRLENBQVVDLENBQUM7OztPQVF4QjtJQUNELHFCQUNFLDhEQUFDTyxLQUFHO2tCQUNGLDRFQUFDQyxNQUFJO3NCQUNILDRFQUFDQyxNQUFJOztrQ0FDSCw4REFBQ0YsS0FBRzt3QkFBQ0csU0FBUyxFQUFDLE1BQU07OzBDQUNuQiw4REFBQ0MsT0FBSztnQ0FBQ0MsT0FBTyxFQUFDLG9CQUFvQjtnQ0FBQ0YsU0FBUyxFQUFDLFlBQVk7MENBQUMsZUFFM0Q7Ozs7O3FDQUFROzBDQUNSLDhEQUFDRyxPQUFLO2dDQUNKSCxTQUFTLEVBQUMsY0FBYztnQ0FDeEJJLEtBQUssRUFBRXJCLElBQUk7Z0NBQ1hzQixRQUFRLEVBQUUsU0FBQ2YsQ0FBQzsyQ0FBS04sT0FBTyxDQUFDTSxDQUFDLENBQUNnQixNQUFNLENBQUNGLEtBQUssQ0FBQztpQ0FBQTtnQ0FDeENHLGtCQUFnQixFQUFDLFdBQVc7Ozs7O3FDQUM1QjswQ0FDRiw4REFBQ1YsS0FBRztnQ0FBQ1csRUFBRSxFQUFDLFdBQVc7Z0NBQUNSLFNBQVMsRUFBQyxXQUFXOzBDQUFDLGdEQUUxQzs7Ozs7cUNBQU07Ozs7Ozs2QkFDRjtrQ0FDTiw4REFBQ1MsUUFBTTt3QkFBQ1QsU0FBUyxFQUFDLGlCQUFpQjt3QkFBQ1UsT0FBTyxFQUFFckIsUUFBUTtrQ0FBRSxRQUV2RDs7Ozs7NkJBQVM7Ozs7OztxQkFDSjs7Ozs7aUJBQ0Y7Ozs7O2FBQ0gsQ0FDTjtDQUNIO0dBaERLVixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFrRFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcnVkLnRzeD8yYzAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ3J1ZCA9ICgpID0+IHtcbiAgY29uc3QgcXMgPSByZXF1aXJlKFwicXNcIik7XG4gIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Bvc3RcIjtcbiAgY29uc3QgW25hbWUsIHNldG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgZGF0YSA9IHFzLnN0cmluZ2lmeSh7XG4gICAgbmFtZTogbmFtZSxcbiAgfSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IEF4aW9zLnBvc3QodXJsLCBkYXRhLCBjb25maWcpO1xuICAgICAgY29uc29sZS5sb2cocmVzcCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3NcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0bmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHRcIj5cbiAgICAgICAgICAgICAgV2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbCB3aXRoIGFueW9uZSBlbHNlLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtvblN1Ym1pdH0+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3J1ZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF4aW9zIiwidXNlU3RhdGUiLCJDcnVkIiwicXMiLCJyZXF1aXJlIiwidXJsIiwibmFtZSIsInNldG5hbWUiLCJjb25maWciLCJoZWFkZXJzIiwiZGF0YSIsInN0cmluZ2lmeSIsIm9uU3VibWl0IiwiZSIsInJlc3AiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJkaXYiLCJtYWluIiwiZm9ybSIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImFyaWEtZGVzY3JpYmVkYnkiLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/crud.tsx\n");

/***/ })

});