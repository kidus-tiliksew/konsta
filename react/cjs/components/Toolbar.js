"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useTheme = require("../shared/use-theme.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _ToolbarClasses = require("../../../shared/cjs/classes/ToolbarClasses.js");
var _ToolbarColors = require("../../../shared/cjs/colors/ToolbarColors.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Toolbar = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    translucent = true,
    bgClassName = '',
    innerClassName = '',
    outline,
    tabbar,
    tabbarIcons,
    tabbarLabels,
    top,
    ios,
    material,
    children,
    ...rest
  } = props;
  const highlightElRef = (0, _react.useRef)(null);
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const [highlightStyle, setHighlightStyle] = (0, _react.useState)({
    transform: '',
    width: ''
  });
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const attrs = {
    ...rest
  };
  const colors = (0, _ToolbarColors.ToolbarColors)(colorsProp, dark);
  const isOutline = typeof outline === 'undefined' ? theme === 'ios' : outline;
  const c = themeClasses((0, _ToolbarClasses.ToolbarClasses)({
    ...props,
    outline: isOutline,
    translucent,
    bgClassName,
    innerClassName
  }, colors, className), className);
  const hasHighlight = theme === 'material' && tabbar && !tabbarIcons;
  (0, _react.useEffect)(() => {
    if (hasHighlight && highlightElRef.current) {
      const linksEl = highlightElRef.current.previousElementSibling;
      const width = 1 / linksEl.children.length * 100;
      const activeIndex = [...linksEl.children].indexOf(linksEl.querySelector('.k-tabbar-link-active'));
      setHighlightStyle({
        ...highlightStyle,
        width: `${width}%`,
        transform: `translateX(${activeIndex * 100}%)`
      });
    }
  }, [children]);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement("div", {
    className: c.bg
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: c.inner
  }, children), hasHighlight && /*#__PURE__*/_react.default.createElement("span", {
    className: c.highlight,
    style: highlightStyle,
    ref: highlightElRef
  }));
});
Toolbar.displayName = 'Toolbar';
var _default = exports.default = Toolbar;