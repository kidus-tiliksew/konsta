"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useTheme = require("../shared/use-theme.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _NavbarClasses = require("../../../shared/cjs/classes/NavbarClasses.js");
var _NavbarColors = require("../../../shared/cjs/colors/NavbarColors.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Navbar = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    bgClassName = '',
    innerClassName = '',
    leftClassName = '',
    titleClassName = '',
    subtitleClassName = '',
    rightClassName = '',
    subnavbarClassName = '',
    centerTitle,
    colors: colorsProp,
    translucent = true,
    outline,
    medium,
    large,
    transparent,
    fontSizeIos = 'text-[17px]',
    fontSizeMaterial = 'text-[16px]',
    titleFontSizeIos = 'text-[17px]',
    titleFontSizeMaterial = 'text-[22px]',
    titleMediumFontSizeIos = 'text-[24px]',
    titleMediumFontSizeMaterial = 'text-[24px]',
    titleLargeFontSizeIos = 'text-[34px]',
    titleLargeFontSizeMaterial = 'text-[28px]',
    scrollEl,
    left,
    title,
    subtitle,
    right,
    subnavbar,
    ios,
    material,
    children,
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  const titleContainerHeight = (0, _react.useRef)(0);
  const bgElRef = (0, _react.useRef)(null);
  const innerElRef = (0, _react.useRef)(null);
  const titleContainerElRef = (0, _react.useRef)(null);
  const titleElRef = (0, _react.useRef)(null);
  const subnavbarElRef = (0, _react.useRef)(null);
  const wasScrollable = (0, _react.useRef)(null);
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
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const attrs = {
    ...rest
  };
  const colors = (0, _NavbarColors.NavbarColors)(colorsProp, dark);
  const onScroll = e => {
    const {
      scrollTop
    } = e.target;
    if (!transparent && !large && !medium) {
      if (wasScrollable.current) {
        if (titleElRef.current) {
          titleElRef.current.style.opacity = '';
        }
        if (bgElRef.current) {
          bgElRef.current.style.opacity = '';
        }
      }
      return;
    }
    const maxTranslate = titleContainerHeight.current;
    const scrollProgress = Math.max(Math.min(scrollTop / maxTranslate, 1), 0);
    bgElRef.current.style.opacity = transparent ? -0.5 + scrollProgress * 1.5 : '';
    if (medium || large) {
      bgElRef.current.style.transform = `translateY(-${scrollProgress * maxTranslate}px)`;
    }
    if (titleContainerElRef.current) {
      titleContainerElRef.current.style.transform = `translateY(-${scrollProgress * maxTranslate}px)`;
      titleContainerElRef.current.style.opacity = 1 - scrollProgress * 2;
    }
    if (titleElRef.current) {
      titleElRef.current.style.opacity = -0.5 + scrollProgress * 1.5;
    }
    if ((medium || large) && subnavbarElRef.current) {
      subnavbarElRef.current.style.transform = `translateY(-${scrollProgress * maxTranslate}px)`;
    }
  };
  const getScrollEl = () => {
    if (typeof scrollEl === 'undefined') {
      return elRef.current && elRef.current.parentNode;
    }
    return scrollEl.current || scrollEl;
  };
  const initScroll = () => {
    if (!large && !medium && !transparent) {
      if (wasScrollable.current) {
        onScroll({
          target: {
            scrollTop: 0
          }
        });
        wasScrollable.current = false;
      }
      return;
    }
    wasScrollable.current = true;
    if (titleContainerElRef.current) {
      titleContainerHeight.current = titleContainerElRef.current.offsetHeight;
    } else {
      titleContainerHeight.current = innerElRef.current.offsetHeight;
    }
    const scrollElLocal = getScrollEl();
    if (scrollElLocal) {
      scrollElLocal.addEventListener('scroll', onScroll);
      onScroll({
        target: scrollElLocal
      });
    } else {
      onScroll({
        target: {
          scrollTop: 0
        }
      });
    }
  };
  const destroyScroll = () => {
    const scrollElLocal = getScrollEl();
    if (scrollElLocal) {
      scrollElLocal.removeEventListener('scroll', onScroll);
    }
  };
  (0, _react.useEffect)(() => {
    initScroll();
    return destroyScroll;
  });
  const isOutline = typeof outline === 'undefined' ? theme === 'ios' : outline;
  const c = themeClasses((0, _NavbarClasses.NavbarClasses)({
    ...props,
    centerTitle: typeof centerTitle === 'undefined' ? theme === 'ios' : centerTitle,
    translucent,
    outline: isOutline,
    fontSizeIos,
    fontSizeMaterial,
    titleFontSizeIos,
    titleFontSizeMaterial,
    titleMediumFontSizeIos,
    titleMediumFontSizeMaterial,
    titleLargeFontSizeIos,
    titleLargeFontSizeMaterial,
    bgClassName,
    innerClassName,
    leftClassName,
    titleClassName,
    subtitleClassName,
    rightClassName,
    subnavbarClassName
  }, colors, className), className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement("div", {
    className: c.bg,
    ref: bgElRef
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: c.inner,
    ref: innerElRef
  }, left && /*#__PURE__*/_react.default.createElement("div", {
    className: c.left
  }, left), (title || subtitle) && /*#__PURE__*/_react.default.createElement("div", {
    className: c.title,
    ref: titleElRef
  }, title, subtitle && /*#__PURE__*/_react.default.createElement("div", {
    className: c.subtitle
  }, subtitle)), right && /*#__PURE__*/_react.default.createElement("div", {
    className: c.right
  }, right), children), (large || medium) && /*#__PURE__*/_react.default.createElement("div", {
    className: c.titleContainer,
    ref: titleContainerElRef
  }, title), subnavbar && /*#__PURE__*/_react.default.createElement("div", {
    className: c.subnavbar,
    ref: subnavbarElRef
  }, subnavbar));
});
Navbar.displayName = 'Navbar';
var _default = exports.default = Navbar;