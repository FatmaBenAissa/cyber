import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navbarr() {
  const [emoji, setEmoji] = useState('');

  const emojis = ['😂', '🤣', '😜', '😎', '🤪', '🤖', '👽'];

  


  const handleClick = () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(randomEmoji);
  };
  return (

  <Navbar expand="lg" className="bg-body-tertiary2">
      <Container fluid>
        <Navbar.Brand href="#"><Link style={{textDecoration:"none", color:"white"}} to="/" >Crypto</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', display: "flex",
    justifyContent: "center",
    
    width: "88%" }}
            navbarScroll
          >
           
            <Nav.Link href="#action1"><Link style={{textDecoration:"none", color:"white"}} to="/home2" >Encryption</Link></Nav.Link>
            <Nav.Link href="#action2"><Link style={{textDecoration:"none", color:"white"}} to="/algorithms" >Algorithms</Link></Nav.Link>
             <Nav.Link href="#action2"><Link style={{textDecoration:"none", color:"white"}} to="/application">Application</Link></Nav.Link>
       
          </Nav>
          <Form className="d-flex">
            
            <Button variant="outline-success" style={{width:"137px", height:"43px"}} onClick={handleClick}>Click me!</Button>
             {emoji && <div style={{ fontSize: '2em' }}>{emoji}</div>}
       
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navbarr