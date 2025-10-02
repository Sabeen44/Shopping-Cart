import { Link, NavLink } from "react-router-dom"; 
import Logo from "../assets/logo.jpg"
import "./Header.css";

 const Header = () => {
  return (
    <header>
      <Link className="logo" to="/" >
        <img  src={Logo} alt="Shopmate Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link" end>Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: 2</span>
      </Link>
    </header>
  )
}

export default Header;