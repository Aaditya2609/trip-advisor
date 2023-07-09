import React, { useContext } from 'react'
import { ContinentContext } from '../context/ContinentContext'
import { NavLink, useParams } from 'react-router-dom'

function Country() {
    const{continent}=useParams()
    const { continents } = useContext(ContinentContext)
    const Allcountries=continents.find(item=>item.name===continent)
    return (
        <div className=''>
            <h2 className='font-semibold text-2xl m-4 text-purple-600'>Top Countries in {continent} for your next holiday</h2>

            <div className='flex gap-8 items-center justify-center'>
                {Allcountries.countries.map(item =>
                    <NavLink to={`/${continent}/${item.name}`}>
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

export default Country