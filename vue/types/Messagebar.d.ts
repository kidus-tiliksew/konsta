import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Messagebar: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Messagebar id attribute
     */
    id: {
      type: StringConstructor;
      
    };

    /**
     * Additional messagebar classes
     */
    style: {
      type: PropType<StyleValue>;
      
    };

    /**
     * Messagebar name
     */
    name: {
      type: StringConstructor;
      
    };

    /**
     * Messagebar placeholder
     */
    placeholder: {
      type: PropType<string | number>;
      default: 'Message';
    };

    /**
     * Messagebar value
     */
    value: {
      type: any;
      
    };

    /**
     * Textarea "id" attribute
     */
    textareaId: {
      type: StringConstructor;
      
    };

    /**
     * Sets "disabled" textarea attribute
     */
    disabled: {
      type: BooleanConstructor;
      default: undefined;
    };

    /**
     * Value of textarea's native "size" attribute
     */
    size: {
      type: PropType<string | number>;
      
    };

    /**
     * Renders outer hairlines (borders). If not specified, will be enabled for iOS theme
     */
    outline: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Additional left styles
     */
    leftClass: {
      type: StringConstructor;
      
    };

    /**
     * Additional right styles
     */
    rightClass: {
      type: StringConstructor;
      
    };

    /**
     * Content of the Messagebar's "left" area
     */
    left: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the Messagebar's "right" area
     */
    right: {
      type: PropType<string | number>;
      
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         *
         * @default 'fill-primary dark:fill-md-dark-primary'
         */
        toolbarIconIos?: string;
        /**
         *
         * @default 'fill-black'
         */
        toolbarIconMd?: string;
        /**
         *
         * @default 'bg-transparent'
         */
        inputBgIos?: string;
        /**
         *
         * @default 'border-[#c8c8cd] dark:border-white dark:border-opacity-30'
         */
        borderIos?: string;
        /**
         *
         * @default 'bg-md-light-surface-2 dark:bg-md-dark-surface-variant'
         */
        inputBgMd?: string;
        /**
         *
         * @default 'dark:placeholder-white dark:placeholder-opacity-40'
         */
        placeholderIos?: string;
        /**
         *
         * @default 'placeholder-md-light-on-surface-variant dark:placeholder-md-dark-on-surface-variant'
         */
        placeholderMd?: string;
        /**
         *
         * @default 'bg-white dark:bg-black'
         */
        bgIos?: string;
        /**
         *
         * @default 'bg-md-light-surface dark:bg-md-dark-surface'
         */
        bgMaterial?: string;
      
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
    
  }
>;

export default Messagebar;