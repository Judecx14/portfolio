import { Image } from './image';
export interface Project {
    id: string
    isWeb: boolean
    name: string
    synthesis: string
    image: string
    primaryColor: string
    secundaryColor: string
    textColor: string
    description: string
    technologies: Image []
}