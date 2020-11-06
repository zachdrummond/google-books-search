const Form = () => {
  return (
      <div className="card text-center">
        <div className="card-header">Book Search</div>
        <div className="card-body">
          <form className="form">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Book"
            />
            <button type="submit" className="btn btn-primary mb-2">
              Search
            </button>
          </form>
        </div>
      </div>
  );
};

export default Form;
