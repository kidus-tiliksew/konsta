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
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'bg-ios-light-surface dark:bg-ios-dark-surface'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface dark:bg-md-dark-surface'
     */
    bgMaterial?: string;
  };
}


interface PageProps {}
interface PageProps extends Props {}

declare class Page extends SvelteComponent<
  PageProps & HTMLAttributes<HTMLDivElement>,
  {  },
  {
    'default': {};
  }
> {}

export default Page;