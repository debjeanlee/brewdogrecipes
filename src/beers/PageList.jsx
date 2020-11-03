import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'

function PageList(props) {
  
    const [ active, setActive ] = useState(1);
    let items = [];
    for (let x = 1; x < 14; x++) {
        items.push(
            <Pagination.Item 
                key={x}
                active={x === active}
                onClick={ e => {handleClick(e)}}
            >
                {x}
            </Pagination.Item>,
        )
    }

    function handleClick(e){
        setPage(e);
        let page = parseInt(e.target.innerHTML);
        setActive(page);
    }

    function setPage(e){
        props.setPage(parseInt(e.target.innerHTML));    
    }

    function firstPage(){
        props.setPage(1);
        setActive(1);
    }
    
    function lastPage(){
        props.setPage(13);
        setActive(13);
    }

    function nextPage(){
        if (props.page === 13) {
            console.log("HAHA NO MORE")
        } else {
            props.setPage(parseInt(props.page) + 1);
            setActive(active + 1);
        }
    }

    function prevPage(){
        if (props.page === 1) {
            console.log("HAHA NO MORE")
        } else {
            props.setPage(parseInt(props.page) - 1);
            setActive(active - 1);
        }
    }

    


    return (
        <Pagination>
            <Pagination.First onClick={() => {firstPage()}}/>
            <Pagination.Prev onClick={() => {prevPage()}}/>
            {items}
            <Pagination.Next onClick={() => {nextPage()}}/>
            <Pagination.Last onClick={() => {lastPage()}}/>
        </Pagination>
    )
}

export default PageList
