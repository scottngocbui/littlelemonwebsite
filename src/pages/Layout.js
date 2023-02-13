import '../App.css'
import Nav from '../components/NavBar/Nav';
import { Outlet } from 'react-router-dom';

function Layout() {

  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Layout;