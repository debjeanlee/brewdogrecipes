import { Navbar, Nav, Form, Image } from 'react-bootstrap'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import axios from '../beers/axios'
import Home from './Home'
import Basics from './Basics'
import Beers from '../beers/Beers'
import logo from '../images/brewdog-logo.png'
import ID from '../beers/ID'
import RandomBeer from './RandomBeer'
import Search from './Search'
import Results from './Results'
import Axios from 'axios'



function Navigation({ allBeer, random, setRandom }) {

    const [ singleBeer, setSingleBeer ] = useState({});


    function getNewBeer(){
        let newIndex = Math.floor(Math.random() * 326);
        setRandom(allBeer[newIndex]);
    }


    const [ searchInput, setSearchInput ] = useState("");
    const [ searchResults, setSearchResults ] = useState([]);

    function handleChange(e){
        setSearchInput(e.target.value);
    }

    let beer = axios.get(`?beer_name=${searchInput}&per_page=80`);
    let yeast = axios.get(`?yeast=${searchInput}&per_page=80`);
    let hops = axios.get(`?hops=${searchInput}&per_page=80`);
    let malt = axios.get(`?malt=${searchInput}&per_page=80`);
    let food = axios.get(`?food=${searchInput}&per_page=80`);

    function submit(){
        let str = searchInput.replace(" ", "_");
        document.getElementById("searchbeer").value = "";

        let resultsArr = [];
            Axios.all([beer, yeast, hops, malt, food])
            .then(
                Axios.spread((...res) => {
                    const beerRes = res[0].data;
                    const yeastRes = res[1].data;
                    const hopsRes = res[2].data;
                    const maltRes = res[3].data;
                    const foodRes = res[4].data;
                    // console.log(beerRes, yeastRes, hopsRes, maltRes, foodRes);
                    // console.log(beerRes.data, 
                    //     yeastRes.data, 
                    //     hopsRes.data, 
                    //     maltRes.data, 
                    //     foodRes.data);
                    resultsArr = beerRes.data.concat(yeastRes.data, hopsRes.data, maltRes.data, foodRes.data);
                    // console.log("concat", beerRes);
                    // console.log("results concat", resultsArr);
                    setSearchResults([resultsArr]);
                    // console.log("search res", searchResults);
                })
            )

            // setSearchResults([res.data]);
            // console.log("res.data:", res.data)
       
    } 
    
    // console.log("all beer", allBeer);
    // console.log("random", random);

    return (
        <Router>
            <Navbar className="d-flex" bg="light" expand="lg" >
                    <Image src={logo} alt="logo" className="logo mr-2" />
                <NavLink className="navbar-brand" to="/">
                    DO-DOG
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/basics">Brewer Basics</NavLink>
                    <NavLink className="nav-link" to={`/beers/all`}>Browse Recipes</NavLink>
                    <NavLink className="nav-link" to={`/random`} onClick={getNewBeer}>Random Beer</NavLink>
                </Nav>
                <Form inline>
                    <Search 
                        handleChange={handleChange} 
                        submit={submit}
                    />
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
                    <Beers 
                        allBeer={allBeer} 
                        setSingleBeer={setSingleBeer}
                    />
                </Route>
                <Route path="/id/:id">
                    <ID beer={singleBeer}/>
                </Route>
                <Route path="/random" exact>
                    <RandomBeer 
                        beer={random} 
                        getNewBeer={getNewBeer}
                    />
                </Route>
                <Route path="/search">
                   <Results />
                </Route>
            </Switch>
            </Router>
    )
}

export default Navigation
