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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ auth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction auth() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLogin = ref[0], setisLogin = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\"\n    }), user = ref1[0], setuser = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var token = js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"token\");\n        if (token) {\n            var jwtToken = atob(token);\n            var payload = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(jwtToken);\n            var _$users = payload;\n            setisLogin(true);\n            setuser(user);\n        }\n    }, []);\n    var onLogout = function() {\n        js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].remove(\"token\");\n        router.push(\"/\");\n    };\n    if (isLogin) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"navbar-toggler\",\n                        type: \"button\",\n                        \"data-bs-toggle\": \"collapse\",\n                        \"data-bs-target\": \"#navbarNav\",\n                        \"aria-controls\": \"navbarNav\",\n                        \"aria-expanded\": \"false\",\n                        \"aria-label\": \"Toggle navigation\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navbar-toggler-icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"collapse navbar-collapse\",\n                        id: \"navbarNav\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"navbar-nav ms-auto text-lg gap-lg-0 gap-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item my-auto dropdown d-flex\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"dropdown-toggle ms-lg-40\",\n                                            href: \"#\",\n                                            role: \"button\",\n                                            id: \"dropdownMenuLink\",\n                                            \"data-bs-toggle\": \"dropdown\",\n                                            \"aria-expanded\": \"false\",\n                                            children: [\n                                                \"halo, \",\n                                                users.name\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            className: \"dropdown-menu border-0\",\n                                            \"aria-labelledby\": \"dropdownMenuLink\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        className: \"dropdown-item text-lg color-palette-2\",\n                                                        href: \"overview\",\n                                                        children: \"Dashboard\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        className: \"dropdown-item text-lg color-palette-2\",\n                                                        href: \"#\",\n                                                        type: \"button\",\n                                                        onClick: onLogout,\n                                                        children: \"Log Out\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/signIn\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"btn-navy\",\n                href: \"signin.html\",\n                children: \"Sign In\"\n            }, void 0, false, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/garnespratama/Documents/Paper/frontend/Organism/Interface/navbar/auth.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n};\n_s(auth, \"sJsA5cbY3dxMxFj4xR8uKdLnlK8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxFQUFDLFFBQVE7d0RBQ2JjLE9BQU8sRUFBRXBCLFFBQVE7a0VBQ2xCLFNBRUQ7Ozs7OzREQUFJOzs7Ozt3REFDRDs7Ozs7O2dEQUNGOzs7Ozs7d0NBQ0Q7Ozs7O29DQUNIOzs7OztnQ0FDRjs7Ozs7NEJBQ0Q7Ozs7OztvQkFDRjs7Ozs7Z0JBQ0YsQ0FDTjtLQUNIO0lBQ0QscUJBQ0UsOERBQUNHLEtBQUc7a0JBQ0YsNEVBQUNwQixrREFBSTtZQUFDa0MsSUFBSSxFQUFDLFNBQVM7c0JBQ2xCLDRFQUFDRCxHQUFDO2dCQUFDWixTQUFTLEVBQUMsVUFBVTtnQkFBQ2EsSUFBSSxFQUFDLGFBQWE7MEJBQUMsU0FFM0M7Ozs7O29CQUFJOzs7OztnQkFDQzs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0EzRnVCOUIsSUFBSTs7UUFLWEQsa0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vT3JnYW5pc20vSW50ZXJmYWNlL25hdmJhci9hdXRoLnRzeD80YTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGgoKSB7XG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRpc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXIsIHNldHVzZXJdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gIH0pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoXCJ0b2tlblwiKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGNvbnN0IGp3dFRva2VuID0gYXRvYih0b2tlbik7XG4gICAgICBjb25zdCBwYXlsb2FkID0gand0X2RlY29kZShqd3RUb2tlbik7XG4gICAgICBjb25zdCB1c2VycyA9IHBheWxvYWQ7XG4gICAgICBzZXRpc0xvZ2luKHRydWUpO1xuICAgICAgc2V0dXNlcih1c2VyKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25Mb2dvdXQgPSAoKSA9PiB7XG4gICAgY29va2llLnJlbW92ZShcInRva2VuXCIpO1xuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfTtcbiAgaWYgKGlzTG9naW4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyTmF2XCJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIlxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtcy1hdXRvIHRleHQtbGcgZ2FwLWxnLTAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG15LWF1dG8gZHJvcGRvd24gZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZSBtcy1sZy00MFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZHJvcGRvd25NZW51TGlua1wiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBoYWxvLCB7dXNlcnMubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgYm9yZGVyLTBcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVMaW5rXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHRleHQtbGcgY29sb3ItcGFsZXR0ZS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJvdmVydmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSB0ZXh0LWxnIGNvbG9yLXBhbGV0dGUtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTG9nb3V0fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZyBPdXRcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbkluXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1uYXZ5XCIgaHJlZj1cInNpZ25pbi5odG1sXCI+XG4gICAgICAgICAgU2lnbiBJblxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJqd3RfZGVjb2RlIiwiY29va2llIiwidXNlUm91dGVyIiwiYXV0aCIsImlzTG9naW4iLCJzZXRpc0xvZ2luIiwibmFtZSIsInVzZXIiLCJzZXR1c2VyIiwicm91dGVyIiwidG9rZW4iLCJnZXQiLCJqd3RUb2tlbiIsImF0b2IiLCJwYXlsb2FkIiwidXNlcnMiLCJvbkxvZ291dCIsInJlbW92ZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJ0eXBlIiwiZGF0YS1icy10b2dnbGUiLCJkYXRhLWJzLXRhcmdldCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1sYWJlbCIsInNwYW4iLCJpZCIsInVsIiwibGkiLCJhIiwiaHJlZiIsInJvbGUiLCJhcmlhLWxhYmVsbGVkYnkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Organism/Interface/navbar/auth.tsx\n");

/***/ })

});