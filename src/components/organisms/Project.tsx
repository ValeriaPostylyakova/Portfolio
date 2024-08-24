import { ProjectContainer } from "../molecules/ProjectContainer/ProjectContainer"
import { SectionTitle } from "../molecules/SectionTitle"

import reactSneakers from '../atoms/react-sneakers.png?url'

export const Project = () => {
  return (
    <div className="w-10/12 m-auto">
        <SectionTitle/>
        <ProjectContainer 
        imageUrl={reactSneakers} 
        title="React-Sneakers" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam."/>
    </div>
  )
}
