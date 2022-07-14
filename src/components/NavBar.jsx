import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  BottomNavigationAction,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="navegador">
      <div className="">
        <Button href="#">Logo</Button>
      </div>
      <div className="">
        <nav className="">
          <Button href="#">Inicio</Button>
          <Button href="#">Productos</Button>
          <Button href="#">Nosotros</Button>
          <Button href="#">Contacto</Button>
        </nav>
      </div>
      <div className="">
        <CartWidget></CartWidget>
      </div>
    </div>
  );
};
export default NavBar;
