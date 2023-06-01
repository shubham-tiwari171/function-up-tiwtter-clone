import React from "react";
import styles from "./Page.module.css";
import Sidenavbar from "../molecules/Sidenavbar/Sidenavbar";
import Tweet from "../molecules/Tweet/Tweet";
import  PostSection from "../molecules/Post_Section"

const Page = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className="d-flex justify-content-center align-items-center">
          <div className={`d-flex flex-start${styles["left-section"]} mb-3`}>
            <Sidenavbar />
          </div>
          <div className={` ${styles["middle-section"]} mb-3`}>
            <div className={` ${styles["home-section"]}`}>
              <Tweet/>
            </div>
            <div className={` ${styles["tweet-view-section"]}`}>  <PostSection /></div>
            {/* <div className={` ${styles["tweet-view-section"]}`}></div>
            <div className={` ${styles["tweet-view-section"]}`}></div>
            <div className={` ${styles["tweet-view-section"]}`}></div>
            <div className={` ${styles["tweet-view-section"]}`}></div>
            <div className={` ${styles["tweet-view-section"]}`}></div> */}
          </div>
          <div className={` ${styles["right-section"]} mb-3`}>
            <div className={` ${styles["happening-view-section"]}`}>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
              <div>hih</div>
            </div>
            <div className={` ${styles["follow-view-section"]}`}></div>
            <div className={` ${styles["footer-view-section"]}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
