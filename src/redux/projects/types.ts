export type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

export type ProjectState = {
    projects: Project[];
};
