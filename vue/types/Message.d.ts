import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Message: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Message id attribute
     */
    id: {
      type: StringConstructor;
      
    };

    /**
     * Message text
     */
    text: {
      type: StringConstructor;
      
    };

    /**
     * Message name
     */
    name: {
      type: StringConstructor;
      
    };

    /**
     * Message type: sent (default) or received
     */
    type: {
      type: StringConstructor;
      default: 'sent';
    };

    /**
     * Content of the Message header
     */
    header: {
      type: StringConstructor;
      
    };

    /**
     * Content of the Message footer
     */
    footer: {
      type: StringConstructor;
      
    };

    /**
     * Message header text
     */
    textHeader: {
      type: StringConstructor;
      
    };

    /**
     * Message footer text
     */
    textFooter: {
      type: StringConstructor;
      
    };

    /**
     * Message user's avatar URL
     */
    avatar: {
      type: StringConstructor;
      
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         *
         * @default 'text-white'
         */
        messageSent?: string;
        /**
         *
         * @default 'text-black text-opacity-45 dark:text-white dark:text-opacity-45'
         */
        messageNameIos?: string;
        /**
         *
         * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
         */
        messageNameMd?: string;
        /**
         *
         * @default 'bg-primary'
         */
        bubbleSentIos?: string;
        /**
         *
         * @default 'bg-md-light-primary dark:bg-md-dark-primary dark:text-md-dark-on-primary'
         */
        bubbleSentMd?: string;
        /**
         *
         * @default 'bg-[#e5e5ea] dark:bg-[#252525]'
         */
        bubbleReceivedIos?: string;
        /**
         *
         * @default 'dark:bg-md-dark-surface-variant bg-[#e5e5ea]'
         */
        bubbleReceivedMd?: string;
      
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
     * Message click handler
     */
    click: (e: any) => void;
    
  }
>;

export default Message;