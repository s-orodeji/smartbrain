import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () =>{
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 95 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img src="https://cdn4.iconfinder.com/data/icons/medical-outline-3/605/brain-512.png" alt="Logo"/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;