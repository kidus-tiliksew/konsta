"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _useTheme = require("../../shared/use-theme.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CheckboxIcon = props => {
  const {
    ios,
    material,
    fill,
    ...rest
  } = props;
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  return theme === 'ios' ? /*#__PURE__*/_react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "currentcolor"
  }, rest), /*#__PURE__*/_react.default.createElement("path", {
    fill: fill || 'currentColor',
    fillRule: "evenodd",
    d: "M10.6461792,0.119820016 C11.0022676,0.346673312 11.1070333,0.819240884 10.88018,1.17532923 L5.59004012,9.47918548 C5.44456028,9.70754308 5.19802823,9.83254199 4.94596825,9.83309245 C4.59813173,9.83364386 4.39457446,9.67360825 4.28105047,9.53831563 L1.17887189,5.84128316 C0.907480501,5.5178515 0.949667479,5.03565214 1.27309914,4.76426075 C1.59653081,4.49286936 2.07873017,4.53505633 2.35012156,4.858488 L4.8346263,7.81909046 L9.59067001,0.353820775 C9.81752331,-0.00226757161 10.2900909,-0.10703328 10.6461792,0.119820016 Z",
    transform: "translate(4 5.483)"
  })) : /*#__PURE__*/_react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 18 14",
    fill: "currentcolor"
  }, rest), /*#__PURE__*/_react.default.createElement("polygon", {
    fill: fill,
    points: "6 11.17 1.83 7 .41 8.41 6 14 18 2 16.59 .59"
  }));
};
var _default = exports.default = CheckboxIcon;