import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div className="flex flex-col gap-4 rounded shadow-main min-w-[325px] max-w-[350px] md:max-w-[400px] md:min-w-[400px] lg:max-w-[450px] lg:min-w-[450px] p-4 md:hover:scale-[1.02] duration-500">
      <svg
        className="w-8 h-8 lg:w-10 lg:h-10"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.483 19.3831H5.66634C5.79967 11.5998 7.33301 10.3165 12.1163 7.48312C12.6663 7.14979 12.8497 6.44979 12.5163 5.88312C12.1997 5.33312 11.483 5.14979 10.933 5.48312C5.29967 8.81646 3.33301 10.8498 3.33301 20.5331V29.5165C3.33301 32.3665 5.64967 34.6665 8.48301 34.6665H13.483C16.4163 34.6665 18.633 32.4498 18.633 29.5165V24.5165C18.633 21.5998 16.4163 19.3831 13.483 19.3831Z"
          fill="url(#paint0_linear_2_5543)"
        />
        <path
          d="M31.5163 19.3831H23.6996C23.8329 11.5998 25.3663 10.3165 30.1496 7.48312C30.6996 7.14979 30.8829 6.44979 30.5496 5.88312C30.2163 5.33312 29.5163 5.14979 28.9496 5.48312C23.3163 8.81646 21.3496 10.8498 21.3496 20.5498V29.5331C21.3496 32.3831 23.6663 34.6831 26.4996 34.6831H31.4996C34.4329 34.6831 36.6496 32.4665 36.6496 29.5331V24.5331C36.6663 21.5998 34.4496 19.3831 31.5163 19.3831Z"
          fill="url(#paint1_linear_2_5543)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_5543"
            x1="20.9558"
            y1="218.376"
            x2="-18.5335"
            y2="216.745"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.25249" stopColor="#40B4A6" />
            <stop offset="0.637527" stopColor="#A6D8D2" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_5543"
            x1="38.9725"
            y1="218.497"
            x2="-0.517108"
            y2="216.867"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.25249" stopColor="#40B4A6" />
            <stop offset="0.637527" stopColor="#A6D8D2" />
          </linearGradient>
        </defs>
      </svg>
      <p className="text-sm md:text-base leading-6 line-clamp-4 md:leading-7">
        {comment.comment}
      </p>
      <div className="flex items-center justify-between select-none">
        <div className="flex gap-2 items-center font-bold md:text-lg">
          <span className="w-7 h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full block">
            <img
              src={comment.imageProfile}
              className="w-full h-full object-cover"
              alt=""
            />
          </span>
          {comment.fullName}
        </div>
        <div className="flex gap-2 items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FFB23F"
              stroke="#FFB23F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {comment.star}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const comments = [
    {
      id: 1,
      fullName: "Janne Cooper",
      imageProfile: "/images/comment2.png",
      comment:
        "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      star: "4.3",
    },
    {
      id: 2,
      fullName: "Cobocannaeru",
      imageProfile: "/images/comment1.png",
      comment:
        "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      star: "3.5",
    },
    {
      id: 3,
      fullName: "Berry Gunawan",
      imageProfile: "/images/comment2.png",
      comment:
        "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      star: "4",
    },
  ];

  return (
    <section className="container">
      {/* description */}
      <article className="flex flex-col gap-4 md:gap-5 lg:gap-6 items-center mb-8 px-4">
        <div className="text-center">
          <span className="text-sm md:text-base text-badge">Testimonials</span>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-[44px] lg:leading-[50px]">
            What our customer say
          </h2>
        </div>
        <p className="max-w-[325px] md:max-w-[650px] md:leading-7 text-sm md:text-base leading-6 text-center">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </article>
      {/* Comment List */}
      <article className="w-full py-4 flex items-stretch gap-4 mb-[100px] overflow-x-scroll scrollbar-none px-4">
        {comments.map((comment, i) => (
          <CommentCard key={i} comment={comment} />
        ))}
      </article>
    </section>
  );
};

export default Testimonials;
