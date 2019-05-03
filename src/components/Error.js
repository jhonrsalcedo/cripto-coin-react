import React from 'react';

const Error = (props) =>{
    return(
        <p className="error">{props.errorMessage}</p>
    );
}

export default Error;