import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './singlebeer/Header.jsx';


function ID({beer}) {

   
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const firstBrew = beer.first_brewed;
    const month = firstBrew.slice(0,2);
    const year = firstBrew.slice(3);
    const d = new Date(year, month);
    const monthName = months[d.getMonth()];


    const dateStr = (`${monthName} ${year}`);
    

    console.log(beer);

    return (
        <Container>
            {/* <h1>ONE BEER</h1> */}
            <Header beer={beer} date={dateStr}/>
           
            MAKE COMPONENTS FOR DIFFERENT PARTS TMD
        </Container>
    )
}

export default ID
