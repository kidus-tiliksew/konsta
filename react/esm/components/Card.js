function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { CardClasses } from '../../../shared/esm/classes/CardClasses.js';
import { CardColors } from '../../../shared/esm/colors/CardColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
const Card = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    margin = 'm-4',
    colors: colorsProp,
    header,
    footer,
    ios,
    material,
    headerFontSizeIos = 'text-[17px]',
    headerFontSizeMaterial = 'text-[22px]',
    contentWrap = true,
    contentWrapPadding = 'p-4',
    // Style
    raised,
    raisedIos,
    raisedMaterial,
    outline,
    outlineIos,
    outlineMaterial,
    headerDivider = false,
    footerDivider = false,
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
  const theme = useTheme();
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = CardColors(colorsProp, dark);
  const isOutline = typeof outline === 'undefined' ? theme === 'ios' ? outlineIos : outlineMaterial : outline;
  const isRaised = typeof raised === 'undefined' ? theme === 'ios' ? raisedIos : raisedMaterial : raised;
  const style = isOutline ? 'outline' : isRaised ? 'raised' : 'plain';
  const c = themeClasses(CardClasses({
    ...props,
    margin,
    contentWrapPadding,
    headerDivider,
    footerDivider,
    headerFontSizeIos,
    headerFontSizeMaterial,
    outline: isOutline,
    raised: isRaised
  }, colors, dark), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base[style]
  }, attrs), header && /*#__PURE__*/React.createElement("div", {
    className: c.header
  }, header), contentWrap ? /*#__PURE__*/React.createElement("div", {
    className: c.content
  }, children) : children, footer && /*#__PURE__*/React.createElement("div", {
    className: c.footer
  }, footer));
});
Card.displayName = 'Card';
export default Card;