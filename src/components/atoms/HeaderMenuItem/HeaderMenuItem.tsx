import { FC } from "react"
import classes from './HeaderMenuItem.module.scss'

type HeaderProps = {
    title: string,
    href: string,
}

export const HeaderMenuItem: FC<HeaderProps> = ( {title, href} ) => {
    return (
        <li>
            <a href={href} className={classes.home__link}>
                {title}
            </a>
        </li>
    )
}