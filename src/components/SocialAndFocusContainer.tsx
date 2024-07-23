import FrameComponent3 from "./FrameComponent3";
import PropTypes from "prop-types";
import styles from "./SocialAndFocusContainer.module.css";

const SocialAndFocusContainer = ({ className = "" }) => {
  return (
    <section className={[styles.socialAndFocusContainer, className].join(" ")}>
      <div className={styles.buttonsParent}>
        <div className={styles.buttons}>
          <div className={styles.buttonsChild} />
          <div className={styles.socialIconsContainer}>
            <img
              className={styles.socialIcons}
              loading="lazy"
              alt=""
              src="/social-icons.svg"
            />
          </div>
          <img
            className={styles.buttonsItem}
            loading="lazy"
            alt=""
            src="/rectangle-20@2x.png"
          />
        </div>
        <div className={styles.focusAndTechnologies}>
          <div className={styles.frameParent}>
            <FrameComponent3
              ourFocus="OUR FOCUS"
              emergingTechnologies=" EMERGING TECHNOLOGIES"
            />
            <div className={styles.educationalEmpowermentProviWrapper}>
              <div className={styles.educationalEmpowermentProviContainer}>
                <p className={styles.educationalEmpowermentProvi}>
                  <b className={styles.educationalEmpowerment}>
                    {" "}
                    1. Educational Empowerment:
                  </b>
                  <span
                    className={styles.provideStemAnd}
                  >{` Provide STEM and AI education to  young people, fostering a skilled workforce for future industries.  `}</span>
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.inclusivityEnsureAccessibil}>
                  <b className={styles.inclusivity}> 2. Inclusivity:</b>
                  <span
                    className={styles.ensureAccessibilityTo}
                  >{` Ensure accessibility to STEM & AI education for  individuals from diverse backgrounds and communities. `}</span>
                </p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.collaborativePartnershipFor}>
                  <b className={styles.collaborativePartnership}>
                    {" "}
                    3. Collaborative Partnership:
                  </b>
                  <span
                    className={styles.forgeALasting}
                  >{` Forge a lasting collaboration like minded organisations to drive technological growth and innovation in  the ecosystem. `}</span>
                </p>
                <p className={styles.blankLine2}>&nbsp;</p>
                <p className={styles.capacityBuildingOfTeachers}>
                  <span className={styles.span}>{` `}</span>
                  <b className={styles.capacityBuildingOf}>
                    4. Capacity Building of Teachers:
                  </b>
                  <span className={styles.preparingAndSupporting}>
                    {" "}
                    Preparing and supporting school teachers by converting them
                    into master STEM teachers and mentors through sustained
                    specific classroom training and exposure.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SocialAndFocusContainer.propTypes = {
  className: PropTypes.string,
};

export default SocialAndFocusContainer;
