import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'

function PageList({ activePage, setActivePage, setItems, allBeer }) {
  

    let totalPages = Math.ceil(allBeer.length / 20);
    let pageBtns = [];

    for (let x = 1; x < totalPages + 1; x++){
        pageBtns.push(
            <Pagination.Item
                key={x}
                active={x === activePage}
                onClick={ e => {handleClick(e)}}
            >
                {x}   
            </Pagination.Item>,
        )
    }
    

    function handleClick(e){
        let page = parseInt(e.target.innerHTML);
        setActivePage(page);
        
        // setPage(e);
        // let page = parseInt(e.target.innerHTML);
        // setActive(page);
    }


    // function firstPage(){
    //     setPage(1);
    //     setActive(1);
    // }
    
    // function lastPage(){
    //     setPage(13);
    //     setActive(13);
    // }

    // function nextPage(){
    //     if (page === 13) {
    //         console.log("HAHA NO MORE")
    //     } else {
    //         setPage(parseInt(page) + 1);
    //         setActive( + 1);
    //     }
    // }

    // function prevPage(){
    //     if (page === 1) {
    //         console.log("HAHA NO MORE")
    //     } else {
    //         setPage(parseInt(page) - 1);
    //         setActive(active - 1);
    //     }
    // }

    return (
        <Pagination>
            {/* <Pagination.First onClick={() => {firstPage()}}/> */}
            {/* <Pagination.Prev onClick={() => {prevPage()}}/> */}
            {pageBtns}
            {/* <Pagination.Next onClick={() => {nextPage()}}/> */}
            {/* <Pagination.Last onClick={() => {lastPage()}}/> */}
        </Pagination>
    )
}

export default PageList
