const Book = ({
  title,
  link,
  authors,
  image,
  description,
  handleButton,
  id,
}) => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-10 text-left">
            <h4>{title ? title : "Untitled"}</h4>
          </div>
          <div className="col-sm-1">
            <a href={link ? link : null} target="_blank" rel="noreferrer">
              <button className="btn btn-primary">View</button>
            </a>
          </div>
          <div className="col-sm-1">
            <button
              className="btn btn-primary"
              onClick={handleButton}
              value={id}
            >
              {window.location.pathname === "/save" ? "Save" : "Delete"}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-left">
            <h6>by {authors ? authors.join(", ") : "Anonymous"}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <img src={image} alt={title} />
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
