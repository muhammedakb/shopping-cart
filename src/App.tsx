import { useEffect, useState } from "react";
// Components
import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { ToastContainer, toast, Flip } from "react-toastify";
// Styles
import { Wrapper, StyledButton, Loading, GridContainer } from "./App.styles";
import "react-toastify/dist/ReactToastify.css";
// Utils
import { correctionItemName } from "./utils/string";
// Hooks
import useGetItems from "./hooks/useGetItems";

// Types
export type CartItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
  rating: {
    rate: number;
    count: number;
  };
};

export type SortType = "Price low to high" | "Price high to low" | undefined;

const App = () => {
  const [state, setState] = useState<any>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<SortType>(undefined);
  const { status, data, isLoading, error } = useGetItems(selectedFilter ?? "");

  useEffect(() => {
    if (status === "success") {
      setState(data);
    }
  }, [status, data]);

  useEffect(() => {
    if (selectedSort) {
      sortItemsByPrice();
    } else if (selectedSort === undefined || selectedSort === "") {
      setState(data);
    }
  }, [selectedSort, selectedFilter]);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      toast.success(`${correctionItemName(clickedItem.title)} added to cart!`, {
        autoClose: 1500,
        position: "bottom-right",
        transition: Flip,
      });

      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            toast.info(`${correctionItemName(item.title)} removed from cart!`, {
              autoClose: 1500,
              position: "bottom-right",
              transition: Flip,
            });
            return ack;
          }
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  const removeAllItemsFromCart = () => {
    setCartItems([]);
    toast.info("All items removed from cart!", {
      autoClose: 1500,
      position: "top-center",
      transition: Flip,
    });
  };

  const sortItemsByPrice = () => {
    if (selectedSort === "Price low to high") {
      setState((prev: any) => {
        return [...prev].sort((a, b) => a.price - b.price);
      });
    } else if (selectedSort === "Price high to low") {
      setState((prev: any) => {
        return [...prev].sort((a, b) => b.price - a.price);
      });
    }
  };

  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
      <Filter
        filter={selectedFilter}
        setFilter={setSelectedFilter}
        sort={selectedSort}
        setSort={setSelectedSort}
      >
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            removeAllFromCart={removeAllItemsFromCart}
            totalItems={getTotalItems(cartItems)}
          />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge
            badgeContent={getTotalItems(cartItems)}
            color="error"
            overlap="rectangular"
          >
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
      </Filter>
      {isLoading && <Loading />}
      <GridContainer container spacing={4}>
        {state?.map((item: CartItemType) => (
          <Grid item key={item.id} xs={12} sm={6} md={3} xl={2}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </GridContainer>
      <ToastContainer
        theme="dark"
        style={{ width: "240px", fontSize: "12px" }}
      />
    </Wrapper>
  );
};

export default App;
