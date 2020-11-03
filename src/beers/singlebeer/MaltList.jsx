import React from 'react'
import { Row } from 'react-bootstrap'

function MaltList({ malts }) {

    return (
        <>
        {malts.map((el,i) => (
            <Row className="d-flex border-bottom mb-2 py-2" key={i}>
                <span className="mr-auto">
                    {el.name}
                </span>
                {el.amount.value}
                {(el.amount.unit === "kilograms") && " kg"}
                {(el.amount.unit === "grams") && " g"}
            </Row>
            ))}
        </>
    )
}

export default MaltList
