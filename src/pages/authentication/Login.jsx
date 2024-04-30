import React, { useState } from 'react'
import PageHeader from '../../components/shared/PageHeader'
import Container from '../../components/shared/Container'
import { Link } from 'react-router-dom'
import Button from '../../components/shared/Button'
import { IoMdEyeOff } from 'react-icons/io'
import { FaRegEye } from 'react-icons/fa'

const Login = () => {
    const [showPassword, setShowPassword]=useState(false)
    return (
        <div>
            <PageHeader page='User Login' />
            <div className='mt-10 mx-3'>
                <div className='md:max-w-lg  lg:max-w-lg mx-auto'>
                    <h2 className='text-3xl font-medium mb-5'>Sign In</h2>
                    <form>
                        <div className='mt-3'>
                            <label htmlFor="userName" className='flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1'>Email or Username <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='Enter your Email' required
                                className='border border-[#ced4da]  w-full px-3 py-3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal'
                            />
                        </div>


                        <div className='mt-5'>
                            <label htmlFor="userName" className='flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1'>Password<span className='text-red-500'>*</span></label>
                            <div className='relative'>
                                <input type={showPassword ? 'text': 'password'} placeholder='Enter your Password' required
                                    className='border border-[#ced4da]  w-full px-3 py-3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal'
                                />
                                <span onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <IoMdEyeOff className='text-2xl text-neutral-500 absolute top-3 right-3' /> : <FaRegEye className='text-2xl text-neutral-500 absolute top-3 right-3' />
                                    }
                                </span>
                            </div>
                        </div>

                        {/* Login Remember me and forgot Password */}
                        <div className='mt-5 flex  justify-between items-center gap-10'>
                            <div>
                                <input id='checkbox' type="checkbox"
                                    className='border border-[#ced4da] w-3 3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal'
                                />
                                <label htmlFor="checkbox" className='text-base font-normal text-heading mb-2 pl-1'>Remember Me</label>
                            </div>
                            <div>
                                <Link to='/forgot-password' className='text-base font-normal text-heading hover:text-primary transition-all duration-300 cursor-pointer'>Forgot Password?</Link>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className='mt-3'>
                            <input type='submit' value='Login'
                                className='text-lg w-full font-normal hover:text-primary border hover:border-primary hover:bg-transparent rounded-sm hover:rounded-sm py-3 transition-all duration-300 text-white cursor-pointer bg-primary'
                            />

                        </div>
                        <div className='mt-3'>
                            <h1 className='text-base font-normal text-heading'> Do not have an account? <Link to='/register' className=' hover:text-primary font-medium transition-all duration-300 cursor-pointer'>Sign up</Link> </h1>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login