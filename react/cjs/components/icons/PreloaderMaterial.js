"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PreloaderMaterial = props => {
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, {
    fill: "none",
    stroke: "currentcolor"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "16"
  }));
};
var _default = exports.default = PreloaderMaterial;