import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CryptocurrencyList from "../CryptocurrencyList";

const cryptocurrenciesMock = {
  cryptocurrencies: [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      slug: "bitcoin",
      num_market_pairs: 7803,
      date_added: "2013-04-28T00:00:00.000Z",
      tags: ["mineable"],
      max_supply: 21000000,
      circulating_supply: 17868437,
      total_supply: 17868437,
      platform: null,
      cmc_rank: 1,
      last_updated: "2019-08-10T13:38:36.000Z",
      quote: {
        EUR: {
          price: 10155.999726677635,
          volume_24h: 16118545063.279688,
          percent_change_1h: 0.612,
          percent_change_24h: -2.7183,
          percent_change_7d: 6.0131,
          market_cap: 181471841288.15652,
          last_updated: "2019-08-10T13:39:00.000Z"
        }
      }
    }
  ]
};

describe("A </CryptocurrencyList>", function() {
  it("should be defined", () => {
    expect(CryptocurrencyList).toBeDefined();
  });

  it("renders correctly if has cryptocurrencies", () => {
    expect(shallow(<CryptocurrencyList />));
  });
});
