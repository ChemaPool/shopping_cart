import Link from 'next/link';
import { useState, useEffect } from "react";
import { useConsumer } from 'pages/utils/Context';

const Navbar: React.FC = () => {
  const [state]: any = useConsumer();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [countItem, setCountItem] = useState<number>(0);

  const handleToggle = () => setToggleMenu(prevState => !prevState);

  useEffect(() => {
    if (countItem === 0 || countItem) {
      setCountItem(state.cart?.length)
    }
  }, [state.cart?.length, countItem]);

  return (
    <header>
      <nav className="bg-gray-100 fixed inset-x-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <Link href="/" >
                  <a className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 font-bold">
                    Chema Store
                  </a>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/" >
                  <a className="py-5 px-3 text-gray-700 hover:text-gray-900">
                    Home
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/ShoppingCart">
                <a className="py-2 px-3 bg-yellow-400 text-black hover:bg-yellow-300 text-sm hover:text-gray-700 rounded transition duration-300">
                  <span className="relative inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                      {countItem}
                    </span>
                  </span>
                </a>
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button focus:outline-none" onClick={handleToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`mobile-menu ${toggleMenu && 'hidden'} md:hidden`}>
          <Link href="/" >
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Home
            </a>
          </Link>
            <Link href="/ShoppingCart">
              <a className="block py-2 px-4 bg-yellow-400 text-black hover:bg-yellow-300 text-sm hover:text-gray-700 rounded transition duration-300">
                <span className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform bg-red-600 rounded-full">
                    {countItem}
                  </span>
                </span>
              </a>
            </Link>
        </div>
      </nav>
    </header>
  )
};

export default Navbar;
