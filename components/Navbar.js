import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import img from '../public/logo.png'
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact Us", href: "/contact" },
  { text: "Brands", href: "/brands" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
          <Image src={img} alt='logo' width={120} height={60} />
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
           <div>
                <button style={{ margin: '0 20px', background: '#0B2421', padding: '15px', border: 'none' }}>
                    <a href="https://web.whatsapp.com/" style={{ color: '#D5B59A', fontSize: '16px', margin: '0 20px' }}>08764565788</a>
                </button>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;