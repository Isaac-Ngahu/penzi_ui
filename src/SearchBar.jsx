import React from 'react'
import { useState } from 'react'
import './SearchBar.css'

function SearchBar({onSearch}) {
    const [searchValue,setSearchValue] = useState("")
    function handleSearch(e){
        setSearchValue(()=>e.target.value)
    }
   function handleSearchSubmit(e){
    e.preventDefault()
    onSearch(searchValue)
   } 
  return (
    <div className='search-area'>
        <form onSubmit={handleSearchSubmit}>
            <input type='text' id='searchValue' value={searchValue} placeholder='search user here' onChange={handleSearch}></input>
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar