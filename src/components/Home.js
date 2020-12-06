import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from './common/Spinner'

//CSS
import './Home.css'

const Home = () => {

    const [ships, setShips] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axios.get("https://swapi.dev/api/starships")
        .then((res) => {
            setShips(res.data.results)
            console.log(res.data.results)
        }).then(() => setLoading(false))
    }, [])

    const displayShips = () => {
        if (loading) {
            return <Spinner />
        } else {
            return (
                <div className='shipbox'>
                    {ships.map((ship, index) => (
                    <div className='shipCard' key={index}>
                        <Link
                            to={{
                            pathname: '/starship-page',
                            state: ship
                            }}
                            key={ship.name}
                            >
                            {ship.name}
                        </Link>
                    </div>
                ))}
                </div>
                )
        }
    }

    return (
        <div>{displayShips()}</div>
    )
}

export default Home