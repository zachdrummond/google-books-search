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

  function getBooks(event) {
    event.preventDefault();

    if (!search) {
      return;
    }
    API.Search(search)
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => console.log(error));
  }

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSaveButton = (event) => {
    event.preventDefault();
    const userBook = books.filter((book) => {
      return book.id === event.target.value;
    });
    API.SaveBook(userBook[0].volumeInfo)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Jumbotron />
      <div className="container" style={style.container}>
        <Card header="Book Search">
          <Form
            search={search}
            handleInputChange={handleInputChange}
            getBooks={getBooks}
          />
        </Card>
        {books.length ? (
          <Card header="Results">
            {books.map((book) => {
              const {
                title,
                infoLink,
                authors,
                imageLinks,
                description,
              } = book.volumeInfo;
              return (
                <Book
                  key={book.id}
                  id={book.id}
                  title={title}
                  link={infoLink}
                  authors={authors}
                  image={imageLinks.thumbnail}
                  description={description}
                  handleButton={handleSaveButton}
                />
              );
            })}
          </Card>
        ) : null}
      </div>
    </>
  );
};

export default Search;
