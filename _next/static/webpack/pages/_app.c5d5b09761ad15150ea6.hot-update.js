webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/webgl/shaders/water.frag.js":
/*!************************************************!*\
  !*** ./components/webgl/shaders/water.frag.js ***!
  \************************************************/
/*! exports provided: WaterFrag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WaterFrag\", function() { return WaterFrag; });\nvar WaterFrag = \"\\nprecision mediump float;\\n\\n// textures\\n// uniform sampler2D u_waterMap;\\nuniform sampler2D u_textureShine;\\nuniform sampler2D u_textureFg;\\nuniform sampler2D u_textureBg;\\n\\n// the texCoords passed in from the vertex shader.\\nvarying vec2 v_texCoord;\\nuniform vec2 u_resolution;\\nuniform vec2 u_parallax;\\nuniform float u_parallaxFg;\\nuniform float u_parallaxBg;\\nuniform float u_textureRatio;\\nuniform bool u_renderShine;\\nuniform bool u_renderShadow;\\nuniform float u_minRefraction;\\nuniform float u_refractionDelta;\\nuniform float u_brightness;\\nuniform float u_alphaMultiply;\\nuniform float u_alphaSubtract;\\n\\n// alpha-blends two colors\\nvec4 blend(vec4 bg,vec4 fg){\\n  vec3 bgm=bg.rgb*bg.a;\\n  vec3 fgm=fg.rgb*fg.a;\\n  float ia=1.0-fg.a;\\n  float a=(fg.a + bg.a * ia);\\n  vec3 rgb;\\n  if(a!=0.0){\\n    rgb=(fgm + bgm * ia) / a;\\n  }else{\\n    rgb=vec3(0.0,0.0,0.0);\\n  }\\n  return vec4(rgb,a);\\n}\\n\\nvec2 pixel(){\\n  return vec2(1.0,1.0)/u_resolution;\\n}\\n\\nvec2 parallax(float v){\\n  return u_parallax*pixel()*v;\\n}\\n\\nvec2 texCoord(){\\n  return vec2(gl_FragCoord.x, u_resolution.y-gl_FragCoord.y)/u_resolution;\\n}\\n\\n// scales the bg up and proportionally to fill the container\\nvec2 scaledTexCoord(){\\n  float ratio=u_resolution.x/u_resolution.y;\\n  vec2 scale=vec2(1.0,1.0);\\n  vec2 offset=vec2(0.0,0.0);\\n  float ratioDelta=ratio-u_textureRatio;\\n  if(ratioDelta>=0.0){\\n    scale.y=(1.0+ratioDelta);\\n    offset.y=ratioDelta/2.0;\\n  }else{\\n    scale.x=(1.0-ratioDelta);\\n    offset.x=-ratioDelta/2.0;\\n  }\\n  return (texCoord()+offset)/scale;\\n}\\n\\n// get color from fg\\nvec4 fgColor(float x, float y){\\n  float p2=u_parallaxFg*2.0;\\n  vec2 scale=vec2(\\n    (u_resolution.x+p2)/u_resolution.x,\\n    (u_resolution.y+p2)/u_resolution.y\\n  );\\n\\n  vec2 scaledTexCoord=texCoord()/scale;\\n  vec2 offset=vec2(\\n    (1.0-(1.0/scale.x))/2.0,\\n    (1.0-(1.0/scale.y))/2.0\\n  );\\n\\n  // return texture2D(u_waterMap,\\n  return texture2D(u_textureFg,\\n    (scaledTexCoord+offset)+(pixel()*vec2(x,y))+parallax(u_parallaxFg)\\n  );\\n}\\n\\nvoid main() {\\n  vec4 bg=texture2D(u_textureBg,scaledTexCoord()+parallax(u_parallaxBg));\\n\\n  vec4 cur = fgColor(0.0,0.0);\\n\\n  float d=cur.b; // \\\"thickness\\\"\\n  float x=cur.g;\\n  float y=cur.r;\\n\\n  float a=clamp(cur.a*u_alphaMultiply-u_alphaSubtract, 0.0,1.0);\\n\\n  vec2 refraction = (vec2(x,y)-0.5)*2.0;\\n  vec2 refractionParallax=parallax(u_parallaxBg-u_parallaxFg);\\n  vec2 refractionPos = scaledTexCoord()\\n    + (pixel()*refraction*(u_minRefraction+(d*u_refractionDelta)))\\n    + refractionParallax;\\n\\n  vec4 tex=texture2D(u_textureFg,refractionPos);\\n\\n  if(u_renderShine){\\n    float maxShine=490.0;\\n    float minShine=maxShine*0.18;\\n    vec2 shinePos=vec2(0.5,0.5) + ((1.0/512.0)*refraction)* -(minShine+((maxShine-minShine)*d));\\n    vec4 shine=texture2D(u_textureShine,shinePos);\\n    tex=blend(tex,shine);\\n  }\\n\\n  vec4 fg=vec4(tex.rgb*u_brightness,a);\\n\\n  if(u_renderShadow){\\n    float borderAlpha = fgColor(0.,0.-(d*6.0)).a;\\n    borderAlpha=borderAlpha*u_alphaMultiply-(u_alphaSubtract+0.5);\\n    borderAlpha=clamp(borderAlpha,0.,1.);\\n    borderAlpha*=0.2;\\n    vec4 border=vec4(0.,0.,0.,borderAlpha);\\n    fg=blend(border,fg);\\n  }\\n\\n  gl_FragColor = blend(bg,fg);\\n}\\n\";\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93ZWJnbC9zaGFkZXJzL3dhdGVyLmZyYWcuanM/YjZhNyJdLCJuYW1lcyI6WyJXYXRlckZyYWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxJQUFNQSxTQUFTLHdxR0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvd2ViZ2wvc2hhZGVycy93YXRlci5mcmFnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFdhdGVyRnJhZyA9IGBcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuXG4vLyB0ZXh0dXJlc1xuLy8gdW5pZm9ybSBzYW1wbGVyMkQgdV93YXRlck1hcDtcbnVuaWZvcm0gc2FtcGxlcjJEIHVfdGV4dHVyZVNoaW5lO1xudW5pZm9ybSBzYW1wbGVyMkQgdV90ZXh0dXJlRmc7XG51bmlmb3JtIHNhbXBsZXIyRCB1X3RleHR1cmVCZztcblxuLy8gdGhlIHRleENvb3JkcyBwYXNzZWQgaW4gZnJvbSB0aGUgdmVydGV4IHNoYWRlci5cbnZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xudW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcbnVuaWZvcm0gdmVjMiB1X3BhcmFsbGF4O1xudW5pZm9ybSBmbG9hdCB1X3BhcmFsbGF4Rmc7XG51bmlmb3JtIGZsb2F0IHVfcGFyYWxsYXhCZztcbnVuaWZvcm0gZmxvYXQgdV90ZXh0dXJlUmF0aW87XG51bmlmb3JtIGJvb2wgdV9yZW5kZXJTaGluZTtcbnVuaWZvcm0gYm9vbCB1X3JlbmRlclNoYWRvdztcbnVuaWZvcm0gZmxvYXQgdV9taW5SZWZyYWN0aW9uO1xudW5pZm9ybSBmbG9hdCB1X3JlZnJhY3Rpb25EZWx0YTtcbnVuaWZvcm0gZmxvYXQgdV9icmlnaHRuZXNzO1xudW5pZm9ybSBmbG9hdCB1X2FscGhhTXVsdGlwbHk7XG51bmlmb3JtIGZsb2F0IHVfYWxwaGFTdWJ0cmFjdDtcblxuLy8gYWxwaGEtYmxlbmRzIHR3byBjb2xvcnNcbnZlYzQgYmxlbmQodmVjNCBiZyx2ZWM0IGZnKXtcbiAgdmVjMyBiZ209YmcucmdiKmJnLmE7XG4gIHZlYzMgZmdtPWZnLnJnYipmZy5hO1xuICBmbG9hdCBpYT0xLjAtZmcuYTtcbiAgZmxvYXQgYT0oZmcuYSArIGJnLmEgKiBpYSk7XG4gIHZlYzMgcmdiO1xuICBpZihhIT0wLjApe1xuICAgIHJnYj0oZmdtICsgYmdtICogaWEpIC8gYTtcbiAgfWVsc2V7XG4gICAgcmdiPXZlYzMoMC4wLDAuMCwwLjApO1xuICB9XG4gIHJldHVybiB2ZWM0KHJnYixhKTtcbn1cblxudmVjMiBwaXhlbCgpe1xuICByZXR1cm4gdmVjMigxLjAsMS4wKS91X3Jlc29sdXRpb247XG59XG5cbnZlYzIgcGFyYWxsYXgoZmxvYXQgdil7XG4gIHJldHVybiB1X3BhcmFsbGF4KnBpeGVsKCkqdjtcbn1cblxudmVjMiB0ZXhDb29yZCgpe1xuICByZXR1cm4gdmVjMihnbF9GcmFnQ29vcmQueCwgdV9yZXNvbHV0aW9uLnktZ2xfRnJhZ0Nvb3JkLnkpL3VfcmVzb2x1dGlvbjtcbn1cblxuLy8gc2NhbGVzIHRoZSBiZyB1cCBhbmQgcHJvcG9ydGlvbmFsbHkgdG8gZmlsbCB0aGUgY29udGFpbmVyXG52ZWMyIHNjYWxlZFRleENvb3JkKCl7XG4gIGZsb2F0IHJhdGlvPXVfcmVzb2x1dGlvbi54L3VfcmVzb2x1dGlvbi55O1xuICB2ZWMyIHNjYWxlPXZlYzIoMS4wLDEuMCk7XG4gIHZlYzIgb2Zmc2V0PXZlYzIoMC4wLDAuMCk7XG4gIGZsb2F0IHJhdGlvRGVsdGE9cmF0aW8tdV90ZXh0dXJlUmF0aW87XG4gIGlmKHJhdGlvRGVsdGE+PTAuMCl7XG4gICAgc2NhbGUueT0oMS4wK3JhdGlvRGVsdGEpO1xuICAgIG9mZnNldC55PXJhdGlvRGVsdGEvMi4wO1xuICB9ZWxzZXtcbiAgICBzY2FsZS54PSgxLjAtcmF0aW9EZWx0YSk7XG4gICAgb2Zmc2V0Lng9LXJhdGlvRGVsdGEvMi4wO1xuICB9XG4gIHJldHVybiAodGV4Q29vcmQoKStvZmZzZXQpL3NjYWxlO1xufVxuXG4vLyBnZXQgY29sb3IgZnJvbSBmZ1xudmVjNCBmZ0NvbG9yKGZsb2F0IHgsIGZsb2F0IHkpe1xuICBmbG9hdCBwMj11X3BhcmFsbGF4RmcqMi4wO1xuICB2ZWMyIHNjYWxlPXZlYzIoXG4gICAgKHVfcmVzb2x1dGlvbi54K3AyKS91X3Jlc29sdXRpb24ueCxcbiAgICAodV9yZXNvbHV0aW9uLnkrcDIpL3VfcmVzb2x1dGlvbi55XG4gICk7XG5cbiAgdmVjMiBzY2FsZWRUZXhDb29yZD10ZXhDb29yZCgpL3NjYWxlO1xuICB2ZWMyIG9mZnNldD12ZWMyKFxuICAgICgxLjAtKDEuMC9zY2FsZS54KSkvMi4wLFxuICAgICgxLjAtKDEuMC9zY2FsZS55KSkvMi4wXG4gICk7XG5cbiAgLy8gcmV0dXJuIHRleHR1cmUyRCh1X3dhdGVyTWFwLFxuICByZXR1cm4gdGV4dHVyZTJEKHVfdGV4dHVyZUZnLFxuICAgIChzY2FsZWRUZXhDb29yZCtvZmZzZXQpKyhwaXhlbCgpKnZlYzIoeCx5KSkrcGFyYWxsYXgodV9wYXJhbGxheEZnKVxuICApO1xufVxuXG52b2lkIG1haW4oKSB7XG4gIHZlYzQgYmc9dGV4dHVyZTJEKHVfdGV4dHVyZUJnLHNjYWxlZFRleENvb3JkKCkrcGFyYWxsYXgodV9wYXJhbGxheEJnKSk7XG5cbiAgdmVjNCBjdXIgPSBmZ0NvbG9yKDAuMCwwLjApO1xuXG4gIGZsb2F0IGQ9Y3VyLmI7IC8vIFwidGhpY2tuZXNzXCJcbiAgZmxvYXQgeD1jdXIuZztcbiAgZmxvYXQgeT1jdXIucjtcblxuICBmbG9hdCBhPWNsYW1wKGN1ci5hKnVfYWxwaGFNdWx0aXBseS11X2FscGhhU3VidHJhY3QsIDAuMCwxLjApO1xuXG4gIHZlYzIgcmVmcmFjdGlvbiA9ICh2ZWMyKHgseSktMC41KSoyLjA7XG4gIHZlYzIgcmVmcmFjdGlvblBhcmFsbGF4PXBhcmFsbGF4KHVfcGFyYWxsYXhCZy11X3BhcmFsbGF4RmcpO1xuICB2ZWMyIHJlZnJhY3Rpb25Qb3MgPSBzY2FsZWRUZXhDb29yZCgpXG4gICAgKyAocGl4ZWwoKSpyZWZyYWN0aW9uKih1X21pblJlZnJhY3Rpb24rKGQqdV9yZWZyYWN0aW9uRGVsdGEpKSlcbiAgICArIHJlZnJhY3Rpb25QYXJhbGxheDtcblxuICB2ZWM0IHRleD10ZXh0dXJlMkQodV90ZXh0dXJlRmcscmVmcmFjdGlvblBvcyk7XG5cbiAgaWYodV9yZW5kZXJTaGluZSl7XG4gICAgZmxvYXQgbWF4U2hpbmU9NDkwLjA7XG4gICAgZmxvYXQgbWluU2hpbmU9bWF4U2hpbmUqMC4xODtcbiAgICB2ZWMyIHNoaW5lUG9zPXZlYzIoMC41LDAuNSkgKyAoKDEuMC81MTIuMCkqcmVmcmFjdGlvbikqIC0obWluU2hpbmUrKChtYXhTaGluZS1taW5TaGluZSkqZCkpO1xuICAgIHZlYzQgc2hpbmU9dGV4dHVyZTJEKHVfdGV4dHVyZVNoaW5lLHNoaW5lUG9zKTtcbiAgICB0ZXg9YmxlbmQodGV4LHNoaW5lKTtcbiAgfVxuXG4gIHZlYzQgZmc9dmVjNCh0ZXgucmdiKnVfYnJpZ2h0bmVzcyxhKTtcblxuICBpZih1X3JlbmRlclNoYWRvdyl7XG4gICAgZmxvYXQgYm9yZGVyQWxwaGEgPSBmZ0NvbG9yKDAuLDAuLShkKjYuMCkpLmE7XG4gICAgYm9yZGVyQWxwaGE9Ym9yZGVyQWxwaGEqdV9hbHBoYU11bHRpcGx5LSh1X2FscGhhU3VidHJhY3QrMC41KTtcbiAgICBib3JkZXJBbHBoYT1jbGFtcChib3JkZXJBbHBoYSwwLiwxLik7XG4gICAgYm9yZGVyQWxwaGEqPTAuMjtcbiAgICB2ZWM0IGJvcmRlcj12ZWM0KDAuLDAuLDAuLGJvcmRlckFscGhhKTtcbiAgICBmZz1ibGVuZChib3JkZXIsZmcpO1xuICB9XG5cbiAgZ2xfRnJhZ0NvbG9yID0gYmxlbmQoYmcsZmcpO1xufVxuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/webgl/shaders/water.frag.js\n");

/***/ })

})