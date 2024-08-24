import { HeaderLogo } from "../molecules/HeaderLogo/HeaderLogo"
import { HeaderList } from "../molecules/HeaderList/HeaderList"
import { BurgerMenu } from "../molecules/BurgerMenu/BurgerMenu"

export const Header = () => {
    return (
        <header className="w-full h-24 bg-white fixed z-50 top-0">
            <nav className="w-11/12 m-auto h-full flex items-center py-3">
                <HeaderLogo/>
                <HeaderList/>
                <BurgerMenu/>
            </nav>
        </header>
    )
}