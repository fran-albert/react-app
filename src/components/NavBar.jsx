import "bootstrap/dist/css/bootstrap.min.css";
import { AppBar, Button } from '@mui/material';
import CartWidget from './CartWidget'

  
const NavBar = () => {
  return (
        <div className="principal">
          <div className="">
            <Button><a href="#">Logo</a></Button>
          </div>
          <div className="n">
            <nav className="">
            <Button><a href="#">Inicio</a></Button>
            <Button><a href="#">Productos</a></Button>
            <Button><a href="#">Nosotros</a></Button>
            <Button><a href="#">Contacto</a></Button>
            </nav>
          </div>
          <div className="">
          <CartWidget></CartWidget>
          </div>
        </div>
  );
};
export default NavBar;