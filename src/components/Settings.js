import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { connect } from "react-redux";
import { selectValute } from "../actions/valuteAction";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.valute.name
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.selectValute(event.target.value);
  };
  render() {
    return (
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="position"
          name="position"
          value={this.state.value}
          onChange={this.handleChange}
          row
        >
          <FormControlLabel
            value="USD"
            control={<Radio color="primary" />}
            label="USD"
            labelPlacement="top"
            style={{ marginLeft: "10vw" }}
          />
          <FormControlLabel
            value="EUR"
            control={<Radio color="primary" />}
            label="EUR"
            labelPlacement="top"
            style={{ marginLeft: "33vw" }}
          />
          <FormControlLabel
            value="CNY"
            control={<Radio color="primary" />}
            label="CNY"
            labelPlacement="top"
            style={{ marginLeft: "33vw" }}
          />
        </RadioGroup>
      </FormControl>
    );
  }
}
const mapStateToProps = state => ({
  valute: state.valute.valutes.find(valute => valute.selected)
});

export default connect(
  mapStateToProps,
  { selectValute }
)(Settings);
