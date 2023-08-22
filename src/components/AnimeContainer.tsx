
import { RecentAnime_Interface } from "@/@types/Enime"

import AnimeCard from "./AnimeCard"

import styles from './AnimeContainer.module.css'


type AnimeContainer_Interface = {
    container_title: string,
    recentAnime: RecentAnime_Interface[]
}

export default function AnimeContainer({ container_title, recentAnime }: AnimeContainer_Interface) {

    return (
        <div className={styles.anime_container}>
            <section className={styles.anime_top_section}>
            <h2 className={styles.container_title}>{container_title}</h2>
            </section>
            <div className={styles.card_container}>
                {recentAnime.map((anime : RecentAnime_Interface, id: any) => (
                    <AnimeCard key={id} episode_id={anime.id} anime_id={anime.anime.slug} duration={anime.anime.duration} format={anime.anime.format} anime_title={anime.anime.title.english || anime.anime.title.romaji} image_url={anime.anime.coverImage} info={`EP: ${anime.number}`} episode={anime.number}/>
                ))}
            </div>
        </div>
    )

}