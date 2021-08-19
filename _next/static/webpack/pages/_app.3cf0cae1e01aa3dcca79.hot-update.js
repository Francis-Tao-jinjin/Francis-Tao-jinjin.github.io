webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/webgl/index.js":
/*!***********************************!*\
  !*** ./components/webgl/index.js ***!
  \***********************************/
/*! exports provided: loadTextures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTextures\", function() { return loadTextures; });\n/* harmony import */ var _Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _create_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-canvas */ \"./components/webgl/create-canvas.js\");\n/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-loader */ \"./components/webgl/image-loader.js\");\n/* harmony import */ var _Raindrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Raindrop */ \"./components/webgl/Raindrop.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _rain_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rain-renderer */ \"./components/webgl/rain-renderer.js\");\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random */ \"./components/webgl/random.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar textureRainFg;\nvar textureRainBg;\nvar dropColor;\nvar dropAlpha;\nvar textureFg;\nvar textureFgCtx;\nvar textureBg;\nvar textureBgCtx;\nvar textureBgSize = {\n  width: 384,\n  height: 256\n};\nvar textureFgSize = {\n  width: 96,\n  height: 64\n};\nvar raindrops;\nvar renderer;\nvar canvas;\nvar parallax = {\n  x: 0,\n  y: 0\n};\nvar weatherData = null;\nvar curWeatherData = null;\nvar blend = {\n  v: 0\n};\nfunction loadTextures() {\n  Object(_image_loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([{\n    name: 'dropAlpha',\n    src: '/images/webgl/drop-alpha.png'\n  }, {\n    name: 'dropColor',\n    src: '/images/webgl/drop-color.png'\n  }, {\n    name: 'textureRainFg',\n    src: '/images/webgl/texture-sun-fg.png'\n  }, {\n    name: 'textureRainBg',\n    src: '/images/webgl/texture-sun-bg.png'\n  }]).then(function (images) {\n    textureRainFg = images.textureRainFg.img;\n    textureRainBg = images.textureRainBg.img;\n    dropAlpha = images.dropAlpha.img;\n    dropColor = images.dropColor.img;\n    console.log('images', images);\n    init();\n  });\n}\n;\n\nfunction init() {\n  canvas = document.getElementById('glcanvas'); // let dpi = window.devicePixelRatio;\n\n  var dpi = 1;\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  canvas.style.width = window.innerWidth + 'px';\n  canvas.style.height = window.innerHeight + 'px';\n  raindrops = new _Raindrop__WEBPACK_IMPORTED_MODULE_3__[\"Raindrops\"](canvas.width, canvas.height, dpi, dropAlpha, dropColor, {\n    trailRate: 1,\n    trailScaleRange: [0.2, 0.45],\n    collisionRadius: 0.45,\n    dropletsCleaningRadiusMultiplier: 0.28\n  });\n  textureFg = Object(_create_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(textureFgSize.width, textureFgSize.height);\n  textureFgCtx = textureFg.getContext('2d');\n  textureBg = Object(_create_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(textureBgSize.width, textureBgSize.height);\n  textureBgCtx = textureBg.getContext('2d');\n  generateTextures(textureRainFg, textureRainBg);\n  renderer = new _rain_renderer__WEBPACK_IMPORTED_MODULE_5__[\"RainRenderer\"](canvas, raindrops.canvas, textureFg, textureBg, null, {\n    brightness: 1.04,\n    alphaMultiply: 6,\n    alphaSubtract: 3\n  });\n  setupEvents();\n}\n\nfunction setupEvents() {\n  setUpResize();\n  setupParallax();\n  setupWeather();\n  setupFlash();\n}\n\nfunction setUpResize() {\n  document.addEventListener('resize', function (event) {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n    canvas.style.width = window.innerWidth + 'px';\n    canvas.style.height = window.innerHeight + 'px';\n  });\n}\n\nfunction setupParallax() {\n  document.addEventListener('mousemove', function (event) {\n    var x = event.pageX;\n    var y = event.pageY;\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(parallax, {\n      duration: 1,\n      x: x / canvas.width * 2 - 1,\n      y: y / canvas.height * 2 - 1,\n      ease: 'power4.out',\n      onUpdate: function onUpdate() {\n        // console.log('x', parallax.x, 'y', parallax.y);\n        renderer.parallaxX = parallax.x;\n        renderer.parallaxY = parallax.y;\n      }\n    });\n  });\n}\n\nfunction setupFlash() {\n  setInterval(function () {\n    if (Object(_random__WEBPACK_IMPORTED_MODULE_6__[\"chance\"])(curWeatherData.flashChance)) {\n      flash(curWeatherData.bg, curWeatherData.fg, curWeatherData.flashBg, curWeatherData.flashFg);\n    }\n  }, 500);\n}\n\nfunction setupWeather() {\n  setupWeatherData();\n  updateWeather();\n}\n\nfunction setupWeatherData() {\n  var defaultWeather = {\n    raining: true,\n    minR: 20,\n    maxR: 50,\n    rainChance: 0.35,\n    rainLimit: 6,\n    dropletsRate: 50,\n    dropletsSize: [3, 5.5],\n    trailRate: 1,\n    trailScaleRange: [0.25, 0.35],\n    fg: textureRainFg,\n    bg: textureRainBg,\n    flashFg: null,\n    flashBg: null,\n    flashChance: 0,\n    collisionRadiusIncrease: 0.0002\n  };\n\n  function weather(data) {\n    return _objectSpread(_objectSpread({}, defaultWeather), data);\n  }\n\n  weatherData = {\n    rain: weather({\n      rainChance: 0.35,\n      dropletsRate: 50,\n      raining: true,\n      // trailRate:2.5,\n      fg: textureRainFg,\n      bg: textureRainBg\n    })\n  };\n}\n\nfunction updateWeather() {\n  curWeatherData = weatherData.rain;\n  raindrops.options = _objectSpread(_objectSpread({}, raindrops.options), curWeatherData);\n  raindrops.clearDrops();\n  gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fromTo(blend, {\n    v: 0\n  }, {\n    duration: 1,\n    v: 1,\n    onUpdate: function onUpdate() {\n      generateTextures(curWeatherData.fg, curWeatherData.bg, blend.v);\n      renderer.updateTextures();\n    }\n  });\n}\n\nfunction flash(baseBg, baseFg, flashBg, flashFg) {\n  var flashValue = {\n    v: 0\n  };\n\n  function transitionFlash(to) {\n    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.025;\n    return new Promise(function (resolve, reject) {\n      gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(flashValue, {\n        duration: t,\n        v: to,\n        ease: 'power4.out',\n        onUpdate: function onUpdate() {\n          generateTextures(baseFg, baseBg);\n          generateTextures(flashFg, flashBg, flashValue.v);\n          renderer.updateTextures();\n        },\n        onComplete: function onComplete() {\n          resolve();\n        }\n      });\n    });\n  }\n\n  var lastFlash = transitionFlash(1);\n  var t = Object(_random__WEBPACK_IMPORTED_MODULE_6__[\"random\"])(2, 7);\n\n  for (var i = 0; i < t; i++) {\n    lastFlash = lastFlash.then(function () {\n      return transitionFlash(Object(_random__WEBPACK_IMPORTED_MODULE_6__[\"random\"])(0.1, 1));\n    });\n  }\n\n  lastFlash = lastFlash.then(function () {\n    return transitionFlash(1, 0.1);\n  }).then(function () {\n    transitionFlash(0, 0.25);\n  });\n}\n\nfunction generateTextures(fg, bg) {\n  var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  textureFgCtx.globalAlpha = alpha;\n  textureFgCtx.drawImage(fg, 0, 0, textureFgSize.width, textureFgSize.height);\n  textureBgCtx.globalAlpha = alpha;\n  textureBgCtx.drawImage(bg, 0, 0, textureBgSize.width, textureBgSize.height);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93ZWJnbC9pbmRleC5qcz9mMDExIl0sIm5hbWVzIjpbInRleHR1cmVSYWluRmciLCJ0ZXh0dXJlUmFpbkJnIiwiZHJvcENvbG9yIiwiZHJvcEFscGhhIiwidGV4dHVyZUZnIiwidGV4dHVyZUZnQ3R4IiwidGV4dHVyZUJnIiwidGV4dHVyZUJnQ3R4IiwidGV4dHVyZUJnU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dHVyZUZnU2l6ZSIsInJhaW5kcm9wcyIsInJlbmRlcmVyIiwiY2FudmFzIiwicGFyYWxsYXgiLCJ4IiwieSIsIndlYXRoZXJEYXRhIiwiY3VyV2VhdGhlckRhdGEiLCJibGVuZCIsInYiLCJsb2FkVGV4dHVyZXMiLCJsb2FkSW1hZ2VzIiwibmFtZSIsInNyYyIsInRoZW4iLCJpbWFnZXMiLCJpbWciLCJjb25zb2xlIiwibG9nIiwiaW5pdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcGkiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsIlJhaW5kcm9wcyIsInRyYWlsUmF0ZSIsInRyYWlsU2NhbGVSYW5nZSIsImNvbGxpc2lvblJhZGl1cyIsImRyb3BsZXRzQ2xlYW5pbmdSYWRpdXNNdWx0aXBsaWVyIiwiY3JlYXRlQ2FudmFzIiwiZ2V0Q29udGV4dCIsImdlbmVyYXRlVGV4dHVyZXMiLCJSYWluUmVuZGVyZXIiLCJicmlnaHRuZXNzIiwiYWxwaGFNdWx0aXBseSIsImFscGhhU3VidHJhY3QiLCJzZXR1cEV2ZW50cyIsInNldFVwUmVzaXplIiwic2V0dXBQYXJhbGxheCIsInNldHVwV2VhdGhlciIsInNldHVwRmxhc2giLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwiZ3NhcCIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwib25VcGRhdGUiLCJwYXJhbGxheFgiLCJwYXJhbGxheFkiLCJzZXRJbnRlcnZhbCIsImNoYW5jZSIsImZsYXNoQ2hhbmNlIiwiZmxhc2giLCJiZyIsImZnIiwiZmxhc2hCZyIsImZsYXNoRmciLCJzZXR1cFdlYXRoZXJEYXRhIiwidXBkYXRlV2VhdGhlciIsImRlZmF1bHRXZWF0aGVyIiwicmFpbmluZyIsIm1pblIiLCJtYXhSIiwicmFpbkNoYW5jZSIsInJhaW5MaW1pdCIsImRyb3BsZXRzUmF0ZSIsImRyb3BsZXRzU2l6ZSIsImNvbGxpc2lvblJhZGl1c0luY3JlYXNlIiwid2VhdGhlciIsImRhdGEiLCJyYWluIiwib3B0aW9ucyIsImNsZWFyRHJvcHMiLCJmcm9tVG8iLCJ1cGRhdGVUZXh0dXJlcyIsImJhc2VCZyIsImJhc2VGZyIsImZsYXNoVmFsdWUiLCJ0cmFuc2l0aW9uRmxhc2giLCJ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbkNvbXBsZXRlIiwibGFzdEZsYXNoIiwicmFuZG9tIiwiaSIsImFscGhhIiwiZ2xvYmFsQWxwaGEiLCJkcmF3SW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGFBQUo7QUFDQSxJQUFJQyxhQUFKO0FBQ0EsSUFBSUMsU0FBSjtBQUNBLElBQUlDLFNBQUo7QUFFQSxJQUFJQyxTQUFKO0FBQ0EsSUFBSUMsWUFBSjtBQUNBLElBQUlDLFNBQUo7QUFDQSxJQUFJQyxZQUFKO0FBRUEsSUFBSUMsYUFBYSxHQUFHO0FBQ2hCQyxPQUFLLEVBQUUsR0FEUztBQUVoQkMsUUFBTSxFQUFFO0FBRlEsQ0FBcEI7QUFLQSxJQUFJQyxhQUFhLEdBQUc7QUFDaEJGLE9BQUssRUFBQyxFQURVO0FBRWhCQyxRQUFNLEVBQUM7QUFGUyxDQUFwQjtBQUtBLElBQUlFLFNBQUo7QUFDQSxJQUFJQyxRQUFKO0FBQ0EsSUFBSUMsTUFBSjtBQUVBLElBQUlDLFFBQVEsR0FBRztBQUFDQyxHQUFDLEVBQUMsQ0FBSDtBQUFPQyxHQUFDLEVBQUM7QUFBVCxDQUFmO0FBRUEsSUFBSUMsV0FB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Q0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUM3RCxhQUFhLENBQUNGLEtBQS9DLEVBQXNERSxhQUFhLENBQUNELE1BQXBFO0FBRUFILGNBQVksQ0FBQ21HLFdBQWIsR0FBMkJELEtBQTNCO0FBQ0FsRyxjQUFZLENBQUNvRyxTQUFiLENBQXVCcEMsRUFBdkIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMvRCxhQUFhLENBQUNDLEtBQS9DLEVBQXNERCxhQUFhLENBQUNFLE1BQXBFO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYmdsL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL2NyZWF0ZS1jYW52YXMnO1xuaW1wb3J0IGxvYWRJbWFnZXMgZnJvbSAnLi9pbWFnZS1sb2FkZXInO1xuaW1wb3J0IHsgUmFpbmRyb3BzIH0gZnJvbSAnLi9SYWluZHJvcCc7XG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcbmltcG9ydCB7IFJhaW5SZW5kZXJlciB9IGZyb20gJy4vcmFpbi1yZW5kZXJlcic7XG5pbXBvcnQgeyByYW5kb20sIGNoYW5jZSB9IGZyb20gJy4vcmFuZG9tJztcblxubGV0IHRleHR1cmVSYWluRmc7XG5sZXQgdGV4dHVyZVJhaW5CZztcbmxldCBkcm9wQ29sb3I7XG5sZXQgZHJvcEFscGhhO1xuXG5sZXQgdGV4dHVyZUZnO1xubGV0IHRleHR1cmVGZ0N0eDtcbmxldCB0ZXh0dXJlQmc7XG5sZXQgdGV4dHVyZUJnQ3R4O1xuXG5sZXQgdGV4dHVyZUJnU2l6ZSA9IHtcbiAgICB3aWR0aDogMzg0LFxuICAgIGhlaWdodDogMjU2LFxufTtcblxubGV0IHRleHR1cmVGZ1NpemUgPSB7XG4gICAgd2lkdGg6OTYsXG4gICAgaGVpZ2h0OjY0LFxufTtcblxubGV0IHJhaW5kcm9wcztcbmxldCByZW5kZXJlcjtcbmxldCBjYW52YXM7XG5cbmxldCBwYXJhbGxheCA9IHt4OjAgLCB5OjB9O1xuXG5sZXQgd2VhdGhlckRhdGEgPSBudWxsO1xubGV0IGN1cldlYXRoZXJEYXRhID0gbnVsbDtcbmxldCBibGVuZCA9IHsgdjogMH07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGV4dHVyZXMoKSB7XG4gICAgbG9hZEltYWdlcyhbXG4gICAgICAgIHsgbmFtZTogJ2Ryb3BBbHBoYScsIHNyYzogJy9pbWFnZXMvd2ViZ2wvZHJvcC1hbHBoYS5wbmcnIH0sXG4gICAgICAgIHsgbmFtZTogJ2Ryb3BDb2xvcicsIHNyYzogJy9pbWFnZXMvd2ViZ2wvZHJvcC1jb2xvci5wbmcnIH0sXG4gICAgICAgIHsgbmFtZTogJ3RleHR1cmVSYWluRmcnLCBzcmM6ICcvaW1hZ2VzL3dlYmdsL3RleHR1cmUtc3VuLWZnLnBuZycgfSxcbiAgICAgICAgeyBuYW1lOiAndGV4dHVyZVJhaW5CZycsIHNyYzogJy9pbWFnZXMvd2ViZ2wvdGV4dHVyZS1zdW4tYmcucG5nJyB9LFxuICAgIF0pLnRoZW4oKGltYWdlcykgPT4ge1xuICAgICAgICB0ZXh0dXJlUmFpbkZnID0gaW1hZ2VzLnRleHR1cmVSYWluRmcuaW1nO1xuICAgICAgICB0ZXh0dXJlUmFpbkJnID0gaW1hZ2VzLnRleHR1cmVSYWluQmcuaW1nO1xuXG4gICAgICAgIGRyb3BBbHBoYSA9IGltYWdlcy5kcm9wQWxwaGEuaW1nO1xuICAgICAgICBkcm9wQ29sb3IgPSBpbWFnZXMuZHJvcENvbG9yLmltZztcblxuICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2VzJywgaW1hZ2VzKTtcbiAgICAgICAgaW5pdCgpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2xjYW52YXMnKTtcbiAgICAvLyBsZXQgZHBpID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgbGV0IGRwaSA9IDE7XG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArICdweCc7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArICdweCc7XG5cbiAgICByYWluZHJvcHMgPSBuZXcgUmFpbmRyb3BzKFxuICAgICAgICBjYW52YXMud2lkdGgsXG4gICAgICAgIGNhbnZhcy5oZWlnaHQsXG4gICAgICAgIGRwaSxcbiAgICAgICAgZHJvcEFscGhhLFxuICAgICAgICBkcm9wQ29sb3IsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRyYWlsUmF0ZTogMSxcbiAgICAgICAgICAgIHRyYWlsU2NhbGVSYW5nZTogWzAuMiwgMC40NV0sXG4gICAgICAgICAgICBjb2xsaXNpb25SYWRpdXM6IDAuNDUsXG4gICAgICAgICAgICBkcm9wbGV0c0NsZWFuaW5nUmFkaXVzTXVsdGlwbGllcjogMC4yOCxcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICB0ZXh0dXJlRmcgPSBjcmVhdGVDYW52YXModGV4dHVyZUZnU2l6ZS53aWR0aCwgdGV4dHVyZUZnU2l6ZS5oZWlnaHQpO1xuICAgIHRleHR1cmVGZ0N0eCA9IHRleHR1cmVGZy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRleHR1cmVCZyA9IGNyZWF0ZUNhbnZhcyh0ZXh0dXJlQmdTaXplLndpZHRoLCB0ZXh0dXJlQmdTaXplLmhlaWdodCk7XG4gICAgdGV4dHVyZUJnQ3R4ID0gdGV4dHVyZUJnLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBnZW5lcmF0ZVRleHR1cmVzKHRleHR1cmVSYWluRmcsIHRleHR1cmVSYWluQmcpO1xuXG4gICAgcmVuZGVyZXIgPSBuZXcgUmFpblJlbmRlcmVyKGNhbnZhcywgcmFpbmRyb3BzLmNhbnZhcywgdGV4dHVyZUZnLCB0ZXh0dXJlQmcsIG51bGwsIHtcbiAgICAgICAgYnJpZ2h0bmVzczogMS4wNCxcbiAgICAgICAgYWxwaGFNdWx0aXBseTogNixcbiAgICAgICAgYWxwaGFTdWJ0cmFjdDogMyxcbiAgICB9KTtcblxuICAgIHNldHVwRXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIHNldHVwRXZlbnRzKCl7XG4gICAgc2V0VXBSZXNpemUoKTtcbiAgICBzZXR1cFBhcmFsbGF4KCk7XG4gICAgc2V0dXBXZWF0aGVyKCk7XG4gICAgc2V0dXBGbGFzaCgpO1xufVxuXG5mdW5jdGlvbiBzZXRVcFJlc2l6ZSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArICdweCc7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldHVwUGFyYWxsYXgoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCB4ID0gZXZlbnQucGFnZVg7XG4gICAgICAgIGxldCB5ID0gZXZlbnQucGFnZVk7XG5cbiAgICAgICAgZ3NhcC50byhwYXJhbGxheCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICB4OiAoKHggLyBjYW52YXMud2lkdGgpICogMikgLSAxLFxuICAgICAgICAgICAgeTogKCh5IC8gY2FudmFzLmhlaWdodCkgKiAyKSAtIDEsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXI0Lm91dCcsXG4gICAgICAgICAgICBvblVwZGF0ZTooKT0+e1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd4JywgcGFyYWxsYXgueCwgJ3knLCBwYXJhbGxheC55KTtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5wYXJhbGxheFggPSBwYXJhbGxheC54O1xuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnBhcmFsbGF4WSA9IHBhcmFsbGF4Lnk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBGbGFzaCgpIHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChjaGFuY2UoY3VyV2VhdGhlckRhdGEuZmxhc2hDaGFuY2UpKSB7XG4gICAgICAgICAgICBmbGFzaChjdXJXZWF0aGVyRGF0YS5iZywgY3VyV2VhdGhlckRhdGEuZmcsIGN1cldlYXRoZXJEYXRhLmZsYXNoQmcsIGN1cldlYXRoZXJEYXRhLmZsYXNoRmcpO1xuICAgICAgICB9XG4gICAgfSwgNTAwKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBXZWF0aGVyKCkge1xuICAgIHNldHVwV2VhdGhlckRhdGEoKTtcbiAgICB1cGRhdGVXZWF0aGVyKCk7XG59XG5cbmZ1bmN0aW9uIHNldHVwV2VhdGhlckRhdGEoKSB7XG4gICAgbGV0IGRlZmF1bHRXZWF0aGVyID0ge1xuICAgICAgICByYWluaW5nOiB0cnVlLFxuICAgICAgICBtaW5SOiAyMCxcbiAgICAgICAgbWF4UjogNTAsXG4gICAgICAgIHJhaW5DaGFuY2U6IDAuMzUsXG4gICAgICAgIHJhaW5MaW1pdDogNixcbiAgICAgICAgZHJvcGxldHNSYXRlOjUwLFxuICAgICAgICBkcm9wbGV0c1NpemU6WzMsNS41XSxcbiAgICAgICAgdHJhaWxSYXRlOjEsXG4gICAgICAgIHRyYWlsU2NhbGVSYW5nZTpbMC4yNSwwLjM1XSxcbiAgICAgICAgZmc6IHRleHR1cmVSYWluRmcsXG4gICAgICAgIGJnOiB0ZXh0dXJlUmFpbkJnLFxuICAgICAgICBmbGFzaEZnOiBudWxsLFxuICAgICAgICBmbGFzaEJnOiBudWxsLFxuICAgICAgICBmbGFzaENoYW5jZTogMCxcbiAgICAgICAgY29sbGlzaW9uUmFkaXVzSW5jcmVhc2U6IDAuMDAwMixcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gd2VhdGhlcihkYXRhKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0V2VhdGhlcixcbiAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3ZWF0aGVyRGF0YSA9IHtcbiAgICAgICAgcmFpbjogd2VhdGhlcih7XG4gICAgICAgICAgICByYWluQ2hhbmNlOjAuMzUsXG4gICAgICAgICAgICBkcm9wbGV0c1JhdGU6NTAsXG4gICAgICAgICAgICByYWluaW5nOnRydWUsXG4gICAgICAgICAgICAvLyB0cmFpbFJhdGU6Mi41LFxuICAgICAgICAgICAgZmc6dGV4dHVyZVJhaW5GZyxcbiAgICAgICAgICAgIGJnOnRleHR1cmVSYWluQmdcbiAgICAgICAgfSksXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlV2VhdGhlcigpIHtcbiAgICBjdXJXZWF0aGVyRGF0YSA9IHdlYXRoZXJEYXRhLnJhaW47XG4gICAgcmFpbmRyb3BzLm9wdGlvbnMgPSB7XG4gICAgICAgIC4uLnJhaW5kcm9wcy5vcHRpb25zLFxuICAgICAgICAuLi5jdXJXZWF0aGVyRGF0YSxcbiAgICB9O1xuICAgIHJhaW5kcm9wcy5jbGVhckRyb3BzKCk7XG5cbiAgICBnc2FwLmZyb21UbyhibGVuZCwge1xuICAgICAgICB2OiAwLFxuICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIHY6MSxcbiAgICAgICAgb25VcGRhdGU6ICgpID0+IHtcbiAgICAgICAgICAgIGdlbmVyYXRlVGV4dHVyZXMoY3VyV2VhdGhlckRhdGEuZmcsIGN1cldlYXRoZXJEYXRhLmJnLCBibGVuZC52KTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnVwZGF0ZVRleHR1cmVzKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZmxhc2goYmFzZUJnLCBiYXNlRmcsIGZsYXNoQmcsIGZsYXNoRmcpIHtcbiAgICBsZXQgZmxhc2hWYWx1ZSA9IHsgdjowIH07XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbkZsYXNoKHRvLCB0ID0gMC4wMjUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGdzYXAudG8oZmxhc2hWYWx1ZSwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0LFxuICAgICAgICAgICAgICAgIHY6dG8sXG4gICAgICAgICAgICAgICAgZWFzZTogJ3Bvd2VyNC5vdXQnLFxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlVGV4dHVyZXMoYmFzZUZnLCBiYXNlQmcpO1xuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVRleHR1cmVzKGZsYXNoRmcsIGZsYXNoQmcsIGZsYXNoVmFsdWUudik7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnVwZGF0ZVRleHR1cmVzKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGxhc3RGbGFzaCA9IHRyYW5zaXRpb25GbGFzaCgxKTtcbiAgICBjb25zdCB0ID0gcmFuZG9tKDIsIDcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdDsgaSsrKSB7XG4gICAgICAgIGxhc3RGbGFzaCA9IGxhc3RGbGFzaC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uRmxhc2gocmFuZG9tKDAuMSwgMSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGFzdEZsYXNoID0gbGFzdEZsYXNoLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHJhbnNpdGlvbkZsYXNoKDEsIDAuMSk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRyYW5zaXRpb25GbGFzaCgwLCAwLjI1KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUZXh0dXJlcyhmZywgYmcsIGFscGhhID0gMSl7XG4gICAgdGV4dHVyZUZnQ3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gICAgdGV4dHVyZUZnQ3R4LmRyYXdJbWFnZShmZywgMCwgMCwgdGV4dHVyZUZnU2l6ZS53aWR0aCwgdGV4dHVyZUZnU2l6ZS5oZWlnaHQpO1xuICBcbiAgICB0ZXh0dXJlQmdDdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgICB0ZXh0dXJlQmdDdHguZHJhd0ltYWdlKGJnLCAwLCAwLCB0ZXh0dXJlQmdTaXplLndpZHRoLCB0ZXh0dXJlQmdTaXplLmhlaWdodCk7XG4gIH1cbiAgXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/webgl/index.js\n");

/***/ })

})