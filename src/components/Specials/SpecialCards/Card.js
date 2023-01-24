import "./Card.css"

function Card(props) {
        return (
            <div className="card">
                <h2>{props.name}</h2>
                <h2>{props.price}</h2>
                <div>
                    <p>{props.description}</p>
                </div>
            </div>
        );
    };
    export default Card;