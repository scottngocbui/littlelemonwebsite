import "./Promo.css"

function Promo() {

    return (
            <section className="promo-section">
                <div className="promo-main">
                    <h1>Hungry?</h1>
                    <h2>Reserve a table with us!</h2>
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials</p>
                    <button>
                        Reserve a Table
                    </button>
                </div>
                <div className="promo-picture">
                    <img src={require('../../assets/heropicture.jpg')}/>
                </div>
            </section>
            );
}

export default Promo