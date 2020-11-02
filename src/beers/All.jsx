import React from 'react'
import BeerList from './BeerList'

function All(props) {
    
    return (
        <div>
            <h1 className="text-center">ALL BEER</h1>
            <BeerList beer={props.beer}/>
        </div>
    )
}

export default All
