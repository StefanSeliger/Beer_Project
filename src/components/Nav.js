import { Link } from 'react-router-dom'
import NavLogo from '../img/bier1.jpg' 


const Nav = () => {
    return (
        <footer>
            <Link to="/">
                <img src={NavLogo} alt="Logo" />
            </Link >
        </footer >
    );
}

export default Nav;