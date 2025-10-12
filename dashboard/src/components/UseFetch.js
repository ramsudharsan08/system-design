import React from 'react'

export default function UseFilter() {
  return <>
     <div className="filter">
        <label>Filter by Type: </label>
        <select value={filterType} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Hatchback">Hatchback</option>
        </select>
      </div> 
  </>
}
