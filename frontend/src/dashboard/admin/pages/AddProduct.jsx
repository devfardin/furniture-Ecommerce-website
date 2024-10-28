import React, { useState } from "react";
import TextEditor from "../../../components/TextEditor";

const AddProduct = () => {
  const [textValue, setTextValue] = useState("")
  return (
    <form className="grid grid-cols-8">
      <div className="col-span-5 rounded-md bg-white shadow-md p-5">
        <h1 className="text-xl font-medium text-heading border-b border-dashBorder pb-2">
          Create Product
        </h1>

        <div className="mt-4 flex flex-col gap-5">
          {/* Product Title */}
          <div className="flex flex-col gap-2">
            <label
              className="text-lg font-semibold text-pera"
              htmlFor="Product-title"
            >
              Product Title
            </label>
            <input
              type="text"
              name="productName"
              id="Product-title"
              placeholder="Enter Product Title"
              className="py-3 px-4 border border-[#B1B5C3] hover:border-dashPrimary focus:border-dashPrimary outline-none w-full rounded-md text-lg font-normal"
            />
          </div>
        {/* Product Description */}
          <div className="flex flex-col gap-2">
            <label
              className="text-lg font-semibold text-pera"
              htmlFor="Product-description"
            >
              Product Short Description
            </label>
            <textarea
            rows='3'
              type="text"
              name="productDescription"
              id="Product-description"
              placeholder="Enter Short Product Description"
              className="py-3 px-4 border border-[#B1B5C3] hover:border-dashPrimary focus:border-dashPrimary outline-none w-full rounded-md text-lg font-normal"
            />
          </div>

          {/* Product Price and Discount */}
          <div className="flex items-center justify-between gap-5">
            {/* Product Price */}
          <div className="flex flex-col flex-1 gap-2">
            <label
              className="text-lg font-semibold text-pera"
              htmlFor="Product-price"
            >
             Product Price
            </label>
            <input
              type="number"
              name="productPrice"
              id="Product-price"
              placeholder="Enter Product Price"
              className="py-3 px-4 border border-[#B1B5C3] hover:border-dashPrimary focus:border-dashPrimary outline-none w-full rounded-md text-lg font-normal"
            />
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <label
              className="text-lg font-semibold text-pera"
              htmlFor="Product-discount"
            >
              Discount
            </label>
            <input
              type="number"
              name="productName"
              id="Product-discount"
              placeholder="Enter Product Discount"
              className="py-3 px-4 border border-[#B1B5C3] hover:border-dashPrimary focus:border-dashPrimary outline-none w-full rounded-md text-lg font-normal"
            />
          </div>
          </div>

          {/* Product Stock and SKU Number */}
          <div className="flex items-center justify-between gap-5">
            {/* Product Price */}
          <div className="flex flex-col flex-1 gap-2">
            <label
              className="text-lg font-semibold text-pera"
              htmlFor="Product-stocks"
            >
             Product In Stocks
            </label>
            <input
              type="number"
              name="productStocks"
              id="Product-stocks"
              placeholder="Enter Product Stocks"
              className="py-3 px-4 border border-[#B1B5C3] hover:border-dashPrimary focus:border-dashPrimary outline-none w-full rounded-md text-lg font-normal"
            />
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <label
              className="text-lg font-semibold text-pera"
              htmlFor="Product-sku"
            >
             Product Sku 
            </label>
            <input
              type="number"
              name="productSku"
              id="Product-sku"
              placeholder="Enter Product Sku"
              className="py-3 px-4 border border-[#B1B5C3] hover:border-dashPrimary focus:border-dashPrimary outline-none w-full rounded-md text-lg font-normal"
            />
          </div>
          </div>
          {/* Product description text editor */}
          <TextEditor textValue={textValue} setTextValue={setTextValue}/>


        </div>
      </div>
    </form>
  );
};

export default AddProduct;
