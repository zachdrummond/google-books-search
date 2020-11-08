const express = require("express");
const path = require("path");
const router = express.Router();
const db = require("../models");

// Route - Returns all saved books
router.get("/api/books", function (request, response) {
  db.Book.find({})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Route - Saves a new book to the database
router.post("/api/books", function (request, response) {
  const { title, infoLink, authors, imageLinks, description } = request.body;
  db.Book.create({
    authors: authors,
    description: description,
    image: imageLinks.thumbnail,
    link: infoLink,
    title: title,
  })
    .then((newBook) => {
      response.status(201).json({
        error: false,
        data: null,
        message: "Saved the book!",
      });
    })
    .catch((error) => {
      response.status(500).json({
        error: true,
        data: null,
        message: "Failed to save the book.",
      });
    });
});

// Route - Deletes a book from the database
router.delete("/api/books/:id", function (request, response) {});

// Route - Catch All - Loads the HTML Page
router.get("*", function (request, response) {
  response.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
