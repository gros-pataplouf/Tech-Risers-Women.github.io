import React from "react";
import styles from "./donate.module.css";
import christineDarden from "../media/christineDarden.png";

function Donate() {
  return (
    <div className={styles.donate}>
      <div className={styles.donateHeroDivider}>
        <div>
          <h1> Support us</h1>
        </div>
      </div>
      <div className={styles.donateWrapper}>
        <div>
          <h4> Help us to empower women in tech today</h4>
          <p>
            Contribute to our mission by making a donation. Your support helps
            to provide opportunities for skill-building, mentorship, and
            community. Support us, to create a world of opportunities where
            every woman has the chance to thrive and shine.
          </p>
          <button className={styles.donateButton}>
            <a href="/" alt="">
              Donate here
            </a>
          </button>
        </div>
        <div>
          <img src={christineDarden} alt="" className={styles.introImage} />
        </div>
      </div>
    </div>
  );
}

export default Donate;
