export type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    linkGitHub: string;
};

export type ProjectState = {
    projects: Project[];
};
