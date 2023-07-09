import React, { useContext } from 'react'
import { ContinentContext } from '../context/ContinentContext'
import { NavLink } from 'react-router-dom'

function Continents() {
    const { continents } = useContext(ContinentContext)
    return (
        <div className=''>
            <h1 className='font-bold text-4xl m-4'>Welcome to Trip Advisor</h1>
            <h2 className='font-semibold text-2xl m-4 text-purple-600'>Top Continents for your next holiday</h2>

            <div className='flex gap-8 items-center justify-center'>
                {continents.map(item =>
                    <NavLink to={`/${item.name}`}>
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

export default Continents