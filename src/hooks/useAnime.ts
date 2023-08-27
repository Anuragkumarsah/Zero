import { ANIME_URL, ENIME_URL, ANIME_NEWS_URL } from "@/utils/constants";

export default function useAnime() {
  const API = {
    recent: `${ANIME_URL}/recent-episodes`,
    popular: `${ANIME_URL}/popular`,
    trending: `${ANIME_URL}/trending`,
    info: `${ANIME_URL}/info`,
    search: `${ANIME_URL}`,
    news_feed: `${ANIME_NEWS_URL}/recent-feeds`,
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
      `${API.trending}?${new URLSearchParams({
        perPage: "10",
      })}`,
      { next: { revalidate: 60 * 60 * 24 } }
    );
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

  async function getEpisode(id: string) {
    console.log(id);

    const data = await fetch(
      `${location.protocol}//${location.host}/api/anime/fetch_episode/watch/${id}`
    );

    const json_data = await data.json();
    return json_data;
  }

  async function getNewsFeed() {
    const response = await fetch(`${API.news_feed}?topic=anime`, {
      next: { revalidate: 60 * 60 },
    });
    const json = await response.json();
    return json;
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
