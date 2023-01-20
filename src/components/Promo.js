function Promo(props) {

    const promoContainerStyle = {
        backgroundColor: "#495E57"
    }

    const h1Style = {
        color: "#F4CE14",
        fontSize: "64px"
    }

    const h2Style = {
        color: "#EDEFEE",
        fontSize: "40px"
    }

    const paragraphStyle = {
        color: "#EDEFEE",
        fontSize: "18px"
    }

    const imageStyle = {
        width: "400px"
    }

    return (
            <section className="promo-section" style={promoContainerStyle}>
                <h1 style={h1Style}>
                    {props.heading}
                </h1>
                <h2 style={h2Style}>
                    {props.promoSubHeading}
                </h2>
                <p style={paragraphStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis tellus id mauris varius congue. Integer enim erat, malesuada non lectus eget, venenatis viverra libero. Phasellus id leo sit amet orci euismod euismod. </p>
                <img src={require('../assets/heropicture.jpg')} style={imageStyle}/>
            </section>
            );
}

export default Promo