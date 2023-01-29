import './App.css';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import Specials from './components/Specials/Specials';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Promo />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;