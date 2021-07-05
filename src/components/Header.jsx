import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'


function Header({ search, setSearch }) {

    return (

        <div className='header-row'>
            <div className='filter'></div>
            <div className='header-info'>
                <div className='header-title'>
                    <h1>SEARCH GOOGLE BOOKS</h1>
                </div>
                <div className='header-search'>
                    <InputGroup>
                        <FormControl placeholder="Search Books" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <InputGroup.Append>
                            <Button variant="outline-primary"><i className="fa fa-search"></i></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
        </div>
    )
}

export default Header
