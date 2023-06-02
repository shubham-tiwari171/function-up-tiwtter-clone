import React from "react";
import style from "./Tweet.module.css";
import { CgProfile } from "react-icons/cg";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlineGifBox } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { CgPoll } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineSchedule } from "react-icons/ai";
import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getTweets, tweets } from '../../../redux/reducers/reducers'
const Tweet = () => {
  const [tweet, setTweet] = useState({
    id: "",
    content: "",
    createdAt: "",
    image: "",
    tweetedBy: {
      id: "",
      name: "",
    },
    likeCount: Math.floor(Math.random() * 900) + 100,
    commentCount: Math.floor(Math.random() * 900) + 100,
    reTweetsCount: Math.floor(Math.random() * 900) + 100,
    isLiked: true,
  },)
  const dispatch = useDispatch();
  const handleOnChangeTweet = (e) => {
    setTweet({ ...tweet, id: uuid4(), createdAt: new Date().getTime(), [e.target.id]: e.target.value })
  }

  const handleCreateTweet = () => {
    // console.log(tweet)
    dispatch(tweets(tweet))
    dispatch(getTweets(tweet))
    console.log("tweet",)

  }

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

          <input type="text" id="content" placeholder="What is happening?!" onChange={handleOnChangeTweet} />
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
          <button className={style.tweet_btn} onClick={handleCreateTweet}>Tweet</button>
        </div>
      </div>
    </>
  );
};

export default Tweet;
