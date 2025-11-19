import React from 'react';
import { PROFILE, SOCIAL_LINKS } from '../constants';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#141414] border-t border-gray-900 py-16 mt-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="flex justify-center gap-8 mb-8">
           {SOCIAL_LINKS.map((link, index) => (
             <a 
               key={index} 
               href={link.href}
               className="text-gray-500 hover:text-white transition-colors transform hover:scale-110"
               aria-label={link.label}
             >
               {React.cloneElement(link.icon, { className: "w-6 h-6" })}
             </a>
           ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 max-w-2xl mx-auto mb-12 text-left md:text-center">
          <a href="#" className="hover:underline">Audio Description</a>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">Gift Cards</a>
          <a href="#" className="hover:underline">Media Center</a>
          <a href="#" className="hover:underline">Investor Relations</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>

        <div className="text-sm text-gray-600 text-center border-t border-gray-900 pt-8">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name} Inc.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;