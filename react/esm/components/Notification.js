function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { NotificationsClasses } from '../../../shared/esm/classes/NotificationsClasses.js';
import { NotificationsColors } from '../../../shared/esm/colors/NotificationsColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useTheme } from '../shared/use-theme.js';
import DeleteIcon from './icons/DeleteIcon.js';
const Notification = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    button,
    icon,
    title,
    titleRightText,
    subtitle,
    text,
    translucent = true,
    opened,
    onClose,
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
  const theme = useTheme({
    ios,
    material
  });
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = NotificationsColors(colorsProp, dark);
  const c = themeClasses(NotificationsClasses({
    ...props,
    translucent
  }, colors, className), className);
  if (theme === 'ios') return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement("div", {
    className: c.header
  }, icon && /*#__PURE__*/React.createElement("div", {
    className: c.icon
  }, icon), title && /*#__PURE__*/React.createElement("div", {
    className: c.title
  }, title), titleRightText && /*#__PURE__*/React.createElement("div", {
    className: c.titleRightText
  }, titleRightText), button && /*#__PURE__*/React.createElement("div", {
    className: c.button,
    role: "button",
    tabIndex: "0",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(DeleteIcon, {
    theme: theme,
    className: c.deleteIcon
  }))), /*#__PURE__*/React.createElement("div", {
    className: c.content
  }, subtitle && /*#__PURE__*/React.createElement("div", {
    className: c.subtitle
  }, subtitle), text && /*#__PURE__*/React.createElement("div", {
    className: c.text
  }, text), children));
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement("div", {
    className: c.header
  }, icon && /*#__PURE__*/React.createElement("div", {
    className: c.icon
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: c.contentWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: c.contentTitle
  }, title && /*#__PURE__*/React.createElement("div", {
    className: c.title
  }, title), titleRightText && /*#__PURE__*/React.createElement("div", {
    className: c.titleRightText
  }, titleRightText)), /*#__PURE__*/React.createElement("div", {
    className: c.content
  }, subtitle && /*#__PURE__*/React.createElement("div", {
    className: c.subtitle
  }, subtitle), text && /*#__PURE__*/React.createElement("div", {
    className: c.text
  }, text), children)), button && /*#__PURE__*/React.createElement("div", {
    className: c.button,
    role: "button",
    tabIndex: "0",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(DeleteIcon, {
    theme: theme,
    className: c.deleteIcon
  }))));
});
Notification.displayName = 'Notification';
export default Notification;