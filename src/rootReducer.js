import React from 'react';
import { ADD_POST, REMOVE_POST, ADD_COMMENT, DELETE_COMMENT} from './actionTypes';

const INITIAL_STATE = {
  posts: [{title:'test', description:'test des', body: 'test body', comments: [], id:1}]
}

function handleRemove(arr, id) {
  console.log("ARRAY", arr)
  console.log("ID", id);
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

    case ADD_COMMENT:
      const post = state.posts.find(p => p.id === action.payload.id);
      const updatedPost = { 
        ...post, 
        comments: [ ...post.comments, action.payload ]
      };
      const oldPosts = state.posts.filter(p => p.id !== action.payload.id);

      console.log("WTFFFFFFF", post);
      return { ...state, posts: [ ...oldPosts, updatedPost ] }

    case DELETE_COMMENT:

    console.log("STATE",state.posts)
    console.log("###########", action.payload)
      const thisPost = state.posts.find(p => p.id == action.payload.id);

      console.log("$$$$$$$$$$$$$$$", thisPost.comments);
      const thisUpdatedPost = { 
        ...thisPost, 
        comments: handleRemove( thisPost.comments, action.payload.commentId )//postid? commentID?
      };
      const thisOldPosts = state.posts.filter(p => p.id !== action.payload);
      console.log("UPdated posts", thisUpdatedPost);
      return { ...state, posts: ([ ...thisOldPosts, thisUpdatedPost ]) }
      

    default:
      console.warn('No type found', action.type);
      return state;
  }
}

export default rootReducer;