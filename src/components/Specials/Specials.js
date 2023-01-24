import Card from "./SpecialCards/Card"
import "./Specials.css"

function Specials() {

    return (
            <section>
                <h1>This week's Specials!</h1>
                <main>
                    <Card
                        name = "Greek Salad"
                        price = "$11.00"
                        description = "A mix of vegetables like tomatoes, cucumbers, peppers, onions, and olives, dressed with olive oil and vinegar and often served with feta cheese and herbs."
                    />
                    <Card
                        name = "Bruchetta"
                        price = "$8.00"
                        description = "A slice of bread toasted in the oven or grilled, often rubbed with garlic and topped with extra-virgin olive oil, tomatoes and salt."
                    />
                    <Card
                        name = "Lemon Cake"
                        price = "$5.00"
                        description = "A tangy and moist dessert with a bold lemon flavor, topped with a delicate lemon glaze."
                    />
                </main>
            </section>
            );
}

export default Specials