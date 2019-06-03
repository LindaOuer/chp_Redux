import React from "react";
import { connect } from "react-redux";
import { credit } from "../images";

const mapStateToProps = state => {
  return {
    cardNb: state.cardNb,
    cardHolder: state.cardHolder,
    validThru: state.validThru
  };
};

const pDiv = {
  position: "absolute",
  bottom: "8px",
  left: "16px",
  width: "60%"
};
const container = {
  backgroundImage: `url(${credit})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "85%",
  height: "100%",
  borderRadius: "20px",

  position: "relative",
  color: "white"
};

const CardDetails = ({ cardNb, cardHolder, validThru }) => (
  <div className="list-group list-group-flush" style={container}>
    <div style={pDiv}>
      <p style={{ marginBottom: "0px" }}> {cardNb} </p>

      <p style={{ marginBottom: "0px", textAlign: "right" }}> {validThru} </p>
      <p style={{ marginBottom: "0px", textTransform: "uppercase" }}>
        {cardHolder}
      </p>
    </div>
  </div>
);
const Card = connect(mapStateToProps)(CardDetails);
export default Card;
