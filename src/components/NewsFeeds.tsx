import { NewsFeed } from "@/@types/AnimeNewsNetwork";
import Image from "next/image";
import React from "react";
import styles from "./NewsFeeds.module.css";

const SingleNewsFeed = ({ news }: { news: NewsFeed }) => {
  return (
    <div className={styles.feed}>
      <Image
        className={styles.feed_image}
        src={news.thumbnail}
        alt="ANN Image"
        width={500}
        height={500}
      />
      <div className={styles.feed_info_container}>
        <h3 className={styles.feed_title}>{news.title}</h3>
        <p className={styles.feed_date}>Updated At: {news.uploadedAt}</p>
      </div>
    </div>
  );
};

function NewsFeeds({ newsFeed }: { newsFeed: NewsFeed[] }) {
  return (
    <div className={styles.feed_section}>
    <h2 className={styles.feed_header}>Latest Anime News</h2>
      <div  className={styles.feed_container}>
      {newsFeed &&
        newsFeed.map((news: NewsFeed, id: any) => {
          return <SingleNewsFeed key={id} news={news} />;
        })}
      </div>
    </div>
  );
}

export default NewsFeeds;
