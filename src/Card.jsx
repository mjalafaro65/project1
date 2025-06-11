import './card.css'; 
const Card = (props) => {
    return (
        <div className="card">
            {props.image && <img src={props.image} alt={props.title} className="card-image" />}
            {props.title && <h2 className="card-title">{props.title}</h2>}
            <div className="card-content">
                {props.content}
            </div>
            <button className="card-button"  onClick={() => window.open(props.onButtonClick)}>
                Website
            </button>
        </div>
    );
};

export default Card;