import Button from "@material-ui/core/Button";
import { FC } from "react";
// Types
import { CartItemType } from "../App";
// Styles
import { Wrapper } from "./CartItem.styles";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h4>{item.title}</h4>
        <div className="information">
          <p>Price: ₺{item.price.toFixed(2).replace(".", ",")}</p>
          <p>
            Total: ₺{(item.amount * item.price).toFixed(2).replace(".", ",")}
          </p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            {item.amount > 1 ? (
              <RemoveIcon />
            ) : (
              <DeleteOutlineIcon htmlColor="#dc2626" />
            )}
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            <AddIcon />
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
