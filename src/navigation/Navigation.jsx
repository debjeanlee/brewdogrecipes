import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import React from 'react'

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">DO-DOG</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#link">Brew</Nav.Link>
                <NavDropdown title="Browse Recipes" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">ABV</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">IBU</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Food Pairings</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search Recipes" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar>    
    )
}

export default Navigation
