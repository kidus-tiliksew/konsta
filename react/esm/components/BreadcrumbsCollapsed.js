function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BreadcrumbsCollapsedClasses } from '../../../shared/esm/classes/BreadcrumbsCollapsedClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { BreadcrumbsCollapsedColors } from '../../../shared/esm/colors/BreadcrumbsCollapsedColors.js';
const BreadcrumbsCollapsed = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
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
  const dark = useDarkClasses();
  const colors = BreadcrumbsCollapsedColors(colorsProp, dark);
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const c = themeClasses(BreadcrumbsCollapsedClasses({
    ...props
  }, colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    role: "button",
    tabIndex: "0",
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement("span", {
    className: c.dot
  }), /*#__PURE__*/React.createElement("span", {
    className: c.dot
  }), /*#__PURE__*/React.createElement("span", {
    className: c.dot
  }), children);
});
BreadcrumbsCollapsed.displayName = 'BreadcrumbsCollapsed';
export default BreadcrumbsCollapsed;