import iconVk from '../../atoms/vk-icon.png?url'
import iconTg from '../../atoms/telegram.png?url'
import iconGh from '../../atoms/program.png?url'
import classes from './FooterContainer.module.scss'

export const FooterContainer = () => {
    return (
        <div className={classes.footer__container}>
            <div>
                <h1 className='text-white uppercase mb-2 font-bold'>Postylyakova Valeria</h1>
                <h2 className='text-white text-sm'>Frontend Developer</h2>
            </div>
            <div>
                <h1 className='text-white uppercase mb-2 font-bold'>Social</h1>
                <div className='flex items-center gap-3'>
                    <a target='_blank' href="https://vk.com/"><img src={iconVk}/></a>
                    <a target='_blank' href="https://vk.com/"><img src={iconTg}/></a>
                    <a target='_blank' href="https://vk.com/"><img className='-ml-2' src={iconGh} width={50}/></a>
                </div>
            </div>
        </div>
    )

}