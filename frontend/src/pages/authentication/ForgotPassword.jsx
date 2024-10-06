import React from 'react'
import PageHeader from '../../components/shared/PageHeader'
import Container from '../../components/shared/Container'
import Button from '../../components/shared/Button'

const ForgotPassword = () => {
  const handleformDate=(e)=>{
    e.preventDefault()
    const email=e.target.email.value
    console.log(email);
  }
  return (
    <div>
      <PageHeader page='Forget Password'/>
      <Container>
        <div className='max-w-xl border border-[#e4e4e4] shadow p-10 mx-auto mt-10 '>
        <h1 className='text-3xl font-medium text-heading mb-6 text-center'>Forget Password ?</h1>
          <form onSubmit={handleformDate} className='mt-4 flex flex-col gap-3'>
          <input  className='py-3 px-4 font-normal text-lg text-heading border rounded-sm border-[#e4e4e4] focus:border-primary rounded-sm outline-none duration-300 transition-all'
          type="email" for='id' placeholder='Your Account E-mail' name='email' required/> 
          <Button label='Send Reset Mail' fullWidth={true}/>   
        </form>
        </div>
      </Container>
    </div>
  )
}

export default ForgotPassword