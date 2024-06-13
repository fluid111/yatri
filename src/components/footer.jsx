import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl text-gray-300 font-bold mb-4">Product</h3>
            <ul className="text-gray-500">
              <li className="mb-2 hover:text-gray-300 transition duration-300">
                <a href="#">Project Zero</a>
              </li>
              <li className="mb-2 hover:text-gray-300 transition duration-300">
                <a href="#">Project One</a>
              </li>
              <li className="mb-2 hover:text-gray-300 transition duration-300">
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-gray-300 font-bold mb-4">Resources</h3>
            <ul className="text-gray-500">
              <li className="mb-2 hover:text-gray-300 transition duration-300">
                <a href="#">Blog</a>
              </li>
              <li className="mb-2 hover:text-gray-300 transition duration-300">
                <a href="#">Energy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-gray-300 font-bold mb-4">Company</h3>
            <ul className="text-gray-500">
              <li className="mb-2 hover:text-gray-300 transition duration-300">
                <a href="#">Our Story</a>
              </li>
              <li className="mb-2 hover:text-gray-300 transition duration-300">
                <a href="#">Team</a>
              </li>
              <li className="mb-2 hover:text-gray-300 transition duration-300">
                <a href="#">Terms</a>
              </li>
              <li className="mb-2 hover:text-gray-300 transition duration-300">
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-gray-300 font-bold mb-4">Developers</h3>
            <ul className="text-gray-500">
              <li className="mb-2 hover:text-gray-300 transition duration-300">
                <a href="#">Profiles</a>
              </li>
              <li className="mb-2 hover:text-gray-300 transition duration-300">
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="text-gray-500 flex items-center">
            <a href="#" className="mr-4 hover:text-gray-300 transition duration-300">
              <i className="fab fa-facebook fa-2x"><FaFacebook /></i>
            </a>
            <a href="#" className="mr-4 hover:text-gray-300 transition duration-300">
              <i className="fab fa-twitter fa-2x"><BsTwitterX />
              </i>
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              <i className="fab fa-instagram fa-2x"><RiInstagramFill /></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;