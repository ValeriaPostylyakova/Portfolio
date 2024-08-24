import { ProjectReview } from '../molecules/ProjectReview/ProjectReview'
import { ProjectTool } from '../molecules/ProjectTool'
import { ProjectWatch } from '../molecules/ProjectWatch'

import reactSneakers from '../atoms/react-sneakers.png?url'

export const Project1Container = () => {
    return (
        <div className='w-4/6 m-auto px-2'>
            <img src={reactSneakers} width={800} className='mb-7' />
            <ProjectReview/>
            <ProjectTool/>
            <ProjectWatch/>
        </div>
    )
}