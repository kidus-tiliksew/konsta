import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  colors?: {
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
  };
  /**
   * Message id attribute
   */
  id?: string;
  /**
   * Message text
   */
  text?: string;
  /**
   * Message name
   */
  name?: string;
  /**
   * 	Message type: sent (default) or received
   *
   * @default 'sent'
   */
  type?: string;
  /**
   * Content of the Message header
   */
  header?: string
  /**
   * Content of the Message footer
   */
  footer?: string
  /**
   * Message header text
   */
  textHeader?: string;
  /**
   * Message footer text
   */
  textFooter?: string;
  /**
   * Message user's avatar URL
   */
  avatar?: string

  /**
   * Message click handler
   */
  onClick?: (e: any) => void;
}


interface MessageProps {}
interface MessageProps extends Props {}

declare class Message extends SvelteComponent<
  MessageProps,
  {  },
  {
    'default': {};
    'header': {};
    'footer': {};
    'avatar': {};
  }
> {}

export default Message;