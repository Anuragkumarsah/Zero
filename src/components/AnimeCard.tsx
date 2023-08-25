"use client";
import React from "react";
import styles from "./AnimeCard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import play_button from "../assets/images/play_button.svg"

type AnimeCard_Interface = {
  anime_id: string;
  anime_title: string;
  image_url: string;
  info: string;
  duration: number;
  format: string;
  episode: number;
  episode_id: string | undefined;
};

const AnimeCard = ({
  anime_id,
  duration,
  format,
  anime_title,
  image_url,
  info,
  episode,
  episode_id,
}: AnimeCard_Interface) => {

  const router = useRouter();

  return (
    <div className={styles.anime_card} onClick={() => {
      router.push(`/watch/${encodeURIComponent(anime_id)}${episode_id !== undefined ? `?ep=${episode_id}` : ""}`)
    }}>
      <div className={styles.image_container}>
        <Image className={styles.play_button} alt="play" src={play_button} width={50} height={50}/>
        <p className={styles.episode_card}>{`EP: ${episode}`}</p>
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
        <p className={styles.film_name}>{anime_title}</p>
        <section className={styles.film_info}>
          {" "}
          <p>{format}</p> <span className={styles.dot}></span>{" "}
          <p>{duration ? duration : "??"} m</p>
        </section>
      </section>
    </div>
  );
};

export default AnimeCard;
