import "./Footer.css"
import {ReactComponent as LittleLemonLogo} from '../../assets/Logo.svg'

function Footer() {

    return (
        <footer className="footer-main">
            <div className="footer-logo">
                <LittleLemonLogo />
            </div>
            <ul className="footer-nav">
                <li><h2>Footer Navigation</h2></li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order</li>
                <li>Login</li>
            </ul>
            <ul className="footer-contact">
                <li><h2>Contact</h2></li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul className="footer-socials">
                <li><h2>Social Media</h2></li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
            </ul>
        </footer>
    )
}

export default Footer;