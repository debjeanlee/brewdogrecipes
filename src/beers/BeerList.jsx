import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import BeerCard from './BeerCard';
import PageList from './PageList';

function BeerList(props) {
   
    let allBeer = props.allBeer;

    const [ activePage, setActivePage ] = useState(1);
    const [ activeItems, setItems ] = useState([]);

    useEffect(() => {
        let twentyItems = [];
        for (let i = 0; i < 20; i++){
            twentyItems.push(allBeer[i]);
        }
            setItems(twentyItems);
        },[])

    // console.log("20 items:", activeItems);
    // console.log("beerlist: ", allBeer);

    if (allBeer.length <= 20) {
        return (
            <Row className="mx-auto">
                {allBeer.map((el) => (
                    <BeerCard 
                    beer={el} 
                    key={el.id} 
                    setSingleBeer={props.setSingleBeer}
                    className="mx-auto"
                    />
                    ))}
            </Row>
        )
    } 
    
    else {

        return (
            <>
            <Row className="ml-auto mt-0">
                <PageList 
                    activePage={activePage}
                    setActivePage={setActivePage} 
                    setItems={setItems} 
                    allBeer={allBeer}
                />
            </Row>
                <Row className="mx-auto">
                    {activeItems.map((el) => (
                        <BeerCard 
                        beer={el} 
                        key={el.id} 
                        setSingleBeer={props.setSingleBeer}
                        className="mx-auto"
                        />
                        ))}
                </Row>
            </>
        )
    }

}

export default BeerList
