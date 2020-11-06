import "./Card.css";

const Card = (props) => {
    return (
        <div id="card" className="card text-center">
          <div className="card-header">{props.header}</div>
          <div className="card-body">
            {props.children}
          </div>
        </div>
    );
};

export default Card;