import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Tbody, Td, Tr } from "react-super-responsive-table";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const TableBody = ({ wishlistRefetch, isLoading, wishList }) => {
  const axiouSecure = useAxiosSecure();
  const [productQuantity, setProductQuantity] = useState();
  const handleCartDelete = async(id) => {
    const result = await axiouSecure.delete(`/wishlist/${id}`);
    if (result.data.acknowledged) {
      toast.success("Item successfully removed from your wishlist.");
      wishlistRefetch();
    } else {
      toast.error(
        "Failed to delete item from your wishlist. Please try again later."
      );
    }
  };
  return (
    <Tbody class="divide-y divide-gray-200">
      {wishList.map((cartItem) => (
        <Tr key={cartItem?._id} className="!p-5 mb-7 bg-white">
          <Td class="!px-6 !py-4 !my-3 cart-table-td whitespace-nowrap">
            <div className="flex flex-col justify-start md:flex-row gap-4 md:items-center ">
              <img
                class="w-28 h-28 object-left lg:w-24 lg:h-24 text-left rounded-lg"
                src={cartItem?.featureImg}
                alt={cartItem?.name}
              />
              <Link
                to={`/product/${cartItem?.productId}`}
                className="text-base leading-5 lg:text-xl font-medium hover:text-primary duration-300 transition-all text-heading "
              >
                {cartItem?.name}
              </Link>
            </div>
          </Td>
          <Td class="!px-6 !py-4 whitespace-nowrap">
            <h2 className="text-base leading-5 lg:text-xl font-medium text-heading mt-2 md:mt-0">{`$${cartItem?.price.toFixed(
              2
            )}`}</h2>
          </Td>
          <Td class="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center gap-1 mt-2 md:mt-0">
              <button
                onClick={() =>
                  productQuantity > 1
                    ? setProductQuantity(cartItem?.productQuantity - 1)
                    : ""
                }
                className="p-2 bg-[#F1F1F1] outline-none"
              >
                <FiMinus className="text-base leading-5 lg:text-xl" />
              </button>
              <input
                type="number"
                value={productQuantity}
                defaultValue={cartItem?.productQuantity}
                className="bg-[#F1F1F1] p-1.5 w-[40px] outline-none text-center text-base leading-5 lg:text-lg font-normal"
              />
              <button
                onClick={() =>
                  setProductQuantity(cartItem?.productQuantity + 1)
                }
                className="p-2 bg-[#F1F1F1] outline-none"
              >
                <FiPlus className="text-base leading-5 lg:text-xl" />
              </button>
            </div>
          </Td>
          <Td class="px-6 py-4 whitespace-nowrap ">
            <h1 className="text-base leading-5 lg:text-xl font-medium text-heading mt-2 md:mt-0">{`$${
              cartItem?.price * cartItem?.productQuantity
            }`}</h1>
          </Td>
          <Td class="px-6 py-4 whitespace-nowrap text-center ">
            <button
              onClick={() => handleCartDelete(cartItem?._id)}
              class="text-right bg-primary md:bg-transparent p-2 text-white rounded text-2xl md:text-pera hover:text-primary duration-300 transition-all mt-2 md:mt-0"
            >
              <RiDeleteBin6Line />
            </button>
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
};

export default TableBody;
