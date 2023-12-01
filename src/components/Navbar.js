import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import Logo from "../media/logo.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeNavbar = () => {
    setNavbarOpen(false);
  };
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [navbarOpen]);

  return (
    <nav ref={ref} className={styles.navbar}>
      {" "}
      <button className={styles.toggleButton} onClick={toggleNavbar}>
        <div
          style={{
            background: navbarOpen ? "#003666" : "#ffca28",
            transform: navbarOpen ? "rotate(46deg)" : "rotate(0)",
          }}
        />

        <div
          style={{
            background: navbarOpen ? "#003666" : "#ffca28",
            opacity: navbarOpen ? "0" : "1",
            transform: navbarOpen ? "translateX(20px)" : "translateX(0)",
          }}
        />
        <div
          style={{
            background: navbarOpen ? "#003666" : "#ffca28",
            transform: navbarOpen ? "rotate(-44deg)" : "rotate(0)",
          }}
        />
      </button>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.activeLogo : "")}
        onClick={closeNavbar}
      >
        <img src={Logo} alt="Tech Risers Women Logo" />
      </NavLink>
      <ul className={styles.bigScreenMenu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={closeNavbar}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={closeNavbar}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="donate"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={closeNavbar}
          >
            Donate
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={closeNavbar}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      {navbarOpen && (
        <ul className={`${styles.smallScreenMenu} `}>
          <li className={styles.hamburgerLink}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeNavbar}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.hamburgerLink}>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeNavbar}
            >
              About
            </NavLink>
          </li>
          <li className={styles.hamburgerLink}>
            <NavLink
              to="donate"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeNavbar}
            >
              Donate
            </NavLink>
          </li>
          <li className={styles.hamburgerLink}>
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeNavbar}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
