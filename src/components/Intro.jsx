import React from 'react';

export default ({ ToHome }) => {
    return (
        <div>
        <img className='logo' src="images/daruma.svg" onClick= {ToHome}/>
        </div>
    )
}

