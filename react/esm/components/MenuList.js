function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import List from './List.js';
const MenuList = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/React.createElement(List, _extends({
    ref: elRef,
    menuList: true
  }, attrs), children);
});
MenuList.displayName = 'MenuList';
export default MenuList;