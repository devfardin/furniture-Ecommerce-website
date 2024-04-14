import React from 'react'
import PageHeader from '../../components/shared/PageHeader'
import Container from '../../components/shared/Container'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import ShopInfo from '../../components/shared/ShopInfo'
const Contact = () => {
  return (
    <div>
      <PageHeader page='Contact Us' />
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 gap-16 mt-16 items-top justify-between'>
          <div className='md:col-span-3'>
            <ContactInfo />
          </div>
          <div className='md:col-span-5'>
            <ContactForm />
          </div>
        </div>
        <section className='mt-20'>
          <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29002.77640423097!2d89.93129225104029!3d24.680593840621643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd88ef4beee683%3A0x808f1fba36c20d14!2z4Kan4Kao4Kas4Ka-4Kec4Ka_IOCmuOCmsOCmleCmvuCmsOCmvyDgpqHgpr_gppfgp43gprDgp4Ag4KaV4Kay4KeH4Kac4KWk!5e0!3m2!1sen!2sbd!4v1713079262132!5m2!1sen!2sbd" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </Container>
      <ShopInfo />
    </div>
  )
}

export default Contact