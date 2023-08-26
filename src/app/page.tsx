import { Anime_Interface, RecentAnime_Interface } from "@/@types/Enime";
import AnimeContainer from "@/components/AnimeContainer";
import useAnime from "@/hooks/useAnime";
import Carousel from "@/components/Carousel";


import styles from './page.module.css'
import { AnimeData, PopularAnimeData, RecentAnime } from "@/@types/AniList";

export default async function Home() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getRecent, getPopular, getTrending } = useAnime();
  
  const recentAnime : { results: AnimeData[] } = await getRecent();
  const popularAnime : { results: PopularAnimeData[] } = await getPopular();
  // console.log(recentAnime);
  const trendingAnime : {results: PopularAnimeData[]} = await getTrending();
  

  return (
    <div className={styles.app}>

        <Carousel topAnime={trendingAnime.results}/>
        <AnimeContainer container_title="Latest Episodes" recentAnime={recentAnime.results} popularAnime={null}/>
        <AnimeContainer container_title="Popular Episodes" popularAnime={popularAnime.results} recentAnime={null}/>
    </div>
  )
}
