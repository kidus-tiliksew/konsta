function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { ToastClasses } from '../../../shared/esm/classes/ToastClasses.js';
import { ToastColors } from '../../../shared/esm/colors/ToastColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
const Toast = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    translucent = true,
    button,
    position = 'left',
    opened,
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
  const dark = useDarkClasses();
  const colors = ToastColors(colorsProp, dark);
  const c = themeClasses(ToastClasses({
    ...props,
    translucent
  }, colors, className), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base[position]
  }, attrs), /*#__PURE__*/React.createElement("div", {
    className: c.content
  }, children, button && /*#__PURE__*/React.createElement("div", {
    className: c.button
  }, button)));
});
Toast.displayName = 'Toast';
export default Toast;