import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({
  className = "",
  oURFOCUS,
  eMERGINGTECHNOLOGIES,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.focusHeaderAndIconWrapper}>
        <div className={styles.focusHeaderAndIcon}>
          <h3 className={styles.ourFocus}>{oURFOCUS}</h3>
          <img
            className={styles.focusHeaderAndIconChild}
            loading="lazy"
            alt=""
            src="/group-4-1.svg"
          />
        </div>
      </div>
      <div className={styles.emergingTechnologies}>{eMERGINGTECHNOLOGIES}</div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  oURFOCUS: PropTypes.string,
  eMERGINGTECHNOLOGIES: PropTypes.string,
};

export default FrameComponent3;
