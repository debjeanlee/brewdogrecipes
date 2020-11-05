import React from 'react'
import { NavLink } from 'react-router-dom'
import beerbottle from '../images/beerbottle.png'


function BeerCard(props) {

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const firstBrew = props.beer.first_brewed;
    const month = ((firstBrew.length === 4) ? null : firstBrew.slice(0,2));
    const year = ((firstBrew.length === 4) ? firstBrew : props.beer.first_brewed.slice(3));
    const d = new Date(year, month);
    const monthName = ((month === null) ? "" : months[d.getMonth()]);

    const date = (monthName + " " + year);
    

    function handleClick(){
        props.setSingleBeer(props.beer);
        // console.log("clicked");
    }


    return (
        <div className="card m-2" style={{width: `18em`}}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className="container">
                    <div className="row d-flex align-middle">
                        <img src={beerbottle} className="card-img-top browse-img" alt="" />
                        <span className="card-title col-8 p-0 m-auto lh-2"><strong>{props.beer.name}</strong></span>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row mt-3 col-sm-12 justify-content-end">
                        <h5>{date}</h5>
                    </div>
        
                    <div className="row mt-3 justify-content-between">
                        <span className="pr-1 col"><strong>ABV </strong><br />{props.beer.abv}%</span>
                        <span className="pr-1 col"><strong>IBU </strong><br />{props.beer.ibu}</span>
                        <span className="pr-1 col"><strong>OG </strong><br />{props.beer.target_og}</span>

                    </div>
                </div>
        
                <NavLink className="nav-link btn-light text-center" to={`/id/${props.beer.id}`} onClick={() => {handleClick()}}>See Recipe</NavLink>
            </div>
        </div>
    )
}

export default BeerCard
