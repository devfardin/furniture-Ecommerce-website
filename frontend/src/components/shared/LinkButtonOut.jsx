import React from "react";
import { Link } from "react-router-dom";

const LinkButtonOut = ({ label, fullWidth, link }) => {
  return (
    <Link
      to={link}
      className={`text-lg font-normal text-center text-primary hover:text-white hover:bg-primary border-2 border-primary duration-300 transition-all py-3 px-4 block
   ${fullWidth && "!w-full"} mt-2 px-16`}
    >
      {label}
    </Link>
  );
};

export default LinkButtonOut;
