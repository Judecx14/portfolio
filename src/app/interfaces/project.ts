import { Image } from './image';
export interface Project {
    id: string
    isWeb: boolean
    isPrivate: boolean
    name: string
    synthesis: string
    image: string
    primaryColor: string
    secundaryColor: string
    textColor: string
    description: string
    technologies: Image []
    link?: string
    github?: string
    background: string
    ovarlay: string
}