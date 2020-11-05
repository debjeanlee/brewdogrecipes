import React, { useState, useEffect } from 'react'
import BeerList from './BeerList'
import { Row, Container, Dropdown, DropdownButton } from 'react-bootstrap'
import PageList from './PageList'

function All(props) {

    const [ state, setState ] = useState("all");

    const [ beer, setBeer ] = useState(props.allBeer);
    const [ abvLow, setAbv ] = useState([...beer].sort((a,b) => {return a.abv - b.abv}));
    const [ ibuLow, setIbu ] = useState([...beer].sort((a,b) => {return a.ibu - b.ibu}));


    // console.log(abvLow.sort((a,b) => {return a.abv - b.abv} ));
    

    function handleClick(e){
        console.log('clicked');
        if (e.target.id === "abv"){
            setState("abv");
        } else if (e.target.id === "ibu"){
            setState("ibu");
        } 
    }

    
    // console.log("beer", beer);

    return (
        <div>
            <Row className="d-flex justify-content-around mt-4">
                <h1 className="text-center">BROWSE RECIPES</h1>
                {/* <PageList setPage={props.setPage} page={props.page} /> */}
            </Row>

            <Container>
                <Row>
                <DropdownButton 
                    id="dropdown-basic-button" 
                    title="Sort by.."
                    variant="Secondary"
                    >
                    <Dropdown.Item onClick={handleClick} id="abv" >ABV</Dropdown.Item>
                    <Dropdown.Item onClick={handleClick} id="ibu" >IBU</Dropdown.Item>
                    <Dropdown.Item onClick={handleClick} id="year" >Year</Dropdown.Item>
                </DropdownButton>
                </Row>
            </Container>

            {(state === "all") ? (
                <Row className="mt-3">
                    <BeerList allBeer={props.allBeer} page={props.page} setSingleBeer={props.setSingleBeer} />
                </Row>
            )
            : "" }

            {(state === "abv") ? (
                <Row className="mt-3">
                    <BeerList allBeer={abvLow} page={props.page} setSingleBeer={props.setSingleBeer} />
                </Row>
            )
            : "" }

            {(state === "ibu") ? (
                <Row className="mt-3">
                    <BeerList allBeer={ibuLow} page={props.page} setSingleBeer={props.setSingleBeer} />
                </Row>
            )
            : "" }
        
            {/* <Row className="d-flex justify-content-end mt-4 col-10">
                <PageList />
            </Row> */}
        </div>
    )
}

export default All
