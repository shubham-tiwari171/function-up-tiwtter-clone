import React from "react";
import styles from "./Sidenavbar.module.css";
import {
  MdOutlineSettings,
  MdOutlineNotificationsActive,
  MdMailOutline,
  MdOutlineBookmarkBorder,
  MdListAlt,
  MdMoreHoriz,
} from "react-icons/md";
const Sidenavbar = () => {
  return (
    <>
      <div className={`${styles["left-sidebar"]}`}>
        <div className={`${styles["links-flex"]}`}>
          <div className={`${styles["blue-logo"]}`}>
            <a href="#">
              <img
                src="./twitter-blue-logo.png"
                className={`${styles["twitter-blue-logo"]}`}
                alt="Twitter BNlue Logo"
              />
            </a>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <img src="./hashtag.svg" className={`${styles["link-icon"]}`} />
            <p className={`${styles["link-text"]}`}>Explore</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <MdOutlineSettings className={`${styles["link-icon"]}`} size={25} />
            <p className={`${styles["link-text"]}`}>Settings</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <MdOutlineNotificationsActive
              className={`${styles["link-icon"]}`}
              size={25}
            />
            <p className={`${styles["link-text"]}`}>Notifactions</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <MdMailOutline className={`${styles["link-icon"]}`} size={25} />
            <p className={`${styles["link-text"]}`}>Message</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <MdOutlineBookmarkBorder
              className={`${styles["link-icon"]}`}
              size={25}
            />
            <p className={`${styles["link-text"]}`}>Bookmarks</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <MdListAlt className={`${styles["link-icon"]}`} size={25} />
            <p className={`${styles["link-text"]}`}>Lists</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <img src="./logo192.png" className={`${styles["link-icon"]}`} />
            <p className={`${styles["link-text"]}`}>Profile</p>
          </div>

          <div className={`${styles["link-flex"]}`}>
            <div className={`${styles["more-icon"]}`}>
              <MdMoreHoriz className={`${styles["link-icon"]}`} size={25} />
            </div>
            <p className={`${styles["link-text"]}`}>More</p>
          </div>

          <div className="d-flex justify-content-center align-item-center">
            {/* <div className={`${styles["more-icon"]}`}>
              <MdMoreHoriz className={`${styles["link-icon"]}`} size={25} />
            </div>
            <p className={`${styles["link-text"]}`}>More</p> */}
            {/* <button
              className={` btn btn${styles["button-link-flex "]}`}
              type="button"
              class="btn btn-primary"
            >
              Primary
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenavbar;
