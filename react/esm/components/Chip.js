function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { ChipClasses } from '../../../shared/esm/classes/ChipClasses.js';
import { ChipColors } from '../../../shared/esm/colors/ChipColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
import DeleteIcon from './icons/DeleteIcon.js';
const Chip = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    media,
    deleteButton,
    onDelete,
    ios,
    material,
    // Style
    outline,
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
  const theme = useTheme({
    ios,
    material
  });
  const dark = useDarkClasses();
  const style = outline ? 'outline' : 'fill';
  const colors = ChipColors(colorsProp, dark);
  const c = themeClasses(ChipClasses(props, colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base[style]
  }, attrs), media && /*#__PURE__*/React.createElement("div", {
    className: c.media
  }, media), children, deleteButton && /*#__PURE__*/React.createElement("div", {
    className: c.deleteButton,
    role: "button",
    tabIndex: "0",
    onClick: onDelete
  }, /*#__PURE__*/React.createElement(DeleteIcon, {
    theme: theme,
    className: "h-4 w-4"
  })));
});
Chip.displayName = 'Chip';
export default Chip;