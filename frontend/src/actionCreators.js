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