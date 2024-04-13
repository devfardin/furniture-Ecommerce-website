import React from 'react'
import Container from '../shared/Container'
import { Link } from 'react-router-dom'
const PageHeader = ({page}) => {
  return (
    <div className='bg-bg py-16'>
        <Container>
            <h1 className='text-4xl font-medium text-heading text-center'>{page}</h1>
            <h1 className='text-xl font-normal text-pera  duration-300 transition-all text-center mt-4'>
                <Link className='hover:text-primary' to='/'>Home</Link> | <span>{page}</span>
            </h1>
        </Container>
    </div>
  )
}
export default PageHeader