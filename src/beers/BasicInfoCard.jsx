import React, { useState } from 'react'
import { Card, Accordion, Image, Row, Col, Container } from 'react-bootstrap'

function BasicInfoCard(props) {

    const [ state, setState ] = useState("close");
    function toggle(){
        if (state === "close"){
            setState("open");
       } else if (state === "open"){
           setState("close");
       }
    }
    // console.log(props.info);

    return (
        <Container className="mb-2">
            <Card className="col-sm-12 col-md-10 m-auto">
                <Accordion defaultActiveKey="0">
                    <Row className="d-flex justify-content-center">
                        <Col md={6} sm={12} className="info-col">
                            <Image src={props.imgURL} alt="" className="info-card-img" />
                        </Col>
                        <Col md={6} sm={12} className="text-left my-auto">
                            <Accordion.Toggle as={Card.Body} onClick={toggle} eventKey={props.title}>
                                <h1 className="mouseover">{props.title} 
                                {(state === "close") ? " +" : " -"}
                                </h1>
                            </Accordion.Toggle>
                        </Col>
                    </Row>
                    <Row>
                        <Container className="mt-0 col-11">
                            <Accordion.Collapse eventKey={props.title}>
                            <Card.Body className="pt-0">{props.info}</Card.Body>
                            </Accordion.Collapse>
                        </Container>
                    </Row>
                </Accordion>
            </Card>
        </Container>
    )
}

export default BasicInfoCard
