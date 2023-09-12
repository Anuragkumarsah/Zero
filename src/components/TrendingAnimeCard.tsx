import Image from 'next/image'
import React from 'react'
import styles from './TrendingAnimeCard.module.css'

type ITrendingAnimeCard = {
  anime_title: string | null,
  image: string
}

const TrendingAnimeCard = ({anime_title, image}: ITrendingAnimeCard) => {
  return (
    <div style={{width:"calc(15vw - 20px)", height:"280px", marginLeft:"20px"}}>
    <div className={styles.trendingAnime_container}>
        <section className={styles.title_container}>
          <p className={styles.anime_title}>{anime_title?.toLowerCase()}</p>
          <p className={styles.anime_ranking}>1</p>
        </section>
        <div className={styles.image_container}>
        <Image className={styles.cover_image} src={image} alt={anime_title || ""} width={200} height={250}/>
        </div>
    </div>
    </div>
  )
}

export default TrendingAnimeCard