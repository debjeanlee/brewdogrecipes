import React from 'react'
import { Jumbotron } from 'react-bootstrap'

function Home() {
    return (
        <Jumbotron fluid style={{height: '100vh'}} className="d-flex justify-content-center">
            <h1 className="my-auto">DO <small>yourown</small> DOG</h1>
        </Jumbotron>
    )
}

export default Home
