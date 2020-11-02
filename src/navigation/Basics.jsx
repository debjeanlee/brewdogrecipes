import React from 'react'
import { Container } from 'react-bootstrap'
import { brewInfo } from '../brewinginfo'
import mashpot from '../images/mashpot.png'
import boiling from '../images/boiling.png'
import fermentation from '../images/fermentation.png'
import conditioning from '../images/conditioning.png'
import BasicInfoCard from '../components/BasicInfoCard'

function Basics() {

    // console.log("brewInfo:", brewInfo.mashing);
    
    return (
        <Container className="text-center">
            <h1>BASICS</h1>
            <BasicInfoCard />
        </Container>
    )
}

export default Basics
