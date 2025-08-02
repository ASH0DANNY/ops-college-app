// 'use client';

// import Link from 'next/link';
// import { MenuItem, NavbarProps } from '@/types/navigation';
// import { menuItems } from '@/data/menuItems';
// import { useMobileMenu } from '../context/MobileMenuContext';

// const Navbar = ({ className = '' }: NavbarProps) => {
//   const { mobileMenuOpen } = useMobileMenu();

//   const renderSubmenu = (items: MenuItem[]) => (
//     <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 mt-1 min-w-[200px] rounded-md">
//       {items.map((subItem) => (
//         <li key={subItem.id}>
//           <Link
//             href={subItem.path || '#'}
//             className="block px-4 py-2 text-sm text-primary hover:bg-gray-50 hover:text-secondary transition-colors"
//           >
//             {subItem.title}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <nav className={`bg-white shadow-md ${className}`}>
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between h-16">
//           {/* Logo and primary navigation */}
//           <div className="flex">
//             {/* Desktop Menu */}
//             <div className="hidden md:ml-6 md:flex md:space-x-4 md:justify-center md:items-center">
//               {menuItems.map((item) => (
//                 <div key={item.id} className="relative group">
//                   <Link
//                     href={item.path || '#'}
//                     className="inline-flex items-center px-3 py-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
//                   >
//                     {item.title}
//                     {item.submenu && (
//                       <svg
//                         className="ml-1 w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     )}
//                   </Link>
//                   {item.submenu && renderSubmenu(item.submenu)}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           {menuItems.map((item) => (
//             <div key={item.id}>
//               <Link
//                 href={item.path || '#'}
//                 className="block px-3 py-2 text-base font-medium text-primary hover:text-secondary hover:bg-gray-50 transition-colors"
//               >
//                 {item.title}
//               </Link>
//               {item.submenu && (
//                 <div className="pl-4">
//                   {item.submenu.map((subItem) => (
//                     <Link
//                       key={subItem.id}
//                       href={subItem.path || '#'}
//                       className="block px-3 py-2 text-sm font-medium text-primary/80 hover:text-secondary hover:bg-gray-50 transition-colors"
//                     >
//                       {subItem.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
