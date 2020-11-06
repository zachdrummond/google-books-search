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

  return (
    <>
      <Jumbotron />
      <div className="container" style={style.container}>
        <Card header="Book Search">
          <Form />
        </Card>
        <Card header="Results">
          <Book />
        </Card>
      </div>
    </>
  );
};

export default Search;
