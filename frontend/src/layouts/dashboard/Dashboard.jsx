import React, { useState } from "react";
import Sidebar from "./Sidebar";
import logo from "../../assets/images/logo.png";
import { FiMenu } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/shared/Loader";

const Dashboard = () => {
  const { loading } = useAuth()
  const [isOpen, setIsOpen] = useState(true);
  
  if( loading ) return <Loader/>
  return (
    <div className=" gap-5 flex bg-[#F5F7FA] overflow-hidden">
      {/* Start Sidebar Area */}
     <div>
     <div
        className={`${
          isOpen ? "w-0 sm:w-[300px]" : "w-[300px] md:w-20"
        } absolute md:relative top-0 overflow-hidden transition-all duration-500 shadow-lg  border-neutral-300 z-10 bg-white`}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}></Sidebar>
      </div>
     </div>
      {/* End Side bar Area */}

      {/* Start Header Area */}
      <div className="flex-1 flex flex-col  sm:ml-0  ml-3 mr-5 ">
        <div>
        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>

        <div>
        <Outlet/>
        </div>
        <div className="mt-auto">
        <Footer/>
        </div>
      </div>
      {/* End Header Area */}
    </div>
  );
};

export default Dashboard;
