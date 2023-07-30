import { useEffect } from "react";
import CartItem from "../Components/CartItem";
import { useSelector } from "react-redux";
import separate from "../utils/utils";
import ButtonContain from "../Components/Common/ButtonContain";

const CartPage = () => {
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="container p-4 flex flex-col md:flex-row gap-6">
      {/* products */}
      <article className="w-full md:w-2/3 grid grid-cols-1 gap-4 min-h-[calc(100vh-436px)]">
        {cart.length ? (
          cart.map((product) => <CartItem key={product.id} product={product} />)
        ) : (
          <div className="text-sm text-red-500 md:text-base flex items-center justify-center">
            is not a Product in cart
          </div>
        )}
      </article>
      {/* The Payment */}
      <article className="flex-1 text-sm md:text-base">
        <div className="p-4 w-full md:sticky top-[88px] shadow-main rounded">
          <div className="w-full flex items-center justify-between border-b pb-3 mb-3">
            <p>Total Cart :</p>
            <span className="font-bold">
              ${" "}
              {cart.reduce((acc, cur) => {
                const result = (acc += cur.quantity * cur.price);
                return Math.round(result);
              }, 0)}
            </span>
          </div>
          <div className="w-full flex items-center justify-between border-b pb-3 mb-3">
            <p>Total Discont :</p>
            <span className="font-bold">$ 0</span>
          </div>
          <div className="w-full flex items-center justify-between border-b pb-3 mb-3">
            <p>Payable :</p>
            <span className="font-bold">
              ${" "}
              {cart.reduce((acc, cur) => {
                const result = (acc += cur.quantity * cur.price);
                return Math.round(result);
              }, 0)}
            </span>
          </div>
          <ButtonContain
            className="w-full py-2 mt-4 md:block hidden"
            title="The Payment"
          />
        </div>
      </article>
      <aside className="md:hidden fixed bottom-0 left-0 w-full px-4 py-2 border-t bg-white flex whitespace-nowrap gap-4 items-center text-lg">
        <ButtonContain className="flex-1 py-2" title="The Payment" />
        <span className="font-bold">
          $ {""}
          {cart.reduce((acc, cur) => {
            const result = (acc += cur.quantity * cur.price);
            return Math.round(result);
          }, 0)}
        </span>
      </aside>
    </section>
  );
};

export default CartPage;
