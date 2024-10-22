import React, { useState } from "react";
import PageHeader from "../../components/shared/PageHeader";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import BtnLoader from "../../components/shared/BtnLoader";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, loading, setLoading } = useAuth();
  const navagation = useNavigate()

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  
    loginUser(email, password)
        .then( success => {
            toast.success('Login Success')
            form.reset();
            navagation('/dashboard');
            return
        } )
        .catch( error => {
            toast.error(error.message)
            setLoading(false);
        })
 
    
  };

  return (
    <div>
      <PageHeader page="User Login" />
      <div className="mt-10 mx-3">
        <div className="md:max-w-lg  lg:max-w-lg mx-auto">
          <h2 className="text-3xl font-medium mb-5">Sign In</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="mt-3">
              <label
                htmlFor="userName"
                className="flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1"
              >
                Email or Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                required
                name="email"
                defaultValue='contactfardin22@gmail.com'
                className="border border-[#ced4da]  w-full px-3 py-3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="userName"
                className="flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1"
              >
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  required
                  defaultValue='Ontorfardin2020@'
                  name="password"
                  className="border border-[#ced4da]  w-full px-3 py-3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal"
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <IoMdEyeOff className="text-2xl text-neutral-500 absolute top-3 right-3" />
                  ) : (
                    <FaRegEye className="text-2xl text-neutral-500 absolute top-3 right-3" />
                  )}
                </span>
              </div>
            </div>

            {/* Login Remember me and forgot Password */}
            <div className="mt-5 flex  justify-between items-center gap-10">
              <div>
                <input
                  id="checkbox"
                  type="checkbox"
                  className="border border-[#ced4da] w-3 3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal"
                />
                <label
                  htmlFor="checkbox"
                  className="text-base font-normal text-heading mb-2 pl-1"
                >
                  Remember Me
                </label>
              </div>
              <div>
                <Link
                  to="/forgot-password"
                  className="text-base font-normal text-heading hover:text-primary transition-all duration-300 cursor-pointer"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            {/* Submit Button */}
            <div className="mt-3">
            <button 
              type="submit"
              className="text-lg text-center flex justify-center w-full font-normal hover:text-white hover:bg-primary border  outline-none hover:border-primary  rounded-sm hover:rounded-sm py-3 transition-all duration-300 text-white cursor-pointer bg-primary"
              > { !loading ? 'Login'  : <BtnLoader/> }</button>
            </div>
            <div className="mt-3">
              <h1 className="text-base font-normal text-heading">
                {" "}
                Do not have an account?{" "}
                <Link
                  to="/register"
                  className=" hover:text-primary font-medium transition-all duration-300 cursor-pointer"
                >
                  Sign up
                </Link>{" "}
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
