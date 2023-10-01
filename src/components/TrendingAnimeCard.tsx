import Image from 'next/image'
import React from 'react'
import styles from './TrendingAnimeCard.module.css'

type ITrendingAnimeCard = {
  anime_title: string | null,
  image: string,
  index: number
}

const TrendingAnimeCard = ({anime_title, image, index}: ITrendingAnimeCard) => {
  // console.log(index);
  
  return (
    <div style={{width:"clamp(10vw, calc(15vw - 20px), calc(1800px * 0.15 - 10px))", height:"clamp(11vw, 15vw, 15vw)", marginLeft:"20px"}}>
    <div className={styles.trendingAnime_container}>
        <section className={styles.title_container}>
          <p className={styles.anime_title}>{anime_title?.toLowerCase()}</p>
          <p className={styles.anime_ranking}>{index + 1}</p>
        </section>
        <div className={styles.image_container}>
        <Image className={styles.cover_image} src={image} alt={anime_title || ""} width={200} height={250}/>
        </div>
    </div>
    </div>
  )
}

export default TrendingAnimeCard