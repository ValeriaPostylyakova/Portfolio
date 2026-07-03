import { Tool } from './tools.types';

export interface IFeatureAndCapability {
    id: number;
    name: string;
}

interface IProjectImage {
    id: number;
    image: string;
}

export interface IProject {
    id: string;
    title: string;
    description: string;
    image: string;
    projectUrl: string;
    githubUrl: string;
    tools: Tool[];
    features: IFeatureAndCapability[];
    capabilities: IFeatureAndCapability[];
    images: IProjectImage[];
}
