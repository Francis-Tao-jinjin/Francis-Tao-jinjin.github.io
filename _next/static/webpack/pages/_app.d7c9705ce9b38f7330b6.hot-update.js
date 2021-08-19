webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/webgl/index.js":
/*!***********************************!*\
  !*** ./components/webgl/index.js ***!
  \***********************************/
/*! exports provided: loadTextures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTextures\", function() { return loadTextures; });\n/* harmony import */ var _Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _create_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-canvas */ \"./components/webgl/create-canvas.js\");\n/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-loader */ \"./components/webgl/image-loader.js\");\n/* harmony import */ var _Raindrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Raindrop */ \"./components/webgl/Raindrop.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _rain_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rain-renderer */ \"./components/webgl/rain-renderer.js\");\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random */ \"./components/webgl/random.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar textureRainFg;\nvar textureRainBg;\nvar dropColor;\nvar dropAlpha;\nvar textureFg;\nvar textureFgCtx;\nvar textureBg;\nvar textureBgCtx;\nvar textureBgSize = {\n  // width: 384,\n  // height: 256,\n  width: 341,\n  height: 512\n};\nvar textureFgSize = {\n  // width:96,\n  // height:64,\n  width: 341,\n  height: 512\n};\nvar raindrops;\nvar renderer;\nvar canvas;\nvar parallax = {\n  x: 0,\n  y: 0\n};\nvar weatherData = null;\nvar curWeatherData = null;\nvar blend = {\n  v: 0\n};\nfunction loadTextures() {\n  Object(_image_loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([{\n    name: 'dropAlpha',\n    src: '/images/webgl/drop-alpha.png'\n  }, {\n    name: 'dropColor',\n    src: '/images/webgl/drop-color.png'\n  }, {\n    name: 'textureRainFg',\n    src: '/images/webgl/texture-sun-fg.png'\n  }, {\n    name: 'textureRainBg',\n    src: '/images/webgl/texture-sun-bg.png'\n  } // { name: 'textureRainFg', src: '/images/webgl/rome-1.jpeg' },\n  // { name: 'textureRainBg', src: '/images/webgl/rome-1.jpeg' },\n  ]).then(function (images) {\n    textureRainFg = images.textureRainFg.img;\n    textureRainBg = images.textureRainBg.img;\n    dropAlpha = images.dropAlpha.img;\n    dropColor = images.dropColor.img;\n    init();\n  });\n}\n;\n\nfunction init() {\n  canvas = document.getElementById('glcanvas'); // let dpi = window.devicePixelRatio;\n\n  var dpi = 1;\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  raindrops = new _Raindrop__WEBPACK_IMPORTED_MODULE_3__[\"Raindrops\"](canvas.width, canvas.height, dpi, dropAlpha, dropColor, {\n    trailRate: 1,\n    trailScaleRange: [0.2, 0.45],\n    collisionRadius: 0.45,\n    dropletsCleaningRadiusMultiplier: 0.28\n  });\n  textureFg = Object(_create_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(textureFgSize.width, textureFgSize.height);\n  textureFgCtx = textureFg.getContext('2d');\n  textureBg = Object(_create_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(textureBgSize.width, textureBgSize.height);\n  textureBgCtx = textureBg.getContext('2d');\n  generateTextures(textureRainFg, textureRainBg);\n  renderer = new _rain_renderer__WEBPACK_IMPORTED_MODULE_5__[\"RainRenderer\"](canvas, raindrops.canvas, textureFg, textureBg, null, {\n    brightness: 1.04,\n    alphaMultiply: 6,\n    alphaSubtract: 3\n  });\n  setupEvents();\n}\n\nfunction setupEvents() {\n  setUpResize();\n  setupParallax();\n  setupWeather(); // setupFlash();\n}\n\nfunction setUpResize() {\n  window.addEventListener('resize', function (event) {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n    renderer.resize();\n    raindrops.onResize();\n  });\n}\n\nfunction setupParallax() {\n  document.addEventListener('mousemove', function (event) {\n    var x = event.pageX;\n    var y = event.pageY;\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(parallax, {\n      duration: 1,\n      x: x / canvas.width * 2 - 1,\n      y: y / canvas.height * 2 - 1,\n      ease: 'power4.out',\n      onUpdate: function onUpdate() {\n        renderer.parallaxX = parallax.x;\n        renderer.parallaxY = parallax.y;\n      }\n    });\n  });\n} // function setupFlash() {\n//     setInterval(() => {\n//         if (chance(curWeatherData.flashChance)) {\n//             flash(curWeatherData.bg, curWeatherData.fg, curWeatherData.flashBg, curWeatherData.flashFg);\n//         }\n//     }, 500);\n// }\n\n\nfunction setupWeather() {\n  setupWeatherData();\n  updateWeather();\n}\n\nfunction setupWeatherData() {\n  var defaultWeather = {\n    raining: true,\n    minR: 20,\n    maxR: 50,\n    rainChance: 0.35,\n    rainLimit: 6,\n    dropletsRate: 50,\n    dropletsSize: [3, 5.5],\n    trailRate: 1,\n    trailScaleRange: [0.25, 0.35],\n    fg: textureRainFg,\n    bg: textureRainBg,\n    flashFg: null,\n    flashBg: null,\n    flashChance: 0,\n    collisionRadiusIncrease: 0.0002\n  };\n\n  function weather(data) {\n    return _objectSpread(_objectSpread({}, defaultWeather), data);\n  }\n\n  weatherData = {\n    rain: weather({\n      rainChance: 0.35,\n      dropletsRate: 50,\n      raining: true,\n      // trailRate:2.5,\n      fg: textureRainFg,\n      bg: textureRainBg\n    })\n  };\n}\n\nfunction updateWeather() {\n  curWeatherData = weatherData.rain;\n  raindrops.options = _objectSpread(_objectSpread({}, raindrops.options), curWeatherData);\n  raindrops.clearDrops();\n  gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fromTo(blend, {\n    v: 0\n  }, {\n    duration: 1,\n    v: 1,\n    onUpdate: function onUpdate() {\n      generateTextures(curWeatherData.fg, curWeatherData.bg, blend.v);\n      renderer.updateTextures();\n    }\n  });\n}\n\nfunction flash(baseBg, baseFg, flashBg, flashFg) {\n  var flashValue = {\n    v: 0\n  };\n\n  function transitionFlash(to) {\n    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.025;\n    return new Promise(function (resolve, reject) {\n      gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(flashValue, {\n        duration: t,\n        v: to,\n        ease: 'power4.out',\n        onUpdate: function onUpdate() {\n          generateTextures(baseFg, baseBg);\n          generateTextures(flashFg, flashBg, flashValue.v);\n          renderer.updateTextures();\n        },\n        onComplete: function onComplete() {\n          resolve();\n        }\n      });\n    });\n  }\n\n  var lastFlash = transitionFlash(1);\n  var t = Object(_random__WEBPACK_IMPORTED_MODULE_6__[\"random\"])(2, 7);\n\n  for (var i = 0; i < t; i++) {\n    lastFlash = lastFlash.then(function () {\n      return transitionFlash(Object(_random__WEBPACK_IMPORTED_MODULE_6__[\"random\"])(0.1, 1));\n    });\n  }\n\n  lastFlash = lastFlash.then(function () {\n    return transitionFlash(1, 0.1);\n  }).then(function () {\n    transitionFlash(0, 0.25);\n  });\n}\n\nfunction generateTextures(fg, bg) {\n  var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  textureFgCtx.globalAlpha = alpha;\n  textureFgCtx.drawImage(fg, 0, 0, textureFgSize.width, textureFgSize.height);\n  textureBgCtx.globalAlpha = alpha;\n  textureBgCtx.drawImage(bg, 0, 0, textureBgSize.width, textureBgSize.height);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93ZWJnbC9pbmRleC5qcz9mMDExIl0sIm5hbWVzIjpbInRleHR1cmVSYWluRmciLCJ0ZXh0dXJlUmFpbkJnIiwiZHJvcENvbG9yIiwiZHJvcEFscGhhIiwidGV4dHVyZUZnIiwidGV4dHVyZUZnQ3R4IiwidGV4dHVyZUJnIiwidGV4dHVyZUJnQ3R4IiwidGV4dHVyZUJnU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dHVyZUZnU2l6ZSIsInJhaW5kcm9wcyIsInJlbmRlcmVyIiwiY2FudmFzIiwicGFyYWxsYXgiLCJ4IiwieSIsIndlYXRoZXJEYXRhIiwiY3VyV2VhdGhlckRhdGEiLCJibGVuZCIsInYiLCJsb2FkVGV4dHVyZXMiLCJsb2FkSW1hZ2VzIiwibmFtZSIsInNyYyIsInRoZW4iLCJpbWFnZXMiLCJpbWciLCJpbml0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRwaSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIlJhaW5kcm9wcyIsInRyYWlsUmF0ZSIsInRyYWlsU2NhbGVSYW5nZSIsImNvbGxpc2lvblJhZGl1cyIsImRyb3BsZXRzQ2xlYW5pbmdSYWRpdXNNdWx0aXBsaWVyIiwiY3JlYXRlQ2FudmFzIiwiZ2V0Q29udGV4dCIsImdlbmVyYXRlVGV4dHVyZXMiLCJSYWluUmVuZGVyZXIiLCJicmlnaHRuZXNzIiwiYWxwaGFNdWx0aXBseSIsImFscGhhU3VidHJhY3QiLCJzZXR1cEV2ZW50cyIsInNldFVwUmVzaXplIiwic2V0dXBQYXJhbGxheCIsInNldHVwV2VhdGhlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInJlc2l6ZSIsIm9uUmVzaXplIiwicGFnZVgiLCJwYWdlWSIsImdzYXAiLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsIm9uVXBkYXRlIiwicGFyYWxsYXhYIiwicGFyYWxsYXhZIiwic2V0dXBXZWF0aGVyRGF0YSIsInVwZGF0ZVdlYXRoZXIiLCJkZWZhdWx0V2VhdGhlciIsInJhaW5pbmciLCJtaW5SIiwibWF4UiIsInJhaW5DaGFuY2UiLCJyYWluTGltaXQiLCJkcm9wbGV0c1JhdGUiLCJkcm9wbGV0c1NpemUiLCJmZyIsImJnIiwiZmxhc2hGZyIsImZsYXNoQmciLCJmbGFzaENoYW5jZSIsImNvbGxpc2lvblJhZGl1c0luY3JlYXNlIiwid2VhdGhlciIsImRhdGEiLCJyYWluIiwib3B0aW9ucyIsImNsZWFyRHJvcHMiLCJmcm9tVG8iLCJ1cGRhdGVUZXh0dXJlcyIsImZsYXNoIiwiYmFzZUJnIiwiYmFzZUZnIiwiZmxhc2hWYWx1ZSIsInRyYW5zaXRpb25GbGFzaCIsInQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uQ29tcGxldGUiLCJsYXN0Rmxhc2giLCJyYW5kb20iLCJpIiwiYWxwaGEiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsYUFBSjtBQUNBLElBQUlDLGFBQUo7QUFDQSxJQUFJQyxTQUFKO0FBQ0EsSUFBSUMsU0FBSjtBQUVBLElBQUlDLFNBQUo7QUFDQSxJQUFJQyxZQUFKO0FBQ0EsSUFBSUMsU0FBSjtBQUNBLElBQUlDLFlBQUo7QUFFQSxJQUFJQyxhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBQyxPQUFLLEVBQUUsR0FIUztBQUloQkMsUUFBTSxFQUFFO0FBSlEsQ0FBcEI7QUFPQSxJQUFJQyxhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBRixPQUFLLEVBQUUsR0FIUztBQUloQkMsUUFBTSxFQUFFO0FBSlEsQ0FBcEI7QUFPQSxJQUFJRSxTQUFKO0FBQ0EsSUFBSUMsUUFBSjtBQUNBLElBQUlDLE1BQUo7QUFFQSxJQUFJQyxRQUFRLEdBQUc7QUFBQ0MsR0FBQyxFQUFDLENBQUg7QUFBT0MsR0FBQyxFQUFDO0FBQVQsQ0FBZjtBQUVBLElBQUlDLFdBQVcsR0FBRyxJQUFsQjtBQUNBLElB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QUFNLENBQU4sQ0FBUCxDQUF0QjtBQUNILEtBRlcsQ0FBWjtBQUdIOztBQUNERCxXQUFTLEdBQUdBLFNBQVMsQ0FBQ3hFLElBQVYsQ0FBZSxZQUFNO0FBQzdCLFdBQU9rRSxlQUFlLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBdEI7QUFDSCxHQUZXLEVBRVRsRSxJQUZTLENBRUosWUFBTTtBQUNWa0UsbUJBQWUsQ0FBQyxDQUFELEVBQUksSUFBSixDQUFmO0FBQ0gsR0FKVyxDQUFaO0FBS0g7O0FBRUQsU0FBU2pELGdCQUFULENBQTBCZ0MsRUFBMUIsRUFBOEJDLEVBQTlCLEVBQTRDO0FBQUEsTUFBVnlCLEtBQVUsdUVBQUYsQ0FBRTtBQUN4Q2hHLGNBQVksQ0FBQ2lHLFdBQWIsR0FBMkJELEtBQTNCO0FBQ0FoRyxjQUFZLENBQUNrRyxTQUFiLENBQXVCNUIsRUFBdkIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUNoRSxhQUFhLENBQUNGLEtBQS9DLEVBQXNERSxhQUFhLENBQUNELE1BQXBFO0FBRUFILGNBQVksQ0FBQytGLFdBQWIsR0FBMkJELEtBQTNCO0FBQ0E5RixjQUFZLENBQUNnRyxTQUFiLENBQXVCM0IsRUFBdkIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUNwRSxhQUFhLENBQUNDLEtBQS9DLEVBQXNERCxhQUFhLENBQUNFLE1BQXBFO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYmdsL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL2NyZWF0ZS1jYW52YXMnO1xuaW1wb3J0IGxvYWRJbWFnZXMgZnJvbSAnLi9pbWFnZS1sb2FkZXInO1xuaW1wb3J0IHsgUmFpbmRyb3BzIH0gZnJvbSAnLi9SYWluZHJvcCc7XG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcbmltcG9ydCB7IFJhaW5SZW5kZXJlciB9IGZyb20gJy4vcmFpbi1yZW5kZXJlcic7XG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuL3JhbmRvbSc7XG5cbmxldCB0ZXh0dXJlUmFpbkZnO1xubGV0IHRleHR1cmVSYWluQmc7XG5sZXQgZHJvcENvbG9yO1xubGV0IGRyb3BBbHBoYTtcblxubGV0IHRleHR1cmVGZztcbmxldCB0ZXh0dXJlRmdDdHg7XG5sZXQgdGV4dHVyZUJnO1xubGV0IHRleHR1cmVCZ0N0eDtcblxubGV0IHRleHR1cmVCZ1NpemUgPSB7XG4gICAgLy8gd2lkdGg6IDM4NCxcbiAgICAvLyBoZWlnaHQ6IDI1NixcbiAgICB3aWR0aDogMzQxLFxuICAgIGhlaWdodDogNTEyLFxufTtcblxubGV0IHRleHR1cmVGZ1NpemUgPSB7XG4gICAgLy8gd2lkdGg6OTYsXG4gICAgLy8gaGVpZ2h0OjY0LFxuICAgIHdpZHRoOiAzNDEsXG4gICAgaGVpZ2h0OiA1MTIsXG59O1xuXG5sZXQgcmFpbmRyb3BzO1xubGV0IHJlbmRlcmVyO1xubGV0IGNhbnZhcztcblxubGV0IHBhcmFsbGF4ID0ge3g6MCAsIHk6MH07XG5cbmxldCB3ZWF0aGVyRGF0YSA9IG51bGw7XG5sZXQgY3VyV2VhdGhlckRhdGEgPSBudWxsO1xubGV0IGJsZW5kID0geyB2OiAwfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUZXh0dXJlcygpIHtcbiAgICBsb2FkSW1hZ2VzKFtcbiAgICAgICAgeyBuYW1lOiAnZHJvcEFscGhhJywgc3JjOiAnL2ltYWdlcy93ZWJnbC9kcm9wLWFscGhhLnBuZycgfSxcbiAgICAgICAgeyBuYW1lOiAnZHJvcENvbG9yJywgc3JjOiAnL2ltYWdlcy93ZWJnbC9kcm9wLWNvbG9yLnBuZycgfSxcbiAgICAgICAgeyBuYW1lOiAndGV4dHVyZVJhaW5GZycsIHNyYzogJy9pbWFnZXMvd2ViZ2wvdGV4dHVyZS1zdW4tZmcucG5nJyB9LFxuICAgICAgICB7IG5hbWU6ICd0ZXh0dXJlUmFpbkJnJywgc3JjOiAnL2ltYWdlcy93ZWJnbC90ZXh0dXJlLXN1bi1iZy5wbmcnIH0sXG5cbiAgICAgICAgLy8geyBuYW1lOiAndGV4dHVyZVJhaW5GZycsIHNyYzogJy9pbWFnZXMvd2ViZ2wvcm9tZS0xLmpwZWcnIH0sXG4gICAgICAgIC8vIHsgbmFtZTogJ3RleHR1cmVSYWluQmcnLCBzcmM6ICcvaW1hZ2VzL3dlYmdsL3JvbWUtMS5qcGVnJyB9LFxuICAgIF0pLnRoZW4oKGltYWdlcykgPT4ge1xuICAgICAgICB0ZXh0dXJlUmFpbkZnID0gaW1hZ2VzLnRleHR1cmVSYWluRmcuaW1nO1xuICAgICAgICB0ZXh0dXJlUmFpbkJnID0gaW1hZ2VzLnRleHR1cmVSYWluQmcuaW1nO1xuXG4gICAgICAgIGRyb3BBbHBoYSA9IGltYWdlcy5kcm9wQWxwaGEuaW1nO1xuICAgICAgICBkcm9wQ29sb3IgPSBpbWFnZXMuZHJvcENvbG9yLmltZztcblxuICAgICAgICBpbml0KCk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnbGNhbnZhcycpO1xuICAgIC8vIGxldCBkcGkgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICBsZXQgZHBpID0gMTtcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgcmFpbmRyb3BzID0gbmV3IFJhaW5kcm9wcyhcbiAgICAgICAgY2FudmFzLndpZHRoLFxuICAgICAgICBjYW52YXMuaGVpZ2h0LFxuICAgICAgICBkcGksXG4gICAgICAgIGRyb3BBbHBoYSxcbiAgICAgICAgZHJvcENvbG9yLFxuICAgICAgICB7XG4gICAgICAgICAgICB0cmFpbFJhdGU6IDEsXG4gICAgICAgICAgICB0cmFpbFNjYWxlUmFuZ2U6IFswLjIsIDAuNDVdLFxuICAgICAgICAgICAgY29sbGlzaW9uUmFkaXVzOiAwLjQ1LFxuICAgICAgICAgICAgZHJvcGxldHNDbGVhbmluZ1JhZGl1c011bHRpcGxpZXI6IDAuMjgsXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgdGV4dHVyZUZnID0gY3JlYXRlQ2FudmFzKHRleHR1cmVGZ1NpemUud2lkdGgsIHRleHR1cmVGZ1NpemUuaGVpZ2h0KTtcbiAgICB0ZXh0dXJlRmdDdHggPSB0ZXh0dXJlRmcuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0ZXh0dXJlQmcgPSBjcmVhdGVDYW52YXModGV4dHVyZUJnU2l6ZS53aWR0aCwgdGV4dHVyZUJnU2l6ZS5oZWlnaHQpO1xuICAgIHRleHR1cmVCZ0N0eCA9IHRleHR1cmVCZy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgZ2VuZXJhdGVUZXh0dXJlcyh0ZXh0dXJlUmFpbkZnLCB0ZXh0dXJlUmFpbkJnKTtcblxuICAgIHJlbmRlcmVyID0gbmV3IFJhaW5SZW5kZXJlcihjYW52YXMsIHJhaW5kcm9wcy5jYW52YXMsIHRleHR1cmVGZywgdGV4dHVyZUJnLCBudWxsLCB7XG4gICAgICAgIGJyaWdodG5lc3M6IDEuMDQsXG4gICAgICAgIGFscGhhTXVsdGlwbHk6IDYsXG4gICAgICAgIGFscGhhU3VidHJhY3Q6IDMsXG4gICAgfSk7XG5cbiAgICBzZXR1cEV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBzZXR1cEV2ZW50cygpe1xuICAgIHNldFVwUmVzaXplKCk7XG4gICAgc2V0dXBQYXJhbGxheCgpO1xuICAgIHNldHVwV2VhdGhlcigpO1xuICAgIC8vIHNldHVwRmxhc2goKTtcbn1cblxuZnVuY3Rpb24gc2V0VXBSZXNpemUoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldmVudCkgPT4ge1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgcmVuZGVyZXIucmVzaXplKCk7XG4gICAgICAgIHJhaW5kcm9wcy5vblJlc2l6ZSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXR1cFBhcmFsbGF4KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICBsZXQgeCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICBsZXQgeSA9IGV2ZW50LnBhZ2VZO1xuXG4gICAgICAgIGdzYXAudG8ocGFyYWxsYXgsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgeDogKCh4IC8gY2FudmFzLndpZHRoKSAqIDIpIC0gMSxcbiAgICAgICAgICAgIHk6ICgoeSAvIGNhbnZhcy5oZWlnaHQpICogMikgLSAxLFxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyNC5vdXQnLFxuICAgICAgICAgICAgb25VcGRhdGU6KCk9PntcbiAgICAgICAgICAgICAgICByZW5kZXJlci5wYXJhbGxheFggPSBwYXJhbGxheC54O1xuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnBhcmFsbGF4WSA9IHBhcmFsbGF4Lnk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLy8gZnVuY3Rpb24gc2V0dXBGbGFzaCgpIHtcbi8vICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4vLyAgICAgICAgIGlmIChjaGFuY2UoY3VyV2VhdGhlckRhdGEuZmxhc2hDaGFuY2UpKSB7XG4vLyAgICAgICAgICAgICBmbGFzaChjdXJXZWF0aGVyRGF0YS5iZywgY3VyV2VhdGhlckRhdGEuZmcsIGN1cldlYXRoZXJEYXRhLmZsYXNoQmcsIGN1cldlYXRoZXJEYXRhLmZsYXNoRmcpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSwgNTAwKTtcbi8vIH1cblxuZnVuY3Rpb24gc2V0dXBXZWF0aGVyKCkge1xuICAgIHNldHVwV2VhdGhlckRhdGEoKTtcbiAgICB1cGRhdGVXZWF0aGVyKCk7XG59XG5cbmZ1bmN0aW9uIHNldHVwV2VhdGhlckRhdGEoKSB7XG4gICAgbGV0IGRlZmF1bHRXZWF0aGVyID0ge1xuICAgICAgICByYWluaW5nOiB0cnVlLFxuICAgICAgICBtaW5SOiAyMCxcbiAgICAgICAgbWF4UjogNTAsXG4gICAgICAgIHJhaW5DaGFuY2U6IDAuMzUsXG4gICAgICAgIHJhaW5MaW1pdDogNixcbiAgICAgICAgZHJvcGxldHNSYXRlOjUwLFxuICAgICAgICBkcm9wbGV0c1NpemU6WzMsNS41XSxcbiAgICAgICAgdHJhaWxSYXRlOjEsXG4gICAgICAgIHRyYWlsU2NhbGVSYW5nZTpbMC4yNSwwLjM1XSxcbiAgICAgICAgZmc6IHRleHR1cmVSYWluRmcsXG4gICAgICAgIGJnOiB0ZXh0dXJlUmFpbkJnLFxuICAgICAgICBmbGFzaEZnOiBudWxsLFxuICAgICAgICBmbGFzaEJnOiBudWxsLFxuICAgICAgICBmbGFzaENoYW5jZTogMCxcbiAgICAgICAgY29sbGlzaW9uUmFkaXVzSW5jcmVhc2U6IDAuMDAwMixcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gd2VhdGhlcihkYXRhKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0V2VhdGhlcixcbiAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3ZWF0aGVyRGF0YSA9IHtcbiAgICAgICAgcmFpbjogd2VhdGhlcih7XG4gICAgICAgICAgICByYWluQ2hhbmNlOjAuMzUsXG4gICAgICAgICAgICBkcm9wbGV0c1JhdGU6NTAsXG4gICAgICAgICAgICByYWluaW5nOnRydWUsXG4gICAgICAgICAgICAvLyB0cmFpbFJhdGU6Mi41LFxuICAgICAgICAgICAgZmc6dGV4dHVyZVJhaW5GZyxcbiAgICAgICAgICAgIGJnOnRleHR1cmVSYWluQmdcbiAgICAgICAgfSksXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlV2VhdGhlcigpIHtcbiAgICBjdXJXZWF0aGVyRGF0YSA9IHdlYXRoZXJEYXRhLnJhaW47XG4gICAgcmFpbmRyb3BzLm9wdGlvbnMgPSB7XG4gICAgICAgIC4uLnJhaW5kcm9wcy5vcHRpb25zLFxuICAgICAgICAuLi5jdXJXZWF0aGVyRGF0YSxcbiAgICB9O1xuICAgIHJhaW5kcm9wcy5jbGVhckRyb3BzKCk7XG5cbiAgICBnc2FwLmZyb21UbyhibGVuZCwge1xuICAgICAgICB2OiAwLFxuICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIHY6MSxcbiAgICAgICAgb25VcGRhdGU6ICgpID0+IHtcbiAgICAgICAgICAgIGdlbmVyYXRlVGV4dHVyZXMoY3VyV2VhdGhlckRhdGEuZmcsIGN1cldlYXRoZXJEYXRhLmJnLCBibGVuZC52KTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnVwZGF0ZVRleHR1cmVzKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZmxhc2goYmFzZUJnLCBiYXNlRmcsIGZsYXNoQmcsIGZsYXNoRmcpIHtcbiAgICBsZXQgZmxhc2hWYWx1ZSA9IHsgdjowIH07XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbkZsYXNoKHRvLCB0ID0gMC4wMjUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGdzYXAudG8oZmxhc2hWYWx1ZSwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0LFxuICAgICAgICAgICAgICAgIHY6dG8sXG4gICAgICAgICAgICAgICAgZWFzZTogJ3Bvd2VyNC5vdXQnLFxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlVGV4dHVyZXMoYmFzZUZnLCBiYXNlQmcpO1xuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVRleHR1cmVzKGZsYXNoRmcsIGZsYXNoQmcsIGZsYXNoVmFsdWUudik7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnVwZGF0ZVRleHR1cmVzKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGxhc3RGbGFzaCA9IHRyYW5zaXRpb25GbGFzaCgxKTtcbiAgICBjb25zdCB0ID0gcmFuZG9tKDIsIDcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdDsgaSsrKSB7XG4gICAgICAgIGxhc3RGbGFzaCA9IGxhc3RGbGFzaC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uRmxhc2gocmFuZG9tKDAuMSwgMSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGFzdEZsYXNoID0gbGFzdEZsYXNoLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHJhbnNpdGlvbkZsYXNoKDEsIDAuMSk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRyYW5zaXRpb25GbGFzaCgwLCAwLjI1KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUZXh0dXJlcyhmZywgYmcsIGFscGhhID0gMSl7XG4gICAgdGV4dHVyZUZnQ3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gICAgdGV4dHVyZUZnQ3R4LmRyYXdJbWFnZShmZywgMCwgMCwgdGV4dHVyZUZnU2l6ZS53aWR0aCwgdGV4dHVyZUZnU2l6ZS5oZWlnaHQpO1xuICBcbiAgICB0ZXh0dXJlQmdDdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgICB0ZXh0dXJlQmdDdHguZHJhd0ltYWdlKGJnLCAwLCAwLCB0ZXh0dXJlQmdTaXplLndpZHRoLCB0ZXh0dXJlQmdTaXplLmhlaWdodCk7XG4gIH1cbiAgXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/webgl/index.js\n");

/***/ })

})