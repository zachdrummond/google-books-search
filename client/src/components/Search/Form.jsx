const Form = (props) => {

  return (
    <form className="form" onSubmit={props.getBook}>
      <input type="text" value={props.search} onChange={props.handleInputChange} className="form-control mb-2" placeholder="Book" />
      <button type="submit" className="btn btn-primary mb-2">
        Search
      </button>
    </form>
  );
};

export default Form;
