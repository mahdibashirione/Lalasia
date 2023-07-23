import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect } from "react";

const Layout = ({ children, location }) => {
  useEffect(() => {
    window.screenTop = 0;
  }, [children]);
  return (
    <>
      <Header />
      <main className="pt-[65px] md:pt-[78px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
