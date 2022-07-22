import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  BottomNavigationAction,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import CartWidget from "./CartWidget";
import  {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navegador">
      <div className="">
        <NavLink to="/"><img src="https://img.icons8.com/clouds/30/000000/this-pc.png"/></NavLink>
      </div>
      <div className="">
        <nav className="navLinks">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/productos/">Productos</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </div>
      <div className="">
        <CartWidget></CartWidget>
      </div>
    </div>
  );
};
export default NavBar;
