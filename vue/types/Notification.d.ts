import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Notification: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Makes Notification background translucent (with `backdrop-filter: blur`) in iOS theme
     */
    translucent: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Content of the notification "title" area
     */
    title: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the notification "title right text" area
     */
    titleRightText: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the notification "subtitle" area
     */
    subtitle: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the notification "text" area
     */
    text: {
      type: PropType<string | number>;
      
    };

    /**
     * Allows to open/close Notification and set its initial state
     */
    opened: {
      type: BooleanConstructor;
      default: undefined;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Notifiaction bg color in iOS theme
         *
         * @default 'bg-white dark:bg-[#1e1e1e]'
         */
        bgIos?: string;
        /**
         * Notification bg color in Material theme
         *
         * @default 'bg-md-light-surface-5 dark:bg-md-dark-surface-5'
         */
        bgMaterial?: string;
        /**
         * Notification title color in IOS theme
         *
         * @default 'text-black dark:text-white'
         */
        titleIos?: string;
        /**
         * Notification right text color in IOS theme
         *
         * @default 'text-opacity-45 text-black dark:text-white dark:text-opacity-45'
         */
        titleRightIos?: string;
        /**
         * Notification right text color in Material theme
         *
         * @default 'text-md-light-on-surface-variant before:bg-md-light-on-surface-variant dark:text-md-dark-on-surface-variant before:dark:bg-md-dark-on-surface-variant'
         */
        titleRightMd?: string;
        /**
         * Notification subtitle color in IOS theme
         *
         * @default 'text-black dark:text-white'
         */
        subtitleIos?: string;
        /**
         * Notification text color in Material theme
         *
         * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
         */
        textMaterial?: string;
        /**
         * Notification Delete Icon color in IOS theme
         *
         * @default 'fill-stone-400 active:fill-stone-200 dark:fill-stone-500 dark:active:fill-stone-700'
         */
        deleteIconIos?: string;
        /**
         * Notification Delete Icon color in Material theme
         *
         * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
         */
        deleteIconMd?: string;
      
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
     * Click handler on to close element
     */
    close: (e: any) => void;
    
  }
>;

export default Notification;