import React from "react";
import SearchBar from "./SearchBar";

const Landing = () => {
  return (
    <section className="container px-4">
      <div className="pt-8 md:pt-12">
        <h2 className="text-center font-bold text-[26px] md:text-[38px] lg:text-[64px] relative w-fit mx-auto">
          Discover Furniture With <br /> High Quality Wood
          <svg
            className="w-[88px] h-[110px] md:w-[300px] md:h-[300px] absolute -left-10 md:-left-40 md:top-2 lg:-left-56 lg:-top-2 xl:-left-72 lg:w-[450px] lg:h-[450px] top-0"
            viewBox="0 0 88 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.8803 82.129C39.5806 81.841 43.2078 81.3743 45.7895 80.6396M45.7895 80.6396C46.0869 80.5551 44.8208 78.6097 44.7548 78.5249C43.31 76.6645 41.666 75.0502 39.9552 73.4409M45.7895 80.6396C31.1299 78.9458 20.5495 68.4261 20.3087 57.9081C20.2848 56.8656 20.2599 55.731 20.3361 54.599M20.3361 54.599C20.4575 52.7963 20.8352 51.0005 21.8817 49.5947C22.8475 48.2973 24.6522 47.014 26.3311 47.2267C29.4672 47.6242 30.3714 51.7183 28.2418 53.8972C26.3705 55.8121 22.4414 56.2064 20.3361 54.599ZM20.3361 54.599C20.2917 54.5651 20.2481 54.5303 20.2054 54.4946C9.88725 45.88 15.8163 31.2305 25.4968 26.008"
              stroke="#A6D8D2"
              strokeWidth="1.6749"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h2>
        <p className="text-sm max-w-[450px] lg:max-w-[796px] text-center mx-auto lg:text-lg md:mt-8 mt-4">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non. Purus parturient viverra nunc,
          tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.
        </p>
      </div>
      <div className="relative md:mt-20">
        <SearchBar />
        <img className="mx-auto" src="/images/landing.svg" />
      </div>
    </section>
  );
};

export default Landing;
