import React from "react";
import ButtonContain from "./Common/ButtonContain";

const OurProduct = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-rows-[120px,170px,200px] lg:grid-rows-[150px,170px,260px] md:grid-cols-2 gap-4 mb-[100px] container px-4">
      <div className="grid-cols-1 md:row-span-1">
        <span className="text-sm md:text-base text-badge">Our Product</span>
        <h2 className="font-bold text-2xl md:text-3xl lg:text-[38px] xl:text-[44px] lg:leading-[50px] md:mt-4 whitespace-nowrap">
          Crafted by talented and <br /> high quality materials
        </h2>
      </div>
      <ul className="grid-cols-1 md:row-span-1 flex">
        <li className="flex flex-1 flex-col justify-end gap-2">
          <span className="font-bold text-2xl md:text-4xl lg:text-[44px] lg:leading-[50px]">
            20+
          </span>
          <p className="text-[12px] md:text-base lg:text-lg">
            Years Experience
          </p>
        </li>
        <li className="flex flex-1 flex-col justify-end gap-2">
          <span className="font-bold text-2xl md:text-4xl lg:text-[44px] lg:leading-[50px]">
            483
          </span>
          <p className="text-[12px] md:text-base lg:text-lg">Happy Client</p>
        </li>
        <li className="flex flex-1 flex-col justify-end gap-2">
          <span className="font-bold text-2xl md:text-4xl lg:text-[44px] lg:leading-[50px]">
            150+
          </span>
          <p className="text-[12px] md:text-base lg:text-lg">
            Project Finished
          </p>
        </li>
      </ul>
      <div className="grid-cols-1 md:row-span-1">
        <p className="text-sm leading-6 lg:leading-7 max-w-[580px] lg:text-base">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient. morbi
          fermentum, vivamus et accumsan dui tincidunt pulvinar
        </p>
        <ButtonContain
          title="Learn More"
          className="w-full md:px-10 md:w-auto mt-4 md:mt-6 lg:mt-8"
        />
      </div>
      <div className="grid-cols-1 md:row-span-2 overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-105 duration-1000"
          src="/images/ourproduct1.png"
          alt=""
        />
      </div>
      <div className="grid-cols-1 md:row-span-1 overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-105 duration-1000"
          src="/images/ourproduct2.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default OurProduct;
