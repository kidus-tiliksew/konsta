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
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    titleMd?: string;
  };
}


interface MessagesTitleProps {}
interface MessagesTitleProps extends Props {}

declare class MessagesTitle extends SvelteComponent<
  MessagesTitleProps,
  {  },
  {
    'default': {};
  }
> {}

export default MessagesTitle;