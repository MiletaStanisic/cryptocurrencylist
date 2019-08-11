import { LOAD_CRYPTOCURRENCIES } from "../actions/types";

const initialState = {
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
    },
    {
      id: 1027,
      name: "Ethereum",
      symbol: "ETH",
      slug: "ethereum",
      num_market_pairs: 5529,
      date_added: "2015-08-07T00:00:00.000Z",
      tags: ["mineable"],
      max_supply: null,
      circulating_supply: 107263226.8115,
      total_supply: 107263226.8115,
      platform: null,
      cmc_rank: 2,
      last_updated: "2019-08-10T13:39:25.000Z",
      quote: {
        EUR: {
          price: 182.1618510615953,
          volume_24h: 5910479900.7179985,
          percent_change_1h: 0.3969,
          percent_change_24h: -2.8965,
          percent_change_7d: -7.9047,
          market_cap: 19539267946.822582,
          last_updated: "2019-08-10T13:39:00.000Z"
        }
      }
    },
    {
      id: 52,
      name: "XRP",
      symbol: "XRP",
      slug: "ripple",
      num_market_pairs: 439,
      date_added: "2013-08-04T00:00:00.000Z",
      tags: [],
      max_supply: 100000000000,
      circulating_supply: 42872646068,
      total_supply: 99991387607,
      platform: null,
      cmc_rank: 3,
      last_updated: "2019-08-10T13:39:05.000Z",
      quote: {
        EUR: {
          price: 0.26247295879854315,
          volume_24h: 948055064.0766344,
          percent_change_1h: 0.6519,
          percent_change_24h: -1.0946,
          percent_change_7d: -6.5942,
          market_cap: 11252910264.990686,
          last_updated: "2019-08-10T13:39:00.000Z"
        }
      }
    },
    {
      id: 1831,
      name: "Bitcoin Cash",
      symbol: "BCH",
      slug: "bitcoin-cash",
      num_market_pairs: 367,
      date_added: "2017-07-23T00:00:00.000Z",
      tags: ["mineable"],
      max_supply: 21000000,
      circulating_supply: 17939562.5,
      total_supply: 17939562.5,
      platform: null,
      cmc_rank: 4,
      last_updated: "2019-08-10T13:39:07.000Z",
      quote: {
        EUR: {
          price: 275.8235731804582,
          volume_24h: 1080593136.484102,
          percent_change_1h: 0.4697,
          percent_change_24h: -1.901,
          percent_change_7d: -7.3666,
          market_cap: 4948154230.044153,
          last_updated: "2019-08-10T13:39:00.000Z"
        }
      }
    },
    {
      id: 2,
      name: "Litecoin",
      symbol: "LTC",
      slug: "litecoin",
      num_market_pairs: 578,
      date_added: "2013-04-28T00:00:00.000Z",
      tags: ["mineable"],
      max_supply: 84000000,
      circulating_supply: 63007168.3000049,
      total_supply: 63007168.3000049,
      platform: null,
      cmc_rank: 5,
      last_updated: "2019-08-10T13:39:06.000Z",
      quote: {
        EUR: {
          price: 74.36153500073522,
          volume_24h: 2720776148.9046416,
          percent_change_1h: 0.4869,
          percent_change_24h: -2.5308,
          percent_change_7d: -12.1484,
          market_cap: 4685309750.838029,
          last_updated: "2019-08-10T13:39:00.000Z"
        }
      }
    }
  ]
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
