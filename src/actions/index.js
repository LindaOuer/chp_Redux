import {
  ADD_CARDNB,
  ADD_CARDHOLDER,
  ADD_VALIDTHRU
} from "../constants/actions-types";

export function addCardNb(value) {
  return { type: ADD_CARDNB, value };
}

export function addCardHolder(value) {
  return { type: ADD_CARDHOLDER, value };
}

export function addValidThru(value) {
  return { type: ADD_VALIDTHRU, value };
}
