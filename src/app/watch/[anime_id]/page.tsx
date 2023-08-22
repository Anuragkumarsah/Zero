import { Anime_Interface, Episode } from "@/@types/Enime";
import useAnime from "@/hooks/useAnime"
import AnimePlayer from "./components/AnimePlayer";

type WatchProp_Interface = {
    params: { anime_id: string },
    searchParams: { [key: string]: string | string[] | undefined },
}

export default async function WatchAnime({ params, searchParams} : WatchProp_Interface) {
    console.log(searchParams);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {getInfo} = useAnime();

    const anime_data : Anime_Interface = await getInfo(params.anime_id);

    
    let episode_data = anime_data?.episodes?.filter((episode: Episode) => episode.id === searchParams.ep)[0];
    // console.log(searchParams);
    return (
        <div>
            <AnimePlayer episodeInfo={episode_data} animeInfo={anime_data} />
        </div>
    )
}