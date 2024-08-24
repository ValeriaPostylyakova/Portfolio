import classes from './InfoContainer.module.scss';
import avatar from '../../atoms/avatar.png?url'
import arrow from '../../atoms/home-arrow.png?url'

export const InfoContainer = () => {
    return (
        <>
            <div className={classes.home__avatar}>
                <img className='rounded-full' src={avatar} alt="avatar" />
            </div>
            <h1 className={classes.home__title}>Hey, I'm Postylyalova Valeria</h1>
            <h2 className={classes.home__subtitle}>Frontend Developer</h2>
            <a href="#about">
                <img className={classes.home__arrow} width={20} src={arrow} alt="arrow" />
            </a>
        </>
    )
}