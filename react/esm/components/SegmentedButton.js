function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import Button from './Button.js';
const SegmentedButton = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    active,
    children,
    outline,
    strong,
    clear,
    rounded,
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  return /*#__PURE__*/React.createElement(Button, _extends({
    ref: elRef,
    segmented: true,
    segmentedActive: active,
    segmentedStrong: strong,
    rounded: rounded && strong
  }, rest), children);
});
SegmentedButton.displayName = 'SegmentedButton';
export default SegmentedButton;