import { AboutButtonSkills } from '../atoms/AboutButtonSkills'
import { Subtitle } from '../atoms/Subtitle/Subtitle'

export const ProjectTool = () => {
    return (
        <div className='mt-20'>
            <Subtitle text='Tools used'/>
            <div className='flex flex-wrap items-center gap-4'>
                <AboutButtonSkills title='HTML'/>
                <AboutButtonSkills title='SCSS'/>
                <AboutButtonSkills title='React'/>
                <AboutButtonSkills title='HTML'/>
                <AboutButtonSkills title='SCSS'/>
                <AboutButtonSkills title='React'/>
            </div>
        </div>
    )
}