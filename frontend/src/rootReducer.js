import { ADD_POST, REMOVE_POST, ADD_COMMENT, DELETE_COMMENT, LOAD_POSTS, LOAD_POST, EDIT_POST} from './actionTypes';

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
      return {...state, posts: [...state.posts, action.post]};
  

    case REMOVE_POST:
      return {...state, posts: handleRemove([...state.posts, action.payload])};


    case ADD_COMMENT:
      const post = state.post
      const updatedPost = { 
        ...post, 
        comments: [ ...post.comments, action.comment ]
      };
      const oldPosts = state.posts.filter(p => p.id !== action.comment.post_id);
      let updatedState = { ...state, posts: [ ...oldPosts, updatedPost ], post: updatedPost }
      return updatedState

    case DELETE_COMMENT:
      console.log(action);
      const thisPost = state.posts.find(p => p.id === action.postId);
      console.log(thisPost);
      const comments = thisPost.comments.filter(c => c.commentId !== action.commentId);

      const thisUpdatedPost = { 
        ...thisPost, 
        comments
      };
      const thisOldPosts = state.posts.filter(p => p.id !== action.payload.id);
      return { ...state, posts: [ ...thisOldPosts, thisUpdatedPost ] }


    case LOAD_POSTS:
      return {...state, posts: action.posts}
      

    case LOAD_POST:
      return {...state, post: action.post}

      
    case EDIT_POST:
   
      return {...state, post: {...state.post, title: action.post.title, description: action.post.description, body: action.post.body}}
    

    default:
      console.warn('No type found', action.type);
      return state;
  }
}

export default rootReducer;