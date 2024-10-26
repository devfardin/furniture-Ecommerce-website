import React, { useState } from "react";
import useCartData from "../../../../hooks/useCartData";
import LinkButton from "../../../../components/shared/LinkButton";
import Loader from "../../../../components/shared/Loader";
import CartTable from "./CartTable";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FiMinus, FiPlus } from "react-icons/fi";

const MyCart = () => {
  const [refetch, isLoading, error, cartItems] = useCartData();



  if (isLoading) {
    return <Loader />;
  } else if (cartItems.length < 0) {
    return (
      <div className="flex justify-center items-center gap-3">
        <h1 className="text-4xl font-semibold text-heading">
          No Products in your Cart!
        </h1>
        <LinkButton label="Back to Home" link="/" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-7 lg:gap-5 justify-between">
      {/* Cart Data Table */}
      <div className="col-span-full xl:col-span-5">
        
         <Table class="min-w-full border border-[#F1F1F1]">
          <Thead class="bg-[#F1F1F1]">
            <Tr className="!py-5 !w-full">
              <Th class="py-4 text-left text-xl font-medium text-gray-500 tracking-wider">
                Product
              </Th>
              <Th class="py-4 text-left text-xl font-medium text-gray-500 tracking-wider">
                Price
              </Th>
              <Th class="py-4 text-left text-xl font-medium text-gray-500 tracking-wider">
                Quantity
              </Th>
              <Th class="py-4 text-left text-xl font-medium text-gray-500 tracking-wider">
                Subtotal
              </Th>
              <Th class="py-4 text-left text-xl font-medium text-gray-500 tracking-wider">
                Action
              </Th>
            </Tr>
          </Thead>
          
          
           <CartTable refetch={refetch} cartItems={cartItems} />  
         </Table>  

       
      </div>

      <div className="col-span-full xl:col-span-2">
        <div className="border border-dashBorder p-10 bg-white">
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
            <LinkButton
              label="Proceed to Checkout"
              fullWidth={true}
              link="/checkout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
