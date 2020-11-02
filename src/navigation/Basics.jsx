import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import { brewInfo } from '../brewinginfo'

function Basics() {

    // const [ info, setInfo ] = useState(brewInfo);

    console.log("brewInfo:", brewInfo.mashing);
    
    return (
        <Container className="text-center">
            <h1>BASICS</h1>
        </Container>
    )
}

export default Basics
