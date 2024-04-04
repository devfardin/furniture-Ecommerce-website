import React from 'react'

const OutlineButton = ({lable, onclick}) => {
  return (
    <button className='py-3 px-10 lg:py-5 lg:px-14 outline-none border-primary border-[3px] text-lg font-medium text-white hover:text-primary bg-primary hover:border-primary hover:bg-transparent duration-300 transition-all'
    onClick={onclick} >{lable}</button>
  )
}

export default OutlineButton