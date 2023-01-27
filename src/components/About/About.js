import "./About.css"

function About() {

    return (
            <section className="about-section">
                <div className="about-main">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>

                </div>
                <div className="about-picture">
                    <img src={require('../../assets/Mario and Adrian b.jpg')} />
                    <img src={require('../../assets/Mario and Adrian A.jpg')} />
                </div>
            </section>
            );
}

export default About