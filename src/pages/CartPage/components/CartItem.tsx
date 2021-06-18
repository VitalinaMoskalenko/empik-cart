import React from "react";
import styled from "styled-components";
import { MinMaxToggle, ProductItem } from "../../../components";

type PropsType = {
  title: string;
  price: string;
  min: number;
  max: number;
  isBlocked?: boolean;
};

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  width: 400px;
  list-style-type: none;
  padding: 30px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

const CartItem = ({ title, price, min, max, isBlocked }: PropsType) => {
  const onValueChanged = (value: number) => {
    console.log((Number(price) * value).toFixed(2));
  };

  return (
    <Container>
      <ProductItem title={title} price={price} />
      <MinMaxToggle
        min={min}
        max={max}
        onValueChanged={onValueChanged}
        isBlocked={isBlocked}
      />
    </Container>
  );
};

export default CartItem;
