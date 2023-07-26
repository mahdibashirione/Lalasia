import React, { useEffect, useRef, useState } from "react";
import Layout from "../Layout/Layout";
import ButtonContain from "../Components/Common/ButtonContain";
import ProductCard from "../Components/ProductCard";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../feature/cart/cartSlice";
import useToast from "../Hooks/useToast";
import separate from "../utils/utils";

const SingleProduct = () => {
  const { state } = useLocation();
  const slider = useRef();
  const [isMoreDetail, setIsMoreDetail] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const products = [
    {
      id: 1,
      colors: [
        "bg-red-400",
        "bg-green-400",
        "bg-blue-400",
        "bg-yellow-400",
        "bg-white",
      ],
      image: "/images/product.png",
      category: "Chair",
      name: "White Aesthetic Chair",
      description: "Combination of wood and wool",
      price: "6347",
      tags: "chair",
      detail:
        "Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...",
    },
    {
      id: 2,
      colors: ["bg-zinc-900", "bg-white"],
      image: "/images/product2.png",
      category: "Lamp",
      name: "Bardono Smart Lamp",
      description: "Easy to use with bluetooth connection",
      price: "6223",
      tags: "lamp",
      detail:
        "Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...",
    },
    {
      id: 3,
      colors: ["bg-gray-300", "bg-blue-400", "bg-lime-400"],
      image: "/images/product3.png",
      category: "Sofa",
      name: "Sofa Empuk Banget",
      description: "Using kapuk randu material",
      price: "5839",
      tags: "sofa",
      detail:
        "Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...",
    },
    {
      id: 4,
      colors: ["bg-amber-700"],
      image: "/images/product4.png",
      category: "Living Room",
      name: "Wooden Bookshelf",
      description: "Combination of wood and wool",
      price: "7988",
      tags: "living-room",
      detail:
        "Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...",
    },
    {
      id: 5,
      colors: ["bg-gray-300", "bg-white"],
      image: "/images/product5.png",
      category: "Decoration",
      name: "Plant With Clay Stand",
      description: "Combination of wood and wool",
      price: "6149",
      tags: "decoration",
      detail:
        "Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...",
    },
    {
      id: 6,
      colors: ["bg-amber-800"],
      image: "/images/product6.png",
      category: "Decoration",
      name: "Oval Gold Mirror",
      description: "Combination of wood and wool",
      price: "3243",
      tags: "decoration",
      detail:
        "Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...",
    },
  ];
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { successToast, errorToast } = useToast();
  const product = state.product;

  useEffect(() => {
    let inCart = cart.findIndex((product) => product.id === state.product.id);
    setIsInCart(inCart >= 0 ? true : false);
  }, [cart]);
  useEffect(() => {
    let inCart = cart.findIndex((product) => product.id === state.product.id);
    setIsInCart(inCart >= 0 ? true : false);
    window.scrollTo({ top: 0 });
  }, [state]);

  function handleScroll(position) {
    const withWindow = window.innerWidth;
    switch (position) {
      case "left": {
        withWindow >= 1024
          ? (slider.current.scrollLeft -= 336)
          : (slider.current.scrollLeft -= 236);
        break;
      }
      case "right": {
        withWindow >= 1024
          ? (slider.current.scrollLeft += 336)
          : (slider.current.scrollLeft += 236);
        break;
      }
    }
  }

  return (
    <>
      <section className="container p-4 flex flex-col md:flex-row gap-4 md:gap-0 lg:gap-6 mb-[50px]">
        {/* image product */}
        <article className="w-full flex lg:max-w-[450px] justify-center md:justify-start">
          <div className="max-w-[325px] max-h-[325px] lg:max-w-none lg:max-h-none lg:w-[450px] lg:h-[450px] h-full w-full overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-105 duration-700"
              src={product.image}
              alt=""
            />
          </div>
        </article>
        {/* detail product */}
        <article className="w-full flex justify-center md:justify-start">
          <div className="max-w-[325px] lg:max-w-[400px] w-full leading-6 md:leading-7 flex flex-col gap-3 xl:gap-4">
            {/* name */}
            <h2 className="font-bold text-2xl md:text-3xl">{product.name}</h2>
            <p className="text-sm md:text-base">{product.description}</p>
            {/* Colors */}
            <div>
              <span className="font-bold text-lg md:text-xl mb-1">Color</span>
              <div className="flex">
                {product.colors.map((color, i) => {
                  return (
                    <div key={i} className={`${color} w-8 h-8 block`}></div>
                  );
                })}
              </div>
            </div>
            {/* detail */}
            <div className="text-sm md:text-base relative">
              <p
                className={`${
                  isMoreDetail === false ? "line-clamp-2" : "line-clamp-none"
                }`}
              >
                {product.detail}
                <button
                  className="text-main ml-2"
                  onClick={(e) => setIsMoreDetail(!isMoreDetail)}
                >
                  Close More
                </button>
              </p>
              <button
                className={`text-main absolute bg-white right-0 pl-3 bottom-0  ${
                  isMoreDetail && "hidden"
                }`}
                onClick={(e) => setIsMoreDetail(!isMoreDetail)}
              >
                ... Read More
              </button>
            </div>
            {/* price */}
            <span className="font-bold text-2xl md:text-3xl">
              ${separate(product.price)}
            </span>
            {/* actions */}
            {isInCart <= 0 ? (
              <div className="flex gap-4">
                <ButtonContain
                  onClick={(e) => {
                    dispatch(addToCart(product));
                    successToast("added product to cart");
                  }}
                  className="py-2 text-bold flex-1"
                  title="Buy Now"
                />
                <button className="flex-1 border border-main rounded text-main active:scale-95 duration-200 hover:bg-green-950/10">
                  Add To Chart
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <Link
                  to="/cart"
                  className="w-full px-6 py-3 text-sm md:text-base text-center block border border-main text-main rounded duration-200 hover:bg-green-50"
                >
                  Go to cart
                </Link>
              </div>
            )}
          </div>
        </article>
      </section>
      {/* more product list */}
      <section className="container relative py-4 mb-[100px]">
        <h2 className="font-bold text-2xl md:text-3xl mb-4 ml-4">
          Our Products
        </h2>
        <div
          ref={slider}
          className="w-full scroll-smooth flex gap-4 overflow-x-scroll scrollbar-none snap-x px-4"
        >
          {products
            .filter((product) => product.id !== state.product.id)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        {/* right */}
        <button
          onClick={(e) => handleScroll("left")}
          className="rotate-180 w-12 h-12 rounded-full bg-[#151411]/60 backdrop-blur-lg md:flex hidden items-center justify-center active:scale-95 duration-200 absolute top-1/2 left-2 -translate-y-1/2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.08"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* left */}
        <button
          onClick={(e) => handleScroll("right")}
          className="w-12 h-12 rounded-full bg-[#151411]/60 backdrop-blur-lg md:flex hidden items-center justify-center active:scale-95 duration-200 absolute top-1/2 right-2 -translate-y-1/2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.08"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>
    </>
  );
};

export default SingleProduct;
