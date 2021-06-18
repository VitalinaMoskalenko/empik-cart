import axios, { AxiosResponse } from "axios";
import { CartResponseType } from "../../types/";
import { getCartEndpoint } from "./enpoint";

export const fetchCartService = (): Promise<CartResponseType[]> => {
  return axios
    .get(getCartEndpoint)
    .then((response: AxiosResponse<CartResponseType[]>) => response.data);
};
