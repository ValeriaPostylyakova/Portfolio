import { HeaderMenuItem } from '../../atoms/HeaderMenuItem/HeaderMenuItem';
import { FC } from 'react';
import './HeaderBurgerMenu.scss'

interface propsMenu {
    active: boolean,
}

export const HeaderBurgerMenu: FC<propsMenu>  = ( {active} ) => {
  return (
    <div>
        <div className={active ? `header__blur` : ''}></div>
        <div className={active ? `header__burger_menu active` : `header__burger_menu`}>
            <ul className='flex flex-col items-center justify-center gap-10 h-screen'>
                <HeaderMenuItem href="#home" title="home"/>
                <HeaderMenuItem href="#about" title="about"/>
                <HeaderMenuItem href="#projects" title="projects"/>
                <HeaderMenuItem href="#contact" title="contact"/>
            </ul>
        </div>
    </div>
  )
}
