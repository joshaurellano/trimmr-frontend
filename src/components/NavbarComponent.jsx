import { Navbar, Container } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{
          fontWeight:'bold'
        }}>Trimmr</Navbar.Brand>
        
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
