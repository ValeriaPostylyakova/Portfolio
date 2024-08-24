import { Subtitle } from '../atoms/Subtitle/Subtitle'
import { ButtonCallBack } from '../atoms/ButtonCallBack'
import { ButtonLink } from '../atoms/ButtonLink'

export const ProjectWatch = () => {
    return (
        <div className='mt-14'>
            <Subtitle text='Preview'/>
            <div className='flex items-center gap-3 flex-wrap'>
                <ButtonLink/>
                <ButtonCallBack/>
            </div>
        </div>
    )
}