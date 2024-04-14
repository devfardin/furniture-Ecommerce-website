import React from 'react'
import Button from '../../components/shared/Button'

const ContactForm = () => {
    return (
        <div>
            <h1 className='text-[32px] text-heading font-medium'>Send us an Email</h1>
            <form className='flex flex-col gap-4 mt-6'>
                <div>
                    <label htmlFor='name' className='text-base font-normal text-heading mb-2 inline-block'>
                        Your Name
                    </label>
                    <input id='name' type='text' name='name' placeholder='Your Name'
                        className='py-3 px-4 w-full font-normal text-lg text-pera border border-[#dddddd] focus:border-primary rounded outline-none duration-300 transition-all' />
                </div>

                <div>
                    <label htmlFor='email' className='text-base font-normal text-heading mb-2 inline-block'>
                        Your Email
                    </label>
                    <input id='email' type='email' name='email' placeholder='Your Email'
                        className='py-3 px-4 w-full font-normal text-lg text-pera border border-[#dddddd] focus:border-primary rounded outline-none duration-300 transition-all' />
                </div>

                <div>
                    <label htmlFor='message' className='text-base font-normal text-heading mb-2 inline-block'>
                        Your Message
                    </label>
                    <textarea id='message' type='' name='message' placeholder='Your Message'
                        className='py-3 px-4 w-full h-32 font-normal text-lg text-pera border border-[#dddddd] focus:border-primary rounded outline-none duration-300 transition-all'> </textarea>
                </div>
                <div>
                    <Button label='Send Message'/>
                </div>
            </form>
        </div>
    )
}

export default ContactForm