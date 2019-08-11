import { SELECT_VALUTE } from "../actions/types";

const initialState = {
  valutes: [
    {
      name: "USD",
      selected: true
    },
    {
      name: "EUR",
      selected: false
    },
    {
      name: "CNY",
      selected: false
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_VALUTE:
      const { name } = action;
      const valutes = state.valutes.map(valute =>
        valute.name === name
          ? { ...valute, selected: true }
          : { ...valute, selected: false }
      );
      return {
        ...state,
        valutes: valutes
      };
    default:
      return state;
  }
}
