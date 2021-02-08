(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "GnY1":
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

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("RUBk");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__("ZBNC");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("k1TG");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("aXB2");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__("kKAo");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/StepConnector/StepConnector.js





var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto'
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      marginLeft: 12,
      // half icon
      padding: '0 0 8px'
    },

    /* Styles applied to the root element if `alternativeLabel={true}`. */
    alternativeLabel: {
      position: 'absolute',
      top: 8 + 4,
      left: 'calc(-50% + 20px)',
      right: 'calc(50% + 20px)'
    },

    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},

    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the line element. */
    line: {
      display: 'block',
      borderColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    lineHorizontal: {
      borderTopStyle: 'solid',
      borderTopWidth: 1
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    lineVertical: {
      borderLeftStyle: 'solid',
      borderLeftWidth: 1,
      minHeight: 24
    }
  };
};
var StepConnector_StepConnector = /*#__PURE__*/react["forwardRef"](function StepConnector(props, ref) {
  var active = props.active,
      _props$alternativeLab = props.alternativeLabel,
      alternativeLabel = _props$alternativeLab === void 0 ? false : _props$alternativeLab,
      classes = props.classes,
      className = props.className,
      completed = props.completed,
      disabled = props.disabled,
      index = props.index,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["active", "alternativeLabel", "classes", "className", "completed", "disabled", "index", "orientation"]);

  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel, active && classes.active, completed && classes.completed, disabled && classes.disabled),
    ref: ref
  }, other), /*#__PURE__*/react["createElement"]("span", {
    className: Object(clsx_m["a" /* default */])(classes.line, {
      'horizontal': classes.lineHorizontal,
      'vertical': classes.lineVertical
    }[orientation])
  }));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_StepConnector_StepConnector = (Object(withStyles["a" /* default */])(styles, {
  name: 'MuiStepConnector'
})(StepConnector_StepConnector));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Stepper/Stepper.js







var Stepper_styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    padding: 24
  },

  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    flexDirection: 'column'
  },

  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    alignItems: 'flex-start'
  }
};
var defaultConnector = /*#__PURE__*/react["createElement"](esm_StepConnector_StepConnector, null);
var Stepper_Stepper = /*#__PURE__*/react["forwardRef"](function Stepper(props, ref) {
  var _props$activeStep = props.activeStep,
      activeStep = _props$activeStep === void 0 ? 0 : _props$activeStep,
      _props$alternativeLab = props.alternativeLabel,
      alternativeLabel = _props$alternativeLab === void 0 ? false : _props$alternativeLab,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$connector = props.connector,
      connectorProp = _props$connector === void 0 ? defaultConnector : _props$connector,
      _props$nonLinear = props.nonLinear,
      nonLinear = _props$nonLinear === void 0 ? false : _props$nonLinear,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["activeStep", "alternativeLabel", "children", "classes", "className", "connector", "nonLinear", "orientation"]);

  var connector = /*#__PURE__*/react["isValidElement"](connectorProp) ? /*#__PURE__*/react["cloneElement"](connectorProp, {
    orientation: orientation
  }) : null;
  var childrenArray = react["Children"].toArray(children);
  var steps = childrenArray.map(function (step, index) {
    var state = {
      index: index,
      active: false,
      completed: false,
      disabled: false
    };

    if (activeStep === index) {
      state.active = true;
    } else if (!nonLinear && activeStep > index) {
      state.completed = true;
    } else if (!nonLinear && activeStep < index) {
      state.disabled = true;
    }

    return /*#__PURE__*/react["cloneElement"](step, Object(esm_extends["a" /* default */])({
      alternativeLabel: alternativeLabel,
      connector: connector,
      last: index + 1 === childrenArray.length,
      orientation: orientation
    }, state, step.props));
  });
  return /*#__PURE__*/react["createElement"](Paper["a" /* default */], Object(esm_extends["a" /* default */])({
    square: true,
    elevation: 0,
    className: Object(clsx_m["a" /* default */])(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel),
    ref: ref
  }, other), steps);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Stepper_Stepper = (Object(withStyles["a" /* default */])(Stepper_styles, {
  name: 'MuiStepper'
})(Stepper_Stepper));
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__("TOwV");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Step/Step.js






var Step_styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    paddingLeft: 8,
    paddingRight: 8
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},

  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    flex: 1,
    position: 'relative'
  },

  /* Pseudo-class applied to the root element if `completed={true}`. */
  completed: {}
};
var Step_Step = /*#__PURE__*/react["forwardRef"](function Step(props, ref) {
  var _props$active = props.active,
      active = _props$active === void 0 ? false : _props$active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$completed = props.completed,
      completed = _props$completed === void 0 ? false : _props$completed,
      connectorProp = props.connector,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$expanded = props.expanded,
      expanded = _props$expanded === void 0 ? false : _props$expanded,
      index = props.index,
      last = props.last,
      orientation = props.orientation,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "connector", "disabled", "expanded", "index", "last", "orientation"]);

  var connector = connectorProp ? /*#__PURE__*/react["cloneElement"](connectorProp, {
    orientation: orientation,
    alternativeLabel: alternativeLabel,
    index: index,
    active: active,
    completed: completed,
    disabled: disabled
  }) : null;
  var newChildren = /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel, completed && classes.completed),
    ref: ref
  }, other), connector && alternativeLabel && index !== 0 ? connector : null, react["Children"].map(children, function (child) {
    if (! /*#__PURE__*/react["isValidElement"](child)) {
      return null;
    }

    if (false) {}

    return /*#__PURE__*/react["cloneElement"](child, Object(esm_extends["a" /* default */])({
      active: active,
      alternativeLabel: alternativeLabel,
      completed: completed,
      disabled: disabled,
      expanded: expanded,
      last: last,
      icon: index + 1,
      orientation: orientation
    }, child.props));
  }));

  if (connector && !alternativeLabel && index !== 0) {
    return /*#__PURE__*/react["createElement"](react["Fragment"], null, connector, newChildren);
  }

  return newChildren;
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Step_Step = (Object(withStyles["a" /* default */])(Step_styles, {
  name: 'MuiStep'
})(Step_Step));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__("5AJ6");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/CheckCircle.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var CheckCircle = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"
}), 'CheckCircle'));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/Warning.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var Warning = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js
var SvgIcon = __webpack_require__("HR5l");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/StepIcon/StepIcon.js






var StepIcon_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      color: theme.palette.text.disabled,
      '&$completed': {
        color: theme.palette.primary.main
      },
      '&$active': {
        color: theme.palette.primary.main
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the SVG text element. */
    text: {
      fill: theme.palette.primary.contrastText,
      fontSize: theme.typography.caption.fontSize,
      fontFamily: theme.typography.fontFamily
    },

    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},

    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {}
  };
};

var StepIcon_ref = /*#__PURE__*/react["createElement"]("circle", {
  cx: "12",
  cy: "12",
  r: "12"
});

var StepIcon_StepIcon = /*#__PURE__*/react["forwardRef"](function StepIcon(props, ref) {
  var _props$completed = props.completed,
      completed = _props$completed === void 0 ? false : _props$completed,
      icon = props.icon,
      _props$active = props.active,
      active = _props$active === void 0 ? false : _props$active,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      classes = props.classes;

  if (typeof icon === 'number' || typeof icon === 'string') {
    var className = Object(clsx_m["a" /* default */])(classes.root, active && classes.active, error && classes.error, completed && classes.completed);

    if (error) {
      return /*#__PURE__*/react["createElement"](Warning, {
        className: className,
        ref: ref
      });
    }

    if (completed) {
      return /*#__PURE__*/react["createElement"](CheckCircle, {
        className: className,
        ref: ref
      });
    }

    return /*#__PURE__*/react["createElement"](SvgIcon["a" /* default */], {
      className: className,
      ref: ref
    }, StepIcon_ref, /*#__PURE__*/react["createElement"]("text", {
      className: classes.text,
      x: "12",
      y: "16",
      textAnchor: "middle"
    }, icon));
  }

  return icon;
});
 false ? undefined : void 0;
/* harmony default export */ var esm_StepIcon_StepIcon = (Object(withStyles["a" /* default */])(StepIcon_styles, {
  name: 'MuiStepIcon'
})(StepIcon_StepIcon));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/StepLabel/StepLabel.js







var StepLabel_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      alignItems: 'center',
      '&$alternativeLabel': {
        flexDirection: 'column'
      },
      '&$disabled': {
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {},

    /* Styles applied to the `Typography` component which wraps `children`. */
    label: {
      color: theme.palette.text.secondary,
      '&$active': {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      '&$completed': {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      '&$alternativeLabel': {
        textAlign: 'center',
        marginTop: 16
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },

    /* Pseudo-class applied to the `Typography` component if `active={true}`. */
    active: {},

    /* Pseudo-class applied to the `Typography` component if `completed={true}`. */
    completed: {},

    /* Pseudo-class applied to the root element and `Typography` component if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element and `Typography` component if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the `icon` container element. */
    iconContainer: {
      flexShrink: 0,
      // Fix IE 11 issue
      display: 'flex',
      paddingRight: 8,
      '&$alternativeLabel': {
        paddingRight: 0
      }
    },

    /* Pseudo-class applied to the root and icon container and `Typography` if `alternativeLabel={true}`. */
    alternativeLabel: {},

    /* Styles applied to the container element which wraps `Typography` and `optional`. */
    labelContainer: {
      width: '100%'
    }
  };
};
var StepLabel_StepLabel = /*#__PURE__*/react["forwardRef"](function StepLabel(props, ref) {
  var _props$active = props.active,
      active = _props$active === void 0 ? false : _props$active,
      _props$alternativeLab = props.alternativeLabel,
      alternativeLabel = _props$alternativeLab === void 0 ? false : _props$alternativeLab,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$completed = props.completed,
      completed = _props$completed === void 0 ? false : _props$completed,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      expanded = props.expanded,
      icon = props.icon,
      last = props.last,
      optional = props.optional,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      StepIconComponentProp = props.StepIconComponent,
      StepIconProps = props.StepIconProps,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "disabled", "error", "expanded", "icon", "last", "optional", "orientation", "StepIconComponent", "StepIconProps"]);

  var StepIconComponent = StepIconComponentProp;

  if (icon && !StepIconComponent) {
    StepIconComponent = esm_StepIcon_StepIcon;
  }

  return /*#__PURE__*/react["createElement"]("span", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, classes[orientation], className, disabled && classes.disabled, alternativeLabel && classes.alternativeLabel, error && classes.error),
    ref: ref
  }, other), icon || StepIconComponent ? /*#__PURE__*/react["createElement"]("span", {
    className: Object(clsx_m["a" /* default */])(classes.iconContainer, alternativeLabel && classes.alternativeLabel)
  }, /*#__PURE__*/react["createElement"](StepIconComponent, Object(esm_extends["a" /* default */])({
    completed: completed,
    active: active,
    error: error,
    icon: icon
  }, StepIconProps))) : null, /*#__PURE__*/react["createElement"]("span", {
    className: classes.labelContainer
  }, children ? /*#__PURE__*/react["createElement"](Typography["a" /* default */], {
    variant: "body2",
    component: "span",
    display: "block",
    className: Object(clsx_m["a" /* default */])(classes.label, alternativeLabel && classes.alternativeLabel, completed && classes.completed, active && classes.active, error && classes.error)
  }, children) : null, optional));
});
 false ? undefined : void 0;
StepLabel_StepLabel.muiName = 'StepLabel';
/* harmony default export */ var esm_StepLabel_StepLabel = (Object(withStyles["a" /* default */])(StepLabel_styles, {
  name: 'MuiStepLabel'
})(StepLabel_StepLabel));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js
var Collapse = __webpack_require__("JQEk");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/StepContent/StepContent.js






var StepContent_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      marginTop: 8,
      marginLeft: 12,
      // half icon
      paddingLeft: 8 + 12,
      // margin + half icon
      paddingRight: 8,
      borderLeft: "1px solid ".concat(theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600])
    },

    /* Styles applied to the root element if `last={true}` (controlled by `Step`). */
    last: {
      borderLeft: 'none'
    },

    /* Styles applied to the Transition component. */
    transition: {}
  };
};
var StepContent_StepContent = /*#__PURE__*/react["forwardRef"](function StepContent(props, ref) {
  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      className = props.className,
      completed = props.completed,
      expanded = props.expanded,
      last = props.last,
      optional = props.optional,
      orientation = props.orientation,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Collapse["a" /* default */] : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDurationProp = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "expanded", "last", "optional", "orientation", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  if (false) {}

  var transitionDuration = transitionDurationProp;

  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  }

  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, last && classes.last),
    ref: ref
  }, other), /*#__PURE__*/react["createElement"](TransitionComponent, Object(esm_extends["a" /* default */])({
    in: active || expanded,
    className: classes.transition,
    timeout: transitionDuration,
    unmountOnExit: true
  }, TransitionProps), children));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_StepContent_StepContent = (Object(withStyles["a" /* default */])(StepContent_styles, {
  name: 'MuiStepContent'
})(StepContent_StepContent));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__("kmB/");

// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__("TD2k");

// EXTERNAL MODULE: ../src/react/Context.tsx
var Context = __webpack_require__("2Qkp");

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__("50B7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__("o4QW");

// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__("FQT7");

// EXTERNAL MODULE: ./src/components/DeviceName.tsx
var DeviceName = __webpack_require__("5eZE");

// CONCATENATED MODULE: ./src/components/ServiceTest.tsx















 // tslint:disable-next-line: no-submodule-imports



var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return Object(createStyles["a" /* default */])({
    root: {
      width: '100%'
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    resetContainer: {
      padding: theme.spacing(3)
    }
  });
});
function ServiceTest(props) {
  var serviceSpec = props.serviceSpec;
  var serviceClass = serviceSpec.classIdentifier;

  var _useContext = Object(react["useContext"])(Context["a" /* default */]),
      bus = _useContext.bus;

  var classes = useStyles();

  var _React$useState = react_default.a.useState(0),
      activeStep = _React$useState[0],
      setActiveStep = _React$useState[1];

  var tests = [{
    label: "this is a test",
    description: "this is the description"
  }];
  var stepLength = tests.length + 1;
  var gridBreakpoints = Object(useGridBreakpoints["a" /* default */])();
  var services = Object(useChange["a" /* default */])(bus, function (n) {
    return n.devices({
      serviceClass: serviceClass
    }).map(function (dev) {
      return dev.services({
        serviceClass: serviceClass
      });
    }).reduce(function (l, r) {
      return l.concat(r);
    }, []);
  });

  var handleNext = function handleNext() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
  };

  var handleBack = function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  };

  var handleReset = function handleReset() {
    setActiveStep(0);
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_default.a.createElement("h2", null, "Compliance tests for ", /*#__PURE__*/react_default.a.createElement(gatsby_theme_material_ui["Link"], {
    to: "/services/0x" + serviceSpec.shortId
  }, serviceSpec.shortName || serviceSpec.name), "  service"), /*#__PURE__*/react_default.a.createElement(esm_Stepper_Stepper, {
    activeStep: activeStep,
    orientation: "vertical"
  }, /*#__PURE__*/react_default.a.createElement(esm_Step_Step, {
    key: "device"
  }, /*#__PURE__*/react_default.a.createElement(esm_StepLabel_StepLabel, null, "Select a service"), /*#__PURE__*/react_default.a.createElement(esm_StepContent_StepContent, null, !!services.length && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, services.map(function (service) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], Object.assign({
      item: true
    }, gridBreakpoints), /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], {
      key: "srv" + service.serviceClass
    }, /*#__PURE__*/react_default.a.createElement(CardHeader["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(DeviceName["a" /* default */], {
      device: service.device
    })), /*#__PURE__*/react_default.a.createElement(CardActions["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
      variant: "contained",
      color: "primary"
    }, "Select"))));
  })), !services.length && /*#__PURE__*/react_default.a.createElement(Alert["a" /* default */], {
    severity: "info"
  }, "Not seeing your device? Try some of the following.", /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", null, "Check that your device is connected"), /*#__PURE__*/react_default.a.createElement("li", null, "Use the ", /*#__PURE__*/react_default.a.createElement("strong", null, "packet console"), " to monitor packets on the bus"), /*#__PURE__*/react_default.a.createElement("li", null, "Check the class identifier in your annoucement packets"))))), tests.map(function (_ref) {
    var label = _ref.label,
        description = _ref.description;
    return /*#__PURE__*/react_default.a.createElement(esm_Step_Step, {
      key: label
    }, /*#__PURE__*/react_default.a.createElement(esm_StepLabel_StepLabel, null, label), /*#__PURE__*/react_default.a.createElement(esm_StepContent_StepContent, null, /*#__PURE__*/react_default.a.createElement(Markdown["a" /* default */], {
      source: description
    }), /*#__PURE__*/react_default.a.createElement("div", {
      className: classes.actionsContainer
    }, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
      disabled: activeStep === 0,
      onClick: handleBack,
      className: classes.button
    }, "Back"), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
      variant: "contained",
      color: "primary",
      onClick: handleNext,
      className: classes.button
    }, activeStep === stepLength - 1 ? 'Finish' : 'Next')))));
  })), activeStep === stepLength && /*#__PURE__*/react_default.a.createElement(Paper["a" /* default */], {
    square: true,
    elevation: 0,
    className: classes.resetContainer
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], null, "All steps completed - you're finished"), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    onClick: handleReset,
    className: classes.button
  }, "Reset")));
}
// CONCATENATED MODULE: ./src/templates/service-test.mdx


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
  }), Object(esm["mdx"])(ServiceTest, {
    serviceSpec: Object(spec["H" /* serviceSpecificationFromClassIdentifier */])(props.pageContext.node.classIdentifier),
    mdxType: "ServiceTest"
  }), Object(esm["mdx"])("h2", {
    "id": "see-also",
    "style": {
      "position": "relative"
    }
  }, Object(esm["mdx"])("a", Object.assign({
    parentName: "h2"
  }, {
    "href": "#see-also",
    "aria-label": "see also permalink",
    "className": "anchor before"
  }), Object(esm["mdx"])("svg", Object.assign({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), Object(esm["mdx"])("path", Object.assign({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "See Also"), Object(esm["mdx"])("ul", null, Object(esm["mdx"])("li", null, Object(esm["mdx"])("a", {
    href: "https://github.com/microsoft/jacdac/tree/main/services/" + props.pageContext.node.shortId + ".md"
  }, "Edit specification source"), "."), Object(esm["mdx"])("li", null, "Read ", Object(esm["mdx"])(gatsby_theme_material_ui["Link"], {
    to: "/reference/service-specification",
    mdxType: "Link"
  }, "Service Specification Language"), " reference"), Object(esm["mdx"])("li", null, "Create a new service specification using the ", Object(esm["mdx"])(gatsby_theme_material_ui["Link"], {
    to: "/tools/service-editor",
    mdxType: "Link"
  }, "Service Editor")), Object(esm["mdx"])("li", null, "Using services in JavaScript with the ", Object(esm["mdx"])(gatsby_theme_material_ui["Link"], {
    to: "/clients/web/jdom",
    mdxType: "Link"
  }, "Jacdac Object Model (JDOM)"))));
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
//# sourceMappingURL=component---src-templates-service-test-mdx-1a9b5cb96a8122356209.js.map