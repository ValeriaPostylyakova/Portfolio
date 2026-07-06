import { Tool } from './tools.types';

export interface IFeatureAndCapability {
    id: number;
    name: string;
}

export interface IProjectImage {
    id: number;
    image: string;
}

export interface IProject {
    id: string;
    title: string;
    description: string;
    image: string;
    project_url: string;
    github_url: string;
    tools: Tool[];
    features: IFeatureAndCapability[];
    capabilities: IFeatureAndCapability[];
    images: IProjectImage[];
}
