import React, { useContext } from 'react'
import { ContinentContext } from '../context/ContinentContext'
import { NavLink, useParams } from 'react-router-dom'

function Place() {
    const{continent}=useParams();
    const{country}=useParams();
    const{destination}=useParams();
    const { continents } = useContext(ContinentContext)
    const selectedContinent = continents.find(cont => cont.name === continent);
    const selectedCountry = selectedContinent.countries.find(ctry => ctry.name === country);
    const selectedDestination = selectedCountry.destinations.find(dest => dest.name === destination);
    return (
        <div >
            <h1 className='font-bold text-4xl m-4'>{selectedDestination.name}</h1>
            <div className='flex gap-8 items-center justify-center '>
                <div className='pl-28'>
                    <img className="h-[15rem] w-[25rem]  rounded-xl" src={selectedDestination.image}/>
                </div>
                <div className='text-left pr-24'>
                    <div>
                        <strong className="text-purple-600 font-bold">Description: </strong>{selectedDestination.description}
                    </div>
                    <div>
                        <strong className="text-purple-600 font-bold">Ratings: </strong>{selectedDestination.ratings}
                    </div>
                    <div>
                        <strong className="text-purple-600 font-bold">Reviews: </strong>{selectedDestination.reviews}
                    </div>
                    <div>
                        <strong className="text-purple-600 font-bold">Location: </strong>{selectedDestination.location}
                    </div>
                    <div>
                        <strong className="text-purple-600 font-bold">Opening Hours: </strong>{selectedDestination.openingHours}
                    </div>
                    <div>
                        <strong className="text-purple-600 font-bold">Ticket Price: </strong>{selectedDestination.ticketPrice}
                    </div>
                    <NavLink to={selectedDestination.website}>
                        Website
                    </NavLink>
                </div>
                

            </div>
    </div >
  )
}

export default Place