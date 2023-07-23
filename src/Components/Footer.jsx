import { Link } from "react-router-dom";

const Footer = () => {
  const product = [
    { title: "New Arrivals", url: "/" },
    { title: "Best Selling", url: "/" },
    { title: "Home Decor", url: "/" },
    { title: "Kitchen Set", url: "/" },
  ];
  const services = [
    { title: "Catalog", url: "/" },
    { title: "Blog", url: "/" },
    { title: "FaQ", url: "/" },
    { title: "Pricing", url: "/" },
  ];
  const followUs = [
    { title: "Facebook", url: "/" },
    { title: "Instagram", url: "/" },
    { title: "Twitter", url: "/" },
  ];

  return (
    <footer className="container flex flex-col items-center gap-y-8 md:flex-row md:justify-between px-4 py-8 border-t md:py-12 lg:py-16 md:items-start">
      <article className="w-full">
        <img className="md:hidden" src="/images/main-logo.png" />
        <img className="hidden md:block" src="/images/main-logo-lg.png" />
        <p className="text-sm leading-6 md:leading-7 md:text-base mt-4 md:mt-6 max-w-[260px] md:max-w-[400px] text-slate-400">
          Lalasia is digital agency that help you make better experience iaculis
          cras in.
        </p>
      </article>
      <article className="w-full md:w-auto flex gap-6 md:gap-8 lg:gap-10">
        {/* Product */}
        <div className="flex-1">
          <h4 className="font-bold md:text-xl lg:text-2xl">Product</h4>
          <ul className="text-sm leading-6 md:leading-7 lg:text-base text-gray-400  flex flex-col gap-1.5 mt-2">
            {product.map((item, i) => {
              return (
                <li key={i}>
                  <Link className="hover:text-main" to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Services */}
        <div className="flex-1">
          <h4 className="font-bold md:text-xl lg:text-2xl">Services</h4>
          <ul className="text-sm leading-6 md:leading-7 lg:text-base text-gray-400  flex flex-col gap-1.5 mt-2">
            {services.map((item, i) => {
              return (
                <li key={i}>
                  <Link className="hover:text-main" to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Follow Us */}
        <div className="flex-1">
          <h4 className="font-bold md:text-xl lg:text-2xl whitespace-nowrap">
            Follow Us
          </h4>
          <ul className="text-sm leading-6 md:leading-7 lg:text-base text-gray-400  flex flex-col gap-1.5 mt-2">
            {followUs.map((item, i) => {
              return (
                <li key={i}>
                  <Link className="hover:text-main" to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
