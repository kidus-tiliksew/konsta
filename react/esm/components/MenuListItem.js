function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import ListItem from './ListItem.js';
const MenuListItem = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    active,
    href,
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
  return /*#__PURE__*/React.createElement(ListItem, _extends({
    ref: elRef,
    menuListItem: true,
    menuListItemActive: active,
    href: href || false
  }, attrs), children);
});
MenuListItem.displayName = 'MenuListItem';
export default MenuListItem;