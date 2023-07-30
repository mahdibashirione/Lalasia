import React, { useRef } from "react";
import ProductCard from "./ProductCard";

const OurPopularProduct = () => {
  const slider = useRef();
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
      price: 63.47,
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
      price: 62.23,
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
      price: 58.39,
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
      price: 79.88,
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
      price: 61.49,
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
      price: 32.43,
      tags: "decoration",
      detail:
        "Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...",
    },
  ];

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
    <section className="w-full mb-[100px] container">
      {/* description */}
      <article className="flex flex-col gap-4 md:gap-5 lg:gap-6 items-center mb-4 px-4">
        <div className="text-center">
          <span className="text-sm md:text-base text-badge">Product</span>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-[44px] lg:leading-[50px]">
            Our popular product
          </h2>
        </div>
        <p className="max-w-[325px] md:max-w-[650px] md:leading-7 text-sm md:text-base leading-6 text-center">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </article>
      {/* Products List */}
      <article className="relative py-4">
        <div
          ref={slider}
          className="w-full scroll-smooth flex gap-4 overflow-x-scroll scrollbar-none px-4"
        >
          {products.map((product) => (
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
      </article>
    </section>
  );
};

export default OurPopularProduct;
