import {REMOVE_POST, ADD_POST, ADD_COMMENT, DELETE_COMMENT, EDIT_POST} from './actionTypes';

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

export function add_comment(val) {
  return {
    type: ADD_COMMENT,
    payload:val
  }
}

export function delete_comment(val) {
  return {
    type: DELETE_COMMENT,
    payload:val
  }
}

export function edit_post(val){
  return {
    type: EDIT_POST,
    payload: val
  }
}



