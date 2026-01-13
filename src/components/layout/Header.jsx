import Navbar from "./Navbar";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Container from "./Container";

const Header = () => {
  return (
    <header>
      {/* TOP BAR – background full width */}
      <div className="bg-[#83B735] w-full">
        <Container>
          <div className="p-2 flex justify-between items-center">
            {/* LEFT */}
            <div className="flex">
              <div className="text-white border-x pr-2 mr-2">
                <select className="bg-transparent outline-none">
                  <option className="text-gray-500">EN</option>
                  <option className="text-gray-500">AZ</option>
                  <option className="text-gray-500">RU</option>
                </select>
              </div>

              <div className="text-white border-r pr-2 mr-2">
                <select className="bg-transparent outline-none">
                  <option className="text-gray-500">USD</option>
                  <option className="text-gray-500">AZN</option>
                  <option className="text-gray-500">EURO</option>
                </select>
              </div>
            </div>

            {/* CENTER */}
            <div className="hidden md:flex justify-between w-7/12">
              <h1 className="text-white  uppercase text-sm">
                FREE SHIPPING FOR ALL ORDERS OF $150
              </h1>

              <ul className="flex gap-3">
                <li>
                  <a className="text-white" href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>

            {/* RIGHT */}
            <div className="flex">
              <div className="text-white border-x pr-2 mr-2">
                <button className="flex items-center gap-2 ">
                  <FaEnvelope /> NEWSLETTER
                </button>
              </div>

              <div className="text-white border-r pr-2 mr-2">
                <Link to="/contact" className=" uppercase">
                  Contact Us
                </Link>
              </div>

              <div className="text-white border-r pr-2 mr-2">
                <Link to="/faqs" className=" uppercase">
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
