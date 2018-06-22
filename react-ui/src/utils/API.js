import axios from "axios";

export default {
  // Gets all books
  getMessages: function () {
    return axios.get("/api/messages");
  },
  // Gets the book with the given id
  getMessage: function (id) {
    return axios.get("/api/messages/" + id);
  },
  // Deletes the book with the given id
  deleteMessage: function (id) {
    return axios.delete("/api/messages/" + id);
  },
  // Saves a book to the database
  saveMessage: function (bookData) {
    return axios.post("/api/messages", bookData);
  }
};
