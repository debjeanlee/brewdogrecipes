import React from 'react'
import BeerList from './BeerList'
import { Row, Container } from 'react-bootstrap'
import PageList from './PageList'

function All(props) {

    
    return (
        <div>
            <Row className="d-flex justify-content-around mt-4">
                <h1 className="text-center">BROWSE RECIPES</h1>
                {/* <PageList setPage={props.setPage} page={props.page} /> */}
            </Row>

            <Container>
                <Row>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort by..
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">ABV</a>
                            <a class="dropdown-item" href="#">IBU</a>
                            <a class="dropdown-item" href="#">Year</a>
                        </div>
                    </div>
                </Row>
            </Container>

            <Row className="mt-3">
                <BeerList allBeer={props.allBeer} page={props.page} setSingleBeer={props.setSingleBeer}/>
            </Row>
            {/* <Row className="d-flex justify-content-end mt-4 col-10">
                <PageList />
            </Row> */}
        </div>
    )
}

export default All
