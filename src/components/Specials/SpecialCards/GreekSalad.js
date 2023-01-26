import "./Card.css"

function Card1(props) {
        return (
            <div className="card">
                <div className="card-picture">
                    <img src={require('../../../assets/greek salad.jpg')} />
                </div>
                <h2>Greek Salad</h2>
                <h3>$11.00</h3>
                <p>A mix of vegetables like tomatoes, cucumbers, peppers, onions, and olives, dressed with olive oil and vinegar and often served with feta cheese and herbs.</p>
                <button>Order Delivery</button>
            </div>
        );
    };
    export default Card1;