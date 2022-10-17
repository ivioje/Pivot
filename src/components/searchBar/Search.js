import React from 'react';
import { SearchOutlined } from '@mui/icons-material'
import './search.css'

const Search = () => {
  return (
    <div className='search'>
        <input className='searchbar' type='text' placeholder='Search something...' />
    </div>
  )
}

export default Search