webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/webgl/rain-renderer.js":
/*!*******************************************!*\
  !*** ./components/webgl/rain-renderer.js ***!
  \*******************************************/
/*! exports provided: RainRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RainRenderer\", function() { return RainRenderer; });\n/* harmony import */ var _Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _gl_obj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gl-obj */ \"./components/webgl/gl-obj.js\");\n/* harmony import */ var _create_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-canvas */ \"./components/webgl/create-canvas.js\");\n/* harmony import */ var _shaders_simple_vert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/simple.vert */ \"./components/webgl/shaders/simple.vert.js\");\n/* harmony import */ var _shaders_water_frag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shaders/water.frag */ \"./components/webgl/shaders/water.frag.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar defaultOptions = {\n  renderShadow: false,\n  minRefraction: 256,\n  maxRefraction: 512,\n  brightness: 1,\n  alphaMultiply: 20,\n  alphaSubtract: 5,\n  parallaxBg: 5,\n  parallaxFg: 20\n};\nvar RainRenderer = /*#__PURE__*/function () {\n  function RainRenderer(canvas, canvasLiquid, imageFg, imageBg) {\n    var _this = this,\n        _s = $RefreshSig$();\n\n    var imageShine = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, RainRenderer);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"gl\", null);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"width\", 0);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"height\", 0);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"textures\", null);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"programWater\", null);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"programBlurX\", null);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"programBlurY\", null);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"parallaxX\", 0);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"parallaxY\", 0);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"renderShadow\", false);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"init\", function () {\n      _this.width = _this.canvas.width;\n      _this.height = _this.canvas.height;\n      _this.gl = new _gl_obj__WEBPACK_IMPORTED_MODULE_3__[\"GL\"](_this.canvas, {\n        alpha: false\n      }, _shaders_simple_vert__WEBPACK_IMPORTED_MODULE_5__[\"SimpleVert\"], _shaders_water_frag__WEBPACK_IMPORTED_MODULE_6__[\"WaterFrag\"]);\n      var gl = _this.gl;\n      _this.programWater = gl.program;\n      gl.createUniform(\"2f\", \"resolution\", _this.width, _this.height);\n      gl.createUniform(\"1f\", \"textureRatio\", _this.imageBg.width / _this.imageBg.height);\n      gl.createUniform(\"1i\", \"renderShine\", _this.imageShine === null ? false : true);\n      gl.createUniform(\"1i\", \"renderShadow\", _this.options.renderShadow);\n      gl.createUniform(\"1f\", \"minRefraction\", _this.options.minRefraction);\n      gl.createUniform(\"1f\", \"refractionDelta\", _this.options.maxRefraction - _this.options.minRefraction);\n      gl.createUniform(\"1f\", \"brightness\", _this.options.brightness);\n      gl.createUniform(\"1f\", \"alphaMultiply\", _this.options.alphaMultiply);\n      gl.createUniform(\"1f\", \"alphaSubtract\", _this.options.alphaSubtract);\n      gl.createUniform(\"1f\", \"parallaxBg\", _this.options.parallaxBg);\n      gl.createUniform(\"1f\", \"parallaxFg\", _this.options.parallaxFg);\n      gl.createTexture(null, 0);\n      _this.textures = [{\n        name: 'textureShine',\n        img: _this.imageShine === null ? Object(_create_canvas__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(2, 2) : _this.imageShine\n      }, {\n        name: 'textureFg',\n        img: _this.imageFg\n      }, {\n        name: 'textureBg',\n        img: _this.imageBg\n      }];\n\n      _this.textures.forEach(function (texture, i) {\n        gl.createTexture(texture.img, i + 1);\n        gl.createUniform('1i', texture.name, i + 1);\n      });\n\n      _this.draw();\n    });\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"draw\", _s(function () {\n      _s();\n\n      _this.gl.useProgram(_this.programWater);\n\n      _this.gl.createUniform('2f', 'parallax', _this.parallaxX, _this.parallaxY);\n\n      _this.updateTexture();\n\n      _this.gl.draw();\n\n      requestAnimationFrame(_this.draw);\n    }, \"ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=\", true));\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"updateTextures\", function () {\n      _this.textures.forEach(function (texture, i) {\n        _this.gl.activeTexture(i + 1);\n\n        _this.gl.updateTexture(texture.img);\n      });\n    });\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"updateTexture\", function () {\n      _this.gl.activeTexture(0);\n\n      _this.gl.updateTexture(_this.canvasLiquid);\n    });\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"resize\", function () {});\n\n    this.canvas = canvas;\n    this.canvasLiquid = canvasLiquid;\n    this.imageShine = imageShine;\n    this.imageFg = imageFg;\n    this.imageBg = imageBg;\n    this.options = _objectSpread(_objectSpread({}, defaultOptions), options);\n    this.init();\n  }\n\n  Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(RainRenderer, [{\n    key: \"overlayTexture\",\n    get: function get() {},\n    set: function set(v) {}\n  }]);\n\n  return RainRenderer;\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93ZWJnbC9yYWluLXJlbmRlcmVyLmpzPzE2MGMiXSwibmFtZXMiOlsiZGVmYXVsdE9wdGlvbnMiLCJyZW5kZXJTaGFkb3ciLCJtaW5SZWZyYWN0aW9uIiwibWF4UmVmcmFjdGlvbiIsImJyaWdodG5lc3MiLCJhbHBoYU11bHRpcGx5IiwiYWxwaGFTdWJ0cmFjdCIsInBhcmFsbGF4QmciLCJwYXJhbGxheEZnIiwiUmFpblJlbmRlcmVyIiwiY2FudmFzIiwiY2FudmFzTGlxdWlkIiwiaW1hZ2VGZyIsImltYWdlQmciLCJpbWFnZVNoaW5lIiwib3B0aW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwiZ2wiLCJHTCIsImFscGhhIiwiU2ltcGxlVmVydCIsIldhdGVyRnJhZyIsInByb2dyYW1XYXRlciIsInByb2dyYW0iLCJjcmVhdGVVbmlmb3JtIiwiY3JlYXRlVGV4dHVyZSIsInRleHR1cmVzIiwibmFtZSIsImltZyIsImNyZWF0ZUNhbnZhcyIsImZvckVhY2giLCJ0ZXh0dXJlIiwiaSIsImRyYXciLCJ1c2VQcm9ncmFtIiwicGFyYWxsYXhYIiwicGFyYWxsYXhZIiwidXBkYXRlVGV4dHVyZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFjdGl2ZVRleHR1cmUiLCJpbml0IiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRztBQUNuQkMsY0FBWSxFQUFFLEtBREs7QUFFbkJDLGVBQWEsRUFBRSxHQUZJO0FBR25CQyxlQUFhLEVBQUUsR0FISTtBQUluQkMsWUFBVSxFQUFFLENBSk87QUFLbkJDLGVBQWEsRUFBRSxFQUxJO0FBTW5CQyxlQUFhLEVBQUUsQ0FOSTtBQU9uQkMsWUFBVSxFQUFFLENBUE87QUFRbkJDLFlBQVUsRUFBRTtBQVJPLENBQXZCO0FBV08sSUFBTUMsWUFBYjtBQWFJLHdCQUFhQyxNQUFiLEVBQXFCQyxZQUFyQixF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LENBQXNCTixPQUFPLENBQUNILEdBQTlCO0FBQ0gsT0FIRDtBQUlILEtBN0RtRjs7QUFBQSxpTEErRHBFLFlBQU07QUFDbEIsV0FBSSxDQUFDWCxFQUFMLENBQVFzQixhQUFSLENBQXNCLENBQXRCOztBQUNBLFdBQUksQ0FBQ3RCLEVBQUwsQ0FBUW9CLGFBQVIsQ0FBc0IsS0FBSSxDQUFDM0IsWUFBM0I7QUFDSCxLQWxFbUY7O0FBQUEsMEtBb0UzRSxZQUFNLENBRWQsQ0F0RW1GOztBQUNoRixTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtHLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0UsT0FBTCxtQ0FDT2YsY0FEUCxHQUVPZSxPQUZQO0FBSUEsU0FBSzBCLElBQUw7QUFDSDs7QUF4Qkw7QUFBQTtBQUFBLHdCQW9Gd0IsQ0FFbkIsQ0F0Rkw7QUFBQSxzQkF1RnVCQyxDQXZGdkIsRUF1RnlCLENBRXBCO0FBekZMOztBQUFBO0FBQUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYmdsL3JhaW4tcmVuZGVyZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHTCB9IGZyb20gJy4vZ2wtb2JqJztcbmltcG9ydCBjcmVhdGVDYW52YXMgZnJvbSAnLi9jcmVhdGUtY2FudmFzJztcbmltcG9ydCB7IFNpbXBsZVZlcnQgfSBmcm9tICcuL3NoYWRlcnMvc2ltcGxlLnZlcnQnO1xuaW1wb3J0IHsgV2F0ZXJGcmFnIH0gZnJvbSAnLi9zaGFkZXJzL3dhdGVyLmZyYWcnO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICByZW5kZXJTaGFkb3c6IGZhbHNlLFxuICAgIG1pblJlZnJhY3Rpb246IDI1NixcbiAgICBtYXhSZWZyYWN0aW9uOiA1MTIsXG4gICAgYnJpZ2h0bmVzczogMSxcbiAgICBhbHBoYU11bHRpcGx5OiAyMCxcbiAgICBhbHBoYVN1YnRyYWN0OiA1LFxuICAgIHBhcmFsbGF4Qmc6IDUsXG4gICAgcGFyYWxsYXhGZzogMjAsXG59O1xuXG5leHBvcnQgY2xhc3MgUmFpblJlbmRlcmVyIHtcblxuICAgIGdsID0gbnVsbDtcbiAgICB3aWR0aCA9IDA7XG4gICAgaGVpZ2h0ID0gMDtcbiAgICB0ZXh0dXJlcyA9IG51bGw7XG4gICAgcHJvZ3JhbVdhdGVyID0gbnVsbDtcbiAgICBwcm9ncmFtQmx1clggPSBudWxsO1xuICAgIHByb2dyYW1CbHVyWSA9IG51bGw7XG4gICAgcGFyYWxsYXhYID0gMDtcbiAgICBwYXJhbGxheFkgPSAwO1xuICAgIHJlbmRlclNoYWRvdyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IgKGNhbnZhcywgY2FudmFzTGlxdWlkLCBpbWFnZUZnLCBpbWFnZUJnLCBpbWFnZVNoaW5lID0gbnVsbCwgb3B0aW9ucz17fSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNMaXF1aWQgPSBjYW52YXNMaXF1aWQ7XG4gICAgICAgIHRoaXMuaW1hZ2VTaGluZSA9IGltYWdlU2hpbmU7XG4gICAgICAgIHRoaXMuaW1hZ2VGZyA9IGltYWdlRmc7XG4gICAgICAgIHRoaXMuaW1hZ2VCZyA9IGltYWdlQmc7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5nbCA9IG5ldyBHTCh0aGlzLmNhbnZhcywgeyBhbHBoYTpmYWxzZSB9LCBTaW1wbGVWZXJ0LCBXYXRlckZyYWcpO1xuICAgICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xuICAgICAgICB0aGlzLnByb2dyYW1XYXRlciA9IGdsLnByb2dyYW07XG5cbiAgICAgICAgZ2wuY3JlYXRlVW5pZm9ybShcIjJmXCIsXCJyZXNvbHV0aW9uXCIsdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XG4gICAgICAgIGdsLmNyZWF0ZVVuaWZvcm0oXCIxZlwiLFwidGV4dHVyZVJhdGlvXCIsdGhpcy5pbWFnZUJnLndpZHRoL3RoaXMuaW1hZ2VCZy5oZWlnaHQpO1xuICAgICAgICBnbC5jcmVhdGVVbmlmb3JtKFwiMWlcIixcInJlbmRlclNoaW5lXCIsdGhpcy5pbWFnZVNoaW5lID09PSBudWxsID8gZmFsc2UgOiB0cnVlKTtcbiAgICAgICAgZ2wuY3JlYXRlVW5pZm9ybShcIjFpXCIsXCJyZW5kZXJTaGFkb3dcIix0aGlzLm9wdGlvbnMucmVuZGVyU2hhZG93KTtcbiAgICAgICAgZ2wuY3JlYXRlVW5pZm9ybShcIjFmXCIsXCJtaW5SZWZyYWN0aW9uXCIsdGhpcy5vcHRpb25zLm1pblJlZnJhY3Rpb24pO1xuICAgICAgICBnbC5jcmVhdGVVbmlmb3JtKFwiMWZcIixcInJlZnJhY3Rpb25EZWx0YVwiLHRoaXMub3B0aW9ucy5tYXhSZWZyYWN0aW9uLXRoaXMub3B0aW9ucy5taW5SZWZyYWN0aW9uKTtcbiAgICAgICAgZ2wuY3JlYXRlVW5pZm9ybShcIjFmXCIsXCJicmlnaHRuZXNzXCIsdGhpcy5vcHRpb25zLmJyaWdodG5lc3MpO1xuICAgICAgICBnbC5jcmVhdGVVbmlmb3JtKFwiMWZcIixcImFscGhhTXVsdGlwbHlcIix0aGlzLm9wdGlvbnMuYWxwaGFNdWx0aXBseSk7XG4gICAgICAgIGdsLmNyZWF0ZVVuaWZvcm0oXCIxZlwiLFwiYWxwaGFTdWJ0cmFjdFwiLHRoaXMub3B0aW9ucy5hbHBoYVN1YnRyYWN0KTtcbiAgICAgICAgZ2wuY3JlYXRlVW5pZm9ybShcIjFmXCIsXCJwYXJhbGxheEJnXCIsdGhpcy5vcHRpb25zLnBhcmFsbGF4QmcpO1xuICAgICAgICBnbC5jcmVhdGVVbmlmb3JtKFwiMWZcIixcInBhcmFsbGF4RmdcIix0aGlzLm9wdGlvbnMucGFyYWxsYXhGZyk7XG5cbiAgICAgICAgZ2wuY3JlYXRlVGV4dHVyZShudWxsLCAwKTtcblxuICAgICAgICB0aGlzLnRleHR1cmVzID0gW1xuICAgICAgICAgICAgeyBuYW1lOid0ZXh0dXJlU2hpbmUnLCBpbWc6dGhpcy5pbWFnZVNoaW5lID09PSBudWxsID8gY3JlYXRlQ2FudmFzKDIsIDIpIDogdGhpcy5pbWFnZVNoaW5lIH0sXG4gICAgICAgICAgICB7IG5hbWU6J3RleHR1cmVGZycsIGltZzp0aGlzLmltYWdlRmcgfSxcbiAgICAgICAgICAgIHsgbmFtZTondGV4dHVyZUJnJywgaW1nOnRoaXMuaW1hZ2VCZyB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy50ZXh0dXJlcy5mb3JFYWNoKCh0ZXh0dXJlLCBpKSA9PiB7XG4gICAgICAgICAgICBnbC5jcmVhdGVUZXh0dXJlKHRleHR1cmUuaW1nLCBpICsgMSk7XG4gICAgICAgICAgICBnbC5jcmVhdGVVbmlmb3JtKCcxaScsIHRleHR1cmUubmFtZSwgaSArIDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZHJhdyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbVdhdGVyKTtcbiAgICAgICAgdGhpcy5nbC5jcmVhdGVVbmlmb3JtKCcyZicsICdwYXJhbGxheCcsIHRoaXMucGFyYWxsYXhYLCB0aGlzLnBhcmFsbGF4WSk7XG4gICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZSgpO1xuICAgICAgICB0aGlzLmdsLmRyYXcoKTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KTtcbiAgICB9XG5cbiAgICB1cGRhdGVUZXh0dXJlcyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy50ZXh0dXJlcy5mb3JFYWNoKCh0ZXh0dXJlLCBpKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUoaSArIDEpO1xuICAgICAgICAgICAgdGhpcy5nbC51cGRhdGVUZXh0dXJlKHRleHR1cmUuaW1nKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZVRleHR1cmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSgwKTtcbiAgICAgICAgdGhpcy5nbC51cGRhdGVUZXh0dXJlKHRoaXMuY2FudmFzTGlxdWlkKTtcbiAgICB9XG5cbiAgICByZXNpemUgPSAoKSA9PiB7XG5cbiAgICB9XG4gICAgZ2V0IG92ZXJsYXlUZXh0dXJlKCl7XG4gIFxuICAgIH1cbiAgICBzZXQgb3ZlcmxheVRleHR1cmUodil7XG4gIFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/webgl/rain-renderer.js\n");

/***/ })

})