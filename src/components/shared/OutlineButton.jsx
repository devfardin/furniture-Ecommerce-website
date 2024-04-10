import React from 'react'

const OutlineButton = ({lable, onclick}) => {
  return (
    <button className='py-3 px-7 lg:py-3.5 lg:px-9 outline-none border-primary border-2 text-base font-medium text-white hover:text-primary bg-primary hover:border-primary hover:bg-transparent duration-300 transition-all'
    onClick={onclick} >{lable}</button>
  )
}

export default OutlineButton