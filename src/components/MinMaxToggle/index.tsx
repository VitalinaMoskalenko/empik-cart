import React, { useState } from "react";
import styled from "styled-components";
import { SmallBody } from "../Paragraphs";

type PropsType = {
  min: number;
  max: number;
  isBlocked?: boolean;
  onValueChanged: (value: number) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  padding: 10px;
`;

const Count = styled(SmallBody)`
  text-align: center;
  width: 20px;
  padding: 10px;
`;

const MinMaxToggle = ({ min, max, isBlocked, onValueChanged }: PropsType) => {
  const [count, setCount] = useState(1);

  const onMinusClick = () => {
    if (min < count) {
      onValueChanged(count - 1);
      setCount(count - 1);
    }
  };

  const onPlusClick = () => {
    if (max > count) {
      onValueChanged(count + 1);
      setCount(count + 1);
    }
  };

  return (
    <Container>
      <Button onClick={onMinusClick} disabled={isBlocked}>
        <SmallBody>-</SmallBody>
      </Button>
      <Count>{count}</Count>
      <Button onClick={onPlusClick} disabled={isBlocked}>
        <SmallBody>+</SmallBody>
      </Button>
    </Container>
  );
};

export default MinMaxToggle;
