import headerLogo from '../../atoms/logo.jpg?url'
import classes from './HeaderLogo.module.scss'

export const HeaderLogo = () => {
    return (
        <a href="/">
            <div className='flex items-center gap-2 cursor-pointer'>
                <img src={headerLogo} className='max-w-16' alt='logo' />
                <p className={classes.header__logo}>Valeria Postylyakova</p>
            </div>
        </a>
    )
}