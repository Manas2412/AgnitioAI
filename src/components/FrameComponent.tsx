import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.containerParent, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.imageParent}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/rectangle-22@2x.png"
          />
          <div className={styles.imageWrapper}>
            <img
              className={styles.imageIcon1}
              loading="lazy"
              alt=""
              src="/rectangle-23@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.impactIcons}>
          <div className={styles.iconsParent}>
            <div className={styles.icons} />
            <div className={styles.iconLabels}>01</div>
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.frameItem} />
            <div className={styles.div}>02</div>
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.frameInner} />
            <div className={styles.div1}>03</div>
          </div>
        </div>
        <div className={styles.impactDetails}>
          <div className={styles.navjyotiFoundationParent}>
            <div className={styles.navjyotiFoundation}>Navjyoti Foundation</div>
            <div className={styles.impactedMoreThan}>
              Impacted more than 10,000 students in last five years Worked on
              Kaushal Scheme with Dell Foundation STEM / Robotics and AI
              training in hybrid mode Foundation to Intermediate level skilling
              done
            </div>
            <div className={styles.smileFoundation}>Smile Foundation</div>
            <div className={styles.skilledMoreThan}>
              Skilled more than 1000 students in last two years Classroom
              training done on AI concepts Foundation level training done
            </div>
            <div className={styles.hoursOfTraining}>Hours of Training done</div>
            <div className={styles.impactedDisadvantageCommunit}>
              Impacted disadvantage community with cumulative impact of more
              than 10,000+ students Classroom training done on AI concepts
              Foundation level training done
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
