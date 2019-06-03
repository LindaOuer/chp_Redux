import React, { Component } from "react";
import { connect } from "react-redux";
import { addCardNb, addCardHolder, addValidThru } from "../actions";
import NumberFormat from "react-number-format";

function mapDispatchToProps(dispatch) {
  return {
    addCardNb: cardNb => dispatch(addCardNb(cardNb)),
    addCardHolder: cardHolder => dispatch(addCardHolder(cardHolder)),
    addValidThru: validThru => dispatch(addValidThru(validThru))
  };
}

const mapStateToProps = state => {
  return {
    cardNb: state.cardNb,
    cardHolder: state.cardHolder,
    validThru: state.validThru
  };
};

function cardExpiry(val) {
  let month = limit(val.substring(0, 2), "12");
  let date = limit(val.substring(2, 4), "31");

  return month + (date.length ? "/" + date : "");
}

function limit(val, max) {
  if (val.length === 1 && val[0] > max[0]) {
    val = "0" + val;
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = "01";

      //this can happen when user paste number
    } else if (val > max) {
      val = max;
    }
  }

  return val;
}

class ConnectedForm extends Component {
  constructor(props) {
    super();
    this.state = {
      cardNb: props.cardNb,
      cardHolder: props.cardHolder,
      validThru: props.validThru
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleChange(event) {
    let { value, maxLength } = event.target;
    let message = value.slice(0, maxLength);
    this.setState({ [event.target.id]: message });
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      this.props.addCardNb(this.state.cardNb);
      this.props.addCardHolder(this.state.cardHolder);
      this.props.addValidThru(this.state.validThru);
    }
  }

  render() {
    let { cardNb, cardHolder, validThru } = this.state;

    return (
      <form onKeyUp={this.handleKeyUp}>
        <div className="form-group">
          <label htmlFor="cardNb">cardNb</label>
          {/* <input
            type="number"
            className="form-control"
            id="cardNb"
            value={cardNb}
            maxLength="16"
            onChange={this.handleChange}
          /> */}
          <NumberFormat
            format="#### #### #### ####"
            className="form-control"
            id="cardNb"
            value={cardNb}
            maxLength="19"
            placeholder={cardNb}
            onChange={this.handleChange}
          />
          <label htmlFor="cardHolder">cardHolder</label>
          <input
            type="text"
            className="form-control"
            id="cardHolder"
            value={cardHolder}
            maxLength="20"
            placeholder={cardHolder}
            onChange={this.handleChange}
          />
          <label htmlFor="validThru">validThru</label>
          {/* <input
            type="text"
            className="form-control"
            id="validThru"
            value={validThru}
            maxLength="5"
            placeholder="XX/YY"
            onChange={this.handleChange}
          /> */}
          <NumberFormat
            format={cardExpiry}
            className="form-control"
            id="validThru"
            value={validThru}
            placeholder={validThru}
            maxLength="5"
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}
const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);
export default Form;
