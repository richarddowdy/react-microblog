import axios from "axios";

const BASE_API_URL = "http://localhost:5000/api";


export function getPostsFromApi() {
  return async function(dispatch){
    let res = await axios.get(`${BASE_API_URL}/posts`);
    dispatch(gotPosts(res.data));
  };
}

export function getSinglePostFromApi(id) {
  return async function(dispatch){
    let res = await axios.get(`${BASE_API_URL}/posts/${id}`);
    dispatch(gotPost(res.data));
  };
}

export function updateSinglePostApi(id, data) {
  return async function(dispatch){
    let res = await axios.put(`${BASE_API_URL}/posts/${id}`, data);
    dispatch(editPost(res.data));
  }
}

export function addPostApi(data) {
  return async function(dispatch){
    let res = await axios.post(`${BASE_API_URL}/posts`, data);
    console.log("response data in actioncreator", res.data)
    dispatch(addPost(res.data));
  }
}

// TODO delete post from db

export function addCommentToApi(data){
  console.log("action creators", data)
  return async function(dispatch){
    let res= await axios.post(`${BASE_API_URL}/posts/${data.postId}/comments/`, data)
    console.log("in action creater", res.data)
    dispatch(addComment( {...res.data, post_id: data.post_id }))
  }
}

// TODO delete comment from db
export function deleteCommentApi(data){
  console.log("delete called")
  console.log("delete data", data)
  return async function(dispatch){
    let res = await axios.delete(`${BASE_API_URL}/posts/${data.postId}/comments/${data.commentId}`)
    dispatch(deleteComment({ post_id: data.postId, comment_id: data.commentId }))
  }
}


function gotPosts(posts) {
  return { type: 'LOAD_POSTS', posts };
}

function gotPost(post) {
  return { type: 'LOAD_POST', post };
}

function editPost(post) {
  return { type: 'EDIT_POST', post };
}

function addPost(post) {
  return { type: 'ADD_POST', post };
}

function addComment(comment, postId){
  return {type: 'ADD_COMMENT', comment, postId }
}

function deleteComment(postId, commentId){
  return {type: 'DELETE_COMMENT', postId, commentId}
}