"use strict";

exports.__esModule = true;
exports.useDarkClasses = void 0;
const useDarkClasses = () => {
  // const context = useContext(KonstaContext);
  return classNames => {
    // if (!context.dark) return '';
    return classNames;
  };
};
exports.useDarkClasses = useDarkClasses;