import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="french" variant="dark">
      <Container>
        <Navbar.Brand className="logoMain" href="#home">CatShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#productos">Productos</Nav.Link>
          <Nav.Link href="#ofertas">Ofertas</Nav.Link>
            <NavDropdown title="Mascotas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#gatos">Gatos</NavDropdown.Item>
              <NavDropdown.Item href="#perros">Perros</NavDropdown.Item>
              <NavDropdown.Item href="#peces">Peces</NavDropdown.Item>
              <NavDropdown.Item href="#aves">Aves</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#servicios">Servicios</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <CartWidget/>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;