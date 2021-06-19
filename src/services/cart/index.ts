import axios, { AxiosResponse } from "axios";
import { CartResponseType, ProductCheckResponseType } from "../../types/";
import { getCartEndpoint, getProductCheckEndpoint } from "./endpoints";

export const fetchCartService = (): Promise<CartResponseType[]> => {
  return axios
    .get(getCartEndpoint)
    .then((response: AxiosResponse<CartResponseType[]>) => response.data);
};

export const getProductCheckService = (
  pid: string,
  quantity: number
): Promise<ProductCheckResponseType> => {
  return axios
    .post(getProductCheckEndpoint, { pid, quantity })
    .then((response: AxiosResponse<ProductCheckResponseType>) => response.data)
    .catch((error) => {
      return error.response.data;
    });
};
