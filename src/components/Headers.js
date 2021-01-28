import React from 'react';
import PropTypes from 'prop-types';

const Headers = ({titulo}) => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{titulo}</a>
            </div>
        </nav>
      );
}

Headers.propTypes ={
    titulo: PropTypes.string.isRequired,

   
}
 
export default Headers;