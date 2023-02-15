import './Home.css'
import Promo from '../../components/Promo/Promo';
import Specials from '../../components/Specials/Specials';
import Testimonials from '../../components/Testimonials/Testimonials';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';

function Home() {
    return(
        <div className='Home'>
            <Promo />
            <Specials />
            <Testimonials />
            <About />
        </div>
    );
}

export default Home;