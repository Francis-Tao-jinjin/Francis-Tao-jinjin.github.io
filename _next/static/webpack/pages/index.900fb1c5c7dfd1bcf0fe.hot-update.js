webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\n\nvar _jsxFileName = \"/Users/mac/Documents/git/my-github-pages/pages/index.js\";\n\n\n\n\n // this fucntion only runs on the server-side.\n// It will never run on the client-side.\n// It won’t even be included in the JS bundle for the browser\n// Tt can only be exported from a page. \n// You can’t export it from non-page files.\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var _this = this;\n\n  var allPostsData = _ref.allPostsData;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    home: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: _components_layout__WEBPACK_IMPORTED_MODULE_2__[\"siteTitle\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingMd,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Hi, I'm Francis Tao. I'm a software engineer, Mainly focus on front-end development and webgl, You can explore my GitHub for more infomation\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingLg,\n        children: \"Blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"grid grid-cols-1 md:grid-cols-3\",\n        children: allPostsData.map(function (_ref2) {\n          var id = _ref2.id,\n              date = _ref2.date,\n              pic = _ref2.pic,\n              description = _ref2.description,\n              title = _ref2.title;\n          return (\n            /*#__PURE__*/\n            // <div className=\"flex-1 lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8\" key={id}>\n            Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"m-3 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n                href: \"/posts/\".concat(id),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  style: {\n                    cursor: 'pointer',\n                    backgroundImage: 'url(' + pic + ')'\n                  },\n                  className: \"overflow-hidden h-60 bg-cover postCoverImg bg-center\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 38,\n                  columnNumber: 17\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"p-4\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n                  href: \"/posts/\".concat(id),\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                    className: \"truncate font-medium text-gray-900 text-lg inline-block m-0 w-full\",\n                    children: title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 45,\n                    columnNumber: 19\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 44,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 47,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: \"text-justify text-base text-gray-600\",\n                  children: description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n                  className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.lightText,\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_date__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    dateString: date\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 52,\n                    columnNumber: 19\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 51,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 15\n              }, _this)]\n            }, id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 13\n            }, _this)\n          );\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYWxsUG9zdHNEYXRhIiwic2l0ZVRpdGxlIiwidXRpbFN0eWxlcyIsImhlYWRpbmdNZCIsImhlYWRpbmdMZyIsIm1hcCIsImlkIiwiZGF0ZSIsInBpYyIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsaWdodFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBVWUsU0FBU0EsSUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQWZDLFlBQWUsUUFBZkEsWUFBZTtBQUMzQyxzQkFDRSxxRUFBQywwREFBRDtBQUFRLFFBQUksTUFBWjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBUUMsNERBQVNBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFTLGVBQVMsRUFBRUMsK0RBQVUsQ0FBQ0MsU0FBL0I7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSSxpQkFBUyxFQUFFRCwrREFBVSxDQUFDRSxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsa0JBQ0NKLFlBQVksQ0FBQ0ssR0FBYixDQUFpQjtBQUFBLGNBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLGNBQU9DLElBQVAsU0FBT0EsSUFBUDtBQUFBLGNBQWFDLEdBQWIsU0FBYUEsR0FBYjtBQUFBLGNBQWtCQyxXQUFsQixTQUFrQkEsV0FBbEI7QUFBQSxjQUErQkMsS0FBL0IsU0FBK0JBLEtBQS9CO0FBQUE7QUFBQTtBQUNkO0FBQ0E7QUFBSyx1QkFBUyxFQUFDLHFFQUFmO0FBQUEsc0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxvQkFBSSxtQkFBWUosRUFBWixDQUFWO0FBQUEsdUNBQ0U7QUFBSyx1QkFBSyxFQUFFO0FBQ1ZLLDBCQUFNLEVBQUUsU0FERTtBQUVWQyxtQ0FBZSxFQUFFLFNBQVNKLEdBQVQsR0FBZTtBQUZ0QixtQkFBWjtBQUdHLDJCQUFTLEVBQUM7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQU9FO0FBQUsseUJBQVMsRUFBQyxLQUFmO0FBQUEsd0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxzQkFBSSxtQkFBWUYsRUFBWixDQUFWO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxFQUFDLG9FQUFiO0FBQUEsOEJBQW1GSTtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUFLRTtBQUFHLDJCQUFTLEVBQUMsc0NBQWI7QUFBQSw0QkFDSUQ7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGLGVBUUU7QUFBTywyQkFBUyxFQUFFUCwrREFBVSxDQUFDVyxTQUE3QjtBQUFBLHlDQUNFLHFFQUFDLHdEQUFEO0FBQU0sOEJBQVUsRUFBRU47QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGO0FBQUEsZUFBMEZELEVBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGYztBQUFBLFNBQWpCO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0NEO0tBdkN1QlAsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMYXlvdXQsIHtzaXRlVGl0bGV9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uL2xpYi9wb3N0cyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUnXG5cbi8vIHRoaXMgZnVjbnRpb24gb25seSBydW5zIG9uIHRoZSBzZXJ2ZXItc2lkZS5cbi8vIEl0IHdpbGwgbmV2ZXIgcnVuIG9uIHRoZSBjbGllbnQtc2lkZS5cbi8vIEl0IHdvbuKAmXQgZXZlbiBiZSBpbmNsdWRlZCBpbiB0aGUgSlMgYnVuZGxlIGZvciB0aGUgYnJvd3NlclxuLy8gVHQgY2FuIG9ubHkgYmUgZXhwb3J0ZWQgZnJvbSBhIHBhZ2UuIFxuLy8gWW91IGNhbuKAmXQgZXhwb3J0IGl0IGZyb20gbm9uLXBhZ2UgZmlsZXMuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGEsXG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHthbGxQb3N0c0RhdGF9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cbiAgICAgICAgPHA+SGksIEknbSBGcmFuY2lzIFRhby4gSSdtIGEgc29mdHdhcmUgZW5naW5lZXIsIE1haW5seSBmb2N1cyBvbiBmcm9udC1lbmQgZGV2ZWxvcG1lbnQgYW5kIHdlYmdsLCBZb3UgY2FuIGV4cGxvcmUgbXkgR2l0SHViIGZvciBtb3JlIGluZm9tYXRpb248L3A+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT5CbG9nPC9oMj5cbiAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdH0+ICovfVxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4IGl0ZW1zLWNlbnRlciBjb250YWluZXIgbXgtYXV0byBteS1hdXRvXCI+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAge2FsbFBvc3RzRGF0YS5tYXAoKHsgaWQsIGRhdGUsIHBpYywgZGVzY3JpcHRpb24sIHRpdGxlIH0pID0+IChcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGxnOm0tNCBzaGFkb3ctbWQgaG92ZXI6c2hhZG93LWxnIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWQtbGcgYmctd2hpdGUgbXktMTIgbXgtOFwiIGtleT17aWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTMgc2hhZG93LW1kIGhvdmVyOnNoYWRvdy1sZyBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkLWxnIGJnLXdoaXRlXCIga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtpZH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgcGljICsgJyknLFxuICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBoLTYwIGJnLWNvdmVyIHBvc3RDb3ZlckltZyBiZy1jZW50ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtpZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndHJ1bmNhdGUgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB0ZXh0LWxnIGlubGluZS1ibG9jayBtLTAgdy1mdWxsJz57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1qdXN0aWZ5IHRleHQtYmFzZSB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgICAgICAgIHsgZGVzY3JpcHRpb24gfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpZ2h0VGV4dH0+XG4gICAgICAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtkYXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})