import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'

function PageList(props) {

    function setPage(e){
        props.setPage(e.target.innerHTML);
    }


    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item onClick={ e => {setPage(e)}}>{1}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{2}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{3}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{4}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item onClick={ e => {setPage(e)}}>{10}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{11}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{12}</Pagination.Item>
            <Pagination.Item onClick={ e => {setPage(e)}}>{13}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
}

export default PageList
