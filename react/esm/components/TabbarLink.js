function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { TabbarLinkClasses } from '../../../shared/esm/classes/TabbarLinkClasses.js';
import { TabbarLinkColors } from '../../../shared/esm/colors/TabbarLinkColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import Link from './Link.js';
const TabbarLink = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    className,
    active,
    ios,
    material,
    colors: colorsProp,
    linkProps = {},
    icon,
    label,
    children,
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const attrs = {
    ...linkProps,
    ...rest
  };
  const dark = useDarkClasses();
  const colors = TabbarLinkColors(colorsProp, dark);
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const hasIcon = !!icon;
  const hasLabel = label || children && children.length;
  const c = themeClasses(TabbarLinkClasses({
    hasLabel,
    hasIcon,
    active
  }, colors));
  return /*#__PURE__*/React.createElement(Link, _extends({
    ref: elRef,
    tabbar: true,
    tabbarActive: active,
    className: className
  }, attrs), /*#__PURE__*/React.createElement("span", {
    className: c.content
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: c.iconContainer
  }, /*#__PURE__*/React.createElement("span", {
    className: c.iconBg
  }), icon), (label || children && children.length) && /*#__PURE__*/React.createElement("span", {
    className: c.label
  }, label, children)));
});
TabbarLink.displayName = 'TabbarLink';
export default TabbarLink;