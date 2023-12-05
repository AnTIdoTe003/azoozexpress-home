'use client'
import Image from "next/image";
import HomeBanner from "@/assets/home-banner.png";
import "./style.scss";
import SvgLocation from "@/assets/icons/SvgLocation";
// import { useSpring, animated } from '@react-spring/web'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ x: 0 });
  },[controls])
  return (
    <main>
      <div className="home-wrapper">
        <div className="home-container">
          <div className="home-content">
            <div className="gradient-overlay"></div>
            <Image className="home-banner" src={HomeBanner} alt="Home" />
            <motion.div
              initial={{ x: "-100%" }}
              animate={controls}
              transition={{ type: "spring", duration: 0.5 }}
              className="home-text1"
            >
              <p>FAST AND RELIABLE MOVING SOLUTIONS</p>
            </motion.div>
            <div className="home-text2">
              <p>
                We Cater To All Of Your Moving & Packaging Needs, Ensuring A
                Commitment Towards Fast, Reliable And 100% Delivery Assurance.
              </p>
            </div>
            <motion.div
              initial={{ x: "100%" }}
              animate={controls}
              transition={{ type: "spring", duration: 0.5 }}
              className="home-quotation"
            >
              <div className="home-inputs">
                <div className="home-input-wrapper">
                  <input type="text" placeholder="Enter pickup location" />
                  <SvgLocation />
                </div>
                <div className="home-input-wrapper">
                  <input type="text" placeholder="Enter drop location" />
                  <SvgLocation />
                </div>
              </div>
              <div className="home-quotation-btn">
                <button>Get Quotation</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
