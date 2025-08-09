import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                CineSnap
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your ultimate destination for booking movies, events, plays, and sports tickets. 
              Experience entertainment like never before with CineSnap.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">support@cinesnap.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 CineSnap. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Movies</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Events</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Plays</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sports</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;