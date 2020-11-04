import { Button, Navbar, Nav, Form, FormControl, Image } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Home from './Home'
import Basics from './Basics'
import Beers from '../beers/Beers'
import logo from '../images/brewdog-logo.png'
import ID from '../beers/ID'
import RandomBeer from './RandomBeer'
import axios from '../beers/axios'



function Navigation() {

    const [ singleBeer, setSingleBeer ] = useState({});

    const [ random, setRandom ] = useState({});

    async function getBeerData(){
        const result = await axios.get(`/random`);
        setRandom(result.data);
      }
    
    useEffect(() => {
          getBeerData();
      }, [])
    

    return (
        <Router>
            <Navbar className="d-flex" bg="light" expand="lg" >
                    <Image src={logo} alt="logo" className="logo mr-2" />
                <NavLink className="navbar-brand" to="/">
                    DO-DOG
                </NavLink>
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/basics">Brewer Basics</NavLink>
                    <NavLink className="nav-link" to={`/beers/all`}>Browse Recipes</NavLink>
                    <NavLink className="nav-link" to={`/random`} onClick={getBeerData}>Random Beer</NavLink>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search for a beer" className="mr-sm-2" />
                    <Button variant="outline-secondary">Search</Button>
                </Form>
            </Navbar>    

            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/basics" exact>
                    <Basics />
                </Route>
                <Route path="/beers/all" exact>
                    <Beers setSingleBeer={setSingleBeer}/>
                </Route>
                <Route path="/id/:id">
                    <ID beer={singleBeer}/>
                </Route>
                <Route to="/random" exact>
                    <RandomBeer beer={random[0]} getRandom={getBeerData} setRandom={setRandom}/>
                </Route>
            </Switch>
            </Router>
    )
}

export default Navigation
