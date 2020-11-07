import axios from "axios";

const API = (search) => {
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_KEY}`);
};
export default API;