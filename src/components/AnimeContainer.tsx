
import { Anime_Interface, RecentAnime_Interface } from "@/@types/Enime"

import AnimeCard from "./AnimeCard"

import styles from './AnimeContainer.module.css'
import { AnimeData, PopularAnimeData, RecentAnime } from "@/@types/AniList"
import { IEpisodeData, IRecentEpisodes } from "@/@types/PinkishHue"


type IAnimeContainer = {
    container_title: string,
    recentAnime: IEpisodeData[] | null,
    popularAnime: IEpisodeData[] | null
}

export default function AnimeContainer({ container_title, recentAnime, popularAnime }: IAnimeContainer) {
    // console.log(recentAnime);
    return (
        <div className={styles.anime_container}>
            <section className={styles.anime_top_section}>
            <h2 className={styles.container_title}>{container_title}</h2>
            </section>
            <div className={styles.card_container}>
                {recentAnime !==null && recentAnime?.map((anime : IEpisodeData, id: any) => (
                    <AnimeCard key={id} anime_id={anime.id} format={anime.type} anime_title={anime.title || anime.alternateTitle} image_url={anime.image} info={`EP: ${anime.episodeNumber}`} episode={anime.episodeNumber!} episode_title={''}/>
                ))}
                { popularAnime !== null && popularAnime?.map((anime : IEpisodeData, id: any) => (
                    <AnimeCard key={id} anime_id={anime.id} format={anime.type} anime_title={anime.title || anime.alternateTitle} image_url={anime.image} info={`Total EP: ${anime.totalEpisodes}`} episode={anime.episodeDuration} episode_title={''} isPopular={true}/>
                ))}
            </div>
        </div>
    )

}