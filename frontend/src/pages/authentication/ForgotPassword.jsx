import React from "react";
import PageHeader from "../../components/shared/PageHeader";
import Container from "../../components/shared/Container";
import ForgetPassForm from "./ForgetPassForm";

const ForgotPassword = () => {
  const handleformDate = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
  };
  return (
    <div>
      <PageHeader page="Forget Password" />
      <Container>
        <ForgetPassForm handleformDate={handleformDate} />
      </Container>
    </div>
  );
};

export default ForgotPassword;
