import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'

function PageList(props) {

    // console.log("props page + 1" , props.page);

    function setPage(e){
        props.setPage(e.target.innerHTML);
    }


    return (
        <Pagination>
            <Pagination.First onClick={() => {props.setPage(1)}}/>
            <Pagination.Prev onClick={() => {props.setPage(props.page - 1)}}/>
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
            <Pagination.Next onClick={() => {props.setPage(props.page + 1)}}/>
            <Pagination.Last onClick={() => {props.setPage(13)}}/>
        </Pagination>
    )
}

export default PageList
