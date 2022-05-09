import { FC, useState } from "react";
// Components
import Button from "@material-ui/core/Button";
// Icons
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";
import StarOutlineOutlinedIcon from "@material-ui/icons/StarOutlineOutlined";
import StarOutlined from "@material-ui/icons/StarOutlined";
// Types
import { CartItemType } from "../App";
// Styles
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: FC<Props> = ({ item, handleAddToCart }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const splittedRate = item.rating.rate.toString().split(".");

  return (
    <Wrapper
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <figure>
        <img src={item.image} alt={item.title} />
        <figcaption className={isHover ? "active" : ""}>
          {item.title}
        </figcaption>
      </figure>
      <div className="rating">
        {[...Array(Number(splittedRate[0]))].map((_, index) => (
          <StarOutlined key={index} htmlColor="#ffc000" />
        ))}

        {splittedRate[1] && <StarHalfOutlinedIcon htmlColor="#ffc000" />}

        {[...Array(Math.floor(5 - item.rating.rate))].map((_, index) => (
          <StarOutlineOutlinedIcon key={index} htmlColor="#ffc000" />
        ))}
        <span className="rating-avg">
          {item.rating.rate} ({item.rating.count})
        </span>
      </div>
      <p className="rating-price">₺ {item.price}</p>
      <Button
        className={isHover ? "active" : ""}
        variant="contained"
        onClick={() => handleAddToCart(item)}
      >
        Add to cart
      </Button>
    </Wrapper>
  );
};

export default Item;
