import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'


function NavBar() {
  const {Toggle, Collapse } = Navbar;
  // const {Link} = Nav
  const {Item} = NavDropdown

  return (
    <Navbar collapseOnSelect expand="lg" bg="french" variant="dark">
      <Container>
        <Link to="/" className="logoMain navbar-brand">CatShop</Link>
        <Toggle aria-controls="responsive-navbar-nav" />
        <Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link className="nav-link" to="/productos">Productos</Link>
          <Link className="nav-link" to="/ofertas">Ofertas</Link>
            <NavDropdown title="Mascotas" id="collapsible-nav-dropdown">
              <Item ><Link className="dropdown-item px-0" to="/category/gato">Gatos</Link></Item>
              <Item ><Link className="dropdown-item px-0" to="/category/perro">Perros</Link></Item>
              <Item ><Link className="dropdown-item px-0" to="/category/pez">Peces</Link></Item>
              <Item ><Link className="dropdown-item px-0" to="/category/ave">Aves</Link></Item>
            </NavDropdown>
            <Link className="nav-link" to="/servicios">Servicios</Link>  
          </Nav>
        </Collapse>
        <Nav>
          <CartWidget/>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;