import React, { useState, useEffect } from 'react'

import Spinner from './common/Spinner'

import './PilotList.css'

const PilotList = ({pilotUrls}) => {

    const [pilots, setPilots] = useState([])
    const [loading, setLoading] = useState(true)

    async function getPilots(urls) {
        
            const promises = urls.map(url => fetch(url).then(res => res.json()));
            const pilotObjects = await Promise.all(promises);
            if (pilotObjects.length === 0) {
                return [{name: "No Pilots"}]
            } else {
                return pilotObjects;
            }
        } 
      
    
    
    const displayPilots = (p) => {
        if (loading) {
            return <Spinner />
        } else {
            return (
                p.map((pilot, index) => (
                    <p key={index}>{pilot.name}</p>
                ))
            )
        }     
    }

    useEffect(() => {
        getPilots(pilotUrls).then(pilotArray => {setPilots(pilotArray)}).then(() => setLoading(false))
    }, [])



    return (
        <div>
            
            <div className='pilots'>
                <h4>Pilots</h4>
                {displayPilots(pilots)}
            </div>
        </div>
    )
}

export default PilotList
