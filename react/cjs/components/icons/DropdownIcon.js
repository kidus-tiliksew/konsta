"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DropdownIcon = props => {
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "5",
    viewBox: "0 0 8 5",
    fill: "currentcolor"
  }, props), /*#__PURE__*/_react.default.createElement("polygon", {
    fillRule: "evenodd",
    points: "0 0 8 0 4 5"
  }));
};
var _default = exports.default = DropdownIcon;