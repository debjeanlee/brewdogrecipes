import React from 'react'
import mashing from '../../images/mashing.png'
import fermentation from '../../images/fermentation2.png'
import twist from '../../images/twist.png'
import { Jumbotron, Row } from 'react-bootstrap'

function Method({ method }) {

    // console.log(method.fermentation.temp);

    return (
        <div>
            <h3>METHOD/TIMINGS</h3>
            <Jumbotron className="pt-4 pb-1">
                <Row className="mb-3">
                    <img className="id-icon mr-3" src={mashing} alt="" />
                    <h4 className="my-auto">MASH TEMP</h4>
                </Row>
                <Row className="d-flex border-bottom mb-3 py-2">
                    <span className="mr-auto">
                        {method.mash_temp[0].temp.value}
                        {(method.mash_temp[0].temp.unit === "celsius") ? "\xB0C" : "\xB0F" }
                    </span>

                        {(method.mash_temp[0].duration) ? (`${method.mash_temp[0].duration} mins`) : ""}                    
                </Row>
                <Row className="mb-3">
                    <img className="id-icon mr-3" src={fermentation} alt="" />
                    <h4 className="my-auto">FERMENTATION</h4>
                </Row>
                <Row className="d-flex border-bottom mb-3 py-2">
                    <span className="mr-auto">
                        {method.fermentation.temp.value}
                        {(method.fermentation.temp.unit === "celsius") ? "\xB0C" : "\xB0F" }
                    </span>              
                </Row>
                {(method.twist !== null) ? (
                    <>
                        <Row className="mb-3">
                            <img className="id-icon mr-3" src={twist} alt="" />
                            <h4 className="my-auto">TWIST</h4>
                        </Row>
                        <Row className="d-flex border-bottom mb-3 py-2">
                            {method.twist}
                        </Row>
                    </>
                ) :
                "" }
            </Jumbotron>
        </div>
    )
}

export default Method
