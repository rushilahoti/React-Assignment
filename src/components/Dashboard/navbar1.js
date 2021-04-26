import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

class Display extends Component {
  render() {
    return (
      <div  >
        <Navbar   variant="dark">
          <Navbar.Brand href="#home">Motivation</Navbar.Brand>
          <br />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#all">All</Nav.Link>
              <Nav.Link href="#articles">Articles</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link href="#podcast">Podcast</Nav.Link>
              <Nav.Link href="#video">Video</Nav.Link>
              <Nav.Link eventKey={2} href="#downloads">
                Downloads
                </Nav.Link>
            </Nav>
          </Navbar>
        </Navbar>
      </div>

    )
  }
}
export default Display;