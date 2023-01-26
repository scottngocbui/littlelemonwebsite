import "./Card.css"
import Cake from "../../../assets/lemon dessert.jpg"

function Card3(props) {
        return (
            <div className="card">
                <div className="card-picture">
                    <img src={Cake}/>
                </div>
                <h2>Lemon Cake</h2>
                <h3>$5.00</h3>
                <p>A tangy and moist dessert with a bold lemon flavor, topped with a delicate lemon glaze.</p>
                <button>Order Delivery</button>
            </div>
        );
    };
    export default Card3;