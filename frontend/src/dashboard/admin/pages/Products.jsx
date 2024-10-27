import React from "react";
import useAllProducts from "../../../hooks/useAllProducts";

const Products = () => {
  const [productRefetch, isLoading, products]= useAllProducts()
  return (
    // <div class=" bg-white rounded-md py-5 px-5  ">
      <div class="p-4 bg-white rounded-lg shadow-lg">
        {/* <!-- Search and Actions Section --> */}
        <div class="flex flex-col-reverse gap-4 sm:flex-row justify-between mb-6">
          <input
            type="text"
            placeholder="Search products..."
            class="w-full sm:w-1/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Add New Product
          </button>
        </div>

        {/* <!-- Table Wrapper for Overflow Handling --> */}
        <div class="overflow-x-auto">
          {/* <!-- Product Table --> */}
          <table class="min-w-full bg-white border border-gray-200 overflow-x-scroll">
            {/* <!-- Table Header for Columns --> */}
            <thead>
              <tr class="bg-gray-100 text-gray-600  text-base">
                <th class="py-3 px-4 text-left cursor-pointer">Product</th>
                <th class="py-3 px-4 text-left cursor-pointer">Category</th>
                <th class="py-3 px-4 text-right cursor-pointer">Price</th>
                <th class="py-3 px-4 text-right cursor-pointer">Stock</th>
                <th class="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>

            {/* <!-- Table Body with Product Rows --> */}
            <tbody class="text-gray-700 text-base ">
              {/* <!-- Example Row (Repeat for each product) --> */}
              <tr class="border-b border-gray-200 hover:bg-gray-50">
                <td class="py-3 px-4">Elegant Wooden Dining Table</td>
                <td class="py-3 px-4">Glass Furniture</td>
                <td class="py-3 px-4 text-right">$399.99</td>
                <td class="py-3 px-4 text-right">100</td>
                <td class="py-3 px-4 text-center">
                  <button class="text-blue-500 hover:text-blue-700">
                    Edit
                  </button>
                  <button class="text-red-500 hover:text-red-700 ml-3">
                    Delete
                  </button>
                </td>
              </tr>
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
