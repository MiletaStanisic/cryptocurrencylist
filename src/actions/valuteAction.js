import { SELECT_VALUTE } from "./types";

export const selectValute = valuteName => ({
  type: SELECT_VALUTE,
  name: valuteName
});
