const useDarkClasses = () => {
  // const context = useContext(KonstaContext);
  return classNames => {
    // if (!context.dark) return '';
    return classNames;
  };
};
export { useDarkClasses };