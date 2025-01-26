import { UserCircleIcon, XMarkIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import logo from "../../assets/lagos.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "#",
      submenu: [
        {
          name: "Certificate Issuance",
          href: "/services/certificate-issuance",
        },
        { name: "Verification", href: "/services/verification" },
        { name: "Renewal", href: "/services/renewal" },
      ],
    },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
  ];

  return (
    <nav className=" bg-[#1E3A8A] text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between h-16">
          {/*          
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
             Lagos State Portal
            </a>
          </div> */}
          <div className="flex items-center">
            <img
              src={logo}
              className="w-[100px] md:w-[100px] md:h-[73px]"
              alt="HCA Logo"
            /> <span className="text-2xl ">E-Certificate Portal</span>
            
          </div>

          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item, index) =>
                item.submenu ? (
                  <div key={index} className="relative group">
                    <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3B82F6] focus:outline-none">
                      {item.name}
                    </button>

                    <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="py-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )
                 : (
                  <a
                    key={index}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3B82F6]"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>

            <div className="ml-6 flex items-center">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <BiSearch className="h-5 w-5" aria-hidden="true" />
                </span>
                <input
                  type="search"
                  name="search"
                  className="py-2 text-sm text-black bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="ml-4 relative">
              <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1E3A8A] focus:ring-white">
                <UserCircleIcon
                  className="h-8 w-8 text-white"
                  aria-hidden="true"

                />
              </button>
            
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white text-black ring-1 ring-black ring-opacity-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="py-1">
                  <a
                  
                    href="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Your Profile
                  </a>
                  <a
                    href="/logout"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MdMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

  
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item, index) =>
              item.submenu ? (
                <div key={index} className="space-y-1">
                  <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3B82F6] focus:outline-none">
                    {item.name}
                  </button>
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3B82F6]"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3B82F6]"
                >
                  {item.name}
                </a>
              )
            )}

         {/* mobile doings */}
            <div className="mt-3 px-3">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <BiSearch className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <input
                  type="search"
                  name="search"
                  className="w-full py-2 text-sm text-black bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Mobile User Profile */}
            <div className="mt-3 px-3 space-y-1">
              <a
                href="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3B82F6]"
              >
                Your Profile
              </a>
              <a
                href="/logout"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3B82F6]"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
