export interface IDevelopmentHistoryIcons {
    id: number;
    image: string;
}

export interface IDevelopmentHistory {
    id: number;
    title: string;
    description: string;
    date: string;
    icons: IDevelopmentHistoryIcons[];
}
