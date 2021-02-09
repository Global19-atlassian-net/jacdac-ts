(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "Jhm/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "_frontmatter", function() { return /* binding */ _frontmatter; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MDXContent; });

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("8o2o");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__("7ljp");

// EXTERNAL MODULE: ./src/components/Page.tsx
var Page = __webpack_require__("NqE+");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__("4+mf");

// EXTERNAL MODULE: ../src/jdom/spec.ts
var spec = __webpack_require__("ZF4C");

// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__("kmB/");

// EXTERNAL MODULE: ./src/components/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__("Y6fa");

// EXTERNAL MODULE: ./src/components/DeviceSpecificationList.tsx + 3 modules
var DeviceSpecificationList = __webpack_require__("XXVM");

// CONCATENATED MODULE: ./src/components/ServiceMarkdown.tsx





function ServiceMarkdown(props) {
  var node = props.service;
  var shortId = node.shortId,
      name = node.name,
      classIdentifier = node.classIdentifier;
  /*
  <h2 key="spech2">Exports</h2>
  <ServiceSpecificationSource key="source"
      classIdentifier={classIdentifier}
      showSpecification={false}
  />
  */

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ServiceSpecificationStatusAlert["a" /* default */], {
    specification: node
  }), /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
    source: node.source
  }), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Button"], {
    variant: "contained",
    to: "/services/" + shortId + "/playground/"
  }, "Playground")), /*#__PURE__*/react_default.a.createElement("h2", null, "Registered Devices"), /*#__PURE__*/react_default.a.createElement(DeviceSpecificationList["a" /* default */], {
    requiredServiceClasses: [classIdentifier]
  }), /*#__PURE__*/react_default.a.createElement("h2", null, " See Also"), /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", null, /*#__PURE__*/react_default.a.createElement("a", {
    href: "https://github.com/microsoft/jacdac/tree/main/services/" + shortId + ".md"
  }, "Edit specification source"), "."), /*#__PURE__*/react_default.a.createElement("li", null, "Read ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/reference/service-specification"
  }, "Service Specification Language"), " reference"), /*#__PURE__*/react_default.a.createElement("li", null, "Create a new service specification using the ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/tools/service-editor"
  }, "Service Editor")), /*#__PURE__*/react_default.a.createElement("li", null, "Using services in JavaScript with the ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/clients/web/jdom"
  }, "Jacdac Object Model (JDOM)"))));
}
// CONCATENATED MODULE: ./src/templates/service.mdx


/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */





var _frontmatter = {};
var layoutProps = {
  _frontmatter: _frontmatter
};
var MDXLayout = Page["a" /* default */];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["components"]);

  return Object(esm["mdx"])(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(esm["mdx"])(ServiceMarkdown, {
    service: Object(spec["I" /* serviceSpecificationFromClassIdentifier */])(props.pageContext.node.classIdentifier),
    mdxType: "ServiceMarkdown"
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=component---src-templates-service-mdx-c265d087ae614df34ff6.js.map