import React from 'react'
import { Col, Jumbotron, Row } from 'react-bootstrap'
import hops from '../../images/hops.png'
import malts from '../../images/malts.png'
import yeast from '../../images/yeast.png'
import food from '../../images/food.png'
import HopsList from './HopsList'
import MaltList from './MaltList'

function ColumnTwo({ beer }) {
    
    // console.log(beer);
    
    return (
        <Col md={4} sm={6} className="mx-auto">
            <h3>INGREDIENTS</h3>
            <Jumbotron className="pt-4 pb-1">
                <Row className="mb-3">
                    <img className="id-icon mr-3" src={malts} alt="" />
                    <h4 className="my-auto">MALT</h4>
                </Row>
                <MaltList malts={beer.ingredients.malt} />

                <Row className="mb-0 mt-4">
                    <img className="id-icon mr-3" src={hops} alt="" />
                    <h4 className="my-auto">HOPS</h4>
                </Row>
                
                <Row className="d-flex border-bottom mb-3 py-2 justify-content-end">
                    <div className="col-2">(g)</div>
                    <div className="col-2">Add</div>
                    <div className="col-3">Attribute</div>
                </Row>
                <HopsList hops={beer.ingredients.hops} />

                <Row className="mt-4 mb-3">
                    <img className="id-icon mr-3" src={yeast} alt="" />
                    <h4 className="my-auto">YEAST</h4>
                </Row>
                <Row className="d-flex border-bottom mb-3 py-2">
                    {beer.ingredients.yeast}
                </Row>
            </Jumbotron>
        
            <h3>FOOD PAIRING</h3>
            <Jumbotron className="pt-4 pb-3">
                <Row className="mb-3">
                    <img className="id-icon mr-3" src={food} alt="" />
                </Row>

                {beer.food_pairing.map((el, i) => (
                    <Row className="d-flex border-bottom mb-2 py-2" key={i}>
                        {el}
                    </Row>
                ))}

            </Jumbotron>
        </Col>
    )
}

export default ColumnTwo
