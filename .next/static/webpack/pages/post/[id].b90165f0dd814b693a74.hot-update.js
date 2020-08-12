webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./src/pages/post/[id].jsx":
/*!*********************************!*\
  !*** ./src/pages/post/[id].jsx ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/api */ "./src/lib/api.ts");
var _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Post = function Post(_ref) {
  var postData = _ref.postData;
  return __jsx(Layout, null, __jsx(Post, null, __jsx(PostLogo, {
    src: "/images/post-logo.png",
    alt: "React-logo"
  }), __jsx(PostContent, null, __jsx(Title, null, __jsx("div", null, postData.title)), __jsx(BodyPost, null, postData.body), __jsx(Comment, null, postData.comments && postData.comments.body !== ' ' && postData.comments.body !== '' ? postData.comments.body : 'no comment')), __jsx("div", null, __jsx(BtnDel, {
    onClick: dellPost.bind(_this, id)
  }, "DELETE"))));
};

_c = Post;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvLmpzeCJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdERhdGEiLCJ0aXRsZSIsImJvZHkiLCJjb21tZW50cyIsImRlbGxQb3N0IiwiYmluZCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDM0IsU0FDSSxNQUFDLE1BQUQsUUFDSSxNQUFDLElBQUQsUUFDSSxNQUFDLFFBQUQ7QUFBVSxPQUFHLEVBQUMsdUJBQWQ7QUFBc0MsT0FBRyxFQUFDO0FBQTFDLElBREosRUFFSSxNQUFDLFdBQUQsUUFDSSxNQUFDLEtBQUQsUUFDSSxtQkFBTUEsUUFBUSxDQUFDQyxLQUFmLENBREosQ0FESixFQUtJLE1BQUMsUUFBRCxRQUFXRCxRQUFRLENBQUNFLElBQXBCLENBTEosRUFPSSxNQUFDLE9BQUQsUUFDS0YsUUFBUSxDQUFDRyxRQUFULElBQXFCSCxRQUFRLENBQUNHLFFBQVQsQ0FBa0JELElBQWxCLEtBQTJCLEdBQWhELElBQXVERixRQUFRLENBQUNHLFFBQVQsQ0FBa0JELElBQWxCLEtBQTJCLEVBQWxGLEdBQ0tGLFFBQVEsQ0FBQ0csUUFBVCxDQUFrQkQsSUFEdkIsR0FFSyxZQUhWLENBUEosQ0FGSixFQWVJLG1CQUNJLE1BQUMsTUFBRDtBQUFRLFdBQU8sRUFBRUUsUUFBUSxDQUFDQyxJQUFULENBQWMsS0FBZCxFQUFvQkMsRUFBcEI7QUFBakIsY0FESixDQWZKLENBREosQ0FESjtBQXVCSCxDQXhCRDs7S0FBTVAsSTs7QUEyQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS5iOTAxNjVmMGRkODE0YjY5M2E3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tICcuLi8uLi9saWIvYXBpJztcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0RGF0YSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxQb3N0PlxyXG4gICAgICAgICAgICAgICAgPFBvc3RMb2dvIHNyYz1cIi9pbWFnZXMvcG9zdC1sb2dvLnBuZ1wiIGFsdD1cIlJlYWN0LWxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPFBvc3RDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57cG9zdERhdGEudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJvZHlQb3N0Pntwb3N0RGF0YS5ib2R5fTwvQm9keVBvc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdERhdGEuY29tbWVudHMgJiYgcG9zdERhdGEuY29tbWVudHMuYm9keSAhPT0gJyAnICYmIHBvc3REYXRhLmNvbW1lbnRzLmJvZHkgIT09ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBvc3REYXRhLmNvbW1lbnRzLmJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ25vIGNvbW1lbnQnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29tbWVudD5cclxuICAgICAgICAgICAgICAgIDwvUG9zdENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdG5EZWwgb25DbGljaz17ZGVsbFBvc3QuYmluZCh0aGlzLCBpZCl9PkRFTEVURTwvQnRuRGVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUG9zdD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBwYXRocyA9IGdldEFsbFBvc3RJZHMoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHBvc3REYXRhID0gZ2V0UG9zdChwYXJhbXMuaWQpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb3N0RGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==