import React from "react";
import styles from "./footer.module.css";
// import { FaXTwitter } from "react-icons/fa6";
// import { SiInstagram } from "react-icons/si";
import { LuMail } from "react-icons/lu";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerWrapper}>
        <b>Tech Risers Women</b> is an initiative to empower women in tech
        through collaborative learning, mentorship, group coding and networking
        sessions
      </p>
      <p>
        {" "}
        contact us
        {/* <span className={styles.icon}>
          {" "}
          <a href="/" alt="" className={styles.socialsLink}>
            {" "}
            <FaXTwitter />
          </a>
        </span> */}
        {/* <span className={styles.icon}>
          {" "}
          <a href="/" alt="" className={styles.socialsLink}>
    
            <SiInstagram />
          </a>
        </span> */}
        <span className={styles.icon}>
          <a href="/" alt="" className={styles.socialsLink}>
              <LuMail />
          </a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
