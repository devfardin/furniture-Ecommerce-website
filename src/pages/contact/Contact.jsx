import React from 'react'
import PageHeader from '../../components/shared/PageHeader'
import Container from '../../components/shared/Container'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
const Contact = () => {
  return (
    <div>
      <PageHeader page='Contact Us'/>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 gap-16 mt-16 items-top justify-between'>
          <div className='md:col-span-3'>
          <ContactInfo/>
          </div>
          <div className='md:col-span-5'>
          <ContactForm/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact