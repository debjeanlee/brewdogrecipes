import React, {useState} from 'react'
import { Row } from 'react-bootstrap'
import All from './All'



function Beers(props) {

    const [ page, setPage ] = useState(1);
    // const [ singleBeer, setSingleBeer ] = useState({});


    return (
        <Row className="mt-4">        
            <All setPage={setPage} allBeer={props.allBeer} page={page} setSingleBeer={props.setSingleBeer}/>
        </Row>
    )
}

export default Beers
