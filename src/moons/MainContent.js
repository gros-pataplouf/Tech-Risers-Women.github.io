import React from "react";
import styles from "./mainContent.module.css";
import mainLinkImage from "../media/annieEasley.png";
import mainLinkImage2 from "../media/graceHopper.png";
import mainLinkImage3 from "../media/melbaMouton.png";

function MainContent() {
  return (
    <div className={styles.mainContentWrapper}>
      <div>
        <img src={mainLinkImage} alt="" className={styles.mainLinkImage} />
      </div>
      <div>
        <img src={mainLinkImage2} alt="" className={styles.mainLinkImage} />
      </div>
      <div>
        <img src={mainLinkImage3} alt="" className={styles.mainLinkImage} />
      </div>
      <div>
        <p className={styles.mainLinkDescription}>
          With our initiatives, we unite women who code, encourage collaboration
          and community.
        </p>
      </div>{" "}
      <div>
        <p className={styles.mainLinkDescription}>
          Every Wednesday we we come together to learn, share skills and and
          support each other.
        </p>
      </div>
      <div>
        <p className={styles.mainLinkDescription}>
          Help us to support women in tech and to follow our vision.
        </p>
      </div>
      <div>
        <a href="/" className={styles.mainLink}>
          learn more about our initiatives
        </a>
      </div>
      <div>
        <a href="/" className={styles.mainLink}>
          join our group coding sessions
        </a>
      </div>
      <div>
        <a href="/" className={styles.mainLink}>
          donate to Tech Risers Women
        </a>
      </div>
    </div>
  );
}

export default MainContent;
