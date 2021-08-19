webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/webgl/index.js":
/*!***********************************!*\
  !*** ./components/webgl/index.js ***!
  \***********************************/
/*! exports provided: loadTextures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTextures\", function() { return loadTextures; });\n/* harmony import */ var _Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _create_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-canvas */ \"./components/webgl/create-canvas.js\");\n/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-loader */ \"./components/webgl/image-loader.js\");\n/* harmony import */ var _Raindrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Raindrop */ \"./components/webgl/Raindrop.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _rain_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rain-renderer */ \"./components/webgl/rain-renderer.js\");\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random */ \"./components/webgl/random.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_francistao_Documents_git_my_github_pages_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar textureRainFg;\nvar textureRainBg;\nvar dropColor;\nvar dropAlpha;\nvar textureFg;\nvar textureFgCtx;\nvar textureBg;\nvar textureBgCtx;\nvar textureBgSize = {\n  // width: 384,\n  // height: 256,\n  width: 853,\n  height: 1280\n};\nvar textureFgSize = {\n  // width:96,\n  // height:64,\n  width: 341,\n  height: 512\n};\nvar raindrops;\nvar renderer;\nvar canvas;\nvar parallax = {\n  x: 0,\n  y: 0\n};\nvar weatherData = null;\nvar curWeatherData = null;\nvar blend = {\n  v: 0\n};\nfunction loadTextures() {\n  Object(_image_loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([{\n    name: 'dropAlpha',\n    src: '/images/webgl/drop-alpha.png'\n  }, {\n    name: 'dropColor',\n    src: '/images/webgl/drop-color.png'\n  }, {\n    name: 'textureRainFg',\n    src: '/images/webgl/flower-mini.jpeg'\n  }, {\n    name: 'textureRainBg',\n    src: '/images/webgl/flower.jpeg'\n  } // { name: 'textureRainFg', src: '/images/webgl/texture-sun-fg.png' },\n  // { name: 'textureRainBg', src: '/images/webgl/texture-sun-bg.png' },\n  // { name: 'textureRainFg', src: '/images/webgl/rome-1.jpeg' },\n  // { name: 'textureRainBg', src: '/images/webgl/rome-1.jpeg' },\n  ]).then(function (images) {\n    textureRainFg = images.textureRainFg.img;\n    textureRainBg = images.textureRainBg.img;\n    dropAlpha = images.dropAlpha.img;\n    dropColor = images.dropColor.img;\n    init();\n  });\n}\n;\n\nfunction init() {\n  canvas = document.getElementById('glcanvas'); // let dpi = window.devicePixelRatio;\n\n  var dpi = 1;\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  raindrops = new _Raindrop__WEBPACK_IMPORTED_MODULE_3__[\"Raindrops\"](canvas.width, canvas.height, dpi, dropAlpha, dropColor, {\n    trailRate: 1,\n    trailScaleRange: [0.2, 0.45],\n    collisionRadius: 0.45,\n    dropletsCleaningRadiusMultiplier: 0.28\n  });\n  textureFg = Object(_create_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(textureFgSize.width, textureFgSize.height);\n  textureFgCtx = textureFg.getContext('2d');\n  textureBg = Object(_create_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(textureBgSize.width, textureBgSize.height);\n  textureBgCtx = textureBg.getContext('2d');\n  generateTextures(textureRainFg, textureRainBg);\n  renderer = new _rain_renderer__WEBPACK_IMPORTED_MODULE_5__[\"RainRenderer\"](canvas, raindrops.canvas, textureFg, textureBg, null, {\n    brightness: 1.04,\n    alphaMultiply: 6,\n    alphaSubtract: 3\n  });\n  setupEvents();\n}\n\nfunction setupEvents() {\n  setUpResize();\n  setupParallax();\n  setupWeather(); // setupFlash();\n}\n\nfunction setUpResize() {\n  window.addEventListener('resize', function (event) {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n    renderer.resize();\n    raindrops.onResize();\n  });\n}\n\nfunction setupParallax() {\n  document.addEventListener('mousemove', function (event) {\n    var x = event.pageX;\n    var y = event.pageY;\n    gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(parallax, {\n      duration: 1,\n      x: x / canvas.width * 2 - 1,\n      y: y / canvas.height * 2 - 1,\n      ease: 'power4.out',\n      onUpdate: function onUpdate() {\n        renderer.parallaxX = parallax.x;\n        renderer.parallaxY = parallax.y;\n      }\n    });\n  });\n} // function setupFlash() {\n//     setInterval(() => {\n//         if (chance(curWeatherData.flashChance)) {\n//             flash(curWeatherData.bg, curWeatherData.fg, curWeatherData.flashBg, curWeatherData.flashFg);\n//         }\n//     }, 500);\n// }\n\n\nfunction setupWeather() {\n  setupWeatherData();\n  updateWeather();\n}\n\nfunction setupWeatherData() {\n  var defaultWeather = {\n    raining: true,\n    minR: 20,\n    maxR: 50,\n    rainChance: 0.35,\n    rainLimit: 6,\n    dropletsRate: 50,\n    dropletsSize: [3, 5.5],\n    trailRate: 1,\n    trailScaleRange: [0.25, 0.35],\n    fg: textureRainFg,\n    bg: textureRainBg,\n    flashFg: null,\n    flashBg: null,\n    flashChance: 0,\n    collisionRadiusIncrease: 0.0002\n  };\n\n  function weather(data) {\n    return _objectSpread(_objectSpread({}, defaultWeather), data);\n  }\n\n  weatherData = {\n    rain: weather({\n      rainChance: 0.35,\n      dropletsRate: 50,\n      raining: true,\n      fg: textureRainFg,\n      bg: textureRainBg\n    }),\n    drizzle: weather({\n      minR: 10,\n      maxR: 40,\n      rainChance: 0.15,\n      rainLimit: 2,\n      dropletsRate: 10,\n      dropletsSize: [3.5, 6],\n      fg: textureRainFg,\n      bg: textureRainBg\n    })\n  };\n}\n\nfunction updateWeather() {\n  curWeatherData = weatherData.drizzle;\n  raindrops.options = _objectSpread(_objectSpread({}, raindrops.options), curWeatherData);\n  raindrops.clearDrops();\n  gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fromTo(blend, {\n    v: 0\n  }, {\n    duration: 1,\n    v: 1,\n    onUpdate: function onUpdate() {\n      generateTextures(curWeatherData.fg, curWeatherData.bg, blend.v);\n      renderer.updateTextures();\n    }\n  });\n}\n\nfunction flash(baseBg, baseFg, flashBg, flashFg) {\n  var flashValue = {\n    v: 0\n  };\n\n  function transitionFlash(to) {\n    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.025;\n    return new Promise(function (resolve, reject) {\n      gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].to(flashValue, {\n        duration: t,\n        v: to,\n        ease: 'power4.out',\n        onUpdate: function onUpdate() {\n          generateTextures(baseFg, baseBg);\n          generateTextures(flashFg, flashBg, flashValue.v);\n          renderer.updateTextures();\n        },\n        onComplete: function onComplete() {\n          resolve();\n        }\n      });\n    });\n  }\n\n  var lastFlash = transitionFlash(1);\n  var t = Object(_random__WEBPACK_IMPORTED_MODULE_6__[\"random\"])(2, 7);\n\n  for (var i = 0; i < t; i++) {\n    lastFlash = lastFlash.then(function () {\n      return transitionFlash(Object(_random__WEBPACK_IMPORTED_MODULE_6__[\"random\"])(0.1, 1));\n    });\n  }\n\n  lastFlash = lastFlash.then(function () {\n    return transitionFlash(1, 0.1);\n  }).then(function () {\n    transitionFlash(0, 0.25);\n  });\n}\n\nfunction generateTextures(fg, bg) {\n  var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  textureFgCtx.globalAlpha = alpha;\n  textureFgCtx.drawImage(fg, 0, 0, textureFgSize.width, textureFgSize.height);\n  textureBgCtx.globalAlpha = alpha;\n  textureBgCtx.drawImage(bg, 0, 0, textureBgSize.width, textureBgSize.height);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93ZWJnbC9pbmRleC5qcz9mMDExIl0sIm5hbWVzIjpbInRleHR1cmVSYWluRmciLCJ0ZXh0dXJlUmFpbkJnIiwiZHJvcENvbG9yIiwiZHJvcEFscGhhIiwidGV4dHVyZUZnIiwidGV4dHVyZUZnQ3R4IiwidGV4dHVyZUJnIiwidGV4dHVyZUJnQ3R4IiwidGV4dHVyZUJnU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dHVyZUZnU2l6ZSIsInJhaW5kcm9wcyIsInJlbmRlcmVyIiwiY2FudmFzIiwicGFyYWxsYXgiLCJ4IiwieSIsIndlYXRoZXJEYXRhIiwiY3VyV2VhdGhlckRhdGEiLCJibGVuZCIsInYiLCJsb2FkVGV4dHVyZXMiLCJsb2FkSW1hZ2VzIiwibmFtZSIsInNyYyIsInRoZW4iLCJpbWFnZXMiLCJpbWciLCJpbml0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRwaSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIlJhaW5kcm9wcyIsInRyYWlsUmF0ZSIsInRyYWlsU2NhbGVSYW5nZSIsImNvbGxpc2lvblJhZGl1cyIsImRyb3BsZXRzQ2xlYW5pbmdSYWRpdXNNdWx0aXBsaWVyIiwiY3JlYXRlQ2FudmFzIiwiZ2V0Q29udGV4dCIsImdlbmVyYXRlVGV4dHVyZXMiLCJSYWluUmVuZGVyZXIiLCJicmlnaHRuZXNzIiwiYWxwaGFNdWx0aXBseSIsImFscGhhU3VidHJhY3QiLCJzZXR1cEV2ZW50cyIsInNldFVwUmVzaXplIiwic2V0dXBQYXJhbGxheCIsInNldHVwV2VhdGhlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInJlc2l6ZSIsIm9uUmVzaXplIiwicGFnZVgiLCJwYWdlWSIsImdzYXAiLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsIm9uVXBkYXRlIiwicGFyYWxsYXhYIiwicGFyYWxsYXhZIiwic2V0dXBXZWF0aGVyRGF0YSIsInVwZGF0ZVdlYXRoZXIiLCJkZWZhdWx0V2VhdGhlciIsInJhaW5pbmciLCJtaW5SIiwibWF4UiIsInJhaW5DaGFuY2UiLCJyYWluTGltaXQiLCJkcm9wbGV0c1JhdGUiLCJkcm9wbGV0c1NpemUiLCJmZyIsImJnIiwiZmxhc2hGZyIsImZsYXNoQmciLCJmbGFzaENoYW5jZSIsImNvbGxpc2lvblJhZGl1c0luY3JlYXNlIiwid2VhdGhlciIsImRhdGEiLCJyYWluIiwiZHJpenpsZSIsIm9wdGlvbnMiLCJjbGVhckRyb3BzIiwiZnJvbVRvIiwidXBkYXRlVGV4dHVyZXMiLCJmbGFzaCIsImJhc2VCZyIsImJhc2VGZyIsImZsYXNoVmFsdWUiLCJ0cmFuc2l0aW9uRmxhc2giLCJ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbkNvbXBsZXRlIiwibGFzdEZsYXNoIiwicmFuZG9tIiwiaSIsImFscGhhIiwiZ2xvYmFsQWxwaGEiLCJkcmF3SW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGFBQUo7QUFDQSxJQUFJQyxhQUFKO0FBQ0EsSUFBSUMsU0FBSjtBQUNBLElBQUlDLFNBQUo7QUFFQSxJQUFJQyxTQUFKO0FBQ0EsSUFBSUMsWUFBSjtBQUNBLElBQUlDLFNBQUo7QUFDQSxJQUFJQyxZQUFKO0FBRUEsSUFBSUMsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQUMsT0FBSyxFQUFFLEdBSFM7QUFJaEJDLFFBQU0sRUFBRTtBQUpRLENBQXBCO0FBT0EsSUFBSUMsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQUYsT0FBSyxFQUFFLEdBSFM7QUFJaEJDLFFBQU0sRUFBRTtBQUpRLENBQXBCO0FBT0EsSUFBSUUsU0FBSjtBQUNBLElBQUlDLFFBQUo7QUFDQSxJQUFJQyxNQUFKO0FBRUEsSUFBSUMsUUFBUSxHQUFHO0FBQUNDLEdBQUMsRUFBQyxDQUFIO0FBQU9DLEdBQUMsRUFBQztBQUFULENBQWY7QUFFQSxJQUFJQyxXQUFXLEdBQUcsSUFB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b250ZW50IjpbImltcG9ydCBjcmVhdGVDYW52YXMgZnJvbSAnLi9jcmVhdGUtY2FudmFzJztcbmltcG9ydCBsb2FkSW1hZ2VzIGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcbmltcG9ydCB7IFJhaW5kcm9wcyB9IGZyb20gJy4vUmFpbmRyb3AnO1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyBSYWluUmVuZGVyZXIgfSBmcm9tICcuL3JhaW4tcmVuZGVyZXInO1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi9yYW5kb20nO1xuXG5sZXQgdGV4dHVyZVJhaW5GZztcbmxldCB0ZXh0dXJlUmFpbkJnO1xubGV0IGRyb3BDb2xvcjtcbmxldCBkcm9wQWxwaGE7XG5cbmxldCB0ZXh0dXJlRmc7XG5sZXQgdGV4dHVyZUZnQ3R4O1xubGV0IHRleHR1cmVCZztcbmxldCB0ZXh0dXJlQmdDdHg7XG5cbmxldCB0ZXh0dXJlQmdTaXplID0ge1xuICAgIC8vIHdpZHRoOiAzODQsXG4gICAgLy8gaGVpZ2h0OiAyNTYsXG4gICAgd2lkdGg6IDg1MyxcbiAgICBoZWlnaHQ6IDEyODAsXG59O1xuXG5sZXQgdGV4dHVyZUZnU2l6ZSA9IHtcbiAgICAvLyB3aWR0aDo5NixcbiAgICAvLyBoZWlnaHQ6NjQsXG4gICAgd2lkdGg6IDM0MSxcbiAgICBoZWlnaHQ6IDUxMixcbn07XG5cbmxldCByYWluZHJvcHM7XG5sZXQgcmVuZGVyZXI7XG5sZXQgY2FudmFzO1xuXG5sZXQgcGFyYWxsYXggPSB7eDowICwgeTowfTtcblxubGV0IHdlYXRoZXJEYXRhID0gbnVsbDtcbmxldCBjdXJXZWF0aGVyRGF0YSA9IG51bGw7XG5sZXQgYmxlbmQgPSB7IHY6IDB9O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRleHR1cmVzKCkge1xuICAgIGxvYWRJbWFnZXMoW1xuICAgICAgICB7IG5hbWU6ICdkcm9wQWxwaGEnLCBzcmM6ICcvaW1hZ2VzL3dlYmdsL2Ryb3AtYWxwaGEucG5nJyB9LFxuICAgICAgICB7IG5hbWU6ICdkcm9wQ29sb3InLCBzcmM6ICcvaW1hZ2VzL3dlYmdsL2Ryb3AtY29sb3IucG5nJyB9LFxuXG4gICAgICAgIHsgbmFtZTogJ3RleHR1cmVSYWluRmcnLCBzcmM6ICcvaW1hZ2VzL3dlYmdsL2Zsb3dlci1taW5pLmpwZWcnIH0sXG4gICAgICAgIHsgbmFtZTogJ3RleHR1cmVSYWluQmcnLCBzcmM6ICcvaW1hZ2VzL3dlYmdsL2Zsb3dlci5qcGVnJyB9LFxuXG4gICAgICAgIC8vIHsgbmFtZTogJ3RleHR1cmVSYWluRmcnLCBzcmM6ICcvaW1hZ2VzL3dlYmdsL3RleHR1cmUtc3VuLWZnLnBuZycgfSxcbiAgICAgICAgLy8geyBuYW1lOiAndGV4dHVyZVJhaW5CZycsIHNyYzogJy9pbWFnZXMvd2ViZ2wvdGV4dHVyZS1zdW4tYmcucG5nJyB9LFxuXG4gICAgICAgIC8vIHsgbmFtZTogJ3RleHR1cmVSYWluRmcnLCBzcmM6ICcvaW1hZ2VzL3dlYmdsL3JvbWUtMS5qcGVnJyB9LFxuICAgICAgICAvLyB7IG5hbWU6ICd0ZXh0dXJlUmFpbkJnJywgc3JjOiAnL2ltYWdlcy93ZWJnbC9yb21lLTEuanBlZycgfSxcbiAgICBdKS50aGVuKChpbWFnZXMpID0+IHtcbiAgICAgICAgdGV4dHVyZVJhaW5GZyA9IGltYWdlcy50ZXh0dXJlUmFpbkZnLmltZztcbiAgICAgICAgdGV4dHVyZVJhaW5CZyA9IGltYWdlcy50ZXh0dXJlUmFpbkJnLmltZztcblxuICAgICAgICBkcm9wQWxwaGEgPSBpbWFnZXMuZHJvcEFscGhhLmltZztcbiAgICAgICAgZHJvcENvbG9yID0gaW1hZ2VzLmRyb3BDb2xvci5pbWc7XG5cbiAgICAgICAgaW5pdCgpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2xjYW52YXMnKTtcbiAgICAvLyBsZXQgZHBpID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgbGV0IGRwaSA9IDE7XG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIHJhaW5kcm9wcyA9IG5ldyBSYWluZHJvcHMoXG4gICAgICAgIGNhbnZhcy53aWR0aCxcbiAgICAgICAgY2FudmFzLmhlaWdodCxcbiAgICAgICAgZHBpLFxuICAgICAgICBkcm9wQWxwaGEsXG4gICAgICAgIGRyb3BDb2xvcixcbiAgICAgICAge1xuICAgICAgICAgICAgdHJhaWxSYXRlOiAxLFxuICAgICAgICAgICAgdHJhaWxTY2FsZVJhbmdlOiBbMC4yLCAwLjQ1XSxcbiAgICAgICAgICAgIGNvbGxpc2lvblJhZGl1czogMC40NSxcbiAgICAgICAgICAgIGRyb3BsZXRzQ2xlYW5pbmdSYWRpdXNNdWx0aXBsaWVyOiAwLjI4LFxuICAgICAgICB9XG4gICAgKTtcblxuICAgIHRleHR1cmVGZyA9IGNyZWF0ZUNhbnZhcyh0ZXh0dXJlRmdTaXplLndpZHRoLCB0ZXh0dXJlRmdTaXplLmhlaWdodCk7XG4gICAgdGV4dHVyZUZnQ3R4ID0gdGV4dHVyZUZnLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGV4dHVyZUJnID0gY3JlYXRlQ2FudmFzKHRleHR1cmVCZ1NpemUud2lkdGgsIHRleHR1cmVCZ1NpemUuaGVpZ2h0KTtcbiAgICB0ZXh0dXJlQmdDdHggPSB0ZXh0dXJlQmcuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGdlbmVyYXRlVGV4dHVyZXModGV4dHVyZVJhaW5GZywgdGV4dHVyZVJhaW5CZyk7XG5cbiAgICByZW5kZXJlciA9IG5ldyBSYWluUmVuZGVyZXIoY2FudmFzLCByYWluZHJvcHMuY2FudmFzLCB0ZXh0dXJlRmcsIHRleHR1cmVCZywgbnVsbCwge1xuICAgICAgICBicmlnaHRuZXNzOiAxLjA0LFxuICAgICAgICBhbHBoYU11bHRpcGx5OiA2LFxuICAgICAgICBhbHBoYVN1YnRyYWN0OiAzLFxuICAgIH0pO1xuXG4gICAgc2V0dXBFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBFdmVudHMoKXtcbiAgICBzZXRVcFJlc2l6ZSgpO1xuICAgIHNldHVwUGFyYWxsYXgoKTtcbiAgICBzZXR1cFdlYXRoZXIoKTtcbiAgICAvLyBzZXR1cEZsYXNoKCk7XG59XG5cbmZ1bmN0aW9uIHNldFVwUmVzaXplKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHJlbmRlcmVyLnJlc2l6ZSgpO1xuICAgICAgICByYWluZHJvcHMub25SZXNpemUoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBQYXJhbGxheCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHggPSBldmVudC5wYWdlWDtcbiAgICAgICAgbGV0IHkgPSBldmVudC5wYWdlWTtcblxuICAgICAgICBnc2FwLnRvKHBhcmFsbGF4LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgIHg6ICgoeCAvIGNhbnZhcy53aWR0aCkgKiAyKSAtIDEsXG4gICAgICAgICAgICB5OiAoKHkgLyBjYW52YXMuaGVpZ2h0KSAqIDIpIC0gMSxcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjQub3V0JyxcbiAgICAgICAgICAgIG9uVXBkYXRlOigpPT57XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucGFyYWxsYXhYID0gcGFyYWxsYXgueDtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5wYXJhbGxheFkgPSBwYXJhbGxheC55O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8vIGZ1bmN0aW9uIHNldHVwRmxhc2goKSB7XG4vLyAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuLy8gICAgICAgICBpZiAoY2hhbmNlKGN1cldlYXRoZXJEYXRhLmZsYXNoQ2hhbmNlKSkge1xuLy8gICAgICAgICAgICAgZmxhc2goY3VyV2VhdGhlckRhdGEuYmcsIGN1cldlYXRoZXJEYXRhLmZnLCBjdXJXZWF0aGVyRGF0YS5mbGFzaEJnLCBjdXJXZWF0aGVyRGF0YS5mbGFzaEZnKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0sIDUwMCk7XG4vLyB9XG5cbmZ1bmN0aW9uIHNldHVwV2VhdGhlcigpIHtcbiAgICBzZXR1cFdlYXRoZXJEYXRhKCk7XG4gICAgdXBkYXRlV2VhdGhlcigpO1xufVxuXG5mdW5jdGlvbiBzZXR1cFdlYXRoZXJEYXRhKCkge1xuICAgIGxldCBkZWZhdWx0V2VhdGhlciA9IHtcbiAgICAgICAgcmFpbmluZzogdHJ1ZSxcbiAgICAgICAgbWluUjogMjAsXG4gICAgICAgIG1heFI6IDUwLFxuICAgICAgICByYWluQ2hhbmNlOiAwLjM1LFxuICAgICAgICByYWluTGltaXQ6IDYsXG4gICAgICAgIGRyb3BsZXRzUmF0ZTo1MCxcbiAgICAgICAgZHJvcGxldHNTaXplOlszLDUuNV0sXG4gICAgICAgIHRyYWlsUmF0ZToxLFxuICAgICAgICB0cmFpbFNjYWxlUmFuZ2U6WzAuMjUsMC4zNV0sXG4gICAgICAgIGZnOiB0ZXh0dXJlUmFpbkZnLFxuICAgICAgICBiZzogdGV4dHVyZVJhaW5CZyxcbiAgICAgICAgZmxhc2hGZzogbnVsbCxcbiAgICAgICAgZmxhc2hCZzogbnVsbCxcbiAgICAgICAgZmxhc2hDaGFuY2U6IDAsXG4gICAgICAgIGNvbGxpc2lvblJhZGl1c0luY3JlYXNlOiAwLjAwMDIsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHdlYXRoZXIoZGF0YSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZGVmYXVsdFdlYXRoZXIsXG4gICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2VhdGhlckRhdGEgPSB7XG4gICAgICAgIHJhaW46IHdlYXRoZXIoe1xuICAgICAgICAgICAgcmFpbkNoYW5jZTowLjM1LFxuICAgICAgICAgICAgZHJvcGxldHNSYXRlOjUwLFxuICAgICAgICAgICAgcmFpbmluZzp0cnVlLFxuICAgICAgICAgICAgZmc6dGV4dHVyZVJhaW5GZyxcbiAgICAgICAgICAgIGJnOnRleHR1cmVSYWluQmdcbiAgICAgICAgfSksXG4gICAgICAgIGRyaXp6bGU6IHdlYXRoZXIoe1xuICAgICAgICAgICAgbWluUjoxMCxcbiAgICAgICAgICAgIG1heFI6NDAsXG4gICAgICAgICAgICByYWluQ2hhbmNlOjAuMTUsXG4gICAgICAgICAgICByYWluTGltaXQ6MixcbiAgICAgICAgICAgIGRyb3BsZXRzUmF0ZToxMCxcbiAgICAgICAgICAgIGRyb3BsZXRzU2l6ZTpbMy41LDZdLFxuICAgICAgICAgICAgZmc6dGV4dHVyZVJhaW5GZyxcbiAgICAgICAgICAgIGJnOnRleHR1cmVSYWluQmdcbiAgICAgICAgfSksXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlV2VhdGhlcigpIHtcbiAgICBjdXJXZWF0aGVyRGF0YSA9IHdlYXRoZXJEYXRhLmRyaXp6bGU7XG4gICAgcmFpbmRyb3BzLm9wdGlvbnMgPSB7XG4gICAgICAgIC4uLnJhaW5kcm9wcy5vcHRpb25zLFxuICAgICAgICAuLi5jdXJXZWF0aGVyRGF0YSxcbiAgICB9O1xuICAgIHJhaW5kcm9wcy5jbGVhckRyb3BzKCk7XG5cbiAgICBnc2FwLmZyb21UbyhibGVuZCwge1xuICAgICAgICB2OiAwLFxuICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIHY6MSxcbiAgICAgICAgb25VcGRhdGU6ICgpID0+IHtcbiAgICAgICAgICAgIGdlbmVyYXRlVGV4dHVyZXMoY3VyV2VhdGhlckRhdGEuZmcsIGN1cldlYXRoZXJEYXRhLmJnLCBibGVuZC52KTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnVwZGF0ZVRleHR1cmVzKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZmxhc2goYmFzZUJnLCBiYXNlRmcsIGZsYXNoQmcsIGZsYXNoRmcpIHtcbiAgICBsZXQgZmxhc2hWYWx1ZSA9IHsgdjowIH07XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbkZsYXNoKHRvLCB0ID0gMC4wMjUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGdzYXAudG8oZmxhc2hWYWx1ZSwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0LFxuICAgICAgICAgICAgICAgIHY6dG8sXG4gICAgICAgICAgICAgICAgZWFzZTogJ3Bvd2VyNC5vdXQnLFxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlVGV4dHVyZXMoYmFzZUZnLCBiYXNlQmcpO1xuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVRleHR1cmVzKGZsYXNoRmcsIGZsYXNoQmcsIGZsYXNoVmFsdWUudik7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnVwZGF0ZVRleHR1cmVzKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGxhc3RGbGFzaCA9IHRyYW5zaXRpb25GbGFzaCgxKTtcbiAgICBjb25zdCB0ID0gcmFuZG9tKDIsIDcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdDsgaSsrKSB7XG4gICAgICAgIGxhc3RGbGFzaCA9IGxhc3RGbGFzaC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uRmxhc2gocmFuZG9tKDAuMSwgMSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGFzdEZsYXNoID0gbGFzdEZsYXNoLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHJhbnNpdGlvbkZsYXNoKDEsIDAuMSk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRyYW5zaXRpb25GbGFzaCgwLCAwLjI1KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUZXh0dXJlcyhmZywgYmcsIGFscGhhID0gMSl7XG4gICAgdGV4dHVyZUZnQ3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gICAgdGV4dHVyZUZnQ3R4LmRyYXdJbWFnZShmZywgMCwgMCwgdGV4dHVyZUZnU2l6ZS53aWR0aCwgdGV4dHVyZUZnU2l6ZS5oZWlnaHQpO1xuICBcbiAgICB0ZXh0dXJlQmdDdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgICB0ZXh0dXJlQmdDdHguZHJhd0ltYWdlKGJnLCAwLCAwLCB0ZXh0dXJlQmdTaXplLndpZHRoLCB0ZXh0dXJlQmdTaXplLmhlaWdodCk7XG4gIH1cbiAgXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/webgl/index.js\n");

/***/ })

})