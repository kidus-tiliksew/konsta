"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _cls = require("../../../shared/cjs/cls.js");
var _SegmentedClasses = require("../../../shared/cjs/classes/SegmentedClasses.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _SegmentedColors = require("../../../shared/cjs/colors/SegmentedColors.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Segmented = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ios,
    material,
    // Style props
    raised,
    outline,
    strong,
    rounded,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  const highlightElRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const [highlightStyle, setHighlightStyle] = (0, _react.useState)({
    transform: '',
    width: ''
  });
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _SegmentedColors.SegmentedColors)(colorsProp, dark);
  const c = themeClasses((0, _SegmentedClasses.SegmentedClasses)(props, colors, dark));
  const classes = (0, _cls.cls)(
  // base
  rounded ? c.base.rounded : c.base.square, raised && c.raised, outline && c.outline, strong && c.strong, className);
  (0, _react.useEffect)(() => {
    if (strong && highlightElRef.current) {
      const buttonsEl = highlightElRef.current.parentElement;
      const buttonsLength = buttonsEl.children.length - 1;
      const activeIndex = [...buttonsEl.children].indexOf(buttonsEl.querySelector('.k-segmented-strong-button-active'));
      const between = '4px';
      const padding = '2px';
      setHighlightStyle({
        ...highlightStyle,
        width: `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`,
        transform: `translateX(calc((${activeIndex} * 100% + ${activeIndex} * ${between}) * var(--k-rtl-reverse)))`
      });
    }
  }, [children]);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), outline ? /*#__PURE__*/_react.default.createElement("span", {
    className: c.outlineInner
  }, children) : children, strong && /*#__PURE__*/_react.default.createElement("span", {
    ref: highlightElRef,
    className: c.strongHighlight,
    style: highlightStyle
  }));
});
Segmented.displayName = 'Segmented';
var _default = exports.default = Segmented;