import { ANIME_URL } from "@/utils/constants";

export default function useAnime() {
    const API = {
        recent: `${ANIME_URL}/recent`,
        popular: `${ANIME_URL}/popular`,
        info: `${ANIME_URL}/anime`,
        search: `${ANIME_URL}/search`,
    }

    async function getRecent() {
        const response = await fetch(API.recent);
        const json = await response.json();
        return json;
    }

    async function getPopular() {
        const response = await fetch(API.popular);
        const json = await response.json();
        return json;
    }

    async function getInfo(id: string) {
        const response = await fetch(`${API.info}/${id}`);
        const json = await response.json();
        return json;
    }

    async function getSearch(query: string) {
        const response = await fetch(`${API.search}/${query}`);
        const json = await response.json();
        return json;
    }

    return {
        getRecent,
        getPopular,
        getInfo,
        getSearch
    }

}