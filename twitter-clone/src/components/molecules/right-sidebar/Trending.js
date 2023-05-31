import React from "react";
import styles from "./trending.module.css";

const Trending = () => {
  const trendingNow = [
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
  ];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h4>Whats Happening</h4>
        </div>
        {trendingNow.map((item) => (
          <div key={item.id} className={styles["trending-now"]}>
            <div className={styles.country}>Trending in {item.country}</div>
            <div className={styles.name}>
              <strong>{item.whatsTrending}</strong>
            </div>
            <div className={styles.tweets}>{item.totalTweets}k Tweets</div>
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
