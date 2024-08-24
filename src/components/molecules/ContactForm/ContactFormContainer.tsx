import { ContactForm } from "../../atoms/ContactForm"
import { ContactFormMessage } from "../../atoms/ContactFormMessage"
import classes from './ContactFormContainer.module.scss'

export const ContactFormContainer = () => {
    return (
        <div className={classes.contact__form}>
            <ContactForm labelFor="name" id="name" label="Name" placeholder="Enter Your Name" type="text"/>
            <ContactForm labelFor="email" id="email" label="Email" placeholder="Enter Your Email" type="email"/>
            <ContactFormMessage/>
            <button className="py-3 px-10 rounded-md mt-4 bg-green-600 font-bold duration-300 text-white hover:text-green-500 hover:bg-slate-50 border border-green-500">Submit</button>
        </div>
    )
}