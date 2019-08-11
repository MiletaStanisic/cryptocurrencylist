import { LOAD_CRYPTOCURRENCIES } from "./types";
import axios from "axios";

export const getCryptocurrencies = valute => async dispatch => {
  const res = await axios.get(
    `https://cryptocurrencylist.free.beeceptor.com/v1/cryptocurrency/listings/latest?convert=${valute}`
  );
  console.log(res);
  dispatch(loadCryptocurrencies(res.data.data));
};

const loadCryptocurrencies = cryptocurrencies => ({
  type: LOAD_CRYPTOCURRENCIES,
  payload: cryptocurrencies
});
