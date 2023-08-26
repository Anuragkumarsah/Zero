
import { Anime_Interface, RecentAnime_Interface } from "@/@types/Enime"

import AnimeCard from "./AnimeCard"

import styles from './AnimeContainer.module.css'
import { AnimeData, PopularAnimeData, RecentAnime } from "@/@types/AniList"


type IAnimeContainer = {
    container_title: string,
    recentAnime: AnimeData[] | null,
    popularAnime: PopularAnimeData[] | null
}

export default function AnimeContainer({ container_title, recentAnime, popularAnime }: IAnimeContainer) {
    // console.log(recentAnime);
    return (
        <div className={styles.anime_container}>
            <section className={styles.anime_top_section}>
            <h2 className={styles.container_title}>{container_title}</h2>
            </section>
            <div className={styles.card_container}>
                {recentAnime !==null && recentAnime?.map((anime : AnimeData, id: any) => (
                    <AnimeCard key={id} anime_id={anime.id} format={anime.type} anime_title={anime.title.english || anime.title.romaji} image_url={anime.image} info={`EP: ${anime.episodeNumber}`} episode={anime.episodeNumber} episode_title={anime.episodeTitle}/>
                ))}
                { popularAnime !== null && popularAnime?.map((anime : PopularAnimeData, id: any) => (
                    <AnimeCard key={id} anime_id={anime.id} format={anime.type} anime_title={anime.title.english || anime.title.romaji} image_url={anime.image} info={`Total EP: ${anime.totalEpisodes}`} episode={anime.duration} episode_title={''} isPopular={true}/>
                ))}
            </div>
        </div>
    )

}