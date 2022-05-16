import { FC } from "react";
import CartItem from "../CartItem/CartItem";
import Button from "@material-ui/core/Button";
import { Popover } from "@material-ui/core";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// Styles
import { Wrapper } from "./Cart.styles";
// Types
import { CartItemType } from "../../App";

type Props = {
  cartItems: CartItemType[];
  totalItems: number;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  removeAllFromCart: () => void;
};

const Cart: FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
  removeAllFromCart,
  totalItems,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => item.amount * item.price + ack, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="no-item">No items in cart.</p>
      ) : null}
      {cartItems.length > 0 && (
        <div className="cart-info-row">
          <p>
            Total <b>{totalItems}</b> item
            {totalItems > 1 ? "s" : ""}
          </p>

          <PopupState variant="popover">
            {(popupState) => (
              <div>
                <Button
                  size="small"
                  variant="outlined"
                  {...bindTrigger(popupState)}
                >
                  <DeleteForeverIcon htmlColor="#dc2626" />
                </Button>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <p style={{ textAlign: "center" }}>Empty the basket</p>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    style={{ margin: "0 10px 5px 5px" }}
                    onClick={popupState.close}
                  >
                    no
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    style={{ margin: "0 5px 5px 10px" }}
                    onClick={removeAllFromCart}
                  >
                    yes
                  </Button>
                </Popover>
              </div>
            )}
          </PopupState>
        </div>
      )}
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
