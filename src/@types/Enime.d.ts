export interface Anime_Interface {
    id: string;
    slug: string;
    anilistId: number;
    coverImage: string;
    bannerImage: string;
    status: string;
    format: string;
    season: string;
    year: number;
    title: Title;
    currentEpisode: number;
    next: string;
    synonyms: string[];
    lastEpisodeUpdate: string;
    description: string;
    duration: number;
    averageScore: number;
    popularity: number;
    color: string;
    mappings: Mappings; 
    genres: string[];
    episodes: Episode[];
    relations: Relation[];
}

export interface Title {
    native: string;
    romaji: string;
    english: string;
    userPreferred: string;
}

export interface Mappings {
    anidb: number;
    anilist: number;
    "anime-planet": string;
    kitsu: number;
    mal: number;
    thetvdb: number;
    anisearch: number;
    livechart: number;
    "notify.moe": string;
}

export interface Episode {
    id: string;
    number: number;
    title: string;
    titleVariations: TitleVariations;
    description: string;
    image: string;
    airedAt: string;
    createdAt: string;
    anime: Anime_Interface;
    sources: Source[];
}

export interface TitleVariations {
    native: string;
    english: string;
}

export interface Source {
    id: string;
    target: string;
    url: string;
}

export interface Relation {
    type: string;
    animeId: string;
    id: string;
    anime: Anime_Interface;
}


// Recent Anime


export interface RecentAnime_Interface {
    id: string;
    anime: Anime_Interface;
    number: number;
    title: string;
    titleVariations: TitleVariations;
    description: string;
    image: string;
    airedAt: string;
    sources: Episode[];
}