"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _cls = require("../../../shared/cjs/cls.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _MessageClasses = require("../../../shared/cjs/classes/MessageClasses.js");
var _MessageColors = require("../../../shared/cjs/colors/MessageColors.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /* eslint-disable jsx-a11y/alt-text */ // import { useTheme } from '../shared/use-theme.js';
const Message = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    id,
    text,
    name,
    type = 'sent',
    header,
    footer,
    textHeader,
    textFooter,
    avatar,
    ios,
    material,
    children,
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  // const theme = useTheme({ ios, material });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _MessageColors.MessageColors)(colorsProp, dark);
  const c = themeClasses((0, _MessageClasses.MessageClasses)({
    ...props
  }, colors));
  const Component = component;
  const attrs = {
    ...rest
  };
  const classes = (0, _cls.cls)(className, c.message, {
    [c.messageSent]: type === 'sent',
    [c.messageReceived]: type === 'received'
  });
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    id: id,
    ref: elRef,
    className: classes
  }, attrs), avatar && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageAvatar
  }, avatar), /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageContent
  }, name && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageName
  }, name), header && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageHeader
  }, header), /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageBubble
  }, textHeader && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageTextHeader
  }, textHeader), text && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageText
  }, text), textFooter && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageTextFooter
  }, textFooter)), footer && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageFooter
  }, footer)));
});
Message.displayName = 'Message';
var _default = exports.default = Message;