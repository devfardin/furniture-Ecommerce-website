import React, { useState } from "react";
import useAllProducts from "../../../hooks/useAllProducts";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Loader from "../../../components/shared/Loader";

const Products = () => {
  const [searchResult, setSearchResult] = useState("");
  const [productRefetch, isLoading, products] = useAllProducts();
  const handleSearch = (e) => {
    setSearchResult(e.target.value.toLowerCase());
  };
  const productFilter = products?.filter((item) => {
    const matchesSearch =
      searchResult === "" || item.name.toLowerCase().includes(searchResult);
    return matchesSearch;
  });
  console.log(productFilter);
  if(isLoading) return <Loader/>
  return (
    <div class="p-5 bg-white rounded-lg shadow-md">
      {/* <!-- Search and Actions Section --> */}
      <div class="flex flex-col-reverse gap-4 sm:flex-row justify-between mb-6">
        <div className="flex-1 relative">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search products..."
            class="w-full  sm:w-1/2 md:w-1/3 py-3 px-8 border rounded border-primary focus:border-dashPrimary focus:ring-0 focus:outline-none"
          />
          <div>
            <CiSearch className="text-2xl text-pera absolute top-3 left-2" />
          </div>
        </div>
        {/* <div> */}
        <Link
          to="/dashboard/add-product"
          class="bg-dashPrimary hover:bg-primary text-white px-4 py-3 rounded-md transition duration-300 text-lg font-normal"
        >
          Add New Product
        </Link>
        {/* </div> */}
      </div>

      {/* <!-- Table Wrapper for Overflow Handling --> */}
      <div class="overflow-x-auto w-full">
        {/* <!-- Product Table --> */}
        <table class="min-w-full bg-white border border-[#F1F1F1] ">
          {/* <!-- Table Header for Columns --> */}
          <thead>
            <tr class="bg-[#F1F1F1] text-pera font-medium text-base">
              <th class="py-3 px-4 text-left cursor-pointer">Product</th>
              <th class="py-3 px-4 text-left cursor-pointer">Category</th>
              <th class="py-3 px-4 text-center cursor-pointer">Price</th>
              <th class="py-3 px-4 text-right cursor-pointer">Discound</th>
              <th class="py-3 px-4 text-right cursor-pointer">Stock</th>
              <th class="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          {/* <!-- Table Body with Product Rows --> */}
          <tbody class="text-gray-700 text-base ">
            {/* <!-- Example Row (Repeat for each product) --> */}
            {productFilter.map((product) => (
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="py-3 px-4">
                  <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 items-start lg:items-center">
                    <img
                      className="w-20 h-20 rounded-md"
                      src={product?.featureImg}
                      alt=""
                    />
                    <Link className="hover:text-primary transition duration-300" to={`/product/${product?._id}`}>{product?.name}</Link>
                  </div>
                </td>
                <td class="py-3 px-4">{product?.category}</td>
                <td class="py-3 px-4 text-right">
                  ${product?.price.toFixed(2)}
                </td>
                <td class="py-3 px-4 text-right">
                  ${product?.discount.toFixed(2)}
                </td>
                <td class="py-3 px-4 text-right">{product?.stock}</td>
                <td class="py-3 px-4 text-center">
                  <button class="text-blue-500 hover:text-blue-700">
                    Edit
                  </button>
                  <button class="text-red-500 hover:text-red-700 ml-3">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* <!-- End Example Row --> */}
          </tbody>
        </table>
      </div>

      {/* <!-- Pagination Section for Page Navigation --> */}
      <div class="flex justify-between items-center mt-4">
        <div class="text-gray-500">Showing 1 to 10 of 50 entries</div>
        <div class="flex items-center space-x-2">
          <button class="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
            Previous
          </button>
          <button class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            1
          </button>
          <button class="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
            2
          </button>
          <button class="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
            3
          </button>
          <button class="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
