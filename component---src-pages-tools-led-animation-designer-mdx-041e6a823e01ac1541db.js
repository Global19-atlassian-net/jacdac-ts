(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "NqE+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Page = function Page(_ref) {
  var props = _ref.props,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], props, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),

/***/ "zs35":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_frontmatter", function() { return _frontmatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8o2o");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7ljp");
/* harmony import */ var _home_runner_work_jacdac_ts_jacdac_ts_docs_src_components_Page_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NqE+");
/* harmony import */ var _components_tools_LedAnimationDesigner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fY9Z");


/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */



var _frontmatter = {};
var layoutProps = {
  _frontmatter: _frontmatter
};
var MDXLayout = _home_runner_work_jacdac_ts_jacdac_ts_docs_src_components_Page_tsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("strong", {
    parentName: "p"
  }, "LED Animation Designer")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "Design LED animation patterns for LED strips or module status light."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, "each animation is a color (in Hue Saturation Value format) and a duration")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("code", Object.assign({
    parentName: "pre"
  }, {}), "{\nrepeats:\n    hue: u8\n    saturation: u8\n    value: u8\n    duration8: u8 8ms\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, "the module will interpolate between each animation frame"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, "for the status light, specify up to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("strong", {
    parentName: "li"
  }, "8"), " animation frame")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(_components_tools_LedAnimationDesigner__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    mdxType: "LedAnimationDesigner"
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-led-animation-designer-mdx-041e6a823e01ac1541db.js.map