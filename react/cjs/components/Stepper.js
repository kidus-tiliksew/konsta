"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _cls = require("../../../shared/cjs/cls.js");
var _useTheme = require("../shared/use-theme.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _useTouchRipple = require("../shared/use-touch-ripple.js");
var _StepperClasses = require("../../../shared/cjs/classes/StepperClasses.js");
var _StepperColors = require("../../../shared/cjs/colors/StepperColors.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Stepper = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,
    value = 0,
    defaultValue,
    input = false,
    inputType = 'text',
    inputPlaceholder,
    inputDisabled,
    inputReadOnly,
    buttonsOnly,
    rounded,
    roundedIos,
    roundedMaterial,
    small,
    smallIos,
    smallMaterial,
    large,
    largeIos,
    largeMaterial,
    raised,
    raisedIos,
    raisedMaterial,
    outline,
    outlineIos,
    outlineMaterial,
    onInput,
    onChange,
    onFocus,
    onBlur,
    onMinus,
    onPlus,
    ios,
    material,
    touchRipple = true,
    children,
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  const buttonLeftElRef = (0, _react.useRef)(null);
  const buttonRightElRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  (0, _useTouchRipple.useTouchRipple)(buttonLeftElRef, theme === 'material' && touchRipple);
  (0, _useTouchRipple.useTouchRipple)(buttonRightElRef, theme === 'material' && touchRipple);
  const isRounded = typeof rounded === 'undefined' ? theme === 'ios' ? roundedIos : roundedMaterial : rounded;
  const isSmall = typeof small === 'undefined' ? theme === 'ios' ? smallIos : smallMaterial : small;
  const isLarge = typeof large === 'undefined' ? theme === 'ios' ? largeIos : largeMaterial : large;
  const isRaised = typeof raised === 'undefined' ? theme === 'ios' ? raisedIos : raisedMaterial : raised;
  const isOutline = typeof outline === 'undefined' ? theme === 'ios' ? outlineIos : outlineMaterial : outline;
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _StepperColors.StepperColors)(colorsProp, dark);
  const size = isLarge ? 'large' : isSmall ? 'small' : 'medium';
  const style = isOutline && isRaised ? 'clear' : isOutline ? 'outline' : 'fill';
  const shape = isRounded ? 'rounded' : 'square';
  const c = themeClasses((0, _StepperClasses.StepperClasses)({
    ...props,
    rounded: isRounded,
    small: isSmall,
    large: isLarge,
    raised: isRaised,
    outline: isOutline
  }, colors));
  const attrs = {
    ...rest
  };
  const classes = (0, _cls.cls)(c.base, isRaised && c.raised, c.size[size], c.shape[shape], className);
  const buttonLeftClasses = (0, _cls.cls)(c.button, c.buttonStyle[style], c.buttonLeftShape[shape]);
  const buttonRightClasses = (0, _cls.cls)(c.button, c.buttonStyle[style], c.buttonRightShape[shape]);
  const valueClasses = (0, _cls.cls)(input && c.input, c.value[style]);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), /*#__PURE__*/_react.default.createElement("span", {
    ref: buttonLeftElRef,
    className: buttonLeftClasses,
    role: "button",
    tabIndex: "0",
    onClick: onMinus
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: c.hBar
  })), input && !buttonsOnly && /*#__PURE__*/_react.default.createElement("input", {
    className: valueClasses,
    placeholder: inputPlaceholder,
    type: inputType,
    value: value,
    defaultValue: defaultValue,
    disabled: inputDisabled,
    readOnly: inputReadOnly,
    onInput: onInput,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur
  }), !input && !buttonsOnly && /*#__PURE__*/_react.default.createElement("span", {
    className: valueClasses
  }, value), /*#__PURE__*/_react.default.createElement("span", {
    ref: buttonRightElRef,
    className: buttonRightClasses,
    role: "button",
    tabIndex: "0",
    onClick: onPlus
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: c.hBar
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: c.vBar
  })));
});
Stepper.displayName = 'Stepper';
var _default = exports.default = Stepper;