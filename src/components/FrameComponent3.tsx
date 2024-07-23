import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

interface FrameComponent3Props {
  className?: string;
  ourFocus: string;
  emergingTechnologies: string;
}

const FrameComponent3: React.FC<FrameComponent3Props> = ({
  className = "",
  ourFocus,
  emergingTechnologies,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.focusHeaderAndIconWrapper}>
        <div className={styles.focusHeaderAndIcon}>
          <h3 className={styles.ourFocus}>{ourFocus}</h3>
          <img
            className={styles.focusHeaderAndIconChild}
            loading="lazy"
            alt=""
            src="/group-4-1.svg"
          />
        </div>
      </div>
      <div className={styles.emergingTechnologies}>{emergingTechnologies}</div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  ourFocus: PropTypes.string.isRequired, // Marked as required to match the interface
  emergingTechnologies: PropTypes.string.isRequired, // Marked as required to match the interface
};

export default FrameComponent3;
