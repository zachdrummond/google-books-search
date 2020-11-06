const express = require("express");
const path = require("path");
const router = express.Router();

// Route - Returns all saved books
router.get("/api/authors", function(request, response) {

});

// Route - Saves a new book to the database
router.post("/api/authors", function(request, response) {

});

// Route - Deletes a book from the database
router.delete("/api/authors/:id", function(request, response) {

});

// Route - Catch All - Loads the HTML Page
router.get("*", function(request, response) {
    response.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;