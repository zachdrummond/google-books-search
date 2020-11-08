import axios from "axios";

const API = {
  Search: function (userSearch) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=${process.env.REACT_APP_API_KEY}`
    );
  },
  SaveBook: function (book) {
    return axios.post("/api/books", book);
  },
  GetSavedBooks: function () {
    return axios.get("/api/books");
  },
  DeleteBook: function (id) {
    return axios.delete(`/api/books/${id}`);
  },
};

export default API;
