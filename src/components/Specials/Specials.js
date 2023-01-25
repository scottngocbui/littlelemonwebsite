import Card1 from "./SpecialCards/GreekSalad"
import Card2 from "./SpecialCards/Bruchetta"
import Card3 from "./SpecialCards/LemonCake"

import "./Specials.css"

function Specials() {

    return (
            <section className="specials">
                <h1>This week's Specials!</h1>
                <div className="card1">
                    <Card1 />
                </div>
                <div className="card2">
                    <Card2 />
                </div>
                <div className="card3">
                    <Card3 />
                </div>
            </section>
            );
}

export default Specials