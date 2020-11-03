import React from 'react'
import beerbottle from '../images/beerbottle.png'
import { Link } from 'react-router-dom'


function BeerCard(props) {

console.log(props);

    return (
        <div className="card m-2" style={{width: `12em`}}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className="row d-flex align-middle">
                    <img src={beerbottle} className="card-img-top browse-img" alt="" />
                    <h5 className="card-title col-8 p-0 my-auto">{props.beer.name}</h5>
                </div>
    
                <div className="row mt-3">
                    <p className="card-text container text-center">{props.beer.tagline}</p>
                </div>
        
                <a href={`/beers/id/${props.beer.id}`} className="btn btn-light">See Recipe</a>
            </div>
        </div>
    )
}

export default BeerCard
