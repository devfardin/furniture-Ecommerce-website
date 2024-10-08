import React, { useState } from "react";
import PageHeader from "../../components/shared/PageHeader";
import Container from "../../components/shared/Container";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import SingleUserInfo from "../../components/shared/SingleUserInfo";
import { GoGift } from "react-icons/go";
import { TbTruckReturn } from "react-icons/tb";
import ProductDetailTab from "./ProductDetailTab";
import { Helmet } from "react-helmet";
const ShopSingle = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  console.log(productQuantity);
  return (
    <div>
      <Helmet>
        <title>Furnito | Odrex Double Bed</title>
      </Helmet>
      <PageHeader page="Odrex Double Bed" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 mt-20 gap-12">
          <div className="col-span-4">
            <img
              src="https://furniture.nazmart.net/assets/tenant/uploads/media-uploader/furniture/frame-346211672748268.png"
              alt="Product Image"
            />
          </div>
          <div className="col-span-4">
            <h1 className="text-3xl font-medium text-heading mb-2">
              Odrex Double Bed
            </h1>
            <span className="bg-[#5AB27E] px-2 py-0.5 text-sm font-normal text-white">
              New Arival
            </span>

            {/* Product status */}
            <div className="w-32 my-4 flex justify-between items-center">
              <span className="text-base font-medium text-pera">Status: </span>
              <span className="text-base font-semibold text-[#198754]">
                In Stock
              </span>
            </div>
            {/* Product Price */}
            <div className="w-36 mt-4 flex justify-between items-center">
              <span className="text-xl font-medium text-pera">$7,500</span>
              <span className="text-xl font-medium text-[#888888] line-through">
                $8000
              </span>
            </div>
            {/* Product Short Description */}
            <p className="text-pera text-base font-normal my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              molestiae accusamus consequuntur laboriosam unde sequi, Lorem
              ipsum dolor sit amet.
            </p>
            {/* Product quantity manage */}
            <div className="flex items-center  gap-6">
              <h1 className="text-base font-medium text-pera">Quantity:</h1>
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
                  onClick={() => setProductQuantity(productQuantity + 1)}
                  className="p-3 bg-[#F1F1F1] outline-none"
                >
                  <FiPlus className="text-2xl" />
                </button>
              </div>
              <h1 className="text-base font-medium text-[#198754]">
                Only! 97 Item Left
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
                <span className="text-base font-normal text-pera">SKU: </span>
                <span className="text-base font-normal text-[#198754]">
                  ELWDNT001
                </span>
              </div>

              <div className=" flex items-center gap-3">
                <span className="text-base font-normal text-pera">
                  Category:{" "}
                </span>
                <span className="text-base font-normal text-[#198754]">
                  Glass Furniture
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
        <div className="mt-14">
          <ProductDetailTab />
        </div>
      </Container>
    </div>
  );
};

export default ShopSingle;
