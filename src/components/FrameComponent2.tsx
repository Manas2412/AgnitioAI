import FrameComponent3 from "./FrameComponent3";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.programOverviewAndDetailsWrapper}>
        <div className={styles.programOverviewAndDetails}>
          <div className={styles.programOverviewHeaderWrapper}>
            <FrameComponent3
              ourFocus="PROGRAMS"
              emergingTechnologies=" GET TO KNOW US BETTER"
            />
          </div>
          <div className={styles.trainingProgramOverviewContainer}>
            <p className={styles.trainingProgramOverview}>
              <b
                className={styles.trainingProgramOverview1}
              >{`Training Program Overview  `}</b>
            </p>
            <p
              className={styles.theCourseIs}
            >{`The course is designed to introduce students in grades 9 to12 to  the fundamentals of coding through hands-on STEAM projects.  The course includes ready-to-teach curriculum, STEM/STEAM  project kits, an easy-to-use coding environment, and  professional development for students.  `}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.courseObjectives}>
              <b className={styles.courseObjectives1}>Course Objectives</b>
              <span>{` `}</span>
            </p>
            <p
              className={styles.introduceStudentsTo}
            >{` • Introduce students to the basics of coding and robotics. `}</p>
            <p
              className={styles.developStudentsProblemSolv}
            >{` • Develop students' problem-solving and critical thinking skills `}</p>
            <p
              className={styles.reinforceEssentialLearning}
            >{` • Reinforce essential learning concepts to promote cross curricular connections to     art, math, science, and coding. `}</p>
            <p className={styles.engageStudentsIn}>
              {" "}
              • Engage students in hands-on STEAM projects that promote
              creativity and innovation.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/rectangle-19@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
