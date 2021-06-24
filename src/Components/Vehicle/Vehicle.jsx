import React from 'react';
import { useHistory } from 'react-router';
import './Vehicle.css';

const Vehicle = ({ vehicle }) => {
    const { transportType, imgUrl } = vehicle;
    const history = useHistory();
    return (
        <div onClick={() => {
            history.push(`/destination/${transportType}`)
        }} className="vehicle">
            <img src={imgUrl} alt="vehicle" />
            <h2>{transportType}</h2>
        </div>
    );
};

export default Vehicle;