import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopeContext";
import Titel from "../components/Titel";
import ProductList from "../components/ProductList";

export default function Collection() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prv) => prv.filter((item) => item !== e.target.value));
    } else {
      setCategory((prv) => [...prv, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prv) => prv.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prv) => [...prv, e.target.value]);
    }
  };

  const applyFilters = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [category, subCategory]);

  const [filterProducts, setFilterProducts] = useState([]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter options */}

      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
        </p>

        {/* category filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="font-medium mb-3 text-sm">CATEGORIES</p>
          <div className="font-light text-gray-700 flex flex-col gap-2 text-sm">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>

        {/* sub category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="font-medium mb-3 text-sm">TYPE</p>
          <div className="font-light text-gray-700 flex flex-col gap-2 text-sm">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side  */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Titel text1={"ALL"} text2={"COLLECTIONS"} />
          {/* product sort  */}
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>

        {/* map products  */}

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item) => (
            <ProductList
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
