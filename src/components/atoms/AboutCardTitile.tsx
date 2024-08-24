import { FC } from "react"

type PropsTitle = {
    title: string
}

export const AboutCardTitle: FC<PropsTitle> = ({ title }) => {
    return (
        <h3 className="font-bold text-lime-500">{title}</h3>
    )
}