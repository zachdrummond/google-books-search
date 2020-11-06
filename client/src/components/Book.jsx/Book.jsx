const Book = () => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-10 text-left">
            <h4>Book Title</h4>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-primary">View</button>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-left">
            <h6>Book Author</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <img src="https://via.placeholder.com/150"/>
          </div>
          <div className="col-sm-10">
            <p>Book Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
