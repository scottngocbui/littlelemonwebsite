import "./About.css"

function About() {

    return (
            <section className="about-section">
                <div className="about-main">
                    <h1>Meet the Chefs!</h1>
                    <h2>Mario and Adrian</h2>
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>

                </div>
                <div className="about-picture">
                    <div className="picture-a">
                        <img src={require('../../assets/Mario and Adrian A.jpg')} />
                    </div>
                    <div className="picture-b">
                        <img src={require('../../assets/Mario and Adrian b.jpg')} />
                    </div>
                </div>
            </section>
            );
}

export default About