import { Subtitle } from '../../atoms/Subtitle/Subtitle'
import classes from './ProjectReview.module.scss'

export const ProjectReview = () => {
    return (
        <div>
            <Subtitle text='Project overview'/>
            <div className={classes.review__container}>
                <div>
                    <p className={classes.review__title}>This project implements:</p>
                    <ul className={classes.review__list}>
                        <li>- Adaptive layout</li>
                        <li>- Registration form</li>
                        <li>- Slider</li>
                        <li>- Mobile menu</li>
                        <li>- Routing</li>
                        <li>- Search</li>
                        <li>- Basket</li>
                        <li>- Shopping section</li>
                        <li>- Bookmarks section</li>
                        <li>- Pagination</li>
                    </ul>
                </div>
                <div className={classes.review__item}>
                    <p className={classes.review__title}>Opportunities:</p>
                    <ul className={classes.review__list}>
                        <li>- Adding items to cart</li>
                        <li>- Deleting items from the cart</li>
                        <li>- Basket design</li>
                        <li>- Search by product</li>
                        <li>- Adding products to bookmarks</li>
                        <li>- Deleting items from bookmarks</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}