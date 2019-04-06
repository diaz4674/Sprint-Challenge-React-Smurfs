import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div> 
        <div > <Link to = '/smurf-form' > Add a Smurf </Link></div>
        <div> <Link to = '/'>Smurfs </Link> </div>
        </div>
    )
}

export default Navigation;