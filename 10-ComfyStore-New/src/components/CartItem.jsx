import { useDispatch } from 'react-redux';
import { formatPrice, generateAmountOptions } from '../utils';
import { editItem, removeItem } from '../features/cart/cartSlice';

const CartItem = ({ cartItem }) => {
  const { price, company, productColor, title, image, amount, cartID } =
    cartItem;

  const dispatch = useDispatch();

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };

  return (
    <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />

      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="font-medium capitalize">{title}</h3>
        {/* COMPANY */}
        <h4 className="mt-2 text-sm text-neutral-content capitalize">
          {company}
        </h4>
        {/* COLOR */}
        <p className="mt-4 capitalize text-sm flex items-center gap-x-2">
          color :
          <span
            style={{ backgroundColor: productColor }}
            className="badge badge-sm"
          ></span>
        </p>
      </div>

      <div className="sm:ml-12">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          type="button"
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>
      {/* PRICE */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
