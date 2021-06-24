import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';


const Map = () => {
    const token = 'pk.eyJ1Ijoicm9qb24iLCJhIjoiY2ttaHBsdm9oMDloZDJ3bXRmNndsZWJlOCJ9.rTMjPPJh669gs8Ld6XxFLg';

    const [viewport, setViewport] = useState({
        latitude: 23.81635,
        longitude: 90.40485,
        zoom: 14,
        width: 800,
        height: 400,
    })

    return (
        <ReactMapGl mapboxApiAccessToken={token} {...viewport} onViewportChange={(nextViewport => setViewport(nextViewport))}></ReactMapGl>
    );
};

export default Map;
