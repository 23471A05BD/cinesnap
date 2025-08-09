 import React from 'react';
import { Search, MapPin, User, Menu } from 'lucide-react';

interface HeaderProps {
  user: any;
  selectedLocation: string;
  onNavigate: (page: string) => void;
  onOpenAuth: () => void;
  onOpenLocation: () => void;
}

const Header: React.FC<HeaderProps> = ({
  user,
  selectedLocation,
  onNavigate,
  onOpenAuth,
  onOpenLocation,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img
              src="/images/logo1.jpg" // Path to your logo
              alt="CineSnap Logo"
              className="w-10 h-10 object-contain rounded-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              CineSnap
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm border border-white/20">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search movies, events..."
                className="bg-transparent text-white placeholder-gray-400 outline-none text-sm w-full"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Location */}
            <button
              onClick={onOpenLocation}
              className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden md:block">{selectedLocation}</span>
            </button>

            {/* User */}
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold">{user.name?.[0] || 'U'}</span>
                </div>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-4 py-2 rounded-full transition-all duration-300"
              >
                <User className="w-4 h-4" />
                <span className="hidden md:block">Sign In</span>
              </button>
            )}

            {/* Mobile Menu */}
            <button className="lg:hidden">
              <Menu className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
