function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import Badge from './Badge.js';
import { IconClasses } from '../../../shared/esm/classes/IconClasses.js';
const Icon = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'i',
    className,
    ios,
    material,
    badge,
    badgeColors,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = useThemeClasses();
  const theme = useTheme();
  const c = themeClasses(IconClasses(props, className), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), theme === 'ios' ? ios : material, typeof badge !== 'undefined' && badge !== null && /*#__PURE__*/React.createElement(Badge, {
    small: true,
    className: c.badge,
    colors: badgeColors
  }, badge), children);
});
Icon.displayName = 'Icon';
export default Icon;