function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { LinkClasses } from '../../../shared/esm/classes/LinkClasses.js';
import { LinkColors } from '../../../shared/esm/colors/LinkColors.js';
const Link = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,
    // Toolbar/navbar link
    navbar,
    toolbar,
    iconOnly,
    linkProps = {},
    tabbar,
    tabbarActive,
    touchRipple = undefined,
    ios,
    material,
    onClick,
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
    ...linkProps,
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
  const needsTouchRipple = theme === 'material' && (touchRipple || (toolbar || tabbar || navbar) && typeof touchRipple === 'undefined');
  useTouchRipple(rippleElRef, needsTouchRipple);
  const colors = LinkColors(colorsProp, dark);

  // prettier-ignore
  const themeTextColor = props.navbar ? theme === 'material' ? colors.navbarTextMaterial : colors.navbarTextIos : theme === 'material' ? colors.textMaterial : colors.textIos;
  const textColor = tabbar && !tabbarActive ? colors.tabbarInactive : themeTextColor;
  const tabbarState = tabbarActive ? 'active' : 'inactive';
  const c = themeClasses(LinkClasses(props, {
    textColor,
    needsTouchRipple
  }, className));
  const classes = cls(
  // base
  c.base[tabbar ? 'default' : 'notTabbar'], toolbar && c.toolbar, navbar && c.navbar, tabbar && c.tabbar[tabbarState], className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: rippleElRef,
    className: classes
  }, attrs, {
    role: "link",
    tabIndex: "0",
    onClick: onClick
  }), children);
});
Link.displayName = 'Link';
export default Link;