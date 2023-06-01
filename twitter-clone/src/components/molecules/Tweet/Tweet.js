import React from "react";
import style from "./Tweet.module.css";
import { CgProfile } from "react-icons/cg";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlineGifBox } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { CgPoll } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineSchedule } from "react-icons/ai";

const Tweet = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.wrapper_middle_heading}>
          <div className={style.heading}>
            <p>Home</p>
          </div>
          <div className={style.headings}>
            <div className={style.for_you}>For you</div>
            <div className={style.for_you}>Following</div>
          </div>
        </div>
        <hr className={style.horizontal_line} />
        <div className={style.icon}>
          <CgProfile className={style.iconPic} />

          <input type="text" placeholder="What is happening?!" />
        </div>
        <div className={style.bottom_icons}>
          <span>
            <RiGalleryLine />
          </span>
          <span>
            <MdOutlineGifBox />
          </span>
          <span>
            <BsEmojiSmile />
          </span>
          <span>
            <CgPoll />
          </span>
          <span>
            <AiOutlineSchedule />
          </span>
          <span>
            <CiLocationOn />
          </span>
          <button className={style.tweet_btn}>Tweet</button>
        </div>
      </div>
    </>
  );
};

export default Tweet;
