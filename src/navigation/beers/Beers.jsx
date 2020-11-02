import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import ABV from './ABV'
import IBU from './IBU'
import All from './All'
import FoodPairings from './FoodPairings'
import Year from './Year'


function Beers() {
    return (
        <Router>
            <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <NavLink className="nav-link" eventKey="/home" exact to="/beers/all">All</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" eventKey="link-1" to="/beers/abv">ABV</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" eventKey="link-2" to="/beers/ibu">IBU</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" eventKey="link-3" to="/beers/year">Year</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" eventKey="link-4" to="/beers/foodpairings">Food Pairings</NavLink>
            </Nav.Item>
            </Nav>

            <Switch>
            <Route path="/beers/all" exact>
                <All />
            </Route>
            <Route path="/beers/abv" exact>
                <ABV />
            </Route>
            <Route path="/beers/ibu" exact>
                <IBU />
            </Route>
            <Route path="/beers/year" exact>
                <Year />
            </Route>
            <Route path="/beers/foodpairings" exact>
                <FoodPairings />
            </Route>
        </Switch>
        </Router>
    )
}

export default Beers
