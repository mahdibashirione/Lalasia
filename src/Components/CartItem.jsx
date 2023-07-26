import { useDispatch, useSelector } from "react-redux";
import {
  dicrementItemCart,
  incrementItemCart,
  removeItemCart,
} from "../feature/cart/cartSlice";
import { FiMinus, FiPlus, FiTrash, FiTrash2 } from "react-icons/fi";
import useToast from "../Hooks/useToast";
import separate from "../utils/utils";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { successToast, errorToast } = useToast();
  return (
    <div key={product.id} className="col-span-1 flex gap-3 pb-3 border-b h-fit">
      {/* image */}
      <div className="w-[125px] h-[125px] min-w-[125px] rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={product.image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        {/* name */}
        <h3 className="font-bold line-clamp-1">{product.name}</h3>
        {/* color */}
        <p className="text-sm  md:text-base flex items-center">
          Color :
          <span className={`block w-4 h-4 ml-2 ${product.colors[0]}`}></span>
        </p>
        {/* price */}
        <p className="text-sm  md:text-base flex items-center">
          Price :
          <span className="text-slate-800 text-base font-semibold ml-2">
            ${separate(product.price)}
          </span>
        </p>
        {/* quantity action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* dicrement */}
            <button
              onClick={(e) => dispatch(dicrementItemCart({ id: product.id }))}
              className="text-lg"
            >
              <FiMinus />
            </button>
            <span>{product.quantity}</span>
            {/* increment */}
            <button
              onClick={(e) => dispatch(incrementItemCart({ id: product.id }))}
              className="text-lg"
            >
              <FiPlus />
            </button>
          </div>
          {/* delete action */}
          <button
            onClick={(e) => {
              dispatch(removeItemCart({ id: product.id }));
              successToast("remove in cart");
            }}
            className="text-xl text-red-500"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
