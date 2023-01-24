import "./Nav.css"
import {ReactComponent as LittleLemonLogo} from '../../../assets/Logo.svg'

function Nav() {

    return (
        <nav className="whole-nav">
            <LittleLemonLogo height={100} width={200}/>
            <ul className="main-nav">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
};

export default Nav;