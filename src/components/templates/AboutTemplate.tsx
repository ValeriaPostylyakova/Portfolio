import { AboutInfo } from "../organisms/AboutInfo"
import { AboutList } from "../organisms/AboutList/AboutList"

export const AboutTemplate = () => {
    return (
        <section className="bg-stone-50 pt-20 scroll-m-16" id="about">
            <AboutInfo/>
            <AboutList/>
        </section>
    )
}