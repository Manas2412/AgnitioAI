import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.macbookPro141Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.empoweringDigitalRevolutionParent}>
          <div className={styles.empoweringDigitalRevolutionContainer}>
            <p className={styles.empoweringDigital}>EMPOWERING DIGITAL</p>
            <p className={styles.revolution}>REVOLUTION</p>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseWrapper}>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.caseForAi}>Case for AI Skilling</div>
          </div>
        </div>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/rectangle-3@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
