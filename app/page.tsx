"use client";
import Image from "next/image";
import HomeBanner from "@/assets/home-banner.png";
import "./style.scss";
import SvgLocation from "@/assets/icons/SvgLocation";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import about1 from "@/assets/about1.jpg";
import about2 from "@/assets/about2.jpg";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiWeight } from "react-icons/gi";
import { servicesData } from "@/constants/services";
import { testimonials } from "@/constants/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/scss/navigation";
import "swiper/scss";
export default function Home() {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ x: 0 });
  }, [controls]);
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
              transition={{ type: "spring", duration: 3 }}
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
              transition={{ type: "spring", duration: 3 }}
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
      <div className="about-wrapper">
        <div className="about-container">
          <div className="about-content">
            <div className="about-header">
              <h3>
                WE CREATE AN HONEST, HASSLE-FREE AND QUALITY DELIVERY EXPERIENCE
              </h3>
            </div>
            <div className="about-details">
              <div className="about-details-left">
                <Image src={about1} alt="" />
                <Image src={about2} alt="" />
              </div>
              <div className="about-details-right">
                <h3>About us</h3>
                <p>OMAN&apos;S BEST LAST-MILE DELIVERY COMPANY</p>
                <p>
                  Our delivery management business is built on speed, security,
                  reliability and accountability, the four great pillars of our
                  success journey. We are serving a large permanent customer
                  base in Oman.
                </p>
                <div className="about-details-right-features">
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "32px" }}>
                      <IoLogoWhatsapp />
                    </span>
                    WHATSAPP SUPPORT
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "32px" }}>
                      <GiWeight />
                    </span>
                    No Weight Limit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-wrapper">
        <div className="services-container">
          <div className="services-content">
            <div className="services-header">
              <h3>We do much more than just move?</h3>
            </div>
            <div className="services-details">
              {servicesData.map((ele, index) => {
                return (
                  <div className="service-card" key={index}>
                    <div className="service-card-left">
                      <Image src={ele.image} alt="services" />
                    </div>
                    <div className="service-card-right">
                      <div className="service-card-right-texts">
                        <h3>{ele.title}</h3>
                        <p>{ele.description}</p>
                      </div>
                      <button>Read More</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials-wrapper">
        <div className="testimonials-container">
          <div className="testimonials-content">
            <div className="testimonials-header">
              <h3>What our customer say</h3>
            </div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }}
              loop
              className="testimonialSlider"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonialImage"
                      width={100}
                      height={100}
                    />
                    <h3 className="testimonialName">{testimonial.name}</h3>
                    <p className="testimonialText">{testimonial.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </main>
  );
}
