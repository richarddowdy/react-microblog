import axios from "axios";

const BASE_API_URL = "http://localhost:5000/api";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class MicroblogApi {

  static async getPosts() {
    const result = await axios.get(`${BASE_API_URL}/posts`);
    return result.data;
  }

  static async getComments() {
    const result = await axios.get(`${BASE_API_URL}/comments`);
    return result.data
  }

  // static async addItem(data, category){
  //   const result = await axios.post(`${BASE_API_URL}/${category}`, data) 
  //   return result.data
  // }
}

export default MicroblogApi;
