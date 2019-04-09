import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'
import SmurfLogo from '../imgs/smurf_logo.jpg';

const Navigation = () => {
    return (
        <div className = 'navContainer'> 
            <div className = 'logo'><img src={SmurfLogo} alt="Smurf Logo" className="img-responsive"/></div>
            <div > 
                <Link to = '/smurf-form' > Add a Smurf </Link>
                <Link to = '/'>Smurfs </Link>
            </div>

        </div>
    )
}

export default Navigation;