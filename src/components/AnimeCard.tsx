"use client";
import React from 'react'
import styles from './AnimeCard.module.css'
import Image from 'next/image'

type AnimeCard_Interface = {
    anime_id: string,
    anime_title: string,
    image_url: string,
    info: string,
    duration: number,
    format: string,
    episode: number
}

const AnimeCard = ({anime_id, duration, format, anime_title, image_url, info, episode}: AnimeCard_Interface) => {
  return (
    <div className={styles.anime_card}>
        <div className={styles.image_container}>
            <p className={styles.episode_card}>{`EP: ${episode}`}</p>
            <Image className={styles.card_image} alt='image' priority src={image_url} width={100} height={100} sizes='100vw'/>
        </div>
        <section className={styles.info_section}>
            <p className={styles.film_name}>{anime_title}</p>
            <section className={styles.film_info}> <p>{format}</p> <span className={styles.dot}></span> <p>{duration ? duration : '??'} m</p></section>
        </section>
    </div>
  )
}

export default AnimeCard