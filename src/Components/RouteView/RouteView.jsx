import React from 'react';
import ResultCard from '../ResultCard/ResultCard';
import vehicles from '../../data/data';
import './RouteView.css';

const RouteView = ({ id, direction, setDirection }) => {
    // filtering the info from data respect with prams ID
    const [{ transportType, imgUrl, information }] = vehicles.filter(vehicle => vehicle.transportType === id);
    return (
        <div className="direction-section">
            <ul className="direction">
                <li>{direction?.from}</li>
                <li>{direction?.to}</li>
                <h2>On: {direction?.date}</h2>
            </ul>
            <div className="results">
                {
                    information.map(vehicle => <ResultCard key={vehicle.id} name={transportType} imgUrl={imgUrl} vehicle={vehicle} />)
                }
            </div>
            <button className="search-again" onClick={() => setDirection(null)}>Search Again</button>
        </div>
    );
}

export default RouteView;;