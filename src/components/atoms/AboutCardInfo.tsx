import { FC } from "react"

type PropsText = {
    text: string,
}

export const AboutCardInfo: FC<PropsText> = ({ text }) => {
    return (
        <p className="text-stone-600 mb-3">{text}</p>
    )
}