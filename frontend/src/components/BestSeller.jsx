import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopeContext";
import Titel from "./Titel";
import ProductList from "./ProductList";

export default function BestSeller() {
  const { products } = useContext(ShopContext);

  console.log(products, "products data");

  const [bestSeller, setIsBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);

    console.log(bestProduct, "best product");
    setIsBestSeller(bestProduct.slice());
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Titel text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item) => (
          <ProductList
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
