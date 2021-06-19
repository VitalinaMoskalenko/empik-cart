import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import styled from "styled-components";
import { H2 } from "../../components";
import { fetchCartService } from "../../services";
import { CartResponseType } from "../../types";
import CartItem from "./components/CartItem";

const Price = styled(H2)`
  padding: 20px;
  font-weight: bold;
`;

const CurrencyPrice = styled.span`
  color: ${({ theme }) => theme.colors.orange};
`;

const baseTranslationPath = "Pages.CartPage.";

const CartPage = () => {
  const { t } = useTranslation();

  const [cartItems, setCartItems] = useState<CartResponseType[] | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useQuery("fetchCartService", async () => fetchCartService(), {
    onSuccess: (data: CartResponseType[]) => {
      setCartItems(data);
    },
  });

  useEffect(() => {
    const result = cartItems?.reduce(
      (accumulator: number, currentValue: CartResponseType) => {
        return accumulator + Number(currentValue.price);
      },
      0
    );

    setTotalPrice(Number(Number(result).toFixed(2)));
  }, [cartItems]);

  useEffect(() => {
    setTotalPrice(Number(totalPrice.toFixed(2)));
  }, [totalPrice]);

  return (
    <div>
      <ul>
        {cartItems?.map((item) => (
          <CartItem
            key={item.pid}
            itemId={item.pid}
            title={item.name}
            price={item.price}
            min={item.min}
            max={item.max}
            isBlocked={item.isBlocked}
            setTotalPrice={setTotalPrice}
          />
        ))}
      </ul>
      <Price>
        {t(`${baseTranslationPath}priceToPay`)}
        <CurrencyPrice>
          {t(`${baseTranslationPath}currency`, { price: totalPrice })}
        </CurrencyPrice>
      </Price>
    </div>
  );
};

export default CartPage;
