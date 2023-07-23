import { useEffect } from "react";
import CartItem from "../Components/CartItem";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="container p-4 flex fle-col md:flex-row">
      <div className="w-full md:w-2/3 grid grid-cols-1 gap-4 min-h-[calc(100vh-436px)]">
        {cart.length ? (
          cart.map((product) => <CartItem key={product.id} product={product} />)
        ) : (
          <div className="text-sm text-red-500 md:text-base flex items-center justify-center">
            is not a Product in cart
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
