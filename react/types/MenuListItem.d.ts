import * as React from 'react';

export interface Props {
  /**
   * Makes menu list item highlighted (active)
   *
   * @default false
   */
  active?: boolean;
  /**
   * Menu list item link's `href` attribute
   */
  href?: string | boolean;
  /**
   * Content of the chip media area (e.g. icon)
   */
  media?: React.ReactNode;
  /**
   * Content of the menu list item "subtitle" area
   */
  subtitle?: string | number | React.ReactNode;
}


interface MenuListItemProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface MenuListItemProps extends Props {}

declare const MenuListItem: React.FunctionComponent<MenuListItemProps>;

export default MenuListItem;