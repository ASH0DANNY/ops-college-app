export interface NewsItem {
    id: string;
    title: string;
    date: string;
    readMoreLink: string;
    isNew?: boolean;
}

export interface NewsTabProps {
    news: NewsItem[];
    title: string;
    viewAllLink: string;
}
