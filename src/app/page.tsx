import { Anime_Interface, RecentAnime_Interface } from "@/@types/Enime";
import AnimeContainer from "@/components/AnimeContainer";
import useAnime from "@/hooks/useAnime";
import Carousel from "@/components/Carousel";


import styles from './page.module.css'

export default async function Home() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getRecent, getPopular } = useAnime();
  
  const recentAnime : { data: RecentAnime_Interface[] } = await getRecent();
  const popularAnime : { data: Anime_Interface[] } = await getPopular();
  

  return (
    <div className={styles.app}>
        <Carousel topAnime={popularAnime.data.slice(0, 9)}/>
        <AnimeContainer container_title="Latest Episodes" recentAnime={recentAnime.data} popularAnime={null}/>
        <AnimeContainer container_title="Popular Episodes" popularAnime={popularAnime.data} recentAnime={null}/>
    </div>
  )
}
