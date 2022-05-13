import { FC } from "react";
import CartItem from "../CartItem/CartItem";
// Styles
import { Wrapper } from "./Cart.styles";
// Types
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => item.amount * item.price + ack, 0);
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="no-item">No items in cart.</p>
      ) : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      {cartItems.length > 0 && (
        <h2>
          Total: ₺{calculateTotal(cartItems).toFixed(2).replace(".", ",")}
        </h2>
      )}
    </Wrapper>
  );
};

export default Cart;
