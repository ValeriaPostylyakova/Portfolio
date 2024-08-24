import { FC } from "react"

type PropsText = {
    text: string,
}

export const Text: FC<PropsText> = ( {text} ) => {
    return (
        <p className="text-lg">{text}</p>
    )
}