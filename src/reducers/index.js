import {
  ADD_CARDNB,
  ADD_CARDHOLDER,
  ADD_VALIDTHRU
} from "../constants/actions-types";

const initialState = {
  cardNb: "0000 0000 0000 0000",
  cardHolder: "XXXXXXXXXX",
  validThru: "XX/YY"
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_CARDNB) {
    return {
      ...state,
      cardNb: action.value
    };
  }
  if (action.type === ADD_CARDHOLDER) {
    return {
      ...state,
      cardHolder: action.value
    };
  }
  if (action.type === ADD_VALIDTHRU) {
    return {
      ...state,
      validThru: action.value
    };
  }
  return state;
}
export default rootReducer;
