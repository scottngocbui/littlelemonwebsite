import "./Nav.css"
import {ReactComponent as LittleLemonLogo} from './../../assets/Logo.svg'
import { Link } from 'react-router-dom'

function Nav() {

    return (
        <nav className="whole-nav">
            <div className="logo">
                <LittleLemonLogo height={100} width={200}/>
            </div>
            <ul className="main-nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>About</li>
                <li>Menu</li>
                <li><Link to="reservation">Reservations</Link></li>
                <li>Order</li>
                <li>Login</li>
            </ul>
        </nav>
    );
};

export default Nav;