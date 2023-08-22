import { ANIME_URL, BASE_URL } from "@/utils/constants";

export default function useAnime() {
    const API = {
        recent: `${ANIME_URL}/recent`,
        popular: `${ANIME_URL}/popular`,
        info: `${ANIME_URL}/anime`,
        search: `${ANIME_URL}/search`,
    }

    async function getRecent() {
        const response = await fetch(API.recent, {next: {revalidate: 60 * 5}});
        const json = await response.json();
        return json;
    }

    async function getPopular() {
        const response = await fetch(API.popular);
        const json = await response.json();
        return json;
    }

    async function getInfo(id: string) {
        const response = await fetch(`${API.info}/${id}`, {
            next: {revalidate: 60 * 5}
        });
        const json = await response.json();
        return json;
    }

    async function getSearch(query: string) {
        const response = await fetch(`${API.search}/${query}`);
        const json = await response.json();
        return json;
    }

    async function getEpisode(id: string) {
        const data = await fetch(
            `${location.protocol}//${location.host}/api/anime/fetch_episode/watch/${id}`,
        );
        
        const json_data = await data.json();
        return json_data;
    }

    return {
        getRecent,
        getPopular,
        getInfo,
        getSearch,
        getEpisode,
    }

}