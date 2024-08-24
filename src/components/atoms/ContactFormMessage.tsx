export const ContactFormMessage = () => {
  return (
    <>
        <label htmlFor="message" className="font-bold block mb-3 text-sm text-neutral-600">Message</label>
        <textarea id="message" className="py-4 resize-none px-3 outline-none block w-full bg-neutral-100 mb-10 rounded-md text-neutral-600 focus:shadow" placeholder="Enter Your Message"></textarea>
    </>
  )
}
