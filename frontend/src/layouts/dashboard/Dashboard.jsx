import React, { useState } from "react";
import Sidebar from "./Sidebar";
import logo from "../../assets/images/logo.png"
import { FiMenu } from "react-icons/fi";

const Dashboard = () => {
    const [isOpen, setIsOpen]= useState(true)

    console.log(isOpen);
    
  return (
    <div className="flex gap-5 bg-[#F5F7FA]">
    {/* Start Sidebar Area */}
      <div className={`${isOpen? 'w-20 lg:w-64' : 'lg:w-20'} overflow-y-auto transition-all duration-500`}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>  </Sidebar>
      </div>
      {/* End Side bar Area */}

      {/* Start Header Area */}
      <div className="bg-white flex-1 transition-all duration-500 mr-3 rounded-lg mb-5 p-5">
        <div>
            <FiMenu onClick={()=>setIsOpen(!isOpen)} className="text-2xl hover:text-primary duration-300"/>
        </div>

        
      </div>
      {/* End Header Area */}



    
    </div>
  );
};

export default Dashboard;
