function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BadgeClasses } from '../../../shared/esm/classes/BadgeClasses.js';
import { BadgeColors } from '../../../shared/esm/colors/BadgeColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
const Badge = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,
    small,
    ios,
    material,
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
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const colors = BadgeColors(colorsProp);
  const size = small ? 'sm' : 'md';
  const c = themeClasses(BadgeClasses(props, colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base[size]
  }, attrs), children);
});
Badge.displayName = 'Badge';
export default Badge;