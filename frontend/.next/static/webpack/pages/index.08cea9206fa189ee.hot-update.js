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

/***/ "./Organism/Interface/navbar/auth.tsx":
/*!********************************************!*\
  !*** ./Organism/Interface/navbar/auth.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ auth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction auth() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLogin = ref[0], setisLogin = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\"\n    }), user = ref1[0], setuser = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var token = js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"token\");\n        if (token) {\n            var jwtToken = atob(token);\n            var payload = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(jwtToken);\n            var users = payload;\n            console.log(\"user :\", users);\n            setisLogin(true);\n            setuser(users);\n        }\n    }, []);\n    var onLogout = function() {\n        js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].remove(\"token\");\n        router.push(\"/\");\n        setisLogin(false);\n    };\n    if (isLogin) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"navbar-toggler\",\n                        type: \"button\",\n                        \"data-bs-toggle\": \"collapse\",\n                        \"data-bs-target\": \"#navbarNav\",\n                        \"aria-controls\": \"navbarNav\",\n                        \"aria-expanded\": \"false\",\n                        \"aria-label\": \"Toggle navigation\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navbar-toggler-icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"collapse navbar-collapse\",\n                        id: \"navbarNav\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"navbar-nav ms-auto text-lg gap-lg-0 gap-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item my-auto dropdown d-flex\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"dropdown-toggle ms-lg-40\",\n                                            href: \"#\",\n                                            role: \"button\",\n                                            id: \"dropdownMenuLink\",\n                                            \"data-bs-toggle\": \"dropdown\",\n                                            \"aria-expanded\": \"false\",\n                                            children: [\n                                                \"halo, \",\n                                                user.name\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            className: \"dropdown-menu border-0\",\n                                            \"aria-labelledby\": \"dropdownMenuLink\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        className: \"dropdown-item text-lg color-palette-2\",\n                                                        href: \"overview\",\n                                                        children: \"Dashboard\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        className: \"dropdown-item text-lg color-palette-2\",\n                                                        href: \"#\",\n                                                        onClick: onLogout,\n                                                        children: \"Log Out\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/signIn\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"btn-navy\",\n                href: \"signin.html\",\n                children: \"Sign In\"\n            }, void 0, false, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n            lineNumber: 93,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, this);\n};\n_s(auth, \"sJsA5cbY3dxMxFj4xR8uKdLnlK8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9PcmdhbmlzbS9JbnRlcmZhY2UvbmF2YmFyL2F1dGgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDdEI7QUFDTztBQUNMO0FBQ1M7O0FBR3pCLFNBQVNPLElBQUksR0FBRzs7SUFDN0IsSUFBOEJMLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFSL0MsT0FRZ0IsR0FBZ0JBLEdBQWUsR0FBL0IsRUFSaEIsVUFRNEIsR0FBSUEsR0FBZSxHQUFuQjtJQUMxQixJQUF3QkEsSUFFdEIsR0FGc0JBLCtDQUFRLENBQUM7UUFDL0JRLElBQUksRUFBRSxFQUFFO0tBQ1QsQ0FBQyxFQVhKLElBU2EsR0FBYVIsSUFFdEIsR0FGUyxFQVRiLE9BU3NCLEdBQUlBLElBRXRCLEdBRmtCO0lBR3BCLElBQU1XLE1BQU0sR0FBR1Asc0RBQVMsRUFBRTtJQUMxQkwsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTWEsS0FBSyxHQUFHVCxxREFBVSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxJQUFJUyxLQUFLLEVBQUU7WUFDVCxJQUFNRSxRQUFRLEdBQUdDLElBQUksQ0FBQ0gsS0FBSyxDQUFDO1lBQzVCLElBQU1JLE9BQU8sR0FBR2Qsc0RBQVUsQ0FBQ1ksUUFBUSxDQUFDO1lBQ3BDLElBQU1HLEtBQUssR0FBR0QsT0FBTztZQUNyQkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFRixLQUFLLENBQUMsQ0FBQztZQUM3QlYsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCRyxPQUFPLENBQUNPLEtBQUssQ0FBQyxDQUFDO1NBQ2hCO0tBQ0YsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLElBQU1HLFFBQVEsR0FBRyxXQUFNO1FBQ3JCakIsd0RBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QlEsTUFBTSxDQUFDVyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakJmLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQjtJQUNELElBQUlELE9BQU8sRUFBRTtRQUNYLHFCQUNFLDhEQUFDaUIsS0FBRztzQkFDRiw0RUFBQ0EsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjs7a0NBQzlCLDhEQUFDQyxRQUFNO3dCQUNMRCxTQUFTLEVBQUMsZ0JBQWdCO3dCQUMxQkUsSUFBSSxFQUFDLFFBQVE7d0JBQ2JDLGdCQUFjLEVBQUMsVUFBVTt3QkFDekJDLGdCQUFjLEVBQUMsWUFBWTt3QkFDM0JDLGVBQWEsRUFBQyxXQUFXO3dCQUN6QkMsZUFBYSxFQUFDLE9BQU87d0JBQ3JCQyxZQUFVLEVBQUMsbUJBQW1CO2tDQUU5Qiw0RUFBQ0MsTUFBSTs0QkFBQ1IsU0FBUyxFQUFDLHFCQUFxQjs7Ozs7Z0NBQVE7Ozs7OzRCQUN0QztrQ0FDVCw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDBCQUEwQjt3QkFBQ1MsRUFBRSxFQUFDLFdBQVc7a0NBQ3RELDRFQUFDQyxJQUFFOzRCQUFDVixTQUFTLEVBQUMsMkNBQTJDO3NDQUN2RCw0RUFBQ1csSUFBRTtnQ0FBQ1gsU0FBUyxFQUFDLGtDQUFrQzswQ0FDOUMsNEVBQUNELEtBQUc7O3NEQUNGLDhEQUFDYSxHQUFDOzRDQUNBWixTQUFTLEVBQUMsMEJBQTBCOzRDQUNwQ2EsSUFBSSxFQUFDLEdBQUc7NENBQ1JDLElBQUksRUFBQyxRQUFROzRDQUNiTCxFQUFFLEVBQUMsa0JBQWtCOzRDQUNyQk4sZ0JBQWMsRUFBQyxVQUFVOzRDQUN6QkcsZUFBYSxFQUFDLE9BQU87O2dEQUN0QixRQUNPO2dEQUFDckIsSUFBSSxDQUFDRCxJQUFJOzs7Ozs7Z0RBQ2Q7c0RBRUosOERBQUMwQixJQUFFOzRDQUNEVixTQUFTLEVBQUMsd0JBQXdCOzRDQUNsQ2UsaUJBQWUsRUFBQyxrQkFBa0I7OzhEQUVsQyw4REFBQ0osSUFBRTs4REFDRCw0RUFBQ0MsR0FBQzt3REFDQVosU0FBUyxFQUFDLHVDQUF1Qzt3REFDakRhLElBQUksRUFBQyxVQUFVO2tFQUNoQixXQUVEOzs7Ozs0REFBSTs7Ozs7d0RBQ0Q7OERBRUwsOERBQUNGLElBQUU7OERBQ0QsNEVBQUNDLEdBQUM7d0RBQ0FaLFNBQVMsRUFBQyx1Q0FBdUM7d0RBQ2pEYSxJQUFJLEVBQUMsR0FBRzt3REFDUkcsT0FBTyxFQUFFcEIsUUFBUTtrRUFDbEIsU0FFRDs7Ozs7NERBQUk7Ozs7O3dEQUNEOzs7Ozs7Z0RBQ0Y7Ozs7Ozt3Q0FDRDs7Ozs7b0NBQ0g7Ozs7O2dDQUNGOzs7Ozs0QkFDRDs7Ozs7O29CQUNGOzs7OztnQkFDRixDQUNOO0tBQ0g7SUFDRCxxQkFDRSw4REFBQ0csS0FBRztrQkFDRiw0RUFBQ3RCLGtEQUFJO1lBQUNvQyxJQUFJLEVBQUMsU0FBUztzQkFDbEIsNEVBQUNELEdBQUM7Z0JBQUNaLFNBQVMsRUFBQyxVQUFVO2dCQUFDYSxJQUFJLEVBQUMsYUFBYTswQkFBQyxTQUUzQzs7Ozs7b0JBQUk7Ozs7O2dCQUNDOzs7OztZQUNILENBQ047Q0FDSDtHQTVGdUJoQyxJQUFJOztRQUtYRCxrREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9PcmdhbmlzbS9JbnRlcmZhY2UvbmF2YmFyL2F1dGgudHN4PzRhMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGgoKSB7XG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRpc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXIsIHNldHVzZXJdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gIH0pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoXCJ0b2tlblwiKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGNvbnN0IGp3dFRva2VuID0gYXRvYih0b2tlbik7XG4gICAgICBjb25zdCBwYXlsb2FkID0gand0X2RlY29kZShqd3RUb2tlbik7XG4gICAgICBjb25zdCB1c2VycyA9IHBheWxvYWQ7XG4gICAgICBjb25zb2xlLmxvZyhcInVzZXIgOlwiLCB1c2Vycyk7XG4gICAgICBzZXRpc0xvZ2luKHRydWUpO1xuICAgICAgc2V0dXNlcih1c2Vycyk7XG4gICAgfVxuICB9LCBbXSk7XG4gIGNvbnN0IG9uTG9nb3V0ID0gKCkgPT4ge1xuICAgIGNvb2tpZS5yZW1vdmUoXCJ0b2tlblwiKTtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgc2V0aXNMb2dpbihmYWxzZSk7XG4gIH07XG4gIGlmIChpc0xvZ2luKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhck5hdlwiXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhck5hdlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXMtYXV0byB0ZXh0LWxnIGdhcC1sZy0wIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteS1hdXRvIGRyb3Bkb3duIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGUgbXMtbGctNDBcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImRyb3Bkb3duTWVudUxpbmtcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgaGFsbywge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgYm9yZGVyLTBcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVMaW5rXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJvdmVydmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSB0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxvZ291dH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cgT3V0XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGluayBocmVmPVwiL3NpZ25JblwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tbmF2eVwiIGhyZWY9XCJzaWduaW4uaHRtbFwiPlxuICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiand0X2RlY29kZSIsImNvb2tpZSIsInVzZVJvdXRlciIsImF1dGgiLCJpc0xvZ2luIiwic2V0aXNMb2dpbiIsIm5hbWUiLCJ1c2VyIiwic2V0dXNlciIsInJvdXRlciIsInRva2VuIiwiZ2V0Iiwiand0VG9rZW4iLCJhdG9iIiwicGF5bG9hZCIsInVzZXJzIiwiY29uc29sZSIsImxvZyIsIm9uTG9nb3V0IiwicmVtb3ZlIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInR5cGUiLCJkYXRhLWJzLXRvZ2dsZSIsImRhdGEtYnMtdGFyZ2V0IiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJhcmlhLWxhYmVsIiwic3BhbiIsImlkIiwidWwiLCJsaSIsImEiLCJocmVmIiwicm9sZSIsImFyaWEtbGFiZWxsZWRieSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Organism/Interface/navbar/auth.tsx\n");

/***/ })

});