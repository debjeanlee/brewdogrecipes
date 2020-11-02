import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Image } from 'react-bootstrap'
import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Home from './Home'
import Basics from './Basics'
import Beers from './beers/Beers'
import logo from '../images/brewdog-logo.png'


function Navigation() {

  

    return (
        <Router>
            <Navbar bg="light" expand="lg" >
                <NavLink className="navbar-brand mr-1" to="/">
                    <Image src={logo} alt="logo" className="logo mr-2" />
                    DO-DOG
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/basics">Brewer Basics</NavLink>
                    <NavLink className="nav-link" to="/beers/all">Browse Recipes</NavLink>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search Recipes" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>    

            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/basics" exact>
                    <Basics />
                </Route>
                <Route path="/beers/all" exact>
                    <Beers />
                </Route>
            </Switch>
            </Router>
    )
}

export default Navigation
