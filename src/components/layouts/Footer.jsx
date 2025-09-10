import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-[1620px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 font-DM">
        {/* Menu */}
        <div>
          <h3 className="text-sm font-semibold mb-4">MENU</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Journal</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-sm font-semibold mb-4">SHOP</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Category 1</a></li>
            <li><a href="#" className="hover:underline">Category 2</a></li>
            <li><a href="#" className="hover:underline">Category 3</a></li>
            <li><a href="#" className="hover:underline">Category 4</a></li>
            <li><a href="#" className="hover:underline">Category 5</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-sm font-semibold mb-4">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
            <li><a href="#" className="hover:underline">Special E-shop</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Secure Payments</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-medium">(052) 611-5711</p>
          <p className="text-sm font-semibold">company@domain.com</p>
          <p className="text-sm mt-2">
            575 Crescent Ave. Quakertown, PA 18951
          </p>
          <h1 className="text-2xl font-bold mt-6">OREBI</h1>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 mt-8 py-6 flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-6">
        {/* Social Icons */}
        <div className="flex space-x-5 mb-4 md:mb-0">
          <a href="#" className="text-gray-600 hover:text-black">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FaLinkedinIn size={16} />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FaInstagram size={16} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          2020 OREBI Minimal eCommerce Figma Template by Adveits
        </p>
      </div>
    </footer>
  );
};

export default Footer;
