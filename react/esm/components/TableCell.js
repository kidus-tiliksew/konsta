function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { TableCellClasses } from '../../../shared/esm/classes/TableCellClasses.js';
import { TableCellColors } from '../../../shared/esm/colors/TableCellColors.js';
const TableCell = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    className,
    colors: colorsProp,
    header,
    ios,
    material,
    children,
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const Component = header ? 'th' : 'td';
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = TableCellColors(colorsProp, dark);
  const c = themeClasses(TableCellClasses({
    ...props
  }, colors, className));
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: c.base,
    ref: elRef
  }, attrs), children);
});
TableCell.displayName = 'TableCell';
export default TableCell;