import React, { useState } from 'react'
import { Button, NavLink } from 'react-bootstrap';
import beerbottle from '../images/beerbottle.png'


function BeerCard(props) {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const firstBrew = props.beer.first_brewed;
    const month = firstBrew.slice(0,2);
    const year = firstBrew.slice(3);
    const d = new Date(year, month);
    const monthName = months[d.getMonth()];

    const date = (`${monthName} ${year}`);
    
    // console.log(props.beer);

    function handleClick(){
        props.setSingleBeer(props.beer);
        console.log("clicked");
    }


    return (
        <div className="card m-2" style={{width: `18em`}}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className="row d-flex align-middle">
                    <img src={beerbottle} className="card-img-top browse-img ml-4" alt="" />
                    <span className="card-title col-8 p-0 m-auto lh-2"><strong>{props.beer.name}</strong></span>
                </div>

                <div className="card-body">
                    <div className="row mt-3 justify-content-center">
                        <h5>{date}</h5>
                    </div>
        
                    <div className="row mt-3 justify-content-between">
                        <span className="pr-1"><strong>ABV </strong>{props.beer.abv}%</span>
                        <span className="pr-1"><strong>IBU </strong>{props.beer.ibu}</span>
                        <span className="pr-1"><strong>OG </strong>{props.beer.target_og}</span>

                    </div>
                </div>
        
                <Button onClick={() => {handleClick()}}>See Recipe</Button>
            </div>
        </div>
    )
}

export default BeerCard
