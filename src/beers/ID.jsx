import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ColumnOne from './singlebeer/ColumnOne.jsx';
import ColumnThree from './singlebeer/ColumnThree.jsx';
import ColumnTwo from './singlebeer/ColumnTwo.jsx';
import Header from './singlebeer/Header.jsx';


function ID({beer}) {

    console.log(beer);
   
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const firstBrew = beer.first_brewed;
    const month = ((firstBrew.length === 4) ? null : firstBrew.slice(0,2));
    const year = ((firstBrew.length === 4) ? firstBrew : beer.first_brewed.slice(3));
    const d = new Date(year, month);
    const monthName = ((month === null) ? "" : months[d.getMonth()]);

    const dateStr = (monthName + " " + year);


    return (
        <Container>
            <Header beer={beer} date={dateStr}/>
            <Row>
                <ColumnOne beer={beer} />
                <ColumnTwo beer={beer} />
                <ColumnThree beer={beer} />
            </Row>
        </Container>
    )
}

export default ID
