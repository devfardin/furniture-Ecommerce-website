import { Dialog, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { Fragment, useState } from "react";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GoGift } from "react-icons/go";
import { IoCloseOutline, IoHeartOutline } from "react-icons/io5";
import { TbTruckReturn } from "react-icons/tb";
import { axiosPublic } from "../hooks/useAxiosPublic";
import Loader from "./shared/Loader";
import SingleUserInfo from "./shared/SingleUserInfo";

const QuickShowProduct = ({ isOpen, setIsOpen, id }) => {
  function closeModal() {
    setIsOpen(false);
  }
  const [productQuantity, setProductQuantity] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/product/${id}`);
      return data;
    },
  });
  const isStack = data?.stock > 0;
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-1"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-75 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full max-w-6xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all`}
                >
                  {/* clone Icon */}
                  <button className="absolute right-5" onClick={closeModal}>
                    <IoCloseOutline className="text-3xl text-primary"></IoCloseOutline>
                  </button>
                  {/* Modal Body */}

                  {isLoading ? (
                    <Loader />
                  ) : isError ? (
                    <h1 className="flex justify-center h-screen items-center text-xl font-medium text-neutral-400">
                      Failed to fetch data from the database. Please try again
                      later.
                    </h1>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 gap-12">
                      <div className="col-span-4">
                        <img src={data?.featureImg} alt="Product Image" />
                      </div>
                      <div className="col-span-4">
                        <h1 className="text-3xl font-medium text-heading mb-2">
                          {data?.name}
                        </h1>
                        <span className="bg-[#5AB27E] px-2 py-0.5 text-sm font-normal text-white">
                          New Arival
                        </span>

                        {/* Product status */}
                        <div className="w-32 my-4 flex justify-between items-center">
                          <span className="text-base font-medium text-pera">
                            Status:
                          </span>
                          <span className="text-base font-semibold text-[#198754]">
                            {isStack ? "In Stock " : "Stock Out"}
                          </span>
                        </div>
                        {/* Product Price */}
                        <div className="w-28 mt-4 flex justify-between items-center">
                          <span className="text-xl font-medium text-pera">
                            {data?.price}
                          </span>
                          <span className="text-xl font-medium text-[#888888] line-through">
                            {data?.discount > 0 && data?.discount}
                          </span>
                        </div>
                        {/* Product Short Description */}
                        <p className="text-pera text-base font-normal my-5">
                          {data?.description}
                        </p>
                        {/* Product quantity manage */}
                        <div className="flex items-center  gap-6">
                          <h1 className="text-base font-medium text-pera">
                            Quantity:
                          </h1>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() =>
                                productQuantity > 1
                                  ? setProductQuantity(productQuantity - 1)
                                  : ""
                              }
                              className="p-3 bg-[#F1F1F1] outline-none"
                            >
                              <FiMinus className="text-2xl" />
                            </button>
                            <input
                              type="number"
                              value={productQuantity}
                              className="bg-[#F1F1F1] p-2.5 w-[60px] outline-none text-center text-lg font-normal"
                            />
                            <button
                              onClick={() =>
                                setProductQuantity(productQuantity + 1)
                              }
                              className="p-3 bg-[#F1F1F1] outline-none"
                            >
                              <FiPlus className="text-2xl" />
                            </button>
                          </div>
                          <h1 className="text-base font-medium text-[#198754]">
                            Only! {data?.stock} Item Left
                          </h1>
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-row gap-5 mt-6">
                          <button className="bg-[#333333] py-3.5 px-16 font-medium text-base text-white">
                            Add to Cart
                          </button>
                          <button className="bg-[#DDDDDD] py-3.5 px-16 font-medium text-base text-heading">
                            Buy Now
                          </button>
                        </div>
                        {/* Product Feature  */}
                        <ul className="flex  items-center gap-x-2 px-2 mt-7">
                          <li className="p-2 group-scoped  rounded-md group bg-primary transition-all duration-300">
                            <IoHeartOutline className="text-xl text-white transition-all duration-300 cursor-pointer" />
                          </li>
                          <li className="p-2 group-scoped  rounded-md group bg-primary transition-all duration-300 cursor-pointer">
                            <AiOutlineRetweet className="text-xl text-white transition-all duration-300" />
                          </li>
                        </ul>

                        {/* Product Info */}
                        <div className="flex justify-center gap-2 mt-8 flex-col">
                          <div className="flex items-center gap-3">
                            <span className="text-base font-normal text-pera">
                              SKU:{" "}
                            </span>
                            <span className="text-base font-normal text-[#198754]">
                              {data?.sku}
                            </span>
                          </div>

                          <div className=" flex items-center gap-3">
                            <span className="text-base font-normal text-pera">
                              Category:
                            </span>
                            <span className="text-base font-normal text-[#198754]">
                              {data?.category}
                            </span>
                          </div>
                        </div>
                        {/* Line divider */}
                        <div className="border-b border-neutral-300 w-full my-5"></div>
                        {/* User Info */}
                        <div className="mt-10 flex gap-6">
                          <SingleUserInfo
                            Icon={GoGift}
                            title="Free Shipping"
                            subTitle="Order over 100$"
                          />

                          <SingleUserInfo
                            Icon={TbTruckReturn}
                            title="7 Days Return"
                            subTitle="Without any damage"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default QuickShowProduct;
