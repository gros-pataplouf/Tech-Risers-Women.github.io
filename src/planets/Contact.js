import React from "react";
import styles from "./contact.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { LuMail } from "react-icons/lu";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactHeroDivider}>
        <div>
          <h1>Contact us!</h1>
        </div>
      </div>
      <div className={styles.contactWrapper}>
        <p>Get in Touch </p>
        <p>
          If you have any questions or would like to learn more about {" "}
          <em>Tech Risers Women</em>, please don't hesitate to contact us. We
          also welcome curious women to join our Wednesday group sessions.
        </p>
        <div className={styles.contactLinks}>
          <a href="/" alt="" className={styles.contactLink}>
            <FaXTwitter />
          </a>
          <a href="/" alt="" className={styles.contactLink}>
            <SiInstagram />
          </a>
          <a href="/" target="_blank" alt="" className={styles.contactLink}>
            <LuMail />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
