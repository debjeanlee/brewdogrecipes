import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'

function PageList(props) {

    // console.log("props page + 1" , props.page);

    function setPage(e){
        props.setPage(parseInt(e.target.innerHTML));
    }

    function nextPage(){
        if (props.page === 13) {
            console.log("HAHA NO MORE")
        } else {
            props.setPage(parseInt(props.page) + 1)
        }
    }

    function prevPage(){
        if (props.page === 1) {
            console.log("HAHA NO MORE")
        } else {
            props.setPage(parseInt(props.page) - 1)
        }
    }


    return (
        <Pagination>
            <Pagination.First onClick={() => {props.setPage(1)}}/>
            <Pagination.Prev onClick={() => {prevPage()}}/>
            <Pagination.Item onClick={ e => {setPage(e)}}>{1}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{2}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{3}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{4}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{5}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{6}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{7}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{8}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{9}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{10}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{11}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{12}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{13}</Pagination.Item>
            <Pagination.Next onClick={() => {nextPage()}}/>
            <Pagination.Last onClick={() => {props.setPage(13)}}/>
        </Pagination>
    )
}

export default PageList
