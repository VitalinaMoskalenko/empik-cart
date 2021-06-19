export type ProductCheckResponseType = {
  isError: boolean;
  success: boolean;
  message: string;
  errorType: ProductCheckErrorType;
};

export enum ProductCheckErrorType {
  INCORRECT_BODY = "INCORRECT_BODY",
  INCORRECT_TYPE = "INCORRECT_TYPE",
  MISSING_PROPERTY = "MISSING_PROPERTY",
  NOT_FOUND = "NOT_FOUND",
  INCORRECT_QUANTITY = "INCORRECT_QUANTITY",
}
