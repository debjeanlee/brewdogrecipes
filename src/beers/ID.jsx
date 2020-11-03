import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './singlebeer/Header.jsx';


function ID({beer}) {

   
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const firstBrew = beer.first_brewed;
    const month = ((firstBrew.length === 4) ? null : firstBrew.slice(0,2));
    const year = ((firstBrew.length === 4) ? firstBrew : beer.first_brewed.slice(3));
    const d = new Date(year, month);
    const monthName = ((month === null) ? "" : months[d.getMonth()]);


    const dateStr = (monthName + " " + year);
    
    console.log(beer);
    console.log(firstBrew.length);
    console.log(month, year, d, monthName);
    console.log(dateStr);


    return (
        <Container>
            {/* <h1>ONE BEER</h1> */}
            <Header beer={beer} date={dateStr}/>
           
            MAKE COMPONENTS FOR DIFFERENT PARTS TMD
        </Container>
    )
}

export default ID
