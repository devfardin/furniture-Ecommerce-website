import React from 'react'
import { FiPhone } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";

const ContactInfo = () => {
    const contactInfo = [
        {
            icon: FiPhone,
            title: 'Phone',
            text: '+8801316049157'
        },
        {
            icon: SlEnvolope,
            title: 'Email',
            text: 'contactfardin22@gmail.com'
        },
        {
            icon: CiLocationOn,
            title: 'Address',
            text: '2715 Ash Dr. San Jose, South Dakota 83475'
        },
    ]
    return (
        <div>
           <div>
           <h1 className='text-[32px] text-heading font-medium'>Contact with us</h1>
            <p className='text-base font-normal text-pera mt-5'>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore.
            </p>
           </div>
           {/* Contact Icons */}

           <div className='mt-10'>
            {
                contactInfo.map((info, index)=> <div key={index} className='flex gap-6 mb-6 group'>
                        <div>
                           <div className='border p-3 border-[#dddddd] group-hover:border-primary transition-all duration-300 rounded-full'>
                           <info.icon className='text-2xl group-hover:text-primary transition-all duration-300 text-heading'/>
                           </div>
                        </div>
                        <div>
                            <h1 className='text-xl font-medium text-heading'>{info.title}</h1>
                            <h5 className='text-base font-normal text-neutral-400 group-hover:text-primary duration-300 transition-all'>{info.text}</h5>
                        </div>
                </div>)
            }
           </div>

        </div>
    )
}

export default ContactInfo