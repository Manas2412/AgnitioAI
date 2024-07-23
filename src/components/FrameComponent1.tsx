import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={[styles.programsAndDetailsContainerInner, className].join(" ")}
    >
      <div className={styles.detailsHeaderParent}>
        <div className={styles.detailsHeader}>
          <h3 className={styles.programDetails}>PROGRAM DETAILS</h3>
          <div className={styles.detailsIcon}>
            <img
              className={styles.detailsIconChild}
              loading="lazy"
              alt=""
              src="/group-4-3.svg"
            />
          </div>
        </div>
        <div className={styles.outlineWrapper}>
          <div className={styles.outline}>OUTLINE</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
