export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export type FetchProject = {
    id?: number;
    title?: string;
    description?: string;
    imageUrl?: string;
    tools?: string[];
    relizes?: string[];
    possibilities?: string[];
    link?: string;
};

export type ProjectState = {
    projectId: number | null;
    project: FetchProject | null;
    status: Status;
};
