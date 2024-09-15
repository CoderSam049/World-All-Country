import React from 'react'

export default function CountrySearch({setcountryQuery}) {
  return (

            <div className="inputbox">
                <i className="fa-solid fa-magnifying-glass ">&nbsp;&nbsp;</i>
                <input onChange={setcountryQuery} type="text" placeholder="search  for a country.." />


    </div>
  )
}
