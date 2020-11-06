import Jumbotron from "../Jumbotron/Jumbotron";
import Card from "../Card/Card";
import Book from "../Book.jsx/Book";

const Saved = () => {

  const style = {
    container: {
      marginBottom: "100px"
    }
  }

  return (
    <>
      <Jumbotron />
      <div className="container" style={style.container}>
        <Card header="Saved Books">
          <Book />
        </Card>
      </div>
    </>
  );
};

export default Saved;
