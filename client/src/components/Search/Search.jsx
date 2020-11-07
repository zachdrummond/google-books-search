import { useState } from "react";
import API from "../utils/API";
import Jumbotron from "../Jumbotron/Jumbotron";
import Card from "../Card/Card";
import Form from "./Form";
import Book from "../Book.jsx/Book";

const Search = () => {
  const style = {
    container: {
      marginBottom: "100px"
    }
  }

  const [search, setSearch] = useState("");

  function getBook(event) {
    event.preventDefault();
    
    API(search)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) =>{
    setSearch(event.target.value);
  }

  return (
    <>
      <Jumbotron />
      <div className="container" style={style.container}>
        <Card header="Book Search">
          <Form search={search} handleInputChange={handleInputChange} getBook={getBook}/>
        </Card>
        <Card header="Results">
          <Book />
        </Card>
      </div>
    </>
  );
};

export default Search;
