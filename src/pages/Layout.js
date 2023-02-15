import '../App.css'
import Nav from '../components/NavBar/Nav';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {

  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;