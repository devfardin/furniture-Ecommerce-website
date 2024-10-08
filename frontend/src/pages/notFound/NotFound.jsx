import React from "react";
import notFoundImage from "../../assets/images/404notfound.png";
import Container from "../../components/shared/Container";
import LinkButton from "../../components/shared/LinkButton";
const NotFound = () => {
  return (
    <Container>
      <div className="">
        <img className="w-5/12 mx-auto" src={notFoundImage} alt="Not Found" />
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-heading text-center">
          Sorry! We can't find the page
        </h2>
        <div className="text-center mt-5">
          <LinkButton label={"Back to Home"} link={"/"} fullWidth={false} />
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
