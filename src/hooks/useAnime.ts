import { ENIME_URL, ANIME_NEWS_URL, PINKISH_HUE_URL } from "@/utils/constants";

const ANIME_URL = PINKISH_HUE_URL;
export default function useAnime() {
  const API = {
    recent: `${ANIME_URL}/recent-episodes`,
    popular: `${ANIME_URL}/popular`,
    trending: `${ANIME_URL}/trending`,
    info: `${ANIME_URL}/info`,
    search: `${ANIME_URL}/search?keyword=`,
    source: `${ANIME_URL}/watch`
  };

  async function getRecent() {
    const response = await fetch(
      `${API.recent}?${new URLSearchParams({
        perPage: "12",
      })}`,
      { next: { revalidate: 60 * 5 } }
    );
    const json = await response.json();
    return json;
  }

  async function getPopular() {
    const response = await fetch(
      `${API.popular}?${new URLSearchParams({
        perPage: "12",
      })}`,
      { next: { revalidate: 60 * 60 * 24 } }
    );
    const json = await response.json();
    return json;
  }

  async function getTrending() {
    const response = await fetch(
      `${API.trending}`,
      { next: { revalidate: 60 * 60 * 24 } }
    );
    const json = await response.json();
    return json;
  }

  async function getInfo(id: string) {
    const response = await fetch(`${API.info}/${id}`, {
      next: { revalidate: 60 * 5 },
    });
    const text = await response.text();
    try{
      const json = JSON.parse(text);
      return json;
    } catch(e) {
      return null;
    }
  }

  async function getSearch(query: string) {
    const response = await fetch(`${API.search}/${query}`, {
      next: { revalidate: 60 * 5 },
    });
    const text = await response.text();
    try{
      const json = JSON.parse(text);
      return json;
    } catch(e) {
      return null;
    }
  }

  async function getEpisode(id: string) {
    console.log(id);

    const data = await fetch(
      `${API.source}/${id}`
    );
    

    const text = await data.json();
    console.log(text);
    
    try{
      return text;
    } catch(e) {
      return null;
    }
  }

  async function getNewsFeed() {
    // const response = await fetch(`${API.news_feed}?topic=anime`, {
    //   next: { revalidate: 60 * 60 },
    // });
    // const json = await response.json();
    return null;
  }

  return {
    getRecent,
    getPopular,
    getTrending,
    getInfo,
    getSearch,
    getEpisode,
    getNewsFeed,
  };
}
