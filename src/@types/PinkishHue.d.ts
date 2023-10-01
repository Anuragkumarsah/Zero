
export type IError = {
    error: string;
}

export type IRecentEpisodes = {
    currentPage: number;
    hasNextPage: boolean;
    results: IEpisodeData[];
}

export type IEpisodeData = {
    id: string;
    episodeNumber: number | undefined;
    title: string;
    alternateTitle: string;
    image: string;
    description: string;
    type: string;
    episodeDuration: string;
    totalEpisodes: number | undefined;
}

export type ISearchData = {
    currentPage: number;
    hasNextPage: boolean;
    results: ISearchResult[];
}

export type ISearchResult = {
    id: string;
    title: string;
    alternateTitle: string;
    image: string;
    type: string;
    episodeDuration: string;
    totalEpisodes: number | null;
}

export type IAnimeInfo = {
    id: string;
    title: string;
    image: string;
    type: string;
    episodeDuration: string;
    totalEpisodes: number | null;
    description: string;
    genres: string[];
    status: string;
    releaseDate: string;
    rating: string | null;
    studios: string[];
    otherNames: string[];
    episodes: IEpisode[];
    voiceActors: IVoiceActors[];
    relations: IRelatedAnime[];
    recommendations: IRelatedAnime[];
    producers: string[];
}

export type IEpisode = {
    id: string;
    episodeNumber: number;
    title: string;
}

export type IVoiceActors = {
    name: string;
    characterName: string;
    image: string;
    characterImage: string;
    role: string;
    cast: string;
}

export type IRelatedAnime = {
    id: string;
    title: string;
    alternateTitle: string;
    image: string;
    type: string;
    episodeDuration: string | null;
    totalEpisodes: number | null;
}

export type IEpisodeSources = {
    sources: {
        url: string;
        quality: string;
        isM3U8: boolean;
    }[],
    subTitles: {
        url: string;
        lang: string;
    }[],
    intro: {
        start: number;
        end: number;
    }
}