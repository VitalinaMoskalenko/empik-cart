import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { H3 } from "../Headings";
import { Body } from "../Paragraphs";

type PropsType = {
  title: string;
  price: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled(Body)`
  font-weight: bold;
`;

const CurrencyPrice = styled.span`
  color: ${({ theme }) => theme.colors.orange};
`;

const baseTranslationPath = "Components.ProductItem.";

const ProductItem = ({ title, price }: PropsType) => {
  const { t } = useTranslation();

  return (
    <Container>
      <H3>{title}</H3>
      <Price>
        {t(`${baseTranslationPath}price`)}
        <CurrencyPrice>
          {t(`${baseTranslationPath}currency`, { price })}
        </CurrencyPrice>
      </Price>
    </Container>
  );
};

export default ProductItem;
