import React from "react";

const ButtonContain = ({
  onClick = () => {},
  className = "",
  children,
  title = "title",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} text-sm bg-main md:text-base py-3 text-white duration-200 active:scale-95 rounded hover:bg-[#306460]`}
    >
      {children}
      {title}
    </button>
  );
};

export default ButtonContain;
