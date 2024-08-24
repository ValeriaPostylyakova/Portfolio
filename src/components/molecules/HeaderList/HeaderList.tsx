import { HeaderMenuItem } from "../../atoms/HeaderMenuItem/HeaderMenuItem"
import classes from './HeaderList.module.scss'

export const HeaderList = () => {
    return (
        <ul className={classes.header__list}>
            <HeaderMenuItem href="/#home" title="home"/>
            <HeaderMenuItem href="/#about" title="about"/>
            <HeaderMenuItem href="/#projects" title="projects"/>
            <HeaderMenuItem href="/#contact" title="contact"/>
        </ul>
    )
}