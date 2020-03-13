import axios from "axios";

const BASE_API_URL = "http://localhost:5000/api";


export function getPostsFromApi() {
  return async function(dispatch){
    let res = await axios.get(`${BASE_API_URL}/posts`);
    dispatch(gotPosts(res.data));
  };
}

export function getSinglePostFromApi(id) {
  console.log("ID", id);
  return async function(dispatch){
    console.log("beginning of action", id);
    let res = await axios.get(`${BASE_API_URL}/posts/${id}`);
    console.log("single post", res.data);
    dispatch(gotPost(res.data));
  };
}

function gotPosts(posts) {
  return { type: 'LOAD_POSTS', posts };
}

function gotPost(post) {
  return { type: 'LOAD_POST', post };
}