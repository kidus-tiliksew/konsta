function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BreadcrumbsItemClasses } from '../../../shared/esm/classes/BreadcrumbsItemClasses.js';
import { BreadcrumbsItemColors } from '../../../shared/esm/colors/BreadcrumbsItemColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
const BreadcrumbsItem = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    ios,
    material,
    colors: colorsProp,
    active,
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
  const dark = useDarkClasses();
  const colors = BreadcrumbsItemColors(colorsProp, dark);
  const c = themeClasses(BreadcrumbsItemClasses({
    ...props
  }, colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base,
    role: "menuitem",
    tabIndex: "0"
  }, attrs), children);
});
BreadcrumbsItem.displayName = 'BreadcrumbsItem';
export default BreadcrumbsItem;