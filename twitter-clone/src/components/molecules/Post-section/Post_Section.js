import React, { useEffect, useState } from "react";
import style from "./Post_Section.module.css";
import Avatar from "@mui/material/Avatar";
import { LuRepeat2 } from "react-icons/lu";
import { MdFavoriteBorder, MdOutlinePoll } from "react-icons/md";
import { BsUpload } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { HiOutlineBookmark } from "react-icons/hi";
import { GoVerified } from "react-icons/go";
import axios from "axios";
import { tweets } from './constant'
import { useSelector, useDispatch } from "react-redux";
function PostSection() {
  // const { tweetsArray } = useSelector((state) => state.users)
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTweets()
  }, []);

  const fetchTweets = async () => {
    try {
      const response = await fetch("./userData.json");
      const result = await response.json();
      //console.log(result.data)
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
            {/* <div className={style.visible}>
             
            </div> */}
            <div div className="d-flex justify-content-evenly" >
              <div className={`d-flex align-items-center ml-2`}>
                <span><FaRegComment className={style.icons1} size={30} /></span>
              </div>
              <div
                className={`d-flex align-items-center `}
                onClick={() => handleRetweet(post.id)}
              >
                <LuRepeat2 className={style.icons2} size={30} />
                {/* <span className="ml-1">{post.quotes}</span> */}
                <span className="ml-1">{post.reTweetsCount}</span>
              </div>
              <div
                className={`d-flex align-items-center `}
                onClick={() => handleLike(post.id)}
              >
                <MdFavoriteBorder
                  size={30}
                  className={style.icons3}
                  color={post.isLiked ? "red" : "inherit"}
                />
                <span className="ml-1">{post.likeCount}</span>
              </div>
              <div
                className={`d-flex align-items-center g-4`}>
                <MdOutlinePoll
                  size={30}
                  className={style.icons4}
                />
                <span className="ml-1">155.5k</span>
              </div>
              <div className={`d-flex align-items-center`}>
                <BsUpload className={style.icons5} size={25} />
              </div>
            </div>

          </div>
        ))
        }
      </div >
    </div >
  );
}

export default PostSection;
