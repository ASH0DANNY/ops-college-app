import { MenuItem } from '@/types/navigation';

export const menuItems: MenuItem[] = [
  {
    id: 'home',
    title: 'Home',
    path: '/',
  },
  {
    id: 'about',
    title: 'About Us',
    submenu: [
      {
        id: 'about-college',
        title: 'About College',
        path: '/about',
      },
      {
        id: 'vision-mission',
        title: 'Vision & Mission',
        path: '/vision-mission',
      },
      {
        id: 'principal-message',
        title: 'Principal Message',
        path: '/principal-message',
      },
    ],
  },
  {
    id: 'academics',
    title: 'Academics',
    submenu: [
      {
        id: 'courses',
        title: 'Courses',
        path: '/courses',
      },
      {
        id: 'faculty',
        title: 'Faculty',
        path: '/faculty',
      },
      {
        id: 'academic-calendar',
        title: 'Academic Calendar',
        path: '/academic-calendar',
      },
    ],
  },
  {
    id: 'admission',
    title: 'Admission',
    path: '/admission',
  },
  {
    id: 'facilities',
    title: 'Facilities',
    submenu: [
      {
        id: 'library',
        title: 'Library',
        path: '/facilities/library',
      },
      {
        id: 'laboratories',
        title: 'Laboratories',
        path: '/facilities/laboratories',
      },
      {
        id: 'sports',
        title: 'Sports',
        path: '/facilities/sports',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    path: '/contact',
  },
];
