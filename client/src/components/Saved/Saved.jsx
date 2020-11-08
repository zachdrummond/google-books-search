import { useEffect, useState } from "react";
import API from "../utils/API";
import Jumbotron from "../Jumbotron/Jumbotron";
import Card from "../Card/Card";
import Book from "../Book.jsx/Book";

const Saved = () => {
  const style = {
    container: {
      marginBottom: "100px",
    },
  };

  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const handleDeleteButton = (event) => {
    event.preventDefault();
    API.DeleteBook(event.target.value)
      .then((response) => {
        console.log(response);
        getBooks();
      })
      .catch((error) => console.log(error));
  };

  const getBooks = () => {
    API.GetSavedBooks()
      .then((response) => {
        setSavedBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Jumbotron />
      <div className="container" style={style.container}>
        {savedBooks.length ? (
          <Card header="Results">
            {savedBooks.map((book) => (
              <Book
                key={book._id}
                id={book._id}
                title={book.title}
                link={book.link}
                authors={book.authors}
                image={book.image}
                description={book.description}
                handleButton={handleDeleteButton}
              />
            ))}
          </Card>
        ) : null}
      </div>
    </>
  );
};

export default Saved;
