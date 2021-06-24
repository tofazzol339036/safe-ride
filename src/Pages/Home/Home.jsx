import React from 'react';
import './Home.css'
import vehicles from '../../data/data';
import Vehicle from '../../Components/Vehicle/Vehicle';
const Home = () => {
    return (
        <div>
            <div className="ride-by">
                {
                    vehicles.map((vehicle) => <Vehicle key={vehicle.id} vehicle={vehicle} />)
                }
            </div>
        </div>
    );
};

export default Home;