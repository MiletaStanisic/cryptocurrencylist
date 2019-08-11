import { combineReducers } from "redux";
import cryptocurrencyReducer from "./cryptocurrencyReducer";
import valuteReducer from "./valuteReducer";

export default combineReducers({
  cryptocurrency: cryptocurrencyReducer,
  valute: valuteReducer
});
