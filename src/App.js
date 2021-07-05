import React, { useState } from 'react'
import Header from './components/Header'
import Books from './components/Books'


import './App.css';


function App() {

  const [search, setSearch] = useState('')

  return (
    <div className='w-100 h-100'>
      <Header search={search} setSearch={setSearch} />
      <Books search={search} />
    </div>
  );
}

export default App;
