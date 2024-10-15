import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarLink = ({to, label, icon:Icon, isOpen} ) => {
  return (
    <div>
      <NavLink
       to={to}
       className={({ isActive })=>` ${
        isOpen ? "justify-start" : "md:justify-center"
      } ${isActive ? 'bg-primary text-white' : '' } flex items-center text-lg gap-2 hover:bg-[#F7F7F7] p-2 transition-all duration-300 hover:text-primary rounded-md` }
       > 
       <Icon className={` ${ isOpen ? '' : 'text-3xl' }`}> </Icon> <span className={`${isOpen ? '' : 'md:hidden' }`}> {label} </span> </NavLink>
    </div>
  )
}

export default SidebarLink
