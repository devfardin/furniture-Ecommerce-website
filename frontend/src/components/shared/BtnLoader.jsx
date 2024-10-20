import React from "react";
import { Bars } from "react-loader-spinner";

const BtnLoader = () => {
  return (
      <Bars
        height="30"
        width="30"
        color="#ffffff"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
  );
};

export default BtnLoader;
