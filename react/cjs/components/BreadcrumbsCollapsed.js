"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BreadcrumbsCollapsedClasses = require("../../../shared/cjs/classes/BreadcrumbsCollapsedClasses.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _BreadcrumbsCollapsedColors = require("../../../shared/cjs/colors/BreadcrumbsCollapsedColors.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BreadcrumbsCollapsed = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ios,
    material,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _BreadcrumbsCollapsedColors.BreadcrumbsCollapsedColors)(colorsProp, dark);
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const c = themeClasses((0, _BreadcrumbsCollapsedClasses.BreadcrumbsCollapsedClasses)({
    ...props
  }, colors), className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    role: "button",
    tabIndex: "0",
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement("span", {
    className: c.dot
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: c.dot
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: c.dot
  }), children);
});
BreadcrumbsCollapsed.displayName = 'BreadcrumbsCollapsed';
var _default = exports.default = BreadcrumbsCollapsed;