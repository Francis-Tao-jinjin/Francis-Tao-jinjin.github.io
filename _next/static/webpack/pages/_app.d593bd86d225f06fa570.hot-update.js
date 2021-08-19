webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/webgl/rain-renderer.js":
/*!*******************************************!*\
  !*** ./components/webgl/rain-renderer.js ***!
  \*******************************************/
/*! exports provided: RainRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RainRenderer\", function() { return RainRenderer; });\n/* harmony import */ var _Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _gl_obj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gl-obj */ \"./components/webgl/gl-obj.js\");\n/* harmony import */ var _create_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-canvas */ \"./components/webgl/create-canvas.js\");\n/* harmony import */ var _shaders_simple_vert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/simple.vert */ \"./components/webgl/shaders/simple.vert.js\");\n/* harmony import */ var _shaders_water_frag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shaders/water.frag */ \"./components/webgl/shaders/water.frag.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar defaultOptions = {\n  renderShadow: false,\n  minRefraction: 256,\n  maxRefraction: 512,\n  brightness: 1,\n  alphaMultiply: 20,\n  alphaSubtract: 5,\n  parallaxBg: 5,\n  parallaxFg: 20\n};\nvar RainRenderer = /*#__PURE__*/function () {\n  function RainRenderer(canvas, canvasLiquid, imageFg, imageBg) {\n    var _this = this,\n        _s = $RefreshSig$();\n\n    var imageShine = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, RainRenderer);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"gl\", null);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"width\", 0);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"height\", 0);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"textures\", null);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"programWater\", null);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"programBlurX\", null);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"programBlurY\", null);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"parallaxX\", 0);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"parallaxY\", 0);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"renderShadow\", false);\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"init\", function () {\n      _this.width = _this.canvas.width;\n      _this.height = _this.canvas.height;\n      _this.gl = new _gl_obj__WEBPACK_IMPORTED_MODULE_3__[\"GL\"](_this.canvas, {\n        alpha: false\n      }, _shaders_simple_vert__WEBPACK_IMPORTED_MODULE_5__[\"SimpleVert\"], _shaders_water_frag__WEBPACK_IMPORTED_MODULE_6__[\"WaterFrag\"]);\n      var gl = _this.gl;\n      _this.programWater = gl.program; // gl.createUniform(\"2f\",\"resolution\",this.width,this.height);\n\n      gl.createUniform(\"1f\", \"textureRatio\", _this.imageBg.width / _this.imageBg.height);\n      gl.createUniform(\"1i\", \"renderShine\", _this.imageShine === null ? false : true);\n      gl.createUniform(\"1i\", \"renderShadow\", _this.options.renderShadow);\n      gl.createUniform(\"1f\", \"minRefraction\", _this.options.minRefraction);\n      gl.createUniform(\"1f\", \"refractionDelta\", _this.options.maxRefraction - _this.options.minRefraction);\n      gl.createUniform(\"1f\", \"brightness\", _this.options.brightness);\n      gl.createUniform(\"1f\", \"alphaMultiply\", _this.options.alphaMultiply);\n      gl.createUniform(\"1f\", \"alphaSubtract\", _this.options.alphaSubtract);\n      gl.createUniform(\"1f\", \"parallaxBg\", _this.options.parallaxBg);\n      gl.createUniform(\"1f\", \"parallaxFg\", _this.options.parallaxFg);\n      gl.createTexture(null, 0);\n      _this.textures = [{\n        name: 'textureShine',\n        img: _this.imageShine === null ? Object(_create_canvas__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(2, 2) : _this.imageShine\n      }, {\n        name: 'textureFg',\n        img: _this.imageFg\n      }, {\n        name: 'textureBg',\n        img: _this.imageBg\n      }];\n\n      _this.textures.forEach(function (texture, i) {\n        gl.createTexture(texture.img, i + 1);\n        gl.createUniform('1i', texture.name, i + 1);\n      });\n\n      _this.draw();\n    });\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"draw\", _s(function () {\n      _s();\n\n      _this.width = window.innerWidth;\n      _this.height = window.innerHeight; // console.log(this.width, this.height);\n\n      _this.gl.useProgram(_this.programWater);\n\n      _this.gl.createUniform(\"2f\", \"resolution\", _this.width, _this.height);\n\n      _this.gl.createUniform('2f', 'parallax', _this.parallaxX, _this.parallaxY);\n\n      _this.updateTexture();\n\n      _this.gl.draw();\n\n      requestAnimationFrame(_this.draw);\n    }, \"ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=\", true));\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"updateTextures\", function () {\n      _this.textures.forEach(function (texture, i) {\n        _this.gl.activeTexture(i + 1);\n\n        _this.gl.updateTexture(texture.img);\n      });\n    });\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"updateTexture\", function () {\n      _this.gl.activeTexture(0);\n\n      _this.gl.updateTexture(_this.canvasLiquid);\n    });\n\n    Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"resize\", function () {\n      _this.gl.viewport(0, 0, _this.gl.canvas.width, _this.gl.canvas.height);\n\n      _this.updateTextures();\n    });\n\n    this.canvas = canvas;\n    this.canvasLiquid = canvasLiquid;\n    this.imageShine = imageShine;\n    this.imageFg = imageFg;\n    this.imageBg = imageBg;\n    this.options = _objectSpread(_objectSpread({}, defaultOptions), options);\n    this.init();\n  }\n\n  Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(RainRenderer, [{\n    key: \"overlayTexture\",\n    get: function get() {},\n    set: function set(v) {}\n  }]);\n\n  return RainRenderer;\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93ZWJnbC9yYWluLXJlbmRlcmVyLmpzPzE2MGMiXSwibmFtZXMiOlsiZGVmYXVsdE9wdGlvbnMiLCJyZW5kZXJTaGFkb3ciLCJtaW5SZWZyYWN0aW9uIiwibWF4UmVmcmFjdGlvbiIsImJyaWdodG5lc3MiLCJhbHBoYU11bHRpcGx5IiwiYWxwaGFTdWJ0cmFjdCIsInBhcmFsbGF4QmciLCJwYXJhbGxheEZnIiwiUmFpblJlbmRlcmVyIiwiY2FudmFzIiwiY2FudmFzTGlxdWlkIiwiaW1hZ2VGZyIsImltYWdlQmciLCJpbWFnZVNoaW5lIiwib3B0aW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwiZ2wiLCJHTCIsImFscGhhIiwiU2ltcGxlVmVydCIsIldhdGVyRnJhZyIsInByb2dyYW1XYXRlciIsInByb2dyYW0iLCJjcmVhdGVVbmlmb3JtIiwiY3JlYXRlVGV4dHVyZSIsInRleHR1cmVzIiwibmFtZSIsImltZyIsImNyZWF0ZUNhbnZhcyIsImZvckVhY2giLCJ0ZXh0dXJlIiwiaSIsImRyYXciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ1c2VQcm9ncmFtIiwicGFyYWxsYXhYIiwicGFyYWxsYXhZIiwidXBkYXRlVGV4dHVyZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFjdGl2ZVRleHR1cmUiLCJ2aWV3cG9ydCIsInVwZGF0ZVRleHR1cmVzIiwiaW5pdCIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUc7QUFDbkJDLGNBQVksRUFBRSxLQURLO0FBRW5CQyxlQUFhLEVBQUUsR0FGSTtBQUduQkMsZUFBYSxFQUFFLEdBSEk7QUFJbkJDLFlBQVUsRUFBRSxDQUpPO0FBS25CQyxlQUFhLEVBQUUsRUFMSTtBQU1uQkMsZUFBYSxFQUFFLENBTkk7QUFPbkJDLFlBQVUsRUFBRSxDQVBPO0FBUW5CQyxZQUFVLEVBQUU7QUFSTyxDQUF2QjtBQVdPLElBQU1DLFlBQWI7QUFhSSx3QkFBYUMsTUFBYixFQUFxQkMsWUFBckIsRUFBbUNDLE9BQW5DLEVBQTRDQyxPQUE1QyxFQUFvRjtBQUFBO0FBQUE7O0FBQUEsUUFBL0JDLFVBQStCLHVFQUFsQixJQUFrQjtBQUFBLFFBQVpDLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFBQSxzS0FYL0UsSUFXK0U7O0FBQUEseUtBVjVFLENBVTRFOztBQUFBLDBLQVQzRSxDQVMyRTs7QUFBQSw0S0FSekUsSUFReUU7O0FBQUEsZ0xBUHJFLElBT3FFOztBQUFBLGdMQU5yRSxJQU1xRTs7QUFBQSxnTEFMckUsSUFLcUU7O0FBQUEsNktBSnhFLENBSXdFOztBQUFBLDZLQUh4RSxDQUd3RTs7QUFBQSxnTEFGckUsS0FFcUU7O0FBQUEsd0tBYTdFLFlBQU07QUFDVCxXQUFJLENBQUNDLEtBQUwsR0FBYSxLQUFJLENBQUNOLE1BQUwsQ0FBWU0sS0FBekI7QUFDQSxXQUFJLENBQUNDLE1BQUwsR0FBYyxLQUFJLENBQUNQLE1BQUwsQ0FBWU8sTUFBMUI7QUFDQSxXQUFJLENBQUNDLEVBQUwsR0FBVSxJQUFJQywwQ0FBSixDQUFPLEtBQUksQ0FBQ1QsTUFBWixFQUFvQjtBQUFFVSxhQUFLLEVBQUM7QUFBUixPQUFwQixFQUFxQ0MsK0RBQXJDLEVBQWlEQyw2REFBakQsQ0FBVjtBQUNBLFVBQUlKLEVBQUUsR0FBRyxLQUFJLENBQUNBLEVBQWQ7QUFDQSxXQUFJLENBQUNLLFlBQUwsR0FBb0JMLEVBQUUsQ0FBQ00sT0FBdkIsQ0FMUyxDQU9UOztBQUNBTixRQUFFLENBQUNPLGFBQUgsQ0FBaUIsSUFBakIsRUFBc0IsY0FBdEIsRUFBcUMsS0FBSSxDQUFDWixPQUFMLENBQWFHLEtBQWIsR0FBcUIsS0FBSSxDQUFDSCxPQUFMLENBQWFJLE1BQXZFO0FBQ0FDLFFBQUUsQ0FBQ08sYUFBSCxDQUFpQixJQUFqQixFQUFzQixhQUF0QixFQUFvQyxLQUFJLENBQUNYLFVBQUwsS0FBb0IsSUFBcEIsR0FBMkIsS0FBM0IsR0FBbUMsSUFBdkU7QUFDQUksUUFBRSxDQUFDTyxhQUFILENBQWlCLElBQWpCLEVBQXNCLGNBQXRCLEVBQXFDLEtBQUksQ0FBQ1YsT0FBTCxDQUFhZCxZQUFsRDtBQUNBaUIsUUFBRSxDQUFDTyxhQUFILENBQWlCLElBQWpCLEVBQXNCLGVBQXRCLEVBQXNDLEtBQUksQ0FBQ1YsT0FBTCxDQUFhYixhQUFuRDtBQUNBZ0IsUUFBRSxDQUFDTyxhQUFILENBQWlCLElBQWpCLEVBQXNCLGlCQUF0QixFQUF3QyxLQUFJLENBQUNWLE9BQUwsQ0FBYVosYUFBYixHQUEyQixLQUFJLENBQUNZLE9BQUwsQ0FBYWIsYUFBaEY7QUFDQWdCLFFBQUUsQ0FBQ08sYUFBSCxDQUFpQixJQUFqQixFQUFzQixZQUF0QixFQUFtQyxLQUFJLENBQUNWLE9BQUwsQ0FBYVgsVUFBaEQ7QUFDQWMsUUFBRSxDQUFDTyxhQUFILENBQWlCLElBQWpCLEVBQXNCLGVBQXRCLEVBQXNDLEtBQUksQ0FBQ1YsT0FBTCxDQUFhVixhQUFuRDtBQUNBYSxRQUFFLENBQUNPLGFBQUgsQ0FBaUIsSUFBakIsRUFBc0IsZUFBdEIsRUFBc0MsS0FBSSxDQUFDVixPQUFMLENBQWFULGFBQW5EO0FBQ0FZLFFBQUUsQ0FBQ08sYUFBSCxDQUFpQixJQUFqQixFQUFzQixZQUF0QixFQUFtQyxLQUFJLENBQUNWLE9BQUwsQ0FBYVIsVUFBaEQ7QUFDQVcsUUFBRSxDQUFDTyxhQUFILENBQWlCLElBQWpCLEVBQXNCLFlBQXRCLEVBQW1DLEtBQUksQ0FBQ1YsT0FBTCxDQUFhUCxVQUFoRDtBQUVBVSxRQUFFLENBQUNRLGFBQUgsQ0FBaUIsSUFBakIsRUFBdUIsQ0FBdkI7QUFFQSxXQUFJLENBQUNDLFFBQUwsR0FBZ0IsQ0FDWjtBQUFFQyxZQUFJLEVBQUMsY0FBUDtBQUF1QkMsV0FBRyxFQUFDLEtBQUksQ0FBQ2YsVUFBTCxLQUFvQixJQUFwQixHQUEyQmdCLDhEQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBdkMsR0FBZ0QsS0FBSSxDQUFDaEI7QUFBaEYsT0FEWSxFQUVaO0FBQUVjLFlBQUksRUFBQyxXQUFQO0FBQW9CQyxXQUFHLEVBQUMsS0FBSSxDQUFDakI7QUFBN0IsT0FGWSxFQUdaO0FBQUVnQixZQUFJLEVBQUMsV0FBUDtBQUFvQkMsV0FBRyxFQUFDLEtBQUksQ0FBQ2hCO0FBQTdCLE9BSFksQ0FBaEI7O0FBTUEsV0FBSSxDQUFDYyxRQUFMLENBQWNJLE9BQWQsQ0FBc0IsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWLEVBQWdCO0FBQ2xDZixVQUFFLENBQUNRLGFBQUgsQ0FBaUJNLE9BQU8sQ0FBQ0gsR0FBekIsRUFBOEJJLENBQUMsR0FBRyxDQUFsQztBQUNBZixVQUFFLENBQUNPLGFBQUgsQ0FBaUIsSUFBakIsRUFBdUJPLE9BQU8sQ0FBQ0osSUFBL0IsRUFBcUNLLENBQUMsR0FBRyxDQUF6QztBQUNILE9BSEQ7O0FBSUEsV0FBSSxDQUFDQyxJQUFMO0FBQ0gsS0E3Q21GOztBQUFBLDJLQStDN0UsWUFBTTtBQUFBOztBQUNULFdBQUksQ0FBQ2xCLEtBQUwsR0FBYW1CLE1BQU0sQ0FBQ0MsVUFBcEI7QUFDQSxXQUFJLENBQUNuQixNQUFMLEdBQWNrQixNQUFNLENBQUNFLFdBQXJCLENBRlMsQ0FHVDs7QUFDQSxXQUFJLENBQUNuQixFQUFMLENBQVFvQixVQUFSLENBQW1CLEtBQUksQ0FBQ2YsWUFBeEI7O0FBRUEsV0FBSSxDQUFDTCxFQUFMLENBQVFPLGFBQVIsQ0FBc0IsSUFBdEIsRUFBMkIsWUFBM0IsRUFBd0MsS0FBSSxDQUFDVCxLQUE3QyxFQUFvRCxLQUFJLENBQUNDLE1BQXpEOztBQUNBLFdBQUksQ0FBQ0MsRUFBTCxDQUFRTyxhQUFSLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLEVBQXdDLEtBQUksQ0FBQ2MsU0FBN0MsRUFBd0QsS0FBSSxDQUFDQyxTQUE3RDs7QUFDQSxXQUFJLENBQUNDLGFBQUw7O0FBQ0EsV0FBSSxDQUFDdkIsRUFBTCxDQUFRZ0IsSUFBUjs7QUFFQVEsMkJBQXFCLENBQUMsS0FBSSxDQUFDUixJQUFOLENBQXJCO0FBQ0gsS0EzRG1GOztBQUFBLGtMQTZEbkUsWUFBTTtBQUNuQixXQUFJLENBQUNQLFFBQUwsQ0FBY0ksT0FBZCxDQUFzQixVQUFDQyxPQUFELEVBQVVDLENBQVYsRUFBZ0I7QUFDbEMsYUFBSSxDQUFDZixFQUFMLENBQVF5QixhQUFSLENBQXNCVixDQUFDLEdBQUcsQ0FBMUI7O0FBQ0EsYUFBSSxDQUFDZixFQUFMLENBQVF1QixhQUFSLENBQXNCVCxPQUFPLENBQUNILEdBQTlCO0FBQ0gsT0FIRDtBQUlILEtBbEVtRjs7QUFBQSxpTEFvRXBFLFlBQU07QUFDbEIsV0FBSSxDQUFDWCxFQUFMLENBQVF5QixhQUFSLENBQXNCLENBQXRCOztBQUNBLFdBQUksQ0FBQ3pCLEVBQUwsQ0FBUXVCLGFBQVIsQ0FBc0IsS0FBSSxDQUFDOUIsWUFBM0I7QUFDSCxLQXZFbUY7O0FBQUEsMEtBeUUzRSxZQUFNO0FBQ1gsV0FBSSxDQUFDTyxFQUFMLENBQVEwQixRQUFSLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLEtBQUksQ0FBQzFCLEVBQUwsQ0FBUVIsTUFBUixDQUFlTSxLQUF0QyxFQUE2QyxLQUFJLENBQUNFLEVBQUwsQ0FBUVIsTUFBUixDQUFlTyxNQUE1RDs7QUFDQSxXQUFJLENBQUM0QixjQUFMO0FBQ0gsS0E1RW1GOztBQUNoRixTQUFLbkMsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLRyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtFLE9BQUwsbUNBQ09mLGNBRFAsR0FFT2UsT0FGUDtBQUlBLFNBQUsrQixJQUFMO0FBQ0g7O0FBeEJMO0FBQUE7QUFBQSx3QkEwRndCLENBRW5CLENBNUZMO0FBQUEsc0JBNkZ1QkMsQ0E3RnZCLEVBNkZ5QixDQUVwQjtBQS9GTDs7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy93ZWJnbC9yYWluLXJlbmRlcmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0wgfSBmcm9tICcuL2dsLW9iaic7XG5pbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vY3JlYXRlLWNhbnZhcyc7XG5pbXBvcnQgeyBTaW1wbGVWZXJ0IH0gZnJvbSAnLi9zaGFkZXJzL3NpbXBsZS52ZXJ0JztcbmltcG9ydCB7IFdhdGVyRnJhZyB9IGZyb20gJy4vc2hhZGVycy93YXRlci5mcmFnJztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgcmVuZGVyU2hhZG93OiBmYWxzZSxcbiAgICBtaW5SZWZyYWN0aW9uOiAyNTYsXG4gICAgbWF4UmVmcmFjdGlvbjogNTEyLFxuICAgIGJyaWdodG5lc3M6IDEsXG4gICAgYWxwaGFNdWx0aXBseTogMjAsXG4gICAgYWxwaGFTdWJ0cmFjdDogNSxcbiAgICBwYXJhbGxheEJnOiA1LFxuICAgIHBhcmFsbGF4Rmc6IDIwLFxufTtcblxuZXhwb3J0IGNsYXNzIFJhaW5SZW5kZXJlciB7XG5cbiAgICBnbCA9IG51bGw7XG4gICAgd2lkdGggPSAwO1xuICAgIGhlaWdodCA9IDA7XG4gICAgdGV4dHVyZXMgPSBudWxsO1xuICAgIHByb2dyYW1XYXRlciA9IG51bGw7XG4gICAgcHJvZ3JhbUJsdXJYID0gbnVsbDtcbiAgICBwcm9ncmFtQmx1clkgPSBudWxsO1xuICAgIHBhcmFsbGF4WCA9IDA7XG4gICAgcGFyYWxsYXhZID0gMDtcbiAgICByZW5kZXJTaGFkb3cgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yIChjYW52YXMsIGNhbnZhc0xpcXVpZCwgaW1hZ2VGZywgaW1hZ2VCZywgaW1hZ2VTaGluZSA9IG51bGwsIG9wdGlvbnM9e30pIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzTGlxdWlkID0gY2FudmFzTGlxdWlkO1xuICAgICAgICB0aGlzLmltYWdlU2hpbmUgPSBpbWFnZVNoaW5lO1xuICAgICAgICB0aGlzLmltYWdlRmcgPSBpbWFnZUZnO1xuICAgICAgICB0aGlzLmltYWdlQmcgPSBpbWFnZUJnO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuZ2wgPSBuZXcgR0wodGhpcy5jYW52YXMsIHsgYWxwaGE6ZmFsc2UgfSwgU2ltcGxlVmVydCwgV2F0ZXJGcmFnKTtcbiAgICAgICAgbGV0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgdGhpcy5wcm9ncmFtV2F0ZXIgPSBnbC5wcm9ncmFtO1xuXG4gICAgICAgIC8vIGdsLmNyZWF0ZVVuaWZvcm0oXCIyZlwiLFwicmVzb2x1dGlvblwiLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO1xuICAgICAgICBnbC5jcmVhdGVVbmlmb3JtKFwiMWZcIixcInRleHR1cmVSYXRpb1wiLHRoaXMuaW1hZ2VCZy53aWR0aCAvIHRoaXMuaW1hZ2VCZy5oZWlnaHQpO1xuICAgICAgICBnbC5jcmVhdGVVbmlmb3JtKFwiMWlcIixcInJlbmRlclNoaW5lXCIsdGhpcy5pbWFnZVNoaW5lID09PSBudWxsID8gZmFsc2UgOiB0cnVlKTtcbiAgICAgICAgZ2wuY3JlYXRlVW5pZm9ybShcIjFpXCIsXCJyZW5kZXJTaGFkb3dcIix0aGlzLm9wdGlvbnMucmVuZGVyU2hhZG93KTtcbiAgICAgICAgZ2wuY3JlYXRlVW5pZm9ybShcIjFmXCIsXCJtaW5SZWZyYWN0aW9uXCIsdGhpcy5vcHRpb25zLm1pblJlZnJhY3Rpb24pO1xuICAgICAgICBnbC5jcmVhdGVVbmlmb3JtKFwiMWZcIixcInJlZnJhY3Rpb25EZWx0YVwiLHRoaXMub3B0aW9ucy5tYXhSZWZyYWN0aW9uLXRoaXMub3B0aW9ucy5taW5SZWZyYWN0aW9uKTtcbiAgICAgICAgZ2wuY3JlYXRlVW5pZm9ybShcIjFmXCIsXCJicmlnaHRuZXNzXCIsdGhpcy5vcHRpb25zLmJyaWdodG5lc3MpO1xuICAgICAgICBnbC5jcmVhdGVVbmlmb3JtKFwiMWZcIixcImFscGhhTXVsdGlwbHlcIix0aGlzLm9wdGlvbnMuYWxwaGFNdWx0aXBseSk7XG4gICAgICAgIGdsLmNyZWF0ZVVuaWZvcm0oXCIxZlwiLFwiYWxwaGFTdWJ0cmFjdFwiLHRoaXMub3B0aW9ucy5hbHBoYVN1YnRyYWN0KTtcbiAgICAgICAgZ2wuY3JlYXRlVW5pZm9ybShcIjFmXCIsXCJwYXJhbGxheEJnXCIsdGhpcy5vcHRpb25zLnBhcmFsbGF4QmcpO1xuICAgICAgICBnbC5jcmVhdGVVbmlmb3JtKFwiMWZcIixcInBhcmFsbGF4RmdcIix0aGlzLm9wdGlvbnMucGFyYWxsYXhGZyk7XG5cbiAgICAgICAgZ2wuY3JlYXRlVGV4dHVyZShudWxsLCAwKTtcblxuICAgICAgICB0aGlzLnRleHR1cmVzID0gW1xuICAgICAgICAgICAgeyBuYW1lOid0ZXh0dXJlU2hpbmUnLCBpbWc6dGhpcy5pbWFnZVNoaW5lID09PSBudWxsID8gY3JlYXRlQ2FudmFzKDIsIDIpIDogdGhpcy5pbWFnZVNoaW5lIH0sXG4gICAgICAgICAgICB7IG5hbWU6J3RleHR1cmVGZycsIGltZzp0aGlzLmltYWdlRmcgfSxcbiAgICAgICAgICAgIHsgbmFtZTondGV4dHVyZUJnJywgaW1nOnRoaXMuaW1hZ2VCZyB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy50ZXh0dXJlcy5mb3JFYWNoKCh0ZXh0dXJlLCBpKSA9PiB7XG4gICAgICAgICAgICBnbC5jcmVhdGVUZXh0dXJlKHRleHR1cmUuaW1nLCBpICsgMSk7XG4gICAgICAgICAgICBnbC5jcmVhdGVVbmlmb3JtKCcxaScsIHRleHR1cmUubmFtZSwgaSArIDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZHJhdyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtV2F0ZXIpO1xuXG4gICAgICAgIHRoaXMuZ2wuY3JlYXRlVW5pZm9ybShcIjJmXCIsXCJyZXNvbHV0aW9uXCIsdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdsLmNyZWF0ZVVuaWZvcm0oJzJmJywgJ3BhcmFsbGF4JywgdGhpcy5wYXJhbGxheFgsIHRoaXMucGFyYWxsYXhZKTtcbiAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKCk7XG4gICAgICAgIHRoaXMuZ2wuZHJhdygpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRleHR1cmVzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnRleHR1cmVzLmZvckVhY2goKHRleHR1cmUsIGkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZShpICsgMSk7XG4gICAgICAgICAgICB0aGlzLmdsLnVwZGF0ZVRleHR1cmUodGV4dHVyZS5pbWcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlVGV4dHVyZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKDApO1xuICAgICAgICB0aGlzLmdsLnVwZGF0ZVRleHR1cmUodGhpcy5jYW52YXNMaXF1aWQpO1xuICAgIH1cblxuICAgIHJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmdsLmNhbnZhcy53aWR0aCwgdGhpcy5nbC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlcygpO1xuICAgIH1cbiAgICBnZXQgb3ZlcmxheVRleHR1cmUoKXtcbiAgXG4gICAgfVxuICAgIHNldCBvdmVybGF5VGV4dHVyZSh2KXtcbiAgXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/webgl/rain-renderer.js\n");

/***/ })

})