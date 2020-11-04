import React, {useState, useEffect} from 'react'
import { Row } from 'react-bootstrap'
import All from './All'
import axios from './axios.js'



function Beers(props) {

    const [ page, setPage ] = useState(1);
    // const [ singleBeer, setSingleBeer ] = useState({});


    // useEffect(() => {
  
    //     async function getBeerData(){
    //         const result = await axios.get(`?page=${page}`);
    //         setBeer(result.data);
    //       }
        
    //     getBeerData();
      
    // }, [page])


    
    return (
        <Row className="mt-4">        
            <All setPage={setPage} allBeer={props.allBeer} page={page} setSingleBeer={props.setSingleBeer}/>
        </Row>
    )
}

export default Beers
