import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCartService } from "../../services";
import { CartResponseType } from "../../types";
import CartItem from "./components/CartItem";

const Container = styled.div``;
const List = styled.ul``;

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartResponseType[] | null>(null);

  useQuery("fetchCartService", async () => fetchCartService(), {
    onSuccess: (data: CartResponseType[]) => {
      setCartItems(data);
    },
  });

  return (
    <Container>
      <List>
        {cartItems?.map((item) => (
          <CartItem
            title={item.name}
            price={item.price}
            min={item.min}
            max={item.max}
            isBlocked={item.isBlocked}
          />
        ))}
      </List>
    </Container>
  );
};

export default CartPage;
