import { FC } from "react"
import classes from './AboutCardYear.module.scss'

type PropsYear = {
    year: string,
}

export const AboutCardYear:FC<PropsYear> = ({ year }) => {
    return (
        <span className={classes.about__year}>{year}</span>
    )
}