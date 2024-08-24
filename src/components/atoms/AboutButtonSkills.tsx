import { FC } from "react"
type ButtonProps = {
    title: string,
}

export const AboutButtonSkills: FC<ButtonProps> = ({title}) => {
    return (
        <div className="rounded-xl bg-stone-200 text-center px-5 py-3">
            <span className="text-stone-500 font-medium">{title}</span>
        </div>
    )
}