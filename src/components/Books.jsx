import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Container } from 'react-bootstrap'
import Book from './Book'


function Books({ search }) {

    const [books, setBooks] = useState([])

    const API_KEY = 'AIzaSyDZznaKW5cXgjwQyacQ4UYAj9j363NJUWA'

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=time&printType=all&maxResults=40&key=${API_KEY}`)
            .then(res => setBooks(res.data.items))
            .catch(err => console.log(err))

    }, [])


    const filteredBooks = books.filter((book) => {
        return (
            book.volumeInfo.title.toLowerCase().includes(search.toLowerCase())
        )

    })

    return (
        <div>
            <Container>
                <Row>
                    {
                        filteredBooks.map((book) =>
                            < Book key={book.id} thumbnail={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title} />)
                    }
                </Row>

            </Container>
        </div>
    )
}

export default Books
