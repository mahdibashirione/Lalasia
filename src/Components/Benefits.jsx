import React from "react";

const Benefits = () => {
  const options = [
    {
      id: 1,
      title: "Many Choices",
      desc: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      icon: (
        <svg
          className="w-6 h-6 md:w-[30px] md:h-[30px]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 18.5V19.38C12 21.25 11.25 22 9.37 22H4.62C3.17 22 2 20.83 2 19.38V14.63C2 12.75 2.75 12 4.62 12H5.5V15.5C5.5 17.16 6.84 18.5 8.5 18.5H12Z"
            fill="url(#paint0_linear_2_5732)"
          />
          <path
            d="M17 13.5V14.37C17 15.82 15.82 17 14.37 17H9.62C7.75 17 7 16.25 7 14.37V9.62C7 8.17 8.17 7 9.62 7H10.5V10.5C10.5 12.16 11.84 13.5 13.5 13.5H17Z"
            fill="url(#paint1_linear_2_5732)"
          />
          <path
            d="M22 4.62V9.37C22 11.25 21.25 12 19.37 12H14.62C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2H19.37C21.25 2 22 2.75 22 4.62Z"
            fill="url(#paint2_linear_2_5732)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_5732"
              x1="13.5182"
              y1="84.5926"
              x2="-12.1746"
              y2="82.5569"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.25249" stopColor="#59A49E" />
              <stop offset="0.637527" stopColor="#A6D8D2" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2_5732"
              x1="7.2"
              y1="16.8"
              x2="25.2"
              y2="0.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.138287" stopColor="#FFB23F" />
              <stop offset="0.467052" stopColor="#FAD8A5" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2_5732"
              x1="23.5182"
              y1="74.5926"
              x2="-2.17458"
              y2="72.5569"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.25249" stopColor="#59A49E" />
              <stop offset="0.637527" stopColor="#A6D8D2" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Fast and On Time",
      desc: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      icon: (
        <svg
          className="w-6 h-6 md:w-[30px] md:h-[30px]"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.9373 4.45V2.5C20.9373 1.9875 20.5123 1.5625 19.9998 1.5625C19.4873 1.5625 19.0623 1.9875 19.0623 2.5V4.375H10.9373V2.5C10.9373 1.9875 10.5123 1.5625 9.9998 1.5625C9.4873 1.5625 9.0623 1.9875 9.0623 2.5V4.45C5.6873 4.7625 4.0498 6.775 3.7998 9.7625C3.7748 10.125 4.0748 10.425 4.4248 10.425H25.5748C25.9373 10.425 26.2373 10.1125 26.1998 9.7625C25.9498 6.775 24.3123 4.7625 20.9373 4.45Z"
            fill="url(#paint0_linear_2_5436)"
          />
          <path
            d="M23.75 18.75C20.9875 18.75 18.75 20.9875 18.75 23.75C18.75 24.6875 19.0125 25.575 19.475 26.325C20.3375 27.775 21.925 28.75 23.75 28.75C25.575 28.75 27.1625 27.775 28.025 26.325C28.4875 25.575 28.75 24.6875 28.75 23.75C28.75 20.9875 26.5125 18.75 23.75 18.75ZM26.3375 23.2125L23.675 25.675C23.5 25.8375 23.2625 25.925 23.0375 25.925C22.8 25.925 22.5625 25.8375 22.375 25.65L21.1375 24.4125C20.775 24.05 20.775 23.45 21.1375 23.0875C21.5 22.725 22.1 22.725 22.4625 23.0875L23.0625 23.6875L25.0625 21.8375C25.4375 21.4875 26.0375 21.5125 26.3875 21.8875C26.7375 22.2625 26.7125 22.85 26.3375 23.2125Z"
            fill="url(#paint1_linear_2_5436)"
          />
          <path
            d="M25 12.3H5C4.3125 12.3 3.75 12.8625 3.75 13.55V21.25C3.75 25 5.625 27.5 10 27.5H16.1625C17.025 27.5 17.625 26.6625 17.35 25.85C17.1 25.125 16.8875 24.325 16.8875 23.75C16.8875 19.9625 19.975 16.875 23.7625 16.875C24.125 16.875 24.4875 16.9 24.8375 16.9625C25.5875 17.075 26.2625 16.4875 26.2625 15.7375V13.5625C26.25 12.8625 25.6875 12.3 25 12.3ZM11.5125 22.7625C11.275 22.9875 10.95 23.125 10.625 23.125C10.3 23.125 9.975 22.9875 9.7375 22.7625C9.5125 22.525 9.375 22.2 9.375 21.875C9.375 21.55 9.5125 21.225 9.7375 20.9875C9.8625 20.875 9.9875 20.7875 10.15 20.725C10.6125 20.525 11.1625 20.6375 11.5125 20.9875C11.7375 21.225 11.875 21.55 11.875 21.875C11.875 22.2 11.7375 22.525 11.5125 22.7625ZM11.5125 18.3875C11.45 18.4375 11.3875 18.4875 11.325 18.5375C11.25 18.5875 11.175 18.625 11.1 18.65C11.025 18.6875 10.95 18.7125 10.875 18.725C10.7875 18.7375 10.7 18.75 10.625 18.75C10.3 18.75 9.975 18.6125 9.7375 18.3875C9.5125 18.15 9.375 17.825 9.375 17.5C9.375 17.175 9.5125 16.85 9.7375 16.6125C10.025 16.325 10.4625 16.1875 10.875 16.275C10.95 16.2875 11.025 16.3125 11.1 16.35C11.175 16.375 11.25 16.4125 11.325 16.4625C11.3875 16.5125 11.45 16.5625 11.5125 16.6125C11.7375 16.85 11.875 17.175 11.875 17.5C11.875 17.825 11.7375 18.15 11.5125 18.3875ZM15.8875 18.3875C15.65 18.6125 15.325 18.75 15 18.75C14.675 18.75 14.35 18.6125 14.1125 18.3875C13.8875 18.15 13.75 17.825 13.75 17.5C13.75 17.175 13.8875 16.85 14.1125 16.6125C14.5875 16.15 15.425 16.15 15.8875 16.6125C16.1125 16.85 16.25 17.175 16.25 17.5C16.25 17.825 16.1125 18.15 15.8875 18.3875Z"
            fill="url(#paint2_linear_2_5436)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_5436"
              x1="29.6043"
              y1="65.8977"
              x2="-26.0864"
              y2="54.743"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.25249" stopColor="#59A49E" />
              <stop offset="0.637527" stopColor="#A6D8D2" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2_5436"
              x1="30.2682"
              y1="91.3426"
              x2="4.57542"
              y2="89.3069"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.25249" stopColor="#59A49E" />
              <stop offset="0.637527" stopColor="#A6D8D2" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2_5436"
              x1="4.20025"
              y1="27.196"
              x2="30.4895"
              y2="-8.27959"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.138287" stopColor="#FFB23F" />
              <stop offset="0.467052" stopColor="#FAD8A5" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Many Choices",
      desc: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      icon: (
        <svg
          className="w-6 h-6 md:w-[30px] md:h-[30px]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 18.5V19.38C12 21.25 11.25 22 9.37 22H4.62C3.17 22 2 20.83 2 19.38V14.63C2 12.75 2.75 12 4.62 12H5.5V15.5C5.5 17.16 6.84 18.5 8.5 18.5H12Z"
            fill="url(#paint0_linear_2_5732)"
          />
          <path
            d="M17 13.5V14.37C17 15.82 15.82 17 14.37 17H9.62C7.75 17 7 16.25 7 14.37V9.62C7 8.17 8.17 7 9.62 7H10.5V10.5C10.5 12.16 11.84 13.5 13.5 13.5H17Z"
            fill="url(#paint1_linear_2_5732)"
          />
          <path
            d="M22 4.62V9.37C22 11.25 21.25 12 19.37 12H14.62C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2H19.37C21.25 2 22 2.75 22 4.62Z"
            fill="url(#paint2_linear_2_5732)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_5732"
              x1="13.5182"
              y1="84.5926"
              x2="-12.1746"
              y2="82.5569"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.25249" stopColor="#59A49E" />
              <stop offset="0.637527" stopColor="#A6D8D2" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2_5732"
              x1="7.2"
              y1="16.8"
              x2="25.2"
              y2="0.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.138287" stopColor="#FFB23F" />
              <stop offset="0.467052" stopColor="#FAD8A5" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2_5732"
              x1="23.5182"
              y1="74.5926"
              x2="-2.17458"
              y2="72.5569"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.25249" stopColor="#59A49E" />
              <stop offset="0.637527" stopColor="#A6D8D2" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section className="my-[100px] container px-4">
      {/* description */}
      <article className="flex flex-col md:flex-row gap-4 md:justify-between md:items-end mb-8 md:mb-12">
        <div>
          <span className="text-sm md:text-base text-badge">Benefits</span>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-[44px] lg:leading-[50px] md:mt-4">
            Benefits when using <br /> our services
          </h2>
        </div>
        <p className="max-w-[325px] md:max-w-[400px] md:leading-7 text-sm md:text-base leading-6">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </article>
      {/* items */}
      <article className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-4 lg:gap-x-6">
        {options.map((item) => {
          return (
            <div
              key={item.id}
              className="shadow-main rounded col-span-1 p-4 duration-500 md:hover:-translate-y-4"
            >
              <div className="w-[44px] h-[44px] md:w-[62px] md:h-[62px] rounded-full bg-[#F9F9F9] flex items-center justify-center">
                {item.icon}
              </div>
              <span className="font-bold block my-2 lg:my-4 md:text-lg lg:text-2xl">
                {item.title}
              </span>
              <p className="text-sm md:text-base leading-6 md:leading-7 text-justify">
                {item.desc}
              </p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Benefits;
