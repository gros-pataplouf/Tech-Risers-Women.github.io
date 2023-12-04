import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutHeroDivider}>
        <div>
          <h1 className={styles.heroone}> About</h1>
        </div>
      </div>

      <p>
        Tech Risers Women - Pillars Community-driven Practical skills
        Professional Growth
      </p>
    </div>
  );
}

export default About;
