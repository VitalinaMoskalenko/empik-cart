import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import styled from "styled-components";
import { Body, MinMaxToggle, ProductItem } from "../../../components";
import { getProductCheckService } from "../../../services";
import { ProductCheckErrorType } from "../../../types";

type PropsType = {
  title: string;
  price: string;
  min: number;
  max: number;
  isBlocked?: boolean;
  itemId: string;
};

const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: 400px;
  list-style-type: none;
  padding: 30px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ErrorMessage = styled(Body)`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.red};
`;

type MutationProps = {
  pid: string;
  quantity: number;
};

const baseTranslation = "Pages.CartPage.Errors.";

const CartItem = ({ title, price, min, max, isBlocked, itemId }: PropsType) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { t } = useTranslation();

  const onValueChanged = (value: number) => {
    checkProduct({ pid: itemId, quantity: value });
    console.log((Number(price) * value).toFixed(2), itemId);
  };

  const { mutate: checkProduct } = useMutation(
    ({ pid, quantity }: MutationProps) => getProductCheckService(pid, quantity),
    {
      onSuccess: (data) => {
        if (data.isError) {
          setErrorMessage(getErrorMessage(data.errorType));
        } else {
          setErrorMessage(null);
        }
      },
    }
  );

  const getErrorMessage = (errorType: ProductCheckErrorType) => {
    switch (errorType) {
      case ProductCheckErrorType.INCORRECT_BODY:
      case ProductCheckErrorType.INCORRECT_TYPE:
      case ProductCheckErrorType.MISSING_PROPERTY:
        return t(`${baseTranslation}unknownError`);

      case ProductCheckErrorType.NOT_FOUND:
        return t(`${baseTranslation}notFoundItem`);

      case ProductCheckErrorType.INCORRECT_QUANTITY:
        return t(`${baseTranslation}incorrectQuantity`);

      default:
        return null;
    }
  };

  useEffect(() => {
    checkProduct({ pid: itemId, quantity: min });
  }, []);

  return (
    <Container>
      <ContentContainer>
        <ProductItem title={title} price={price} />
        <MinMaxToggle
          min={min}
          max={max}
          onValueChanged={onValueChanged}
          isBlocked={isBlocked}
        />
      </ContentContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default CartItem;
