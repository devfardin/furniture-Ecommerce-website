import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-white transition-all duration-500 rounded-lg mb-5 p-5">
      <p className="text-lg text-center">
        © { year } Furnito. Developed by{" "}
        <a
          className="text-primary font-semibold"
          target="_blank"
          href="https://github.com/devfardin"
        >
          {" "}
          Fardin{" "}
        </a>
        . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
