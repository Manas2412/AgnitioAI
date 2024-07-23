import FrameComponent4 from "../components/FrameComponent4";
import ImpactAndBeliefsContainer from "../components/ImpactAndBeliefsContainer";
import SocialAndFocusContainer from "../components/SocialAndFocusContainer";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./MacBookPro14.module.css";

const MacBookPro14 = () => {
  return (
    <div className={styles.macbookPro141}>
      <img
        className={styles.macbookPro141Child}
        alt=""
        src="/rectangle-18@2x.png"
      />
      <img
        className={styles.macbookPro141Item}
        alt=""
        src="/rectangle-15@2x.png"
      />
      <img
        className={styles.macbookPro141Inner}
        alt=""
        src="/rectangle-14@2x.png"
      />
      <section className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-13@2x.png" />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/rectangle-21@2x.png"
        />
      </section>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-16@2x.png" />
      <section className={styles.frameSection}>
        <header className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <img
            className={styles.frameChild1}
            loading="lazy"
            alt=""
            src="/rectangle-2@2x.png"
          />
        </header>
      </section>
      <section className={styles.rectangleContainer}>
        <img className={styles.frameChild2} alt="" src="/rectangle-12@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.ellipseDiv} />
          </div>
          <img
            className={styles.frameChild3}
            loading="lazy"
            alt=""
            src="/rectangle-8@2x.png"
          />
        </div>
      </section>
      <img className={styles.icon} alt="" src="/3-1@2x.png" />
      <FrameComponent4 />
      <ImpactAndBeliefsContainer />
      <section className={styles.beliefsAndVisionContainer}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.whatWeBelieveParent}>
              <h3 className={styles.whatWeBelieve}>WHAT WE BELIEVE</h3>
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-4.svg"
                  />
                  <div className={styles.train1mStudentsInAiBy202Wrapper}>
                    <div className={styles.train1mStudents}>
                      TRAIN 1M STUDENTS IN AI BY 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.visionContainer}>
            <div className={styles.vision}>VISION</div>
            <div className={styles.ourVisionFor}>
              {" "}
              Our vision for AI skilling is centered on inclusivity,
              accessibility, and empowerment. We envision a future where
              individuals from all walks of life, regardless of background or
              socioeconomic status, have access to high-quality AI training
              programs that equip them with the knowledge and skills needed to
              thrive in the digital economy
            </div>
          </div>
        </div>
      </section>
      <section className={styles.buttons}>
        <div className={styles.buttonsChild} />
        <div className={styles.mission}>MISSION</div>
        <div className={styles.trainAndEmpower}>
          {" "}
          Train and empower students, with the necessary skills and knowledge in
          this digital age, foster innovation, entrepreneurship, and
          self-sustainability skills among students resulting into opening door
          of better opportunities for them
        </div>
      </section>
      <SocialAndFocusContainer />
      <section className={styles.programsAndDetailsContainer}>
        <FrameComponent2 />
        <FrameComponent1 />
        <div className={styles.programDetails1Container}>
          <p className={styles.programDetails}>
            <b className={styles.programDetails1}>{`Program Details  `}</b>
          </p>
          <p
            className={styles.curriculumDesignTailored}
          >{`1. Curriculum Design: Tailored AI courses covering fundamentals, practical applications, and ethical considerations.  `}</p>
          <p
            className={styles.deliveryMethodBlended}
          >{`2. Delivery Method: Blended learning approach with online modules, workshops, and live sessions.  `}</p>
          <p
            className={styles.targetAudienceSc}
          >{`3. Target Audience: SC Communities in Class 9-12 in school and undergraduate students (up to age 22)  `}</p>
          <p
            className={styles.duration20Hours}
          >{`4. Duration: 20 hours with flexible schedules to accommodate diverse learners.  `}</p>
          <p className={styles.blankLine}>
            <b className={styles.blankLine1}>&nbsp;</b>
          </p>
          <p className={styles.programComponents}>
            <b
              className={styles.programComponents1}
            >{`Program Components  `}</b>
          </p>
          <p
            className={styles.foundationalCoursesIntroduc}
          >{`1. Foundational Courses: Introduction to AI, and Robotics. `}</p>
          <p
            className={styles.specializedTracksAdvanced}
          >{` 2. Specialized Tracks: Advanced modules in AI applications (education, industry, etc.).  `}</p>
          <p
            className={styles.workshopsAndProjects}
          >{`3. Workshops and Projects: Hands-on experience through real-world projects and industry- relevant case studies. `}</p>
          <p className={styles.certificationAccreditedCert}>
            {" "}
            4. Certification: Accredited certification upon course completion to
            enhance employability.
          </p>
        </div>
      </section>
      <section className={styles.deliveredProgramsContainer}>
        <div className={styles.programsDeliveredParent}>
          <h3 className={styles.programsDelivered}>PROGRAMS DELIVERED</h3>
          <img
            className={styles.frameChild4}
            loading="lazy"
            alt=""
            src="/group-4-4.svg"
          />
        </div>
      </section>
      <FrameComponent />
      <section className={styles.rectangleParent1}>
        <div className={styles.frameChild5} />
        <div className={styles.footerFromThe}>FOOTER from the main website</div>
      </section>
    </div>
  );
};

export default MacBookPro14;
