const Book = ({ volumeInfo }) => {

  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-10 text-left">
            <h4>{volumeInfo.title}</h4>
          </div>
          <div className="col-sm-1">
            <a href={volumeInfo.infoLink} target="_blank" rel="noreferrer">
              <button className="btn btn-primary">
                View
              </button>
            </a>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-left">
            <h6>by {volumeInfo.authors.join(", ")}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title}/>
          </div>
          <div className="col-sm-10">
            <p>{volumeInfo.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
