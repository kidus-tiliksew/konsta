import * as React from 'react';

export interface Props {
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
  header?: string | React.ReactNode;
  /**
   * Content of the Message footer
   */
  footer?: string | React.ReactNode;
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
  avatar?: string | React.ReactNode;

  /**
   * Message click handler
   */
  onClick?: (e: any) => void;
}


interface MessageProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface MessageProps extends Props {}

declare const Message: React.FunctionComponent<MessageProps>;

export default Message;