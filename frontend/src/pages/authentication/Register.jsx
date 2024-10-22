import React, { useEffect, useState } from "react";
import PageHeader from "../../components/shared/PageHeader";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { Country, State, City } from "country-state-city";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import BtnLoader from "../../components/shared/BtnLoader";
import axios from "axios";

const Register = () => {
  const { createUser, loading, setLoading, uploadUserProfile } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setConfirmPass] = useState(false);
  const [countryName, setCountry] = useState(Country.getAllCountries()[0]);
  const [stateData, setStateData] = useState(["select"]);
  const navigation = useNavigate();

  const countrySelector = (e) => {
    const [isoCode, name] = e.target.value.split(":");
    setCountry({
      name,
      isoCode,
    });
  };

  useEffect(() => {
    setStateData(State.getStatesOfCountry(countryName.isoCode));
  }, [countryName]);

  const registerHandle = async (e) => {
    e.preventDefault();
    const form = e.target;

    const firstName = form.first.value;
    const lastName = form.last.value;
    const phone = form.phoneNumber.value;
    const email = form.email.value;
    const country = countryName.name;
    const state = form.state.value;
    const city = form.city.value;
    const postCode = form.postCode.value;
    const password = form.password.value;
    const conPassword = form.conPassword.value;
    const role = "customer";
    const notifications = {
      email: true,
      sms: false,
    };
    const status = "active";
    const createdAt = new Date();
    const updatedAt = new Date();

    const validation = {
      capital: /[A-Z]/,
      spacelSymble: /[\W_]+/,
      number: /[0-9]/,
    };
    setErrorMessage("");

    if (password !== conPassword) {
      setErrorMessage("Passwords do not match");
      return;
    } else if (password.length < 6) {
      setErrorMessage("password must be at least 6 characters long.");
      return;
    } else if (!validation.capital.test(password)) {
      setErrorMessage("At least one uppercase letter");
      return;
    } else if (!validation.spacelSymble.test(password)) {
      setErrorMessage("At least one special character");
      return;
    } else if (!validation.number.test(password)) {
      setErrorMessage("At least one Number");
      return;
    } else if (!email) {
      return setErrorMessage("Email is required");
    }

    const registerInfo = {
      firstName,
      lastName,
      phone,
      email,
      country,
      state,
      city,
      postCode,
      password,
      role,
      notifications,
      status,
      createdAt,
      updatedAt,
    };
    const fullName = `${firstName} ${lastName}`;

    try {
      createUser(email, password)
        .then(async (success) => {
          await axios
            .put(`${import.meta.env.VITE_API_URL}/user`, registerInfo)
            .then((success) => {
              uploadUserProfile(fullName)
                .then((res) => {
                  toast.success("Registration successful! Welcome to Furnito");
                  navigation("/dashboard")
                })
            });
        })
        .catch((error) => {
          const message = error.message.slice(22, 42);
          toast.error(`Registration failed. ${message}`);
          setLoading(false);
        });
    } catch {
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };
  return (
    <div>
      <PageHeader page="User Register" />
      <div className="mt-10 mx-3">
        <div className="md:max-w-xl  lg:max-w-2xl mx-auto">
          <h2 className="text-3xl font-medium mb-5">Sign Up</h2>

          <form onSubmit={registerHandle}>
            {/* User Name Input */}
            <div className="mt-3 flex flex-col md:flex-row gap-3 items-center justify-between">
              <div className="w-full md:flex-1">
                <label
                  htmlFor="userName"
                  className="flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1"
                >
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  name="first"
                  className="border border-[#ced4da]  w-full px-3 py-3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal"
                />
              </div>

              <div className="w-full md:flex-1">
                <label
                  htmlFor="userName"
                  className="flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1"
                >
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  name="last"
                  className="border border-[#ced4da]  w-full px-3 py-3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal"
                />
              </div>
            </div>

            {/* User Email Address */}
            <div className="mt-5">
              <label
                htmlFor="userName"
                className="flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1"
              >
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                className="border border-[#ced4da]  w-full px-3 py-3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal"
              />
            </div>

            {/* User Phone Number */}
            <div className="mt-5">
              <label
                htmlFor="userName"
                className="flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1"
              >
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter your Number"
                name="phoneNumber"
                className="border border-[#ced4da]  w-full px-3 py-3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal"
              />
            </div>

            {/* User Address */}
            <div className="mt-5 flex flex-col md:flex-row gap-3 items-center justify-between">
              <div className="w-full md:flex-1">
                <label
                  htmlFor="userName"
                  className="flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1"
                >
                  Country
                </label>
                <select
                  onChange={countrySelector}
                  name="country"
                  className="border border-[#ced4da]  w-full px-3 py-3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal"
                >
                  {Country.getAllCountries().map((country, index) => (
                    <option
                      key={index}
                      value={`${country.isoCode}:${country.name}`}
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full md:flex-1">
                <label
                  htmlFor="userName"
                  className="flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1"
                >
                  State
                </label>
                <select
                  name="state"
                  className="border border-[#ced4da]  w-full px-3 py-3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal"
                >
                  {stateData?.map((state, index) => (
                    <option key={index}> {state?.name} </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5 flex flex-col md:flex-row gap-3 items-center justify-between">
              <div className="w-full md:flex-1">
                <label
                  htmlFor="userName"
                  className="flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1"
                >
                  City
                </label>
                <input
                  type="text"
                  placeholder="Enter your City"
                  name="city"
                  className="border border-[#ced4da]  w-full px-3 py-3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal"
                />
              </div>
              <div className="w-full md:flex-1">
                <label
                  htmlFor="userName"
                  className="flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1"
                >
                  Post Code
                </label>
                <input
                  type="text"
                  placeholder="Enter your Zip Code"
                  name="postCode"
                  className="border border-[#ced4da]  w-full px-3 py-3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal"
                />
              </div>
            </div>
            {/* Account password */}

            <div className="mt-5 flex flex-col md:flex-row gap-3 items-center justify-between">
              <div className="w-full  md:flex-1">
                <label
                  htmlFor="userName"
                  className="flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="w-full h-full relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    name="password"
                    defaultValue={"Ontorfardin2020@"}
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
              <div className="w-full md:flex-1">
                <label
                  htmlFor="userName"
                  className="flex items-center gap-3 text-base font-normal text-heading mb-2 pl-1"
                >
                  Confirmed Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPass ? "text" : "password"}
                    placeholder="Enter Confirmed Password"
                    defaultValue={"Ontorfardin2020@"}
                    name="conPassword"
                    className="border border-[#ced4da]  w-full px-3 py-3 focus:border-primary transition-all duration-300 rounded-sm outline-none text-lg font-normal"
                  />
                  <span onClick={() => setConfirmPass(!showConfirmPass)}>
                    {showConfirmPass ? (
                      <IoMdEyeOff className="text-2xl text-neutral-500 absolute top-3 right-3" />
                    ) : (
                      <FaRegEye className="text-2xl text-neutral-500 absolute top-3 right-3" />
                    )}
                  </span>
                </div>
              </div>
            </div>
            <span className="text-base font-normal text-red-500 mt-2 block">
              {errorMessage}
            </span>

            {/* Submit Button */}
            <div className="mt-5">
              <button
                type="submit"
                className="text-lg text-center flex justify-center w-full font-normal hover:text-white hover:bg-primary border  outline-none hover:border-primary  rounded-sm hover:rounded-sm py-3 transition-all duration-300 text-white cursor-pointer bg-primary"
              >
                {" "}
                {!loading ? "Sign Up" : <BtnLoader />}
              </button>
            </div>
            <div className="mt-3">
              <h1 className="text-base font-normal text-heading">
                Already have an Account?
                <Link
                  to="/login"
                  className=" hover:text-primary font-medium transition-all duration-300 cursor-pointer"
                >
                  Sign in
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
