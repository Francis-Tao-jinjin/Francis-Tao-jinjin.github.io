webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/webgl/index.js":
/*!***********************************!*\
  !*** ./components/webgl/index.js ***!
  \***********************************/
/*! exports provided: loadTextures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTextures\", function() { return loadTextures; });\n/* harmony import */ var _Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _create_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-canvas */ \"./components/webgl/create-canvas.js\");\n/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-loader */ \"./components/webgl/image-loader.js\");\n/* harmony import */ var _Raindrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Raindrop */ \"./components/webgl/Raindrop.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _rain_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rain-renderer */ \"./components/webgl/rain-renderer.js\");\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random */ \"./components/webgl/random.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar textureRainFg;\nvar textureRainBg;\nvar dropColor;\nvar dropAlpha;\nvar textureFg;\nvar textureFgCtx;\nvar textureBg;\nvar textureBgCtx;\nvar textureBgSize = {\n  width: 384,\n  height: 256\n};\nvar textureFgSize = {\n  width: 96,\n  height: 64\n};\nvar raindrops;\nvar renderer;\nvar canvas;\nvar weatherData = null;\nvar curWeatherData = null;\nvar blend = {\n  v: 0\n};\nfunction loadTextures() {\n  Object(_image_loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([{\n    name: 'dropAlpha',\n    src: '/images/webgl/drop-alpha.png'\n  }, {\n    name: 'dropColor',\n    src: '/images/webgl/drop-color.png'\n  }, {\n    name: 'textureRainFg',\n    src: '/images/webgl/texture-sun-fg.png'\n  }, {\n    name: 'textureRainBg',\n    src: '/images/webgl/texture-sun-bg.png'\n  }]).then(function (images) {\n    textureRainFg = images.textureRainFg.img;\n    textureRainBg = images.textureRainBg.img;\n    dropAlpha = images.dropAlpha.img;\n    dropColor = images.dropColor.img;\n    console.log('images', images);\n    init();\n  });\n}\n;\n\nfunction init() {\n  canvas = document.getElementById('glcanvas'); // let dpi = window.devicePixelRatio;\n\n  var dpi = 1;\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  canvas.style.width = window.innerWidth + 'px';\n  canvas.style.height = window.innerHeight + 'px';\n  raindrops = new _Raindrop__WEBPACK_IMPORTED_MODULE_3__[\"Raindrops\"](canvas.width, canvas.height, dpi, dropAlpha, dropColor, {\n    trailRate: 1,\n    trailScaleRange: [0.2, 0.45],\n    collisionRadius: 0.45,\n    dropletsCleaningRadiusMultiplier: 0.28\n  });\n  textureFg = Object(_create_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(textureFgSize.width, textureFgSize.height);\n  textureFgCtx = textureFg.getContext('2d');\n  textureBg = Object(_create_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(textureBgSize.width, textureBgSize.height);\n  textureBgCtx = textureBg.getContext('2d');\n  generateTextures(textureRainFg, textureRainBg);\n  renderer = new _rain_renderer__WEBPACK_IMPORTED_MODULE_5__[\"RainRenderer\"](canvas, raindrops.canvas, textureFg, textureBg, null, {\n    brightness: 1.04,\n    alphaMultiply: 6,\n    alphaSubtract: 3\n  });\n  console.log('renderer', renderer);\n  setupEvents();\n}\n\nfunction setupEvents() {\n  setupParallax();\n  setupWeather();\n  setupFlash();\n}\n\nfunction setupParallax() {\n  document.addEventListener('mousedown', function (event) {\n    var x = event.pageX;\n    var y = event.pageY;\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(parallax, {\n      duration: 1,\n      x: x / canvas.width * 2 - 1,\n      y: y / canvas.height * 2 - 1,\n      ease: 'power4.out',\n      onUpdate: function onUpdate() {\n        renderer.parallaxX = parallax.x;\n        renderer.parallaxY = parallax.y;\n      }\n    });\n  });\n}\n\nfunction setupFlash() {\n  setInterval(function () {\n    if (Object(_random__WEBPACK_IMPORTED_MODULE_6__[\"chance\"])(curWeatherData.flashChance)) {\n      flash(curWeatherData.bg, curWeatherData.fg, curWeatherData.flashBg, curWeatherData.flashFg);\n    }\n  }, 500);\n}\n\nfunction setupWeather() {\n  setupWeatherData();\n  updateWeather();\n}\n\nfunction setupWeatherData() {\n  var defaultWeather = {\n    raining: true,\n    minR: 20,\n    maxR: 50,\n    rainChance: 0.35,\n    rainLimit: 6,\n    dropletsRate: 50,\n    dropletsSize: [3, 5.5],\n    trailRate: 1,\n    trailScaleRange: [0.25, 0.35],\n    fg: textureRainFg,\n    bg: textureRainBg,\n    flashFg: null,\n    flashBg: null,\n    flashChance: 0,\n    collisionRadiusIncrease: 0.0002\n  };\n\n  function weather(data) {\n    return _objectSpread(_objectSpread({}, defaultWeather), data);\n  }\n\n  weatherData = {\n    rain: weather({\n      rainChance: 0.35,\n      dropletsRate: 50,\n      raining: true,\n      // trailRate:2.5,\n      fg: textureRainFg,\n      bg: textureRainBg\n    })\n  };\n}\n\nfunction updateWeather() {\n  curWeatherData = weatherData.rain;\n  raindrops.options = _objectSpread(_objectSpread({}, raindrops.options), data);\n  raindrops.clearDrops();\n  gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fromTo(blend, {\n    v: 0\n  }, {\n    duration: 1,\n    v: 1,\n    onUpdate: function onUpdate() {\n      generateTextures(data.fg, data.bg, blend.v);\n      renderer.updateTextures();\n    }\n  });\n}\n\nfunction flash(baseBg, baseFg, flashBg, flashFg) {\n  var flashValue = {\n    v: 0\n  };\n\n  function transitionFlash(to) {\n    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.025;\n    return new Promise(function (resolve, reject) {\n      gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(flashValue, {\n        duration: t,\n        v: to,\n        ease: 'power4.out',\n        onUpdate: function onUpdate() {\n          generateTextures(baseFg, baseBg);\n          generateTextures(flashFg, flashBg, flashValue.v);\n          renderer.updateTextures();\n        },\n        onComplete: function onComplete() {\n          resolve();\n        }\n      });\n    });\n  }\n\n  var lastFlash = transitionFlash(1);\n  var t = Object(_random__WEBPACK_IMPORTED_MODULE_6__[\"random\"])(2, 7);\n\n  for (var i = 0; i < t; i++) {\n    lastFlash = lastFlash.then(function () {\n      return transitionFlash(Object(_random__WEBPACK_IMPORTED_MODULE_6__[\"random\"])(0.1, 1));\n    });\n  }\n\n  lastFlash = lastFlash.then(function () {\n    return transitionFlash(1, 0.1);\n  }).then(function () {\n    transitionFlash(0, 0.25);\n  });\n}\n\nfunction generateTextures(fg, bg) {\n  var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  textureFgCtx.globalAlpha = alpha;\n  textureFgCtx.drawImage(fg, 0, 0, textureFgSize.width, textureFgSize.height);\n  textureBgCtx.globalAlpha = alpha;\n  textureBgCtx.drawImage(bg, 0, 0, textureBgSize.width, textureBgSize.height);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93ZWJnbC9pbmRleC5qcz9mMDExIl0sIm5hbWVzIjpbInRleHR1cmVSYWluRmciLCJ0ZXh0dXJlUmFpbkJnIiwiZHJvcENvbG9yIiwiZHJvcEFscGhhIiwidGV4dHVyZUZnIiwidGV4dHVyZUZnQ3R4IiwidGV4dHVyZUJnIiwidGV4dHVyZUJnQ3R4IiwidGV4dHVyZUJnU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dHVyZUZnU2l6ZSIsInJhaW5kcm9wcyIsInJlbmRlcmVyIiwiY2FudmFzIiwid2VhdGhlckRhdGEiLCJjdXJXZWF0aGVyRGF0YSIsImJsZW5kIiwidiIsImxvYWRUZXh0dXJlcyIsImxvYWRJbWFnZXMiLCJuYW1lIiwic3JjIiwidGhlbiIsImltYWdlcyIsImltZyIsImNvbnNvbGUiLCJsb2ciLCJpbml0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRwaSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInN0eWxlIiwiUmFpbmRyb3BzIiwidHJhaWxSYXRlIiwidHJhaWxTY2FsZVJhbmdlIiwiY29sbGlzaW9uUmFkaXVzIiwiZHJvcGxldHNDbGVhbmluZ1JhZGl1c011bHRpcGxpZXIiLCJjcmVhdGVDYW52YXMiLCJnZXRDb250ZXh0IiwiZ2VuZXJhdGVUZXh0dXJlcyIsIlJhaW5SZW5kZXJlciIsImJyaWdodG5lc3MiLCJhbHBoYU11bHRpcGx5IiwiYWxwaGFTdWJ0cmFjdCIsInNldHVwRXZlbnRzIiwic2V0dXBQYXJhbGxheCIsInNldHVwV2VhdGhlciIsInNldHVwRmxhc2giLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ4IiwicGFnZVgiLCJ5IiwicGFnZVkiLCJnc2FwIiwidG8iLCJwYXJhbGxheCIsImR1cmF0aW9uIiwiZWFzZSIsIm9uVXBkYXRlIiwicGFyYWxsYXhYIiwicGFyYWxsYXhZIiwic2V0SW50ZXJ2YWwiLCJjaGFuY2UiLCJmbGFzaENoYW5jZSIsImZsYXNoIiwiYmciLCJmZyIsImZsYXNoQmciLCJmbGFzaEZnIiwic2V0dXBXZWF0aGVyRGF0YSIsInVwZGF0ZVdlYXRoZXIiLCJkZWZhdWx0V2VhdGhlciIsInJhaW5pbmciLCJtaW5SIiwibWF4UiIsInJhaW5DaGFuY2UiLCJyYWluTGltaXQiLCJkcm9wbGV0c1JhdGUiLCJkcm9wbGV0c1NpemUiLCJjb2xsaXNpb25SYWRpdXNJbmNyZWFzZSIsIndlYXRoZXIiLCJkYXRhIiwicmFpbiIsIm9wdGlvbnMiLCJjbGVhckRyb3BzIiwiZnJvbVRvIiwidXBkYXRlVGV4dHVyZXMiLCJiYXNlQmciLCJiYXNlRmciLCJmbGFzaFZhbHVlIiwidHJhbnNpdGlvbkZsYXNoIiwidCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25Db21wbGV0ZSIsImxhc3RGbGFzaCIsInJhbmRvbSIsImkiLCJhbHBoYSIsImdsb2JhbEFscGhhIiwiZHJhd0ltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxhQUFKO0FBQ0EsSUFBSUMsYUFBSjtBQUNBLElBQUlDLFNBQUo7QUFDQSxJQUFJQyxTQUFKO0FBRUEsSUFBSUMsU0FBSjtBQUNBLElBQUlDLFlBQUo7QUFDQSxJQUFJQyxTQUFKO0FBQ0EsSUFBSUMsWUFBSjtBQUVBLElBQUlDLGFBQWEsR0FBRztBQUNoQkMsT0FBSyxFQUFFLEdBRFM7QUFFaEJDLFFBQU0sRUFBRTtBQUZRLENBQXBCO0FBS0EsSUFBSUMsYUFBYSxHQUFHO0FBQ2hCRixPQUFLLEVBQUMsRUFEVTtBQUVoQkMsUUFBTSxFQUFDO0FBRlMsQ0FBcEI7QUFLQSxJQUFJRSxTQUFKO0FBQ0EsSUFBSUMsUUFBSjtBQUNBLElBQUlDLE1BQUo7QUFFQSxJQUFJQyxXQUFXLEdBQUcsSUFBbEI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsSUFBckI7QUFDQSxJQUFJQyxLQUFLLEdBQUc7QUFBRUMsR0FBQyxFQUFFO0FBQUws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QUFwQixFQUF1Qk8sQ0FBQyxFQUF4QixFQUE0QjtBQUN4QkYsYUFBUyxHQUFHQSxTQUFTLENBQUM5RSxJQUFWLENBQWUsWUFBTTtBQUM3QixhQUFPd0UsZUFBZSxDQUFDTyxzREFBTSxDQUFDLEdBQUQsRUFBTSxDQUFOLENBQVAsQ0FBdEI7QUFDSCxLQUZXLENBQVo7QUFHSDs7QUFDREQsV0FBUyxHQUFHQSxTQUFTLENBQUM5RSxJQUFWLENBQWUsWUFBTTtBQUM3QixXQUFPd0UsZUFBZSxDQUFDLENBQUQsRUFBSSxHQUFKLENBQXRCO0FBQ0gsR0FGVyxFQUVUeEUsSUFGUyxDQUVKLFlBQU07QUFDVndFLG1CQUFlLENBQUMsQ0FBRCxFQUFJLElBQUosQ0FBZjtBQUNILEdBSlcsQ0FBWjtBQUtIOztBQUVELFNBQVNwRCxnQkFBVCxDQUEwQjRCLEVBQTFCLEVBQThCRCxFQUE5QixFQUE0QztBQUFBLE1BQVZrQyxLQUFVLHVFQUFGLENBQUU7QUFDeENuRyxjQUFZLENBQUNvRyxXQUFiLEdBQTJCRCxLQUEzQjtBQUNBbkcsY0FBWSxDQUFDcUcsU0FBYixDQUF1Qm5DLEVBQXZCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDNUQsYUFBYSxDQUFDRixLQUEvQyxFQUFzREUsYUFBYSxDQUFDRCxNQUFwRTtBQUVBSCxjQUFZLENBQUNrRyxXQUFiLEdBQTJCRCxLQUEzQjtBQUNBakcsY0FBWSxDQUFDbUcsU0FBYixDQUF1QnBDLEVBQXZCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDOUQsYUFBYSxDQUFDQyxLQUEvQyxFQUFzREQsYUFBYSxDQUFDRSxNQUFwRTtBQUNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy93ZWJnbC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVDYW52YXMgZnJvbSAnLi9jcmVhdGUtY2FudmFzJztcbmltcG9ydCBsb2FkSW1hZ2VzIGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcbmltcG9ydCB7IFJhaW5kcm9wcyB9IGZyb20gJy4vUmFpbmRyb3AnO1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyBSYWluUmVuZGVyZXIgfSBmcm9tICcuL3JhaW4tcmVuZGVyZXInO1xuaW1wb3J0IHsgcmFuZG9tLCBjaGFuY2UgfSBmcm9tICcuL3JhbmRvbSc7XG5cbmxldCB0ZXh0dXJlUmFpbkZnO1xubGV0IHRleHR1cmVSYWluQmc7XG5sZXQgZHJvcENvbG9yO1xubGV0IGRyb3BBbHBoYTtcblxubGV0IHRleHR1cmVGZztcbmxldCB0ZXh0dXJlRmdDdHg7XG5sZXQgdGV4dHVyZUJnO1xubGV0IHRleHR1cmVCZ0N0eDtcblxubGV0IHRleHR1cmVCZ1NpemUgPSB7XG4gICAgd2lkdGg6IDM4NCxcbiAgICBoZWlnaHQ6IDI1Nixcbn07XG5cbmxldCB0ZXh0dXJlRmdTaXplID0ge1xuICAgIHdpZHRoOjk2LFxuICAgIGhlaWdodDo2NCxcbn07XG5cbmxldCByYWluZHJvcHM7XG5sZXQgcmVuZGVyZXI7XG5sZXQgY2FudmFzO1xuXG5sZXQgd2VhdGhlckRhdGEgPSBudWxsO1xubGV0IGN1cldlYXRoZXJEYXRhID0gbnVsbDtcbmxldCBibGVuZCA9IHsgdjogMH07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGV4dHVyZXMoKSB7XG4gICAgbG9hZEltYWdlcyhbXG4gICAgICAgIHsgbmFtZTogJ2Ryb3BBbHBoYScsIHNyYzogJy9pbWFnZXMvd2ViZ2wvZHJvcC1hbHBoYS5wbmcnIH0sXG4gICAgICAgIHsgbmFtZTogJ2Ryb3BDb2xvcicsIHNyYzogJy9pbWFnZXMvd2ViZ2wvZHJvcC1jb2xvci5wbmcnIH0sXG4gICAgICAgIHsgbmFtZTogJ3RleHR1cmVSYWluRmcnLCBzcmM6ICcvaW1hZ2VzL3dlYmdsL3RleHR1cmUtc3VuLWZnLnBuZycgfSxcbiAgICAgICAgeyBuYW1lOiAndGV4dHVyZVJhaW5CZycsIHNyYzogJy9pbWFnZXMvd2ViZ2wvdGV4dHVyZS1zdW4tYmcucG5nJyB9LFxuICAgIF0pLnRoZW4oKGltYWdlcykgPT4ge1xuICAgICAgICB0ZXh0dXJlUmFpbkZnID0gaW1hZ2VzLnRleHR1cmVSYWluRmcuaW1nO1xuICAgICAgICB0ZXh0dXJlUmFpbkJnID0gaW1hZ2VzLnRleHR1cmVSYWluQmcuaW1nO1xuXG4gICAgICAgIGRyb3BBbHBoYSA9IGltYWdlcy5kcm9wQWxwaGEuaW1nO1xuICAgICAgICBkcm9wQ29sb3IgPSBpbWFnZXMuZHJvcENvbG9yLmltZztcblxuICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2VzJywgaW1hZ2VzKTtcbiAgICAgICAgaW5pdCgpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2xjYW52YXMnKTtcbiAgICAvLyBsZXQgZHBpID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgbGV0IGRwaSA9IDE7XG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArICdweCc7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArICdweCc7XG5cbiAgICByYWluZHJvcHMgPSBuZXcgUmFpbmRyb3BzKFxuICAgICAgICBjYW52YXMud2lkdGgsXG4gICAgICAgIGNhbnZhcy5oZWlnaHQsXG4gICAgICAgIGRwaSxcbiAgICAgICAgZHJvcEFscGhhLFxuICAgICAgICBkcm9wQ29sb3IsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRyYWlsUmF0ZTogMSxcbiAgICAgICAgICAgIHRyYWlsU2NhbGVSYW5nZTogWzAuMiwgMC40NV0sXG4gICAgICAgICAgICBjb2xsaXNpb25SYWRpdXM6IDAuNDUsXG4gICAgICAgICAgICBkcm9wbGV0c0NsZWFuaW5nUmFkaXVzTXVsdGlwbGllcjogMC4yOCxcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICB0ZXh0dXJlRmcgPSBjcmVhdGVDYW52YXModGV4dHVyZUZnU2l6ZS53aWR0aCwgdGV4dHVyZUZnU2l6ZS5oZWlnaHQpO1xuICAgIHRleHR1cmVGZ0N0eCA9IHRleHR1cmVGZy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRleHR1cmVCZyA9IGNyZWF0ZUNhbnZhcyh0ZXh0dXJlQmdTaXplLndpZHRoLCB0ZXh0dXJlQmdTaXplLmhlaWdodCk7XG4gICAgdGV4dHVyZUJnQ3R4ID0gdGV4dHVyZUJnLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBnZW5lcmF0ZVRleHR1cmVzKHRleHR1cmVSYWluRmcsIHRleHR1cmVSYWluQmcpO1xuXG4gICAgcmVuZGVyZXIgPSBuZXcgUmFpblJlbmRlcmVyKGNhbnZhcywgcmFpbmRyb3BzLmNhbnZhcywgdGV4dHVyZUZnLCB0ZXh0dXJlQmcsIG51bGwsIHtcbiAgICAgICAgYnJpZ2h0bmVzczogMS4wNCxcbiAgICAgICAgYWxwaGFNdWx0aXBseTogNixcbiAgICAgICAgYWxwaGFTdWJ0cmFjdDogMyxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdyZW5kZXJlcicsIHJlbmRlcmVyKTtcbiAgICBzZXR1cEV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBzZXR1cEV2ZW50cygpe1xuICAgIHNldHVwUGFyYWxsYXgoKTtcbiAgICBzZXR1cFdlYXRoZXIoKTtcbiAgICBzZXR1cEZsYXNoKCk7XG59XG5cbmZ1bmN0aW9uIHNldHVwUGFyYWxsYXgoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCB4ID0gZXZlbnQucGFnZVg7XG4gICAgICAgIGxldCB5ID0gZXZlbnQucGFnZVk7XG5cbiAgICAgICAgZ3NhcC50byhwYXJhbGxheCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICB4OiAoKHggLyBjYW52YXMud2lkdGgpICogMikgLSAxLFxuICAgICAgICAgICAgeTogKCh5IC8gY2FudmFzLmhlaWdodCkgKiAyKSAtIDEsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXI0Lm91dCcsXG4gICAgICAgICAgICBvblVwZGF0ZTooKT0+e1xuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnBhcmFsbGF4WCA9IHBhcmFsbGF4Lng7XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucGFyYWxsYXhZID0gcGFyYWxsYXgueTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXR1cEZsYXNoKCkge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKGNoYW5jZShjdXJXZWF0aGVyRGF0YS5mbGFzaENoYW5jZSkpIHtcbiAgICAgICAgICAgIGZsYXNoKGN1cldlYXRoZXJEYXRhLmJnLCBjdXJXZWF0aGVyRGF0YS5mZywgY3VyV2VhdGhlckRhdGEuZmxhc2hCZywgY3VyV2VhdGhlckRhdGEuZmxhc2hGZyk7XG4gICAgICAgIH1cbiAgICB9LCA1MDApO1xufVxuXG5mdW5jdGlvbiBzZXR1cFdlYXRoZXIoKSB7XG4gICAgc2V0dXBXZWF0aGVyRGF0YSgpO1xuICAgIHVwZGF0ZVdlYXRoZXIoKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBXZWF0aGVyRGF0YSgpIHtcbiAgICBsZXQgZGVmYXVsdFdlYXRoZXIgPSB7XG4gICAgICAgIHJhaW5pbmc6IHRydWUsXG4gICAgICAgIG1pblI6IDIwLFxuICAgICAgICBtYXhSOiA1MCxcbiAgICAgICAgcmFpbkNoYW5jZTogMC4zNSxcbiAgICAgICAgcmFpbkxpbWl0OiA2LFxuICAgICAgICBkcm9wbGV0c1JhdGU6NTAsXG4gICAgICAgIGRyb3BsZXRzU2l6ZTpbMyw1LjVdLFxuICAgICAgICB0cmFpbFJhdGU6MSxcbiAgICAgICAgdHJhaWxTY2FsZVJhbmdlOlswLjI1LDAuMzVdLFxuICAgICAgICBmZzogdGV4dHVyZVJhaW5GZyxcbiAgICAgICAgYmc6IHRleHR1cmVSYWluQmcsXG4gICAgICAgIGZsYXNoRmc6IG51bGwsXG4gICAgICAgIGZsYXNoQmc6IG51bGwsXG4gICAgICAgIGZsYXNoQ2hhbmNlOiAwLFxuICAgICAgICBjb2xsaXNpb25SYWRpdXNJbmNyZWFzZTogMC4wMDAyLFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB3ZWF0aGVyKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmRlZmF1bHRXZWF0aGVyLFxuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdlYXRoZXJEYXRhID0ge1xuICAgICAgICByYWluOiB3ZWF0aGVyKHtcbiAgICAgICAgICAgIHJhaW5DaGFuY2U6MC4zNSxcbiAgICAgICAgICAgIGRyb3BsZXRzUmF0ZTo1MCxcbiAgICAgICAgICAgIHJhaW5pbmc6dHJ1ZSxcbiAgICAgICAgICAgIC8vIHRyYWlsUmF0ZToyLjUsXG4gICAgICAgICAgICBmZzp0ZXh0dXJlUmFpbkZnLFxuICAgICAgICAgICAgYmc6dGV4dHVyZVJhaW5CZ1xuICAgICAgICB9KSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVXZWF0aGVyKCkge1xuICAgIGN1cldlYXRoZXJEYXRhID0gd2VhdGhlckRhdGEucmFpbjtcbiAgICByYWluZHJvcHMub3B0aW9ucyA9IHtcbiAgICAgICAgLi4ucmFpbmRyb3BzLm9wdGlvbnMsXG4gICAgICAgIC4uLmRhdGEsXG4gICAgfTtcbiAgICByYWluZHJvcHMuY2xlYXJEcm9wcygpO1xuXG4gICAgZ3NhcC5mcm9tVG8oYmxlbmQsIHtcbiAgICAgICAgdjogMCxcbiAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICB2OjEsXG4gICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XG4gICAgICAgICAgICBnZW5lcmF0ZVRleHR1cmVzKGRhdGEuZmcsIGRhdGEuYmcsIGJsZW5kLnYpO1xuICAgICAgICAgICAgcmVuZGVyZXIudXBkYXRlVGV4dHVyZXMoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmbGFzaChiYXNlQmcsIGJhc2VGZywgZmxhc2hCZywgZmxhc2hGZykge1xuICAgIGxldCBmbGFzaFZhbHVlID0geyB2OjAgfTtcbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uRmxhc2godG8sIHQgPSAwLjAyNSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZ3NhcC50byhmbGFzaFZhbHVlLCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHQsXG4gICAgICAgICAgICAgICAgdjp0byxcbiAgICAgICAgICAgICAgICBlYXNlOiAncG93ZXI0Lm91dCcsXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVUZXh0dXJlcyhiYXNlRmcsIGJhc2VCZyk7XG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlVGV4dHVyZXMoZmxhc2hGZywgZmxhc2hCZywgZmxhc2hWYWx1ZS52KTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIudXBkYXRlVGV4dHVyZXMoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgbGFzdEZsYXNoID0gdHJhbnNpdGlvbkZsYXNoKDEpO1xuICAgIGNvbnN0IHQgPSByYW5kb20oMiwgNyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0OyBpKyspIHtcbiAgICAgICAgbGFzdEZsYXNoID0gbGFzdEZsYXNoLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25GbGFzaChyYW5kb20oMC4xLCAxKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsYXN0Rmxhc2ggPSBsYXN0Rmxhc2gudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiB0cmFuc2l0aW9uRmxhc2goMSwgMC4xKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdHJhbnNpdGlvbkZsYXNoKDAsIDAuMjUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRleHR1cmVzKGZnLCBiZywgYWxwaGEgPSAxKXtcbiAgICB0ZXh0dXJlRmdDdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgICB0ZXh0dXJlRmdDdHguZHJhd0ltYWdlKGZnLCAwLCAwLCB0ZXh0dXJlRmdTaXplLndpZHRoLCB0ZXh0dXJlRmdTaXplLmhlaWdodCk7XG4gIFxuICAgIHRleHR1cmVCZ0N0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICAgIHRleHR1cmVCZ0N0eC5kcmF3SW1hZ2UoYmcsIDAsIDAsIHRleHR1cmVCZ1NpemUud2lkdGgsIHRleHR1cmVCZ1NpemUuaGVpZ2h0KTtcbiAgfVxuICBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/webgl/index.js\n");

/***/ }),

/***/ "./node_modules/autoprefixer/data/prefixes.js":
false,

/***/ "./node_modules/autoprefixer/lib/at-rule.js":
false,

/***/ "./node_modules/autoprefixer/lib/autoprefixer.js":
false,

/***/ "./node_modules/autoprefixer/lib/brackets.js":
false,

/***/ "./node_modules/autoprefixer/lib/browsers.js":
false,

/***/ "./node_modules/autoprefixer/lib/declaration.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/align-content.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/align-items.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/align-self.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/animation.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/appearance.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/backdrop-filter.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/background-clip.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/background-size.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/block-logical.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/border-image.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/border-radius.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/break-props.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/color-adjust.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/cross-fade.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/display-flex.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/display-grid.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/filter-value.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/filter.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/flex-basis.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/flex-direction.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/flex-flow.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/flex-grow.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/flex-shrink.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/flex-spec.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/flex-wrap.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/flex.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/fullscreen.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/gradient.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/grid-area.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/grid-column-align.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/grid-end.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/grid-row-align.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/grid-row-column.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/grid-rows-columns.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/grid-start.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/grid-template-areas.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/grid-template.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/grid-utils.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/image-rendering.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/image-set.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/inline-logical.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/intrinsic.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/justify-content.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/mask-border.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/mask-composite.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/order.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/overscroll-behavior.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/pixelated.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/place-self.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/placeholder-shown.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/placeholder.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/text-decoration-skip-ink.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/text-decoration.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/text-emphasis-position.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/transform-decl.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/user-select.js":
false,

/***/ "./node_modules/autoprefixer/lib/hacks/writing-mode.js":
false,

/***/ "./node_modules/autoprefixer/lib/info.js":
false,

/***/ "./node_modules/autoprefixer/lib/old-selector.js":
false,

/***/ "./node_modules/autoprefixer/lib/old-value.js":
false,

/***/ "./node_modules/autoprefixer/lib/prefixer.js":
false,

/***/ "./node_modules/autoprefixer/lib/prefixes.js":
false,

/***/ "./node_modules/autoprefixer/lib/processor.js":
false,

/***/ "./node_modules/autoprefixer/lib/resolution.js":
false,

/***/ "./node_modules/autoprefixer/lib/selector.js":
false,

/***/ "./node_modules/autoprefixer/lib/supports.js":
false,

/***/ "./node_modules/autoprefixer/lib/transition.js":
false,

/***/ "./node_modules/autoprefixer/lib/utils.js":
false,

/***/ "./node_modules/autoprefixer/lib/value.js":
false,

/***/ "./node_modules/autoprefixer/lib/vendor.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/browserslist/browser.js":
false,

/***/ "./node_modules/browserslist/error.js":
false,

/***/ "./node_modules/browserslist/index.js":
false,

/***/ "./node_modules/caniuse-lite/data/agents.js":
false,

/***/ "./node_modules/caniuse-lite/data/browserVersions.js":
false,

/***/ "./node_modules/caniuse-lite/data/browsers.js":
false,

/***/ "./node_modules/caniuse-lite/data/features.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/aac.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/abortcontroller.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/ac3-ec3.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/accelerometer.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/addeventlistener.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/alternate-stylesheet.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/ambient-light.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/apng.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/array-find-index.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/array-find.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/array-flat.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/array-includes.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/arrow-functions.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/asmjs.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/async-clipboard.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/async-functions.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/async-iterations-and-generators.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/atob-btoa.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/audio-api.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/audio.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/audiotracks.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/autofocus.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/auxclick.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/av1.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/avif.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/background-attachment.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/background-clip-text.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/background-img-opts.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/background-position-x-y.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/background-repeat-round-space.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/background-sync.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/battery-status.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/beacon.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/beforeafterprint.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/bigint.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/blobbuilder.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/bloburls.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/border-image.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/border-radius.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/broadcastchannel.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/brotli.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/calc.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/canvas-blending.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/canvas-text.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/canvas.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/ch-unit.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/chacha20-poly1305.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/channel-messaging.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/childnode-remove.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/classlist.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/clear-site-data-header.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/client-hints-dpr-width-viewport.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/clipboard.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/comparedocumentposition.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/console-basic.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/console-time.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/const.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/constraint-validation.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/contenteditable.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/contentsecuritypolicy.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/contentsecuritypolicy2.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/cookie-store-api.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/cors.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/createimagebitmap.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/credential-management.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/cryptography.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-all.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-animation.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-any-link.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-appearance.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-apply-rule.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-at-counter-style.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-backdrop-filter.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-background-offsets.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-backgroundblendmode.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-boxdecorationbreak.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-boxshadow.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-canvas.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-caret-color.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-case-insensitive.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-clip-path.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-color-adjust.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-color-function.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-conic-gradients.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-containment.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-content-visibility.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-counters.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-crisp-edges.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-cross-fade.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-default-pseudo.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-descendant-gtgt.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-deviceadaptation.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-dir-pseudo.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-display-contents.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-element-function.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-env-function.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-exclusions.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-featurequeries.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-filter-function.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-filters.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-first-letter.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-first-line.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-fixed.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-focus-visible.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-focus-within.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-font-rendering-controls.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-font-stretch.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-gencontent.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-gradients.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-grid.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-hanging-punctuation.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-has.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-hyphenate.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-hyphens.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-image-orientation.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-image-set.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-in-out-of-range.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-indeterminate-pseudo.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-initial-letter.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-initial-value.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-letter-spacing.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-line-clamp.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-logical-props.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-marker-pseudo.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-masks.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-matches-pseudo.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-math-functions.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-media-interaction.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-media-resolution.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-media-scripting.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-mediaqueries.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-mixblendmode.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-motion-paths.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-namespaces.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-not-sel-list.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-nth-child-of.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-opacity.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-optional-pseudo.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-overflow-anchor.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-overflow.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-overscroll-behavior.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-page-break.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-paged-media.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-paint-api.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-placeholder-shown.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-placeholder.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-read-only-write.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-rebeccapurple.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-reflections.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-regions.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-repeating-gradients.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-resize.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-revert-value.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-rrggbbaa.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-scroll-behavior.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-scroll-timeline.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-scrollbar.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-sel2.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-sel3.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-selection.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-shapes.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-snappoints.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-sticky.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-subgrid.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-supports-api.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-table.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-text-align-last.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-text-indent.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-text-justify.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-text-orientation.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-text-spacing.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-textshadow.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-touch-action-2.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-touch-action.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-transitions.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-unicode-bidi.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-unset-value.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-variables.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-widows-orphans.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-writing-mode.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css-zoom.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css3-attr.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css3-boxsizing.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css3-colors.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css3-cursors-grab.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css3-cursors-newer.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css3-cursors.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/css3-tabsize.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/currentcolor.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/custom-elements.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/custom-elementsv1.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/customevent.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/datalist.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/dataset.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/datauri.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/date-tolocaledatestring.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/details.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/deviceorientation.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/devicepixelratio.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/dialog.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/dispatchevent.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/dnssec.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/do-not-track.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/document-currentscript.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/document-evaluate-xpath.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/document-execcommand.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/document-policy.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/document-scrollingelement.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/documenthead.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/dom-manip-convenience.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/dom-range.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/domcontentloaded.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/domfocusin-domfocusout-events.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/dommatrix.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/download.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/dragndrop.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/element-closest.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/element-from-point.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/element-scroll-methods.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/eme.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/eot.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/es5.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/es6-class.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/es6-generators.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/es6-module-dynamic-import.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/es6-module.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/es6-number.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/es6-string-includes.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/es6.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/eventsource.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/extended-system-fonts.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/feature-policy.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/fetch.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/fieldset-disabled.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/fileapi.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/filereader.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/filereadersync.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/filesystem.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/flac.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/flexbox-gap.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/flexbox.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/flow-root.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/focusin-focusout-events.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/focusoptions-preventscroll.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/font-family-system-ui.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/font-feature.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/font-kerning.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/font-loading.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/font-size-adjust.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/font-smooth.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/font-unicode-range.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/font-variant-alternates.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/font-variant-east-asian.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/font-variant-numeric.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/fontface.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/form-attribute.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/form-submit-attributes.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/form-validation.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/forms.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/fullscreen.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/gamepad.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/geolocation.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/getboundingclientrect.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/getcomputedstyle.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/getelementsbyclassname.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/getrandomvalues.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/gyroscope.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/hardwareconcurrency.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/hashchange.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/heif.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/hevc.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/hidden.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/high-resolution-time.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/history.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/html-media-capture.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/html5semantic.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/http-live-streaming.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/http2.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/http3.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/iframe-sandbox.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/iframe-seamless.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/iframe-srcdoc.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/imagecapture.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/ime.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/img-naturalwidth-naturalheight.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/import-maps.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/imports.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/indeterminate-checkbox.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/indexeddb.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/indexeddb2.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/inline-block.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/innertext.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-autocomplete-onoff.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-color.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-datetime.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-email-tel-url.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-event.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-file-accept.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-file-directory.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-file-multiple.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-inputmode.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-minlength.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-number.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-pattern.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-placeholder.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-range.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-search.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/input-selection.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/insert-adjacent.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/insertadjacenthtml.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/internationalization.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/intersectionobserver-v2.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/intersectionobserver.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/intl-pluralrules.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/intrinsic-width.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/jpeg2000.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/jpegxr.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/js-regexp-lookbehind.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/json.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/justify-content-space-evenly.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/kerning-pairs-ligatures.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/keyboardevent-charcode.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/keyboardevent-code.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/keyboardevent-getmodifierstate.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/keyboardevent-key.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/keyboardevent-location.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/keyboardevent-which.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/lazyload.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/let.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/link-icon-png.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/link-icon-svg.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/link-rel-dns-prefetch.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/link-rel-modulepreload.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/link-rel-preconnect.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/link-rel-prefetch.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/link-rel-preload.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/link-rel-prerender.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/loading-lazy-attr.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/localecompare.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/magnetometer.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/matchesselector.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/matchmedia.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/mathml.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/maxlength.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/media-attribute.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/media-fragments.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/media-session-api.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/mediacapture-fromelement.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/mediarecorder.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/mediasource.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/menu.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/meta-theme-color.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/meter.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/midi.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/minmaxwh.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/mp3.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/mpeg-dash.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/mpeg4.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/multibackgrounds.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/multicolumn.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/mutation-events.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/mutationobserver.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/namevalue-storage.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/native-filesystem-api.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/nav-timing.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/navigator-language.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/netinfo.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/node-contains.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/node-parentelement.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/notifications.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/object-entries.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/object-fit.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/object-observe.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/object-values.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/objectrtc.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/offline-apps.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/offscreencanvas.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/ogg-vorbis.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/ogv.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/ol-reversed.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/once-event-listener.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/online-status.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/opus.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/orientation-sensor.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/outline.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/pad-start-end.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/page-transition-events.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/pagevisibility.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/passive-event-listener.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/passwordrules.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/path2d.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/payment-request.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/pdf-viewer.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/permissions-api.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/permissions-policy.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/picture-in-picture.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/picture.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/ping.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/png-alpha.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/pointer-events.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/pointer.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/pointerlock.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/portals.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/prefers-color-scheme.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/prefers-reduced-motion.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/private-class-fields.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/private-methods-and-accessors.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/progress.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/promise-finally.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/promises.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/proximity.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/proxy.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/public-class-fields.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/publickeypinning.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/push-api.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/queryselector.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/readonly-attr.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/referrer-policy.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/registerprotocolhandler.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/rel-noopener.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/rel-noreferrer.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/rellist.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/rem.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/replace-all.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/requestanimationframe.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/requestidlecallback.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/resizeobserver.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/resource-timing.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/rest-parameters.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/rtcpeerconnection.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/ruby.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/run-in.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/same-site-cookie-attribute.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/screen-orientation.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/script-async.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/script-defer.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/scrollintoview.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/scrollintoviewifneeded.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/sdch.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/selection-api.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/server-timing.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/serviceworkers.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/setimmediate.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/sha-2.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/shadowdom.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/shadowdomv1.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/sharedarraybuffer.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/sharedworkers.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/sni.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/spdy.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/speech-recognition.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/speech-synthesis.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/spellcheck-attribute.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/sql-storage.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/srcset.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/stopimmediatepropagation.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/stream.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/streams.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/stricttransportsecurity.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/style-scoped.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/subresource-integrity.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/svg-css.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/svg-filters.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/svg-fonts.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/svg-fragment.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/svg-html.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/svg-html5.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/svg-img.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/svg-smil.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/svg.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/sxg.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/symbols.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/tabindex-attr.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/template-literals.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/template.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/testfeat.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/text-decoration.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/text-emphasis.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/text-overflow.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/text-size-adjust.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/text-stroke.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/text-underline-offset.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/textcontent.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/textencoder.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/tls1-1.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/tls1-2.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/tls1-3.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/token-binding.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/touch.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/transforms2d.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/transforms3d.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/trusted-types.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/ttf.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/typedarrays.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/u2f.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/unhandledrejection.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/upgradeinsecurerequests.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/url-scroll-to-text-fragment.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/url.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/urlsearchparams.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/use-strict.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/user-select-none.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/user-timing.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/variable-fonts.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/vibration.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/video.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/videotracks.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/viewport-units.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/wai-aria.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/wake-lock.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/wasm.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/wav.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/wbr-element.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/web-animation.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/web-app-manifest.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/web-bluetooth.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/web-share.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/webauthn.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/webgl.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/webgl2.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/webgpu.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/webhid.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/webm.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/webnfc.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/webp.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/websockets.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/webusb.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/webvr.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/webvtt.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/webworkers.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/webxr.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/will-change.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/woff.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/woff2.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/word-break.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/wordwrap.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/x-doc-messaging.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/x-frame-options.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/xhr2.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/xhtml.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/xhtmlsmil.js":
false,

/***/ "./node_modules/caniuse-lite/data/features/xml-serializer.js":
false,

/***/ "./node_modules/caniuse-lite/dist/lib/statuses.js":
false,

/***/ "./node_modules/caniuse-lite/dist/lib/supported.js":
false,

/***/ "./node_modules/caniuse-lite/dist/unpacker/agents.js":
false,

/***/ "./node_modules/caniuse-lite/dist/unpacker/browserVersions.js":
false,

/***/ "./node_modules/caniuse-lite/dist/unpacker/browsers.js":
false,

/***/ "./node_modules/caniuse-lite/dist/unpacker/feature.js":
false,

/***/ "./node_modules/caniuse-lite/dist/unpacker/features.js":
false,

/***/ "./node_modules/caniuse-lite/dist/unpacker/index.js":
false,

/***/ "./node_modules/caniuse-lite/dist/unpacker/region.js":
false,

/***/ "./node_modules/electron-to-chromium/versions.js":
false,

/***/ "./node_modules/fraction.js/fraction.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/nanoid/non-secure/index.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js":
false,

/***/ "./node_modules/node-releases/data/processed/envs.json":
false,

/***/ "./node_modules/node-releases/data/release-schedule/release-schedule.json":
false,

/***/ "./node_modules/normalize-range/index.js":
false,

/***/ "./node_modules/postcss-value-parser/lib/index.js":
false,

/***/ "./node_modules/postcss-value-parser/lib/parse.js":
false,

/***/ "./node_modules/postcss-value-parser/lib/stringify.js":
false,

/***/ "./node_modules/postcss-value-parser/lib/unit.js":
false,

/***/ "./node_modules/postcss-value-parser/lib/walk.js":
false,

/***/ "./node_modules/postcss/lib/at-rule.js":
false,

/***/ "./node_modules/postcss/lib/comment.js":
false,

/***/ "./node_modules/postcss/lib/container.js":
false,

/***/ "./node_modules/postcss/lib/css-syntax-error.js":
false,

/***/ "./node_modules/postcss/lib/declaration.js":
false,

/***/ "./node_modules/postcss/lib/fromJSON.js":
false,

/***/ "./node_modules/postcss/lib/input.js":
false,

/***/ "./node_modules/postcss/lib/lazy-result.js":
false,

/***/ "./node_modules/postcss/lib/list.js":
false,

/***/ "./node_modules/postcss/lib/map-generator.js":
false,

/***/ "./node_modules/postcss/lib/node.js":
false,

/***/ "./node_modules/postcss/lib/parse.js":
false,

/***/ "./node_modules/postcss/lib/parser.js":
false,

/***/ "./node_modules/postcss/lib/postcss.js":
false,

/***/ "./node_modules/postcss/lib/previous-map.js":
false,

/***/ "./node_modules/postcss/lib/processor.js":
false,

/***/ "./node_modules/postcss/lib/result.js":
false,

/***/ "./node_modules/postcss/lib/root.js":
false,

/***/ "./node_modules/postcss/lib/rule.js":
false,

/***/ "./node_modules/postcss/lib/stringifier.js":
false,

/***/ "./node_modules/postcss/lib/stringify.js":
false,

/***/ "./node_modules/postcss/lib/symbols.js":
false,

/***/ "./node_modules/postcss/lib/tokenize.js":
false,

/***/ "./node_modules/postcss/lib/warn-once.js":
false,

/***/ "./node_modules/postcss/lib/warning.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/source-map/lib/array-set.js":
false,

/***/ "./node_modules/source-map/lib/base64-vlq.js":
false,

/***/ "./node_modules/source-map/lib/base64.js":
false,

/***/ "./node_modules/source-map/lib/binary-search.js":
false,

/***/ "./node_modules/source-map/lib/mapping-list.js":
false,

/***/ "./node_modules/source-map/lib/quick-sort.js":
false,

/***/ "./node_modules/source-map/lib/source-map-consumer.js":
false,

/***/ "./node_modules/source-map/lib/source-map-generator.js":
false,

/***/ "./node_modules/source-map/lib/source-node.js":
false,

/***/ "./node_modules/source-map/lib/util.js":
false,

/***/ "./node_modules/source-map/source-map.js":
false,

/***/ 1:
false,

/***/ 2:
false,

/***/ 3:
false,

/***/ 4:
false,

/***/ 5:
false

})