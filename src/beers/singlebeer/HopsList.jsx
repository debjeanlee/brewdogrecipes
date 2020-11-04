import React from 'react'
import { Row } from 'react-bootstrap'

function HopsList({ hops }) {

    // console.log(hops);

    return (
        <>
        {hops.map((el,i) => (
            <Row className="d-flex border-bottom mb-2 py-2" key={i}>
                <div className="col-4 pl-0">{el.name}</div>
                <div className="col-2 p-0">{el.amount.value}g</div>
                <div className="col-3 text-center pl-3">{el.add}</div>
                <div className="col-3 text-center pr-0">{el.attribute}</div>
            </Row>
            ))}
        </>
    )
}

export default HopsList
