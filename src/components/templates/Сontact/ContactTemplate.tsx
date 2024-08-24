import classes from './ContactTemplate.module.scss'
import { Contacts } from '../../organisms/Contacts/Contacts'

export const ContactTemplate = () => {
  return (
    <section className={classes.contact} id='contact'>
        <Contacts/>
    </section>
  )
}
