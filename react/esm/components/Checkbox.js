function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { CheckboxClasses } from '../../../shared/esm/classes/CheckboxClasses.js';
import { CheckboxColors } from '../../../shared/esm/colors/CheckboxColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import CheckboxIcon from './icons/CheckboxIcon.js';
const Checkbox = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'label',
    className,
    colors: colorsProp,
    defaultChecked,
    checked,
    indeterminate,
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
  const inputElRef = useRef(null);
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current,
    inputEl: inputElRef.current
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
  const colors = CheckboxColors(colorsProp, dark);
  const state = checked || defaultChecked && !onChange || indeterminate ? 'checked' : 'notChecked';
  const c = themeClasses(CheckboxClasses(props, colors, className, dark), className);
  useEffect(() => {
    if (inputElRef.current) {
      inputElRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement("input", {
    ref: inputElRef,
    type: "checkbox",
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
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    className: c.indeterminateIcon
  }) : /*#__PURE__*/React.createElement(CheckboxIcon, {
    ios: ios,
    material: material,
    className: c.icon[state]
  })), children);
});
Checkbox.displayName = 'Checkbox';
export default Checkbox;