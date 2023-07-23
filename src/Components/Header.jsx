import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const navItems = [
    { id: 1, url: "/product", title: "Product" },
    { id: 2, url: "/services", title: "Services" },
    { id: 3, url: "/article", title: "Article" },
    { id: 4, url: "/about-us", title: "About Us" },
  ];

  const { cart } = useSelector((state) => state);

  function handleSidebar(action) {
    switch (action) {
      case "close": {
        setIsShowSidebar(false);
        break;
      }
      case "open": {
        setIsShowSidebar(true);
        break;
      }
    }
  }

  const { pathname } = useLocation();

  return (
    <header className="w-full fixed top-0 left-0 backdrop-blur-xl z-30">
      <div className="container border-b p-4 flex items-center justify-between">
        <Link to="/">
          <img className="md:hidden" src="/images/main-logo.png" />
          <img className="hidden md:block" src="/images/main-logo-lg.png" />
        </Link>
        {/* nav */}
        <nav className="hidden md:block text-lg">
          <ul className="flex items-center lg:gap-2">
            {navItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="rounded-md
                duration-200 hover:text-main hover:scale-105"
                >
                  <Link
                    className={`border-b block py-2 px-3 ${
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
        </nav>
        {/* user & cart */}
        <div className="items-center gap-4 hidden md:flex">
          <Link className="relative" to="/cart">
            <svg
              className={`w-9 h-9 border-b-2 pb-1  ${
                pathname === "/cart"
                  ? " border-green-700"
                  : " border-transparent"
              }`}
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
                stroke="#151411"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6181 15H10.6294"
                stroke="#151411"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="flex items-center justify-center absolute -top-1 -left-2 w-5 h-5 rounded-full bg-main text-white text-sm">
              {cart.length}
            </span>
          </Link>
          <Link to="/user">
            <svg
              className={`w-9 h-9 border-b-2 pb-1  ${
                pathname === "/user"
                  ? " border-green-700"
                  : " border-transparent"
              }`}
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29822 18.4518 2.5 15 2.5C11.5482 2.5 8.75 5.29822 8.75 8.75C8.75 12.2018 11.5482 15 15 15Z"
                className={`${
                  pathname === "/user" ? "stroke-green-800" : "stroke-gray-800"
                }`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.7377 27.5C25.7377 22.6625 20.9252 18.75 15.0002 18.75C9.07519 18.75 4.2627 22.6625 4.2627 27.5"
                className={`${
                  pathname === "/user" ? "stroke-green-800" : "stroke-gray-800"
                }`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        {/* btn Open Sidebar */}
        <button onClick={(e) => handleSidebar("open")} className="md:hidden">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 8.75H26.25"
              stroke="#151411"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3.75 15H26.25"
              stroke="#151411"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3.75 21.25H26.25"
              stroke="#151B33"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <Sidebar
        handleSidebar={handleSidebar}
        isShow={isShowSidebar}
        pathname={pathname}
        options={navItems}
      />
    </header>
  );
};

export default Header;
