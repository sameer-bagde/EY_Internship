import React, { useState } from 'react';
import { Search, Menu, X, LogIn, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-purple-600 pt-1">
                <a href="/" >FundRise
              </a>
              </h1>
          </div>

          <div className="flex-1 flex items-center justify-end gap-8">
            <nav className="hidden md:flex items-center gap-8">
              <a href="/discover" className="text-gray-700 hover:text-purple-600 transition-colors py-2">
                Discover
              </a>
              <a href="/categories" className="text-gray-700 hover:text-purple-600 transition-colors py-2">
                Categories
              </a>
              <a href="/how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors py-2">
                How it Works
              </a>
            </nav>

            <div className="hidden md:flex items-center relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-64 pl-10 pr-4 py-2.5 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
  <Link 
    to="/sign-in" 
    className="flex items-center px-4 py-2.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors h-[42px]"
  >
    <LogIn className="h-4 w-4 mr-2" />
    Sign In
  </Link>

  <Link 
    to="/sign-up" 
    className="flex items-center px-4 py-2.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors h-[42px]"
  >
    <UserPlus className="h-4 w-4 mr-2" />
    Sign Up
  </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 rounded-lg"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <div className="space-y-2">
              <a href="/discover" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg">
                Discover
              </a>
              <a href="/categories" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg">
                Categories
              </a>
              <a href="/how-it-works" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg">
                How it Works
              </a>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search campaigns..."
                className="w-full pl-10 pr-4 py-2.5 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            </div>

            <div className="flex flex-col gap-2">
            <Link 
  to="/sign-in" 
  className="flex items-center px-4 py-2.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors h-[42px]"
>
  <LogIn className="h-4 w-4 mr-2" />
  Sign In
</Link>

<Link 
  to="/sign-up" 
  className="flex items-center px-4 py-2.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors h-[42px]"
>
  <UserPlus className="h-4 w-4 mr-2" />
  Sign Up
</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;