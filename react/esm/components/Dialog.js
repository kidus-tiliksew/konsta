function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { DialogClasses } from '../../../shared/esm/classes/DialogClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { DialogColors } from '../../../shared/esm/colors/DialogColors.js';
const Dialog = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    opened,
    backdrop = true,
    onBackdropClick,
    translucent = true,
    sizeIos = 'w-[16.875rem]',
    sizeMaterial = 'w-[19.5rem]',
    titleFontSizeIos = 'text-[18px]',
    titleFontSizeMaterial = 'text-[24px]',
    title,
    content,
    buttons,
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
  const state = opened ? 'opened' : 'closed';
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = DialogColors(colorsProp, dark);
  const c = themeClasses(DialogClasses({
    ...props,
    titleFontSizeIos,
    titleFontSizeMaterial,
    translucent,
    sizeIos,
    sizeMaterial
  }, colors, className, {
    hasButtons: !!buttons
  }), className);
  return /*#__PURE__*/React.createElement(React.Fragment, null, backdrop && /*#__PURE__*/React.createElement("div", {
    className: c.backdrop[state],
    onClick: onBackdropClick
  }), /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base[state]
  }, attrs), /*#__PURE__*/React.createElement("div", {
    className: c.contentWrap
  }, title && /*#__PURE__*/React.createElement("div", {
    className: c.title
  }, title), (content || children) && /*#__PURE__*/React.createElement("div", {
    className: c.content
  }, content, children)), buttons && /*#__PURE__*/React.createElement("div", {
    className: c.buttons
  }, buttons)));
});
Dialog.displayName = 'Dialog';
export default Dialog;