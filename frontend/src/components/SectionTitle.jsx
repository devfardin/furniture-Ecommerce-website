import React from 'react'
import Container from '../components/shared/Container'

const SectionTitle = ({title, des}) => {
  return (
    <div className='mt-24 mb-10'>
        <Container>
        <div className='max-w-xl mx-auto'>
        <h1 className='text-3xl font-normal text-heading text-center'>{title}</h1>
        <p className='text-lg font-normal text-pera text-center mt-5'>{des}</p>
        </div>
        </Container>
    </div>
  )
}

export default SectionTitle