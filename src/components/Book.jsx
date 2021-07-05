import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'


function Book({ thumbnail, title }) {

    let cuttedTitle = title.replace(/^(.{25}[^\s]*).*/, "$1")

    return (
        <div>
            <Container>
                <Row>
                    <Col style={{ paddingTop: '2rem' }}>
                        <div className='book-card'>
                            <div className='book-card-img'>
                                <img src={thumbnail} alt={title} />
                            </div>
                            <div className='book-card-detail'>
                                <p className='book-card-detail-title'>{cuttedTitle}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Book


