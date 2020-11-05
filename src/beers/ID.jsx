import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ColumnOne from './singlebeer/ColumnOne.jsx';
import ColumnThree from './singlebeer/ColumnThree.jsx';
import ColumnTwo from './singlebeer/ColumnTwo.jsx';
import Header from './singlebeer/Header.jsx';


function ID({beer}) {

    // console.log("beer in ID: ", beer);

    return (
        <Container>
            <Header beer={beer}/>
            <Row>
                <ColumnOne beer={beer} />
                <ColumnTwo beer={beer} />
                <ColumnThree beer={beer} />
            </Row>
        </Container>
    )
}

export default ID
