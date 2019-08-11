import { LOAD_CRYPTOCURRENCIES } from "../actions/types";

const initialState = {
  cryptocurrencies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_CRYPTOCURRENCIES:
      return {
        ...state,
        cryptocurrencies: action.payload
      };
    default:
      return state;
  }
}
