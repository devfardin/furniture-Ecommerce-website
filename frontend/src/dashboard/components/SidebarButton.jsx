import React from "react";

const SidebarButton = ({  btnHandle , lable, icon: Icon, isOpen }) => {
  return (
    <button onClick={ btnHandle }
      className={` ${
        isOpen ? "justify-start" : "md:justify-center"} flex items-center text-lg gap-2 hover:bg-[#F7F7F7] p-2 transition-all duration-300 hover:text-primary rounded-md  w-full`}
    >
      <Icon className={` ${isOpen ? "" : "text-3xl"}`}> </Icon>{" "}
      <span className={`${isOpen ? "" : "md:hidden"}`}> { lable } </span>
    </button>
  );
};

export default SidebarButton;
