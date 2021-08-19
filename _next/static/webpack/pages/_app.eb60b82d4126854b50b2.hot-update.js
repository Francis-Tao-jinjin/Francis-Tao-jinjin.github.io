webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/webgl/webgl.js":
/*!***********************************!*\
  !*** ./components/webgl/webgl.js ***!
  \***********************************/
/*! exports provided: getContext, createProgram, createShader, createTexture, createUniform, activeTexture, updateTexture, setRectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getContext\", function() { return getContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProgram\", function() { return createProgram; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createShader\", function() { return createShader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTexture\", function() { return createTexture; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUniform\", function() { return createUniform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activeTexture\", function() { return activeTexture; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTexture\", function() { return updateTexture; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setRectangle\", function() { return setRectangle; });\nfunction getContext(canvas) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var contexts = ['webgl', 'experimental-webgl'];\n  var context = null;\n  contexts.some(function (name) {\n    try {\n      context = canvas.getContext(name, options);\n    } catch (e) {\n      console.error(e);\n    }\n\n    return context !== null;\n  });\n\n  if (context === null) {\n    document.body.classList.add('no-webgl');\n  }\n\n  return context;\n}\nfunction createProgram(gl, vertexScript, fragScript) {\n  var vertexShader = createShader(gl, vertexScript, gl.VERTEX_SHADER);\n  var fragShader = createShader(gl, fragScript, gl.FRAGMENT_SHADER);\n  var program = gl.createProgram();\n  gl.attachShader(program, vertexShader);\n  gl.attachShader(program, fragShader);\n  gl.linkProgram(program);\n  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);\n\n  if (!linked) {\n    var lastError = gl.getProgramInfoLog(program);\n    console.error('Error in program linking: ' + lastError);\n    gl.deleteProgram(program);\n    return null;\n  } // let positionLocation = gl.getAttribLocation(program, 'a_position');\n  // // let texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');\n  // var buffer = gl.createBuffer();\n  // gl.bindBuffer(gl.ARRAY_BUFFER, buffer);\n  // // let textCoordBuffer = gl.createBuffer();\n  // // gl.bindBuffer(gl.ARRAY_BUFFER, textCoordBuffer);\n  // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([\n  //     -1.0, -1.0,\n  //     1.0, -1.0,\n  //     -1.0,  1.0,\n  //     -1.0,  1.0,\n  //     1.0, -1.0,\n  //     1.0,  1.0\n  // ]), gl.STATIC_DRAW);\n  // gl.enableVertexAttribArray(positionLocation);\n  // // gl.enableVertexAttribArray(texCoordLocation);\n  // // gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);\n  // // Create a buffer for the position of the rectangle corners.\n  // // var buffer = gl.createBuffer();\n  // // gl.bindBuffer(gl.ARRAY_BUFFER, buffer);\n  // // gl.enableVertexAttribArray(positionLocation);\n  // gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);\n\n\n  var positionLocation = gl.getAttribLocation(program, \"a_position\");\n  var texCoordLocation = gl.getAttribLocation(program, \"a_texCoord\");\n  var texCoordBuffer = gl.createBuffer();\n  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);\n  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0]), gl.STATIC_DRAW);\n  gl.enableVertexAttribArray(texCoordLocation);\n  gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0); // Create a buffer for the position of the rectangle corners.\n\n  var buffer = gl.createBuffer();\n  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);\n  gl.enableVertexAttribArray(positionLocation);\n  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);\n  return program;\n}\nfunction createShader(gl, script, type) {\n  var shader = gl.createShader(type);\n  gl.shaderSource(shader, script);\n  gl.compileShader(shader);\n  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n\n  if (!compiled) {\n    var lastError = gl.getShaderInfoLog(shader);\n    error(\"Error compiling shader '\" + shader + \"':\" + lastError);\n    gl.deleteShader(shader);\n    return null;\n  }\n\n  return shader;\n}\nfunction createTexture(gl, source, i) {\n  var texture = gl.createTexture();\n  activeTexture(gl, i);\n  gl.bindTexture(gl.TEXTURE_2D, texture); // Set the parameters so we can render any size image.\n\n  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);\n  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);\n  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\n  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\n\n  if (source === null) {\n    return texture;\n  } else {\n    updateTexture(gl, source);\n  }\n\n  return texture;\n}\nfunction createUniform(gl, program, type, name) {\n  var location = gl.getUniformLocation(program, 'u_' + name);\n\n  for (var _len = arguments.length, args = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {\n    args[_key - 4] = arguments[_key];\n  }\n\n  gl['uniform' + type].apply(gl, [location].concat(args));\n}\nfunction activeTexture(gl, i) {\n  gl.activeTexture(gl['TEXTURE' + i]);\n}\nfunction updateTexture(gl, source) {\n  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);\n}\nfunction setRectangle(gl, x, y, width, height) {\n  var x1 = x;\n  var x2 = x + width;\n  var y1 = y;\n  var y2 = y + height;\n  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]), gl.STATIC_DRAW);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93ZWJnbC93ZWJnbC5qcz81NTFjIl0sIm5hbWVzIjpbImdldENvbnRleHQiLCJjYW52YXMiLCJvcHRpb25zIiwiY29udGV4dHMiLCJjb250ZXh0Iiwic29tZSIsIm5hbWUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwiY3JlYXRlUHJvZ3JhbSIsImdsIiwidmVydGV4U2NyaXB0IiwiZnJhZ1NjcmlwdCIsInZlcnRleFNoYWRlciIsImNyZWF0ZVNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJmcmFnU2hhZGVyIiwiRlJBR01FTlRfU0hBREVSIiwicHJvZ3JhbSIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwibGlua2VkIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIkxJTktfU1RBVFVTIiwibGFzdEVycm9yIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJkZWxldGVQcm9ncmFtIiwicG9zaXRpb25Mb2NhdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwidGV4Q29vcmRMb2NhdGlvbiIsInRleENvb3JkQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsImJ1ZmZlckRhdGEiLCJGbG9hdDMyQXJyYXkiLCJTVEFUSUNfRFJBVyIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiYnVmZmVyIiwic2NyaXB0IiwidHlwZSIsInNoYWRlciIsInNoYWRlclNvdXJjZSIsImNvbXBpbGVTaGFkZXIiLCJjb21waWxlZCIsImdldFNoYWRlclBhcmFtZXRlciIsIkNPTVBJTEVfU1RBVFVTIiwiZ2V0U2hhZGVySW5mb0xvZyIsImRlbGV0ZVNoYWRlciIsImNyZWF0ZVRleHR1cmUiLCJzb3VyY2UiLCJpIiwidGV4dHVyZSIsImFjdGl2ZVRleHR1cmUiLCJiaW5kVGV4dHVyZSIsIlRFWFRVUkVfMkQiLCJ0ZXhQYXJhbWV0ZXJpIiwiVEVYVFVSRV9NSU5fRklMVEVSIiwiTElORUFSIiwiVEVYVFVSRV9NQUdfRklMVEVSIiwiVEVYVFVSRV9XUkFQX1MiLCJDTEFNUF9UT19FREdFIiwiVEVYVFVSRV9XUkFQX1QiLCJ1cGRhdGVUZXh0dXJlIiwiY3JlYXRlVW5pZm9ybSIsImxvY2F0aW9uIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwiYXJncyIsInRleEltYWdlMkQiLCJSR0JBIiwiVU5TSUdORURfQllURSIsInNldFJlY3RhbmdsZSIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJ4MSIsIngyIiwieTEiLCJ5MiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0EsVUFBVCxDQUFvQkMsTUFBcEIsRUFBMEM7QUFBQSxNQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFDN0MsTUFBSUMsUUFBUSxHQUFHLENBQUMsT0FBRCxFQUFVLG9CQUFWLENBQWY7QUFDQSxNQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUVBRCxVQUFRLENBQUNFLElBQVQsQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDcEIsUUFBSTtBQUNBRixhQUFPLEdBQUdILE1BQU0sQ0FBQ0QsVUFBUCxDQUFrQk0sSUFBbEIsRUFBd0JKLE9BQXhCLENBQVY7QUFDSCxLQUZELENBRUUsT0FBT0ssQ0FBUCxFQUFVO0FBQ1JDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjRixDQUFkO0FBQ0g7O0FBQ0QsV0FBT0gsT0FBTyxLQUFLLElBQW5CO0FBQ0gsR0FQRDs7QUFRQSxNQUFJQSxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDbEJNLFlBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixVQUE1QjtBQUNIOztBQUNELFNBQU9ULE9BQVA7QUFDSDtBQUVNLFNBQVNVLGFBQVQsQ0FBdUJDLEVBQXZCLEVBQTJCQyxZQUEzQixFQUF5Q0MsVUFBekMsRUFBcUQ7QUFD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U3FCLFlBQVQsQ0FBc0IvRCxFQUF0QixFQUEwQmdFLENBQTFCLEVBQTZCQyxDQUE3QixFQUFnQ0MsS0FBaEMsRUFBdUNDLE1BQXZDLEVBQStDO0FBQ2xELE1BQUlDLEVBQUUsR0FBR0osQ0FBVDtBQUNBLE1BQUlLLEVBQUUsR0FBR0wsQ0FBQyxHQUFHRSxLQUFiO0FBQ0EsTUFBSUksRUFBRSxHQUFHTCxDQUFUO0FBQ0EsTUFBSU0sRUFBRSxHQUFHTixDQUFDLEdBQUdFLE1BQWI7QUFFQW5FLElBQUUsQ0FBQ3dCLFVBQUgsQ0FBY3hCLEVBQUUsQ0FBQ3VCLFlBQWpCLEVBQStCLElBQUlFLFlBQUosQ0FBaUIsQ0FDNUMyQyxFQUQ0QyxFQUN4Q0UsRUFEd0MsRUFFNUNELEVBRjRDLEVBRXhDQyxFQUZ3QyxFQUc1Q0YsRUFINEMsRUFHeENHLEVBSHdDLEVBSTVDSCxFQUo0QyxFQUl4Q0csRUFKd0MsRUFLNUNGLEVBTDRDLEVBS3hDQyxFQUx3QyxFQU01Q0QsRUFONEMsRUFNeENFLEVBTndDLENBQWpCLENBQS9CLEVBTWN2RSxFQUFFLENBQUMwQixXQU5qQjtBQVFIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy93ZWJnbC93ZWJnbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0KGNhbnZhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGNvbnRleHRzID0gWyd3ZWJnbCcsICdleHBlcmltZW50YWwtd2ViZ2wnXTtcbiAgICBsZXQgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb250ZXh0cy5zb21lKChuYW1lKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQgIT09IG51bGw7XG4gICAgfSk7XG4gICAgaWYgKGNvbnRleHQgPT09IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCduby13ZWJnbCcpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0oZ2wsIHZlcnRleFNjcmlwdCwgZnJhZ1NjcmlwdCkge1xuICAgIGxldCB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIHZlcnRleFNjcmlwdCwgZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgbGV0IGZyYWdTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIGZyYWdTY3JpcHQsIGdsLkZSQUdNRU5UX1NIQURFUik7XG5cbiAgICBsZXQgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ1NoYWRlcik7XG5cbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIGxldCBsaW5rZWQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKTtcbiAgICBpZiAoIWxpbmtlZCkge1xuICAgICAgICBsZXQgbGFzdEVycm9yID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHByb2dyYW0gbGlua2luZzogJyArIGxhc3RFcnJvcik7XG4gICAgICAgIGdsLmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGxldCBwb3NpdGlvbkxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FfcG9zaXRpb24nKTtcbiAgICAvLyAvLyBsZXQgdGV4Q29vcmRMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhX3RleENvb3JkJyk7XG5cbiAgICAvLyB2YXIgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgLy8gZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gICAgLy8gLy8gbGV0IHRleHRDb29yZEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIC8vIC8vIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0ZXh0Q29vcmRCdWZmZXIpO1xuICAgIC8vIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAvLyAgICAgLTEuMCwgLTEuMCxcbiAgICAvLyAgICAgMS4wLCAtMS4wLFxuICAgIC8vICAgICAtMS4wLCAgMS4wLFxuICAgIC8vICAgICAtMS4wLCAgMS4wLFxuICAgIC8vICAgICAxLjAsIC0xLjAsXG4gICAgLy8gICAgIDEuMCwgIDEuMFxuICAgIC8vIF0pLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgLy8gZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb25Mb2NhdGlvbik7XG4gICAgLy8gLy8gZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGV4Q29vcmRMb2NhdGlvbik7XG4gICAgLy8gLy8gZ2wudmVydGV4QXR0cmliUG9pbnRlcih0ZXhDb29yZExvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgLy8gLy8gQ3JlYXRlIGEgYnVmZmVyIGZvciB0aGUgcG9zaXRpb24gb2YgdGhlIHJlY3RhbmdsZSBjb3JuZXJzLlxuICAgIC8vIC8vIHZhciBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAvLyAvLyBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgICAvLyAvLyBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NpdGlvbkxvY2F0aW9uKTtcbiAgICAvLyBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHBvc2l0aW9uTG9jYXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICB2YXIgcG9zaXRpb25Mb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIFwiYV9wb3NpdGlvblwiKTtcbiAgdmFyIHRleENvb3JkTG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBcImFfdGV4Q29vcmRcIik7XG5cbiAgdmFyIHRleENvb3JkQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0ZXhDb29yZEJ1ZmZlcik7XG4gIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAtMS4wLCAtMS4wLFxuICAgICAxLjAsIC0xLjAsXG4gICAgLTEuMCwgIDEuMCxcbiAgICAtMS4wLCAgMS4wLFxuICAgICAxLjAsIC0xLjAsXG4gICAgIDEuMCwgIDEuMFxuICBdKSwgZ2wuU1RBVElDX0RSQVcpO1xuICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0ZXhDb29yZExvY2F0aW9uKTtcbiAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0ZXhDb29yZExvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gIC8vIENyZWF0ZSBhIGJ1ZmZlciBmb3IgdGhlIHBvc2l0aW9uIG9mIHRoZSByZWN0YW5nbGUgY29ybmVycy5cbiAgdmFyIGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb25Mb2NhdGlvbik7XG4gIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocG9zaXRpb25Mb2NhdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgIHJldHVybiBwcm9ncmFtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hhZGVyKGdsLCBzY3JpcHQsIHR5cGUpIHtcbiAgICBsZXQgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNjcmlwdCk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gICAgbGV0IGNvbXBpbGVkID0gZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpO1xuXG4gICAgaWYgKCFjb21waWxlZCkge1xuICAgICAgICBsZXQgbGFzdEVycm9yID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuICAgICAgICBlcnJvcihcIkVycm9yIGNvbXBpbGluZyBzaGFkZXIgJ1wiICsgc2hhZGVyICsgXCInOlwiICsgbGFzdEVycm9yKTtcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gc2hhZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShnbCxzb3VyY2UsaSl7XG4gICAgdmFyIHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgYWN0aXZlVGV4dHVyZShnbCxpKTtcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbiAgXG4gICAgLy8gU2V0IHRoZSBwYXJhbWV0ZXJzIHNvIHdlIGNhbiByZW5kZXIgYW55IHNpemUgaW1hZ2UuXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gIFxuICAgIGlmICggc291cmNlID09PSBudWxsICkge1xuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVUZXh0dXJlKGdsLCBzb3VyY2UpO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHRleHR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVbmlmb3JtKGdsLHByb2dyYW0sdHlwZSxuYW1lLC4uLmFyZ3Mpe1xuICAgIGxldCBsb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndV8nICsgbmFtZSk7XG4gICAgZ2xbJ3VuaWZvcm0nICsgdHlwZV0obG9jYXRpb24sLi4uYXJncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmVUZXh0dXJlKGdsLCBpKSB7XG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbFsnVEVYVFVSRScgKyBpXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUZXh0dXJlKGdsLCBzb3VyY2UpIHtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIHNvdXJjZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWN0YW5nbGUoZ2wsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBsZXQgeDEgPSB4O1xuICAgIGxldCB4MiA9IHggKyB3aWR0aDtcbiAgICBsZXQgeTEgPSB5O1xuICAgIGxldCB5MiA9IHkgKyBoZWlnaHQ7XG5cbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIHgxLCB5MSxcbiAgICAgICAgeDIsIHkxLFxuICAgICAgICB4MSwgeTIsXG4gICAgICAgIHgxLCB5MixcbiAgICAgICAgeDIsIHkxLFxuICAgICAgICB4MiwgeTJdKSwgZ2wuU1RBVElDX0RSQVcpO1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/webgl/webgl.js\n");

/***/ })

})