"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signIn",{

/***/ "./pages/signIn/index.tsx":
/*!********************************!*\
  !*** ./pages/signIn/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var gapi_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gapi-script */ \"./node_modules/gapi-script/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SignIn = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref[0], setemail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setpassword = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var start = function start() {\n            gapi_script__WEBPACK_IMPORTED_MODULE_10__.gapi.client.init({\n                clientId: \"730164056231-59h41a3bvpvu1n8e1r1t42rouh1rp26d.apps.googleusercontent.com\",\n                scope: \"email\"\n            });\n        };\n        gapi_script__WEBPACK_IMPORTED_MODULE_10__.gapi.load(\"client:auth2\", start);\n    }, []);\n    var config = {\n        headers: {\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        }\n    };\n    var url = \"http://localhost:4000/api/v1/auth/signin\";\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var qs, data, resp, token, tokenBase64;\n            return _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        qs = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n                        data = qs.stringify({\n                            email: email,\n                            password: password\n                        });\n                        if (!(!email || !password)) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        {\n                            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"email / password wajib diisi\");\n                        }\n                        _ctx.next = 11;\n                        break;\n                    case 7:\n                        _ctx.next = 9;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default().post(url, data, config);\n                    case 9:\n                        resp = _ctx.sent;\n                        if (resp.status > 300) {\n                            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"data tidak valid\");\n                            console.log(\"error\", resp);\n                        } else if (resp.status < 300) {\n                            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"login berhasil\");\n                            token = resp.data.data.token;\n                            tokenBase64 = btoa(token);\n                            console.log(\"data \", tokenBase64);\n                            js_cookie__WEBPACK_IMPORTED_MODULE_8__[\"default\"].set(\"token\", tokenBase64);\n                            router.push(\"/\");\n                        }\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var responseGoogleSucces = function(response) {\n        console.log(response);\n        var token = response.tokenId;\n        var tokenBase64 = btoa(token);\n        console.log(\"token : \", tokenBase64);\n        js_cookie__WEBPACK_IMPORTED_MODULE_8__[\"default\"].set(\"token\", tokenBase64);\n        router.push(\"/\");\n    };\n    var responseGoogleError = function(response) {\n        console.log(response);\n        router.push(\"/signIn\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n            className: \"login header bg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"d-flex flex-column align-items-center hero gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"hero-headline text-start\",\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            action: \"\",\n                            className: \"form-login d-flex flex-column mt-4 mt-md-0 p-30\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"d-flex flex-column align-items-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            className: \"form-label\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            className: \"form-control\",\n                                            id: \"email_address\",\n                                            placeholder: \"semina@bwa.com\",\n                                            value: email,\n                                            onChange: function(e) {\n                                                return setemail(e.target.value);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"d-flex flex-column align-items-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            className: \"form-label\",\n                                            children: \"Password (6 characters)\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            className: \"form-control\",\n                                            id: \"password\",\n                                            placeholder: \"Type your password\",\n                                            value: password,\n                                            onChange: function(e) {\n                                                return setpassword(e.target.value);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"d-grid mt-2 gap-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                            className: \"btn-green\",\n                                            onClick: onSubmit,\n                                            children: \"Sign In\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                            href: \"/signUp\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                href: \"signup.html\",\n                                                className: \"btn-navy\",\n                                                children: \"Create New Account\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                                lineNumber: 112,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_google_login__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                    clientId: \"730164056231-59h41a3bvpvu1n8e1r1t42rouh1rp26d.apps.googleusercontent.com\",\n                                    render: function(renderProps) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                            onClick: renderProps.onClick,\n                                            disabled: renderProps.disabled,\n                                            className: \"btn-green\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    src: \"images/Google Logo.png\",\n                                                    alt: \"google logo\",\n                                                    srcSet: \"\",\n                                                    width: 30,\n                                                    height: 30\n                                                }, void 0, false, void 0, void 0),\n                                                \"Login Dengan Google\"\n                                            ]\n                                        }, void 0, true, void 0, void 0);\n                                    },\n                                    buttonText: \"Login\",\n                                    onSuccess: responseGoogleSucces,\n                                    onFailure: responseGoogleError,\n                                    cookiePolicy: \"single_host_origin\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, _this);\n};\n_s(SignIn, \"QRPTci8SThxoS3BcV0Bq3pQDkFQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsRUFBRUQsV0FBVyxDQUFDQyxRQUFROzRDQUM5QmpCLFNBQVMsRUFBQyxXQUFXOzs4REFFckIsOERBQUNrQixLQUFHO29EQUNGQyxHQUFHLEVBQUMsd0JBQXdCO29EQUM1QkMsR0FBRyxFQUFDLGFBQWE7b0RBQ2pCQyxNQUFNLEVBQUMsRUFBRTtvREFDVEMsS0FBSyxFQUFFLEVBQUU7b0RBQ1RDLE1BQU0sRUFBRSxFQUFFO2lGQUNWO2dEQUFBLHFCQUVKOzt3RUFBUztxQ0FDVjtvQ0FDREMsVUFBVSxFQUFDLE9BQU87b0NBQ2xCQyxTQUFTLEVBQUUvQixvQkFBb0I7b0NBQy9CZ0MsU0FBUyxFQUFFN0IsbUJBQW1CO29DQUM5QjhCLFlBQVksRUFBRSxvQkFBb0I7Ozs7O3lDQUNsQzs7Ozs7O2lDQUNHO3NDQUVQLDhEQUFDNUUsMERBQWM7Ozs7aUNBQUc7Ozs7Ozt5QkFDZDs7Ozs7cUJBQ0Y7Ozs7O2lCQUNFOzs7OzthQUNOLENBQ047Q0FDSDtHQXZJS1MsTUFBTTs7UUFHS04sa0RBQVM7OztBQUhwQk0sS0FBQUEsTUFBTTtBQXlJWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ25Jbi9pbmRleC50c3g/MTZkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL09yZ2FuaXNtL0ludGVyZmFjZS9uYXZiYXJcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCI7XG5pbXBvcnQgeyBnYXBpIH0gZnJvbSBcImdhcGktc2NyaXB0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU2lnbkluID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldHBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgIGdhcGkuY2xpZW50LmluaXQoe1xuICAgICAgICBjbGllbnRJZDpcbiAgICAgICAgICBcIjczMDE2NDA1NjIzMS01OWg0MWEzYnZwdnUxbjhlMXIxdDQycm91aDFycDI2ZC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiLFxuICAgICAgICBzY29wZTogXCJlbWFpbFwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2FwaS5sb2FkKFwiY2xpZW50OmF1dGgyXCIsIHN0YXJ0KTtcbiAgfSwgW10pO1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS92MS9hdXRoL3NpZ25pblwiO1xuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHFzID0gcmVxdWlyZShcInFzXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBxcy5zdHJpbmdpZnkoe1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICB9KTtcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgICAgdG9hc3QuZXJyb3IoXCJlbWFpbCAvIHBhc3N3b3JkIHdhamliIGRpaXNpXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgQXhpb3MucG9zdCh1cmwsIGRhdGEsIGNvbmZpZyk7XG4gICAgICBpZiAocmVzcC5zdGF0dXMgPiAzMDApIHtcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJkYXRhIHRpZGFrIHZhbGlkXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIHJlc3ApO1xuICAgICAgfSBlbHNlIGlmIChyZXNwLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICB0b2FzdC5zdWNjZXNzKFwibG9naW4gYmVyaGFzaWxcIik7XG4gICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IHJlc3AuZGF0YS5kYXRhO1xuICAgICAgICBjb25zdCB0b2tlbkJhc2U2NCA9IGJ0b2EodG9rZW4pO1xuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgXCIsIHRva2VuQmFzZTY0KTtcbiAgICAgICAgY29va2llLnNldChcInRva2VuXCIsIHRva2VuQmFzZTY0KTtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNwb25zZUdvb2dsZVN1Y2NlcyA9IChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLnRva2VuSWQ7XG4gICAgY29uc3QgdG9rZW5CYXNlNjQgPSBidG9hKHRva2VuKTtcbiAgICBjb25zb2xlLmxvZyhcInRva2VuIDogXCIsIHRva2VuQmFzZTY0KTtcbiAgICBjb29raWUuc2V0KFwidG9rZW5cIiwgdG9rZW5CYXNlNjQpO1xuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfTtcbiAgY29uc3QgcmVzcG9uc2VHb29nbGVFcnJvciA9IChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICByb3V0ZXIucHVzaChcIi9zaWduSW5cIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxvZ2luIGhlYWRlciBiZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBoZXJvIGdhcC01XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taGVhZGxpbmUgdGV4dC1zdGFydFwiPlNpZ24gSW48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgYWN0aW9uPVwiXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1sb2dpbiBkLWZsZXggZmxleC1jb2x1bW4gbXQtNCBtdC1tZC0wIHAtMzBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsX2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZW1pbmFAYndhLmNvbVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UGFzc3dvcmQgKDYgY2hhcmFjdGVycyk8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0cGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZCBtdC0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZ3JlZW5cIiBvbkNsaWNrPXtvblN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduVXBcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzaWdudXAuaHRtbFwiIGNsYXNzTmFtZT1cImJ0bi1uYXZ5XCI+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBOZXcgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgICAgICAgIGNsaWVudElkPVwiNzMwMTY0MDU2MjMxLTU5aDQxYTNidnB2dTFuOGUxcjF0NDJyb3VoMXJwMjZkLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbiAgICAgICAgICAgICAgICByZW5kZXI9eyhyZW5kZXJQcm9wcykgPT4gKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVuZGVyUHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1ncmVlblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvR29vZ2xlIExvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJnb29nbGUgbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjU2V0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgTG9naW4gRGVuZ2FuIEdvb2dsZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwiTG9naW5cIlxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGVTdWNjZXN9XG4gICAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZUVycm9yfVxuICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17XCJzaW5nbGVfaG9zdF9vcmlnaW5cIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiQXhpb3MiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiY29va2llIiwiR29vZ2xlTG9naW4iLCJnYXBpIiwidXNlRWZmZWN0IiwiU2lnbkluIiwiZW1haWwiLCJzZXRlbWFpbCIsInBhc3N3b3JkIiwic2V0cGFzc3dvcmQiLCJyb3V0ZXIiLCJzdGFydCIsImNsaWVudCIsImluaXQiLCJjbGllbnRJZCIsInNjb3BlIiwibG9hZCIsImNvbmZpZyIsImhlYWRlcnMiLCJ1cmwiLCJvblN1Ym1pdCIsImUiLCJxcyIsImRhdGEiLCJyZXNwIiwidG9rZW4iLCJ0b2tlbkJhc2U2NCIsInByZXZlbnREZWZhdWx0IiwicmVxdWlyZSIsInN0cmluZ2lmeSIsImVycm9yIiwicG9zdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzIiwiYnRvYSIsInNldCIsInB1c2giLCJyZXNwb25zZUdvb2dsZVN1Y2NlcyIsInJlc3BvbnNlIiwidG9rZW5JZCIsInJlc3BvbnNlR29vZ2xlRXJyb3IiLCJkaXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZm9ybSIsImFjdGlvbiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiaHJlZiIsImEiLCJyZW5kZXIiLCJyZW5kZXJQcm9wcyIsImRpc2FibGVkIiwiaW1nIiwic3JjIiwiYWx0Iiwic3JjU2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b25UZXh0Iiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwiY29va2llUG9saWN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signIn/index.tsx\n");

/***/ })

});