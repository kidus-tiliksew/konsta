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
  /**
   * Font size in iOS theme
   *
   * @default 'text-[17px]'
   */
  fontSizeIos?: string;
  /**
   * Font size in Material theme
   *
   * @default 'text-[14px]'
   */
  fontSizeMaterial?: string;
}


interface BreadcrumbsProps {}
interface BreadcrumbsProps extends Props {}

declare class Breadcrumbs extends SvelteComponent<
  BreadcrumbsProps & HTMLAttributes<HTMLDivElement>,
  {  },
  {
    'default': {};
  }
> {}

export default Breadcrumbs;