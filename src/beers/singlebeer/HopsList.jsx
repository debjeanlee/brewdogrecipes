import React from 'react'
import { Row } from 'react-bootstrap'

function HopsList({ hops }) {

    console.log(hops);

    return (
        <>
        {hops.map((el,i) => (
            <Row className="d-flex border-bottom mb-2 py-2" key={i}>
                <div className="col-5">{el.name}</div>
                <div className="col-2">{el.amount.value}g</div>
                <div className="col-2">{el.add}</div>
                <div className="col-3 text-center">{el.attribute}</div>
            </Row>
            ))}
        </>
    )
}

export default HopsList
