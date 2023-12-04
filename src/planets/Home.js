import React from "react";
import styles from "./home.module.css";
import Intro from "../moons/MainIntro.js";
import MainContent from "../moons/MainContent.js";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.heroDivider}>
        <div>
          <h1 className={styles.heroone}>Tech </h1>
        </div>
        <div>
          <h1 className={styles.herotwo}> Risers </h1>
        </div>
        <div>
          <h1 className={styles.herothree}> Women</h1>
        </div>
      </div>
      <Intro />
<MainContent/>
    </div>
  );
}

export default Home;
