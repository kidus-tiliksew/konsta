function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { TableHeadClasses } from '../../../shared/esm/classes/TableHeadClasses.js';
const TableHead = /*#__PURE__*/forwardRef((props, ref) => {
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
  const c = themeClasses(TableHeadClasses({
    ...props
  }));
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/React.createElement("thead", _extends({
    className: c.base,
    ref: elRef
  }, attrs), children);
});
TableHead.displayName = 'TableHead';
export default TableHead;