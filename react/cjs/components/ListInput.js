"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _cls = require("../../../shared/cjs/cls.js");
var _useTheme = require("../shared/use-theme.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _DeleteIcon = _interopRequireDefault(require("./icons/DeleteIcon.js"));
var _DropdownIcon = _interopRequireDefault(require("./icons/DropdownIcon.js"));
var _ListItem = _interopRequireDefault(require("./ListItem.js"));
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _ListInputClasses = require("../../../shared/cjs/classes/ListInputClasses.js");
var _ListInputColors = require("../../../shared/cjs/colors/ListInputColors.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ListInput = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'li',
    className,
    colors: colorsProp,
    label,
    floatingLabel,
    outline,
    outlineIos,
    outlineMaterial,
    media,
    input,
    // for custom input
    info,
    // string
    error,
    // string or bool
    clearButton,
    dropdown,
    // input props
    inputId,
    inputStyle,
    inputClassName = '',
    name,
    value,
    defaultValue,
    type = 'text',
    inputMode,
    readOnly,
    required,
    disabled,
    placeholder,
    size,
    accept,
    autoComplete,
    autoCorrect,
    autoCapitalize,
    spellCheck,
    autoFocus,
    autoSave,
    max,
    min,
    step,
    maxLength,
    minLength,
    multiple,
    pattern,
    tabIndex,
    onInput,
    onChange,
    onFocus,
    onBlur,
    onClear,
    ios,
    material,
    children,
    ...rest
  } = props;
  const inputElRef = (0, _react.useRef)(null);
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    inputEl: inputElRef.current
  }));
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _ListInputColors.ListInputColors)(colorsProp, dark);
  const labelStyle = label && floatingLabel ? 'floating' : 'stacked';
  const labelStyleIsFloating = labelStyle === 'floating' ? 'floating' : 'notFloating';
  const getDomValue = () => {
    if (!inputElRef.current) return undefined;
    return inputElRef.current.value;
  };
  const isInputHasValue = () => {
    const domValue = getDomValue();
    return typeof value === 'undefined' ? domValue || domValue === 0 : value || value === 0;
  };
  const isFloatingTransformed = label && floatingLabel && !isInputHasValue() && !isFocused;
  const getLabelColor = () => {
    if (error) return colors.errorText;
    if (theme === 'material') {
      return isFocused ? colors.labelTextFocusMaterial : colors.labelTextMaterial;
    }
    if (theme === 'ios') {
      return isFocused ? colors.labelTextFocusIos : colors.labelTextIos;
    }
    return '';
  };
  const onFocusInternal = e => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };
  const onBlurInternal = e => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };
  const isOutline = typeof outline === 'undefined' ? theme === 'ios' ? outlineIos : outlineMaterial : outline;
  const c = themeClasses((0, _ListInputClasses.ListInputClasses)({
    ...props,
    outline: isOutline
  }, colors, {
    isFloatingTransformed,
    isFocused,
    darkClasses: dark,
    getLabelColor,
    inputClassName,
    hasLabel: !!label
  }));
  const attrs = {
    ...rest
  };
  const createInput = () => {
    if (input) return input;
    const InputComponent = type === 'select' || type === 'textarea' ? type : 'input';
    const needsType = InputComponent === 'input';
    return /*#__PURE__*/_react.default.createElement(InputComponent, {
      id: inputId,
      ref: inputElRef,
      className: c.input[labelStyleIsFloating],
      style: inputStyle,
      name: name,
      type: needsType ? type : undefined,
      placeholder: placeholder,
      inputMode: inputMode,
      size: size,
      accept: accept,
      autoComplete: autoComplete,
      autoCorrect: autoCorrect,
      autoCapitalize: autoCapitalize,
      spellCheck: spellCheck,
      autoFocus: autoFocus,
      autoSave: autoSave,
      disabled: disabled,
      max: max,
      maxLength: maxLength,
      min: min,
      minLength: minLength,
      step: step,
      multiple: multiple,
      readOnly: readOnly,
      required: required,
      pattern: pattern,
      tabIndex: tabIndex,
      value: value,
      defaultValue: defaultValue,
      onInput: onInput,
      onChange: onChange,
      onFocus: onFocusInternal,
      onBlur: onBlurInternal
    }, type === 'select' ? children : null);
  };
  const errorInfoContent = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, error && error !== true && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _cls.cls)(c.errorInfo, c.error)
  }, error), info && !error && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _cls.cls)(c.errorInfo, c.info)
  }, info));
  const innerChildren = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, label && /*#__PURE__*/_react.default.createElement("div", {
    className: c.label[labelStyle]
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: c.labelText
  }, label)), /*#__PURE__*/_react.default.createElement("div", {
    className: c.inputWrap[labelStyle]
  }, createInput(), clearButton && /*#__PURE__*/_react.default.createElement(_DeleteIcon.default, {
    theme: theme,
    onClick: onClear,
    className: c.clearButton
  }), dropdown && /*#__PURE__*/_react.default.createElement(_DropdownIcon.default, {
    className: c.dropdown
  })), errorInfoContent);
  return /*#__PURE__*/_react.default.createElement(_ListItem.default, _extends({
    ref: elRef,
    component: component,
    media: media,
    className: c.base,
    title: null,
    mediaClassName: c.media,
    innerClassName: c.inner[labelStyle],
    contentClassName: c.itemContent,
    titleWrapClassName: c.titleWrap,
    innerChildren: innerChildren,
    contentChildren: (isOutline || theme === 'material') && /*#__PURE__*/_react.default.createElement("span", {
      className: c.border
    }),
    dividers: theme === 'material' || isOutline ? false : undefined
  }, attrs), type !== 'select' ? children : null);
});
ListInput.displayName = 'ListInput';
var _default = exports.default = ListInput;