import {REMOVE_POST, ADD_POST} from './actionTypes';

export function add_post(val) {
  return {
    type: ADD_POST,
    payload: val
  }
}

export function remove_post(val) {
  return {
    type: REMOVE_POST,
    payload: val
  }
}