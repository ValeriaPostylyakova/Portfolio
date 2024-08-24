import { FC } from "react"

interface PropsForm {
    id: string,
    label: string,
    labelFor: string,
    placeholder: string,
    type: string,
}

export const ContactForm: FC<PropsForm> = ({id, label, labelFor, placeholder, type}) => {
    return (
        <>
            <label htmlFor={labelFor} className="font-bold block mb-3 text-sm text-neutral-600">{label}</label>
            <input id={id} className="px-3 outline-none block w-full py-4 bg-neutral-100 mb-10 rounded-md text-neutral-600 focus:shadow" type={type} placeholder={placeholder}/>
        </>
    )
}