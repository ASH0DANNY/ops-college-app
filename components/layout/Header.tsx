'use client';

import { HeaderProps } from '@/types/navigation';
import { useMobileMenu } from '../context/MobileMenuContext';
import Link from 'next/link';
import { menuItems } from '@/data/menuItems';

const Header = ({ className = '' }: HeaderProps) => {
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

  return (
    <header className={`bg-blue-900 text-white ${className}`}>
      {/* Top bar */}
      <div className="bg-blue-800 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-4">
              <a href="mailto:info@college.edu" className="hover:text-blue-200">
                <span className="mr-2">✉</span>
                info@college.com
              </a>
              <a href="tel:+1234567890" className="hover:text-blue-200">
                <span className="mr-2">📞</span>
                +91 1234567890
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="/student-portal" className="hover:text-blue-200">Student Portal</a>
              <a href="/staff-portal" className="hover:text-blue-200">Staff Portal</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="py-2 border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo and College Name */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-900 text-2xl font-bold">Logo</span>
              </div>
              <div className="pr-4">
                <h1 className="text-2xl font-bold tracking-tight">College of Education</h1>
                <p className="text-sm text-blue-200">Excellence in Education Since 1995</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-2 flex-1 justify-end">
              {menuItems.map((item) => (
                <div key={item.id} className="relative group">
                  <Link
                    href={item.path || '#'}
                    className="inline-flex items-center px-4 py-3 text-sm font-semibold text-white hover:text-blue-200 hover:bg-blue-800 rounded-lg transition duration-150 ease-in-out"
                  >
                    {item.title}
                    {item.submenu && (
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 hidden group-hover:block pt-2 z-50">
                      <div className="bg-white rounded-lg shadow-lg py-2 min-w-[220px]">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.path || '#'}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {!mobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-800">
          {menuItems.map((item) => (
            <div key={item.id}>
              <Link
                href={item.path || '#'}
                className="block px-3 py-2 text-base font-medium text-white hover:text-blue-200 hover:bg-blue-700 rounded-md"
              >
                {item.title}
              </Link>
              {item.submenu && (
                <div className="pl-4">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={subItem.path || '#'}
                      className="block px-3 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-blue-700 rounded-md"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
