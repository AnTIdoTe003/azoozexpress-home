import Image from "next/image";
import React from "react";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import "./style.scss"
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-top-column-1">
              <Image
                src="https://azoozexpress.com/wp-content/uploads/2023/07/Englishlogopngblackpng-1-1.png"
                alt="azoozexpress logo"
                width={100}
                height={50}
              />
              <div className="footer-top-column-socials">
                <IoLogoWhatsapp />
                <FaLinkedin />
                <FaInstagram />
                <FaTwitter />
              </div>
            </div>
            <div className="footer-top-column-2">
              <div className="footer-top-column-header">
                <h3>Comapany</h3>
              </div>
              <div className="footer-top-column-links">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Services</a>
              </div>
            </div>
            <div className="footer-top-column-3">
              <div className="footer-top-column-header">
                <h3>Reach Out to Us</h3>
              </div>
              <div className="footer-top-column-links">
                <a href="/">
                  <IoLocationSharp /> PO BOX 84, Postal code 101, Sultanate of
                  Oman.
                </a>
                <a href="/">
                  <IoMdMail />
                  info@azoozexpress.com
                </a>
                <a href="/">
                  <FaPhoneVolume />
                  +968 22700 070
                </a>
                <a href="/">
                  <IoLogoWhatsapp />
                  +968 9658 6404
                </a>
              </div>
            </div>
            <div className="footer-top-column-4">
              <button>Get Quote</button>
            </div>
          </div>
          <div className="footer-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
