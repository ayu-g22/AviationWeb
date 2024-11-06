import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const Footer = () => {
  return (
    <footer className="bg-black text-darkerGold py-6  w-full"> {/* Set w-full to cover the entire width */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4"> {/* w-full here too */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Company Name</h2>
          <p className="text-sm mt-1">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row space-x-0 space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          <Link to="/" className="text-darkerGold hover:text-gold transition no-underline">
            About Us
          </Link>
          <Link to="/" className="text-darkerGold hover:text-gold transition no-underline">
            Terms & Conditions
          </Link>
          <Link to="/" className="text-darkerGold hover:text-gold transition no-underline">
            Reach Us
          </Link>
          <Link to="/" className="text-darkerGold hover:text-gold transition no-underline">
            Privacy Policy
          </Link>
          <Link to="/" className="text-darkerGold hover:text-gold transition no-underline">
            FAQ
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
