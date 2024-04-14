import React from 'react'
import PageHeader from '../../components/shared/PageHeader'
import Container from '../../components/shared/Container'
import Button from '../../components/shared/Button'
const OrderTrack = () => {
  return (
    <div>
      <PageHeader page='Order Tracking'/>
      <Container>
        <div className='max-w-xl shadow p-10 mx-auto mt-10 lg:mt-16'>
          <h1 className='text-3xl font-medium text-heading mb-4'>Order Tracking</h1>
          <p className='text-base text-pera font-normal'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>

          <form className='mt-4 flex flex-col gap-3'>
          <label htmlFor="id" className='text-base font-medium text-heading'>Order ID</label>
          <input  className='py-3 px-4 font-normal text-lg text-heading border border-[#dddddd] focus:border-primary outline-none duration-300 transition-all'
          type="text" for='id' placeholder='Example: 125'/> 
          <Button label='Track Now' fullWidth={true}/>   
        </form>
        </div>
      </Container>
    </div>
  )
}

export default OrderTrack