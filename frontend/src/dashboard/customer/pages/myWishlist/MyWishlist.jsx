import React from "react";
import useWishList from "../../../../hooks/useWishList";
import Loader from "../../../../components/shared/Loader";
import LinkButton from "../../../../components/shared/LinkButton";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import TableBody from "./TableBody";
const MyWishlist = () => {
  const [wishlistRefetch, isLoading, wishList] = useWishList();

  if (isLoading) {
    return <Loader />;
  } else if ( !wishList.length > 0) {
    return (
      <div className="flex justify-center flex-col mt-2 bg-white h-3/4 py-20 items-center gap-3">
        <h1 className="text-4xl font-semibold text-heading">
          No Products in your Cart!
        </h1>
        <LinkButton label="Back to Home" link="/" />
      </div>
    );
  }
  return (
    <div>
      <Table class="min-w-full border border-[#F1F1F1]">
        <Thead class="bg-[#F1F1F1]">
          <Tr className="!py-5 !w-full">
            <Th class="!py-4 !px-6 text-left text-xl font-medium text-gray-500 tracking-wider">
              Product
            </Th>
            <Th class="!py-4 !px-6 text-left text-xl font-medium text-gray-500 tracking-wider">
              Price
            </Th>
            <Th class="!py-4 !px-6 text-left text-xl font-medium text-gray-500 tracking-wider">
              Quantity
            </Th>
            <Th class="!py-4 !px-6 text-left text-xl font-medium text-gray-500 tracking-wider">
              Subtotal
            </Th>
            <Th class="!py-4 !px-6 text-left text-xl font-medium text-gray-500 tracking-wider">
              Action
            </Th>
          </Tr>
        </Thead>
          <TableBody wishList={wishList} wishlistRefetch={wishlistRefetch} isLoading={isLoading}/>
      </Table>
    </div>
  );
};

export default MyWishlist;
