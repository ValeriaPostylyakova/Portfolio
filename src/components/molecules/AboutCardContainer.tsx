import iconHtml from '../../assets/icon/icons8-html.svg?url'
import iconCSS from '../../assets/icon/icons8-css.svg?url'
import iconJS from '../../assets/icon/icons8-js.svg?url'
import iconGit from '../../assets/icon/icons8-git.svg?url'
import iconGitHub from '../../assets/icon/icons8-github-50.png?url'
import iconReact from '../../assets/icon/icons8-react.svg?url'
import iconRedux from '../../assets/icon/icons8-redux-50.png?url'
import iconSASS from '../../assets/icon/icons8-sass.svg?url'
import iconTailwind from '../../assets/icon/icons8-tailwind-css.svg?url'
import iconVite from '../../assets/icon/icons8-vite.svg?url'
import iconTS from '../../assets/icon/icons8-typescript.svg?url'
import iconWebpack from '../../assets/icon/icons8-webpack.svg?url'



import { AboutCardYear } from "../atoms/AboutCardYear/AboutCardYear"
import { AboutCardTitle } from "../atoms/AboutCardTitile"
import { AboutCardInfo} from "../atoms/AboutCardInfo"
import { AboutCardButton } from "../atoms/AboutCardButton"

export const AboutCardContainer = () => {
    return (
        <>
            <div className="rounded-md px-4 py-2 transition w-3/4 hover:shadow mb-3">
                <div className="flex gap-10">
                    <AboutCardYear year='FEB-JUNE 2024'/>
                    <div className="flex flex-col gap-2">
                        <AboutCardTitle title='HTML, CSS, JavaScript, Git, GitHub'/>
                        <AboutCardInfo
                        text='HTML, CSS: layout of projects of different complexity. Adaptive layout, Pixel Perfect. Native JavaScript, Git and GitHub: Some of the projects are tic-tac-toe, weather forecast, Drag&Drop. All projects are hosted on GitHub'/>
                        <div className="flex items-center gap-2">
                            <AboutCardButton imageUrl={iconHtml}/>
                            <AboutCardButton imageUrl={iconCSS}/>
                            <AboutCardButton imageUrl={iconJS}/>
                            <AboutCardButton imageUrl={iconGit}/>
                            <AboutCardButton imageUrl={iconGitHub}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-md px-4 py-2 transition w-3/4 hover:shadow mb-3">
                <div className="flex gap-10">
                    <AboutCardYear year='JUNE-AUGUST 2024'/>
                    <div className="flex flex-col gap-2">
                        <AboutCardTitle title='SASS, Pug, Tailwind CSS React, Vite'/>
                        <AboutCardInfo text='In June I started learning SASS, Pug, one of the projects on GitHub - Adaptive laptop repair site. Learned key React themes, used Vite as builder, styling - SCSS, Tailwind CSS. Project on GitHub - Adaptive online sneaker store'/>
                        <div className="flex items-center gap-2">
                            <AboutCardButton imageUrl={iconSASS}/>
                            <AboutCardButton imageUrl={iconTailwind}/>
                            <AboutCardButton imageUrl={iconReact}/>
                            <AboutCardButton imageUrl={iconVite}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-md px-4 py-2 transition w-3/4 hover:shadow mb-3">
                <div className="flex gap-10">
                    <AboutCardYear year='AUG-DEC 2024'/>
                    <div className="flex flex-col gap-2">
                        <AboutCardTitle title='TypeScript, Webpack, Redux'/>
                        <AboutCardInfo text='Using TypeScript in projects, the application structure used - Atomic Design'/>
                        <div className="flex items-center gap-2">
                            <AboutCardButton imageUrl={iconTS}/>
                            <AboutCardButton imageUrl={iconWebpack}/>
                            <AboutCardButton imageUrl={iconRedux}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}