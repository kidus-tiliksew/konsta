function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { KonstaProvider } from '../shared/KonstaProvider.js';
import { useAutoTheme } from '../shared/use-auto-theme.js';
import { AppClasses } from '../../../shared/esm/classes/AppClasses.js';
const App = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    theme = 'material',
    dark = true,
    touchRipple = true,
    safeAreas = true,
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
  const currentTheme = useAutoTheme(theme);
  const classes = AppClasses({
    ...props,
    safeAreas
  }, currentTheme, className);
  return /*#__PURE__*/React.createElement(KonstaProvider, {
    theme: currentTheme,
    dark: dark,
    touchRipple: touchRipple,
    autoThemeDetection: false
  }, /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), children));
});
App.displayName = 'App';
export default App;