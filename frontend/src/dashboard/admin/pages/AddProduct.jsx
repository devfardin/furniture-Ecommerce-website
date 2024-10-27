import React from "react";

const AddProduct = () => {
  return (
    <form className="grid grid-cols-8">
      <div className="col-span-5 rounded-md bg-white shadow-md p-5">
        <h1 className="text-xl font-medium text-heading border-b border-dashBorder pb-2">
          Create Product
        </h1>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2.5">
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
              className="py-3 px-4 border border-dashPrimary hover:border-primary outline-none w-full rounded-md text-lg font-normal"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
