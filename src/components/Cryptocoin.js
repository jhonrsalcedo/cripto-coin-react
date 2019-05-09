import React from 'react';
import PropTypes from 'prop-types';

//Stateless Function Component
const Cryptocoin = ({cryptoCoins}) =>{
    //console.log(cryptoCoins.CoinInfo)

    const {FullName, Name} = cryptoCoins.CoinInfo;
    return(
        <option value={Name}>{FullName}</option>
    );
}

Cryptocoin.propTypes ={
    cryptoCoins: PropTypes.object.isRequired
}

export default Cryptocoin;

