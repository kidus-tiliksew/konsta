function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { RangeClasses } from '../../../shared/esm/classes/RangeClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { RangeColors } from '../../../shared/esm/colors/RangeColors.js';
const Range = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ios,
    material,
    // Children
    children,
    inputId,
    name,
    value = undefined,
    defaultValue,
    readOnly,
    disabled,
    step = 1,
    min = 0,
    max = 100,
    onInput,
    onChange,
    onFocus,
    onBlur,
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
  const colors = RangeColors(colorsProp, dark);
  const c = themeClasses(RangeClasses(props, colors, dark), className);
  const valueWidth = ((value || 0) - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement("span", {
    className: c.trackBg
  }), /*#__PURE__*/React.createElement("span", {
    className: c.trackValue,
    style: {
      width: `${valueWidth}%`
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: cls(c.input, c.inputThumb, c.inputTrack),
    type: "range",
    id: inputId,
    name: name,
    min: min,
    max: max,
    step: step,
    value: value,
    defaultValue: defaultValue,
    readOnly: readOnly,
    disabled: disabled,
    onInput: onInput,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur
  }));
});
Range.displayName = 'Range';
export default Range;