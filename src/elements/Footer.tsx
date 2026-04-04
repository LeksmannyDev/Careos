import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { homeAsset } from "../assets/homeAssets";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-10">
      <div className="max-w-425 mx-auto w-full px-4 sm:px-6 md:px-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={homeAsset.footer} alt="" className="h-8 md:h-10 w-auto" />
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Mobile app</h3>
              <ul className="space-y-1 text-white">
                <li>Features</li>
                <li>Live share</li>
                <li>Video record</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Community</h3>
              <ul className="space-y-1 text-white">
                <li>Featured artists</li>
                <li>The Portal</li>
                <li>Live events</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1 text-white">
                <li>About us</li>
                <li>Contact us</li>
                <li>History</li>
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="bg-[#FF7A00] text-white px-4 py-2 rounded-md text-sm font-medium">
              Register
            </button>
            <button className="border border-[#FF7A00] sub-text px-4 py-2 rounded-md text-sm font-medium">
              Log in
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#FF7A00] my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-[#FFFFFFCC]">
            © Photo, Inc. 2019. We love our users!
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <span className="text-[#FFFFFFCC]">Follow us:</span>
            <div className="flex gap-2">
              <div className="bg-orange-500 p-2 rounded-full">
                <FaFacebookF size={12} />
              </div>
              <div className="bg-orange-500 p-2 rounded-full">
                <FaTwitter size={12} />
              </div>
              <div className="bg-orange-500 p-2 rounded-full">
                <FaLinkedinIn size={12} />
              </div>
              <div className="bg-orange-500 p-2 rounded-full">
                <FaInstagram size={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
