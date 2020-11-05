import React from 'react'
import { Jumbotron } from 'react-bootstrap'

function Home() {
    return (
        <Jumbotron style={{height: '95vh'}} className="d-flex justify-content-center">
            <h1 className="my-auto hometext">BREW <span className="align-middle hyphen">yourown</span> DOG</h1>
        </Jumbotron>
    )
}

export default Home
