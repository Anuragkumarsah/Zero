export type RecentAnime = {
    currentPage: number;
    hasNextPage: boolean;
    totalPages: number;
    totalResults: number;
    result: AnimeData[];
}

export type AnimeData = {
    id: string;
    malId: number;
    title: Title;
    image: string;
    rating: number;
    color: string;
    episodeId: string;
    episodeTitle: string;
    episodeNumber: number;
    genres: string[];
    type: string;
}

export type Title = {
    native: string | null;
    romaji: string | null;
    english: string | null;
    userPreferred: string | null;
}

export type PopularAnime = {
    currentPage: number;
    hasNextPage: boolean;
    result: PopularAnimeData[];
}

export type PopularAnimeData = {
    id: string;
    malId: number;
    title: Title;
    image: string;
    trailer: Trailer;
    description: string;
    status: string;
    cover: string;
    rating: number;
    relaseDate: number;
    color: string;
    genres: string[];
    totalEpisodes: number;
    duration: number;
    type: string;
}


export type AnimeInfo = {
    id: string;
    title: Title;
    malId: number;
    synonyms: string[];
    isLicensed: boolean;
    isAdult: boolean;
    countryOfOrigin: string;
    trailer: Trailer;
    image: string;
    popularity: number;
    color: string;
    cover: string;
    description: string;
    status: string;
    releaseDate: number;
    startDate: {year: number; month: number; day: number};
    endDate: {year: number; month: number; day: number};
    totalEpisodes: number;
    currentEpisode: number;
    rating: number;
    duration: number;
    genres: string[];
    season: string;
    studios: string[];
    subOrDub: string;
    type: string;
    recommendations: RecommendedAnime[];
    characters: Character[];
    relations: Relation[];
    episodes: Episode[];
}

export type Trailer = {
    id: string;
    site: string;
    thumbnail: string;
}

export type RecommendedAnime = {
    id: string;
    malId: number;
    title: Title;
    status: string;
    episodes: number;
    image: string;
    cover: string;
    rating: number;
    type: string;
}

export type Character = {
    id: string;
    role: string;
    name: CharacterName;
    image: string;
    voiceActors: JPVoiceActor;
}

export type CharacterName = {
    first: string;
    last: string;
    full: string;
    native: string;
    userPreffered: string;
}

export type JPVoiceActor = {
    id: string;
    language: string;
    name: CharacterName;
    image: string;
}

export type Relation = {
    id: number;
    relationType: string;
    malId: number;
    title: Title;
    status: string;
    episodes: number | null;
    image: string;
    color: string | null;
    type: string;
    cover: string;
    rating: number;
}

export type Episode = {
    id: string; // used to fetch episode from gogoanime
    title: string;  
    image: string;
    number: number;
    createdAt: string;
    description: string | null;
    url: string;
}

export type SearchResult = {
    currentPage: number;
    hasNextPage: boolean;
    result: QueryResult[];
}

export type QueryResult = {
    id: string;
    malId: number;
    title: Title;
    status: string;
    image: string;
    cover: string;
    popularity: number;
    description: string;
    rating: number;
    genres: string[];
    color: string;
    totalEpisodes: number;
    currentEpisodeCount: number;
    type: string;
    releseDate: number;
}