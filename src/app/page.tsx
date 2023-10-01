import AnimeContainer from "@/components/AnimeContainer";
import useAnime from "@/hooks/useAnime";
import Carousel from "@/components/Carousel";
import NewsFeeds from "@/components/NewsFeeds";


import styles from './page.module.css'
import { AnimeData, PopularAnimeData } from "@/@types/AniList";
import { NewsFeed } from "@/@types/AnimeNewsNetwork";
import TrendingAnimeContainer from "@/components/TrendingAnimeContainer";
import { IEpisodeData, IRecentEpisodes } from "@/@types/PinkishHue";

export default async function Home() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getRecent, getPopular, getTrending, getNewsFeed } = useAnime();
  
  const recentAnime : { results: IEpisodeData[] } = await getRecent();
  const popularAnime : { results: IEpisodeData[] } = await getPopular();
  const trendingAnime : IEpisodeData[] = await getTrending();
  
  // const newsFeed : NewsFeed[] = await getNewsFeed();

  const bannerAnime : IEpisodeData[]  = [...trendingAnime].sort(() => 0.5 - Math.random());

  return (
    <div className={styles.app}>
        <Carousel topAnime={bannerAnime}/>
        <TrendingAnimeContainer container_title='Trending Anime' trendingAnime={popularAnime.results.slice(0, 20)}/>
        <div className={styles.main_body}>
          <div className={styles.anime_container}>
          <AnimeContainer container_title="Latest Episodes" recentAnime={recentAnime.results.slice(0, 12)} popularAnime={null}/>
          <AnimeContainer container_title="Popular Episodes" popularAnime={popularAnime.results.slice(0, 12)} recentAnime={null}/>
          </div>
          {/* <NewsFeeds newsFeed={newsFeed.slice(0,10)}/> */}
        </div>
    </div>
  )
}
