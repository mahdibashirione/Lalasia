import { Link, useLocation } from "react-router-dom";
import React from "react";

const ProductCard = ({ product }) => {
  
  return (
    <Link
      to={`/product/${product.id}`}
      state={{ product }}
      className="min-w-[220px] max-w-[220px] lg:max-w-[320px] lg:min-w-[320px] text-sm lg:text-base group overflow-hidden flex flex-col gap-1.5 snap-normal"
    >
      <div className="overflow-hidden w-full h-[220px] lg:h-[320px]">
        <img
          className="w-full h-full object-cover duration-700 group-hover:scale-105"
          src={product.image}
          alt={product.tags}
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="lg:text-lg md:text-base">{product.category}</p>
        <div className="flex pr-2">
          {product.colors.map((color, i) => (
            <span
              key={i}
              className={`${color} ${
                color === "bg-white" ? "border-gray-100" : "border-white"
              } block border-2 w-5 lg:w-6 h-5 lg:h-6 rounded-full -mr-2`}
            ></span>
          ))}
        </div>
      </div>
      <span className="font-bold md:text-xl lg:text-2xl">{product.name}</span>
      <p className="line-clamp-1">{product.description}</p>
      <span className="font-bold md:text-xl lg:text-2xl">${product.price}</span>
    </Link>
  );
};

export default ProductCard;
