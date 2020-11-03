import React from 'react'
import { Container } from 'react-bootstrap'
import { brewInfo } from '../brewinginfo'
import BasicInfoCard from '../beers/BasicInfoCard'
import mashpot from '../images/mashpot.png'
import boiling from '../images/boiling.png'
import fermentation from '../images/fermentation.png'
import conditioning from '../images/conditioning.png'


function Basics() {

    const info = brewInfo;
    // console.log("brewInfo:", brewInfo.mashing);
    
    return (
        <Container className="text-center">
            <h1 className="my-5">BASICS</h1>
            <BasicInfoCard title="Mashing" info={info.mashing} imgURL={mashpot} />
            <BasicInfoCard title="Boiling" info={info.boiling} imgURL={boiling} />
            <BasicInfoCard title="Fermentation" info={info.fermentation} imgURL={fermentation} />
            <BasicInfoCard title="Conditioning" info={info.conditioning} imgURL={conditioning} />
        </Container>
    )
}

export default Basics
