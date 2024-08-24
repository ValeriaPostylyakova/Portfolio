import { ProjectButton } from "../../atoms/ProjectButton"
import { FC } from "react"
import classes from './ProjectContainer.module.scss'

interface propsProject {
    imageUrl: string,
    title: string,
    description: string,
}

export const ProjectContainer:FC<propsProject> = ( {imageUrl, title, description} ) => {
    return (
        <div className={classes.projects__container}>
            <img className={classes.projects__img} src={imageUrl}/>
            <div className={classes.projects__info_container}>
                <h1 className="mb-5 text-2xl font-bold tracking-tight">{title}</h1>
                <p className="text-zinc-600 mb-7">{description}</p>
                <ProjectButton/>
            </div>
        </div>
    )
}