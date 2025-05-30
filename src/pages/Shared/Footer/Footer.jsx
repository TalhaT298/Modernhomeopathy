import React from 'react';
import logof from "../../../../src/assets/logof.png";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaTiktok,
    FaPinterestP,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white px-4 py-8 sm:px-6 sm:py-12" style={{ fontFamily: "Parkinsans, serif", fontWeight: 400 }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
                    {/* Company Info - Kept exactly as original for large devices */}
                    <div className="space-y-4">
                        <div>
                            <img className="h-12 w-12 md:h-16 md:w-16 ml-2" src={logof} alt="Modern Homeo Pharmacy Logo" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-semibold">
                                Modern <br />Homeo Pharmacy
                            </span>
                        </div>
                    </div>

                    {/* Get To Know Us */}
                    <div>
                        <h3 className="font-bold mb-3 sm:mb-4 text-lg sm:text-xl">Get To Know Us</h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li className="hover:underline cursor-pointer">About Us</li>
                            <li className="hover:underline cursor-pointer">Term & Policy</li>
                            <li className="hover:underline cursor-pointer">Careers</li>
                            <li className="hover:underline cursor-pointer">News & Blog</li>
                            <li className="hover:underline cursor-pointer">Contact Us</li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="font-bold mb-3 sm:mb-4 text-lg sm:text-xl">Information</h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li className="hover:underline cursor-pointer">Help Center</li>
                            <li className="hover:underline cursor-pointer">Feedback</li>
                            <li className="hover:underline cursor-pointer">FAQs</li>
                            <li className="hover:underline cursor-pointer">Size Guide</li>
                            <li className="hover:underline cursor-pointer">Payments</li>
                        </ul>
                    </div>

                    {/* Orders & Returns */}
                    <div>
                        <h3 className="font-bold mb-3 sm:mb-4 text-lg sm:text-xl">Orders & Returns</h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li className="hover:underline cursor-pointer">Track Order</li>
                            <li className="hover:underline cursor-pointer">Delivery</li>
                            <li className="hover:underline cursor-pointer">Services</li>
                            <li className="hover:underline cursor-pointer">Returns</li>
                            <li className="hover:underline cursor-pointer">Exchange</li>
                        </ul>
                    </div>

                    {/* Our Store */}
                    <div>
                        <h3 className="font-bold mb-3 sm:mb-4 text-lg sm:text-xl">Our Store</h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                                <span>Saidpur 5310, Nilphamary</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhoneAlt className="mr-2" />
                                <span>+880 1785030648</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2" />
                                <span>demo@example.com</span>
                            </li>
                        </ul>
                        <div className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl pt-3 sm:pt-4">
                            <FaFacebookF className="hover:text-blue-600 cursor-pointer transition-colors" />
                            <FaTwitter className="hover:text-blue-400 cursor-pointer transition-colors" />
                            <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors" />
                            <FaTiktok className="hover:text-black cursor-pointer transition-colors" />
                            <FaPinterestP className="hover:text-red-500 cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-green-800 mt-8 pt-6 text-center text-sm sm:text-base">
                    <p>&copy; {new Date().getFullYear()} Modern Homeo Pharmacy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;