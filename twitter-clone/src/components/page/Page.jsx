import React from "react";
import styles from "./Page.module.css";
import Sidenavbar from "../molecules/Sidenavbar/Sidenavbar";
import Widgets from "../molecules/right-sidebar/Widgets";
import Tweet from "../molecules/Tweet/Tweet";
import PostSection from "../molecules/Post-section/Post_Section";
import RightSidebar from "../organisms/RightSidebar/RightSidebar";
import RightDownFooter from "../molecules/RightDownFooter/RightDownFooter";


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
              <Tweet />
            </div>
            <div className={` ${styles["tweet-view-section"]}`}>
              <PostSection />
            </div>
            <div className={` ${styles["tweet-view-section"]}`}>
              {" "}
              <PostSection />
            </div>
            <div className={` ${styles["tweet-view-section"]}`}></div>
            {/* <div className={` ${styles["tweet-view-section"]}`}></div>
            <div className={` ${styles["tweet-view-section"]}`}></div>
            <div className={` ${styles["tweet-view-section"]}`}></div> */}
          </div>
          <div className={` ${styles["right-section"]} mb-3`}>
            <div className={` ${styles["happening-view-section"]}`}>
              <Widgets />
            </div>
            <div className={` ${styles["follow-view-section"]}`}>
              {" "}
              <RightSidebar />{" "}
            </div>
            <div className={` ${styles["footer-view-section"]}`}>
              <RightDownFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
