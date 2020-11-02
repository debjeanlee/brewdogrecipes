import React, { useState } from 'react'
import mashpot from '../images/mashpot.png'
import boiling from '../images/boiling.png'
import fermentation from '../images/fermentation.png'
import conditioning from '../images/conditioning.png'
import { Button, Card, Accordion } from 'react-bootstrap'

function BasicInfoCard(props) {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Click me!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Click me!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default BasicInfoCard
