function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BreadcrumbsSeparatorClasses } from '../../../shared/esm/classes/BreadcrumbsSeparatorClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import ChevronIcon from './icons/ChevronIcon.js';
const BreadcrumbsSeparator = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
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
  const c = themeClasses(BreadcrumbsSeparatorClasses({
    ...props
  }), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement(ChevronIcon, {
    className: c.icon
  }), children);
});
BreadcrumbsSeparator.displayName = 'BreadcrumbsSeparator';
export default BreadcrumbsSeparator;