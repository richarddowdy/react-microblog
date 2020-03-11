import React from 'react';
import { ADD_POST, REMOVE_POST } from './actionTypes';

const INITIAL_STATE = {
  posts: []
}

function handleRemove(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      if (arr[i][key] === id) {
        arr.splice(i, 1);
      }
    }
    break;
  }
  return arr;
}

function rootReducer(state = INITIAL_STATE, action) {

  switch(action.type) {
    case ADD_POST:
      return {...state, posts: [...state.posts, action.payload]};

    case REMOVE_POST:
      return {...state, posts: handleRemove([...state.posts, action.payload.id])};

    default:
      console.warn('No type found', action.type);
      return state;
  }
}

export default rootReducer;