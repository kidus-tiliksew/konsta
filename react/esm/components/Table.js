function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { TableClasses } from '../../../shared/esm/classes/TableClasses.js';
const Table = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    className,
    ios,
    material,
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
  const c = themeClasses(TableClasses({
    ...props
  }));
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/React.createElement("table", _extends({
    className: c.base,
    ref: elRef
  }, attrs), children);
});
Table.displayName = 'Table';
export default Table;