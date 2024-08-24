import { AboutCardContainer } from "../../molecules/AboutCardContainer"
import { Subtitle } from "../../atoms/Subtitle/Subtitle"
import { AboutButtonSkillContainer } from "../../molecules/AboutButtonSkillContainer"
import classes from './AboutList.module.scss'

export const AboutList = () => {
    return (
            <div className="w-11/12 ml-auto pb-14">
                <div className={classes.about__list}>
                    <div className="flex flex-col gap-3">
                        <Subtitle text="My development history"/>
                        <AboutCardContainer/>
                    </div>
                    <AboutButtonSkillContainer/>
                </div>
            </div>  
    )
}