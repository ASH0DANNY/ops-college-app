export interface MenuItem {
  id: string;
  title: string;
  path?: string;
  submenu?: MenuItem[];
}

export interface NavbarProps {
  className?: string;
}

export interface HeaderProps {
  className?: string;
}
