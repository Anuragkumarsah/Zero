import { Anime_Interface, RecentAnime_Interface } from "@/@types/Enime";
import AnimeContainer from "@/components/AnimeContainer";
import useAnime from "@/hooks/useAnime";

import styles from './page.module.css'

export default async function Home() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getRecent, getPopular } = useAnime();
  
  const recentAnime : { data: RecentAnime_Interface[] } = await getRecent();
  const popularAnime : { data: Anime_Interface[] } = await getPopular();
  

  return (
    <div className={styles.app}>
        <AnimeContainer container_title="Latest Episodes" recentAnime={recentAnime.data}/>
    </div>
  )
}
