import { FC } from "react"
import './Title.scss'

type PropsTitle = {
    title: string,
}

export const Title: FC<PropsTitle> = ( {title} ) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className='title'>{title}</h1>
            <div className="w-14 h-1 bg-green-600 rounded-md mb-7"></div>
        </div>
    )
}