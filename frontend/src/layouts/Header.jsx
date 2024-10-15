// import  Container  from './../../shared/Container'
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { TfiReload, TfiUser } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";
import Container from "../components/shared/Container";
import logo from "./../assets/images/logo.png";
import MobileMenu from "../components/MobileMenu";
import LinkButton from "../components/shared/LinkButton";
import LinkButtonOut from "../components/shared/LinkButtonOut";
import useAuth from "../hooks/useAuth";
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { user, logOut } = useAuth();
  const click = () => alert("hello");
  const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },
    {
      title: "Contact",
      link: "/contact-us",
    },
    {
      title: "Order Track",
      link: "/order-track",
    },
  ];
  return (
    <div className="!bg-white w-full top-0 z-50 border-b border-neutral-200   mx-auto ">
      <Container>
        <div className="flex relative bg-white  top-0 left-0 justify-between  items-center py-5 xl:py-">
          {/* Logo  */}
          <div className="w-[120px] md:w-[150px] lg:w-[150px] xl:w-[200px]">
            <img className="w-full" src={logo} alt="Website Logo" />
          </div>

          {/* Website Menu and logos*/}
          <div className="flex justify-between  bg-white ">
            <div className="lg:flex justify-between items-center gap-10 hidden relative ">
              {/* Menu Items */}
              <div className="">
                <ul className="flex  gap-7 justify-center">
                  {menuItems.map((items, index) => (
                    <NavLink
                      to={items.link}
                      key={index}
                      className={({ isActive, isPanding }) =>
                        isPanding
                          ? "text-red-600"
                          : isActive
                          ? "text-lg  font-norma text-primary transition-all duration-300"
                          : "text-lg  font-normal text-black hover:text-primary transition-all duration-300"
                      }
                    >
                      {items.title}
                    </NavLink>
                  ))}
                </ul>
              </div>

              {/* User quick Icon */}
              <div className="flex gap-3 justify-between items-center">
                {/* Search Icons */}
                <div className="p-3.5  lg:p-4 hover:bg-primary duration-300 transition-all group bg-neutral-200">
                  <Link to="/">
                    <GoSearch className="text-xl group-hover:text-white duration-300 transition-all" />
                  </Link>
                </div>

                {/* Compire Icons */}
                <Link
                  to="/compare"
                  className="p-3.5 lg:p-4 hover:bg-primary duration-300 transition-all group bg-neutral-200"
                >
                  <div>
                    <TfiReload className="text-xl  group-hover:text-white duration-300 transition-all" />
                  </div>
                </Link>

                {/* Wishlist Icons */}
                <div className="relative group">
                  <div className="p-3.5 relative lg:p-4 hover:bg-primary duration-300 transition-all group bg-neutral-200">
                    <div>
                      <IoMdHeartEmpty className="text-xl  group-hover:text-white duration-300 transition-all" />
                      <span className="absolute -right-0 top-0.5 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-primary text-center text-[11px] text-white ">
                        0
                      </span>
                    </div>
                  </div>
                  {/* Hover cart */}
                  <div className="absolute group-hover:scale-100 scale-0 delay-150 group-hover:block duration-150 ease-in-out p-5 right-0 z-10 w-[400px] shadow-md bg-white">
                    <h1 className="text-lg font-normal text-neutral-600">
                      No Items In Wishlist
                    </h1>
                    <LinkButton
                      label="Check Out"
                      fullWidth={true}
                      link={"/about-us"}
                    ></LinkButton>
                    <LinkButtonOut
                      label={"Wishlist"}
                      fullWidth={true}
                      link={"/wishlist"}
                    ></LinkButtonOut>
                  </div>
                </div>

                {/* Cart Icons */}
                <div className="relative group">
                  <div className="p-3.5  group-hover:bg-primary relative lg:p-4 hover:bg-primary duration-300 transition-all group bg-neutral-200">
                    <div>
                      <BsCart2 className="text-xl !z-10 group-hover:text-white duration-300 transition-all" />
                      <span className="absolute duration-300 right-0 top-0.5 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-primary text-center text-[11px] text-white ">
                        12
                      </span>
                    </div>
                  </div>
                  {/* hover Card */}
                  <div className="absolute group-hover:scale-100 scale-0 delay-150 group-hover:block duration-150 ease-in-out p-5 right-0 z-10 w-[400px] shadow-md bg-white">
                    <h1 className="text-lg font-normal text-neutral-600">
                      No Items In Cart
                    </h1>
                    <LinkButton
                      label="Check Out"
                      fullWidth={true}
                      link={"/about-us"}
                    ></LinkButton>
                  </div>
                </div>

                {/* User Icons */}
                <div className="relative group">
                  <div className="p-3.5 lg:p-4 hover:bg-primary group-hover:bg-primary  duration-300 transition-all bg-neutral-200">
                    <div>
                      <TfiUser className="text-xl group-hover:text-white duration-300 transition-all" />
                    </div>
                  </div>
                  {/* Hover Menu */}
                  <div
                    className="absolute top-[52px] right-0 scale-0 group-hover:scale-100 z-30 bg-white shadow-md w-[120px] 
                    transform group-hover:translate-y-0 transition-transform 
                    duration-500 ease-in-out  group-hover:block"
                  >
                    <div className="flex flex-col items-center justify-center">
                      {user ? (
                        <>
                         <Link
                          className="hover:bg-primary hover:text-white duration-200
                         py-3 px-5 text-start text-base w-full border-b"
                          to="/dashboard"
                        >
                          Dashboard
                        </Link>

                        <button
                        className="hover:bg-primary hover:text-white duration-200
                         py-3 px-5 text-start text-base w-full"
                        onClick={()=> logOut()}>
                          Log Out
                        </button>

                        </>
                      ) : (
                        <>
                          <Link
                            className="hover:bg-primary hover:text-white duration-200
                        py-3 px-5 text-start text-base font-normal border-b w-full"
                            to="/login"
                          >
                            Login
                          </Link>
                          <Link
                            className="hover:bg-primary hover:text-white duration-200
                         py-3 px-5 text-start text-base w-full"
                            to="./register"
                          >
                            Register
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex-none md:block lg:hidden z-0">
            <button
              className="text-2xl md:text-3xl hover:bg-primary transition-all duration-300 hover:text-white bg-[#BAE6FD] p-2 rounded "
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              {isOpenMenu ? <RxCross1 /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
        <div>
          <MobileMenu isOpenMenu={isOpenMenu} menuItems={menuItems} />
        </div>
      </Container>
    </div>
  );
};

export default Header;
