"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _cls = require("../../../shared/cjs/cls.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useTheme = require("../shared/use-theme.js");
var _calcPopoverPosition = require("../../../shared/cjs/calc-popover-position.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _PopoverClasses = require("../../../shared/cjs/classes/PopoverClasses.js");
var _PopoverColors = require("../../../shared/cjs/colors/PopoverColors.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /* eslint-disable no-restricted-globals */
const Popover = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    angle = true,
    angleClassName = '',
    colors: colorsProp,
    size = 'w-64',
    opened,
    backdrop = true,
    onBackdropClick,
    target,
    targetX,
    targetY,
    targetWidth,
    targetHeight,
    translucent = true,
    ios,
    material,
    // Children
    children,
    // Rest
    style = {},
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  const angleElRef = (0, _react.useRef)(null);
  const [positions, setPositions] = (0, _react.useState)({
    set: false,
    angleTop: 0,
    angleLeft: 0,
    anglePosition: 'bottom',
    popoverTop: 0,
    popoverLeft: 0,
    popoverPosition: 'top-left'
  });
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const state = opened ? 'opened' : 'closed';
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
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _PopoverColors.PopoverColors)(colorsProp, dark);
  const c = themeClasses((0, _PopoverClasses.PopoverClasses)({
    ...props,
    size,
    angleClassName,
    translucent
  }, colors, className), className);
  const setPopover = () => {
    if (!target || !elRef.current || !opened) return;
    setPositions((0, _calcPopoverPosition.calcPopoverPosition)({
      popoverEl: elRef.current,
      targetEl: target,
      angleEl: angleElRef.current,
      needsAngle: angle,
      targetX,
      targetY,
      targetHeight,
      targetWidth,
      theme
    }));
  };
  const attachEvents = () => {
    if (typeof window === 'undefined') return;
    window.addEventListener('resize', setPopover);
  };
  const detachEvents = () => {
    if (typeof window === 'undefined') return;
    window.removeEventListener('resize', setPopover);
  };
  (0, _react.useEffect)(() => {
    attachEvents();
    return () => detachEvents();
  });
  (0, _react.useEffect)(() => {
    setPopover();
  }, [opened]);
  const popoverStyle = positions.set ? {
    ...(style || {}),
    left: positions.popoverLeft,
    top: positions.popoverTop
  } : style;
  const angleStyle = positions.set ? {
    left: positions.angleLeft,
    top: positions.angleTop
  } : undefined;
  const originClasses = {
    'top-right': 'origin-bottom-left',
    'top-left': 'origin-bottom-right',
    'middle-left': 'origin-right',
    'middle-right': 'origin-left',
    'bottom-right': 'origin-top-left',
    'bottom-left': 'origin-top-right'
  };
  const classes = (0, _cls.cls)(c.base[state], theme === 'material' && originClasses[positions.popoverPosition]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, backdrop && /*#__PURE__*/_react.default.createElement("div", {
    className: c.backdrop[state],
    onClick: onBackdropClick
  }), /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: classes,
    style: popoverStyle
  }, attrs), angle && /*#__PURE__*/_react.default.createElement("div", {
    ref: angleElRef,
    style: angleStyle,
    className: c.angleWrap[positions.anglePosition]
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: c.angleArrow[positions.anglePosition]
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: c.inner
  }, children)));
});
Popover.displayName = 'Popover';
var _default = exports.default = Popover;