"use strict";

exports.__esModule = true;
exports.KonstaContext = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const KonstaContext = exports.KonstaContext = /*#__PURE__*/_react.default.createContext({
  theme: 'material',
  dark: true,
  touchRipple: true
});