function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import CheckboxIcon from './icons/CheckboxIcon.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { RadioClasses } from '../../../shared/esm/classes/RadioClasses.js';
import { RadioColors } from '../../../shared/esm/colors/RadioColors.js';
const Radio = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'label',
    className,
    colors: colorsProp,
    defaultChecked,
    checked,
    name,
    value,
    disabled,
    readOnly,
    onChange,
    ios,
    material,
    touchRipple = true,
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
  useTouchRipple(elRef, theme === 'material' && touchRipple);
  const colors = RadioColors(colorsProp, dark);
  const state = checked || defaultChecked && !onChange ? 'checked' : 'notChecked';
  const c = themeClasses(RadioClasses(props, colors, className, dark), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    disabled: disabled,
    readOnly: readOnly,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    className: c.input
  }), /*#__PURE__*/React.createElement("i", {
    className: c.iconWrap[state]
  }, theme === 'ios' ? /*#__PURE__*/React.createElement(CheckboxIcon, {
    className: c.icon[state]
  }) : /*#__PURE__*/React.createElement("span", {
    className: c.icon[state]
  })), children);
});
Radio.displayName = 'Radio';
export default Radio;