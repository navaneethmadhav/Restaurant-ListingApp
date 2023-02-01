import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div><Navbar bg="warning" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="no logo"
          src="https://i.gifer.com/origin/7a/7a37c858c7d75aa0235d34e1c73694d0_w200.gif"
          width="80"
          height="80"
          className="d-inline-block align-top"
        />{' '}
        Find Your Taste
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header