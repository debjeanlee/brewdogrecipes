import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import axios from './axios.js'
import Header from './singlebeer/Header.jsx';


function ID({ beer }) {

    const {id} = useParams();
    
    // const [ beer, setBeer ] = useState({});

    // useEffect(() => {
  
    //     async function getBeerData(){
    //       const result = await axios.get(`?ids=${id}`);
    //       setBeer(result.data[0]);
    //       }
        
    //     getBeerData();
      
    // }, [])

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const firstBrew = beer.firse_brewed;
    const month = firstBrew.slice(0,2);
    const year = firstBrew.slice(3);
    const d = new Date(year, month);
    const monthName = months[d.getMonth()];


    const dateStr = (`${monthName} ${year}`);
    

    console.log(beer);

    return (
        <Container>
            <h1>ONE BEER</h1>
            <Header date={dateStr} name={beer.name} />
            Name: {beer.name} <br />
            Tagline: {beer.tagline} <br />
            MAKE COMPONENTS FOR DIFFERENT PARTS TMD
        </Container>
    )
}

export default ID
