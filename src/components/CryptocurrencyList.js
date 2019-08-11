import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCryptocurrencies } from "../actions/cryptocurrencyAction";
import CryptocurrencyItem from "./CryptocurrencyItem";

class CryptocurrencyList extends Component {
  componentDidMount() {
    this.props.getCryptocurrencies(this.props.valute.name);
  }
  render() {
    const { cryptocurrencies } = this.props;
    return (
      <Paper style={{ margin: 20 }} className="list-paper">
        <Button
          color="primary"
          onClick={() => {
            this.props.getCryptocurrencies(this.props.valute.name);
          }}
        >
          Refresh
        </Button>
        <Table className="table">
          <TableHead className="table-head">
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Simbol</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>24 hour change</TableCell>
              <TableCell>More info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {cryptocurrencies.map(cryptocurrency => (
              <CryptocurrencyItem
                key={cryptocurrency.id}
                cryptocurrency={cryptocurrency}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
CryptocurrencyList.propTypes = {
  cryptocurrencies: PropTypes.array.isRequired,
  getCryptocurrencies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cryptocurrencies: state.cryptocurrency.cryptocurrencies,
  valute: state.valute.valutes.find(valute => valute.selected)
});

export default connect(
  mapStateToProps,
  { getCryptocurrencies }
)(CryptocurrencyList);
