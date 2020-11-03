import React from 'react'
import BeerList from './BeerList'
import { Row } from 'react-bootstrap'
import PageList from './PageList'

function All(props) {

    
    return (
        <div>
            <Row className="d-flex justify-content-around mt-4">
                <h1 className="text-center">BROWSE RECIPES</h1>
                <PageList setPage={props.setPage} page={props.page} />
            </Row>
            <Row className="mt-3">
                <BeerList beer={props.beer} page={props.page} setSingleBeer={props.setSingleBeer}/>
            </Row>
            {/* <Row className="d-flex justify-content-end mt-4 col-10">
                <PageList setPage={props.setPage} page={props.page} />
            </Row> */}
        </div>
    )
}

export default All
