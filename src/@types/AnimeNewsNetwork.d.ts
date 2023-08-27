export type NewsFeed = {
    title: string;
    id: string;
    uploadedAt: string;
    topics: string[];
    preview: NewsPreview;
    thumbnail: string;
    url: string;
}

export type NewsPreview = {
    intro: string;
    full: string;
}