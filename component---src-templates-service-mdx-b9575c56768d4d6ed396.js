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
var jdom_spec = __webpack_require__("ZF4C");

// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__("kmB/");

// EXTERNAL MODULE: ./src/components/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__("Y6fa");

// EXTERNAL MODULE: ./src/components/DeviceSpecificationList.tsx + 3 modules
var DeviceSpecificationList = __webpack_require__("XXVM");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__("dfam");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__("JrkS");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__("kKAo");

// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__("cV++");

// EXTERNAL MODULE: ./src/components/ui/Snippet.tsx
var Snippet = __webpack_require__("81PJ");

// EXTERNAL MODULE: ../jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__("gmkF");

// EXTERNAL MODULE: ./src/components/ServiceSpecification.tsx + 2 modules
var ServiceSpecification = __webpack_require__("CHaH");

// EXTERNAL MODULE: ../src/azure-iot/dtdl.ts
var dtdl = __webpack_require__("MpiI");

// CONCATENATED MODULE: ./src/components/ServiceSpecificationSource.tsx
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports










var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginBottom: theme.spacing(1)
    },
    pre: {
      margin: "0",
      padding: "0",
      backgroundColor: "transparent",
      whiteSpec: "pre-wrap"
    }
  });
});
function ServiceSpecificationSource(props) {
  var classIdentifier = props.classIdentifier,
      serviceSpecification = props.serviceSpecification,
      showSpecification = props.showSpecification;
  var classes = useStyles();

  var _useState = Object(react["useState"])(0),
      tab = _useState[0],
      setTab = _useState[1];

  var spec = serviceSpecification || Object(jdom_spec["H" /* serviceSpecificationFromClassIdentifier */])(classIdentifier);
  var convs = Object(jdspec["d" /* converters */])();
  var showDTDL = (spec === null || spec === void 0 ? void 0 : spec.camelName) !== "system";

  var handleTabChange = function handleTabChange(event, newValue) {
    setTab(newValue);
  };

  var index = 0;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement(Paper["a" /* default */], {
    square: true
  }, /*#__PURE__*/react_default.a.createElement(Tabs["a" /* default */], {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "View specification formats"
  }, [showSpecification && "Specification", "MakeCode", "TypeScript", "C", "JSON", showDTDL && "Module Twin"].filter(function (n) {
    return !!n;
  }).map(function (n, i) {
    return /*#__PURE__*/react_default.a.createElement(Tab["a" /* default */], Object.assign({
      key: n,
      label: n
    }, Object(TabPanel["a" /* a11yProps */])(i)));
  })), showSpecification && /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
    key: "spec",
    value: tab,
    index: index++
  }, /*#__PURE__*/react_default.a.createElement(ServiceSpecification["a" /* default */], {
    service: spec
  })), ["sts", "ts", "c", "json"].map(function (lang, i) {
    return /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
      key: "conv" + lang,
      value: tab,
      index: index++
    }, /*#__PURE__*/react_default.a.createElement(Snippet["a" /* default */], {
      value: function value() {
        return convs[lang](spec);
      },
      mode: lang
    }));
  }), showDTDL && /*#__PURE__*/react_default.a.createElement(TabPanel["b" /* default */], {
    key: "dtdl",
    value: tab,
    index: index++
  }, /*#__PURE__*/react_default.a.createElement(Snippet["a" /* default */], {
    value: function value() {
      return JSON.stringify(Object(dtdl["g" /* serviceSpecificationToDTDL */])(spec), null, 2);
    },
    mode: "json",
    download: "dtmi-" + spec.shortId + ".json",
    url: "/" + Object(dtdl["b" /* DTMIToRoute */])(Object(dtdl["e" /* serviceSpecificationDTMI */])(spec)),
    caption: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
      to: "/dtmi"
    }, "DTDL"), " is an open source modelling language developed by Microsoft Azure.")
  }))));
}
// CONCATENATED MODULE: ./src/components/ServiceMarkdown.tsx






function ServiceMarkdown(props) {
  var node = props.service;
  var shortId = node.shortId,
      name = node.name,
      classIdentifier = node.classIdentifier;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ServiceSpecificationStatusAlert["a" /* default */], {
    specification: node
  }), /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
    source: node.source
  }), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Button"], {
    variant: "contained",
    to: "/services/" + shortId + "/playground/"
  }, "Playground")), /*#__PURE__*/react_default.a.createElement("h2", null, "Registered Devices"), /*#__PURE__*/react_default.a.createElement(DeviceSpecificationList["a" /* default */], {
    requiredServiceClasses: [classIdentifier]
  }), /*#__PURE__*/react_default.a.createElement("h2", {
    key: "spech2"
  }, "Exports"), /*#__PURE__*/react_default.a.createElement(ServiceSpecificationSource, {
    key: "source",
    classIdentifier: classIdentifier,
    showSpecification: false
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
    service: Object(jdom_spec["H" /* serviceSpecificationFromClassIdentifier */])(props.pageContext.node.classIdentifier),
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
//# sourceMappingURL=component---src-templates-service-mdx-b9575c56768d4d6ed396.js.map