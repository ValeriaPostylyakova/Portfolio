import { InfoContainer } from "../../molecules/InfoContainer/InfoContaner"
import classes from './HomeInfo.module.scss';

export const HomeInfo = () => {
    return (
        <section className={classes.home__info} id="home">
            <div className="w-3/4 flex flex-col items-center gap-5">
                <InfoContainer/>
            </div>
        </section>
    )
}