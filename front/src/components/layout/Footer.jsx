import Container from "./Container";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FAF9F6] text-[#333333]">
      {/* Footer Up */}
      <section className="mt-16 border-t border-b border-[#E8E8E8] py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
            
            {/* 1. Logo */}
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold tracking-wider text-[#1A1A1A]">
                ZEKOWOOD
              </h1>
              <p className="text-sm text-[#555555] leading-relaxed standard-text">
                Discover a curated collection of modern furniture designed to
                bring comfort and elegance into your home.
              </p>
            </div>

            {/* 2. Contacts*/}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-[#555555] group">
                  <FaLocationArrow className="text-[#1A1A1A] shrink-0 mt-1" />
                  <span className="hover:underline cursor-pointer">
                    451 Wall Street, UK, London
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#555555]">
                  <MdOutlinePhoneAndroid className="text-[#1A1A1A] shrink-0 text-base" />
                  <span>Phone: (064) 332-1233</span>
                </div>
              </div>
            </div>

            {/* 3. Stores*/}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">
                Our Stores
              </h3>
              <ul className="space-y-2 text-sm text-[#555555]">
                {["New York", "London", "Los Angeles", "Chicago", "Las Vegas", "Miami"].map((store) => (
                  <li key={store} className="hover:text-[#1A1A1A] hover:translate-x-1 transition-all duration-200 cursor-pointer">
                    {store}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Useful Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">
                Useful Links
              </h3>
              <ul className="space-y-2 text-sm text-[#555555]">
                {[
                  "Privacy Policy",
                  "Returns",
                  "Terms & Conditions",
                  "Contact Us",
                  "Latest News",
                  "Our Sitemap",
                ].map((link) => (
                  <li key={link} className="hover:text-[#1A1A1A] hover:underline cursor-pointer transition-colors duration-200">
                    {link}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Container>
      </section>

      {/* Footer Down */}
      <section className="bg-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
            {/* copyright */}
            <div>
              <h6 className="text-xs tracking-wider text-[#7A7A7A] font-medium text-center md:text-left">
                ZEKOWOOD © 2026 CREATED BY ZEKO STUDIO.
              </h6>
            </div>
            
            {/* Payment İcons */}
            <div className="flex items-center gap-4 text-3xl text-[#444444]">
              <FaCcVisa className="hover:text-[#1A1F71] transition-colors duration-200 cursor-pointer" />
              <FaCcMastercard className="hover:text-[#EB001B] transition-colors duration-200 cursor-pointer" />
              <FaCcPaypal className="hover:text-[#003087] transition-colors duration-200 cursor-pointer" />
              <FaGooglePay className="hover:text-[#4285F4] transition-colors duration-200 cursor-pointer" />
              <FaApplePay className="hover:text-[#000000] transition-colors duration-200 cursor-pointer" />
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;