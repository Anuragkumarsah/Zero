// import { Anime_Interface, Episode } from "@/@types/Enime";
import useAnime from "@/hooks/useAnime"
import AnimePlayer from "./components/AnimePlayer";
import { AnimeInfo, Episode } from "@/@types/AniList";

type WatchProp_Interface = {
    params: { anime_id: string },
    searchParams: { [key: string]: string },
}


export default async function WatchAnime({ params, searchParams} : WatchProp_Interface) {
    // console.log(searchParams, params.anime_id);

    if(searchParams.id === undefined) {
        return <div>Invalid Anime ID</div>
    }

    const getSortedEpisodes = (episodes: Episode[]) => {
       return episodes.slice().sort((a, b) => a.number - b.number);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {getInfo} = useAnime();

    const anime_data : AnimeInfo = await getInfo(searchParams.id as string);
    if(anime_data && anime_data.episodes === undefined) {
        return <div>Failed to load resource</div>
    }
    const episodes : Episode[] = getSortedEpisodes(anime_data.episodes);
    const episode_index : number = searchParams.ep ? episodes.findIndex((episode) => episode.number === parseInt(searchParams.ep)) : 0;
    // console.log(anime_data);
    if(!episodes || episodes.length === 0 || episode_index === -1) {
        return <div>Episode not found</div>
    }
    const episode_data : Episode = episodes[episode_index];
    
    return (
        <div>

            <AnimePlayer episodeInfo={episode_data} cover_image={anime_data.cover} />
        </div>
    )
}