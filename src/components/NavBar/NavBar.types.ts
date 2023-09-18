import { NavLinkProps } from 'react-router-dom';

export type CustomNavLinkProps = NavLinkProps & {
  isActive?: boolean | (() => boolean);
  isOpen?: boolean | (() => boolean);
  show?: boolean | (() => boolean);
  to?: string;
};
