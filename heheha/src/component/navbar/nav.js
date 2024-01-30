import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css';

function Menusor() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Autowebshop 2024</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#autoink">Autóink</Nav.Link>
            <Nav.Link href="#rolunk">Rólunk</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menusor;