function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ActionsLabelClasses } from '../../../shared/esm/classes/ActionsLabelClasses.js';
import { ActionsLabelColors } from '../../../shared/esm/colors/ActionsLabelColors.js';
const ActionsLabel = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ios,
    material,
    fontSizeIos = 'text-sm',
    fontSizeMaterial = 'text-sm',
    dividers = undefined,
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
  const theme = useTheme({
    ios,
    material
  });
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = ActionsLabelColors(colorsProp, dark);
  const isDividers = typeof dividers === 'undefined' ? theme === 'ios' : dividers;
  const c = themeClasses(ActionsLabelClasses({
    fontSizeIos,
    fontSizeMaterial,
    dividers: isDividers,
    ...props
  }, colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), children);
});
ActionsLabel.displayName = 'ActionsLabel';
export default ActionsLabel;