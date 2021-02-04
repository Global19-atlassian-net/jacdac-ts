(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

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

/***/ "pfKO":
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


/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */


var _frontmatter = {};

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("div", props);
  };
};

var ServiceSpecificationList = makeShortcode("ServiceSpecificationList");
var DeviceSpecificationList = makeShortcode("DeviceSpecificationList");
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h1", {
    "id": "jacdac",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "h1"
  }, {
    "href": "#jacdac",
    "aria-label": "jacdac permalink",
    "className": "anchor before"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("svg", Object.assign({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("path", Object.assign({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "Jacdac"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("strong", {
    parentName: "p"
  }, "Jacdac"), " is a plug-and-play hardware/software stack\nfor ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("strong", {
    parentName: "p"
  }, "microcontrollers"), " and their peripherals (sensors/actuators), with applications to rapid prototyping, making, and physical computing. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "Jacdac devices communicate over a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("em", {
    parentName: "p"
  }, "bus"), ", where each ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("em", {
    parentName: "p"
  }, "device"), " can advertise itself and the set of services it provides.\nA ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("em", {
    parentName: "p"
  }, "service"), " encapsulates the process of communicating with a Jacdac device via packets. A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("em", {
    parentName: "p"
  }, "packet"), " includes a device identifier and data payload.\nJacdac packets are sent serially among physical devices on the Jacdac bus and may also be sent over WebUSB,\nproviding connectivity to web-based tooling and services running in the web browser (see the connect icon at the top of this page)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("span", Object.assign({
    parentName: "p"
  }, {
    "className": "gatsby-resp-image-wrapper",
    "style": {
      "position": "relative",
      "display": "block",
      "marginLeft": "auto",
      "marginRight": "auto",
      "maxWidth": "800px"
    }
  }), "\n      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("span", Object.assign({
    parentName: "span"
  }, {
    "className": "gatsby-resp-image-background-image",
    "style": {
      "paddingBottom": "47%",
      "position": "relative",
      "bottom": "0",
      "left": "0",
      "backgroundImage": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAC4jAAAuIwF4pT92AAAB10lEQVQoz42QvUtCYRTGr2B+YFaDYLtQf4HQILhZDkWDODSLOLkGDo0OEdUgCZkN0ZhjYy2RQRFRg4tfKH5/f3WvetPTcy43iKZeePTc3znnOe95hWw2S1C2Xq8fj8fjI6vVqkmn05f5fJ5yuVxEFMUz8LVUKrWDb0LudjQanYLvJRIJI1qnUKbRaBxOJpMT4QtHkiQaDoeEkEKhkFmW5XOIer0eTadT6na7XuQ35/O5wjCAYHgTiUT0s9lshFjpR0xCq9Ui3G5WrVbnnzhOp3MJ7AImVCgURC4sFou7uLG73+8zk9gUNVc+n8/Q6XTEWq1G6JdhLAsokgHlZrPJkz/dbrcZ7JyNUChiPf7frVQqW2oscQ41V8Fg0IB42G63Cf0ytvkSeBpPKJVKxKu7XK4lFF8z5zcbDAY83Yv8Nhvx2+ICbJjw+/1GNa/04w2JDR9gmAR4geE9DE1g+1j5A4aPuNVbuVx2Yu0NGL6CJZF7R81BIBDQwfgOt39GzRMMHwQiUsTnJ/7FNP9hv/v5RxMOhxccDoeJgcViURLxeFxrt9sVhg00mUxG4cxisZiWY5vNpvRHo1Gtx+PRC+rhYBFaVmODKhO08ofpVWZSv42QDlqF1iHrNxKQ5xcPnkefAAAAAElFTkSuQmCC')",
      "backgroundSize": "cover",
      "display": "block"
    }
  })), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("img", Object.assign({
    parentName: "span"
  }, {
    "className": "gatsby-resp-image-image",
    "alt": "Jacdac stack",
    "title": "Jacdac stack",
    "src": "/jacdac-ts/static/80c91f874e5dc8eebec8ca467d8bc5c0/5a190/jacdac-stack.png",
    "srcSet": ["/jacdac-ts/static/80c91f874e5dc8eebec8ca467d8bc5c0/772e8/jacdac-stack.png 200w", "/jacdac-ts/static/80c91f874e5dc8eebec8ca467d8bc5c0/e17e5/jacdac-stack.png 400w", "/jacdac-ts/static/80c91f874e5dc8eebec8ca467d8bc5c0/5a190/jacdac-stack.png 800w", "/jacdac-ts/static/80c91f874e5dc8eebec8ca467d8bc5c0/c1b63/jacdac-stack.png 1200w", "/jacdac-ts/static/80c91f874e5dc8eebec8ca467d8bc5c0/29007/jacdac-stack.png 1600w", "/jacdac-ts/static/80c91f874e5dc8eebec8ca467d8bc5c0/565cc/jacdac-stack.png 1806w"],
    "sizes": "(max-width: 800px) 100vw, 800px",
    "style": {
      "width": "100%",
      "height": "100%",
      "margin": "0",
      "verticalAlign": "middle",
      "position": "absolute",
      "top": "0",
      "left": "0"
    },
    "loading": "lazy"
  })), "\n    ")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "services-and-hardware-abstraction",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "h2"
  }, {
    "href": "#services-and-hardware-abstraction",
    "aria-label": "services and hardware abstraction permalink",
    "className": "anchor before"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("svg", Object.assign({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("path", Object.assign({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "Services and Hardware abstraction"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "/jacdac-ts/services"
  }), "service catalog"), " lists the registered Jacdac ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "/jacdac-ts/reference/service-specification"
  }), "service specifications"), ", also stored in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "https://github.com/microsoft/jacdac",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Jacdac"), " repository."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(ServiceSpecificationList, {
    count: 3,
    shuffle: true,
    mdxType: "ServiceSpecificationList"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "devices",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "h2"
  }, {
    "href": "#devices",
    "aria-label": "devices permalink",
    "className": "anchor before"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("svg", Object.assign({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("path", Object.assign({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "Devices"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "/jacdac-ts/devices"
  }), "device catalog"), " lists the registered Jacdac devices that can be automatically detected on the bus.\nThe catalog information provides vendor information, the services supported by a device, firmware, and pictures.\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "/jacdac-ts/reference/device-specification"
  }), "Device entries"), " are stored in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "https://github.com/microsoft/jacdac",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Jacdac"), " repository."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])(DeviceSpecificationList, {
    count: 3,
    shuffle: true,
    mdxType: "DeviceSpecificationList"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "reference-documentation",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "h2"
  }, {
    "href": "#reference-documentation",
    "aria-label": "reference documentation permalink",
    "className": "anchor before"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("svg", Object.assign({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("path", Object.assign({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "Reference documentation"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "See the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "/jacdac-ts/reference/"
  }), "overview of reference documentation"), ", including the Jacdac protocol specification."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "jacdac-github-repos",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "h2"
  }, {
    "href": "#jacdac-github-repos",
    "aria-label": "jacdac github repos permalink",
    "className": "anchor before"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("svg", Object.assign({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("path", Object.assign({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "Jacdac Github repos"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "Jacdac is an Open Source living standard. Checkout our ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "/jacdac-ts/github"
  }), "GitHub Repositories"), " for the piece you want."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "community",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "h2"
  }, {
    "href": "#community",
    "aria-label": "community permalink",
    "className": "anchor before"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("svg", Object.assign({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("path", Object.assign({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "Community"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "Jacdac is open source and most of the commmunication happens through our GitHub project."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "li"
  }, {
    "href": "https://github.com/microsoft/jacdac/discussions",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "start a discussion"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "li"
  }, {
    "href": "https://github.com/microsoft/jacdac/issues",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "file an issue"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "why-jacdac",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "h2"
  }, {
    "href": "#why-jacdac",
    "aria-label": "why jacdac permalink",
    "className": "anchor before"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("svg", Object.assign({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("path", Object.assign({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "Why Jacdac?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "The advent of simpler programming environments for microcontrollers over the past decade has greatly changed who can write code for them. It is now possible for novices to program microcontrollers using only a web browser, a process that was previously the domain of skilled embedded firmware engineers. However, despite a marked improvement in software tooling, it\u2019s still challenging to build devices that bring together new combinations of hardware, as traditional protocols (such as I2C and SPI)\nfor connecting microcontrollers to each other and to peripherals are low-level and inflexible."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "Jacdac is a new hardware/software stack for low-cost microcontrollers that makes connecting microcontrollers and peripherals as simple as plugging a USB device into your personal computer. Jacdac\u2019s reversible physical connector, a flexible bus-based topology, standardized signalling and service specifications, hardware and software reference designs, and web-based tooling bring interactive device prototyping into the 21st century. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "The careful design of Jacdac means that it\u2019s inexpensive and low power; it can be supported by microcontrollers that cost as little as two and a half US cents.  Support for WebUSB and TypeScript extends the Jacdac bus to the web browser (and the Internet), enabling the development of services and the debugging of the Jacdac bus directly from the Web browser,\nreducing the gap between the Web and the microcontroller."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "first-applications",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "h2"
  }, {
    "href": "#first-applications",
    "aria-label": "first applications permalink",
    "className": "anchor before"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("svg", Object.assign({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("path", Object.assign({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "First Applications"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h3", {
    "id": "fashion",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "h3"
  }, {
    "href": "#fashion",
    "aria-label": "fashion permalink",
    "className": "anchor before"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("svg", Object.assign({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("path", Object.assign({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "Fashion"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "The first version of Jacdac was used to network microcontrollers together at the\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "https://www.bklynlibrary.org/bklyn-fashion-academy",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "BKLYN Fashion Academy"), " in 2019.\nRead more about it ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "https://www.microsoft.com/en-us/research/blog/fashion-forward-researchers-designers-debut-new-tech-on-new-york-city-runway",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "here"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h3", {
    "id": "gaming",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "h3"
  }, {
    "href": "#gaming",
    "aria-label": "gaming permalink",
    "className": "anchor before"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("svg", Object.assign({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("path", Object.assign({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "Gaming"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "The first version of Jacdac also was used to network ", "[MakeCode Arcade devices][https://arcade.makecode.com]", "\nfor multi-player gaming experiences."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("h2", {
    "id": "microsoft-open-source-code-of-conduct",
    "style": {
      "position": "relative"
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "h2"
  }, {
    "href": "#microsoft-open-source-code-of-conduct",
    "aria-label": "microsoft open source code of conduct permalink",
    "className": "anchor before"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("svg", Object.assign({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("path", Object.assign({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "Microsoft Open Source Code of Conduct"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "This project is hosted at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "https://github.com/microsoft/jacdac-ts",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "https://github.com/microsoft/jacdac-ts"), ". This project has adopted the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "p"
  }, {
    "href": "https://opensource.microsoft.com/codeofconduct/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Microsoft Open Source Code of Conduct"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("p", null, "Resources:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "li"
  }, {
    "href": "https://opensource.microsoft.com/codeofconduct/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Microsoft Open Source Code of Conduct")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "li"
  }, {
    "href": "https://opensource.microsoft.com/codeofconduct/faq/",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "Microsoft Code of Conduct FAQ")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("li", {
    parentName: "ul"
  }, "Contact ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__["mdx"])("a", Object.assign({
    parentName: "li"
  }, {
    "href": "mailto:opencode@microsoft.com",
    "target": "_blank",
    "rel": "nofollow noopener noreferrer"
  }), "opencode@microsoft.com"), " with questions or concerns")));
}
;
MDXContent.isMDXComponent = true;

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-mdx-d4f640a1738e1ab19df5.js.map