"use client";
import React from "react";
import styles from "./AnimeCard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import play_button from "../assets/images/play_button.svg"

type AnimeCard_Interface = {
  anime_title: string | null;
  image_url: string;
  info: string;
  format: string;
  episode: number;
  episode_title: string;
  anime_id: string;
  isPopular?: boolean;
};

const AnimeCard = ({
  format,
  anime_title,
  image_url,
  info,
  episode,
  anime_id,
  episode_title,
  isPopular,
}: AnimeCard_Interface) => {

  const router = useRouter();

  return (
    <div className={styles.anime_card} onClick={() => {
      router.push(`/watch/anime?id=${anime_id } ${!isPopular ? `&ep=${episode}` : ''}`)
    }}>
      <div className={styles.image_container}>
        <Image className={styles.play_button} alt="play" src={play_button} width={50} height={50}/>
        <p className={styles.episode_card}>{info}</p>
        <Image
          className={styles.card_image}
          alt="image"
          src={image_url}
          width={100}
          height={100}
          sizes="100%"
        />
      </div>
      <section className={styles.info_section}>
        <p className={`${styles.film_name} ${styles.anime_name}`}>{anime_title}</p>
        <section className={styles.film_info}>
          <p>{format}</p> <span className={styles.dot}></span>
          {episode_title ? <p className={styles.film_name}>{episode_title}</p>
          : <p className={styles.film_name}>{episode}m</p>}
        </section>
      </section>
    </div>
  );
};

export default AnimeCard;
