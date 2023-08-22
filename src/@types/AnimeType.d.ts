export type EpisodeInfo_Interface = {
    headers: {
        Referer: string;
        watchsb: string;
        "User-Agent": string;
    };
    sources: TEpisodeSources[];
    thumbnail?: string | null;
    subtitles: {
        url: string;
        lang: string;
    }[];
}

export type EpisodeSources_Interface = {
    url: string;
    isM3U8: boolean;
    quality: string;
}