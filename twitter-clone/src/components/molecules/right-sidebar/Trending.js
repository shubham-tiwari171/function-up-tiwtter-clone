import React, { useState } from "react";
import styles from "./trending.module.css";
import { MdMoreHoriz } from "react-icons/md";
import { HiOutlineEmojiSad } from "react-icons/hi";

const Trending = () => {
  const [showMore, setShowMore] = useState(null);
  const [trendingNow, setTrendingNow] = useState([
    {
      id: 1,
      country: "India",
      whatsTrending: "Scripted",
      totalTweets: 233,
    },
    {
      id: 2,
      country: "India",
      whatsTrending: "IPL",
      totalTweets: 255,
    },
    {
      id: 3,
      country: "India",
      whatsTrending: "MrIndia",
      totalTweets: 558,
    },
    {
      id: 4,
      country: "India",
      whatsTrending: "#Parineeti",
      totalTweets: 559,
    },
  ]);

  function handleMore(id) {
    setShowMore((prevShowMore) => (prevShowMore === id ? null : id));
  }

  function handleNotInterested(id) {
    setTrendingNow((prevTrendingNow) =>
      prevTrendingNow.filter((item) => item.id !== id)
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h5>What's Happening</h5>
        </div>
        {trendingNow.map((item) => (
          <div key={item.id} className={styles["trending-now"]}>
            <div className={styles["trending-more-wrapper"]}>
              <span className={styles.country}>Trending in {item.country}</span>
              <span onClick={() => handleMore(item.id)}>
                <MdMoreHoriz size={20} />
              </span>
            </div>
            <span className={styles.name}>
              <strong>{item.whatsTrending}</strong>
            </span>
            <div className={styles.tweets}>{item.totalTweets}k Tweets</div>
            <div
              className={styles["not-interested-spam"]}
              style={{
                visibility: showMore === item.id ? "visible" : "hidden",
              }}
            >
              <div
                className={styles["not-interested"]}
                onClick={() => handleNotInterested(item.id)}
              >
                <HiOutlineEmojiSad /> Not interested in this
              </div>
              <div
                className={styles["spam"]}
                onClick={() => handleNotInterested(item.id)}
              >
                <HiOutlineEmojiSad /> This trend is harmful or spammy
              </div>
            </div>
          </div>
        ))}
        <div className={styles["show-more"]}>
          <div className={styles["show-button"]}>Show more</div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
