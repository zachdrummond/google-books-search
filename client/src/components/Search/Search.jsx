import Jumbotron from "../Jumbotron/Jumbotron";
import Form from "./Form";
import Results from "./Results";

const Search = () => {
  return (
    <>
      <Jumbotron />
      <div className="container">
        <Form />
        <Results />
      </div>
    </>
  );
};

export default Search;
