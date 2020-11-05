import React from 'react'
import { FormControl, Button, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

function Search({handleChange, submit, searchInput}) {



    return (
        <div>
            <Row>
                <FormControl type="text" placeholder="Search for a beer" className="mr-sm-2 my-auto" id="searchbeer" onChange={handleChange}/>
                {(searchInput === "") ? 
                 <Button 
                    className="btn btn-light" 
                    onClick={submit}
                    >
                    Search
                </Button>
                : 
                (<NavLink to="/search">
                    <Button 
                        className="btn btn-light" 
                        onClick={submit}
                        >
                        Search
                    </Button>
                </NavLink>)}
            </Row>
        </div>
    )
}

export default Search
