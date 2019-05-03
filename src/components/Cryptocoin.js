import React from 'react';

//Stateless Function Component
const Cryptocoin = ({cryptoCoins}) =>{
    //console.log(cryptoCoins.CoinInfo)

    const {FullName, Name} = cryptoCoins.CoinInfo;
    return(
        <option value={Name}>{FullName}</option>
    );
}


export default Cryptocoin;