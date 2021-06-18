import React from "react";
import styled from "styled-components";
import MinMaxToggle from "..";

export default { title: "MinMaxToggle" };

const onValueChanged = (value: number) => {
  console.log(value);
};

export const defaultMinMaxToggle = () => (
  <MinMaxToggle min={1} max={5} onValueChanged={onValueChanged} />
);

export const disabledMinMaxToggle = () => (
  <MinMaxToggle min={1} max={5} isBlocked onValueChanged={onValueChanged} />
);
