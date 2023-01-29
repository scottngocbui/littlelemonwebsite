import "./Footer.css"

function Footer() {

    return (
        <footer className="footer-main">
            <div className="footer-logo">
                <img src={require("../../assets/whitelogo.jpg")} />
            </div>
            <ul className="footer-nav">
                <li><h3>Footer Navigation</h3></li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order</li>
                <li>Login</li>
            </ul>
            <ul className="footer-contact">
                <li><h3>Contact</h3></li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul className="footer-socials">
                <li><h3>Social Media</h3></li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
            </ul>
        </footer>
    )
}

export default Footer;