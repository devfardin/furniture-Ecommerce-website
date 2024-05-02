// import  Container  from './../../shared/Container'
import logo from './../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { GoSearch } from "react-icons/go";
import { TfiReload, TfiUser } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from './MobileMenu';
const Header = () => {
  const [isOpenMenu, setIsOpenMenu]= useState(false)
  const menuItems=[
    {
      title: 'Home', 
      link: '/'
    },
    {
      title: "About Us",
      link: '/about-us'
    },
    {
      title: 'Shop',
      link:'/shop'
    },
    {
      title:'Blogs',
      link:'/blogs'
    },
    {
      title: 'Contact',
      link: '/contact-us'
    },
    {
      title: 'Order Track',
      link:'/order-track'
    }
  ]
  return (
  <div className='!bg-white w-full top-0 z-50 border-b border-neutral-200   mx-auto '>
    <div>
    <div className=' max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4
    flex relative bg-white  top-0 left-0 justify-between  items-center py-5 xl:py-'>
      {/* Logo  */}
      <div className='w-[120px] md:w-[150px] lg:w-[150px] xl:w-[200px]'>
        <img className='w-full' src={logo} alt="Website Logo" />
      </div>

      {/* Website Menu and logos*/}
      <div className='flex justify-between  bg-white '>

        <div className='lg:flex justify-between items-center gap-10 hidden relative '>
          {/* Menu Items */}
          <div className=''>
         <ul className='flex  gap-7 justify-center'>
            {
              menuItems.map((items, index)=><Link to={items.link} key={index}
              className='text-lg  font-normal text-black hover:text-primary'
              >
                  {items.title}
              </Link>)
            }
           </ul>
         </div>

         {/* User quick Icon */}
           <div className='flex gap-3 justify-between items-center'>

            {/* Search Icons */}
           <div className='p-3.5  lg:p-4 hover:bg-primary duration-300 transition-all group bg-neutral-200'>
           <Link to='/'>
            <GoSearch className='text-xl group-hover:text-white duration-300 transition-all'/>
            
            </Link>
           </div>

           {/* Compire Icons */}
           <div className='p-3.5 lg:p-4 hover:bg-primary duration-300 transition-all group bg-neutral-200'>
           <Link to='/'>
            <TfiReload className='text-xl  group-hover:text-white duration-300 transition-all'/>
            
            </Link>
           </div>

           {/* Compire Icons */}
           <div className='p-3.5 relative lg:p-4 hover:bg-primary duration-300 transition-all group bg-neutral-200'>
           <Link to='/'>
            <IoMdHeartEmpty className='text-xl  group-hover:text-white duration-300 transition-all'/>
            <span className="absolute -right-0 top-0.5 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-primary text-center text-[11px] text-white ">0</span>
            </Link>
           </div>

           {/* Compire Icons */}
           <div className='p-3.5 relative lg:p-4 hover:bg-primary duration-300 transition-all group bg-neutral-200'>
           <Link to='/'>
            <BsCart2 className='text-xl !z-10 group-hover:text-white duration-300 transition-all'/>

            <span className="absolute right-0 top-0.5 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-primary text-center text-[11px] text-white ">12</span>
            </Link>
           </div>

           {/* Compire Icons */}
          
          <div className='group'>
          <div className='p-3.5 lg:p-4 hover:bg-primary duration-300 transition-all bg-neutral-200'>
           <Link to='/'>
            <TfiUser className='text-xl group-hover:text-white duration-300 transition-all'/>
            </Link>
           </div>

             {/* Hover Menu */}
           <div className='absolute top-[90px] group-hover:!block ease-in group-hover:top-[52px] 
           hidden duration-500 right-0 z-30 bg-neutral-100 p-5 w-[150px]'>
            <div className='flex flex-col items-center justify-center gap-2'>
              <Link to='/login'>Login</Link>
              <Link to='./register'>Register</Link>
            </div>
          </div>
          </div>
         
        

           </div>
        </div>  
        </div>

        <div className='md:flex-none md:block lg:hidden z-0'>
          <button className='text-2xl md:text-3xl hover:bg-primary transition-all duration-300 hover:text-white bg-[#BAE6FD] p-2 rounded '
          onClick={()=> setIsOpenMenu(!isOpenMenu)}>
            {
              isOpenMenu ? <RxCross1/> : <RxHamburgerMenu/>
            }
          </button>
        </div>
     
    </div>
    <div>
    <MobileMenu isOpenMenu={isOpenMenu} menuItems={menuItems}/>
    </div>
  </div>
  </div>
  )
}

export default Header