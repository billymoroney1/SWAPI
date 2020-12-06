import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Components
import PilotList from './PilotList'

//CSS

import './StarshipPage.css'

const StarshipPage = ({location}) => {

    console.log(location.state)

    const [ship] = useState(location.state)

    return (
        <div>
            <div className="shipInfo">
                <p>Name: {ship.name}</p>
                <p>Model: {ship.model}</p>
                <p>Manufacturer: {ship.manufacturer}</p>
                <p>Cost: {ship.cost_in_credits}</p>
                <div className='return'>
                    <Link to='/'>Return</Link>
                </div>
            </div>

            <PilotList pilotUrls={ship.pilots} />
        </div>
        
    )
}


export default StarshipPage