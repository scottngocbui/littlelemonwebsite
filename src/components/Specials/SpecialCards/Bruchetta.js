import "./Card.css"
import Bruchetta from "../../../assets/bruchetta.svg"
function Card2(props) {
        return (
            <div className="card">
                <img src={Bruchetta} alt="Bruchetta" />
                <h2>Bruchetta</h2>
                <h3>$8.00</h3>
                <p>A slice of bread toasted in the oven or grilled, often rubbed with garlic and topped with extra-virgin olive oil, tomatoes and salt.</p>
                <button>Order Delivery</button>
            </div>
        );
    };
    export default Card2;