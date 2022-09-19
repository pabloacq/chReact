import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'


function NavBar() {
  const {Toggle, Collapse } = Navbar;
  const {Item} = NavDropdown

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="logoMain navbar-brand">CatShop</Link>
        <Toggle aria-controls="responsive-navbar-nav" />
        <Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link className="nav-link" to="/products">Productos</Link>
          <Link className="nav-link" to="/ofertas">Ofertas</Link>
            <NavDropdown title="Mascotas" id="collapsible-nav-dropdown">
              <Item ><Link className="dropdown-item px-0" to="/products/gato">Gatos</Link></Item>
              <Item ><Link className="dropdown-item px-0" to="/products/perro">Perros</Link></Item>
              <Item ><Link className="dropdown-item px-0" to="/products/pez">Peces</Link></Item>
              <Item ><Link className="dropdown-item px-0" to="/products/ave">Aves</Link></Item>
            </NavDropdown>
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