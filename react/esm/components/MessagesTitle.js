function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { MessagesTitleClasses } from '../../../shared/esm/classes/MessagesTitleClasses.js';
import { MessagesTitleColors } from '../../../shared/esm/colors/MessagesTitleColors.js';
const MessagesTitle = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ios,
    material,
    id,
    children,
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = MessagesTitleColors(colorsProp, dark);
  const c = themeClasses(MessagesTitleClasses({
    ...props
  }, colors));
  const Component = component;
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/React.createElement(Component, _extends({
    id: id,
    className: c.base,
    ref: elRef
  }, attrs), children);
});
MessagesTitle.displayName = 'MessagesTitle';
export default MessagesTitle;