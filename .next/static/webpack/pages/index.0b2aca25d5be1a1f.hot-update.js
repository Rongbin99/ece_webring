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

/***/ "./src/components/ui/search.jsx":
/*!**************************************!*\
  !*** ./src/components/ui/search.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"./src/components/ui/input.jsx\");\n/* harmony import */ var _pages_api_members__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/api/members */ \"./src/pages/api/members.js\");\n/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fuse.js */ \"./node_modules/fuse.js/dist/fuse.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Search = ()=>{\n    _s();\n    // Fuse.js for search\n    const options = {\n        findAllMatches: true,\n        threshold: 0.3,\n        keys: [\n            \"name\",\n            \"siteURL\",\n            \"year\"\n        ],\n        useExtendedSearch: true\n    };\n    const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_pages_api_members__WEBPACK_IMPORTED_MODULE_3__.members, options);\n    // const [searchState, setSearchState] = useState(\"\")\n    const [currMemberState, setCurrMemberState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        fuse.search('\" \"')\n    ][0]);\n    const handleKeyDown = (e)=>{\n        if (e.keyCode === 13) {\n            if (!e.target.value) {\n                setCurrMemberState([\n                    fuse.search('\" \"')\n                ][0]);\n            } else {\n                setCurrMemberState([\n                    fuse.search(e.target.value)\n                ][0]);\n            }\n        }\n    };\n    return(// wrapper div\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"w-full h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"w-full grid grid-cols-7\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"col-span-1 bg-black font-mono text-neutral-500 text-lg flex w-full flex items-center justify-center\",\n                        children: \"grep>\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        type: \"text\",\n                        placeholder: \"filter by name, year, site ...\",\n                        onKeyDown: handleKeyDown\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, undefined),\n            currMemberState.map((member)=>{\n                console.log(currMemberState);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"w-full grid grid-cols-12 gap-5 py-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"col-span-1\",\n                            v: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"flex items-center justify-start py-2 px-4 col-span-11 font-mono text-white text-sm border-dotted border-2 border-neutral-700 hover:bg-neutral-900 hover:cursor-crosshair\",\n                            children: [\n                                member.item.name,\n                                \" |\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"text-indigo-400 underline hover:text-indigo-500\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: member.item.siteURL,\n                                        target: \"_blank\",\n                                        children: member.item.siteURL\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"\\xa0| \",\n                                member.item.year\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\ui\\\\search.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined));\n};\n_s(Search, \"/pn8ZJmDB76i4kzFc7rH92+qEmU=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9zZWFyY2guanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDa0I7QUFDRTtBQUNBO0FBQ25CO0FBRTFCLE1BQU1NLFNBQVM7O0lBQ2IscUJBQXFCO0lBQ3JCLE1BQU1DLFVBQVU7UUFDZEMsZ0JBQWdCO1FBQ2hCQyxXQUFXO1FBQ1hDLE1BQU07WUFBQztZQUFRO1lBQVc7U0FBTztRQUNqQ0MsbUJBQW1CO0lBQ3JCO0lBQ0EsTUFBTUMsT0FBTyxJQUFJUCwrQ0FBSUEsQ0FBQ0QsdURBQU9BLEVBQUVHO0lBRS9CLHFEQUFxRDtJQUNyRCxNQUFNLENBQUNNLGlCQUFpQkMsbUJBQW1CLEdBQUdiLCtDQUFRQSxDQUFDO1FBQUNXLEtBQUtHLE1BQU0sQ0FBQztLQUFPLENBQUMsRUFBRTtJQUU5RSxNQUFNQyxnQkFBZ0IsQ0FBQ0M7UUFDckIsSUFBR0EsRUFBRUMsT0FBTyxLQUFLLElBQUk7WUFDbkIsSUFBRyxDQUFDRCxFQUFFRSxNQUFNLENBQUNDLEtBQUssRUFBQztnQkFDakJOLG1CQUFtQjtvQkFBQ0YsS0FBS0csTUFBTSxDQUFDO2lCQUFPLENBQUMsRUFBRTtZQUM1QyxPQUNLO2dCQUNIRCxtQkFBbUI7b0JBQUNGLEtBQUtHLE1BQU0sQ0FBQ0UsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO2lCQUFFLENBQUMsRUFBRTtZQUNyRDtRQUNGO0lBQ0Y7SUFFQSxPQUNFLGNBQWM7a0JBQ2QsOERBQUNDO1FBQUlDLE9BQU07OzBCQUVYLDhEQUFDRDtnQkFBSUMsT0FBTTs7a0NBQ1QsOERBQUNEO3dCQUFJQyxPQUFNO2tDQUFzRzs7Ozs7O2tDQUNqSCw4REFBQ25CLHVEQUFLQTt3QkFBQ29CLE1BQUs7d0JBQU9DLGFBQVk7d0JBQWlDQyxXQUFXVDs7Ozs7Ozs7Ozs7O1lBSzVFSCxnQkFBZ0JhLEdBQUcsQ0FBQyxDQUFDQztnQkFDdEJDLFFBQVFDLEdBQUcsQ0FBQ2hCO2dCQUNWLHFCQUNFLDhEQUFDUTtvQkFBSUMsT0FBTTs7c0NBQ1QsOERBQUNEOzRCQUFJQyxPQUFNOzRCQUFZUSxDQUFDOzs7Ozs7c0NBQ3hCLDhEQUFDVDs0QkFBSUMsT0FBTTs7Z0NBQTRLSyxPQUFPSSxJQUFJLENBQUNDLElBQUk7Z0NBQUM7OENBQ3RNLDhEQUFDWDtvQ0FBSUMsT0FBTTs4Q0FDVCw0RUFBQ1c7d0NBQUVDLE1BQU1QLE9BQU9JLElBQUksQ0FBQ0ksT0FBTzt3Q0FBRWhCLFFBQU87a0RBQVVRLE9BQU9JLElBQUksQ0FBQ0ksT0FBTzs7Ozs7Ozs7Ozs7Z0NBQzlEO2dDQUNHUixPQUFPSSxJQUFJLENBQUNLLElBQUk7Ozs7Ozs7Ozs7Ozs7WUFJakM7Ozs7Ozs7QUFHSjtHQW5ETTlCO0tBQUFBO0FBcUROLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VpL3NlYXJjaC5qc3g/NGY4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvaW5wdXQnXHJcbmltcG9ydCB7IG1lbWJlcnMgfSBmcm9tICdAL3BhZ2VzL2FwaS9tZW1iZXJzJ1xyXG5pbXBvcnQgRnVzZSBmcm9tICdmdXNlLmpzJ1xyXG5cclxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xyXG4gIC8vIEZ1c2UuanMgZm9yIHNlYXJjaFxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBmaW5kQWxsTWF0Y2hlczogdHJ1ZSxcclxuICAgIHRocmVzaG9sZDogMC4zLFxyXG4gICAga2V5czogW1wibmFtZVwiLCBcInNpdGVVUkxcIiwgXCJ5ZWFyXCJdLFxyXG4gICAgdXNlRXh0ZW5kZWRTZWFyY2g6IHRydWUsXHJcbiAgfVxyXG4gIGNvbnN0IGZ1c2UgPSBuZXcgRnVzZShtZW1iZXJzLCBvcHRpb25zKVxyXG5cclxuICAvLyBjb25zdCBbc2VhcmNoU3RhdGUsIHNldFNlYXJjaFN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2N1cnJNZW1iZXJTdGF0ZSwgc2V0Q3Vyck1lbWJlclN0YXRlXSA9IHVzZVN0YXRlKFtmdXNlLnNlYXJjaCgnXCIgXCInKV1bMF0pXHJcbiAgICBcclxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcclxuICAgIGlmKGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgaWYoIWUudGFyZ2V0LnZhbHVlKXtcclxuICAgICAgICBzZXRDdXJyTWVtYmVyU3RhdGUoW2Z1c2Uuc2VhcmNoKCdcIiBcIicpXVswXSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBzZXRDdXJyTWVtYmVyU3RhdGUoW2Z1c2Uuc2VhcmNoKGUudGFyZ2V0LnZhbHVlKV1bMF0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIHdyYXBwZXIgZGl2XHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtZnVsbFwiPlxyXG4gICAgey8qIHNlYXJjaCBiYXIgKi99XHJcbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEgYmctYmxhY2sgZm9udC1tb25vIHRleHQtbmV1dHJhbC01MDAgdGV4dC1sZyBmbGV4IHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPmdyZXAmZ3Q7PC9kaXY+XHJcbiAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZmlsdGVyIGJ5IG5hbWUsIHllYXIsIHNpdGUgLi4uXCIgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufT48L0lucHV0PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgey8qIHNlYXJjaCByZXN1bHRzICovfVxyXG4gICAgey8qIDxTZWFyY2hSZXN1bHRzPjwvU2VhcmNoUmVzdWx0cz4gKi99XHJcbiAgICB7Y3Vyck1lbWJlclN0YXRlLm1hcCgobWVtYmVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyTWVtYmVyU3RhdGUpXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBncmlkIGdyaWQtY29scy0xMiBnYXAtNSBweS0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMVwidj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHB5LTIgcHgtNCBjb2wtc3Bhbi0xMSBmb250LW1vbm8gdGV4dC13aGl0ZSB0ZXh0LXNtIGJvcmRlci1kb3R0ZWQgYm9yZGVyLTIgYm9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmJnLW5ldXRyYWwtOTAwIGhvdmVyOmN1cnNvci1jcm9zc2hhaXJcIj57bWVtYmVyLml0ZW0ubmFtZX0gfCZuYnNwO1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1pbmRpZ28tNDAwIHVuZGVybGluZSBob3Zlcjp0ZXh0LWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPXttZW1iZXIuaXRlbS5zaXRlVVJMfSB0YXJnZXQ9XCJfYmxhbmtcIj57bWVtYmVyLml0ZW0uc2l0ZVVSTH08L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAmbmJzcDt8IHttZW1iZXIuaXRlbS55ZWFyfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICApXHJcbiAgICB9KX1cclxuICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXQiLCJtZW1iZXJzIiwiRnVzZSIsIlNlYXJjaCIsIm9wdGlvbnMiLCJmaW5kQWxsTWF0Y2hlcyIsInRocmVzaG9sZCIsImtleXMiLCJ1c2VFeHRlbmRlZFNlYXJjaCIsImZ1c2UiLCJjdXJyTWVtYmVyU3RhdGUiLCJzZXRDdXJyTWVtYmVyU3RhdGUiLCJzZWFyY2giLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleUNvZGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25LZXlEb3duIiwibWFwIiwibWVtYmVyIiwiY29uc29sZSIsImxvZyIsInYiLCJpdGVtIiwibmFtZSIsImEiLCJocmVmIiwic2l0ZVVSTCIsInllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ui/search.jsx\n"));

/***/ })

});