"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useTheme = require("../shared/use-theme.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _useTouchRipple = require("../shared/use-touch-ripple.js");
var _ListButtonClasses = require("../../../shared/cjs/classes/ListButtonClasses.js");
var _ListButtonColors = require("../../../shared/cjs/colors/ListButtonColors.js");
var _useListDividers = require("../shared/use-list-dividers.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ListButton = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'li',
    className,
    colors: colorsProp,
    // Link props
    href,
    target,
    // Button props
    type,
    value,
    linkComponent = 'a',
    linkProps = {},
    ios,
    material,
    touchRipple = true,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  const rippleElRef = (0, _react.useRef)(null);
  const dividers = (0, _useListDividers.useListDividers)();
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const attrs = {
    ...rest
  };
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  (0, _useTouchRipple.useTouchRipple)(rippleElRef, theme === 'material' && touchRipple);
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _ListButtonColors.ListButtonColors)(colorsProp, dark);
  const c = themeClasses((0, _ListButtonClasses.ListButtonClasses)({
    ...props,
    dividers
  }, colors, className, theme), className);
  const isLink = !!href || href === '';
  const hrefComputed = !isLink || href === true || href === false ? undefined : href || '';
  const buttonAttrs = {
    href: hrefComputed,
    target,
    type,
    value,
    ...linkProps
  };
  const ButtonComponent = isLink ? linkComponent : 'button';
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement(ButtonComponent, _extends({
    ref: rippleElRef,
    className: c.button
  }, buttonAttrs), children));
});
ListButton.displayName = 'ListButton';
var _default = exports.default = ListButton;