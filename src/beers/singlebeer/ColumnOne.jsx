import React from 'react'
import { Col, Jumbotron } from 'react-bootstrap'
import Method from './Method'

function ColumnOne({beer}) {
    return (
        <Col md={4} sm={6} className="mx-auto">
            <h3>THIS BEER IS</h3>
            <Jumbotron className="pt-4 pb-1">
                <p>{beer.description}</p>
            </Jumbotron>
        
            <h3>BASICS</h3>
            <Jumbotron className="pt-4 pb-1">
                <p className="d-flex border-bottom py-2">
                    <strong className="mr-auto">VOLUME</strong> 
                    {beer.volume.value} {(beer.volume.unit === "litres") ? "L" : "gal" }
                </p>
                <p className="d-flex border-bottom py-2">
                    <strong className="mr-auto">BOIL VOLUME</strong> 
                    {beer.boil_volume.value} {(beer.boil_volume.unit === "litres") ? "L" : "gal" }
                </p>
                <p className="d-flex border-bottom py-2">
                    <strong className="mr-auto">ABV</strong> 
                    {beer.abv} %
                </p>
                <p className="d-flex border-bottom py-2">
                    <strong className="mr-auto">Target FG</strong> 
                    {beer.target_fg}
                </p>
                <p className="d-flex border-bottom py-2">
                    <strong className="mr-auto">Target OG</strong> 
                    {beer.target_og}
                </p>
                <p className="d-flex border-bottom py-2">
                    <strong className="mr-auto">EBC</strong> 
                    {beer.ebc}
                </p>
                <p className="d-flex border-bottom py-2">
                    <strong className="mr-auto">SRM</strong> 
                    {beer.srm}
                </p>
                <p className="d-flex border-bottom py-2">
                    <strong className="mr-auto">PH</strong> 
                    {beer.ph}
                </p>
                <p className="d-flex border-bottom py-2">
                    <strong className="mr-auto">ATTENUATION LEVEL</strong> 
                    {beer.attenuation_level}
                </p>
            </Jumbotron>
            <Method method={beer.method}/>
        </Col>
    )
}

export default ColumnOne
