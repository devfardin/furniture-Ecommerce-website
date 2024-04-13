import React from 'react'
import Container from '../../components/shared/Container'
import Countup from '../../components/shared/Countup'

const OurInfo = () => {
  return (
    <Container>
    <div className='border-2 border-primary border-dashed px-8 py-10 lg:px-14 lg:py-20 mt-14 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4'>
      <Countup
        endNumber='1000'
        separator=','
        suffix='+'
        text='Total Products'
      />
      <Countup
        endNumber='1500'
        separator=','
        suffix='+'
        text='Total Variant'
      />
      <Countup
        endNumber='500'
        separator=','
        suffix='+'
        text='Total User'
      />
      <Countup
        endNumber='1200'
        separator=','
        suffix='+'
        text='Total Sell'
      />
    </div>
  </Container>
  )
}

export default OurInfo