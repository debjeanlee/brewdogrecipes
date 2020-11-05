import React from 'react'
import { Jumbotron, Row } from 'react-bootstrap'

function Header({ beer }) {

    
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const firstBrew = beer.first_brewed;
    const month = ((firstBrew.length === 4) ? null : firstBrew.slice(0,2));
    const year = ((firstBrew.length === 4) ? firstBrew : beer.first_brewed.slice(3));
    const d = new Date(year, month);
    const monthName = ((month === null) ? "" : months[d.getMonth()]);

    const dateStr = (monthName + " " + year);

    
    return (
        <Jumbotron className="py-3">
            <Row className="d-flex justify-content-between">
                <h4 className="mb-0">#{beer.id}</h4>
                <h4 className="mb-0">{dateStr}</h4>
            </Row>
            <Row>
                <h1>{beer.name}</h1>
            </Row>
            <Row className="solid-5 my-2 py-3 d-flex">
                <h2 className="mr-auto my-auto">{beer.tagline}</h2>
                <h5 className="mr-2 my-auto">ABV {beer.abv}% |</h5>
                <h5 className="mr-2 my-auto">IBU {beer.ibu} |</h5>
                <h5 className="mr-2 my-auto">OG {beer.target_og}</h5>
            </Row>
        </Jumbotron>
    )
}

export default Header
