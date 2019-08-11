import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

class CryptocurrencyDetails extends Component {
  render() {
    const cryptocurrency = this.props.location.state;

    const valuteName =
      cryptocurrency.quote.USD ||
      cryptocurrency.quote.EUR ||
      cryptocurrency.quote.CNY;

    return (
      <Paper className="paper-details" style={{ margin: "5vw" }}>
        <Typography variant="h5">Rank: {cryptocurrency.cmc_rank}</Typography>
        <Typography variant="h5">Name: {cryptocurrency.name}</Typography>
        <Typography variant="h5">Symbol: {cryptocurrency.symbol}</Typography>
        <Typography variant="h5">
          Price, 24h volume and market cap: {valuteName.price},
          {valuteName.volume_24h},{valuteName.market_cap}
        </Typography>
        <Typography variant="h5">
          1h change, 24h change, 7d change: {valuteName.percent_change_1h},
          {valuteName.percent_change_24h},{valuteName.percent_change_7d}
        </Typography>
        <Typography variant="h5">
          Total and available supply: {cryptocurrency.total_supply},
          {cryptocurrency.max_supply}
        </Typography>
      </Paper>
    );
  }
}

export default CryptocurrencyDetails;
