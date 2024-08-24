import { FC } from "react"
import './Subtitle.scss'

type PropsText = {
    text: string
}

export const Subtitle: FC<PropsText> = ({ text }) => {
    return (
        <h3 className='subtitle'>{text}</h3>
    )
}