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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_9__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SignIn = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref[0], setemail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setpassword = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    // useEffect(() => {\n    //   function start() {\n    //     gapi.client.init({\n    //       clientId:\n    //         \"126439219865-jst935eqdlkeudlbqdvnq4pbuvj235vd.apps.googleusercontent.com\",\n    //       scope: \"email\",\n    //     });\n    //   }\n    //   gapi.load(\"client:auth2\", start);\n    // }, []);\n    var config = {\n        headers: {\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        }\n    };\n    var url = \"http://localhost:4000/api/v1/auth/signin\";\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var qs, data, resp, token, tokenBase64;\n            return _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        qs = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n                        data = qs.stringify({\n                            email: email,\n                            password: password\n                        });\n                        if (!(!email || !password)) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        {\n                            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"email / password wajib diisi\");\n                        }\n                        _ctx.next = 11;\n                        break;\n                    case 7:\n                        _ctx.next = 9;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default().post(url, data, config);\n                    case 9:\n                        resp = _ctx.sent;\n                        if (resp.status > 300) {\n                            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"data tidak valid\");\n                            console.log(\"error\", resp);\n                        } else if (resp.status < 300) {\n                            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"login berhasil\");\n                            token = resp.data.data.token;\n                            tokenBase64 = btoa(token);\n                            console.log(\"token \", token);\n                            js_cookie__WEBPACK_IMPORTED_MODULE_8__[\"default\"].set(\"token\", tokenBase64);\n                            router.push(\"/\");\n                        }\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var responseGoogleSucces = function(response) {\n        console.log(response);\n        var token = response.tokenId;\n        var tokenBase64 = btoa(token);\n        console.log(\"token : \", tokenBase64);\n        js_cookie__WEBPACK_IMPORTED_MODULE_8__[\"default\"].set(\"token\", tokenBase64);\n        router.push(\"/\");\n    };\n    var responseGoogleError = function(response) {\n        console.log(response);\n        router.push(\"/signIn\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n            className: \"login header bg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"d-flex flex-column align-items-center hero gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"hero-headline text-start\",\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            action: \"\",\n                            className: \"form-login d-flex flex-column mt-4 mt-md-0 p-30\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"d-flex flex-column align-items-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            className: \"form-label\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            className: \"form-control\",\n                                            id: \"email_address\",\n                                            placeholder: \"semina@bwa.com\",\n                                            value: email,\n                                            onChange: function(e) {\n                                                return setemail(e.target.value);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"d-flex flex-column align-items-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            className: \"form-label\",\n                                            children: \"Password (6 characters)\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            className: \"form-control\",\n                                            id: \"password\",\n                                            placeholder: \"Type your password\",\n                                            value: password,\n                                            onChange: function(e) {\n                                                return setpassword(e.target.value);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"d-grid mt-2 gap-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                            className: \"btn-green\",\n                                            onClick: onSubmit,\n                                            children: \"Sign In\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                            href: \"/signUp\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                href: \"signup.html\",\n                                                className: \"btn-navy\",\n                                                children: \"Create New Account\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                                lineNumber: 112,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_google_login__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                    clientId: \"247120865980-qqiurvdtubpmgo76j3nrserhbprcv2c8.apps.googleusercontent.com\",\n                                    buttonText: \"Login\",\n                                    onSuccess: responseGoogleSucces,\n                                    onFailure: responseGoogleError,\n                                    cookiePolicy: \"single_host_origin\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, _this);\n};\n_s(SignIn, \"usRdx+DHFQG500XxQUbxEmFLoZk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQ047Q0FDSDtHQXZIS08sTUFBTTs7UUFHS0osa0RBQVM7OztBQUhwQkksS0FBQUEsTUFBTTtBQXlIWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ25Jbi9pbmRleC50c3g/MTZkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL09yZ2FuaXNtL0ludGVyZmFjZS9uYXZiYXJcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCI7XG5pbXBvcnQgeyBnYXBpIH0gZnJvbSBcImdhcGktc2NyaXB0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU2lnbkluID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldHBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgLy8gICAgIGdhcGkuY2xpZW50LmluaXQoe1xuICAvLyAgICAgICBjbGllbnRJZDpcbiAgLy8gICAgICAgICBcIjEyNjQzOTIxOTg2NS1qc3Q5MzVlcWRsa2V1ZGxicWR2bnE0cGJ1dmoyMzV2ZC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiLFxuICAvLyAgICAgICBzY29wZTogXCJlbWFpbFwiLFxuICAvLyAgICAgfSk7XG4gIC8vICAgfVxuXG4gIC8vICAgZ2FwaS5sb2FkKFwiY2xpZW50OmF1dGgyXCIsIHN0YXJ0KTtcbiAgLy8gfSwgW10pO1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS92MS9hdXRoL3NpZ25pblwiO1xuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHFzID0gcmVxdWlyZShcInFzXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBxcy5zdHJpbmdpZnkoe1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICB9KTtcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgICAgdG9hc3QuZXJyb3IoXCJlbWFpbCAvIHBhc3N3b3JkIHdhamliIGRpaXNpXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgQXhpb3MucG9zdCh1cmwsIGRhdGEsIGNvbmZpZyk7XG4gICAgICBpZiAocmVzcC5zdGF0dXMgPiAzMDApIHtcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJkYXRhIHRpZGFrIHZhbGlkXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIHJlc3ApO1xuICAgICAgfSBlbHNlIGlmIChyZXNwLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICB0b2FzdC5zdWNjZXNzKFwibG9naW4gYmVyaGFzaWxcIik7XG4gICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IHJlc3AuZGF0YS5kYXRhO1xuICAgICAgICBjb25zdCB0b2tlbkJhc2U2NCA9IGJ0b2EodG9rZW4pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIFwiLCB0b2tlbik7XG4gICAgICAgIGNvb2tpZS5zZXQoXCJ0b2tlblwiLCB0b2tlbkJhc2U2NCk7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzcG9uc2VHb29nbGVTdWNjZXMgPSAocmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgY29uc3QgdG9rZW4gPSByZXNwb25zZS50b2tlbklkO1xuICAgIGNvbnN0IHRva2VuQmFzZTY0ID0gYnRvYSh0b2tlbik7XG4gICAgY29uc29sZS5sb2coXCJ0b2tlbiA6IFwiLCB0b2tlbkJhc2U2NCk7XG4gICAgY29va2llLnNldChcInRva2VuXCIsIHRva2VuQmFzZTY0KTtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG4gIGNvbnN0IHJlc3BvbnNlR29vZ2xlRXJyb3IgPSAocmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgcm91dGVyLnB1c2goXCIvc2lnbkluXCIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsb2dpbiBoZWFkZXIgYmdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgaGVybyBnYXAtNVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWhlYWRsaW5lIHRleHQtc3RhcnRcIj5TaWduIEluPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIGFjdGlvbj1cIlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbG9naW4gZC1mbGV4IGZsZXgtY29sdW1uIG10LTQgbXQtbWQtMCBwLTMwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbF9hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VtaW5hQGJ3YS5jb21cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRlbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkICg2IGNoYXJhY3RlcnMpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldHBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWdyaWQgbXQtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWdyZWVuXCIgb25DbGljaz17b25TdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnblVwXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwic2lnbnVwLmh0bWxcIiBjbGFzc05hbWU9XCJidG4tbmF2eVwiPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgTmV3IEFjY291bnRcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8R29vZ2xlTG9naW5cbiAgICAgICAgICAgICAgICBjbGllbnRJZD1cIjI0NzEyMDg2NTk4MC1xcWl1cnZkdHVicG1nbzc2ajNucnNlcmhicHJjdjJjOC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luXCJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlU3VjY2VzfVxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGVFcnJvcn1cbiAgICAgICAgICAgICAgICBjb29raWVQb2xpY3k9e1wic2luZ2xlX2hvc3Rfb3JpZ2luXCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIkF4aW9zIiwidXNlUm91dGVyIiwiTGluayIsImNvb2tpZSIsIkdvb2dsZUxvZ2luIiwiU2lnbkluIiwiZW1haWwiLCJzZXRlbWFpbCIsInBhc3N3b3JkIiwic2V0cGFzc3dvcmQiLCJyb3V0ZXIiLCJjb25maWciLCJoZWFkZXJzIiwidXJsIiwib25TdWJtaXQiLCJlIiwicXMiLCJkYXRhIiwicmVzcCIsInRva2VuIiwidG9rZW5CYXNlNjQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcXVpcmUiLCJzdHJpbmdpZnkiLCJlcnJvciIsInBvc3QiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsImJ0b2EiLCJzZXQiLCJwdXNoIiwicmVzcG9uc2VHb29nbGVTdWNjZXMiLCJyZXNwb25zZSIsInRva2VuSWQiLCJyZXNwb25zZUdvb2dsZUVycm9yIiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImZvcm0iLCJhY3Rpb24iLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiLCJhIiwiY2xpZW50SWQiLCJidXR0b25UZXh0Iiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwiY29va2llUG9saWN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signIn/index.tsx\n");

/***/ })

});