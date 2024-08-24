import { Title } from "../../atoms/Title/Title"
import { ContactFormContainer } from "../../molecules/ContactForm/ContactFormContainer"
import classes from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <>
            <div className="mb-20 text-center w-6/12 m-auto">
                <Title title='contact'/>
            </div>
            <form className={classes.contact__form}>
                <ContactFormContainer/>
            </form>
        </>
    )
}