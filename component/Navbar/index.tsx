'use client'
import React, { useState } from "react";
import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
type Props = {};

type NavMenuInterface = {
  title: string;
  slug: string;
}[];

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const navMenu: NavMenuInterface = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "About",
      slug: "/",
    },
    {
      title: "Contact",
      slug: "/",
    },
    {
      title: "Services",
      slug: "/",
    },
  ];

  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <Image
              src="https://azoozexpress.com/wp-content/uploads/2023/07/Englishlogopngblackpng-1-1.png"
              alt="azoozexpress logo"
              width={100}
              height={50}
            />
          </div>
          <div className="nav-menu">
            {navMenu.map((ele, index) => {
              return (
                <>
                  <Link key={index} href={ele.slug} aria-label={ele.title}>
                    {ele.title}
                  </Link>
                </>
              );
            })}
          </div>
          <div className="nav-menu-mob">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <RxCross2 /> : <MdOutlineMenu />}
            </button>
            {isOpen && (
              <div className="nav-menu-mob-details">
                {navMenu.map((ele, index) => {
                  return (
                    <>
                      <Link key={index} href={ele.slug} aria-label={ele.title}>
                        {ele.title}
                      </Link>
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
