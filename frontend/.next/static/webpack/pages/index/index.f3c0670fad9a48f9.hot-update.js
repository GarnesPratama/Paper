"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index/index",{

/***/ "./pages/index/index.tsx":
/*!*******************************!*\
  !*** ./pages/index/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Organism_Interface_navbar_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Organism/Interface/navbar/index */ \"./Organism/Interface/navbar/index.tsx\");\n/* harmony import */ var _Organism_Interface_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Organism/Interface/footer */ \"./Organism/Interface/footer.js\");\n/* harmony import */ var _pricing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pricing */ \"./pages/index/pricing.tsx\");\n/* harmony import */ var _stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stories */ \"./pages/index/stories.tsx\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list */ \"./pages/index/list.tsx\");\n/* harmony import */ var _services_pricing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/pricing */ \"./services/pricing.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar url = \"http://localhost:4000/payment/\";\nfunction index() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), price = ref[0], setprice = ref[1];\n    var paymentData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(_Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_services_pricing__WEBPACK_IMPORTED_MODULE_8__.getMenuPrice)();\n                case 2:\n                    data = _ctx.sent;\n                    setprice(data);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        _services_pricing__WEBPACK_IMPORTED_MODULE_8__.getMenuPrice\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        paymentData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n                className: \"header bg-blank\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Organism_Interface_navbar_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"hero\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"hero-headline\",\n                                children: [\n                                    \"Expand Your \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        className: \"text-gradient-blue\",\n                                        children: \"Knowledge\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 25\n                                    }, this),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {\n                                        className: \"d-none d-lg-block\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"by \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        className: \"text-gradient-pink\",\n                                        children: \"Joining\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 16\n                                    }, this),\n                                    \" Our Greatest Events\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"hero-paragraph\",\n                                children: [\n                                    \"Kami menyediakan website terbaik untuk\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {\n                                        className: \"d-none d-lg-block\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"anda dalam membuat seminar\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"#grow-today\",\n                                className: \"btn-green\",\n                                children: \"Browse Now\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"pricing grow-today\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: price.map(function(item) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"col-lg-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"card mb-5 mb-lg-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_pricing__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            category: item.category,\n                                            price: item.price,\n                                            id: item._id\n                                        }, item._id, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_list__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            list: item.list\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_stories__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Organism_Interface_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n};\n_s(index, \"90NnFwl+nB1cpAJeEDVQCQmX6zs=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lDO0FBQ047QUFDckI7QUFDQTtBQUNZO0FBQ2xCO0FBSTRCO0FBQ2xCOztBQUhwQyxJQUFNVSxHQUFHLEdBQUcsZ0NBQWdDO0FBSzdCLFNBQVNDLEtBQUssR0FBRzs7O0lBQzlCLElBQTBCTCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBZHhDLEtBY2MsR0FBY0EsR0FBWSxHQUExQixFQWRkLFFBY3dCLEdBQUlBLEdBQVksR0FBaEI7SUFDdEIsSUFBTVEsV0FBVyxHQUFHTCxrREFBVyxDQUFDLDhMQUFZO1lBQ3BDTSxJQUFJOzs7OzsyQkFBU1AsK0RBQVksRUFBRTs7b0JBQTNCTyxJQUFJLFlBQXVCO29CQUNqQ0YsUUFBUSxDQUFDRSxJQUFJLENBQUMsQ0FBQzs7Ozs7O0tBQ2hCLElBQUU7UUFBQ1AsMkRBQVk7S0FBQyxDQUFDO0lBQ2xCSCxnREFBUyxDQUFDLFdBQU07UUFDZFMsV0FBVyxFQUFFLENBQUM7S0FDZixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1AscUJBQ0UsOERBQUNFLEtBQUc7OzBCQUNGLDhEQUFDQyxRQUFNO2dCQUFDQyxTQUFTLEVBQUMsaUJBQWlCOztrQ0FDakMsOERBQUNqQix3RUFBTTs7Ozs0QkFBRztrQ0FDViw4REFBQ2UsS0FBRzt3QkFBQ0UsU0FBUyxFQUFDLE1BQU07OzBDQUNuQiw4REFBQ0YsS0FBRztnQ0FBQ0UsU0FBUyxFQUFDLGVBQWU7O29DQUFDLGNBQ2pCO2tEQUFBLDhEQUFDQyxNQUFJO3dDQUFDRCxTQUFTLEVBQUMsb0JBQW9CO2tEQUFDLFdBQVM7Ozs7OzRDQUFPO29DQUFDLEdBQUc7a0RBQ3JFLDhEQUFDRSxJQUFFO3dDQUFDRixTQUFTLEVBQUMsbUJBQW1COzs7Ozs0Q0FBRztvQ0FBQSxLQUNqQztrREFBQSw4REFBQ0MsTUFBSTt3Q0FBQ0QsU0FBUyxFQUFDLG9CQUFvQjtrREFBQyxTQUFPOzs7Ozs0Q0FBTztvQ0FBQSxzQkFFeEQ7Ozs7OztvQ0FBTTswQ0FDTiw4REFBQ0csR0FBQztnQ0FBQ0gsU0FBUyxFQUFDLGdCQUFnQjs7b0NBQUMsd0NBQ1U7b0NBQUMsR0FBRztrREFDMUMsOERBQUNFLElBQUU7d0NBQUNGLFNBQVMsRUFBQyxtQkFBbUI7Ozs7OzRDQUFHO29DQUFBLDRCQUV0Qzs7Ozs7O29DQUFJOzBDQUNKLDhEQUFDSSxHQUFDO2dDQUFDQyxJQUFJLEVBQUMsYUFBYTtnQ0FBQ0wsU0FBUyxFQUFDLFdBQVc7MENBQUMsWUFFNUM7Ozs7O29DQUFJOzs7Ozs7NEJBQ0E7Ozs7OztvQkFDQzswQkFDVCw4REFBQ00sU0FBTztnQkFBQ04sU0FBUyxFQUFDLG9CQUFvQjswQkFDckMsNEVBQUNGLEtBQUc7b0JBQUNFLFNBQVMsRUFBQyxXQUFXOzhCQUN4Qiw0RUFBQ0YsS0FBRzt3QkFBQ0UsU0FBUyxFQUFDLEtBQUs7a0NBQ2pCTixLQUFLLENBQUNhLEdBQUcsQ0FBQyxTQUFDQyxJQUFpQjtpREFDM0IsOERBQUNWLEtBQUc7Z0NBQUNFLFNBQVMsRUFBQyxVQUFVOzBDQUN2Qiw0RUFBQ0YsS0FBRztvQ0FBQ0UsU0FBUyxFQUFDLG1CQUFtQjs7c0RBQ2hDLDhEQUFDZixnREFBTzs0Q0FFTndCLFFBQVEsRUFBRUQsSUFBSSxDQUFDQyxRQUFROzRDQUN2QmYsS0FBSyxFQUFFYyxJQUFJLENBQUNkLEtBQUs7NENBQ2pCZ0IsRUFBRSxFQUFFRixJQUFJLENBQUNHLEdBQUc7MkNBSFBILElBQUksQ0FBQ0csR0FBRzs7OztpREFJYjtzREFDRiw4REFBQ3RCLDZDQUFJOzRDQUFDdUIsSUFBSSxFQUFFSixJQUFJLENBQUNJLElBQUk7Ozs7O2lEQUFJOzs7Ozs7eUNBQ3JCOzs7OztxQ0FDRjt5QkFDUCxDQUFDOzs7Ozs0QkFDRTs7Ozs7d0JBQ0Y7Ozs7O29CQUNFOzBCQUVWLDhEQUFDMUIsZ0RBQU87Ozs7b0JBQUc7MEJBQ1gsOERBQUNGLGtFQUFNOzs7O29CQUFHOzs7Ozs7WUFDTixDQUNOO0NBQ0g7R0F0RHVCUyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4L2luZGV4LnRzeD83MGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL09yZ2FuaXNtL0ludGVyZmFjZS9uYXZiYXIvaW5kZXhcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL09yZ2FuaXNtL0ludGVyZmFjZS9mb290ZXJcIjtcbmltcG9ydCBQcmljaW5nIGZyb20gXCIuL3ByaWNpbmdcIjtcbmltcG9ydCBTdG9yaWVzIGZyb20gXCIuL3N0b3JpZXNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3BheW1lbnQvXCI7XG5pbXBvcnQgeyBtZW51UHJpY2luZyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhVHlwZXNcIjtcbmltcG9ydCB7IGdldE1lbnVQcmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wcmljaW5nXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcbiAgY29uc3QgW3ByaWNlLCBzZXRwcmljZV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHBheW1lbnREYXRhID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRNZW51UHJpY2UoKTtcbiAgICBzZXRwcmljZShkYXRhKTtcbiAgfSwgW2dldE1lbnVQcmljZV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBheW1lbnREYXRhKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgYmctYmxhbmtcIj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taGVhZGxpbmVcIj5cbiAgICAgICAgICAgIEV4cGFuZCBZb3VyIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JhZGllbnQtYmx1ZVwiPktub3dsZWRnZTwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICA8YnIgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2tcIiAvPlxuICAgICAgICAgICAgYnkgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmFkaWVudC1waW5rXCI+Sm9pbmluZzwvc3Bhbj4gT3VyIEdyZWF0ZXN0XG4gICAgICAgICAgICBFdmVudHNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZXJvLXBhcmFncmFwaFwiPlxuICAgICAgICAgICAgS2FtaSBtZW55ZWRpYWthbiB3ZWJzaXRlIHRlcmJhaWsgdW50dWt7XCIgXCJ9XG4gICAgICAgICAgICA8YnIgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2tcIiAvPlxuICAgICAgICAgICAgYW5kYSBkYWxhbSBtZW1idWF0IHNlbWluYXJcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGEgaHJlZj1cIiNncm93LXRvZGF5XCIgY2xhc3NOYW1lPVwiYnRuLWdyZWVuXCI+XG4gICAgICAgICAgICBCcm93c2UgTm93XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJpY2luZyBncm93LXRvZGF5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHtwcmljZS5tYXAoKGl0ZW06IG1lbnVQcmljaW5nKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItNSBtYi1sZy0wXCI+XG4gICAgICAgICAgICAgICAgICA8UHJpY2luZ1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uX2lkfVxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17aXRlbS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLl9pZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TGlzdCBsaXN0PXtpdGVtLmxpc3R9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8U3RvcmllcyAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2YmFyIiwiRm9vdGVyIiwiUHJpY2luZyIsIlN0b3JpZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpc3QiLCJnZXRNZW51UHJpY2UiLCJ1c2VDYWxsYmFjayIsInVybCIsImluZGV4IiwicHJpY2UiLCJzZXRwcmljZSIsInBheW1lbnREYXRhIiwiZGF0YSIsImRpdiIsImhlYWRlciIsImNsYXNzTmFtZSIsInNwYW4iLCJiciIsInAiLCJhIiwiaHJlZiIsInNlY3Rpb24iLCJtYXAiLCJpdGVtIiwiY2F0ZWdvcnkiLCJpZCIsIl9pZCIsImxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index/index.tsx\n");

/***/ }),

/***/ "./pages/index/list.tsx":
/*!******************************!*\
  !*** ./pages/index/list.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ list; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction list(props) {\n    var list1 = props.list;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"fa-ul\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"fa-li\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fas fa-check\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/list.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/list.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 13\n                        }, this),\n                        list1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/list.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/list.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/list.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/index/list.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC9saXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBCO0FBS1gsU0FBU0MsSUFBSSxDQUFDQyxLQUFpQixFQUFFO0lBQzlDLElBQU0sS0FBTSxHQUFLQSxLQUFLLENBQWRELElBQUk7SUFDWixxQkFDRSw4REFBQ0UsS0FBRztrQkFDRiw0RUFBQ0MsSUFBRTtZQUFDQyxTQUFTLEVBQUMsT0FBTztzQkFDbkIsNEVBQUNGLEtBQUc7MEJBQ0YsNEVBQUNHLElBQUU7O3NDQUNELDhEQUFDQyxNQUFJOzRCQUFDRixTQUFTLEVBQUMsT0FBTztzQ0FDckIsNEVBQUNHLEdBQUM7Z0NBQUNILFNBQVMsRUFBQyxjQUFjOzs7OztvQ0FBSzs7Ozs7Z0NBQzNCO3dCQUNOSixLQUFJOzs7Ozs7d0JBQ0Y7Ozs7O29CQUNEOzs7OztnQkFDSDs7Ozs7WUFDRCxDQUNOO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvbGlzdC50c3g/YWZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBkZXRhaWxMaXN0IHtcbiAgbGlzdDogc3RyaW5nO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdChwcm9wczogZGV0YWlsTGlzdCkge1xuICBjb25zdCB7IGxpc3QgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmEtdWxcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1saVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2tcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB7bGlzdH1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJsaXN0IiwicHJvcHMiLCJkaXYiLCJ1bCIsImNsYXNzTmFtZSIsImxpIiwic3BhbiIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index/list.tsx\n");

/***/ })

});