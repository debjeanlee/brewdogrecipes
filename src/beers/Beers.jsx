import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import ABV from './ABV'
import IBU from './IBU'
import All from './All'
import FoodPairings from './FoodPairings'
import Year from './Year'
import axios from './axios.js'



function Beers(props) {


    const [ beer, setBeer ] = useState([]);
    const [ page, setPage ] = useState(1);
    // const [ singleBeerId, setBeerId ] = useState();
    const [ singleBeer, setSingleBeer ] = useState({});


    useEffect(() => {
  
        async function getBeerData(){
          const result = await axios.get(`?page=${page}`);
          setBeer(result.data);
          }
        
        getBeerData();
      
    }, [page])

    console.log("clicked beer:", singleBeer);
    
    return (
        <Router>
            <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <NavLink className="nav-link" eventkey="/home" exact to="/beers/all">All</NavLink>
            </Nav.Item>
            </Nav>

            <Switch>
            <Route path="/beers/all" exact>
                <All setPage={setPage} beer={beer} page={page} setSingleBeer={setSingleBeer}/>
            </Route>
            
        </Switch>
        </Router>
    )
}

export default Beers
