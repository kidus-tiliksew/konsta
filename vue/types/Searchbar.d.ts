import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Searchbar: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Searchbar placeholder
     */
    placeholder: {
      type: PropType<string | number>;
      default: 'Search';
    };

    /**
     * Searchbar value
     */
    value: {
      type: any;
      
    };

    /**
     * Input id attribute
     */
    inputId: {
      type: StringConstructor;
      
    };

    /**
     * Additional input classes
     */
    inputStyle: {
      type: PropType<StyleValue>;
      
    };

    /**
     * Adds button for cancel search and set its initial state
     */
    disableButton: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Disable button text
     */
    disableButtonText: {
      type: StringConstructor;
      default: 'Cancel';
    };

    /**
     * Adds input clear button
     */
    clearButton: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         *
         * @default ''
         */
        inputBgIos?: string;
        /**
         *
         * @default 'bg-md-light-secondary-container dark:bg-md-dark-secondary-container'
         */
        inputBgMaterial?: string;
        /**
         *
         * @default ''
         */
        placeholderIos?: string;
        /**
         *
         * @default 'placeholder-md-light-on-surface-variant dark:placeholder-md-dark-on-surface-variant'
         */
        placeholderMaterial?: string;
      
      }>;
      
    };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    
    /**
     * `input` event handler
     */
    input: (e: any) => void;
    

    /**
     * `change` event handler
     */
    change: (e: any) => void;
    

    /**
     * `focus` event handler
     */
    focus: (e: any) => void;
    

    /**
     * `blur` event handler
     */
    blur: (e: any) => void;
    

    /**
     * Fired on clear button click
     */
    clear: (e: any) => void;
    

    /**
     * Fired on searchbar disable
     */
    disable: (e: any) => void;
    
  }
>;

export default Searchbar;