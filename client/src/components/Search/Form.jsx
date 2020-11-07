import API from "../utils/API";

const Form = (props) => {

  return (
    <form className="form" onSubmit={props.getBook}>
      <input type="text" className="form-control mb-2" placeholder="Book" />
      <button type="submit" className="btn btn-primary mb-2">
        Search
      </button>
    </form>
  );
};

export default Form;
