import React, { useState } from 'react'
import BeerList from './BeerList'
import { Row, Container, Dropdown, DropdownButton, Form } from 'react-bootstrap'


function All(props) {

    const [ state, setState ] = useState("all");

    const beer = props.allBeer;
    const abvLow = [...beer].sort((a,b) => {return a.abv - b.abv});
    const ibuLow = [...beer].sort((a,b) => {return a.ibu - b.ibu});
    const ebcLow = [...beer].sort((a,b) => {return a.ebc - b.ebc});


    // console.log(abvLow.sort((a,b) => {return a.abv - b.abv} ));
    

    function handleClick(e){
        console.log('clicked');
        if (e.target.id === "abv"){
            setState("abv");
        } else if (e.target.id === "ibu"){
            setState("ibu");
        } else if (e.target.id === "ebc"){
            setState("ebc");
        } 
    }

    
    // console.log("beer", beer);

    return (
        <div className="mx-auto">
            <Container>
                <Row className="d-flex justify-content-around mt-4 align-content-center">
                    <h1 className="text-center">BROWSE RECIPES</h1>
                </Row>
                <Row>
                    <DropdownButton 
                        id="dropdown-basic-button" 
                        title="Sort by.."
                        variant="Secondary"
                        className="mt-2"
                        >
                        <Dropdown.Item onClick={handleClick} id="abv" >ABV</Dropdown.Item>
                        <Dropdown.Item onClick={handleClick} id="ibu" >IBU</Dropdown.Item>
                        <Dropdown.Item onClick={handleClick} id="ebc" >EBC</Dropdown.Item>
                    </DropdownButton>
                </Row>
            </Container>

            {(state === "all") ? (
                <Row className="mt-3 mx-auto col-11 px-auto">
                    <BeerList allBeer={props.allBeer} page={props.page} setSingleBeer={props.setSingleBeer} />
                </Row>
            )
            : "" }

            {(state === "abv") ? (
                <Row className="mt-3 mx-auto col-11 px-auto">
                    <BeerList allBeer={abvLow} page={props.page} setSingleBeer={props.setSingleBeer} />
                </Row>
            )
            : "" }

            {(state === "ibu") ? (
                <Row className="mt-3 mx-auto col-11 px-auto">
                    <BeerList allBeer={ibuLow} page={props.page} setSingleBeer={props.setSingleBeer} />
                </Row>
            )
            : "" }
            
            {(state === "ebc") ? (
                <Row className="mt-3 mx-auto col-11 px-auto">
                    <BeerList allBeer={ebcLow} page={props.page} setSingleBeer={props.setSingleBeer} />
                </Row>
            )
            : "" }
        
        </div>
    )
}

export default All
