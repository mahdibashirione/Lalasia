import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = ({ isShow, options, pathname, handleSidebar }) => {
  const { cart } = useSelector((state) => state);

  return (
    <>
      <motion.div
        initial={{ right: -250 }}
        animate={{ right: isShow ? 0 : -250 }}
        className="md:hidden fixed w-[250px] z-50 top-0 bg-zinc-50 h-screen p-4"
      >
        {/* user & cart */}
        <Link
          onClick={(e) => handleSidebar("close")}
          className={`p-2 border-r-2 w-full flex items-center gap-2 justify-end ${
            pathname === "/cart"
              ? "text-main border-main"
              : "border-transparent"
          }`}
          to="/cart"
        >
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-main text-white text-sm">
            {cart.length}
          </span>
          Cart
          <svg
            width="24"
            height="24"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.375 9.58739V8.37489C9.375 5.56239 11.6375 2.79989 14.45 2.53739C17.8 2.21239 20.625 4.84989 20.625 8.13739V9.86239"
              className={`${
                pathname === "/cart" ? "stroke-green-800" : "stroke-gray-800"
              }`}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.25 27.5H18.75C23.775 27.5 24.675 25.4875 24.9375 23.0375L25.875 15.5375C26.2125 12.4875 25.3375 10 20 10H10C4.66253 10 3.78753 12.4875 4.12503 15.5375L5.06253 23.0375C5.32503 25.4875 6.22503 27.5 11.25 27.5Z"
              className={`${
                pathname === "/cart" ? "stroke-green-800" : "stroke-gray-800"
              }`}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.3691 15H19.3803"
              className={`${
                pathname === "/cart" ? "stroke-green-800" : "stroke-gray-800"
              }`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6181 15H10.6294"
              className={`${
                pathname === "/cart" ? "stroke-green-800" : "stroke-gray-800"
              }`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link
          onClick={(e) => handleSidebar("close")}
          className={`p-2 border-r-2 w-full flex items-center gap-2 justify-end ${
            pathname === "/user"
              ? "text-main border-main"
              : "border-transparent"
          }`}
          to="/user"
        >
          SignIn
          <svg
            width="24"
            height="24"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29822 18.4518 2.5 15 2.5C11.5482 2.5 8.75 5.29822 8.75 8.75C8.75 12.2018 11.5482 15 15 15Z"
              className={`${
                pathname === "/user" ? "stroke-green-700" : "stroke-gray-800"
              }`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.7377 27.5C25.7377 22.6625 20.9252 18.75 15.0002 18.75C9.07519 18.75 4.2627 22.6625 4.2627 27.5"
              className={`${
                pathname === "/user" ? "stroke-green-700" : "stroke-gray-800"
              }`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        {/* navbar */}
        <ul className="w-full flex flex-col items-end border-t pt-1 mt-2">
          {options.map((item) => {
            return (
              <li
                key={item.id}
                onClick={(e) => handleSidebar("close")}
                className="rounded-md w-full text-right
                duration-200"
              >
                <Link
                  className={`border-r-2 block py-2 px-3 ${
                    pathname === item.url
                      ? "border-main text-main"
                      : "border-transparent"
                  } `}
                  to={item.url}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
      <motion.div
        onClick={(e) => handleSidebar("close")}
        initial={{ opacity: 0 }}
        animate={{ opacity: isShow ? 1 : 0 }}
        className={`md:hidden z-40 fixed top-0 left-0 w-screen h-screen bg-zinc-950/50 duration-200 ${
          isShow ? "block" : "hidden"
        }`}
      ></motion.div>
    </>
  );
};

export default Sidebar;
