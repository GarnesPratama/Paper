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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var gapi_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gapi-script */ \"./node_modules/gapi-script/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SignIn = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref[0], setemail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setpassword = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var start = function start() {\n            gapi_script__WEBPACK_IMPORTED_MODULE_10__.gapi.client.init({\n                clientId: \"126439219865-jst935eqdlkeudlbqdvnq4pbuvj235vd.apps.googleusercontent.com\",\n                scope: \"email\"\n            });\n        };\n        gapi_script__WEBPACK_IMPORTED_MODULE_10__.gapi.load(\"client:auth2\", start);\n    }, []);\n    var config = {\n        headers: {\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        }\n    };\n    var url = \"http://localhost:4000/api/v1/auth/signin\";\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var qs, data, resp, token, tokenBase64;\n            return _Users_garnespratama_Documents_Paper_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        qs = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n                        data = qs.stringify({\n                            email: email,\n                            password: password\n                        });\n                        if (!(!email || !password)) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        {\n                            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"email / password wajib diisi\");\n                        }\n                        _ctx.next = 11;\n                        break;\n                    case 7:\n                        _ctx.next = 9;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default().post(url, data, config);\n                    case 9:\n                        resp = _ctx.sent;\n                        if (resp.status > 300) {\n                            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"data tidak valid\");\n                            console.log(\"error\", resp);\n                        } else if (resp.status < 300) {\n                            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"login berhasil\");\n                            token = resp.data.data.token;\n                            tokenBase64 = btoa(token);\n                            console.log(\"token \", token);\n                            js_cookie__WEBPACK_IMPORTED_MODULE_8__[\"default\"].set(\"token\", tokenBase64);\n                            router.push(\"/\");\n                        }\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var responseGoogleSucces = function(response) {\n        var token = response.Nw.tokenId;\n        console.log(\"token : \", token);\n        console.log(response);\n    //router.push(\"/\");\n    };\n    var responseGoogleError = function(response) {\n        console.log(response);\n        router.push(\"/signIn\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n            className: \"login header bg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"d-flex flex-column align-items-center hero gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"hero-headline text-start\",\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            action: \"\",\n                            className: \"form-login d-flex flex-column mt-4 mt-md-0 p-30\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"d-flex flex-column align-items-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            className: \"form-label\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            className: \"form-control\",\n                                            id: \"email_address\",\n                                            placeholder: \"semina@bwa.com\",\n                                            value: email,\n                                            onChange: function(e) {\n                                                return setemail(e.target.value);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"d-flex flex-column align-items-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            className: \"form-label\",\n                                            children: \"Password (6 characters)\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            className: \"form-control\",\n                                            id: \"password\",\n                                            placeholder: \"Type your password\",\n                                            value: password,\n                                            onChange: function(e) {\n                                                return setpassword(e.target.value);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"d-grid mt-2 gap-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                            className: \"btn-green\",\n                                            onClick: onSubmit,\n                                            children: \"Sign In\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                            href: \"/signUp\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                href: \"signup.html\",\n                                                className: \"btn-navy\",\n                                                children: \"Create New Account\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_google_login__WEBPACK_IMPORTED_MODULE_9__.GoogleLogin, {\n                                    clientId: \"126439219865-jst935eqdlkeudlbqdvnq4pbuvj235vd.apps.googleusercontent.com\",\n                                    buttonText: \"Login\",\n                                    onSuccess: responseGoogleSucces,\n                                    onFailure: responseGoogleError,\n                                    cookiePolicy: \"single_host_origin\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/garnespratama/Documents/Paper/frontend/pages/signIn/index.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, _this);\n};\n_s(SignIn, \"QRPTci8SThxoS3BcV0Bq3pQDkFQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7R0FySEtTLE1BQU07O1FBR0tOLGtEQUFTOzs7QUFIcEJNLEtBQUFBLE1BQU07QUF1SFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduSW4vaW5kZXgudHN4PzE2ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9PcmdhbmlzbS9JbnRlcmZhY2UvbmF2YmFyXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gXCJyZWFjdC1nb29nbGUtbG9naW5cIjtcbmltcG9ydCB7IGdhcGkgfSBmcm9tIFwiZ2FwaS1zY3JpcHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTaWduSW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0ZW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0cGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgZ2FwaS5jbGllbnQuaW5pdCh7XG4gICAgICAgIGNsaWVudElkOlxuICAgICAgICAgIFwiMTI2NDM5MjE5ODY1LWpzdDkzNWVxZGxrZXVkbGJxZHZucTRwYnV2ajIzNXZkLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCIsXG4gICAgICAgIHNjb3BlOiBcImVtYWlsXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnYXBpLmxvYWQoXCJjbGllbnQ6YXV0aDJcIiwgc3RhcnQpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3YxL2F1dGgvc2lnbmluXCI7XG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcXMgPSByZXF1aXJlKFwicXNcIik7XG4gICAgY29uc3QgZGF0YSA9IHFzLnN0cmluZ2lmeSh7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgIH0pO1xuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XG4gICAgICB0b2FzdC5lcnJvcihcImVtYWlsIC8gcGFzc3dvcmQgd2FqaWIgZGlpc2lcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBBeGlvcy5wb3N0KHVybCwgZGF0YSwgY29uZmlnKTtcbiAgICAgIGlmIChyZXNwLnN0YXR1cyA+IDMwMCkge1xuICAgICAgICB0b2FzdC5lcnJvcihcImRhdGEgdGlkYWsgdmFsaWRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgcmVzcCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3Auc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJsb2dpbiBiZXJoYXNpbFwiKTtcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcmVzcC5kYXRhLmRhdGE7XG4gICAgICAgIGNvbnN0IHRva2VuQmFzZTY0ID0gYnRvYSh0b2tlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gXCIsIHRva2VuKTtcbiAgICAgICAgY29va2llLnNldChcInRva2VuXCIsIHRva2VuQmFzZTY0KTtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNwb25zZUdvb2dsZVN1Y2NlcyA9IChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuTncudG9rZW5JZDtcbiAgICBjb25zb2xlLmxvZyhcInRva2VuIDogXCIsIHRva2VuKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgLy9yb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG4gIGNvbnN0IHJlc3BvbnNlR29vZ2xlRXJyb3IgPSAocmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgcm91dGVyLnB1c2goXCIvc2lnbkluXCIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsb2dpbiBoZWFkZXIgYmdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgaGVybyBnYXAtNVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWhlYWRsaW5lIHRleHQtc3RhcnRcIj5TaWduIEluPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIGFjdGlvbj1cIlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbG9naW4gZC1mbGV4IGZsZXgtY29sdW1uIG10LTQgbXQtbWQtMCBwLTMwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbF9hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VtaW5hQGJ3YS5jb21cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRlbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkICg2IGNoYXJhY3RlcnMpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldHBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWdyaWQgbXQtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWdyZWVuXCIgb25DbGljaz17b25TdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnblVwXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwic2lnbnVwLmh0bWxcIiBjbGFzc05hbWU9XCJidG4tbmF2eVwiPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgTmV3IEFjY291bnRcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8R29vZ2xlTG9naW5cbiAgICAgICAgICAgICAgICBjbGllbnRJZD1cIjEyNjQzOTIxOTg2NS1qc3Q5MzVlcWRsa2V1ZGxicWR2bnE0cGJ1dmoyMzV2ZC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luXCJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlU3VjY2VzfVxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGVFcnJvcn1cbiAgICAgICAgICAgICAgICBjb29raWVQb2xpY3k9e1wic2luZ2xlX2hvc3Rfb3JpZ2luXCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIkF4aW9zIiwidXNlUm91dGVyIiwiTGluayIsImNvb2tpZSIsIkdvb2dsZUxvZ2luIiwiZ2FwaSIsInVzZUVmZmVjdCIsIlNpZ25JbiIsImVtYWlsIiwic2V0ZW1haWwiLCJwYXNzd29yZCIsInNldHBhc3N3b3JkIiwicm91dGVyIiwic3RhcnQiLCJjbGllbnQiLCJpbml0IiwiY2xpZW50SWQiLCJzY29wZSIsImxvYWQiLCJjb25maWciLCJoZWFkZXJzIiwidXJsIiwib25TdWJtaXQiLCJlIiwicXMiLCJkYXRhIiwicmVzcCIsInRva2VuIiwidG9rZW5CYXNlNjQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcXVpcmUiLCJzdHJpbmdpZnkiLCJlcnJvciIsInBvc3QiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsImJ0b2EiLCJzZXQiLCJwdXNoIiwicmVzcG9uc2VHb29nbGVTdWNjZXMiLCJyZXNwb25zZSIsIk53IiwidG9rZW5JZCIsInJlc3BvbnNlR29vZ2xlRXJyb3IiLCJkaXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZm9ybSIsImFjdGlvbiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiaHJlZiIsImEiLCJidXR0b25UZXh0Iiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwiY29va2llUG9saWN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signIn/index.tsx\n");

/***/ })

});