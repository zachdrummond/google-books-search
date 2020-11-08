import { useState } from "react";
import API from "../utils/API";
import Jumbotron from "../Jumbotron/Jumbotron";
import Card from "../Card/Card";
import Form from "./Form";
import Book from "../Book.jsx/Book";

const Search = () => {
  const style = {
    container: {
      marginBottom: "100px",
    },
  };

  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  function getBook(event) {
    event.preventDefault();

    if (!search) {
      return;
    }
    API(search)
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => console.log(error));
  }

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Jumbotron />
      <div className="container" style={style.container}>
        <Card header="Book Search">
          <Form
            search={search}
            handleInputChange={handleInputChange}
            getBook={getBook}
          />
        </Card>
        {books.length ? (
          <Card header="Results">
            {books.map((book) => (
              <Book key={book.id} volumeInfo={book.volumeInfo} />
            ))}
          </Card>
        ) : null}
      </div>
    </>
  );
};

export default Search;
