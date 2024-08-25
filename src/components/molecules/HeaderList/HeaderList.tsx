import { HeaderMenuItem } from "../../atoms/HeaderMenuItem/HeaderMenuItem"
import classes from './HeaderList.module.scss'

export const HeaderList = () => {
    return (
        <ul className={classes.header__list}>
            <HeaderMenuItem href="/Portfolio/#home" title="home"/>
            <HeaderMenuItem href="/Portfolio/#about" title="about"/>
            <HeaderMenuItem href="/Portfolio/#projects" title="projects"/>
            <HeaderMenuItem href="/Portfolio/#contact" title="contact"/>
        </ul>
    )
}