"use client"
import { PopularAnimeData } from '@/@types/AniList'
import React, {useRef} from 'react'
import TrendingAnimeCard from './TrendingAnimeCard'
import styles from './TrendingAnimeContainer.module.css'

type ITrendingAnimeContainer = {
    container_title: string,
    trendingAnime: PopularAnimeData[]
}

const TrendingAnimeContainer = ({container_title, trendingAnime} : ITrendingAnimeContainer) => {

  const container_ref = useRef<any>(null);

  function scrollToNextAnime(direction : number) {
    const container = container_ref.current;
    if (container && window) {
      container.scrollBy({
        left: direction * (window.innerWidth * 0.15),
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className={styles.trendingAnime_container}>
        <section>
            <h2>{container_title}</h2>
        </section>
        <div className={styles.slider_container}>
        <div className={styles.trendingAnimeCard_container} ref={container_ref}>
            {
              trendingAnime.map((anime : PopularAnimeData, id : any) => {
                return <TrendingAnimeCard key={id} anime_title={anime.title.english || anime.title.romaji || anime.title.native} image={anime.image}/>
              })
            }
        </div>
        <div className={styles.buttonContainer}>
            <div style={{height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
              <button className={styles.scrollBtn} onClick={() => scrollToNextAnime(1)}>{">"}</button> 
              <button className={styles.scrollBtn} onClick={() => scrollToNextAnime(-1)}>{"<"}</button> 
              </div>
        </div>
        </div>
    </div>
  )
}

export default TrendingAnimeContainer