import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'

function PageList({ activePage, setActivePage, setItems, allBeer }) {
  
    let totalPages = Math.ceil(allBeer.length / 20);
    const [ pageBtns, setBtns ] = useState([]);
          
    useEffect((getItems) => {

        function handleClick(e){
            let page = parseInt(e.target.innerHTML);
            let firstItem = (page - 1) * 20;
            let lastItem = (page * 20);
            setActivePage(page);
            getItems(firstItem, lastItem, page);
        }

        let arr = [];
        if (activePage === 1 || activePage === 2 || activePage === 3){
            for (let x = 1; x < 5; x++){
                arr.push(
                    <Pagination.Item
                    key={x}
                    active={x === activePage}
                    onClick={ e => {handleClick(e)}}
                    >
                        {x}   
                        </Pagination.Item>,
                    )
                }
                arr.push(
                    <Pagination.Ellipsis key="el1"/>
                    );    
        } else if (activePage === totalPages || activePage === totalPages - 1 || activePage === totalPages - 2){
            arr.push(
                <Pagination.Ellipsis key="el1"/>
            );
            for (let x = totalPages - 3; x < totalPages + 1; x++){
                arr.push(
                    <Pagination.Item
                    key={x}
                    active={x === activePage}
                    onClick={ e => {handleClick(e)}}
                    >
                        {x}   
                        </Pagination.Item>,
                    )
                }
        } else {
            arr.push(
                <Pagination.Ellipsis key="el1"/>
            );
                for (let x = activePage - 1; x < activePage + 3; x++){
                    arr.push(
                        <Pagination.Item
                        key={x}
                        active={x === activePage}
                        onClick={ e => {handleClick(e)}}
                        >
                        {x}   
                        </Pagination.Item>,
                )
            }

            arr.push(
                <Pagination.Ellipsis key="el2"/>
            );
        }
        setBtns(arr);
    }, [activePage, setActivePage, totalPages])


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
        let firstItem = (totalPages - 1) * 20;
        let lastItem = (totalPages * 20);
        setActivePage(totalPages);
        getItems(firstItem, lastItem, totalPages);
    }

    function nextPage(){
        if (activePage === totalPages) {
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
