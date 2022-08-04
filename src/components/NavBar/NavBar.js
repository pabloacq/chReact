import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  const { Brand, Toggle, Collapse } = Navbar;
  const {Link} = Nav
  const {Item} = NavDropdown

  return (
    <Navbar collapseOnSelect expand="lg" bg="french" variant="dark">
      <Container>
        <Brand className="logoMain" href="#home">CatShop</Brand>
        <Toggle aria-controls="responsive-navbar-nav" />
        <Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link href="#productos">Productos</Link>
          <Link href="#ofertas">Ofertas</Link>
            <NavDropdown title="Mascotas" id="collasible-nav-dropdown">
              <Item href="#gatos">Gatos</Item>
              <Item href="#perros">Perros</Item>
              <Item href="#peces">Peces</Item>
              <Item href="#aves">Aves</Item>
            </NavDropdown>
            <Link href="#servicios">Servicios</Link>  
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