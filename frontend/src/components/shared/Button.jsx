import React from 'react'

const Button = ({label, fullWidth}) => {
  return (
    <button className={`text-lg font-normal text-center text-white hover:text-primary bg-primary hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-primary duration-300 transition-all py-3 px-4 ${fullWidth & 'w-full'} mt-2 px-16`}
          type='submit'>{label}</button> 
  )
}

export default Button