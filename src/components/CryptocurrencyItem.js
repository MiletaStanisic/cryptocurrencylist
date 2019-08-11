import React, { Component } from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { Link } from "react-router-dom";
import CryptocurrencyDetails from "./CryptocurrencyDetails";

class CryptoCurrencyItem extends Component {
  getCryptocurrencyDetails = id => {};

  render() {
    const { cryptocurrency } = this.props;
    const detailsLink = `/details/${cryptocurrency.id}`;
    const valuteName =
      cryptocurrency.quote.USD ||
      cryptocurrency.quote.EUR ||
      cryptocurrency.quote.CNY;
    return (
      <TableRow>
        <TableCell>{cryptocurrency.cmc_rank}</TableCell>
        <TableCell>{cryptocurrency.symbol}</TableCell>
        <TableCell>{valuteName.price}</TableCell>
        <TableCell>{valuteName.volume_24h}</TableCell>
        <TableCell>
          <Link
            to={{ pathname: detailsLink, state: cryptocurrency }}
            style={{ textDecoration: "underscore", color: "inherit" }}
          >
            Details
          </Link>
        </TableCell>
      </TableRow>
    );
  }
}

export default CryptoCurrencyItem;
