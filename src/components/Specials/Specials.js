import Card1 from "./SpecialCards/GreekSalad"
import Card2 from "./SpecialCards/Bruchetta"
import Card3 from "./SpecialCards/LemonCake"

import "./Specials.css"

function Specials() {

    return (
            <section className="specials">
                <h1>This week's Specials!</h1>
                <div className="cards">
                    <Card1 />
                    <Card2 />
                    <Card3 />
                </div>
            </section>
            );
}

export default Specials