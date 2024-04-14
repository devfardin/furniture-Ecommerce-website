import React, { useState } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import MobileFilter from './MobileFilter'
import { LiaSearchSolid } from "react-icons/lia";
const Filter = () => {
    const [menuOpen, setIsMenuOpen] = useState(false)
    return (
        <div>
            <div className='md:flex-none md:block lg:hidden z-0'>
                <button className='text-2xl md:text-3xl hover:bg-primary transition-all duration-300 hover:text-white bg-[#BAE6FD] p-2  '
                    onClick={() => setIsMenuOpen(!menuOpen)}>
                    {
                        menuOpen ? <RxCross1 /> : <RxHamburgerMenu />
                    }
                </button>
            </div>

            <div className='border hidden lg:block border-[#dddddd] rounded-sm p-3'>
                <h1 className='text-xl font-medium text-heading pb-1 border-b border-[#dddddd]'>Filter</h1>
                <form className='mt-4 relative'>
                    <input id='email' type='email' name='email' placeholder='Search Products'
                        className='py-2 px-4 w-full font-normal text-lg text-pera border border-[#dddddd] focus:border-primary rounded outline-none duration-300 transition-all' />
                    <div className='p-3.5 rounded-r-md bg-primary absolute top-0 right-0'>
                        <LiaSearchSolid className='text-white text-lg' />
                    </div>
                </form>
                <div>
                    <div className='mt-4'>
                        <h1 className='text-xl font-medium text-heading pb-1 border-b border-[#dddddd]'>Category</h1>

                    </div>
                </div>
            </div>

            <MobileFilter menuOpen={menuOpen} />
        </div>
    )
}

export default Filter