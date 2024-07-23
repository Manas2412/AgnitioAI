import PropTypes from "prop-types";
import styles from "./ImpactAndBeliefsContainer.module.css";

const ImpactAndBeliefsContainer = ({ className = "" }) => {
  return (
    <section
      className={[styles.impactAndBeliefsContainer, className].join(" ")}
    >
      <div className={styles.frameParent}>
        <div className={styles.ourImpactWrapper}>
          <h3 className={styles.ourImpact}>OUR IMPACT</h3>
        </div>
        <div className={styles.overviewStatsContainerParent}>
          <div className={styles.overviewStatsContainer}>
            <div className={styles.overviewStatsContainerInner}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/rectangle-5.svg"
              />
            </div>
            <div className={styles.overview}>OVERVIEW</div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.l}>2L+</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <div className={styles.frameInner} />
                  <div className={styles.div}>20+</div>
                </div>
                <div className={styles.ellipseContainer}>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.m}>5m</div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameChild1} />
                  <div className={styles.div1}>98%</div>
                </div>
              </div>
              <div className={styles.statsLabelsWrapper}>
                <div className={styles.statsLabels}>
                  <div className={styles.studentsTrained}>Students Trained</div>
                  <div className={styles.partners}>Partners</div>
                  <div className={styles.hoursOfTraining}>
                    Hours of Training done
                  </div>
                  <div className={styles.outcomesAchieved}>
                    Outcomes Achieved
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.rectangleIcon}
            loading="lazy"
            alt=""
            src="/rectangle-6.svg"
          />
          <img
            className={styles.frameChild2}
            loading="lazy"
            alt=""
            src="/rectangle-7.svg"
          />
        </div>
      </div>
    </section>
  );
};

ImpactAndBeliefsContainer.propTypes = {
  className: PropTypes.string,
};

export default ImpactAndBeliefsContainer;
