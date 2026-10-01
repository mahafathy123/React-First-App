import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaGithub, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#3d464d] text-gray-300 pt-12 pb-6 border-t border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">          
           <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Maha<span className="text-[#cece2b]">Shop</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              Your favorite online destination for modern products. Built with passion, high performance, and responsive UI.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#cece2b] hover:text-black flex items-center justify-center transition-all">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#cece2b] hover:text-black flex items-center justify-center transition-all">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#cece2b] hover:text-black flex items-center justify-center transition-all">
                <FaTwitter size={14} />
              </a>
              <a href="https://github.com/mahafathy123" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#cece2b] hover:text-black flex items-center justify-center transition-all">
                <FaGithub size={14} />
              </a>
            </div>
          </div>

         <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-[#cece2b] pb-1 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-[#cece2b] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#cece2b] transition-colors">Shop All Products</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-[#cece2b] transition-colors">Shopping Cart</Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-[#cece2b] transition-colors">My Wishlist</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-[#cece2b] pb-1 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#cece2b]" />
                <span>Zagazig, Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#cece2b]" />
                <span>+20 100 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#cece2b]" />
                <span>support@mahashop.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-[#cece2b] pb-1 inline-block">Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to get special discount offers & updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 py-2 bg-gray-800 text-white rounded border border-gray-600 focus:outline-none focus:border-[#cece2b] text-sm"
                required
              />
              <button 
                type="submit" 
                className="bg-[#cece2b] text-black font-semibold py-2 rounded hover:bg-yellow-400 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
    
        <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} <span className="text-[#cece2b] font-semibold">MahaShop</span>. All Rights Reserved.</p>
          <p>Designed & Developed with ❤️ by Maha</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;