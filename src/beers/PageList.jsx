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
        let firstItem = (page - 1) * 20;
        let lastItem = (page * 20);
        setActivePage(page);
        getItems(firstItem, lastItem, page);
    }

    function getItems(firstItem, lastItem, page){
        let items = [];
        for (let x = firstItem; x < lastItem; x++){
            if (allBeer[x] !== undefined){
                items.push(allBeer[x]);
            }
        }
        setItems(items);
    }

    function firstPage(){
        setActivePage(1);
        getItems(0, 19, 1);
    }
    
    function lastPage(){
        let firstItem = (pageBtns.length - 1) * 20;
        let lastItem = (pageBtns.length * 20);
        setActivePage(pageBtns.length);
        getItems(firstItem, lastItem, pageBtns.length);
    }

    function nextPage(){
        if (activePage === pageBtns.length) {
            console.log("HAHA NO MORE")
        } else {
            let page = activePage + 1;
            let firstItem = (page - 1) * 20;
            let lastItem = (page * 20);
            setActivePage(activePage + 1);
            getItems(firstItem, lastItem, page+1);
        }
    }

    function prevPage(){
        if (activePage === 1) {
            console.log("HAHA NO MORE")
        } else {
            let page = activePage - 1;
            let firstItem = (page - 1) * 20;
            let lastItem = (page * 20);
            setActivePage(activePage - 1);
            getItems(firstItem, lastItem, page-1);
        }
    }

    return (
        <Pagination>
            <Pagination.First onClick={() => {firstPage()}}/>
            <Pagination.Prev onClick={() => {prevPage()}}/>
            {pageBtns}
            <Pagination.Next onClick={() => {nextPage()}}/>
            <Pagination.Last onClick={() => {lastPage()}}/>
        </Pagination>
    )
}

export default PageList
