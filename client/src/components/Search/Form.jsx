const Form = ({getBooks, search, handleInputChange}) => {

  return (
    <form className="form" onSubmit={getBooks}>
      <input type="text" value={search} onChange={handleInputChange} className="form-control mb-2" placeholder="Book" />
      <button type="submit" className="btn btn-primary mb-2">
        Search
      </button>
    </form>
  );
};

export default Form;
