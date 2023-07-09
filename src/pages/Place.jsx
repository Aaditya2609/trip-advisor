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
        <div className=''>
            <h1 className='font-bold text-4xl m-4'>{selectedDestination.name}</h1>
            <div>
                <div>
                    <img src={selectedDestination.image}/>
                </div>
                <div>
                    <div>
                        <strong>Description: </strong>{selectedDestination.description}
                    </div>
                    <div>
                        <strong>Ratings: </strong>{selectedDestination.ratings}
                    </div>
                    <div>
                        <strong>Reviews: </strong>{selectedDestination.reviews}
                    </div>
                    <div>
                        <strong>Location: </strong>{selectedDestination.location}
                    </div>
                    <div>
                        <strong>Opening Hours: </strong>{selectedDestination.openingHours}
                    </div>
                    <div>
                        <strong>Ticket Price: </strong>{selectedDestination.ticketPrice}
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