import React from 'react'
import { Col, Jumbotron, Row, Image, Container } from 'react-bootstrap'
import tips from '../../images/tips.png'

function ColumnThree({ beer }) {
    
    // console.log(beer);

    return (
        <Col md={4} sm={6} className="mx-auto">
             <h3 className="solid-btm">PACKAGING</h3>
             <Jumbotron
             className="p-0"
              style={{
                // backgroundImage: `url(${beer.image_url})`, 
                backgroundSize: `35%`, 
                height: `500px`, 
                backgroundRepeat: `no-repeat`, 
                backgroundPosition: `center` 
            }}>
             <Container className="d-flex justify-content-center align-content-center">
                {(beer.image_url === null) ?
                <h3 className="mt-5 pt-5">No Image</h3>
                :
             <Image src={beer.image_url} className="mt-4" style={{height: `450px`}} />
                }
             </Container>
                {/* <Jumbotron className="pt-4 pb-3"
                style={{
                    backgroundImage: `url(${beer.image_url})`, 
                    backgroundSize: `35%`, 
                    height: `500px`, 
                    backgroundRepeat: `no-repeat`, 
                    backgroundPosition: `center` 
                }}>
                </Jumbotron> */}
            </Jumbotron>
        
            <h3 className="solid-btm">BREWER'S TIP</h3>
            <Jumbotron className="py-4">
                <Row className="mb-3">
                    <img className="id-icon mr-3" src={tips} alt="" />
                </Row>
                {beer.brewers_tips}
            </Jumbotron>
            
        </Col>
    )
}

export default ColumnThree
