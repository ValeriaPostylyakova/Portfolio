import { AboutButtonSkills } from "../atoms/AboutButtonSkills"
import { Subtitle } from "../atoms/Subtitle/Subtitle"

export const AboutButtonSkillContainer = () => {
    return (
        <div>
            <Subtitle text="My skills"/>
            <div className="flex flex-wrap gap-3">
                <AboutButtonSkills title="HTML"/>
                <AboutButtonSkills title="CSS"/>
                <AboutButtonSkills title="JavaScript"/>
                <AboutButtonSkills title="SCSS"/>
                <AboutButtonSkills title="Tailwind CSS"/>
                <AboutButtonSkills title="Pug"/>
                <AboutButtonSkills title="React"/>
                <AboutButtonSkills title="Redux"/>
                <AboutButtonSkills title="Vite"/>
                <AboutButtonSkills title="Webpack"/>
                <AboutButtonSkills title="TypeScript"/>
                <AboutButtonSkills title="Git"/>
                <AboutButtonSkills title="GitHub"/>
            </div>
        </div>
    )
}