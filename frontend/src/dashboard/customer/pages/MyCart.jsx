import React from "react";
import useCartData from "../../../hooks/useCartData";
import LinkButton from "../../../components/shared/LinkButton";
import Loader from "../../../components/shared/Loader";

const MyCart = () => {
  const [refetch, isLoading, error, cart] = useCartData();
  if(isLoading){
    return <Loader/>
  } else if(cart.length < 0){
    return(
      <div className="flex justify-center items-center gap-3">
        <h1 className="text-4xl font-semibold text-heading">No Products in your Cart!</h1>
        <LinkButton label='Back to Home' link='/' />
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-7 lg:gap-5 justify-between">
      {/* Cart Data Table */}
      <div className="col-span-full xl:col-span-5">
        <h1 className="text-3xl font-medium">Products length {cart.length} items</h1>
      </div>

      <div className="col-span-full xl:col-span-2 border border-dashBorder p-10 bg-white">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-medium text-heading border-b border-dashBorder pb-4">
            Cart Total:
          </h2>

          <h2 className="text-lg font-medium text-heading border-b border-dashBorder pb-4 flex justify-between items-center gap-5">
          Sub Total
            <span className="text-pera">$00</span>
          </h2>

          <h2 className="text-lg font-normal text-pera border-b border-dashBorder pb-4 flex justify-between items-center gap-5">
          Tax (Incl. --%)
            <span className="text-pera">$00</span>
          </h2>

          <h2 className="text-lg font-medium text-heading border-b border-dashBorder pb-4 flex justify-between items-center gap-5">
          Total Amount
            <span className="text-pera">$00</span>
          </h2>
          <LinkButton label="Proceed to Checkout" fullWidth={true} link='/checkout'/>
        </div>

      </div>
    </div>
  );
};

export default MyCart;
