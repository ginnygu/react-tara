import React from 'react';


function Location(props) {

    return (
        <section className="map" id="maparea">
            <h1>Map</h1>
        
            <iframe src={props.mapView} title="maps"></iframe>
        </section>
    )

}
export default Location;