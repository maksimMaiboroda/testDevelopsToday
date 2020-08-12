webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/post.tsx":
/*!*********************************!*\
  !*** ./src/components/post.tsx ***!
  \*********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




var _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    color: #fff;\n    background-color: rgb(220, 0, 78);\n    margin: 8px;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n        0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    margin-bottom: 10px;\n    text-align: center;\n    position: absolute;\n    bottom: 10px;\n    left: 8%;\n\n    padding: 6px 16px;\n    font-size: 0.875rem;\n    min-width: 64px;\n    width: 80%;\n    box-sizing: border-box;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n    font-weight: 500;\n    line-height: 1.75;\n    border-radius: 4px;\n    letter-spacing: 0.02857em;\n    text-transform: uppercase;\n    cursor: pointer;\n\n    :hover {\n        background-color: rgb(154, 0, 54);\n        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),\n            0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    font-size: 1.5rem;\n    margin-bottom: 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    margin-top: 50px;\n    border-radius: 3px;\n    padding: 5px 10px;\n    background: #cacaca;\n\n    position: absolute;\n    bottom: 70px;\n    left: 10%;\n    right: 10%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    width: 100%;\n    height: auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    padding: 15px;\n    padding-bottom: 130px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    background: #f5f5f5;\n    border-radius: 3px;\n\n    cursor: pointer;\n    transition: box-shadow 0.1s;\n    overflow: hidden;\n    position: relative;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    margin-bottom: 40px;\n\n    :hover {\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 31% 31% 31%;\n    grid-gap: 2vw;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Posts = function Posts(_ref) {
  var allPostsData = _ref.allPostsData;
  return __jsx("div", null, __jsx(Grid, null, allPostsData.map(function (_ref2) {
    var id = _ref2.id,
        body = _ref2.body,
        title = _ref2.title,
        comments = _ref2.comments;
    return id && id !== ' ' && body && body !== ' ' && title && title !== ' ' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/post/[id]",
      as: allPostsData
    }, __jsx(Post, {
      key: id
    }, __jsx(PostLogo, {
      src: "/images/post-logo.png",
      alt: "React-logo"
    }), __jsx(PostContent, null, __jsx(Title, null, __jsx("div", null, title)), __jsx(BodyPost, null, body), __jsx(Comment, null, comments && comments.body !== ' ' && comments.body !== '' ? comments.body : 'no comment')), __jsx("div", null, __jsx(BtnDel, {
      onClick: _lib_api__WEBPACK_IMPORTED_MODULE_5__["dellPost"].bind(_this, id)
    }, "DELETE")))) : null;
  })));
};

_c = Posts;
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c2 = Grid;
var Post = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());
_c3 = Post;
var PostContent = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject3());
_c4 = PostContent;
var PostLogo = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].img(_templateObject4());
_c5 = PostLogo;
var Comment = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject5());
_c6 = Comment;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject6());
_c7 = Title;
var BtnDel = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject7());
_c8 = BtnDel;
var BodyPost = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject8());
_c9 = BodyPost;
var getServerSideProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var allPostsData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_lib_api__WEBPACK_IMPORTED_MODULE_5__["getPostsData"])();

          case 2:
            allPostsData = _context.sent;
            return _context.abrupt("return", {
              props: {
                allPostsData: allPostsData
              }
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getServerSideProps(_x) {
    return _ref3.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (Posts);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Posts");
$RefreshReg$(_c2, "Grid");
$RefreshReg$(_c3, "Post");
$RefreshReg$(_c4, "PostContent");
$RefreshReg$(_c5, "PostLogo");
$RefreshReg$(_c6, "Comment");
$RefreshReg$(_c7, "Title");
$RefreshReg$(_c8, "BtnDel");
$RefreshReg$(_c9, "BodyPost");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9zdC50c3giXSwibmFtZXMiOlsiUG9zdHMiLCJhbGxQb3N0c0RhdGEiLCJtYXAiLCJpZCIsImJvZHkiLCJ0aXRsZSIsImNvbW1lbnRzIiwiZGVsbFBvc3QiLCJiaW5kIiwiR3JpZCIsInN0eWxlZCIsImRpdiIsIlBvc3QiLCJQb3N0Q29udGVudCIsIlBvc3RMb2dvIiwiaW1nIiwiQ29tbWVudCIsIlRpdGxlIiwiQnRuRGVsIiwiQm9keVBvc3QiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiZ2V0UG9zdHNEYXRhIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXNCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUNoQyxTQUNJLG1CQUNJLE1BQUMsSUFBRCxRQUNLQSxZQUFZLENBQUNDLEdBQWIsQ0FBaUI7QUFBQSxRQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxRQUFPQyxJQUFQLFNBQU9BLElBQVA7QUFBQSxRQUFhQyxLQUFiLFNBQWFBLEtBQWI7QUFBQSxRQUFvQkMsUUFBcEIsU0FBb0JBLFFBQXBCO0FBQUEsV0FDZEgsRUFBRSxJQUFJQSxFQUFFLEtBQUssR0FBYixJQUFvQkMsSUFBcEIsSUFBNEJBLElBQUksS0FBSyxHQUFyQyxJQUE0Q0MsS0FBNUMsSUFBcURBLEtBQUssS0FBSyxHQUEvRCxHQUNJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsWUFBWDtBQUF3QixRQUFFLEVBQUVKO0FBQTVCLE9BQ0ksTUFBQyxJQUFEO0FBQU0sU0FBRyxFQUFFRTtBQUFYLE9BQ0ksTUFBQyxRQUFEO0FBQVUsU0FBRyxFQUFDLHVCQUFkO0FBQXNDLFNBQUcsRUFBQztBQUExQyxNQURKLEVBRUksTUFBQyxXQUFELFFBQ0ksTUFBQyxLQUFELFFBQ0ksbUJBQU1FLEtBQU4sQ0FESixDQURKLEVBS0ksTUFBQyxRQUFELFFBQVdELElBQVgsQ0FMSixFQU9JLE1BQUMsT0FBRCxRQUNLRSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0YsSUFBVCxLQUFrQixHQUE5QixJQUFxQ0UsUUFBUSxDQUFDRixJQUFULEtBQWtCLEVBQXZELEdBQ0tFLFFBQVEsQ0FBQ0YsSUFEZCxHQUVLLFlBSFYsQ0FQSixDQUZKLEVBZUksbUJBQ0ksTUFBQyxNQUFEO0FBQVEsYUFBTyxFQUFFRyxpREFBUSxDQUFDQyxJQUFULENBQWMsS0FBZCxFQUFvQkwsRUFBcEI7QUFBakIsZ0JBREosQ0FmSixDQURKLENBREosR0FzQkksSUF2QlU7QUFBQSxHQUFqQixDQURMLENBREosQ0FESjtBQStCSCxDQWhDRDs7S0FBTUgsSztBQWtDTixJQUFNUyxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQVY7TUFBTUYsSTtBQU9OLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBVjtNQUFNQyxJO0FBZU4sSUFBTUMsV0FBVyxHQUFHSCx5REFBTSxDQUFDQyxHQUFWLG9CQUFqQjtNQUFNRSxXO0FBS04sSUFBTUMsUUFBUSxHQUFHSix5REFBTSxDQUFDSyxHQUFWLG9CQUFkO01BQU1ELFE7QUFLTixJQUFNRSxPQUFPLEdBQUdOLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7TUFBTUssTztBQVlOLElBQU1DLEtBQUssR0FBR1AseURBQU0sQ0FBQ0MsR0FBVixvQkFBWDtNQUFNTSxLO0FBU04sSUFBTUMsTUFBTSxHQUFHUix5REFBTSxDQUFDQyxHQUFWLG9CQUFaO01BQU1PLE07QUFrQ04sSUFBTUMsUUFBUSxHQUFHVCx5REFBTSxDQUFDQyxHQUFWLG9CQUFkO01BQU1RLFE7QUFFQyxJQUFNQyxrQkFBc0M7QUFBQSwrTEFBRyxpQkFBT0MsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN2QkMsNkRBQVksRUFEVzs7QUFBQTtBQUM1Q3JCLHdCQUQ0QztBQUFBLDZDQUUzQztBQUNIc0IsbUJBQUssRUFBRTtBQUNIdEIsNEJBQVksRUFBWkE7QUFERztBQURKLGFBRjJDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXRDbUIsa0JBQXNDO0FBQUE7QUFBQTtBQUFBLEdBQTVDO0FBU1FwQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45OTJlNmYyYjYzZjFmNDYwM2I4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XHJcblxyXG5pbXBvcnQgeyBnZXRQb3N0c0RhdGEgfSBmcm9tICcuLi9saWIvYXBpJztcclxuXHJcbmltcG9ydCB7IGRlbGxQb3N0IH0gZnJvbSAnLi4vbGliL2FwaSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgUG9zdHMgPSAoeyBhbGxQb3N0c0RhdGEgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgIHthbGxQb3N0c0RhdGEubWFwKCh7IGlkLCBib2R5LCB0aXRsZSwgY29tbWVudHMgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBpZCAmJiBpZCAhPT0gJyAnICYmIGJvZHkgJiYgYm9keSAhPT0gJyAnICYmIHRpdGxlICYmIHRpdGxlICE9PSAnICcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9baWRdXCIgYXM9e2FsbFBvc3RzRGF0YX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdCBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdExvZ28gc3JjPVwiL2ltYWdlcy9wb3N0LWxvZ28ucG5nXCIgYWx0PVwiUmVhY3QtbG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb2R5UG9zdD57Ym9keX08L0JvZHlQb3N0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tbWVudHMgJiYgY29tbWVudHMuYm9keSAhPT0gJyAnICYmIGNvbW1lbnRzLmJvZHkgIT09ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb21tZW50cy5ib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnbm8gY29tbWVudCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29tbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Bvc3RDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdG5EZWwgb25DbGljaz17ZGVsbFBvc3QuYmluZCh0aGlzLCBpZCl9PkRFTEVURTwvQnRuRGVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3N0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzElIDMxJSAzMSU7XHJcbiAgICBncmlkLWdhcDogMnZ3O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICAgIDpob3ZlciB7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0Q29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdExvZ28gPSBzdHlsZWQuaW1nYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBDb21tZW50ID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNjYWNhY2E7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA3MHB4O1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgcmlnaHQ6IDEwJTtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IEJ0bkRlbCA9IHN0eWxlZC5kaXZgXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDAsIDc4KTtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDglO1xyXG5cclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIG1pbi13aWR0aDogNjRweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcyxcclxuICAgICAgICBib3gtc2hhZG93IDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zLCBib3JkZXIgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI4NTdlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAwLCA1NCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBCb2R5UG9zdCA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBhbGxQb3N0c0RhdGEgPSBhd2FpdCBnZXRQb3N0c0RhdGEoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgYWxsUG9zdHNEYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=