import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({label, fullWidth, link,}) => {
  return (
    <Link to={link}
     className={`text-lg font-normal text-center text-white hover:text-primary bg-primary hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-primary duration-300 transition-all py-3 px-4 block
    ${ fullWidth && '!w-full'} mt-2 px-16`}>
        {label}
    </Link>
  )
}

export default LinkButton
