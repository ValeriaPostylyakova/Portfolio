import { FC } from 'react'

type PropsImageUrl = {
    imageUrl: string,
}

export const AboutCardButton: FC<PropsImageUrl> = ({ imageUrl }) => {
    return (
        <div className='flex items-center'>
            <img src={imageUrl} width={25} alt="" />
        </div>
    )
}