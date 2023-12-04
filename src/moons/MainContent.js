import React from "react";
import styles from "./mainContent.module.css";
import mainLinkImage from "../media/annieEasley.png";
import mainLinkImage2 from "../media/graceHopper.png";
import mainLinkImage3 from "../media/melbaMouton.png";

function MainContent() {
  return (
    <div className={styles.mainContentWrapper}>
      <img src={mainLinkImage} alt="" className={styles.mainLinkImage} />
      <img src={mainLinkImage2} alt="" className={styles.mainLinkImage} />
      <img src={mainLinkImage3} alt="" className={styles.mainLinkImage} />
      <p className={styles.mainLinkDescription}>
        With our initiatives, we unite women who code, encourage collaboration
        and community.
      </p>
      <p className={styles.mainLinkDescription}>
        Every Wednesday we we come together to learn, share skills and and
        support each other.
      </p>{" "}
      <p className={styles.mainLinkDescription}>
        Help us to support women in tech and to follow our vision.
      </p>
      <a href="/" className={styles.mainLink}>
        learn more about our initiatives
      </a>
      <a href="/" className={styles.mainLink}>
        join our group coding sessions
      </a>
      <a href="/" className={styles.mainLink}>
        donate to Tech Risers Women
      </a>
    </div>
  );
}

export default MainContent;
