import React, { useEffect, useRef, useState } from "react";
import styles from "./contact.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { LuMail } from "react-icons/lu";

function Contact() {
  const [isInViewport, setIsInViewport] = useState(false);
  const contactHeroDividerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const isIntersecting = entries[0].isIntersecting;
      setIsInViewport(isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection);

    const currentRef = contactHeroDividerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [contactHeroDividerRef]);
  return (
    <div className={styles.contact}>
      <div ref={contactHeroDividerRef} className={styles.contactHeroDivider}>
        <div>
          <h1
            className={`${styles.noContactHeadline} ${
              isInViewport ? styles.contactHeadline : styles.noContactHeadline
            }`}
          >
            Contact us!
          </h1>
        </div>
      </div>
      <div className={styles.contactWrapper}>
        <h2>Get in Touch </h2>
        <p>
          If you have any questions or would like to learn more about{" "}
          <em>Tech Risers Women</em>, please don't hesitate to contact us. We
          also welcome curious women to join our Wednesday group sessions.
        </p>
        <div>
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
