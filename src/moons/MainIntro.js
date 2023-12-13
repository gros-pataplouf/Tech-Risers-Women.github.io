import React from "react";
import styles from "./mainIntro.module.css";
import womenImage from "../media/MaryWilkes.png";


function intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.introWrapper}>
          <div>
           <p>
            Fostering empowerment in the tech industry, our comunity-run
            initiative brings together women through regular meetings and group
            coding sessions. We provide a platform for collaborative learning,
            mentorship, and networking, creating a community that champions
            diversity and innovation. Join us as we inspire, support, and propel
            women in tech toward their professional goals
           </p>
        
            <a href="/about" alt="learn more about Tech risers Women">
              <button className={styles.buttonOne}>
              learn more 
              </button>
            </a>
        
          </div>
        <div>
          <img src={womenImage} alt="" className={styles.introImage} />
        </div>
      </div>
    </div>
  );
}

export default intro;
