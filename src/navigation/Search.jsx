import React, { useState } from 'react'
import { FormControl, Button, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import axios from '../beers/axios'

function Search({handleChange, submit}) {

    // const [ input, setInput ] = useState("");
    // const [ results, setResults ] = useState([]);

    // function handleChange(e){
    //     setInput(e.target.value);
    // }
    // console.log(input);

    
    // function submit(){
    //     let str = input.replace(" ", "_");
    //     document.getElementById("searchbeer").value = "";
    //     async function search(input){
    //         const res = await axios.get(`?beer_name=${input}`);
    //         setResults([res.data]);
    //     }
    //     search(str);
    // }
    

    return (
        <div>
            <Row>
                <FormControl type="text" placeholder="Search for a beer" className="mr-sm-2 my-auto" id="searchbeer" onChange={handleChange}/>
                <NavLink to="/search">
                    <Button className="btn btn-light" onClick={submit}>
                        Search
                    </Button>
                </NavLink>
            </Row>
        </div>
    )
}

export default Search
