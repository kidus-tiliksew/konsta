function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { DialogButtonClasses } from '../../../shared/esm/classes/DialogButtonClasses.js';
import { DialogButtonColors } from '../../../shared/esm/colors/DialogButtonColors.js';
import Button from './Button.js';
const DialogButton = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'button',
    className,
    colors: colorsProp,
    ios,
    material,
    disabled,
    strong,
    strongIos,
    strongMaterial,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
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
  const colors = DialogButtonColors(colorsProp, dark);
  const isStrong = typeof strong === 'undefined' ? theme === 'ios' ? strongIos : strongMaterial : strong;
  const c = themeClasses(DialogButtonClasses({
    ...props,
    strong: isStrong
  }, colors, dark), className);
  const Component = component;
  if (theme === 'ios') return /*#__PURE__*/React.createElement(Component, _extends({
    className: c.base,
    disabled: disabled,
    role: "button",
    tabIndex: "0"
  }, attrs), children);
  return /*#__PURE__*/React.createElement(Button, _extends({
    component: component,
    inline: true,
    rounded: true,
    disabled: disabled,
    clear: !isStrong,
    className: className
  }, attrs), children);
});
DialogButton.displayName = 'DialogButton';
export default DialogButton;