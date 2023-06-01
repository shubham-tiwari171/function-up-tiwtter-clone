import React, { useEffect, useState } from "react";
import style from "./Post_Section.module.css";
import Avatar from "@mui/material/Avatar";
import { LuRepeat2 } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { BsUpload } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { HiOutlineBookmark } from "react-icons/hi";
import { GoVerified } from "react-icons/go";
import axios from "axios";
import { tweets } from './constant'
function PostSection() {
  const [data, setData] = useState(tweets);

  useEffect(() => {
    fetchTweets()
  }, []);

  const fetchTweets = async () => {
    try {
      const response = await fetch("./userData.json");
      const result = await response.json();
      console.log(result.data)
      setData(result.data);
    } catch (error) {
      console.error("Error fetching tweets:", error);
    }
  };

  const handleLike = (postId) => {
    setData((prevData) =>
      prevData.map((post) =>
        post.id === postId
          ? {
            ...post,
            likeCount: post.isLiked ? post.likeCount - 1 : post.likeCount + 1,
            isLiked: !post.isLiked,
          }
          : post
      )
    );
  };

  const handleRetweet = (postId) => {
    setData((prevData) =>
      prevData.map((post) =>
        post.id === postId
          ? {
            ...post,
            reTweetsCount: post.reTweetsCount + 1,
          }
          : post
      )
    );
  };

  return (

    <div>
      <div className={style.postSection}>
        {data.map((post) => (
          <div className={style.post} key={post.id}>
            <div className={style.avatar}>
              <Avatar alt="Travis Howard" src={post.avatar} />
            </div>
            <div className={style.details}>
              <div className={style.name}>{post.tweetedBy.name}</div>
              <div className={style.icon}>
                <GoVerified fontSize="1.3rem" />
              </div>
              <div className={style.id}>@{post.tweetedBy.name}</div>
            </div>
            <div className={style.content}>
              {post.content} {/* Render the post content here */}
              <img src={post.image} alt="" className={style.image} />
            </div>
            <div className={style.date}>
              <p></p>
              <p></p>
            </div>
            <div className={style.visible}>
              <p>{post.reTweetsCount} Retweets</p>
              <p>{post.quotes} Quote</p>
              <p>{post.likeCount} Likes</p>
              <p>{post.commentCount} Bookmark</p>
            </div>
            <div className={style.icons}>
              <div className={style.icons1}>
                <FaRegComment fontSize="1.4rem" />
              </div>
              <div
                className={style.icons2}
                onClick={() => handleRetweet(post.id)}
              >
                <LuRepeat2 fontSize="1.4rem" />
              </div>
              <div className={style.icons3}>
                <HiOutlineBookmark fontSize="1.4rem" />
              </div>
              <div className={style.icons4} onClick={() => handleLike(post.id)}>
                <MdFavoriteBorder
                  fontSize="1.4rem"
                  color={post.isLiked ? "red" : "inherit"}
                />
              </div>
              <div className={style.icons5}>
                <BsUpload fontSize="1.4rem" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostSection;
