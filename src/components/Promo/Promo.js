import "./Promo.css"
function Promo() {

    return (
            <section className="promo-section">
                <main className="promo-main">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials</p>
                </main>
                <img src={require('../../assets/heropicture.jpg')}/>
            </section>
            );
}

export default Promo