"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _MessagebarClasses = require("../../../shared/cjs/classes/MessagebarClasses.js");
var _MessagebarColors = require("../../../shared/cjs/colors/MessagebarColors.js");
var _Toolbar = _interopRequireDefault(require("./Toolbar.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // import Link from './Link.js';
const Messagebar = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    id,
    style,
    name,
    placeholder = 'Message',
    value,
    outline = false,
    // eslint-disable-next-line
    leftClassName = '',
    // eslint-disable-next-line
    rightClassName = '',
    textareaId,
    disabled,
    size,
    left,
    right,
    ios,
    material,
    onInput,
    onChange,
    onFocus,
    children,
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  const areaElRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    areaElRef: areaElRef.current
  }));
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _MessagebarColors.MessagebarColors)(colorsProp, dark);
  const onFocusInternal = e => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };
  const c = themeClasses((0, _MessagebarClasses.MessagebarClasses)({
    ...props
  }, colors, {
    isFocused
  }));
  const Component = component;
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    id: id,
    style: style,
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    colors: colors,
    outline: outline
  }, left && /*#__PURE__*/_react.default.createElement("div", {
    className: c.left
  }, left), /*#__PURE__*/_react.default.createElement("div", {
    className: c.messagebarArea
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    id: textareaId,
    ref: areaElRef,
    type: "textarea",
    className: c.messagebarInput,
    placeholder: placeholder,
    name: name,
    size: size,
    disabled: disabled,
    onInput: onInput,
    onChange: onChange,
    onFocus: onFocusInternal,
    value: value
  })), right && /*#__PURE__*/_react.default.createElement("div", {
    className: c.right
  }, right)));
});
Messagebar.displayName = 'Messagebar';
var _default = exports.default = Messagebar;