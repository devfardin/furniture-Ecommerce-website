import React from 'react'
import CountUp from 'react-countup';

const Countup = ({endNumber, separator, suffix, text}) => {
  return (
    <div className='flex justify-center flex-col items-center'>
    <CountUp
      className='text-4xl font-medium text-heading text-center'
      end={endNumber}
      duration={2.75}
      separator={separator}
      suffix={suffix}
    />
    <h2 className='h-[3px] text-center my-3 flex justify-center bg-primary w-16 border-primary'> </h2>
    <h5 className='text-lg font-normal text-pera'>{text}</h5>
  </div>
  )
}

export default Countup