function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BreadcrumbsClasses } from '../../../shared/esm/classes/BreadcrumbsClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
const Breadcrumbs = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    fontSizeIos = 'text-[17px]',
    fontSizeMaterial = 'text-[14px]',
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
  const c = themeClasses(BreadcrumbsClasses({
    ...props,
    fontSizeIos,
    fontSizeMaterial
  }), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), children);
});
Breadcrumbs.displayName = 'Breadcrumbs';
export default Breadcrumbs;