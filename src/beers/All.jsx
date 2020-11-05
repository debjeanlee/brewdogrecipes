import React, { useState } from 'react'
import BeerList from './BeerList'
import { Row, Container, Dropdown, DropdownButton, Button } from 'react-bootstrap'


function All(props) {

    const [ state, setState ] = useState("all");
    

    const beer = props.allBeer;
    const abvLow = [...beer].sort((a,b) => {return a.abv - b.abv});
    const abvHigh = [...abvLow].reverse();
    const ibuLow = [...beer].sort((a,b) => {return a.ibu - b.ibu});
    const ibuHigh = [...ibuLow].reverse();
    const ebcLow = [...beer].sort((a,b) => {return a.ebc - b.ebc});
    const ebcHigh = [...ebcLow].reverse();


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
    const [ sort, setSort ] = useState("low");
    const triangle = ((sort === "high") ? <span>&#9650;</span> : <span>&#9660;</span>)

    function sortAcc(){
        if (sort === "high"){
            setSort("low");
        } else {
            setSort("high");
        }
    }
    

    // console.log("beer", beer);

    return (
        <div className="mx-auto">
            <Container>
                <Row>
                    <h1 className="col-md-4 col-sm-12">BROWSE RECIPES</h1>
                    <Row className="d-flex justify-content-between">
                        <DropdownButton 
                            id="dropdown-basic-button" 
                            title="Sort by.."
                            variant="Secondary"
                            className="mt-2 col-md-3 col-sm-4"
                            size="lg"
                            >
                            <Dropdown.Item onClick={handleClick} id="abv" >ABV</Dropdown.Item>
                            <Dropdown.Item onClick={handleClick} id="ibu" >IBU</Dropdown.Item>
                            <Dropdown.Item onClick={handleClick} id="ebc" >EBC</Dropdown.Item>
                        </DropdownButton>
                    {(state === "abv") ? <Button variant="secondary" className="col-md-4 col-sm-6" onClick={sortAcc}>ABV {triangle}</Button> : ""}
                    {(state === "ibu") ? <Button variant="secondary" className="col-md-4 col-sm-6" onClick={sortAcc}>IBU {triangle}</Button> : ""}
                    {(state === "ebc") ? <Button variant="secondary" className="col-md-4 col-sm-6" onClick={sortAcc}>EBC {triangle}</Button> : ""}
                    </Row>
                </Row>
            </Container>

            {(state === "all") ? (
                <Row className="mt-3 mx-auto col-11 px-auto">
                    <BeerList allBeer={props.allBeer} setSingleBeer={props.setSingleBeer} />
                </Row>
            )
            : "" }

            {(state === "abv") ? (
                <Row className="mt-3 mx-auto col-11 px-auto">
                    {(sort === "high") ? 
                    <BeerList allBeer={abvHigh} setSingleBeer={props.setSingleBeer} />
                    :
                    <BeerList allBeer={abvLow} setSingleBeer={props.setSingleBeer} />
                }
                </Row>
            )
            : "" }

            {(state === "ibu") ? (
                <Row className="mt-3 mx-auto col-11 px-auto">
                    {(sort === "high") ? 
                    <BeerList allBeer={ibuHigh} setSingleBeer={props.setSingleBeer} />
                    :
                    <BeerList allBeer={ibuLow} setSingleBeer={props.setSingleBeer} />
            }
                </Row>
            )
            : "" }
            
            {(state === "ebc") ? (
                <Row className="mt-3 mx-auto col-11 px-auto">
                    {(sort === "high") ? 
                    <BeerList allBeer={ebcHigh} setSingleBeer={props.setSingleBeer} />
                    :
                    <BeerList allBeer={ebcLow} setSingleBeer={props.setSingleBeer} />
            }
                </Row>
            )
            : "" }
        
        </div>
    )
}

export default All
