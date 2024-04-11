import React from 'react'
import Container from '../../components/shared/Container'
import logo from './../../assets/images/logo.png'
import { LuPhone } from "react-icons/lu";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => (
  <div className='bg-bg pt-10 border-t border-neutral-200 border-2 mt-16'>
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-10'>
        {/* Footer Infor and Logo */}
        <div className=''>
        <img className='w-[80%]' src={logo} alt="" />
        <a href='tel:+8801316049157' className='text-lg font-normal flex items-center gap-2 text-[#888888] hover:text-primary transition-all duration-300 cursor-pointer mt-6'>
          <LuPhone/>
          <span> +60-001-004</span>
        </a>
        </div>

      </div>
    </Container>
  </div>
)

export default Footer