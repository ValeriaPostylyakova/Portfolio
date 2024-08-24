import { ButtonLink } from '../../atoms/ButtonLink'
import classes from './ProjectHome.module.scss'

export const ProjectHome = () => {
    return (
            <div className="flex flex-col items-center flex-wrap gap-10">
                <h1 className={classes.project__title}>React-Sneakers</h1>
                <p className={classes.project__subtitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, cum.</p>
                <ButtonLink/>
            </div>
    )
}