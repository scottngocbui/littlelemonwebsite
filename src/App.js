import './App.css';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import Specials from './components/Specials/Specials';
import Testimonials from './components/Testimonials/Testimonials';

function App() {

  return (
    <div className="App">
      <Header />
      <Promo />
      <Specials />
      <Testimonials />
    </div>
  );
}

export default App;