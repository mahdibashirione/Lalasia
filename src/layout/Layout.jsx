import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-[65px] md:pt-[78px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
