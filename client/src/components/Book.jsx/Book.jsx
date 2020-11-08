const Book = ({ volumeInfo }) => {
  console.log(volumeInfo);
  const {title, infoLink, authors, imageLinks, description} = volumeInfo;
  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-10 text-left">
            <h4>{title ? title : "Untitled"}</h4>
          </div>
          <div className="col-sm-1">
            <a href={infoLink ? infoLink : null} target="_blank" rel="noreferrer">
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
            <h6>by {authors ? authors.join(", ") : "Anonymous"}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <img src={imageLinks.thumbnail} alt={title}/>
          </div>
          <div className="col-sm-10">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
