import { Header } from "../../organisms/Header"
import { ProjectHome } from "../../organisms/ProjectHome/ProjectHome"
import { Project1Container } from "../../organisms/Project1Container"
import { FooterList } from "../../organisms/FooterList"
import classes from './Project1.module.scss'

export const Project1Template = () => {
    return (
        <>
            <Header/>
            <section className={classes.project__home}>
                <ProjectHome/>
            </section>
            <section className="py-20 bg-zinc-50">
                <Project1Container/>
            </section>
            <footer className="bg-black">
                <FooterList/>
            </footer>
        </>
    )
}