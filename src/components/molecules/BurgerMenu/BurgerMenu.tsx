import { useState } from "react"
import { HeaderBurgerMenu } from "./HeaderBurgerMenu"
import classes from './BurgerMenu.module.scss'

export const BurgerMenu = () => {

    const [menuActive, setMenuActive] = useState<boolean>(false);

    const burgerMenuOpen = () => {
        setMenuActive(!menuActive)
    }

  return (
    <>
        <button 
            className={classes.header__burger}
            onClick={burgerMenuOpen}
            >
                <span className={menuActive ? classes.header__burger_span_1 : ''}></span>
                <span className={menuActive ? classes.header__burger_span_2 : ''}></span>
                <span className={menuActive ? classes.header__burger_span_3 : ''}></span>
        </button>
        <HeaderBurgerMenu active={menuActive}/>
    </>
  )
}
