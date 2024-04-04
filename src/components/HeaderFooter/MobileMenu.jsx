import React from 'react'
import { GoSearch } from 'react-icons/go'
import { Link } from 'react-router-dom'

const MobileMenu = ({isOpenMenu, menuItems}) => {
  return (
    <div>
         {
          <div 
          className={` w-full ${isOpenMenu ? 'top-20' : '-top-[410px]'} z-0 bg-bg
           absolute  transition-all left-0 duration-500 ease-in py-7 px-5 rounded `}
           >

        <ul className='flex flex-col gap-4 justify-center'>
          {
            menuItems.map((items, index)=><Link to={items.link} key={index}
            className='text-xl font-normal text-title hover:text-primary'
            >
            {items.title}
            </Link>)
          }
         </ul>

          {/* Search Icons */}
          <div className=''>
            logo
           <Link to='/'>
            <GoSearch className='text-2xl lg:text-2xl xl:text-3xl group-hover:text-white duration-300 transition-all'/>
            </Link>
           </div>
           <button className='border border-primary text-black px-6 py-3'>Account</button>
        </div>
       }

        
    </div>
  )
}

export default MobileMenu