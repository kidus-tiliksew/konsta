function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { FabClasses } from '../../../shared/esm/classes/FabClasses.js';
import { FabColors } from '../../../shared/esm/colors/FabColors.js';
const Fab = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,
    href,
    text,
    textPosition = 'after',
    icon,
    ios,
    material,
    touchRipple = true,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const rippleElRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: rippleElRef.current
  }));
  const Component = component;
  const attrs = {
    ...rest
  };
  const theme = useTheme({
    ios,
    material
  });
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  useTouchRipple(rippleElRef, theme === 'material' && touchRipple);
  const colors = FabColors(colorsProp, dark);
  const c = themeClasses(FabClasses(props, colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: text ? c.base.withText : c.base.iconOnly,
    href: href,
    ref: rippleElRef,
    role: "button",
    tabIndex: "0"
  }, attrs), text && textPosition === 'before' && /*#__PURE__*/React.createElement("span", {
    className: c.text
  }, text), icon && /*#__PURE__*/React.createElement("span", {
    className: c.icon
  }, icon), text && textPosition === 'after' && /*#__PURE__*/React.createElement("span", {
    className: c.text
  }, text), children);
});
Fab.displayName = 'Fab';
export default Fab;