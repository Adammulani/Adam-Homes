import React from 'react'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import "./Properties.css"
export const Properties = () => {
  return (
    <div className='wrapper'>
        <div className="flexColCenter paddings innerWidth properties-container">
            <SearchBar/>
        </div>
    </div>
  )
}
