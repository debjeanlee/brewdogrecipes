import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { Container, Nav } from 'react-bootstrap'
import All from './All'
import axios from './axios.js'
import ID from './ID'



function Beers(props) {


    const [ beer, setBeer ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ singleBeer, setSingleBeer ] = useState({});


    useEffect(() => {
  
        async function getBeerData(){
          const result = await axios.get(`?page=${page}`);
          setBeer(result.data);
          }
        
        getBeerData();
      
    }, [page])

    // console.log("clicked beer:", singleBeer);
    
    return (
        <Container className="mt-4">
            <Router>
                {/* <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                <NavLink className="nav-link" eventkey="/home" exact to="/beers/all">Back</NavLink>
                </Nav.Item>
            </Nav> */}

                <Switch>
                    <Route path={`/beers/all`} exact>
                        <All setPage={setPage} beer={beer} page={page} setSingleBeer={setSingleBeer}/>
                        {/* <All setPage={setPage} beer={beer} page={page} setSingleBeer={props.setSingleBeer}/> */}
                    </Route>
                    <Route path="/beers/id/:id" exact>
                        <NavLink className="nav-link" to="/beers/all">Back</NavLink>
                        <ID beer={singleBeer}/>
                    </Route>
                </Switch>
            </Router>
        </Container>
    )
}

export default Beers
