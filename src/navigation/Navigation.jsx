import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Image } from 'react-bootstrap'
import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Home from './Home'
import Basics from './Basics'
import All from './All'
import ABV from './ABV'
import IBU from './IBU'
import Year from './Year'
import FoodPairings from './FoodPairings'
import logo from '../images/brewdog-logo.png'


function Navigation() {

  

    return (
        <Router>
            <Navbar bg="light" expand="lg" >
                <NavLink className="navbar-brand mr-1" to="/">
                    <Image src={logo} alt="logo" className="logo" />
                </NavLink>
                <NavLink className="navbar-brand" to="/">
                    DO-DOG
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/basics">Brewer Basics</NavLink>
                    <NavDropdown title="Browse Recipes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/all">All</NavDropdown.Item>  
                        <NavDropdown.Item href="/abv">ABV</NavDropdown.Item>  
                        <NavDropdown.Item href="/ibu">IBU</NavDropdown.Item>  
                        <NavDropdown.Item href="/year">Year</NavDropdown.Item>  
                        <NavDropdown.Divider />
                            <NavDropdown.Item href="/foodpairings">Food Pairings</NavDropdown.Item>  
                        </NavDropdown>
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
                <Route path="/all" exact>
                    <All />
                </Route>
                <Route path="/abv" exact>
                    <ABV />
                </Route>
                <Route path="/ibu" exact>
                    <IBU />
                </Route>
                <Route path="/year" exact>
                    <Year />
                </Route>
                <Route path="/foodpairings" exact>
                    <FoodPairings />
                </Route>
            </Switch>
            </Router>
    )
}

export default Navigation
