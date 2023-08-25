
import { Anime_Interface, RecentAnime_Interface } from "@/@types/Enime"

import AnimeCard from "./AnimeCard"

import styles from './AnimeContainer.module.css'


type AnimeContainer_Interface = {
    container_title: string,
    recentAnime: RecentAnime_Interface[] | null,
    popularAnime: Anime_Interface[] | null
}

export default function AnimeContainer({ container_title, recentAnime, popularAnime }: AnimeContainer_Interface) {

    return (
        <div className={styles.anime_container}>
            <section className={styles.anime_top_section}>
            <h2 className={styles.container_title}>{container_title}</h2>
            </section>
            <div className={styles.card_container}>
                {recentAnime !==null && recentAnime?.map((anime : RecentAnime_Interface, id: any) => (
                    <AnimeCard key={id} episode_id={anime.id} anime_id={anime.anime.slug} duration={anime.anime.duration} format={anime.anime.format} anime_title={anime.anime.title.english || anime.anime.title.romaji} image_url={anime.anime.coverImage} info={`EP: ${anime.number}`} episode={anime.number}/>
                ))}
                { popularAnime !== null && popularAnime?.map((anime : Anime_Interface, id: any) => (
                    <AnimeCard key={id} episode_id={undefined} anime_id={anime.slug} duration={anime.duration} format={anime.format} anime_title={anime.title?.english || anime.title?.romaji} image_url={anime.coverImage} info={`EPS: ${anime.currentEpisode}`} episode={anime.currentEpisode}/>
                ))}
            </div>
        </div>
    )

}