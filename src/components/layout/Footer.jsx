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
    <footer>
      {/* Footer Up */}
      <section className="mt-10 border-t border-b border-[#E8E8E8]">
        <Container>
          <div className="">
            <div className="flex-1">
              <h1 className="text-3xl font-bold">ZEKOWOOD</h1>
            </div>
            <div className="">
              <p className="">
                Discover a curated collection of modern furniture designed to
                bring comfort and elegance into your home.
              </p>
            </div>
            <div className="">
              <div className="flex">
                <FaLocationArrow />
                <h1>451 Wall Street, UK, London</h1>
              </div>
              <div className="flex">
                <MdOutlinePhoneAndroid />
                <h1>Phone: (064) 332-1233</h1>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* {Footer Down} */}
      <section>
        <Container>
          <div className="flex justify-between pt-5 pb-5">
            <div className="">
              <h6 className="">ZEKOWOOD © 2026 CREATED BY ZEKO STUDIO.</h6>
            </div>
            <div className="flex">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaGooglePay />
              <FaApplePay />
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
