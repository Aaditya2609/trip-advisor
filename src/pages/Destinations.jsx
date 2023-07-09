import React, { useContext } from 'react'
import { ContinentContext } from '../context/ContinentContext'
import { NavLink, useParams } from 'react-router-dom'

function Destinations() {
    const{continent}=useParams();
    const{country}=useParams();
    const { continents } = useContext(ContinentContext)
    const selectedContinent = continents.find(cont => cont.name === continent);
    const selectedCountry = selectedContinent.countries.find(ctry => ctry.name === country);
    return (
        <div className=''>
            <h2 className='font-semibold text-2xl m-4 text-purple-600'>Top Destinations in {country} for your next holiday</h2>

            <div className='flex gap-8 items-center justify-center'>
                {selectedCountry.destinations.map(item =>
                    <NavLink to={`/${continent}/${country}/${item.name}`}>
                        <div className='relative flex-col'>
                            <img className='h-48 w-[20rem] rounded-2xl' src={item.image} alt={item.name} />
                            <div className='absolute inset-4 flex items-end justify-left text-white text-xl font-semibold'>
                                {item.name}
                            </div>
                        </div>
                    </NavLink>
                )}
            </div>
    </div >
  )
}

export default Destinations