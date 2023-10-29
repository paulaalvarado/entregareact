import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate();
  
    return(
        <>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>Turismo Vera</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Inicio</Nav.Link>
            <Nav.Link onClick={() => navigate('/componentes')}>Componentes</Nav.Link>
            <Nav.Link onClick={() => navigate('/administracion')}>Administración</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
        </>
    )
}

export default Header;
