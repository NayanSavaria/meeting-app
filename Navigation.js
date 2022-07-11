import '../navigation/navigation.css';
import { Link } from 'react-router-dom';

function Navigation (){
    return(
        <nav className='navbar'>
            <h3><Link className='logo' to="/">Zoom</Link></h3>
          <ul className='nav'>
            <li> <Link className='nav-link' to="/">Home</Link></li>
            <li><Link className='nav-link' to="/add">ADD Meeting</Link></li>
            <li><Link className='nav-link' to="/old">Old Meeting</Link></li>
            <li><Link className='nav-link' to="/important">Important</Link></li>


            </ul>
        </nav>

    )
}

export default Navigation;