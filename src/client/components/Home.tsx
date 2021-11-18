import React, { useState, useEffect } from 'react';
import ChirpCard from './ChirpCard';
import Compose from './Compose';

const Home = (props: IHomeProps) => {
    const [chirps, setChirps] = useState([]);

    useEffect(() => {
        fetchChirps();
    }, []);

    const fetchChirps = async () => {
        const res = await fetch("/api/chirps");
        const chirps = await res.json();
        setChirps(chirps);
    }

    return (
        <div className="container">
            <div className="row">
                <Compose />
            </div>
            <div className="row">
                {chirps.map(chirp => <ChirpCard key={chirp.id} chirp={chirp}/>) }
            </div>
        </div>
    )
}

interface IHomeProps { }

export default Home