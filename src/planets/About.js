import React from "react";
import styles from "./about.module.css";
import Pillars from "../moons/Pillars.js";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutHeroDivider}>
        <div>
          <h1> About</h1>
        </div>
      </div>
      <div className={styles.aboutIntro}>
        <h2> Pillars of Tech Risers Women</h2>
        <p>
          Explore the cornerstones that define our mission and commitment to
          advancing women in tech. Tech Risers Women is a community-driven space
          that concentrates on acquiring practical skills and continuous
          professional growth. Together, we're shaping an inclusive and dynamic
          environment where women excell in the tech world.
        </p>
      </div>
      <Pillars />
    </div>
  );
}

export default About;
