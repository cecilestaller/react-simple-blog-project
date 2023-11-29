import { NavLink } from "react-router-dom";
import './Nav.scss'

const Nav = () => {
    return (  
        <header>
            <nav>
                <h1>My Life</h1>
                <div>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
            </nav>
        </header>
    );
}
 
export default Nav;